import * as React from "react";
import { ProfileCardProps } from "./types";

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profileData,
  imageSrc,
}) => {
  return (
    <div className="self-start px-6 pt-9 pb-14 mt-24 max-w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[1157px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt="Profile"
            className="object-contain grow w-full aspect-[1.07] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="mt-9 text-3xl font-bold text-right text-sky-950 max-md:mt-10 max-md:max-w-full">
            اسم مقدم الطلب: {profileData.name}
            <br />
            العمر: {profileData.age}
            <br />
            العنوان: {profileData.address}
            <br />
            تاريخ الموافقة: {profileData.approvalDate}
            <br />
            السيرة الذاتية: {profileData.cvLink}
            <br />
            المهنة: {profileData.occupation}
            تمت الموافقة عليه بواسطة: {profileData.approvedBy}
          </div>
        </div>
      </div>
    </div>
  );
};
