import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export function NavBar() {
  const { setTheme } = useTheme();

  return (
    <div className="dark:text-neutral-200 text-neutral-900 max-w-7xl py-4 px-4">
      <div className="flex justify-between items-center">
        <p>NavBar here</p>
        <button onClick={() => setTheme("light")}>
          <Sun />
          Light
        </button>
        <button onClick={() => setTheme("dark")}>
          <Moon />
          Dark
        </button>
        <button onClick={() => setTheme("system")}>System</button>
      </div>
    </div>
  );
}
