import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { TodoEntity } from './entities/todo.entity';

@Controller('todo') // Prefix de routage pour l'ensemble des routes du controller
export class TodoController {
    
    todos: TodoEntity[];

    constructor(){
        this.todos = [];    
    }

    // Récupération de toutes les todos
    @Get() // On peut définir dans chaque décorateur un pattern de routage
    getTodos(){
        return this.todos;
    }

    // Récupérer une todo via son id
    @Get(':id')
    getTodoById(
        @Param('id') id
    ){
        // On va récupérer notre todo par rapport à l'id transmis en paramètre
        const todo = this.todos.find((actualTodo) => actualTodo.id === +id);
        if (todo)
            return todo;
        throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
    }

    // Ajouter une todo
    @Post()
    addTodo(
        // @Body va parser le contenu de l'objet Request et ne récupérer que le body
        @Body() newTodo: TodoEntity
    ){
        // Si il y a des todos dans le tableau de todos != 0
        if (this.todos.length) {
            // J'affecte je récupère le dernier élément de mon tableau todos et j'incrémente id de 1
            newTodo.id = this.todos[this.todos.length - 1].id + 1;
        } else {
            // Sinon il n'y a pas de todos id = 1
            newTodo.id = 1;
        }
        // Je push mon todo dans le tableau de todos
        this.todos.push(newTodo);
        return newTodo;
    }

    // Supprimer une todo
    @Delete(':id')
    deleteTodo(
        @Param('id') id
    ){
        // Chercher l'objet via son id dans le tableau des todos
        const index = this.todos.findIndex((todo:TodoEntity) => todo.id === +id);
        // Utiliser la methode slice() pour supprimer le todo s'il existe
        if(index >= 0){
            this.todos.splice(index, 1);
        }else{
            throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
        }

        return {
            message: `Le todo d'id ${id} a été supprimé`,
            count: 1
        };
    }

    // Mettre à jour une todo
    @Put(':id')
    updateTodo(
        @Param('id') id,
        @Body() uptodo: Partial<TodoEntity>
    ){
        // Chercher l'objet via son id dans le tableau des todos
        const todo = this.getTodoById(id);
        todo.title = uptodo.title ? uptodo.title : todo.title;
        todo.description = uptodo.description ? uptodo.description : todo.description;
        return todo;
    }

}
