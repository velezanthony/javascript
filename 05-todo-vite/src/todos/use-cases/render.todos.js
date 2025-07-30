import { Todo } from "../model/todo.model";
import { createTodoHTML } from "./create-todo";

let element;

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = []) => {

    if (!element) element = document.querySelector( elementId );

    if (!element) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append( createTodoHTML( todo ) );
    });
}