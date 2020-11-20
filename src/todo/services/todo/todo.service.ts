import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from 'src/todo/dto/add-todo.dto';
import { TodoEntity } from 'src/todo/entities/todo.entity';

@Injectable()
export class TodoService {
    todos: TodoEntity[] = [];

    getTodos(): TodoEntity[]{
        return this.todos;
    }

    addTodo(newTodo: AddTodoDto) : TodoEntity{
        // On récupère le title et la description
        const {title, description} = newTodo;
        // On déclare une variable id
        let id;
        // Si il y a des todos dans le tableau de todos != 0
        if (this.todos.length) {
            // J'affecte je récupère le dernier élément de mon tableau todos et j'incrémente id de 1
            id = this.todos[this.todos.length - 1].id + 1;
        } else {
            // Sinon il n'y a pas de todos id = 1
            id = 1;
        }
        // Je crée mon todo
        const todo = {
            id,
            title,
            description,
            createdAt: new Date()
        };
        // Je push mon todo dans le tableau de todos
        this.todos.push(todo);

        return todo;
    }

    getTodoById(id: number): TodoEntity {
        // On va récupérer notre todo par rapport à l'id transmis en paramètre
        const todo = this.todos.find((actualTodo) => actualTodo.id === id);
        if (todo)
            return todo;
        throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
    }
    
    deleteTodo(id: number) {
        // Chercher l'objet via son id dans le tableau des todos
        const index = this.todos.findIndex((todo) => todo.id === +id);
        // Utiliser la méthode splice pour supprimer le todo s'il existe
        if (index >= 0 ) {
            this.todos.splice(index, 1);
        } else {
            throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
        }
        // Sinon je vais déclencher une erreur
        return {
            message : `Le todo d'id ${id} a été supprimé avec succès`,
            count: 1
        };
    }
    
    updateTodo(id:number, newTodo: Partial<TodoEntity>) {
        // Chercher l'objet via son id dans le tableau des todos
        const todo = this.getTodoById(id);
        todo.description = newTodo.description ? newTodo.description : todo.description;
        todo.title = newTodo.title ? newTodo.title : todo.title;
        return todo;
    }
}
