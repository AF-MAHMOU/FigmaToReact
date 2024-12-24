import * as React from "react";
import { Header } from "./Header";
import { ProfileCard } from "./ProfileCard";
import { ProfileData } from "./types";

export const AcademicPromotions: React.FC = () => {
  const profileData: ProfileData = {
    name: "جون دو",
    age: 32,
    address: "شارع مثال 231",
    approvalDate: "01/01/2024",
    cvLink: "linktocv.com",
    occupation: "مثال",
    approvedBy: "مثال قسيمة",
  };

  return (
    <div className="flex flex-col pb-7 bg-white">
      <Header
        title="| الترقيات الأكاديمية"
        logoSrc="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/e0facd45421ab0d2621a06929fbb5819dbba27caa9391a631f0975e3629fdbb7?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
      />
      <div className="flex flex-col items-end self-end mt-20 mr-10 w-full max-w-[1563px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <button
          className="px-5 py-7 mr-7 text-3xl font-bold text-white bg-sky-900 max-md:mr-2.5"
          aria-label="العودة إلى القائمة الرئيسية"
        >
          العودة إلى القائمة الرئيسية
        </button>

        <ProfileCard
          profileData={profileData}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/ffc1977bfa0cf66aba8e19b3d1769d2cdd2ce4f9dee8e4876dc63cc1a9a15f60?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
        />

        <button
          className="px-10 py-2.5 mt-80 text-sm text-center text-white bg-sky-600 rounded-md max-md:px-5 max-md:mt-10"
          aria-label="التبديل إلى الإنجليزية"
        >
          التبديل إلى الإنجليزية
        </button>
      </div>
    </div>
  );
};
