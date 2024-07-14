import { useState } from 'react';
import { ToDoItemProps } from './Interfaces';
import { MdOutlineExpandCircleDown } from 'react-icons/md';

const TodoItem = ({
  item,
  updateCompletionStatus,
  updateItem,
}: ToDoItemProps) => {
  const [content, setContent] = useState<string>(item.content);
  return (
    <li
      key={item.id}
      className="flex flex-col border-2 bg-tertiary m-4 p-2 text-white shadow-md shadow-secondary rounded-sm"
    >
      <div id="top" className="flex flex-row p-2">
        <span className="mr-2">Done</span>
        <input
          checked={item.isCompleted}
          onChange={(e) => {
            updateCompletionStatus(item.id, e.target.checked);
          }}
          type="checkbox"
          className="before:content[''] checked:primary peer relative mr-4 h-10 w-12 rounded cursor-pointer appearance-none border border-secondary transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 after:absolute after:left-0 after:top-0 after:flex after:h-full after:w-full after:items-center after:justify-center checked:after:text-white checked:after:content-['🎀'] checked:after:text-md"
        />
        <p className="px-4 border-x-2 border-secondary">{item.createdOn}</p>
        <h6 className={`w-full px-4 ${item.isCompleted ? 'line-through' : ''}`}>
          {item.title}
        </h6>
        <MdOutlineExpandCircleDown
          className="cursor-pointer"
          onClick={() => {
            if (
              document
                .getElementById(`bottom_${item.id}`)
                ?.classList.contains('hidden')
            ) {
              document
                .getElementById(`bottom_${item.id}`)
                ?.classList.remove('hidden');
            } else {
              document
                .getElementById(`bottom_${item.id}`)
                ?.classList.add('hidden');
            }
          }}
        />
      </div>
      <div
        id={`bottom_${item.id}`}
        className="border-t-2 border-dotted hidden min-h-20 p-2"
      >
        <input
          type="text"
          className="bg-tertiary w-full"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          onBlur={(e) => {
            updateItem(item.id, { content: e.target.value });
          }}
        />
      </div>
    </li>
  );
};

export default TodoItem;
