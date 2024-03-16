export default function Input({
    type,
    placeholder = "",
    className = "",
} : {
    type: string;
    placeholder?: string;
    className?: string;
}) {
    return (
        <input
          type={type}
          className={`${className} dark:bg-mirage-700 bg-mirage-300 p-3 w-full rounded-lg outline-none placeholder:text-secondary-light dark:placeholder:text-white/40`}
          placeholder={placeholder}
        />
    );
}