export interface ApplicationData {
  id: string;
  applicantName: string;
  submittedDate: string;
  status: "Pending" | "Approved" | "Rejected";
}

export interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

export interface ApplicationRowProps {
  application: ApplicationData;
}

export interface SidebarItemProps {
  label: string;
  isActive?: boolean;
}
