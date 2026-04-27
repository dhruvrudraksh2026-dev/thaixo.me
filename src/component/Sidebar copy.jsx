// import React from 'react';
// import { 
//   Home, 
//   Wallet, 
//   History, 
//   UserCheck, 
//   Trophy, 
//   Video, 
//   HelpCircle, 
//   LogOut 
// } from 'lucide-react';

// const menuItems = [
//   { icon: Home, label: 'Home', active: true },
//   { icon: Wallet, label: 'My Earnings', active: false },
//   { icon: History, label: 'Pay Out History', active: false },
//   { icon: UserCheck, label: 'Verify Identity', active: false },
//   { icon: Trophy, label: 'Milestone', active: false },
//   { icon: Video, label: 'Video Call History', active: false },
//   { icon: HelpCircle, label: 'Help & Support', active: false },
// ];

// export default function Sidebar({ show }) {
//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
//       <div className="p-4 text-center">
//         <div className="d-inline-flex align-items-center justify-content-center p-2 bg-white bg-opacity-25 rounded-circle mb-3" style={{ width: '64px', height: '64px' }}>
//           <svg viewBox="0 0 100 100" className="w-100 h-100 text-white fill-current">
//             <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="8" />
//             <circle cx="50" cy="50" r="20" />
//             <path d="M30 50 L70 50 M50 30 L50 70" stroke="currentColor" strokeWidth="8" />
//           </svg>
//         </div>
//         <h1 className="text-white h4 fw-bold mb-0">ThaiXO Social</h1>
//       </div>

//       <nav className="mt-4 flex-grow-1">
//         {menuItems.map((item, index) => (
//           <div
//             key={index}
//             className={`sidebar-item ${item.active ? 'sidebar-item-active' : ''}`}
//           >
//             <item.icon size={20} />
//             <span className="small fw-medium">{item.label}</span>
//           </div>
//         ))}
//       </nav>

//       <div className="p-3 border-top border-white border-opacity-10">
//         <div className="sidebar-item">
//           <LogOut size={20} />
//           <span className="small fw-medium">Log out</span>
//         </div>
//       </div>
//     </div>
//   );
// }







import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Wallet, 
  History, 
  UserCheck, 
  Trophy, 
  Video, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: Wallet, label: 'My Earnings', path: '/IncomeDashboard' },
  { icon: History, label: 'Pay Out History', path: '/WithdrawalHistory' },
  { icon: UserCheck, label: 'Verify Identity', path: '/CreatorSection' },
  { icon: Trophy, label: 'Milestone', path: '/Milestone' },
  { icon: Video, label: 'Video Call History', path: '/VideoCallHistory' },
  { icon: HelpCircle, label: 'Help & Support', path: '/helpsupport' },
];

