import { ThemeProvider } from "./context/ThemeProvider";
import { NavBar } from "./components/NavBar";

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
      <div className="dark:bg-dark-gradient bg-light-gradient h-screen py-8 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <NavBar />
          <div className="pt-12 flex flex-row justify-between">
            <h2 className="text-3xl dark:text-neutral-0 text-neutral-900">
              Extensions list
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
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
