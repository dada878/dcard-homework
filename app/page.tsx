import AboutSection from "@/components/home/aboutSection"
import GlowEffect from "@/components/home/glowEffect";

export default function Home() {
  return (
    <div>
      <div className="text-center h-[calc(100vh_-_6rem)] flex flex-col justify-center">
        <h1 className="text-7xl font-black mb-5 z-10 blur-out">Dada&apos;s Blog</h1>
        <h2 className="text-[#BBBBBB] z-10 text-xl blur-out">我會在這裡分享各種技術文章及日常生活中有趣的事物</h2>
        <div className="flex justify-center">
          <GlowEffect />
        </div>
      </div>
      <br />
      <br />
      <div className="text-center">
        <AboutSection title="關於">
          <p>你好！我是一個熱衷於網頁前端開發的台灣自學高中生！</p>
          <p>我喜歡不斷學習和成長，並追求在技術領域中不斷超越自我！</p>
        </AboutSection>
        <AboutSection title="經歷">
          <p>SITCON 2024 學生計算機年會開發組</p>
          <p>SCINT 北台灣學生資訊社群開發組</p>
        </AboutSection>
        <AboutSection title="作品集">
          <p>SITCON 2024 學生計算機年會開發組</p>
          <p>SCINT 北台灣學生資訊社群開發組</p>
        </AboutSection>
      br</div>
    </div>
  );
}
