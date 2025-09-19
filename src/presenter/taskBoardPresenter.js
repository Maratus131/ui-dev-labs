import TaskListComponent from "../view/taskListComponent.js";
import TaskComponent from "../view/taskComponent.js";
import TaskBoardComponent from "../view/taskBoardComponent.js";
import {render} from "../framework/render.js";

export default class TaskBoardPresenter {
    taskListComponent = new TaskListComponent();

    #boardContainer = null;
    #tasksModel = null;

    #tasksBoardComponent = new TaskBoardComponent();

    #boardTasks = [];

    constructor({boardContainer, tasksModel}) {
        this.#boardContainer = boardContainer;
        this.#tasksModel = tasksModel;
    }

    init() {
        this.#boardTasks = [...this.#tasksModel.getTasks()];

        render(this.#tasksBoardComponent, this.#boardContainer);
        for (let i = 0; i < 4; i++) {
            const tasksListComponent = new TaskListComponent();
            render(tasksListComponent, this.#tasksBoardComponent.getElement());

            for (let j = 0; j < 4; j++) {
                const taskComponent = new TaskComponent({task: this.#boardTasks[j]});
                render(taskComponent, tasksListComponent.getElement());
            }
        }
    }
}