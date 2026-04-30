import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./component/Login";
import Otp from "./component/Otp";
import Dashboard from "./component/Dashboard";
import Withdrawal from "./component/Withdrawal";
import Withdrawalpromt from "./component/Withdrawalpromt";
import VideoCallHistory from "./component/VideoCallHistory";
import WithdrawalHistory from "./component/WithdrawalHistory";
import IncomeDashboard from "./component/IncomeDashboard";
import Helpsupport from "./component/Helpsupport";
import WithdrawalPromptPay from "./component/WithdrawalPromptPay";
import BankTransfer from "./component/BankTransfer";
import EWalletWithdrawal from "./component/EWalletWithdrawal";
import DailySeeMore from "./component/DailySeeMore";
// import CreatorSection from "./component/CreatorSection";
import CreatorSelection from "./component/CreatorSelection";
import SelfCreator from "./component/SelfCreator";
import AgencyCreator from "./component/AgencyCreator";
import Milestone from "./component/Milestone";
import { LanguageProvider } from './context/LanguageContext';
import CreatorSelectionSelf  from './component/CreatorSelectionSelf';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/Withdrawal" element={<Withdrawal />} />
        {/* <Route path="/Withdrawalpromt" element={<Withdrawalpromt />} /> */}
        <Route path="/WithdrawalHistory" element={<WithdrawalHistory />} />
        <Route path="/IncomeDashboard" element={<IncomeDashboard />} />
        <Route path="/VideoCallHistory" element={<VideoCallHistory />} />
        <Route path="/Helpsupport" element={<Helpsupport />} />
        {/* <Route path="/WithdrawalPromptPay" element={<WithdrawalPromptPay />} /> */}
        {/* <Route path="/BankTransfer" element={<BankTransfer />} /> */}
        {/* <Route path="/EWalletWithdrawal" element={<EWalletWithdrawal />} /> */}
        <Route path="/DailySeeMore" element={<DailySeeMore />} />
        <Route path="/dailyseemore/:type" element={<DailySeeMore />} />
        <Route path="/CreatorSelection" element={<CreatorSelection />} />
        {/* <Route path="/CreatorSection" element={<CreatorSection />} /> */}
        <Route path="/SelfCreator" element={<SelfCreator />} />
        <Route path="/AgencyCreator" element={<AgencyCreator />} />
        <Route path="/Milestone" element={<Milestone />} />
        <Route path="/CreatorSelectionSelf" element={<CreatorSelectionSelf />} />
        
      </Routes>
    </Router>
  );
}

export default App;