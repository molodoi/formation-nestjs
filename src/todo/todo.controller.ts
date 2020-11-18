import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('todo') // Prefix de routage pour l'ensemble des routes du controller
export class TodoController {

    @Get() // On peut définir dans chaque décorateur un pattern de routage
    getTodos(){
        console.log('Récupérer la liste des todos');
        return 'Liste des todos';
    }

    @Post()
    addTodo(){
        console.log('Ajouter une todo à la liste des todos');
        return 'Ajouter une todo à la liste des todos';
    }

    @Delete()
    deleteTodo(){
        console.log('Supprimer une todo de la liste des todos');
        return 'Supprimer une todo de la liste des todos';
    }

    @Put()
    updateTodo(){
        console.log('Mettre à jour une todo de la liste des todos');
        return 'Mettre à jour une todo de la liste des todos';
    }

}
