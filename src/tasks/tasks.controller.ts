//import decorators to use
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
//import the class to be injected into the constructor
import { TasksService } from './tasks.service';
//DTO is imported
import { CreateTaskDto } from './dto/task.dto'

@Controller('tasks')
export class TasksController {
    //The TasksService instance is injected into the constructor so that it can be used in the controller functions.
    constructor(private tasksService: TasksService){
    }

    // the @Get decorator is used to indicate that when a GET request is made
    @Get() 
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    //the @Body is a way to make the request body
    createTask(@Body() newTask: CreateTaskDto) { // ----> DTO
        return this.tasksService.createTask( newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string) {
        return this.tasksService.deleteTask(id)
    }
}
