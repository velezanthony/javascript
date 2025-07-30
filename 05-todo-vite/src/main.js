import './style.css';
import { App } from './todos/app';
import todoStore from './store/todo.store';
todoStore.initStore();
todoStore.setFilter('All')
App('#app');
