export default function Textarea({
    placeholder = "",
    className = "",
}: {
    placeholder?: string;
    className?: string;
    rows?: number;
}) {
    return (
        <textarea
          className={`${className} resize-none bg-mirage-700 p-3 w-full rounded-lg outline-none`}
          placeholder={placeholder}
        />
    );
}