export default function Button({
  children,
  onClick,
  className,
}: Readonly<{
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}>) {
  return (
    <button
        onClick={onClick}
        className="bg-[#31416A] p-3 rounded-2xl hover:bg-[#3c4f7e] cursor-pointer flex justify-center transition"
    >
        {children}
    </button>
  );
}
