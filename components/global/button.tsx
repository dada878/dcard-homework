export default function Button({
  children,
  onClick,
  type = "button",
  color = "blue",
  className = "",
  disabled = false,
  rounded = "rounded-xl"
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color? : "blue" | "red" | "green" | "dark-blue";
  className?: string;
  disabled?: boolean;
  rounded?: string;
}>) {
  const buttonThemes = {
    red: "dark:bg-red bg-[#d78585] hover:bg-[#da7373] dark:hover:bg-red-hover",
    blue: "dark:bg-mirage-700 bg-mirage-300 hover:bg-mirage-400 dark:hover:bg-mirage-600",
    green: "dark:bg-green bg-[#6fcd92] hover:bg-[#4dbc75] dark:hover:bg-green-hover",
    "dark-blue": "dark:bg-mirage-800 bg-mirage-400 hover:bg-mirage-300 dark:hover:bg-mirage-700",
  };
  return (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${buttonThemes[color]} ${disabled && "pointer-events-none"} p-3 px-4 ${rounded} items-center flex justify-center transition ${className}`}
    >
        {children}
    </button>
  );
}
