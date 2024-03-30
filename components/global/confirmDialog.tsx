import Button from "./button";
import Dialog from "./dialog";

export default function ConfirmDialog({
  open,
  setOpen,
  title,
  onClose,
  onConfirm,
  closeByClickOutside = true,
}: Readonly<{
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  onClose?: () => void;
  onConfirm?: () => void;
  closeByClickOutside?: boolean;
}>) {
  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      closeByClickOutside={closeByClickOutside}
    >
      <h2 className="text-2xl">{title}</h2>
      <div className="flex gap-4 justify-center">
        <Button
          onClick={() => {
            setOpen(false);
            if (onClose !== undefined) {
              onClose();
            }
          }}
          color="green"
        >
          取消
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
            if (onConfirm !== undefined) {
              onConfirm();
            }
          }}
          color="red"
        >
          確定
        </Button>
      </div>
    </Dialog>
  );
}
