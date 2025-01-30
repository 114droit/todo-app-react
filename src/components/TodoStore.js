import {create} from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    newTodo: '',
    setNewTodo: (value) => set({ newTodo: value }),
    addTodo: (event) => 
        event.preventDefault() ||
        set((state) => {
            if (state.newTodo) {
                set({
                    todos: [...state.todos, { id: state.todos.length + 1, text: state.newTodo, completed: false }],
                    newTodo: ''
                });
                return todos;
            }
            else {
                alert('Please enter a todo');
                return state;
            }
    })
}));

export default useTodoStore;