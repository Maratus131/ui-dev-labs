import TaskListComponent from "../view/taskListComponent.js";
import TaskComponent from "../view/taskComponent.js";
import TaskBoardComponent from "../view/taskBoardComponent.js";
import { render } from "../framework/render.js";
import { Status, StatusLabel } from "../const.js";
import ClearButtonComponent from "../view/clearButtonComponent.js";

export default class TaskBoardPresenter {
    taskListComponent = new TaskListComponent();

    #clearBtnComponent = new ClearButtonComponent();
    #boardContainer = null;
    #tasksModel = null;

    #tasksBoardComponent = new TaskBoardComponent();

    #boardTasks = [];

    constructor({ boardContainer, tasksModel}) {
        this.#boardContainer = boardContainer;
        this.#tasksModel = tasksModel;
    }

    init() {
        this.#boardTasks = [...this.#tasksModel.getTasks()];

        render(this.#tasksBoardComponent, this.#boardContainer);
        Object.values(Status).forEach(element => {
            const tasksListComponent = new TaskListComponent(element, StatusLabel[element]);
            render(tasksListComponent, this.#tasksBoardComponent.getElement());

            const filteredTasks = this.#boardTasks.filter(task => task.status === element); 

            for (let j = 0; j < filteredTasks.length; j++) {
                const taskComponent = new TaskComponent({ task: filteredTasks[j] });
                render(taskComponent, tasksListComponent.getElement());
            }

            if (element === Status.TRASH) {
                render(this.#clearBtnComponent, tasksListComponent.getElement());
            }
        });
    }
}