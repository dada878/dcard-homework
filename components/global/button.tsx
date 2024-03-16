export default function Button({
  children,
  onClick = () => {},
  color = "blue",
  className = "",
  rounded = "rounded-xl"
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  color? : "blue" | "red" | "green";
  className?: string;
  rounded?: string;
}>) {
  const buttonThemes = {
    red: "bg-red hover:bg-red-hover",
    blue: "bg-blue hover:bg-blue-hover",
    green: "bg-green hover:bg-green-hover"
  };
  return (
    <button
        onClick={onClick}
        className={`${buttonThemes[color]} p-3 px-4 ${rounded} items-center cursor-pointer flex justify-center transition hover:bg-blue-hover ${className}`}
    >
        {children}
    </button>
  );
}
