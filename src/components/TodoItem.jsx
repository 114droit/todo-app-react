function TodoItem(props) {
    return (
        <div className="grid grid-cols-3 bg-red-300 py-4 my-10">
            <input type="checkbox" />
            <span>{props.todo.text}</span>
            <button>Delete</button>
        </div>
    );
}

export default TodoItem;