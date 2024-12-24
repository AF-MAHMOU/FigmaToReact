import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Navbar
import NavBarArabic from "./components/NavBar(Arabic)";
import NavBarEnglish from "./components/NavBar(English)";

// Academic Header
import AcademicHeaderArabic from "./components/academicHeader(Arabic)";
import AcademicHeaderEnglish from "./components/academicHeader(English)";

// Admin Dashboard
import AdminDashboardArabic from "./components/Admin/adminDashboard(Arabic)/AdminDashboard";
import AdminDashboardEnglish from "./components/Admin/adminDashboard(English)/AdminDashboard";

// Manage Applications
import ManageApplicationsArabic from "./components/Voucher/ManageApplications(Arabic)/ViewApprovedApplicant";
import ManageApplicationsEnglish from "./components/Voucher/ManageApplications(English)/ViewApprovedApplicant";

// Schedule Interview
import ScheduleInterviewArabic from "./components/ScheduleInterview(Arabic)/Header";
import ScheduleInterviewEnglish from "./components/ScheduleInterview(English)/Header";

// Generate Reports
import GenerateReportsArabic from "./components/Voucher/GenerateReports(Arabic)";
import GenerateReportsEnglish from "./components/Voucher/GenerateReports(English)";

const App = () => {
  return (
    <Router>
      <div>
        {/* Add a navigation bar */}
        <NavBarEnglish /> {/* Switch to NavBarArabic for Arabic */}
        <Routes>
          {/* Academic Header Routes */}
          <Route
            path="/academic-header-arabic"
            element={<AcademicHeaderArabic />}
          />
          <Route
            path="/academic-header-english"
            element={<AcademicHeaderEnglish />}
          />

          {/* Admin Dashboard Routes */}
          <Route
            path="/admin-dashboard-arabic"
            element={<AdminDashboardArabic />}
          />
          <Route
            path="/admin-dashboard-english"
            element={<AdminDashboardEnglish />}
          />

          {/* Manage Applications Routes */}
          <Route
            path="/manage-applications-arabic"
            element={<ManageApplicationsArabic />}
          />
          <Route
            path="/manage-applications-english"
            element={<ManageApplicationsEnglish />}
          />

          {/* Schedule Interview Routes */}
          <Route
            path="/schedule-interview-arabic"
            element={<ScheduleInterviewArabic />}
          />
          <Route
            path="/schedule-interview-english"
            element={<ScheduleInterviewEnglish />}
          />

          {/* Generate Reports Routes */}
          <Route
            path="/generate-reports-arabic"
            element={<GenerateReportsArabic />}
          />
          <Route
            path="/generate-reports-english"
            element={<GenerateReportsEnglish />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
