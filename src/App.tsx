import { ThemeProvider } from "./context/ThemeProvider";
import { NavBar } from "./components/NavBar";
import { ExtensionCard } from "./components/ExtensionCard";
import data from "./data.json";

function App() {
  const filterButtons = [
    {
      title: "All",
      active: true,
    },
    {
      title: "Active",
    },
    {
      title: "Inactive",
    },
  ];

  return (
    <ThemeProvider>
      <div className="dark:bg-dark-gradient bg-light-gradient py-8 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <NavBar />
          {/* Filter Panel */}
          <div className="pt-12 flex flex-row justify-between">
            <h2 className="text-xl font-semibold tracking-wide dark:text-neutral-0 text-neutral-900">
              Extensions List
            </h2>
            <div className="flex gap-x-4">
              {filterButtons.map((b, i) => (
                <button
                  key={i}
                  className={
                    b.active
                      ? "px-4 dark:bg-red-500 text-sm dark:text-neutral-900 bg-red-700 text-neutral-100 rounded-3xl"
                      : "px-4 dark:bg-neutral-700 dark:border-transparent bg-neutral-50 border border-neutral-200 text-neutral-600 text-sm dark:text-neutral-50 rounded-3xl"
                  }
                >
                  {b.title}
                </button>
              ))}
            </div>
          </div>
          {/* Extensions grid */}
          <div className="grid py-4 lg:py-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((el) => (
              <ExtensionCard data={el} />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
