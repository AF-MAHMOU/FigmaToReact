import * as React from "react";
import { NotificationFormProps } from "./types";
import { DashboardButton } from "./DashboardButton";

export const NotificationForm: React.FC<NotificationFormProps> = ({
  onSubmit,
}) => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(message);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-1 items-start mt-6 max-w-full w-[302px]"
    >
      <label htmlFor="notificationMessage" className="sr-only">
        Notification message
      </label>
      <textarea
        id="notificationMessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="overflow-hidden self-start px-1 pt-1.5 pb-14 text-sm bg-white border border-solid border-neutral-500 text-neutral-500 max-md:pr-5"
        placeholder="Write your message here..."
        aria-label="Notification message"
      />
      <DashboardButton className="self-end mt-16 text-xs max-md:mt-10">
        Send Notification
      </DashboardButton>
    </form>
  );
};
