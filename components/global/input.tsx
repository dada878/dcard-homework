import { twMerge } from "tailwind-merge";

export default function Input({
  type,
  value = "",
  onChange = () => {},
  placeholder = "",
  className = "",
  name = "",
  onEnterPress,
}: Readonly<{
  type: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name?: string;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onEnterPress !== undefined) {
          onEnterPress(e);
        }
      }}
      className={twMerge(
        `w-full rounded-lg bg-mirage-300 p-3 outline-none placeholder:text-secondary-light dark:bg-mirage-700 dark:placeholder:text-white/40`,
        className,
      )}
      placeholder={placeholder}
    />
  );
}
