export interface HeaderProps {
  logoSrc: string;
  title: string;
}

export interface SidebarItemProps {
  text: string;
  isActive?: boolean;
}

export interface DatePickerProps {
  onChange: (date: string) => void;
  value: string;
}

export interface TableHeaderProps {
  headers: string[];
}

export interface InterviewSchedulerProps {
  onSchedule: (data: { applicant: string; date: string; time: string }) => void;
}
