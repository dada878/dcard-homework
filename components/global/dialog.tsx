import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function Dialog({
  open,
  setOpen,
  children,
  closeByClickOutside = true,
}: Readonly<{
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  closeByClickOutside?: boolean;
}>) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed left-0 right-0 top-0 bottom-0 inset-0 z-20">
          <motion.div
              className="fixed h-screen w-screen left-0 right-0 top-0 bottom-0 bg-black/40 backdrop-blur"
              onClick={() => closeByClickOutside && setOpen(false)}
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
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
