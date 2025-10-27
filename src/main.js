import HeaderComponent from './view/headerComponent.js';
import AddTaskFormComponent from './view/addTaskFormComponent.js';

import {render, RenderPosition} from './framework/render.js';
import TaskBoardPresenter from './presenter/taskBoardPresenter.js';
import TasksModel from './model/taskModel.js';
import TasksApiService from './tasksApiService.js';


const END_POINT = 'https://68ff898ce02b16d1753e6306.mockapi.io';
const headerContainer = document.querySelector('.header');

const addTaskContainer = document.querySelector('.addTaskForm')
const taskBoardContainer = document.querySelector('.container');

const tasksModel = new TasksModel({
    tasksApiService: new TasksApiService(END_POINT)
});
const taskBoardPresenter = new TaskBoardPresenter({boardContainer: taskBoardContainer, tasksModel});

const formAddTaskComponent = new AddTaskFormComponent({
    onClick: handleNewTaskButtonClick
});

function handleNewTaskButtonClick() {
    taskBoardPresenter.createTask();
}

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
render(formAddTaskComponent, addTaskContainer,RenderPosition.BEFOREBEGIN);

taskBoardPresenter.init();