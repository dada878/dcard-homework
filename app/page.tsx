"use client";
import AboutSection from "@/components/home/aboutSection";
import HeroBanner from "@/components/home/heroBanner";
import ProjectItem from "@/components/home/projectItem";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="text-start flex flex-col items-stretch gap-12 md:px-32 lg:px-48 mb-10">
        <AboutSection title="關於">
          <p>嗨，我是一個熱衷於網頁前端開發的高中生，我喜歡不斷學習和成長，並追求在技術領域中不斷超越自我！</p>
        </AboutSection>
        <AboutSection title="經歷">
          <li>SITCON 2024 學生計算機年會開發組</li>
          <li>SCINT 北台灣學生資訊社群開發組</li>
        </AboutSection>
        <AboutSection title="作品集">
          <div className="grid grid-col-1 md:grid-cols-3 gap-7">
            <ProjectItem name="番茄鐘" image="/images/projects/pomodoro-timer.png" />
            <ProjectItem name="鞋子の網站" image="/images/projects/shoes.png" />
            <ProjectItem name="SCINT 官網" image="/images/projects/scint.png" />
            {
              [...Array(3)].map((_,i)=>{
                return  <ProjectItem key={i} name="SCINT 官網" image="/images/projects/scint.png" />;
              })
            }
          </div>
        </AboutSection>
      </div>
    </div>
  );
}
