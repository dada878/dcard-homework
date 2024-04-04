import { cn } from "@/utils/cn";

const buttonThemes = {
  red: "dark:bg-red bg-[#d78585] hover:bg-[#da7373] dark:hover:bg-red-hover",
  blue: "dark:bg-mirage-700 bg-mirage-300 hover:bg-mirage-400 dark:hover:bg-mirage-600",
  green:
    "dark:bg-green bg-[#6fcd92] hover:bg-[#4dbc75] dark:hover:bg-green-hover",
  "dark-blue":
    "dark:bg-mirage-800 bg-mirage-400 hover:bg-mirage-300 dark:hover:bg-mirage-700",
};

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
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `flex items-center justify-center rounded-xl p-3 px-4 transition`,
        buttonThemes[color],
        className,
        {
          "cursor-not-allowed": disabled,
        },
      )}
    >
      {children}
    </button>
  );
}
