import * as React from "react";
import { ActionButton } from "./ActionButton";
import { ApplicationRowProps } from "./types";

export const ApplicationRow: React.FC<ApplicationRowProps> = ({
  application,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-400";
      case "Approved":
        return "text-green-600";
      case "Rejected":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex w-full text-base text-black max-md:max-w-full">
      <div className="px-3 py-4 whitespace-nowrap max-md:pr-5">
        {application.id}
      </div>
      <div className="px-3 py-4 max-md:pr-5 max-md:mr-0">
        {application.applicantName}
      </div>
      <div className="px-3 py-4 whitespace-nowrap max-md:pr-5 max-md:mr-0">
        {application.submittedDate}
      </div>
      <div
        className={`px-3 py-4 font-bold whitespace-nowrap max-md:pr-5 ${getStatusColor(
          application.status
        )}`}
      >
        {application.status}
      </div>
      <div className="flex flex-wrap gap-1 py-3.5 pr-20 pl-3 text-sm text-center whitespace-nowrap max-md:pr-5">
        {application.status === "Pending" && (
          <>
            <ActionButton label="Approve" onClick={() => {}} />
            <ActionButton label="Reject" onClick={() => {}} />
          </>
        )}
        <ActionButton label="View" onClick={() => {}} />
      </div>
    </div>
  );
};
