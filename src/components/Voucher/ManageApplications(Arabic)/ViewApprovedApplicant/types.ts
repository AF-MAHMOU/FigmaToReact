export interface ProfileData {
  name: string;
  age: number;
  address: string;
  approvalDate: string;
  cvLink: string;
  occupation: string;
  approvedBy: string;
}

export interface HeaderProps {
  title: string;
  logoSrc: string;
}

export interface ProfileCardProps {
  profileData: ProfileData;
  imageSrc: string;
}
