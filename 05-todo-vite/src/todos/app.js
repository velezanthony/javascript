import todoStore from '../store/todo.store';
import appHTML from './app.html?raw';
import { renderPending } from './use-cases/render-pending';
import { renderTodos } from './use-cases/render.todos';

const ElementIDs = {
    TodoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    destroyTodoBtn: '.destroy',
    clearCompletedBtn : '.clear-completed',
    filterUL : '.filters',
    PendingCountLabel: '#pending-count',
}
/**
 * 
 * @param {string} elementId 
 */
export const App = (elementId) =>{

    const displayTodos = () => {

        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    }
    // Cuando la función App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = appHTML;
        document.querySelector(elementId).append(app);
        
        displayTodos();
    })();

    // Referencias HTML

    const newDescriptionInput = document.querySelector( ElementIDs.newTodoInput);
    const todoListUL = document.querySelector( ElementIDs.TodoList );
    const clearCompletedBtn = document.querySelector( ElementIDs.clearCompletedBtn );
    const todoFilterUL = document.querySelector( ElementIDs.filterUL );
    const todoPending = document.querySelector( ElementIDs.PendingCountLabel  );
    // Listeners

    newDescriptionInput.addEventListener('keyup', (event)=>{
        console.log(event);
        console.log(event.target.value);

        if (event.keyCode !== 13 ) return;
        
        if ( event.target.value.trim().length === 0) return;
        
        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });


    todoListUL.addEventListener('click', (event)=>{

        const element = event.target.closest('[data-id]');
        const elementId = element.getAttribute('data-id');

        if (isDestroyTodoBtn(event)){

            todoStore.deleteTodo( elementId );

        }else{
            
            todoStore.toggleTodo( elementId );
        }
        
        displayTodos();
    });

    /**
     * 
     * @param {Event} event 
     * @returns 
     */
    const isDestroyTodoBtn = (event) => {
        const elementClassName = event.target.className;

        console.log(elementClassName); 
        if ('.' + elementClassName === ElementIDs.destroyTodoBtn){
            return true;
        }

        return false;
    }

    clearCompletedBtn.addEventListener('click', (event)=>{

        const todoToDelete = todoStore.getTodos('Completed');

        todoToDelete.forEach( todo =>{
            todoStore.deleteTodo(todo.id);
        });
        
        displayTodos();
    });

    const filtersLI = todoFilterUL.querySelectorAll('li');
    console.log(filtersLI);

    filtersLI.forEach( (filterBtn, index) => {

            filterBtn.addEventListener( 'click', (event) =>{

            // Revmove current selected            
            todoFilterUL.querySelector('.selected').classList.remove('selected')

            // Add Active class
            event.target.classList.add('selected');

            const FilterNames = Object.getOwnPropertyNames(todoStore.Filters);

            console.log(FilterNames);
            todoStore.setFilter( todoStore.Filters[FilterNames[index]] );

            displayTodos();

        });

    });


}