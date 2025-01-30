import TodoItem from "./TodoItem";
import useTodoStore from "./TodoStore";

function TodoList() {
    return (
        <div>
            {useTodoStore((state) => state.todos).map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );

} export default TodoList;