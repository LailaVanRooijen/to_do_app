export interface Postdata {
  title: string;
  content: string;
}

export interface PatchBody {
  title?: string;
  content?: string;
  isCompleted?: boolean;
}

export interface Params {
  title?: string;
  date?: string;
  sortBy?: string;
  showCompleted: boolean;
  [key: string]: string | boolean | undefined;
}

export interface Item {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
  createdOn: string;
}

export interface updateCompletionStatus {
  (id: number, isChecked: boolean): void;
}

export interface updateItem {
  (id: number, patchBody: PatchBody): void;
}

export interface deleteItem {
  (id: number): void;
}

// component props
export interface OverviewTodosProps {
  todoList: Item[];
  updateCompletionStatus: updateCompletionStatus;
  updateItem: updateItem;
  deleteItem: deleteItem;
}

export interface AddNewToDoProps {
  postToDoItem: (Postdata: Postdata) => void;
}

export interface SortToDosProps {
  updateFilter: (filtername: string, sortBy: string) => void;
}

export interface CompletedFilterProps {
  updateFilter: (filtername: string, showCompleted: boolean) => void;
  showCompleted: boolean;
}

export interface ToDoItemProps {
  item: Item;
  updateCompletionStatus: updateCompletionStatus;
  updateItem: updateItem;
  deleteItem: deleteItem;
}
