import * as React from "react";
import { Header } from "./Header";
import { SidebarItem } from "./SidebarItem";
import { TableHeader } from "./TableHeader";

export const AcademicPromotions: React.FC = () => {
  const tableHeaders = ["الإجراءات", "الوقت", "التاريخ", "المتقدم"];

  return (
    <div className="flex flex-col pr-2 bg-white">
      <Header
        title="| الترقيات الأكاديمية"
        logoUrl="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/c61f7461ba276d1e6cbc8b49acdd923496260619da3e900da53d47213c24e86c?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
      />
      <div className="self-end w-full max-w-[1888px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[85%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 py-16 mx-auto mt-8 w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-end self-end max-w-full w-[844px]">
                <div className="flex gap-1 items-start mt-12 text-sm text-center text-black max-md:mt-10">
                  <div className="px-6 py-1 border-2 border-black border-solid bg-zinc-100 max-md:px-5">
                    جدولة المقابلة
                  </div>
                  <div className="flex shrink-0 h-6 bg-white border-2 border-solid border-neutral-500 w-[99px]" />
                </div>
                <form className="flex gap-1 mt-12 text-black max-md:mt-10">
                  <label
                    htmlFor="interviewTime"
                    className="grow text-base text-right"
                  >
                    وقت المقابلة:
                  </label>
                  <div className="flex overflow-hidden gap-5 px-1 py-0.5 whitespace-nowrap bg-white border-2 border-solid border-neutral-500">
                    <input
                      type="datetime-local"
                      id="interviewTime"
                      className="text-sm"
                      aria-label="Select interview time and date"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/fe119e464fdcb0b194c07f9e9fc2eb4dbcccf972aba99fb17b1fa6a7e5afe48a?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
                      alt=""
                      className="object-contain shrink-0 aspect-[0.94] w-[17px]"
                    />
                  </div>
                </form>
                <div className="flex flex-col self-start text-right">
                  <div className="self-end text-3xl font-bold text-sky-950">
                    جدولة المقابلة
                  </div>
                  <form className="flex gap-5 justify-between mt-4 text-black">
                    <div className="flex gap-1">
                      <label htmlFor="interviewDate" className="text-base">
                        تاريخ المقابلة:
                      </label>
                      <select
                        id="interviewDate"
                        className="self-start px-12 py-1 text-sm leading-none border border-solid bg-zinc-100 border-neutral-500 max-md:pl-5"
                        aria-label="Select interview date"
                      >
                        <option>اختر المتقدم</option>
                      </select>
                    </div>
                    <label htmlFor="applicant" className="text-base">
                      اختر المتقدم:
                    </label>
                  </form>
                </div>
              </div>
              <TableHeader headers={tableHeaders} />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-12 text-base text-right text-white shadow-[2px_0px_5px_rgba(0,0,0,0.1)] max-md:mt-8">
              <div className="self-end mr-8 max-md:mr-2.5">إدارة الطلبات</div>
              <div className="flex flex-col px-4 mt-6">
                <SidebarItem text="جدولة المقابلة" isActive={true} />
                <div className="self-end mt-7 max-md:mr-2.5">
                  توليد التقارير
                </div>
                <button className="self-center px-11 py-2.5 max-w-full text-sm text-center bg-sky-600 rounded-md mt-[839px] w-[191px] max-md:px-5 max-md:mt-10">
                  التبديل إلى الإنجليزية
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
