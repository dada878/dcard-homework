import GlowEffect from "./glowEffect";

export default function HeroBanner() {
  return (
    <header className="mb-12 flex h-screen-inner flex-col justify-center text-center">
      <h1 className="blur-in z-10 mb-5 text-5xl font-black md:text-7xl">
        Dada&apos;s Blog
      </h1>
      <p className="text-md blur-in z-10 text-secondary-light md:text-xl dark:text-secondary">
        我會在這裡分享各種技術文章及生活中的的事物
      </p>
      <div className="flex justify-center">
        <GlowEffect />
      </div>
    </header>
  );
}
