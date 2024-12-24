import * as React from "react";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { SectionHeader } from "./SectionHeader";
import { NotificationInput } from "./NotificationInput";
import { DashboardSection } from "./DashboardSection";

export const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-16 bg-white">
      <div className="flex flex-wrap gap-5 justify-between self-stretch px-14 py-1.5 shadow-[0px_2px_5px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
        <div className="px-5 py-5 text-xs text-center text-black border-2 border-black border-solid bg-zinc-100">
          Switch to Arabic
        </div>
        <div className="my-auto text-2xl font-bold text-right text-white">
          - لوحة تحكم المسؤول
        </div>
      </div>

      {/* Orders Management Section */}
      <div className="flex flex-col px-6 pt-14 pb-6 mt-8 w-full bg-white rounded-lg max-w-[1856px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
        <SectionHeader
          title="إدارة الطلبات"
          buttons={[
            "تحديد الطلب كمكتمل",
            "إرجاع الطلب للمراجعة",
            "عرض جميع الطلبات",
          ]}
        />
        <TableHeader
          headers={[
            "الإجراءات",
            "المرحلة",
            "الحالة",
            "اسم المتقدم",
            "رقم الطلب",
          ]}
        />
        <TableRow
          actions={["مكتمل", "إرجاع"]}
          cells={["إعداد معامل التأثير", "قيد التنفيذ", "د. أحمد يوسف", "A101"]}
        />
        <TableRow
          actions={["عرض"]}
          cells={["التقرير النهائي مرسل", "مكتمل", "د. سلمى حسن", "A102"]}
        />
      </div>

      {/* Users Management Section */}
      <div className="flex flex-col px-6 pt-14 pb-6 mt-8 w-full bg-white rounded-lg max-w-[1856px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
        <SectionHeader
          title="إدارة المستخدمين"
          buttons={[
            "عرض جميع المستخدمين",
            "تعديل أدوار المستخدمين",
            "إضافة مستخدم جديد",
          ]}
        />
        <TableHeader
          headers={["الإجراءات", "الحالة", "الدور", "الاسم", "رقم المستخدم"]}
        />
        <TableRow
          actions={["حذف", "تعديل"]}
          cells={["نشط", "مراجع", "أ. منى عز", "U001"]}
        />
        <TableRow
          actions={["حذف", "تعديل"]}
          cells={["نشط", "منسق", "د. عمر شريف", "U002"]}
        />
      </div>

      {/* Reports Section */}
      <DashboardSection
        title="إنشاء التقارير"
        buttons={["إنشاء تقرير نشاط النظام", "إنشاء تقرير مؤشرات الأداء"]}
      />

      {/* Workflow Settings Section */}
      <DashboardSection
        title="إعدادات سير العمل"
        description="تهيئة انتقالات سير العمل والتحكم في الوصول للمراحل المختلفة من عملية الترقية."
        buttons={["عرض القواعد الحالية", "تحديد قواعد سير العمل"]}
      />

      {/* Notifications Section */}
      <div className="flex flex-col items-end pt-14 pr-6 pb-6 pl-20 mt-8 w-full bg-white rounded-lg max-w-[1856px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
        <div className="text-3xl font-bold text-right text-sky-950">
          إرسال الإشعارات
        </div>
        <NotificationInput onSend={(message) => console.log(message)} />
      </div>

      {/* Backup Section */}
      <DashboardSection
        title="النسخ الاحتياطي للنظام"
        description="ضمان سلامة البيانات عن طريق إنشاء نسخة احتياطية أو استعادتها من نسخة سابقة."
        buttons={["استعادة نسخة احتياطية", "إنشاء نسخة احتياطية"]}
      />
    </div>
  );
};
