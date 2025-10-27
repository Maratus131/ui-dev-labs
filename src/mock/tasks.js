export const tasks = [
    {
        id: '1',
        title: 'Приготовить кушать',
        status: 'backLog',
    },
    {
        id: '2',
        title: 'Помыть полы',
        status: 'backLog',
    },
    {
        id: '3',
        title: 'Устроиться на работу',
        status: 'backLog',
    },
    {
        id: '4',
        title: 'Выучить Java',
        status: 'inProcess',
    },
    {
        id: '5',
        title: 'Выучить Spring',
        status: 'inProcess',
    },
    {
        id: '6',
        title: 'Посетить пары',
        status: 'trash',
    },
    {
        id: '7',
        title: 'Сходить в кино',
        status: 'trash'
    }
]

export const UserAction = {
    UPDATE_TASK: 'UPDATE_TASK',
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    LOADING_START: 'LOADING_START',
    LOADING_END: 'LOADING_END'
};

export const UpdateType = {
    PATCH: 'PATCH',
    MINOR: 'MINOR',
    MAJOR: 'MAJOR',
    INIT: 'INIT'
};