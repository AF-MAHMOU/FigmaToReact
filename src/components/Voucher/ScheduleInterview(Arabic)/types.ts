export interface InterviewScheduleProps {
  date: string;
  time: string;
  applicant: string;
}

export interface SidebarItemProps {
  text: string;
  isActive?: boolean;
}

export interface HeaderProps {
  title: string;
  logoUrl: string;
}

export interface TableHeaderProps {
  headers: string[];
}
