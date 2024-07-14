import { OverviewTodosProps, Item } from './Interfaces';
import TodoItem from './TodoItem';

const OverviewTodos = ({
  todoList,
  updateCompletionStatus,
  updateItem,
  deleteItem,
}: OverviewTodosProps) => {
  return (
    <ul>
      {todoList &&
        todoList.map((item: Item) => (
          <TodoItem
            key={item.id}
            item={item}
            updateCompletionStatus={updateCompletionStatus}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))}
    </ul>
  );
};

export default OverviewTodos;
