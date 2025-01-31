import useTodoStore from './TodoStore';

function TodoItem(props) {
    const {deleteTodo, toggleTodo, editTodo} = useTodoStore();
    return (
        <div className={`grid grid-cols-4 ${props.todo.completed ? 'bg-green-300' : 'bg-red-300'} py-4 my-10 w-2/3 mx-auto`}>
            <input type="checkbox" onChange={() => toggleTodo(props.todo.id)} />
            <span>{props.todo.text}</span>
            <button id="edit" className="bg-purple-500 border-1 mx-auto p-1" onClick={() => editTodo(props.todo.id)}>Edit</button>
            <button id="delete" className="bg-red-500 border-1 mx-auto p-1" onClick={() => deleteTodo(props.todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;