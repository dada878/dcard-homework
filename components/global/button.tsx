import {twMerge } from "tailwind-merge";

export default function Button({
  children,
  onClick,
  type = "button",
  color = "blue",
  className = "",
  disabled = false,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "red" | "green" | "dark-blue";
  className?: string;
  disabled?: boolean;
}>) {
  // NOTE: classes here maybe too complex
  const buttonThemes = {
    red: "dark:bg-red bg-[#d78585] hover:bg-[#da7373] dark:hover:bg-red-hover",
    blue: "dark:bg-mirage-700 bg-mirage-300 hover:bg-mirage-400 dark:hover:bg-mirage-600",
    green:
      "dark:bg-green bg-[#6fcd92] hover:bg-[#4dbc75] dark:hover:bg-green-hover",
    "dark-blue":
      "dark:bg-mirage-800 bg-mirage-400 hover:bg-mirage-300 dark:hover:bg-mirage-700",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        `p-3 px-4 rounded-xl items-center flex justify-center transition`,
        buttonThemes[color],
        className,
        disabled && "pointer-events-none"
      )}
    >
      {children}
    </button>
  );
}
