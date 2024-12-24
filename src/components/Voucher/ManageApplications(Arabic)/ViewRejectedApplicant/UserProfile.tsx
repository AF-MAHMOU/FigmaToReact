import * as React from "react";
import { UserProfileData } from "./types";

interface UserProfileProps {
  userData: UserProfileData;
  profileImage: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userData,
  profileImage,
}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-start px-6 pt-9 pb-14 mt-44 max-w-full text-right bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] text-sky-950 w-[1157px] max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        src={profileImage}
        alt="User Profile"
        className="object-contain w-full aspect-[1.07]"
      />
      <div className="self-start mt-3.5 max-md:max-w-full">
        اسم مقدم الطلب: {userData.name}
        <br />
        العمر: {userData.age}
        <br />
        العنوان: {userData.address}
        <br />
        تاريخ الموافقة: {userData.approvalDate}
        <br />
        السيرة الذاتية: {userData.cvLink}
        <br />
        المهنة: {userData.occupation}
        <br />
        رفضه بواسطة: {userData.rejectedBy}
        <br />
        سبب الرفض: {userData.rejectionReason}
      </div>
    </div>
  );
};
