import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { GetPaginatedTodoDto } from './dto/get-paginated-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoService } from './services/todo/todo.service';

@Controller('todo') // Prefix de routage pour l'ensemble des routes du controller
export class TodoController {
  
    // On injecte notre service dans le controller 
    constructor(
        private todoService : TodoService
    ){  
    }

    // Récupération de toutes les todos
    @Get() // On peut définir dans chaque décorateur un pattern de routage
    getTodos(
        @Query() mesQueryParams: GetPaginatedTodoDto
    ){
        console.log(mesQueryParams);
        return this.todoService.getTodos();
    }

    // Récupérer une todo via son id
    @Get(':id')
    getTodoById(
        @Param('id', new ParseIntPipe(
        {
            errorHttpStatusCode: HttpStatus.NOT_FOUND
        }
        )) id
    ){        
        return this.todoService.getTodoById(id);
    }

    // Ajouter une todo
    @Post()
    addTodo(
        // @Body va parser le contenu de l'objet Request et ne récupérer que le body
        @Body() newTodo: AddTodoDto
    ){
        return this.todoService.addTodo(newTodo);   
    }

    // Supprimer une todo
    @Delete(':id')
    deleteTodo(
        @Param('id', ParseIntPipe) id
    ){
        return this.todoService.deleteTodo(id);
    }

    // Mettre à jour une todo
    @Put(':id')
    updateTodo(
        @Param('id', ParseIntPipe) id,
        @Body() uptodo: Partial<AddTodoDto>
    ){
        return this.todoService.updateTodo(id, uptodo);
    }

}
