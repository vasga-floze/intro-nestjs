//exported for later use
export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

//exported for later use
//these classes can be transformed into tables in a DB, using ORMs
export class Task {
    id: string
    title: string
    description: string
    status: TaskStatus //reference to the enum declared above
}
