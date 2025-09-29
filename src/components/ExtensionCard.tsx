type Props = {
  data: {
    id: string;
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
  };
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export function ExtensionCard({ data, onToggle, onRemove }: Props) {
  return (
    <div
      key={data.id}
      className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-800 dark:border-neutral-600"
    >
      <div className="p-4 md:p-5">
        <div className="flex flex-row gap-x-3 pb-6 lg:pb-10 h-[100px]">
          <div>
            <img src={data.logo} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-neutral-100">
              {data.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={() => onRemove(data.id)}
            className="px-3.5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-3xl hover:bg-red-700 transition-all duration-300 ease-in-out hover:text-neutral-100 text-sm dark:hover:bg-red-500 dark:text-neutral-200 text-neutral-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-neutral-100 dark:focus:bg-neutral-600 focus:ring-offset-1 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-800"
          >
            Remove
          </button>
          <label
            htmlFor={data.id}
            className="relative inline-block w-9 h-5 cursor-pointer"
          >
            <input
              onChange={() => onToggle(data.id)}
              checked={data.isActive}
              type="checkbox"
              id={data.id}
              className="peer sr-only"
            />
            <span className="absolute inset-0 bg-neutral-300 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-red-700 hover:peer-checked:bg-red-500 dark:bg-neutral-600 dark:peer-checked:bg-red-400 dark:hover:peer-checked:bg-red-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:ring-2 peer-focus:ring-red-500 peer-focus:ring-offset-1 dark:peer-focus:ring-offset-neutral-800 peer-focus:ring-offset-neutral-50"></span>
            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-4 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
