import { Todo } from "../todos/model/todo.model";


const Filters = {
    All: 'All',
    Pending: 'Pending',
    Completed: 'Completed',
    
};


/**
    * @typedef {Object} State
    * @property {Todo[]} todos
    * @property {'All' | 'Completed' | 'Pending'} filter
*/
const state = {
    todos: [
        new Todo('Piedra del espacio'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra de la realidad'),
        new Todo('Piedra del poder'),
        new Todo('Piedra de la mente'),
        new Todo('Piedra del alma')
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStorage();
}

const loadStorage = () => {
    if ( !localStorage.getItem('state') ) return;

    const {todos = [] , filter = Filters.All } = JSON.parse( localStorage.getItem( 'state' ) );

    state.todos = todos;
    state.filter = filter;
    console.log(state.todos);
}

const saveStateToLocalStorage = () => {
     
    localStorage.setItem('state', JSON.stringify(state));
}


const loadStore = () => {

    saveStateToLocalStorage();
}

/**
 * @param {'All' | 'Completed' | 'Pending'} filter 
 */
const getTodos = (filter = Filters.All) => {
    switch ( filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default : 
            throw new Error(`Option ${ filter } is not valid`);
    }

}

/**
 * 
 * @param {string} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');

    const newTodo = new Todo(description);
    state.todos.push(newTodo);

    saveStateToLocalStorage();
}

/**
 * 
 * @param {string} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo=>{
        if (todo.id == todoId){
            todo.done = !todo.done;
            
        }
        saveStateToLocalStorage();
        return todo;
    });
}

/**
 * 
 * @param {string} todoId 
 * @returns 
 */
const deleteTodo = (todoId) => {

    const index = state.todos.findIndex(todo => todo.id === todoId);
    if (index === -1) throw new Error(`Option ${todoId} doen´t exist in todo list`);

    state.todos.splice(index , 1 );

    saveStateToLocalStorage();
}

/**
 * Establece el filtro actual
 * @param {'All' | 'Completed' | 'Pending'} newFilter 
 */
const setFilter = (newFilter = Filters.All) =>{
    const names = Object.getOwnPropertyNames(Filters);
    if ( !names.includes(newFilter) ) throw new Error(`Option: ${newFilter} is not valid`);
    
    state.filter = newFilter;
}

const getCurrentFilter = () =>{
    return state.filter;
}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    getCurrentFilter,
    Filters,
};