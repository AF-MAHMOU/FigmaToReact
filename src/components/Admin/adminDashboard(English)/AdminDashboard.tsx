import * as React from "react";
import { DashboardButton } from "./DashboardButton";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { DashboardSection } from "./DashboardSection";
import { NotificationForm } from "./NotificationForm";

export const AdminDashboard: React.FC = () => {
  const applicationHeaders = [
    "Application ID",
    "Applicant Name",
    "Status",
    "Stage",
    "Actions",
  ];
  const userHeaders = ["User ID", "Name", "Role", "Status", "Actions"];

  const applicationData = [
    {
      cells: [
        "A101",
        "Dr. Ahmed Youssef",
        "In Progress",
        "Impact Factor Preparation",
      ],
      actions: [
        <DashboardButton key="return">Return</DashboardButton>,
        <DashboardButton key="complete">Complete</DashboardButton>,
      ],
    },
    {
      cells: ["A102", "Dr. Salma Hassan", "Completed", "Final Report Sent"],
      actions: [<DashboardButton key="view">View</DashboardButton>],
    },
  ];

  const userData = [
    {
      cells: ["U001", "Prof. Mona Ezz", "Voucher", "Active"],
      actions: [
        <DashboardButton key="edit">Edit</DashboardButton>,
        <DashboardButton key="delete">Delete</DashboardButton>,
      ],
    },
    {
      cells: ["U002", "Dr. Omar Sherif", "Coordinator", "Active"],
      actions: [
        <DashboardButton key="edit">Edit</DashboardButton>,
        <DashboardButton key="delete">Delete</DashboardButton>,
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center pb-16 bg-white">
      <div className="flex flex-wrap gap-5 justify-between self-stretch p-4 shadow-[0px_2px_5px_rgba(0,0,0,0.1)] max-md:max-w-full">
        <div className="my-auto text-2xl font-bold text-white max-md:max-w-full">
          SCU Promotion Platform - Admin Dashboard
        </div>
        <DashboardButton>Switch to Arabic</DashboardButton>
      </div>

      <DashboardSection title="Manage Applications">
        <div className="flex gap-4 mt-4">
          <DashboardButton>View All Applications</DashboardButton>
          <DashboardButton>Return Application for Revision</DashboardButton>
          <DashboardButton>Mark Application as Completed</DashboardButton>
        </div>
        <TableHeader headers={applicationHeaders} />
        {applicationData.map((row, index) => (
          <TableRow key={index} cells={row.cells} actions={row.actions} />
        ))}
      </DashboardSection>

      <DashboardSection title="Manage Users">
        <div className="flex gap-4 mt-4">
          <DashboardButton>Add New User</DashboardButton>
          <DashboardButton>Edit User Roles</DashboardButton>
          <DashboardButton>View All Users</DashboardButton>
        </div>
        <TableHeader headers={userHeaders} />
        {userData.map((row, index) => (
          <TableRow key={index} cells={row.cells} actions={row.actions} />
        ))}
      </DashboardSection>

      <DashboardSection title="Generate Reports">
        <div className="flex gap-4 mt-4">
          <DashboardButton>Generate KPI Report</DashboardButton>
          <DashboardButton>Generate System Activity Report</DashboardButton>
        </div>
      </DashboardSection>

      <DashboardSection title="Workflow Settings">
        <div className="mt-5 text-base max-md:max-w-full">
          Configure workflow transitions and access controls for various stages
          of the promotion process.
        </div>
        <div className="flex gap-4 mt-4">
          <DashboardButton>Set Workflow Rules</DashboardButton>
          <DashboardButton>View Current Rules</DashboardButton>
        </div>
      </DashboardSection>

      <DashboardSection title="Send Notifications">
        <NotificationForm onSubmit={(message) => console.log(message)} />
      </DashboardSection>

      <DashboardSection title="System Backup">
        <div className="mt-5 text-base max-md:max-w-full">
          Ensure data integrity by creating a backup or restoring from a
          previous backup.
        </div>
        <div className="flex gap-4 mt-4">
          <DashboardButton>Create Backup</DashboardButton>
          <DashboardButton>Restore Backup</DashboardButton>
        </div>
      </DashboardSection>
    </div>
  );
};
