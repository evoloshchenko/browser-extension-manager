import { ThemeProvider } from "./context/theme-provider";
import { NavBar } from "./components/nav-bar";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-dark-gradient bg-white h-screen">
        <NavBar />
        <div className="max-w-7xl mx-auto py-6">
          <h1 className="text-2xl font-light underline">
            Browser Extensions manager
          </h1>
          <p className="text-7xl text-neutral-800">palette picker</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
