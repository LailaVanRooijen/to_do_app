import { useState } from 'react';

const AddNewToDo: React.FC<Props> = ({ postToDoItem }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title !== '') {
      postToDoItem({ title: title, content: content });
      setTitle('');
      setContent('');
    } else {
      console.log('empty form');
    }
  };

  return (
    <div className="p-8 justify-center flex">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-3/4 p-4 justify-center items-center rounded-sm bg-tertiary border-2 shadow-md shadow-secondary "
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-2 w-full rounded-md"
          type="text"
          value={title}
          placeholder="Title"
        />
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          className="p-2 w-full m-2 h-36 rounded-md resize-none"
          placeholder="Additional information"
        />
        <button
          className="px-4 py-2 w-fit rounded-sm bg-secondary text-tertiary hover:bg-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// interfaces
interface Postdata {
  title: string;
  content: string;
}

interface Props {
  postToDoItem: (Postdata: Postdata) => void;
}

export default AddNewToDo;
