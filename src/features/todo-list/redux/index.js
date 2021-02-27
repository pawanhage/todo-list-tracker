// action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const LIKE_TODO = "LIKE_TODO";
export const DISLIKE_TODO = "DISLIKE_TODO";
export const SET_ADD_TODO_FORM_STATE = "SET_ADD_TODO_FORM_STATE";

// action creators
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    };
}

export const likeTodo = (id) => {
    return {
        type: LIKE_TODO,
        payload: id
    }
}

export const dislikeTodo = (id) => {
    return {
        type: DISLIKE_TODO,
        payload: id
    }
}

export const setAddTodoFormState = (flag) => {
    return {
        type: SET_ADD_TODO_FORM_STATE,
        payload: flag
    };
}

const initialState = {
    addTodoFormState: true,
    userName: '@pawanhage',
    todoList: []
};

// reducer

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                addTodoFormState: false,
                todoList: [...state.todoList, {
                    id: state.todoList.length + 1,
                    content: action.payload,
                    liked: false,
                    disliked: false,
                }]
            };

        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload)
            }

        case LIKE_TODO:
            let likeIndex = state.todoList.findIndex(item => item.id === action.payload);
            if (likeIndex > -1) {
                const newTodo = { ...state.todoList[likeIndex], liked: true, disliked: false }
                return {
                    ...state,
                    todoList: [
                        ...state.todoList.slice(0, likeIndex),
                        newTodo,
                        ...state.todoList.slice(likeIndex + 1, state.todoList.length)
                    ]
                }
            } else {
                return state;
            }

        case DISLIKE_TODO:
            let dislikeIndex = state.todoList.findIndex(item => item.id === action.payload);
            if (dislikeIndex > -1) {
                const newTodo = { ...state.todoList[dislikeIndex], liked: false, disliked: true }
                return {
                    ...state,
                    todoList: [
                        ...state.todoList.slice(0, dislikeIndex),
                        newTodo,
                        ...state.todoList.slice(dislikeIndex + 1, state.todoList.length)
                    ]
                }
            } else {
                return state;
            }

        case SET_ADD_TODO_FORM_STATE:
            return {
                ...state,
                addTodoFormState: action.payload
            }
        default:
            return state;
    }
}

export default todoListReducer;