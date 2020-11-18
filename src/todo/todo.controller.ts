import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('todo') // Prefix de routage pour l'ensemble des routes du controller
export class TodoController {

    @Get() // On peut définir dans chaque décorateur un pattern de routage
    getTodos(
        // Içi nous utilisons les objets Request et Response d'express pour l'exemple
        // Mais nous verrons plus tard d'autres Decorator plus appropriés
        @Req() request: Request,
        @Res() response: Response
    ){

        // Toute la liste des propriétés Request d'express 
        // https://expressjs.com/en/api.html#req
        console.log(request);
        console.log(request.hostname);
        console.log(request.method);
        console.log(request.ip);

        // Toute la liste des propriétés Response d'express 
        // https://expressjs.com/en/api.html#res
        console.log(response);
        response.status(205);
        response.json({
            content:'mon contenu'
        })
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
