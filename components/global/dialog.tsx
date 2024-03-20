import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Button from "./button";

export default function Dialog({
  open,
  setOpen,
  title,
  onClose,
  onConfirm,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  onClose?: () => void;
  onConfirm?: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed left-0 right-0 top-0 bottom-0 inset-0 z-20">
          <motion.div
              className="fixed h-screen w-screen left-0 right-0 top-0 bottom-0 bg-black/40 backdrop-blur"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          <div className="flex h-full justify-center items-center">
            
            <motion.div
              className="flex flex-col z-20 gap-5 bg-mirage-800 rounded-lg p-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <h2 className="text-2xl">{title}</h2>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    setOpen(false);
                    onClose && onClose();
                  }}
                  color="green"
                >
                  取消
                </Button>
                <Button
                  onClick={() => {
                    setOpen(false);
                    onConfirm && onConfirm();
                  }}
                  color="red"
                >
                  確定
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
