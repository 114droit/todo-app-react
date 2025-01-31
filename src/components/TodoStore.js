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
                return state.todos;
            }
            else {
                alert('Please enter a todo');
                return state;
            }
        }),

    deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

    toggleTodo: (id) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) })),

    editTodo: (id) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, text: prompt('Edit Todo', "New Todo")} : todo) }))
}));

export default useTodoStore;