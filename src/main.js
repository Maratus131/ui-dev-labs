import HeaderComponent from './view/headerComponent.js';
import AddTaskFormComponent from './view/addTaskFormComponent.js';
import TaskBoardComponent from './view/taskBoardComponent.js';
import TaskListComponent from './view/taskListComponent.js';
import TaskComponent from './view/taskComponent.js';
import {render, RenderPosition} from './framework/render.js';

const headerContainer = document.querySelector('.header');
const addTaskFormContainer= document.querySelector('.addTaskForm');
const taskBoardContainer = document.querySelector('.container');

const taskBoardComponent = new TaskBoardComponent();

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
render(new AddTaskFormComponent(), addTaskFormContainer, RenderPosition.BEFOREBEGIN);

render(taskBoardComponent, taskBoardContainer);


for (let j=0; j<4;j++) {
    const taskListComponent = new TaskListComponent();

    render(taskListComponent, taskBoardComponent.getElement());

    for (let i=0;i<4;i++) {
        render(new TaskComponent(), taskListComponent.getElement());
    }

}
