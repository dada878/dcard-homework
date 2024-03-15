import GlowEffect from "./glowEffect";

export default function HeroBanner() {
  return (
    <header className="text-center h-[calc(100vh_-_6rem)] flex flex-col justify-center mb-12">
      <h1 className="text-5xl md:text-7xl font-black mb-5 z-10 blur-in">Dada&apos;s Blog</h1>
      <p className="text-[#BBBBBB] z-10 text-md md:text-xl blur-in">我會在這裡分享各種技術文章及生活中的的事物</p>
      <div className="flex justify-center">
        <GlowEffect />
      </div>
    </header>
  );
}
