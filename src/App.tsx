import { ThemeProvider } from "./context/ThemeProvider";
import { NavBar } from "./components/NavBar";
import { ExtensionCard } from "./components/ExtensionCard";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [extensions, setExtensions] = useState(data || []);
  const [filter, setFilter] = useState("All");

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

  const filteredExtensions = extensions.filter((extension) => {
    switch (filter) {
      case "Active":
        return extension.isActive;
      case "Inactive":
        return !extension.isActive;
      case "All":
      default:
        return true;
    }
  });

  function handleToggleActive(id: string) {
    setExtensions((prevExt) =>
      prevExt.map((extension) =>
        extension.id === id
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  }

  function handleRemove(id: string) {
    setExtensions((prevExt) =>
      prevExt.filter((extension) => extension.id !== id)
    );
  }

  return (
    <ThemeProvider>
      <div className="dark:bg-dark-gradient bg-light-gradient min-h-screen py-8 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <NavBar />
          {/* Filter Panel */}
          <div className="lg:pt-12 pt-8 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <h2 className="text-xl lg:text-3xl font-semibold tracking-wide dark:text-neutral-0 text-neutral-900">
              Extensions List
            </h2>
            <div className="flex gap-x-4 justify-between py-4 lg:py-0">
              {filterButtons.map((b, i) => (
                <button
                  key={i}
                  onClick={() => setFilter(b.title)}
                  className={
                    b.title === filter
                      ? "px-4 py-1 lg:py-1.5 dark:bg-red-500 text-md dark:text-neutral-900 border border-red-700 bg-red-700 hover:bg-red-500 text-neutral-50 rounded-2xl lg:rounded-3xl cursor-pointer focus:ring-offset-neutral-50 focus:ring-2 focus:ring-offset-1 focus:dark:ring-offset-neutral-800 focus:ring-red-500"
                      : "px-4 py-1 lg:py-1.5 dark:bg-neutral-700 dark:border-transparent bg-neutral-50 border border-neutral-200 text-neutral-600 text-md dark:text-neutral-50 rounded-2xl lg:rounded-3xl cursor-pointer  focus:ring-2 focus:ring-red-500"
                  }
                >
                  {b.title}
                </button>
              ))}
            </div>
          </div>
          {/* Extensions grid */}
          <div className="grid py-4 lg:py-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredExtensions?.map((el) => (
              <ExtensionCard
                data={el}
                onToggle={handleToggleActive}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
