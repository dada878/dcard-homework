"use client";
import AboutSection from "@/components/home/aboutSection"
import GlowEffect from "@/components/home/glowEffect";
import ProjectItem from "@/components/home/projectItem";

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
      <div className="text-start flex flex-col items-stretch gap-10 px-48 mb-10">
        <AboutSection title="關於">
          <p>嗨，我是一個熱衷於網頁前端開發的高中生，我喜歡不斷學習和成長，並追求在技術領域中不斷超越自我！</p>
        </AboutSection>
        <AboutSection title="經歷">
          <li>SITCON 2024 學生計算機年會開發組</li>
          <li>SCINT 北台灣學生資訊社群開發組</li>
        </AboutSection>
        <AboutSection title="作品集">
          <div className="grid grid-cols-3 gap-7">
            <ProjectItem name="番茄鐘" image="/images/projects/pomodoro-timer.png" />
            <ProjectItem name="鞋子の網站" image="/images/projects/shoes.png" />
            <ProjectItem name="SCINT 官網" image="/images/projects/scint.png" />
            {
              [...Array(3)].map((_,i)=>{
                return  <ProjectItem key={i} name="SCINT 官網" image="/images/projects/scint.png" />
              })
            }
          </div>
        </AboutSection>
      </div>
    </div>
  );
}
