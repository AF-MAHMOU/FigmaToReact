import * as React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { InterviewScheduler } from "./InterviewScheduler";

export const AcademicPromotions: React.FC = () => {
  const handleSchedule = (data: {
    applicant: string;
    date: string;
    time: string;
  }) => {
    console.log("Schedule interview:", data);
  };

  return (
    <div className="flex flex-col bg-white">
      <Header
        logoSrc="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/c61f7461ba276d1e6cbc8b49acdd923496260619da3e900da53d47213c24e86c?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
        title="Academic Promotions"
      />
      <div className="w-full max-w-[1888px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
            <Sidebar />
          </div>
          <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            <InterviewScheduler onSchedule={handleSchedule} />
          </div>
        </div>
      </div>
    </div>
  );
};
