export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface TableHeaderProps {
  headers: string[];
}

export interface TableRowProps {
  cells: string[];
  actions?: React.ReactNode[];
}

export interface DashboardSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface NotificationFormProps {
  onSubmit: (message: string) => void;
}
