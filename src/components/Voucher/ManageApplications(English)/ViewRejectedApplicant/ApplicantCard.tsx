import * as React from "react";
import { ApplicantData } from "./types";

interface ApplicantCardProps {
  data: ApplicantData;
  photoSrc: string;
}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({
  data,
  photoSrc,
}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-center py-11 pr-20 pl-6 mt-36 ml-6 max-w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] text-sky-950 w-[1157px] max-md:px-5 max-md:mt-10">
      <div className="my-auto max-md:max-w-full">
        Applicant Name : {data.name}
        <br />
        Age: {data.age}
        <br />
        Address : {data.address}
        <br />
        Date of Approval: {data.approvalDate}
        <br />
        CV: {data.cvLink}
        <br />
        Profession: {data.profession} Rejected By: {data.rejectedBy}
        <br />
        Reason for rejection: {data.rejectionReason}
      </div>
      <img
        loading="lazy"
        src={photoSrc}
        alt="Applicant Photo"
        className="object-contain w-full aspect-[1.07]"
      />
    </div>
  );
};
