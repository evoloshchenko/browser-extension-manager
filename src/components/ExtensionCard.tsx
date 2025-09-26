type Props = {
  data: {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
  };
};

export function ExtensionCard({ data }: Props) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-800 dark:border-neutral-600">
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
        <div className="flex justify-between mt-auto">
          <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-2xl text-sm dark:text-neutral-200 text-neutral-800">
            Remove
          </button>
          <label
            htmlFor="hs-basic-usage"
            className="relative inline-block w-11 h-6 cursor-pointer"
          >
            <input
              checked={data.isActive}
              type="checkbox"
              id="hs-basic-usage"
              className="peer sr-only"
            />
            <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-red-600 dark:bg-neutral-700 dark:peer-checked:bg-red-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
