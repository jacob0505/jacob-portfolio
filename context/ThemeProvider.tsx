// context/ThemeProvider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // 網頁第一次載入時執行:讀取使用者上次選的主題
   useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored ?? (prefersDark ? "dark" : "light");

      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    } catch (e) {
      // 讀取失敗時 (例如 localStorage 被瀏覽器限制),安全地退回 light 模式
      setTheme("light");
    }
  }, []);

    const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // 忽略儲存失敗,不影響當前畫面切換
    }
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 自訂 hook,讓其他 component 可以簡單地用 useTheme() 拿到目前主題
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}