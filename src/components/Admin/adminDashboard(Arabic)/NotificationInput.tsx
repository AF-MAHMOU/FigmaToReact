import * as React from "react";
import { NotificationInputProps } from "./types";

export const NotificationInput: React.FC<NotificationInputProps> = ({
  onSend,
}) => {
  const [message, setMessage] = React.useState("");

  return (
    <div className="flex gap-1.5 items-start mt-3.5 max-w-full text-sm w-[294px]">
      <button
        onClick={() => onSend(message)}
        className="self-end px-4 py-1 mt-16 text-center text-black border-2 border-black border-solid bg-zinc-100 max-md:mt-10"
      >
        إرسال الإشعار
      </button>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="overflow-hidden self-start px-7 pt-2 pb-16 text-right bg-white border border-solid border-neutral-500 text-neutral-500 max-md:pl-5"
        placeholder="اكتب رسالتك هنا..."
        aria-label="رسالة الإشعار"
      />
    </div>
  );
};
