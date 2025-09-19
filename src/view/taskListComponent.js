import { createElement } from '../framework/render.js';
import { Status, StatusLabel } from '../const.js';

function createTaskListComponentTemplate(task) {
    
    return (
        
        `   <div class=${Status}>
                <h3 class=${StatusLabel}>${StatusLabel}</h3>
            </div>`
    );
}

export default class TaskListComponent {
    getTemplate() {
        return createTaskListComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }


        return this.element;
    }


    removeElement() {
        this.element = null;
    }
}
