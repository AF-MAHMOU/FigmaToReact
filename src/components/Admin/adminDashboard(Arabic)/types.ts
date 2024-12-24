export interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

export interface TableHeaderProps {
  headers: string[];
}

export interface TableRowProps {
  actions: string[];
  cells: string[];
}

export interface SectionHeaderProps {
  title: string;
  buttons: string[];
}

export interface NotificationInputProps {
  onSend: (message: string) => void;
}

export interface DashboardSectionProps {
  title: string;
  description?: string;
  buttons: string[];
}
