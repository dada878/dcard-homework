export default function Textarea({
  placeholder = "",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) {
  return (
    <textarea
      className={`${className} resize-none dark:bg-mirage-700 bg-mirage-300 p-3 w-full rounded-lg outline-none placeholder:text-secondary-light dark:placeholder:text-white/40`}
      placeholder={placeholder}
    />
  );
}
