export default function Input({
  type,
  value = "",
  onChange = () => {},
  placeholder = "",
  className = "",
}: {
  type: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`${className} dark:bg-mirage-700 bg-mirage-300 p-3 w-full rounded-lg outline-none placeholder:text-secondary-light dark:placeholder:text-white/40`}
      placeholder={placeholder}
    />
  );
}
