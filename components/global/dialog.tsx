export default function Dialog({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center ${
        open ? "" : "hidden"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-mirage-800 p-4 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}