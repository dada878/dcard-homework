import { ReactNode } from "react";

import { motion } from "framer-motion";

export default function AboutSection({
  title,
  children,
}: Readonly<{
  title: string;
  children: ReactNode;
}>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, filter: "blur(0)", scale: 1, translateY: 0 },
        hidden: {
          opacity: 0,
          filter: "blur(5rem)",
          scale: 0.8,
          translateY: 20,
        },
      }}
    >
      <section className="flex flex-1 flex-col gap-5 rounded-xl bg-opacity-10 p-10">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div>{children}</div>
      </section>
    </motion.div>
  );
}
