export interface RequestData {
  id: string;
  applicantName: string;
  submissionDate: string;
  status: "pending" | "approved" | "rejected";
}

export interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

export interface RequestRowProps {
  request: RequestData;
}

export interface TableHeaderProps {
  headers: string[];
}
