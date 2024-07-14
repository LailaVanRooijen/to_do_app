import { CompletedFilterProps } from './Interfaces';

const CompletedFilter = ({
  updateFilter,
  showCompleted,
}: CompletedFilterProps) => {
  return (
    <div className="w-1/12 flex justify-center border-2 p-2 ml-4 border-tertiary">
      <label htmlFor="show_completed" className="text-sm mr-2">
        show completed
      </label>
      <input
        name="show_completed"
        type="checkbox"
        checked={showCompleted}
        className="before:content[''] before:bg-blue-gray-500 checked:primary peer relative mr-2 h-5 w-5 cursor-pointer appearance-none rounded-sm border border-primary transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity after:absolute after:left-0 after:top-0 after:flex after:h-full after:w-full after:items-center after:justify-center checked:after:text-white checked:after:content-['🎀'] hover:before:opacity-10 text-sm"
        onChange={(e) => {
          updateFilter('showCompleted', e.target.checked);
        }}
      />
    </div>
  );
};

export default CompletedFilter;
