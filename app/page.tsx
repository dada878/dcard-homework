"use client";

import AboutSection from "@/components/home/aboutSection";
import HeroBanner from "@/components/home/heroBanner";
import ProjectCard from "@/components/home/projectCard";
import projects from "@/content/projects.json";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="mb-10 flex flex-col items-stretch gap-12 text-start md:px-32 lg:px-48">
        <AboutSection title="關於">
          <p>
            嗨，我是一個熱衷於網頁前端開發的高中生，我喜歡不斷學習和成長，並追求在技術領域中不斷超越自我！
          </p>
        </AboutSection>
        <AboutSection title="經歷">
          <ul className="list-disc pl-5">
            <li>SITCON 2024 學生計算機年會開發組</li>
            <li>SCINT 北台灣學生資訊社群開發組</li>
          </ul>
        </AboutSection>
        <AboutSection title="作品集">
          <div className="grid-col-1 grid gap-7 md:grid-cols-2">
            {projects.map((project, i) => {
              return (
                <ProjectCard
                  key={project.link}
                  name={project.title}
                  image={project.image}
                  link={project.link}
                />
              );
            })}
          </div>
        </AboutSection>
      </div>
    </div>
  );
}
