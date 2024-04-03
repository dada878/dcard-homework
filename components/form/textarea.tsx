import { cn } from "@/utils/cn";

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
      className={cn(
        `w-full resize-none rounded-lg bg-mirage-300 p-3 outline-none placeholder:text-secondary-light dark:bg-mirage-700 dark:placeholder:text-white/40`,
        className,
        disabled ? "cursor-not-allowed" : "cursor-text",
      )}
      placeholder={placeholder}
    />
  );
}
