import { Injectable } from '@nestjs/common';
//import the class of the entity you want to use as property
//the Enum is also imported
import { Task, TaskStatus } from './task.entity';
//import a module for generating unique ids
import { v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

//the following decorator allows this service/class to be injected elsewhere in the application
@Injectable()
//methods that can be reused
export class TasksService {

    //class property
    //simulates a database
    private tasks: Task[] = [
        {
            id:'1',
            title: "Task 1",
            description: "Finish the course",
            status: TaskStatus.PENDING
        },
    ];
    
    getAllTasks() {
        return this.tasks; //as it is a property the .this is used
    }
    
    createTask(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        };

        this.tasks.push(task);

        return task;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id: string, updatedFields: updateTaskDto): Task {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updatedFields);
        this.tasks.map((task) => (task.id === id ? newTask : task));
        return newTask;
    }
}
