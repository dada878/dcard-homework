import { AnimatePresence, motion } from "framer-motion";

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
        <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-20">
          <motion.div
            className="fixed bottom-0 left-0 right-0 top-0 h-screen w-screen bg-black/40 backdrop-blur"
            onClick={() => closeByClickOutside && setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <div className="flex h-full items-center justify-center">
            <motion.div
              className="z-20 flex flex-col gap-5 rounded-lg bg-mirage-800 p-7"
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
