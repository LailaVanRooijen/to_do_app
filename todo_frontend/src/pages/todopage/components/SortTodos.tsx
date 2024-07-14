const SortTodos = ({ updateFilter }: Props) => {
  return (
    <>
      <select
        onChange={(e) => {
          updateFilter('sortBy', e.target.value);
        }}
        name="sort"
        id="sort"
        className="border-2 border-tertiary bg-white rounded-sm p-2 text-sm self-end mr-4 cursor-pointer"
      >
        <option value="date_ascend">Newest first</option>
        <option value="date_descend">Oldest first</option>
        <option value="alphabet">Alphabet a-z</option>
      </select>
    </>
  );
};

//interfaces
interface Props {
  updateFilter: (filtername: string, sortBy: string) => void;
}

export default SortTodos;
