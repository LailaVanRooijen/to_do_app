import { OverviewTodosProps, Item } from './Interfaces';
import TodoItem from './TodoItem';

const OverviewTodos = ({
  todoList,
  updateCompletionStatus,
  updateItem,
}: OverviewTodosProps) => {
  return (
    <ul>
      {todoList &&
        todoList.map((item: Item) => (
          <TodoItem
            item={item}
            updateCompletionStatus={updateCompletionStatus}
            updateItem={updateItem}
          />
        ))}
    </ul>
  );
};

export default OverviewTodos;
