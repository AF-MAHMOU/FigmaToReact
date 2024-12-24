import * as React from "react";
import { ApplicantData } from "./types";

interface ApplicantCardProps {
  applicant: ApplicantData;
}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({ applicant }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-center py-11 pr-20 pl-6 mt-36 ml-6 max-w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] text-sky-950 w-[1157px] max-md:px-5 max-md:mt-10">
      <div className="self-start mt-7">
        Applicant Name : {applicant.name}
        <br />
        Age: {applicant.age}
        <br />
        Address : {applicant.address}
        <br />
        Date of Approval: {applicant.approvalDate}
        <br />
        CV: {applicant.cvLink}
        <br />
        Profession: {applicant.profession} Approved By: {applicant.approvedBy}
      </div>
      <img
        loading="lazy"
        src={applicant.imageUrl}
        alt="Applicant profile"
        className="object-contain w-full aspect-[1.07]"
      />
    </div>
  );
};
