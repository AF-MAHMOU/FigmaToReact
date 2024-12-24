export interface DatePickerProps {
  onDateChange: (date: string) => void;
  iconSrc: string;
}

export interface ReportHistoryItemProps {
  reportId: string;
  reportType: string;
  dateGenerated: string;
  status: string;
}

export interface ActionButtonProps {
  label: string;
  onClick: () => void;
}
