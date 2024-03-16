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
          className={`${className} bg-mirage-700 p-3 w-full rounded-lg outline-none`}
          placeholder={placeholder}
        />
    );
}