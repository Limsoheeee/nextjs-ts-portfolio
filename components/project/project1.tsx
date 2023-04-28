import React from "react";
import Layout from "../common/Layout";

interface Project {
  id?: number;
  title?: string;
  desc?: string;
  page?: string;
  thumNail?: string;
  period?: string;
  service?: string;
}
const ProjectArtizenCard = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Crimainal IP",
      desc: "위협 인텔리전스 전문기업 에이아이스페라(AI SPERA)가 서비스하는 AI 기반 사이버 보안 검색엔을 제공하는 회사 프로젝트 내에서 about>Responsible Disclosure, Intelligence>OSINT(검색페이지) 담당 ",
      page: "https://www.criminalip.io/ko",
      thumNail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UakEp04h_oztEulLMMmebxwpp8_-9Xo_rA&usqp=CAU",
      period: "2023/02 ~ 진행중",
      service: "react,nextJS,typescript",
    },
    {
      id: 2,
      title: "Artizen",
      desc: "사용자의 GPS정보로 가장 가까운 공연장, 전시장 정보를 추천해주는 위치기반 데이터 추천 어플리케이션",
      page: "https://www.notion.so/positive-thinking/Artizen-53a635a35cea410282363c3fa3f24654",
      thumNail:
        "https://user-images.githubusercontent.com/113952299/230458364-1bbefc05-63db-4a33-a7d7-5273551e531a.png",
      period: "2023/01",
      service: "reactNative",
    },

    {
      id: 3,
      title: "Canya",
      desc: "카페후기를 별점, 지도로 정보를 공유하고, 원하는 카페 리뷰를 검색하여 볼 수 있는 웹 페이지 ",
      page: "https://www.notion.so/positive-thinking/Ca-Nya-9304947435c3401fae79601e18ed287a",
      thumNail:
        "https://user-images.githubusercontent.com/113230019/207134762-c6c9e619-c272-4757-af0c-2327efd57ea8.png",
      period: "2022/12",
      service: "react",
    },
    {
      id: 4,
      title: "Coding Galaxy",
      desc: "온라인 프로그래밍 강좌 코딩애플을 클론코딩 웹페이지",
      page: "https://youtu.be/39eEMG_bjvU",
      thumNail:
        "data:image/jpeg;base64,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",
      period: "2022/11",
      service: "react",
    },
  ];
  return (
    <section className="flex  flex-col items-center justify-center text-gray-600 body-font">
    
        <div className=" py-5 sm:py-5">
          {projects?.map((project) => {
            return (
              <div style={{ margin: "30px 0" }}>
                <div
                  className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
                  key={project.id}
                >
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {project.desc}
                      <p className="mt-6 text-lg leading-8 text-blue-600">
                        {/* (이미지 클릭 시 관련 페이지 이동) */}
                      </p>
                    </p>
                  </div>
                  <a href={project.page}>
                    <div style={{marginBottom:"20px"}}>
                    <ul
                      role="list"
                      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                    >
                      <li>
                        <div className="flex items-center gap-x-6">
                          <img
                            className="h-20 w-20 rounded-full hover:opacity-30"
                            src={project.thumNail}
                            alt="project Icon"
                            title="관련페이지 이동"
                          />
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-700">
                              {project.period}
                            </h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">
                              {project.service}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    </div>
                  </a>
                </div>
                <div
                  style={{ width: "100%", borderBottom: "1px solid #eeeeee" }}
                ></div>
              </div>
            );
          })}
        </div>
   
    </section>
  );
};

export default ProjectArtizenCard;