export default function Sidebar({ show }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    // clear storage if needed
    localStorage.clear();

    // redirect to home page
    navigate("/");
  };

  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      
      <div className="p-4 text-center">
        <div 
          className="d-inline-flex align-items-center justify-content-center p-2 bg-white bg-opacity-25 rounded-circle mb-3"
          style={{ width: '64px', height: '64px' }}
        >
          <svg viewBox="0 0 100 100" className="w-100 h-100 text-white fill-current">
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="8" />
            <circle cx="50" cy="50" r="20" />
            <path d="M30 50 L70 50 M50 30 L50 70" stroke="currentColor" strokeWidth="8" />
          </svg>
        </div>

        <h1 className="text-white h4 fw-bold mb-0">
          ThaiXO Social
        </h1>
      </div>

      <nav className="mt-4 flex-grow-1">

        {menuItems.map((item, index) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-item text-decoration-none mt-3 ${
                  isActive ? 'sidebar-item-active' : ''
                }`
              }
            >
              <Icon size={20} />
              <span className="small fw-medium">
                {item.label}
              </span>
            </NavLink>
          );

        })}

      </nav>

      <div className="p-3 border-top border-white border-opacity-10">

        <div
          onClick={handleLogout}
          className="sidebar-item"
          style={{ cursor: "pointer" }}
        >
          <LogOut size={20} />
          <span className="small fw-medium">
            Log out
          </span>
        </div>

      </div>

    </div>
  );
}




















// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Home, 
//   DollarSign, 
//   History, 
//   UserCheck, 
//   Flag, 
//   Video, 
//   HelpCircle,
//   LogOut 
// } from 'lucide-react';

// export const menuItems = [
//   { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
//   { id: 'earnings', label: 'My Earnings', icon: DollarSign, path: '/IncomeDashboard' },
//   { id: 'payout', label: 'Pay Out History', icon: History, path: '/WithdrawalHistory' },
//   { id: 'verify', label: 'Verify Identity', icon: UserCheck, path: '/CreatorSection' },
//   { id: 'milestone', label: 'Milestone', icon: Flag, path: '/Milestone' },
//   { id: 'video', label: 'Video Call History', icon: Video, path: '/VideoCallHistory' },
//   { id: 'help', label: 'Help & Support', icon: HelpCircle, path: '/helpsupport' },
// ];

// export const Sidebar= () => (
//   <div className="sidebar-container">
//     <div className="d-flex flex-column align-items-center py-5">
//       <div className="sidebar-logo-circle">
//         <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '45px' }}>
//           <path d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z" fill="#e9527a" />
//           <circle cx="70" cy="30" r="20" stroke="#e9527a" strokeWidth="8" />
//           <circle cx="70" cy="30" r="5" fill="#e9527a" />
//           <path d="M70 20C72 20 74 22 74 24" stroke="#e9527a" strokeWidth="2" strokeLinecap="round" />
//         </svg>
//       </div>
//       <h1 className="h4 fw-bold m-0 text-white">ThaiXO Social</h1>
//     </div>

//     <nav className="flex-grow-1">
//       {menuItems.map((item) => {
//         const Icon = item.icon;
        
//         return (
//           <NavLink
//             key={item.id}
//             to={item.path}
//             className={({ isActive }) => `sidebar-nav-btn text-decoration-none ${isActive ? 'active' : ''}`}
//           >
//             {({ isActive }) => (
//               <>
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="sidebar-active-bg"
//                     transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                   />
//                 )}
//                 <div className="sidebar-nav-content">
//                   <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
//                   <span className={isActive ? 'fw-bold fs-5' : 'fw-medium'}>
//                     {item.label}
//                   </span>
//                 </div>
//               </>
//             )}
//           </NavLink>
//         );
//       })}
//     </nav>

//     <div className="p-4 border-top border-white-10">
//       <button className="btn btn-link text-white text-decoration-none d-flex align-items-center gap-3 opacity-75 hover-opacity-100">
//         <LogOut size={20} />
//         <span className="fw-medium">Logout</span>
//       </button>
//     </div>
//   </div>
// );

// export default Sidebar;





















// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Home, 
//   DollarSign, 
//   History, 
//   UserCheck, 
//   Flag, 
//   Video, 
//   HelpCircle,
//   LogOut 
// } from 'lucide-react';

// export const menuItems = [
//   { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
//   { id: 'earnings', label: 'My Earnings', icon: DollarSign, path: '/IncomeDashboard' },
//   { id: 'payout', label: 'Pay Out History', icon: History, path: '/WithdrawalHistory' },
//   { id: 'verify', label: 'Verify Identity', icon: UserCheck, path: '/CreatorSection' },
//   { id: 'milestone', label: 'Milestone', icon: Flag, path: '/Milestone' },
//   { id: 'video', label: 'Video Call History', icon: Video, path: '/VideoCallHistory' },
//   { id: 'help', label: 'Help & Support', icon: HelpCircle, path: '/helpsupport' },
// ];

// export const Sidebar = () => {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // optional: clear localStorage or token
//     localStorage.clear();

//     // redirect to home "/"
//     navigate("/");
//   };

//   return (
//     <div className="sidebar-container">
//       <div className="d-flex flex-column align-items-center py-5">
//         <div className="sidebar-logo-circle">
//           <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '45px' }}>
//             <path d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z" fill="#e9527a" />
//             <circle cx="70" cy="30" r="20" stroke="#e9527a" strokeWidth="8" />
//             <circle cx="70" cy="30" r="5" fill="#e9527a" />
//             <path d="M70 20C72 20 74 22 74 24" stroke="#e9527a" strokeWidth="2" strokeLinecap="round" />
//           </svg>
//         </div>
//         <h1 className="h4 fw-bold m-0 text-white">ThaiXO Social</h1>
//       </div>

//       <nav className="flex-grow-1">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
          
//           return (
//             <NavLink
//               key={item.id}
//               to={item.path}
//               className={({ isActive }) => `sidebar-nav-btn text-decoration-none ${isActive ? 'active' : ''}`}
//             >
//               {({ isActive }) => (
//                 <>
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeTab"
//                       className="sidebar-active-bg"
//                       transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                   <div className="sidebar-nav-content">
//                     <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
//                     <span className={isActive ? 'fw-bold fs-5' : 'fw-medium'}>
//                       {item.label}
//                     </span>
//                   </div>
//                 </>
//               )}
//             </NavLink>
//           );
//         })}
//       </nav>

//       <div className="p-4 border-top border-white-10">
//         <button 
//           onClick={handleLogout}
//           className="btn btn-link text-white text-decoration-none d-flex align-items-center gap-3 opacity-75 hover-opacity-100"
//         >
//           <LogOut size={20} />
//           <span className="fw-medium">Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;