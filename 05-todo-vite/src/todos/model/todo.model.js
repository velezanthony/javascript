import { uuid } from "../../store/uuid";

export class Todo{

    /**
     * 
     * @param {string} description 
     */
    constructor(description){
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}