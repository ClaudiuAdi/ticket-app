import { MessagesFilters } from '.';

const MessagesTableFilters = ({ setOptions }) => {
  return (
    <div className="bg-white border rounded shadow-lg p-4 flex flex-col lg:gap-0 gap-4 justify-between">
      <section className="flex flex-wrap items-center gap-2 mb-4 border-b pb-4 -mx-4 px-4">
        <h3 className="font-semibold text-lg md:text-xl flex-grow">Filtrează tichete</h3>
      </section>
      <MessagesFilters setOptions={setOptions} />
    </div>
  );
};

export default MessagesTableFilters;
