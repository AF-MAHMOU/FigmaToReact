import * as React from "react";
import { Header } from "./Header";
import { ApplicantCard } from "./ApplicantCard";
import { ApplicantData } from "./types";

export const AcademicPromotions: React.FC = () => {
  const applicantData: ApplicantData = {
    name: "John Doe",
    age: 32,
    address: "example street 231",
    approvalDate: "01/01/2024",
    cvLink: "linktocv.com",
    profession: "example",
    approvedBy: "ExampleVoucher",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/ffc1977bfa0cf66aba8e19b3d1769d2cdd2ce4f9dee8e4876dc63cc1a9a15f60?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&",
  };

  return (
    <div className="flex flex-col pb-10 text-white bg-white">
      <div className="flex flex-col px-1.5 w-full text-3xl font-bold max-md:max-w-full">
        <Header />
        <button
          className="self-start px-12 py-8 mt-16 ml-16 bg-sky-900 max-md:px-5 max-md:mt-10 max-md:ml-2.5"
          onClick={() => window.history.back()}
        >
          Back to main page
        </button>
        <ApplicantCard applicant={applicantData} />
      </div>
      <button
        className="self-start px-4 py-3 mt-72 ml-10 text-xs text-center bg-sky-600 rounded-md max-md:mt-10 max-md:ml-2.5"
        aria-label="Switch language to Arabic"
      >
        Switch to Arabic
      </button>
    </div>
  );
};
