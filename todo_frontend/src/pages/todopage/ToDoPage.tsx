import { useEffect, useState } from 'react';
import AddNewToDo from './components/AddNewToDo';
import OverviewTodos from './components/OverviewTodos';
import SortTodos from './components/SortTodos';
import CompletedFilter from './components/CompletedFilter';

const ToDoPage = () => {
  const [todoList, setTodoList] = useState<Item[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [params, setParams] = useState<Params>({ showCompleted: true });

  const fetchToDoList = () => {
    fetch(`http://localhost:8080/api/v1/todos${createParams()}`)
      .then((response) => response.json())
      .then((data) => {
        if (data != null) {
          setTodoList(data);
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  const createParams = () => {
    let path = '?';
    const keys = Object.keys(params);
    keys.forEach((key, index) => {
      path += key + '=' + params[key] + `${keys.length === index ? '' : '&'}`;
    });
    return path;
  };

  useEffect(() => {
    fetchToDoList();
  }, [refresh, params]);

  const postToDoItem = (postData: Postdata) => {
    fetch('http://localhost:8080/api/v1/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error('Something went wrong: ', error);
      });
  };

  const patchTodo = (id: number, patchBody: PatchBody) => {
    fetch(`http://localhost:8080/api/v1/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patchBody),
    })
      .then((response) => response.json())
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error('Something went wrong: ', error);
      });
  };

  const updateCompletionStatus = (id: number, isChecked: boolean) => {
    patchTodo(id, { isCompleted: isChecked });
  };

  const updateFilter = (filtername: string, filtervalue: string | boolean) => {
    setParams((prev) => ({
      ...prev,
      [filtername]: filtervalue,
    }));
  };

  return (
    <div className="text-3xl h-screen flex flex-col font-arsenal">
      <AddNewToDo postToDoItem={postToDoItem} />
      <SortTodos updateFilter={updateFilter} />
      <CompletedFilter
        updateFilter={updateFilter}
        showCompleted={params.showCompleted}
      />
      <OverviewTodos
        todoList={todoList}
        updateCompletionStatus={updateCompletionStatus}
      />
    </div>
  );
};

// interfaces
interface Postdata {
  title: string;
  content: string;
}

interface PatchBody {
  title?: string;
  content?: string;
  isCompleted?: boolean;
}

interface Params {
  title?: string;
  date?: string;
  sortBy?: string;
  showCompleted: boolean;
  [key: string]: string | boolean | undefined;
}

interface Item {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
  createdOn: string;
}

export default ToDoPage;
