import useTodoStore from './TodoStore';

function TodoForm() {
    const {addTodo, setNewTodo} = useTodoStore();
    return (
        <form className="flex justify-center my-10 mx-10 gap-4">
            <input className="bg-gray-200 border-1 border-gray-400 p-1" type="text" placeholder="Enter a Todo" onChange={(event) => setNewTodo(event.target.value)}/>
            <button className="border-1 p-1" onClick={(event) => addTodo(event)}>Add Todo</button>
        </form>
    );
}

export default TodoForm;