import * as React from "react";
import { RequestRow } from "./RequestRow";
import { TableHeader } from "./TableHeader";
import { RequestData } from "./types";

const requestsData: RequestData[] = [
  {
    id: "001",
    applicantName: "جون دو",
    submissionDate: "2024-12-15",
    status: "pending",
  },
  {
    id: "002",
    applicantName: "جون سميث",
    submissionDate: "2024-12-14",
    status: "approved",
  },
  {
    id: "003",
    applicantName: "أحمد علي",
    submissionDate: "2024-12-13",
    status: "rejected",
  },
  {
    id: "004",
    applicantName: "جان سميث",
    submissionDate: "2024-12-14",
    status: "approved",
  },
  {
    id: "005",
    applicantName: "احمد محسن",
    submissionDate: "2024-12-13",
    status: "rejected",
  },
];

const tableHeaders = [
  "الإجراءات",
  "الحالة",
  "تاريخ الإرسال",
  "اسم المتقدم",
  "معرّف",
];

export const AcademicPromotions: React.FC = () => {
  return (
    <div className="flex flex-col pr-2 bg-white">
      <div className="flex flex-wrap gap-5 justify-between py-1 pr-1 pl-9 max-w-full text-2xl text-right text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] w-[1920px] max-md:pl-5">
        <div className="my-auto"> | الترقيات الأكاديمية</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/c61f7461ba276d1e6cbc8b49acdd923496260619da3e900da53d47213c24e86c?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
          alt=""
          className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
        />
      </div>
      <div className="self-end w-full max-w-[1888px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[85%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 pt-7 mx-auto mt-7 w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-end max-w-full text-right w-[411px]">
                <div className="self-end text-3xl font-bold text-sky-950 max-md:mr-1.5">
                  إدارة الطلبات
                </div>
                <div className="flex gap-5 justify-between mt-7 text-sm">
                  <div className="px-10 py-2 leading-none text-black rounded-md border border-solid bg-zinc-100 border-stone-300 max-md:pl-5">
                    فلترة حسب الحالة
                  </div>
                  <div className="overflow-hidden px-10 pt-3.5 pb-px bg-white rounded-md border border-solid border-stone-300 text-neutral-500 max-md:pl-5">
                    بحث في الطلبات
                  </div>
                </div>
              </div>
              <TableHeader headers={tableHeaders} />
              {requestsData.map((request) => (
                <RequestRow key={request.id} request={request} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 pt-12 pb-8 text-base text-right text-white shadow-[2px_0px_5px_rgba(0,0,0,0.1)] max-md:mt-8">
              <div className="px-16 py-2.5 bg-sky-600 rounded-md max-md:pl-5">
                إدارة الطلبات
              </div>
              <div className="self-end mt-7 max-md:mr-2.5">جدولة المقابلات</div>
              <div className="self-end mt-9 max-md:mr-2.5">توليد التقارير</div>
              <div className="self-center px-10 py-2.5 max-w-full text-sm text-center bg-sky-600 rounded-md mt-[850px] w-[186px] max-md:px-5 max-md:mt-10">
                التبديل إلى الإنجليزية
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
