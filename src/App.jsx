// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Login from "./component/Login";
// import Otp from "./component/Otp";
// import Dashboard from "./component/Dashboard";
// import Withdrawal from "./component/Withdrawal";
// import VideoCallHistory from "./component/VideoCallHistory";
// import WithdrawalHistory from "./component/WithdrawalHistory";
// import IncomeDashboard from "./component/IncomeDashboard";
// import Helpsupport from "./component/Helpsupport";
// import DailySeeMore from "./component/DailySeeMore";
// import CreatorSelection from "./component/CreatorSelection";
// import SelfCreator from "./component/SelfCreator";
// import AgencyCreator from "./component/AgencyCreator";
// import Milestone from "./component/Milestone";
// import CreatorSelectionSelf from "./component/CreatorSelectionSelf";

// function App() {
//   return (
//     <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/otp" element={<Otp />} />
//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/Withdrawal" element={<Withdrawal />} />
//         <Route path="/WithdrawalHistory" element={<WithdrawalHistory />} />
//         <Route path="/IncomeDashboard" element={<IncomeDashboard />} />
//         <Route path="/VideoCallHistory" element={<VideoCallHistory />} />
//         <Route path="/Helpsupport" element={<Helpsupport />} />
//         <Route path="/DailySeeMore" element={<DailySeeMore />} />
//         <Route path="/dailyseemore/:type" element={<DailySeeMore />} />
//         <Route path="/CreatorSelection" element={<CreatorSelection />} />
//         <Route path="/SelfCreator" element={<SelfCreator />} />
//         <Route path="/AgencyCreator" element={<AgencyCreator />} />
//         <Route path="/Milestone" element={<Milestone />} />
//         <Route
//           path="/CreatorSelectionSelf"
//           element={<CreatorSelectionSelf />}
//         />
//       </Routes>
//   );
// }

// export default App;












// import { Routes, Route } from "react-router-dom";

// import Login from "./component/Login";
// import Otp from "./component/Otp";
// import Dashboard from "./component/Dashboard";
// import Withdrawal from "./component/Withdrawal";
// import VideoCallHistory from "./component/VideoCallHistory";
// import WithdrawalHistory from "./component/WithdrawalHistory";
// import IncomeDashboard from "./component/IncomeDashboard";
// import Helpsupport from "./component/Helpsupport";
// import DailySeeMore from "./component/DailySeeMore";
// import CreatorSelection from "./component/CreatorSelection";
// import SelfCreator from "./component/SelfCreator";
// import AgencyCreator from "./component/AgencyCreator";
// import Milestone from "./component/Milestone";
// import CreatorSelectionSelf from "./component/CreatorSelectionSelf";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/otp" element={<Otp />} />
//       <Route path="/Dashboard" element={<Dashboard />} />
//       <Route path="/Withdrawal" element={<Withdrawal />} />
//       <Route path="/WithdrawalHistory" element={<WithdrawalHistory />} />
//       <Route path="/IncomeDashboard" element={<IncomeDashboard />} />
//       <Route path="/VideoCallHistory" element={<VideoCallHistory />} />
//       <Route path="/Helpsupport" element={<Helpsupport />} />
//       <Route path="/DailySeeMore" element={<DailySeeMore />} />
//       <Route path="/dailyseemore/:type" element={<DailySeeMore />} />
//       <Route path="/CreatorSelection" element={<CreatorSelection />} />
//       <Route path="/SelfCreator" element={<SelfCreator />} />
//       <Route path="/AgencyCreator" element={<AgencyCreator />} />
//       <Route path="/Milestone" element={<Milestone />} />
//       <Route
//         path="/CreatorSelectionSelf"
//         element={<CreatorSelectionSelf />}
//       />
//     </Routes>
//   );
// }

// export default App;
















import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Prot/ProtectedRoute";

import Login from "./component/Login";
import Otp from "./component/Otp";
import Dashboard from "./component/Dashboard";
import Withdrawal from "./component/Withdrawal";
import VideoCallHistory from "./component/VideoCallHistory";
import WithdrawalHistory from "./component/WithdrawalHistory";
import IncomeDashboard from "./component/IncomeDashboard";
import Helpsupport from "./component/Helpsupport";
import DailySeeMore from "./component/DailySeeMore";
import CreatorSelection from "./component/CreatorSelection";
import SelfCreator from "./component/SelfCreator";
import AgencyCreator from "./component/AgencyCreator";
import Milestone from "./component/Milestone";
import CreatorSelectionSelf from "./component/CreatorSelectionSelf";
import NotFound from "./component/NotFound";
import PlatformPolicy from "./component/platform-policy";
import PlatformPolicyWithoutLogin from "./component/platform-policyWithoutLogin";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/privacy-policy" element={<PlatformPolicy />} />
      <Route path="/privacy" element={<PlatformPolicyWithoutLogin />} />

      {/* Protected Routes */}
      <Route path="/Dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route path="/Withdrawal" element={
        <ProtectedRoute>
          <Withdrawal />
        </ProtectedRoute>
      } />

      <Route path="/WithdrawalHistory" element={
        <ProtectedRoute>
          <WithdrawalHistory />
        </ProtectedRoute>
      } />

      <Route path="/IncomeDashboard" element={
        <ProtectedRoute>
          <IncomeDashboard />
        </ProtectedRoute>
      } />

      <Route path="/VideoCallHistory" element={
        <ProtectedRoute>
          <VideoCallHistory />
        </ProtectedRoute>
      } />

      <Route path="/Helpsupport" element={
        <ProtectedRoute>
          <Helpsupport />
        </ProtectedRoute>
      } />

      <Route path="/DailySeeMore" element={
        <ProtectedRoute>
          <DailySeeMore />
        </ProtectedRoute>
      } />

      <Route path="/dailyseemore/:type" element={
        <ProtectedRoute>
          <DailySeeMore />
        </ProtectedRoute>
      } />

      <Route path="/CreatorSelection" element={
        <ProtectedRoute>
          <CreatorSelection />
        </ProtectedRoute>
      } />

      <Route path="/SelfCreator" element={
        <ProtectedRoute>
          <SelfCreator />
        </ProtectedRoute>
      } />

      <Route path="/AgencyCreator" element={
        <ProtectedRoute>
          <AgencyCreator />
        </ProtectedRoute>
      } />

      <Route path="/Milestone" element={
        <ProtectedRoute>
          <Milestone />
        </ProtectedRoute>
      } />

      <Route path="/CreatorSelectionSelf" element={
        <ProtectedRoute>
          <CreatorSelectionSelf />
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;