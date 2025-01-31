import useTodoStore from './TodoStore';

function TodoItem(props) {
    const {deleteTodo, toggleTodo} = useTodoStore();
    return (
        <div className={`grid grid-cols-3 ${props.todo.completed ? 'bg-green-300' : 'bg-red-300'} py-4 my-10 w-2/3 mx-auto`}>
            <input type="checkbox" onChange={() => toggleTodo(props.todo.id)} />
            <span>{props.todo.text}</span>
            <button id="delete" className="border-1 mx-auto p-1" onClick={() => deleteTodo(props.todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;