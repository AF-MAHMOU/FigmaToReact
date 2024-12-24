import * as React from "react";
import { DatePicker } from "./DatePicker";
import { ReportTableRow } from "./ReportTableRow";
import { SidebarItem } from "./SidebarItem";

export const AcademicPromotions: React.FC = () => {
  const reportData = {
    id: "RPT001",
    type: "تقرير عامل التأثير",
    date: "2024-12-15",
    status: "مكتمل",
  };

  const sidebarItems = [
    { text: "إدارة الطلبات" },
    { text: "جدولة المقابلة" },
    { text: "توليد التقارير", isActive: true },
  ];

  return (
    <div className="flex flex-col pr-2 bg-white">
      <header className="flex flex-wrap gap-5 justify-between py-1 pl-10 max-w-full text-2xl text-right text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] w-[1920px] max-md:pl-5">
        <div className="my-auto"> | الترقيات الأكاديمية</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/c61f7461ba276d1e6cbc8b49acdd923496260619da3e900da53d47213c24e86c?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
          className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
          alt=""
        />
      </header>
      <div className="self-end w-full max-w-[1888px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <main className="flex flex-col w-[85%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 pt-14 pb-6 mx-auto mt-8 w-full text-black bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-end self-end max-w-full font-bold w-[863px]">
                <h1 className="text-3xl text-right text-sky-950">
                  توليد التقارير
                </h1>
                <div className="flex gap-5 justify-between self-stretch mt-4 w-full max-md:max-w-full">
                  <div className="flex gap-1 items-start">
                    <button className="px-7 py-1 text-sm text-center border-2 border-black border-solid bg-zinc-100 max-md:px-5">
                      توليد التقرير
                    </button>
                    <DatePicker icon="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/45b98c32e2eccea895983da49977e272bc117b95c74f7c343d14cb15847d5179?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&" />
                    <DatePicker icon="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/e6336a1bcec3e154445551ff2b4497cfee84edd8c2e4c04dbb451cb9afe6b0f2?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&" />
                  </div>
                  <div className="flex gap-1 self-start text-right">
                    <label htmlFor="timeRange" className="text-base basis-auto">
                      اختر الفترة الزمنية:
                    </label>
                    <select
                      id="timeRange"
                      className="px-16 py-1 text-sm leading-none border border-solid bg-zinc-100 border-neutral-500 max-md:pl-5"
                    >
                      <option>اختر نوع التقرير</option>
                    </select>
                  </div>
                  <label
                    htmlFor="reportType"
                    className="my-auto text-base text-right"
                  >
                    اختر نوع التقرير:
                  </label>
                </div>
                <h2 className="mt-6 text-2xl text-right">سجل التقارير</h2>
              </div>
              <div className="flex flex-wrap mt-5 text-base font-bold text-zinc-800 max-md:max-w-full">
                <div className="px-3 py-3.5 whitespace-nowrap bg-slate-100 max-md:pr-5">
                  الإجراءات
                </div>
                <div className="px-3 py-4 whitespace-nowrap bg-slate-100 max-md:pr-5">
                  الحالة
                </div>
                <div className="px-3 py-3.5 bg-slate-100 max-md:pr-5">
                  تاريخ التوليد
                </div>
                <div className="px-3 py-3.5 bg-slate-100 max-md:pr-5">
                  نوع التقرير
                </div>
                <div className="px-3 py-3.5 bg-slate-100 max-md:pr-5">
                  معرف التقرير
                </div>
              </div>
              <ReportTableRow {...reportData} />
              <div className="flex flex-col self-end mt-6 max-w-full w-[271px]">
                <h2 className="self-end text-2xl font-bold text-right">
                  خيارات متقدمة
                </h2>
                <div className="flex gap-1 mt-5 text-sm text-center">
                  <button className="px-3.5 py-1 border-2 border-black border-solid bg-zinc-100">
                    عرض التحليلات
                  </button>
                  <button className="px-7 py-1 border-2 border-black border-solid bg-zinc-100 max-md:px-5">
                    تصدير جميع التقارير
                  </button>
                </div>
              </div>
            </div>
          </main>
          <aside className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
            <nav className="flex flex-col grow px-4 py-14 text-base text-right text-white shadow-[2px_0px_5px_rgba(0,0,0,0.1)] max-md:mt-8">
              <div className="flex flex-col self-end max-md:mr-2.5">
                {sidebarItems.map((item, index) => (
                  <SidebarItem key={index} {...item} />
                ))}
              </div>
              <button className="self-center px-11 py-2.5 max-w-full text-sm text-center bg-sky-600 rounded-md mt-[820px] w-[191px] max-md:px-5 max-md:mt-10">
                التبديل إلى الإنجليزية
              </button>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
};
