import useTodoStore from './TodoStore';

function TodoForm() {
    const {addTodo, getNewTodo} = useTodoStore();
    return (
        <form className="flex justify-center mt-30 mb-20 mx-10 gap-4">
            <input className="bg-gray-100 border- shadow-lg shadow-gray-100/30 p-1" type="text" placeholder="Enter a Todo" onChange={(event) => getNewTodo(event.target.value)}/>
            <button className="bg-blue-500 text-white shadow-lg shadow-blue-500/30 border-b-3 border-blue-900 rounded-sm p-1" onClick={(event) => addTodo(event)}>Add Todo</button>
        </form>
    );
}

export default TodoForm;