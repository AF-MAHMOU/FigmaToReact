import * as React from "react";
import { ActionButton } from "./ActionButton";
import { ReportHistoryItemProps } from "./types";

const reportData: ReportHistoryItemProps[] = [
  {
    reportId: "RPT001",
    reportType: "Impact Factor Report",
    dateGenerated: "2024-12-15",
    status: "Completed",
  },
];

export const ReportHistory: React.FC = () => {
  return (
    <div>
      <div className="mt-6 text-2xl font-bold text-black">Report History</div>
      <div className="flex flex-wrap self-stretch mt-5 text-base font-bold text-zinc-800 max-md:max-w-full">
        <div className="px-3 py-3.5 bg-slate-100 max-md:pr-5">Report ID</div>
        <div className="px-3 py-3.5 bg-slate-100 max-md:pr-5">Report Type</div>
        <div className="px-3 py-4 bg-slate-100 max-md:pr-5">Date Generated</div>
        <div className="px-3 py-4 whitespace-nowrap bg-slate-100 max-md:pr-5">
          Status
        </div>
        <div className="px-3 py-4 whitespace-nowrap bg-slate-100 max-md:pr-5 max-md:max-w-full">
          Actions
        </div>
      </div>
      {reportData.map((report) => (
        <div
          key={report.reportId}
          className="flex flex-wrap self-stretch w-full text-base text-black max-md:max-w-full"
        >
          <div className="px-3 py-4 whitespace-nowrap max-md:pr-5">
            {report.reportId}
          </div>
          <div className="px-3 py-4 max-md:pr-5">{report.reportType}</div>
          <div className="px-3 py-4 whitespace-nowrap max-md:pr-5">
            {report.dateGenerated}
          </div>
          <div className="px-3 py-4 font-bold whitespace-nowrap max-md:pr-5">
            {report.status}
          </div>
          <div className="flex gap-1 py-3.5 pr-20 pl-3 text-sm text-center max-md:pr-5">
            <ActionButton label="Download" onClick={() => {}} />
            <ActionButton label="View Details" onClick={() => {}} />
          </div>
        </div>
      ))}
    </div>
  );
};
