import { twMerge } from "tailwind-merge";

export default function Textarea({
  value = "",
  onChange = () => {},
  placeholder = "",
  className = "",
  disabled = false,
  name = "",
}: Readonly<{
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
}>) {
  return (
    <textarea
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
      className={twMerge(
        `resize-none dark:bg-mirage-700 bg-mirage-300 p-3 w-full rounded-lg outline-none placeholder:text-secondary-light dark:placeholder:text-white/40`,
        className,
        disabled ? "cursor-not-allowed" : "cursor-text",
      )}
      placeholder={placeholder}
    />
  );
}
