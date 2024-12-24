import * as React from "react";
import { ActionButton } from "./ActionButton";
import { RequestRowProps } from "./types";

export const RequestRow: React.FC<RequestRowProps> = ({ request }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-400";
      case "approved":
        return "text-green-600";
      case "rejected":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-wrap text-base text-black max-md:mr-1.5 max-md:max-w-full">
      <div className="flex gap-1 py-3.5 pr-20 pl-3 text-sm text-center whitespace-nowrap max-md:pr-5 max-md:-mr-2.5">
        <ActionButton label="عرض" />
        {request.status === "pending" && (
          <>
            <ActionButton label="رفض" />
            <ActionButton label="موافقة" />
          </>
        )}
      </div>
      <div
        className={`px-3 py-4 font-bold whitespace-nowrap max-md:pr-5 ${getStatusColor(
          request.status
        )}`}
      >
        {request.status === "pending"
          ? "قيد الانتظار"
          : request.status === "approved"
          ? "موافق"
          : "مرفوض"}
      </div>
      <div className="px-3 py-4 whitespace-nowrap max-md:pr-5">
        {request.submissionDate}
      </div>
      <div className="px-4 py-4">{request.applicantName}</div>
      <div className="px-3 py-4 whitespace-nowrap max-md:pr-5">
        {request.id}
      </div>
    </div>
  );
};
