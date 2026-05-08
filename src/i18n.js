// // import { useState, useEffect, createContext, useContext } from "react";

// // const LanguageContext = createContext();

// // // Translation dictionaries
// // const translations = {
// //   en: {
// //     loading: "Loading video call history...",
// //     error: "An error occurred",
// //     noData: "No video call history found",
// //     tryAgain: "Try Again",
// //     date: "Date",
// //     packageName: "Package Name",
// //     callFrom: "Call From",
// //     startTime: "Start Time (TH)",
// //     endTime: "End Time (TH)",
// //     duration: "Duration",
// //     ratePerMin: "Rate/min",
// //     income: "Income (฿)",
// //     loginRequired: "Please login to view video call history",
// //     sessionExpired: "Session expired. Please login again.",
// //     authFailed: "Authentication failed. Please login again.",
// //   },
// //   th: {
// //     loading: "กำลังโหลดประวัติการโทรวิดีโอ...",
// //     error: "เกิดข้อผิดพลาด",
// //     noData: "ไม่พบประวัติการโทรวิดีโอ",
// //     tryAgain: "ลองอีกครั้ง",
// //     date: "วันที่",
// //     packageName: "ชื่อแพ็คเกจ",
// //     callFrom: "โทรจาก",
// //     startTime: "เวลาเริ่ม (TH)",
// //     endTime: "เวลาสิ้นสุด (TH)",
// //     duration: "ระยะเวลา",
// //     ratePerMin: "ราคา/นาที",
// //     income: "รายได้ (฿)",
// //     loginRequired: "กรุณาเข้าสู่ระบบเพื่อดูประวัติการโทรวิดีโอ",
// //     sessionExpired: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
// //     authFailed: "การตรวจสอบสิทธิ์ล้มเหลว กรุณาเข้าสู่ระบบอีกครั้ง",
// //   },
// // };

// // export function LanguageProvider({ children }) {
// //   const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

// //   useEffect(() => {
// //     localStorage.setItem("lang", lang);
// //   }, [lang]);

// //   const t = (key) => translations[lang]?.[key] || key;

// //   return (
// //     <LanguageContext.Provider value={{ lang, setLang, t }}>
// //       {children}
// //     </LanguageContext.Provider>
// //   );
// // }

// // export function useLanguage() {
// //   return useContext(LanguageContext);
// // }
















// import { useState, useEffect, createContext, useContext } from "react";

// const LanguageContext = createContext();

// const translations = {
//   en: {
//     loading: "Loading video call history...",
//     fetchError: "An error occurred while fetching video call history",
//     noData: "No video call history found",
//     tryAgain: "Try Again",
//     date: "Date",
//     packageName: "Package Name",
//     callFrom: "Call From",
//     startTime: "Start Time (TH)",
//     endTime: "End Time (TH)",
//     duration: "Duration",
//     ratePerMin: "Rate/min",
//     income: "Income (฿)",
//     loginRequired: "Please login to view video call history",
//     sessionExpired: "Session expired. Please login again.",
//     authFailed: "Authentication failed. Please login again.",
//   },
//   th: {
//     loading: "กำลังโหลดประวัติการโทรวิดีโอ...",
//     fetchError: "เกิดข้อผิดพลาดขณะดึงข้อมูลประวัติ",
//     noData: "ไม่พบประวัติการโทรวิดีโอ",
//     tryAgain: "ลองอีกครั้ง",
//     date: "วันที่",
//     packageName: "ชื่อแพ็คเกจ",
//     callFrom: "โทรจาก",
//     startTime: "เวลาเริ่ม (TH)",
//     endTime: "เวลาสิ้นสุด (TH)",
//     duration: "ระยะเวลา",
//     ratePerMin: "ราคา/นาที",
//     income: "รายได้ (฿)",
//     loginRequired: "กรุณาเข้าสู่ระบบเพื่อดูประวัติการโทรวิดีโอ",
//     sessionExpired: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//     authFailed: "การตรวจสอบสิทธิ์ล้มเหลว กรุณาเข้าสู่ระบบอีกครั้ง",
//   },
// };

// export function LanguageProvider({ children }) {
//   const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

//   useEffect(() => {
//     localStorage.setItem("lang", lang);
//   }, [lang]);

//   const t = (key) => translations[lang]?.[key] || key;

//   return (
//     <LanguageContext.Provider value={{ lang, setLang, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// }






















// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Translation resources
// const resources = {
//   en: {
//     translation: {
//       welcome: "Welcome back {{name}}!",
//       todayEarnings: "Today's Earnings",
//       currentBalance: "Current Balance",
//       lastMonthEarnings: "Last Month Earnings",
//       earningGraph: "Earning Graph",
//       weeklyProgress: "Weekly Progress",
//       weeklyList: "Weekly list",
//       date: "Date",
//       income: "Income",
//       noData: "No weekly earnings data available",
//       loading: "Loading dashboard data...",
//       tryAgain: "Try Again",
//       errorSession: "Session expired. Please login again.",
//       errorFetch: "An error occurred while fetching dashboard data",
//       tooltipEarnings: "Earnings",
//       thb: "THB"
//     }
//   },
//   th: {
//     translation: {
//       welcome: "ยินดีต้อนรับกลับ {{name}}!",
//       todayEarnings: "รายได้วันนี้",
//       currentBalance: "ยอดเงินคงเหลือ",
//       lastMonthEarnings: "รายได้เดือนที่แล้ว",
//       earningGraph: "กราฟรายได้",
//       weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//       weeklyList: "รายการรายสัปดาห์",
//       date: "วันที่",
//       income: "รายได้",
//       noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//       loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//       tryAgain: "ลองอีกครั้ง",
//       errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//       errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//       tooltipEarnings: "รายได้",
//       thb: "บาท"
//     }
//   }
// };




// i18n
//   .use(LanguageDetector)           // detects user language from browser / localStorage
//   .use(initReactI18next)           // passes i18n instance to react-i18next
//   .init({
//     resources,
//     fallbackLng: 'en',             // fallback if detected language is not available
//     debug: false,                  // set true to see logs
//     interpolation: {
//       escapeValue: false,           // React already safes from XSS
//     },
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage'],    // cache language in localStorage
//       lookupLocalStorage: 'appLanguage'  // matches your existing key
//     }
//   });

// export default i18n;
















// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Translation resources
// const resources = {
//   en: {
//     translation: {
//       welcome: "Welcome back {{name}}!",
//       todayEarnings: "Today's Earnings",
//       currentBalance: "Current Balance",
//       lastMonthEarnings: "Last Month Earnings",
//       earningGraph: "Earning Graph",
//       weeklyProgress: "Weekly Progress",
//       weeklyList: "Weekly list",
//       date: "Date",
//       income: "Income",
//       noData: "No weekly earnings data available",
//       loading: "Loading dashboard data...",
//       tryAgain: "Try Again",
//       errorSession: "Session expired. Please login again.",
//       errorFetch: "An error occurred while fetching dashboard data",
//       tooltipEarnings: "Earnings",
//       thb: "THB",
//       // Video call history translations
//       videoHistory: {
//         date: "Date",
//         packageName: "Package Name",
//         callFrom: "Call From",
//         startTime: "Start Time (TH)",
//         endTime: "End Time (TH)",
//         duration: "Duration",
//         ratePerMin: "Rate/min",
//         income: "Income (฿)",
//         noData: "No video call history found"
//       }
//     }
//   },
//   th: {
//     translation: {
//       welcome: "ยินดีต้อนรับกลับ {{name}}!",
//       todayEarnings: "รายได้วันนี้",
//       currentBalance: "ยอดเงินคงเหลือ",
//       lastMonthEarnings: "รายได้เดือนที่แล้ว",
//       earningGraph: "กราฟรายได้",
//       weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//       weeklyList: "รายการรายสัปดาห์",
//       date: "วันที่",
//       income: "รายได้",
//       noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//       loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//       tryAgain: "ลองอีกครั้ง",
//       errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//       errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//       tooltipEarnings: "รายได้",
//       thb: "บาท",
//       // Video call history translations
//       videoHistory: {
//         date: "วันที่",
//         packageName: "ชื่อแพ็คเกจ",
//         callFrom: "ผู้โทร",
//         startTime: "เวลาเริ่มต้น",
//         endTime: "เวลาสิ้นสุด",
//         duration: "ระยะเวลา",
//         ratePerMin: "อัตราต่อนาที",
//         income: "รายได้ (บาท)",
//         noData: "ไม่มีประวัติการวิดีโอคอล"
//       }
//     }
//   }
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: 'en',
//     debug: false,
//     interpolation: {
//       escapeValue: false,
//     },
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage'],
//       lookupLocalStorage: 'appLanguage'
//     }


//   });

// export default i18n;













// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Translation resources
// const resources = {
//   en: {
//     translation: {
//       welcome: "Welcome back {{name}}!",
//       todayEarnings: "Today's Earnings",
//       currentBalance: "Current Balance",
//       lastMonthEarnings: "Last Month Earnings",
//       earningGraph: "Earning Graph",
//       weeklyProgress: "Weekly Progress",
//       weeklyList: "Weekly list",
//       date: "Date",
//       income: "Income",
//       noData: "No weekly earnings data available",
//       loading: "Loading dashboard data...",
//       tryAgain: "Try Again",
//       errorSession: "Session expired. Please login again.",
//       errorFetch: "An error occurred while fetching dashboard data",
//       tooltipEarnings: "Earnings",
//       thb: "THB",

//       // Video call history translations
//       videoHistory: {
//         date: "Date",
//         packageName: "Package Name",
//         callFrom: "Call From",
//         startTime: "Start Time (TH)",
//         endTime: "End Time (TH)",
//         duration: "Duration",
//         ratePerMin: "Rate/min",
//         income: "Income (฿)",
//         noData: "No video call history found"
//       },

//       // Header translations
//       header: {
//         title: "ThaiXO Creator Studio",
//         notifications: "Notifications",
//         markAllRead: "Mark all as read",
//         loading: "Loading...",
//         loadingNotifications: "Loading notifications...",
//         noNotifications: "No notifications",
//         language: "Language",
//         logout: "Log out",
//         loggingOut: "Logging out...",
//         logoutConfirmTitle: "Confirm Logout",
//         logoutConfirmMessage: "Are you sure you want to log out?",
//         cancel: "Cancel",
//         confirmLogout: "Logout",
//         loadError: "Could not load notifications"
//       }
//     }
//   },
//   th: {
//     translation: {
//       welcome: "ยินดีต้อนรับกลับ {{name}}!",
//       todayEarnings: "รายได้วันนี้",
//       currentBalance: "ยอดเงินคงเหลือ",
//       lastMonthEarnings: "รายได้เดือนที่แล้ว",
//       earningGraph: "กราฟรายได้",
//       weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//       weeklyList: "รายการรายสัปดาห์",
//       date: "วันที่",
//       income: "รายได้",
//       noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//       loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//       tryAgain: "ลองอีกครั้ง",
//       errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//       errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//       tooltipEarnings: "รายได้",
//       thb: "บาท",

//       // Video call history translations (Thai)
//       videoHistory: {
//         date: "วันที่",
//         packageName: "ชื่อแพ็คเกจ",
//         callFrom: "ผู้โทร",
//         startTime: "เวลาเริ่มต้น",
//         endTime: "เวลาสิ้นสุด",
//         duration: "ระยะเวลา",
//         ratePerMin: "อัตราต่อนาที",
//         income: "รายได้ (บาท)",
//         noData: "ไม่มีประวัติการวิดีโอคอล"
//       },

//       // Header translations (Thai)
//       header: {
//         title: "ไทยXO Creator Studio",
//         notifications: "การแจ้งเตือน",
//         markAllRead: "ทำเครื่องหมายว่าอ่านทั้งหมด",
//         loading: "กำลังโหลด...",
//         loadingNotifications: "กำลังโหลดการแจ้งเตือน...",
//         noNotifications: "ไม่มีการแจ้งเตือน",
//         language: "ภาษา",
//         logout: "ออกจากระบบ",
//         loggingOut: "กำลังออกจากระบบ...",
//         logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//         logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//         cancel: "ยกเลิก",
//         confirmLogout: "ออกจากระบบ",
//         loadError: "ไม่สามารถโหลดการแจ้งเตือนได้"
//       }
//     }
//   }
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: 'en',
//     debug: false,
//     interpolation: {
//       escapeValue: false,
//     },
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage'],
//       lookupLocalStorage: 'appLanguage'
//     }
//   });

// export default i18n;












// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Translation resources
// const resources = {
//   en: {
//     translation: {
//       welcome: "Welcome back {{name}}!",
//       todayEarnings: "Today's Earnings",
//       currentBalance: "Current Balance",
//       lastMonthEarnings: "Last Month Earnings",
//       earningGraph: "Earning Graph",
//       weeklyProgress: "Weekly Progress",
//       weeklyList: "Weekly list",
//       date: "Date",
//       income: "Income",
//       noData: "No weekly earnings data available",
//       loading: "Loading dashboard data...",
//       tryAgain: "Try Again",
//       errorSession: "Session expired. Please login again.",
//       errorFetch: "An error occurred while fetching dashboard data",
//       tooltipEarnings: "Earnings",
//       thb: "THB",

//       // Video call history translations
//       videoHistory: {
//         date: "Date",
//         packageName: "Package Name",
//         callFrom: "Call From",
//         startTime: "Start Time (TH)",
//         endTime: "End Time (TH)",
//         duration: "Duration",
//         ratePerMin: "Rate/min",
//         income: "Income (฿)",
//         noData: "No video call history found"
//       },

//       // Header translations
//       header: {
//         title: "ThaiXO Creator Studio",
//         notifications: "Notifications",
//         markAllRead: "Mark all as read",
//         loading: "Loading...",
//         loadingNotifications: "Loading notifications...",
//         noNotifications: "No notifications",
//         language: "Language",
//         logout: "Log out",
//         loggingOut: "Logging out...",
//         logoutConfirmTitle: "Confirm Logout",
//         logoutConfirmMessage: "Are you sure you want to log out?",
//         cancel: "Cancel",
//         confirmLogout: "Logout",
//         loadError: "Could not load notifications"
//       },

//       // Milestone translations
//       milestone: {
//         loading: "Loading Milestones...",
//         errorBackToLogin: "Back to Login",
//         myCreatorLevel: "My Creator Level:",
//         progressTo: "Progress to",
//         nextLevel: "(Next Level)",
//         highestLevel: "🎉 You have reached the highest level!",
//         hrs: "hrs",
//         current: "(Current)",
//         hoursRemaining: "hours remaining to unlock",
//         andEarn: "and earn",
//         keepStreaming: "You are at the highest level. Keep streaming!",
//         levelsAndRewards: "Levels & Rewards",
//         levelName: "Level Name",
//         milestonesHours: "Milestones (Hours)",
//         earningsRate: "Earnings (Rate)",
//         status: "Status",
//         active: "Active",
//         completed: "Completed",
//         locked: "Locked",
//         unlockSoon: "(Unlock soon)",
//         milestoneLabel: "Milestones",
//         earningsLabel: "Earnings"
//       }
//     }
//   },
//   th: {
//     translation: {
//       welcome: "ยินดีต้อนรับกลับ {{name}}!",
//       todayEarnings: "รายได้วันนี้",
//       currentBalance: "ยอดเงินคงเหลือ",
//       lastMonthEarnings: "รายได้เดือนที่แล้ว",
//       earningGraph: "กราฟรายได้",
//       weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//       weeklyList: "รายการรายสัปดาห์",
//       date: "วันที่",
//       income: "รายได้",
//       noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//       loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//       tryAgain: "ลองอีกครั้ง",
//       errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//       errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//       tooltipEarnings: "รายได้",
//       thb: "บาท",

//       // Video call history translations (Thai)
//       videoHistory: {
//         date: "วันที่",
//         packageName: "ชื่อแพ็คเกจ",
//         callFrom: "ผู้โทร",
//         startTime: "เวลาเริ่มต้น",
//         endTime: "เวลาสิ้นสุด",
//         duration: "ระยะเวลา",
//         ratePerMin: "อัตราต่อนาที",
//         income: "รายได้ (บาท)",
//         noData: "ไม่มีประวัติการวิดีโอคอล"
//       },

//       // Header translations (Thai)
//       header: {
//         title: "ไทยXO Creator Studio",
//         notifications: "การแจ้งเตือน",
//         markAllRead: "ทำเครื่องหมายว่าอ่านทั้งหมด",
//         loading: "กำลังโหลด...",
//         loadingNotifications: "กำลังโหลดการแจ้งเตือน...",
//         noNotifications: "ไม่มีการแจ้งเตือน",
//         language: "ภาษา",
//         logout: "ออกจากระบบ",
//         loggingOut: "กำลังออกจากระบบ...",
//         logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//         logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//         cancel: "ยกเลิก",
//         confirmLogout: "ออกจากระบบ",
//         loadError: "ไม่สามารถโหลดการแจ้งเตือนได้"
//       },

//       // Milestone translations (Thai)
//       milestone: {
//         loading: "กำลังโหลดข้อมูลระดับ...",
//         errorBackToLogin: "กลับไปที่เข้าสู่ระบบ",
//         myCreatorLevel: "ระดับครีเอเตอร์ของฉัน:",
//         progressTo: "ความคืบหน้าไปสู่",
//         nextLevel: "(ระดับถัดไป)",
//         highestLevel: "🎉 คุณถึงระดับสูงสุดแล้ว!",
//         hrs: "ชม.",
//         current: "(ปัจจุบัน)",
//         hoursRemaining: "ชั่วโมงที่เหลือเพื่อปลดล็อค",
//         andEarn: "และรับรายได้",
//         keepStreaming: "คุณอยู่ในระดับสูงสุด สตรีมต่อไปเรื่อย ๆ!",
//         levelsAndRewards: "ระดับและรางวัล",
//         levelName: "ชื่อระดับ",
//         milestonesHours: "เป้าหมาย (ชั่วโมง)",
//         earningsRate: "รายได้ (อัตรา)",
//         status: "สถานะ",
//         active: "ใช้งานอยู่",
//         completed: "สำเร็จแล้ว",
//         locked: "ล็อคอยู่",
//         unlockSoon: "(จะปลดล็อคเร็วๆนี้)",
//         milestoneLabel: "เป้าหมาย",
//         earningsLabel: "รายได้"
//       }
//     }
//   }
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: 'en',
//     debug: false,
//     interpolation: {
//       escapeValue: false,
//     },
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage'],
//       lookupLocalStorage: 'appLanguage'
//     }
//   });

// export default i18n;















// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// const resources = {
//   en: {
//     translation: {
//       welcome: "Welcome back {{name}}!",
//       todayEarnings: "Today's Earnings",
//       currentBalance: "Current Balance",
//       lastMonthEarnings: "Last Month Earnings",
//       earningGraph: "Earning Graph",
//       weeklyProgress: "Weekly Progress",
//       weeklyList: "Weekly list",
//       date: "Date",
//       income: "Income",
//       noData: "No weekly earnings data available",
//       loading: "Loading dashboard data...",
//       tryAgain: "Try Again",
//       errorSession: "Session expired. Please login again.",
//       errorFetch: "An error occurred while fetching dashboard data",
//       tooltipEarnings: "Earnings",
//       thb: "THB",

//       videoHistory: {
//         date: "Date",
//         packageName: "Package Name",
//         callFrom: "Call From",
//         startTime: "Start Time (TH)",
//         endTime: "End Time (TH)",
//         duration: "Duration",
//         ratePerMin: "Rate/min",
//         income: "Income (฿)",
//         noData: "No video call history found"
//       },

//       header: {
//         title: "ThaiXO Creator Studio",
//         notifications: "Notifications",
//         markAllRead: "Mark all as read",
//         loading: "Loading...",
//         loadingNotifications: "Loading notifications...",
//         noNotifications: "No notifications",
//         language: "Language",
//         logout: "Log out",
//         loggingOut: "Logging out...",
//         logoutConfirmTitle: "Confirm Logout",
//         logoutConfirmMessage: "Are you sure you want to log out?",
//         cancel: "Cancel",
//         confirmLogout: "Logout",
//         loadError: "Could not load notifications"

//       },

//       milestone: {
//         loading: "Loading Milestones...",
//         errorBackToLogin: "Back to Login",
//         myCreatorLevel: "My Creator Level:",
//         progressTo: "Progress to",
//         nextLevel: "(Next Level)",
//         highestLevel: "🎉 You have reached the highest level!",
//         hrs: "hrs",
//         current: "(Current)",
//         hoursRemaining: "hours remaining to unlock",
//         andEarn: "and earn",
//         keepStreaming: "You are at the highest level. Keep streaming!",
//         levelsAndRewards: "Levels & Rewards",
//         levelName: "Level Name",
//         milestonesHours: "Milestones (Hours)",
//         earningsRate: "Earnings (Rate)",
//         status: "Status",
//         active: "Active",
//         completed: "Completed",
//         locked: "Locked",
//         unlockSoon: "(Unlock soon)",
//         milestoneLabel: "Milestones",
//         earningsLabel: "Earnings",
//         silver: "Silver",
//         gold: "Gold",
//         diamond: "Diamond"
//       },

//       withdrawalHistory: {
//         loading: "Loading withdrawal history...",
//         errorSession: "Session expired. Please login again.",
//         errorFetch: "An error occurred while fetching withdrawal history",
//         tryAgain: "Try Again",
//         noData: "No withdrawal history found",
//         dateTime: "Date / Time",
//         legalName: "Legal Name",
//         accountNo: "Account No.",
//         method: "Method",
//         bankName: "Bank Name",
//         withdrawalAmount: "Withdrawal Amount",
//         tax: "Tax",
//         netAmount: "Net Amount",
//         status: "Status",
//         note: "Note"
//       },

//       // === Add to "en" block ===
//       incomeDashboard: {
//         dailyIncome: "Daily Income",
//         monthlyIncome: "Monthly Income",
//         totalIncome: "Total Income",
//         date: "Date",
//         income: "Income",
//         seeMore: "See More",
//         loadingDaily: "Loading daily earnings...",
//         loadingMonthly: "Loading monthly earnings...",
//         noData: "No {type} income data available",
//         errorFetch: "An error occurred while fetching earnings",
//         tooltipIncome: "Income",
//         currency: "THB"
//       },

//       // Add to en.translation
//       dailySeeMore: {
//         dailyIncome: "Daily Income",
//         monthlyIncome: "Monthly Income",
//         loading: "Loading {view} earnings...",
//         switching: "Switching to {view}...",
//         noData: "No {view} income data available.",
//         refreshData: "Refresh Data",
//         errorTitle: "Error Loading Data",
//         retry: "Retry",
//         date: "Date",
//         income: "Income",
//         month: "Month",
//         totalIncome: "Total Income",
//         yearLabel: "Monthly Income - {year}",
//         tooltipIncome: "Income",
//         selectYear: "Select Year",
//         switchToDaily: "Switch to Daily",
//         switchToMonthly: "Switch to Monthly"
//       },


//       // Inside en.translation
//       creatorSelection: {
//         loading: "Checking verification status...",
//         selfCreator: "Self Creator",
//         agencyCreator: "Agency Creator",
//         comingSoon: "Coming Soon",
//         verified: "Verified",
//         underReview: "Under Review",
//         rejected: "Rejected",
//         approvedPopup: "Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.",
//         pendingPopup: "Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request.",
//         rejectedPopup: "Your verification has been rejected. Please update your information and submit again.",
//         agencyAlert: "Agency Creator is coming soon!"
//       },

//       // Inside en.translation
//       selfCreator: {
//         checkingStatus: "Checking verification status...",
//         identityVerified: "Identity Verified",
//         verificationPending: "Verification Pending",
//         verifyIdentity: "Verify Identity",
//         legalName: "Legal Name*",
//         legalNamePlaceholder: "Enter your legal name",
//         legalNameHelper: "*as per ID document",
//         chooseIdType: "Choose an ID type",
//         uploadIdPhoto: "Upload Photo of Selected ID",
//         browseUpload: "Browse & Upload Photo (JPEG, JPG, PNG)",
//         documentLocked: "Document locked",
//         alreadyUploaded: "Document already uploaded",
//         chooseBank: "Choose Your Bank",
//         selectBank: "Select a bank",
//         accountNumber: "Enter Your Bank Account Number",
//         accountPlaceholder: "Enter account number",
//         uploadPassbook: "Upload Bank Passbook Photo",
//         submitVerification: "Submit Verification",
//         submitting: "Submitting...",
//         legalDetailsSubmitted: "Your Legal Details Submitted",
//         successTitle: "Success",
//         successMessage: "Customer Legal Details Updated Successfully",
//         errorLegalName: "Legal Name Not Found",
//         errorBankName: "Bank Name Not Found",
//         errorAccountNumber: "Bank Account Number Not Found",
//         errorPassbookImage: "Passbook Image Not Found",
//         errorLegalIdImage: "Legal ID Image Not Found",
//         errorDocumentType: "Document Type Not Found",
//         errorImageFormat: "Please upload image as JPEG, JPG or PNG",
//         // Document type options
//         docPassport: "Passport",
//         docThaiNationalId: "Thai National ID",
//         docDrivingLicense: "Driving License",
//         // Popup messages for locked form
//         verifiedPopupTitle: "Identity Verified",
//         verifiedPopupMessage: "Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.",
//         pendingPopupTitle: "Verification Pending",
//         pendingPopupMessage: "Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request."
//       },

//       // Inside en.translation
//       withdrawal: {
//         noticeMessage: "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
//         credit: "Credit",
//         requestedAmount: "Requested Amount*",
//         amountPlaceholder: "Enter amount",
//         feeHint: "A standard {fee}% Legal fee will be applied to the total amount during Withdrawal.",
//         bankDetailsTitle: "Your Bank Details",
//         nonEditableNote: "(non editable this data)",
//         enterName: "Enter Name*",
//         namePlaceholder: "As per ID",
//         nameHint: "*Auto-filled from your legal details",
//         chooseBank: "Choose Your Bank",
//         bankAccountNumber: "Enter Your Bank Account Number",
//         requestedAmountLabel: "Requested Amount",
//         legalFeeLabel: "{fee}% Legal Fee",
//         netAmountLabel: "Net amount",
//         submit: "Submit",
//         submitting: "Submitting...",
//         errorLoadDetails: "Failed to load your bank and credit details.",
//         errorNetwork: "Network error. Please check your connection.",
//         verificationRequired: "Verification Required",
//         verificationMessage: "Your identity verification is not complete. Please complete verification before requesting a withdrawal.",
//         invalidAmount: "Invalid Amount",
//         invalidAmountMessage: "Please enter a valid requested amount.",
//         insufficientCredit: "Insufficient Credit",
//         insufficientCreditMessage: "Requested amount exceeds available credit.",
//         missingBankDetails: "Missing Bank Details",
//         missingBankDetailsMessage: "Bank details are missing. Please contact support.",
//         authError: "Authentication Error",
//         authErrorMessage: "Please login to continue.",
//         withdrawalSuccess: "Success",
//         withdrawalSuccessMessage: "Withdrawal request submitted successfully!",
//         withdrawalFailed: "Withdrawal Failed",
//         withdrawalFailedMessage: "Withdrawal request failed. Please try again.",
//         networkErrorTitle: "Network Error",
//         networkErrorMessage: "Network error. Please check your connection.",
//         verificationStatusTitle: "Verification Status",
//         ok: "OK",
//         legalfeeLabel: "Legal Fee"
//       },


//       // Inside en.translation
//       sidebar: {
//         title: "ThaiXO Social",
//         home: "Home",
//         myEarnings: "My Earnings",
//         payOutHistory: "Pay Out History",
//         verifyIdentity: "Verify Identity",
//         Withdraw: "Withdraw",
//         milestone: "Milestone",
//         videoCallHistory: "Video Call History",
//         helpSupport: "Help & Support",
//         logout: "Log out",
//         loggingOut: "Logging out...",
//         loading: "Loading...",
//         logoutConfirmTitle: "Confirm Logout",
//         logoutConfirmMessage: "Are you sure you want to log out?",
//         cancel: "Cancel",
//         confirmLogout: "Logout"
//       },
//       helpSupport: {
//         title: "How can we help?",
//         subtitle: "Find helpful articles to make the most of your experience.",
//         loading: "Loading support channels...",
//         noChannels: "No support channels available at the moment.",
//         tryAgain: "Try Again",
//         startChat: "Start Chat",
//         errors: {
//           loginRequired: "Please login to view help & support",
//           sessionExpired: "Session expired. Please login again.",
//           authFailed: "Authentication failed. Please login again.",
//           fetchFailed: "An error occurred while fetching support links"
//         }
//       },

//       // English (keep original names)
//       bankNames: {
//         "Bangkok Bank": "Bangkok Bank",
//         "Kasikorn Bank": "Kasikorn Bank",
//         "Siam Commercial Bank": "Siam Commercial Bank",
//         "Krungthai Bank": "Krungthai Bank",
//         "Bank of Ayudhya": "Bank of Ayudhya",
//         "TMBThanachart Bank": "TMBThanachart Bank"
//       },

//       "login": {
//         "title": "Log In",
//         "subtitle": "Hey there! Welcome back",
//         "description": "Enter your registered mobile number to access your account. We'll send you a quick OTP for secure login.",
//         "countryCodeLabel": "Country Code",
//         "phoneLabel": "Enter Contact Number*",
//         "phonePlaceholder": "12345-6789",
//         "button": "Send OTP",
//         "buttonLoading": "Sending OTP...",
//         "error": {
//           "invalidPhone": "Please enter a valid phone number",
//           "loginFailed": "Login failed",
//           "genericError": "An error occurred during login"
//         }
//       },
//       "otp": {
//         "titles": "Get OTP via WhatsApp",
//         "instruction": "Open Your WhatsApp → Copy Your secure OTP.",
//         "verifyButton": "Verify OTP",
//         "verifying": "Verifying...",
//         "didntReceive": "Didn't receive code?",
//         "resend": "Resend",
//         "sending": "Sending...",
//         "timer": " - ",
//         "resendSuccess": "OTP resent successfully!",
//         "error": {
//           "invalidOtp": "Please enter a valid 6-digit OTP",
//           "verificationFailed": "Verification failed",
//           "genericError": "An error occurred during OTP verification",
//           "resendFailed": "Failed to resend OTP"
//         }
//       }


//     }
//   },
//   th: {
//     translation: {
//       welcome: "ยินดีต้อนรับกลับ {{name}}!",
//       todayEarnings: "รายได้วันนี้",
//       currentBalance: "ยอดเงินคงเหลือ",
//       lastMonthEarnings: "รายได้เดือนที่แล้ว",
//       earningGraph: "กราฟรายได้",
//       weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//       weeklyList: "รายการรายสัปดาห์",
//       date: "วันที่",
//       income: "รายได้",
//       noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//       loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//       tryAgain: "ลองอีกครั้ง",
//       errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//       errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//       tooltipEarnings: "รายได้",
//       thb: "บาท",

//       videoHistory: {
//         date: "วันที่",
//         packageName: "ชื่อแพ็คเกจ",
//         callFrom: "ผู้โทร",
//         startTime: "เวลาเริ่มต้น",
//         endTime: "เวลาสิ้นสุด",
//         duration: "ระยะเวลา",
//         ratePerMin: "อัตราต่อนาที",
//         income: "รายได้ (บาท)",
//         noData: "ไม่มีประวัติการวิดีโอคอล"
//       },

//       header: {
//         title: "ไทยเอ็กซ์โอ ผู้สร้าง สตูดิโอ",
//         notifications: "การแจ้งเตือน",
//         markAllRead: "ทำเครื่องหมายว่าอ่านทั้งหมด",
//         loading: "กำลังโหลด...",
//         loadingNotifications: "กำลังโหลดการแจ้งเตือน...",
//         noNotifications: "ไม่มีการแจ้งเตือน",
//         language: "ภาษา",
//         logout: "ออกจากระบบ",
//         loggingOut: "กำลังออกจากระบบ...",
//         logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//         logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//         cancel: "ยกเลิก",
//         confirmLogout: "ออกจากระบบ",
//         loadError: "ไม่สามารถโหลดการแจ้งเตือนได้"
//       },

//       milestone: {
//         loading: "กำลังโหลดข้อมูลระดับ...",
//         errorBackToLogin: "กลับไปที่เข้าสู่ระบบ",
//         myCreatorLevel: "ระดับครีเอเตอร์ของฉัน:",
//         progressTo: "ความคืบหน้าไปสู่",
//         nextLevel: "(ระดับถัดไป)",
//         highestLevel: "🎉 คุณถึงระดับสูงสุดแล้ว!",
//         hrs: "ชม.",
//         current: "(ปัจจุบัน)",
//         hoursRemaining: "ชั่วโมงที่เหลือเพื่อปลดล็อค",
//         andEarn: "และรับรายได้",
//         keepStreaming: "คุณอยู่ในระดับสูงสุด สตรีมต่อไปเรื่อย ๆ!",
//         levelsAndRewards: "ระดับและรางวัล",
//         levelName: "ชื่อระดับ",
//         milestonesHours: "เป้าหมาย (ชั่วโมง)",
//         earningsRate: "รายได้ (อัตรา)",
//         status: "สถานะ",
//         active: "ใช้งานอยู่",
//         completed: "สำเร็จแล้ว",
//         locked: "ล็อคอยู่",
//         unlockSoon: "(จะปลดล็อคเร็วๆนี้)",
//         milestoneLabel: "เป้าหมาย",
//         earningsLabel: "รายได้",
//         silver: "ซิลเวอร์",
//         gold: "โกลด์",
//         diamond: "ไดมอนด์"
//       },

//       withdrawalHistory: {
//         loading: "กำลังโหลดประวัติการถอน...",
//         errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//         errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลประวัติการถอน",
//         tryAgain: "ลองอีกครั้ง",
//         noData: "ไม่พบประวัติการถอน",
//         dateTime: "วันที่ / เวลา",
//         legalName: "ชื่อตามกฎหมาย",
//         accountNo: "เลขที่บัญชี",
//         method: "วิธีการ",
//         bankName: "ชื่อธนาคาร",
//         withdrawalAmount: "จำนวนเงินที่ถอน",
//         tax: "ภาษี",
//         netAmount: "จำนวนเงินสุทธิ",
//         status: "สถานะ",
//         note: "หมายเหตุ"
//       },

//       // === Add to "th" block ===
//       incomeDashboard: {
//         dailyIncome: "รายได้รายวัน",
//         monthlyIncome: "รายได้รายเดือน",
//         totalIncome: "รายได้รวม",
//         date: "วันที่",
//         income: "รายได้",
//         seeMore: "ดูเพิ่มเติม",
//         loadingDaily: "กำลังโหลดรายได้รายวัน...",
//         loadingMonthly: "กำลังโหลดรายได้รายเดือน...",
//         noData: "ไม่มีข้อมูลรายได้{type}",
//         errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลรายได้",
//         tooltipIncome: "รายได้",
//         currency: "บาท"
//       },

//       // Add to th.translation
//       dailySeeMore: {
//         dailyIncome: "รายได้รายวัน",
//         monthlyIncome: "รายได้รายเดือน",
//         loading: "กำลังโหลดข้อมูล{view}...",
//         switching: "กำลังเปลี่ยนเป็น{view}...",
//         noData: "ไม่มีข้อมูลรายได้{view}",
//         refreshData: "รีเฟรชข้อมูล",
//         errorTitle: "เกิดข้อผิดพลาดในการโหลดข้อมูล",
//         retry: "ลองอีกครั้ง",
//         date: "วันที่",
//         income: "รายได้",
//         month: "เดือน",
//         totalIncome: "รายได้รวม",
//         yearLabel: "รายได้รายเดือน - {year}",
//         tooltipIncome: "รายได้",
//         selectYear: "เลือกปี",
//         switchToDaily: "เปลี่ยนเป็นรายวัน",
//         switchToMonthly: "เปลี่ยนเป็นรายเดือน"
//       },

//       // Inside th.translation
//       creatorSelection: {
//         loading: "กำลังตรวจสอบสถานะการยืนยันตัวตน...",
//         selfCreator: "ครีเอเตอร์ส่วนตัว",
//         agencyCreator: "เอเจนซี่ครีเอเตอร์",
//         comingSoon: "เร็วๆ นี้",
//         verified: "ยืนยันแล้ว",
//         underReview: "อยู่ระหว่างการตรวจสอบ",
//         rejected: "ถูกปฏิเสธ",
//         approvedPopup: "โปรไฟล์ของคุณได้รับการยืนยันแล้ว คุณสามารถทำการถอนเงินได้ หากต้องการแก้ไขหรืออัปเดตข้อมูล กรุณาติดต่อทีมช่วยเหลือของเรา",
//         pendingPopup: "การยืนยันตัวตนของคุณอยู่ระหว่างการตรวจสอบ เมื่อเสร็จสิ้น คุณจะสามารถขอถอนเงินได้",
//         rejectedPopup: "การยืนยันตัวตนของคุณถูกปฏิเสธ กรุณาอัปเดตข้อมูลและส่งใหม่อีกครั้ง",
//         agencyAlert: "เอเจนซี่ครีเอเตอร์กำลังจะมาเร็วๆ นี้!"
//       },

//       // Inside th.translation
//       selfCreator: {
//         checkingStatus: "กำลังตรวจสอบสถานะการยืนยันตัวตน...",
//         identityVerified: "ยืนยันตัวตนแล้ว",
//         verificationPending: "กำลังตรวจสอบ",
//         verifyIdentity: "ยืนยันตัวตน",
//         legalName: "ชื่อตามกฎหมาย*",
//         legalNamePlaceholder: "กรอกชื่อตามกฎหมายของคุณ",
//         legalNameHelper: "*ตามที่ปรากฏในเอกสาร",
//         chooseIdType: "เลือกประเภทบัตรประจำตัว",
//         uploadIdPhoto: "อัปโหลดรูปถ่ายบัตรประจำตัวที่เลือก",
//         browseUpload: "เรียกดูและอัปโหลดรูปภาพ (JPEG, JPG, PNG)",
//         documentLocked: "เอกสารถูก锁定",
//         alreadyUploaded: "อัปโหลดเอกสารแล้ว",
//         chooseBank: "เลือกธนาคารของคุณ",
//         selectBank: "เลือกธนาคาร",
//         accountNumber: "กรอกเลขที่บัญชีธนาคารของคุณ",
//         accountPlaceholder: "กรอกเลขที่บัญชี",
//         uploadPassbook: "อัปโหลดรูปถ่ายสมุดบัญชีธนาคาร",
//         submitVerification: "ส่งข้อมูลการยืนยันตัวตน",
//         submitting: "กำลังส่ง...",
//         legalDetailsSubmitted: "ส่งข้อมูลรายละเอียดทางกฎหมายแล้ว",
//         successTitle: "สำเร็จ",
//         successMessage: "อัปเดตข้อมูลรายละเอียดทางกฎหมายสำเร็จ",
//         errorLegalName: "ไม่พบชื่อตามกฎหมาย",
//         errorBankName: "ไม่พบชื่อธนาคาร",
//         errorAccountNumber: "ไม่พบเลขที่บัญชีธนาคาร",
//         errorPassbookImage: "ไม่พบรูปถ่ายสมุดบัญชี",
//         errorLegalIdImage: "ไม่พบรูปถ่ายบัตรประจำตัว",
//         errorDocumentType: "ไม่พบประเภทเอกสาร",
//         errorImageFormat: "กรุณาอัปโหลดรูปภาพเป็นไฟล์ JPEG, JPG หรือ PNG",
//         docPassport: "หนังสือเดินทาง",
//         docThaiNationalId: "บัตรประจำตัวประชาชนไทย",
//         docDrivingLicense: "ใบขับขี่",
//         verifiedPopupTitle: "ยืนยันตัวตนแล้ว",
//         verifiedPopupMessage: "โปรไฟล์ของคุณได้รับการยืนยันแล้ว คุณสามารถทำการถอนเงินได้ หากต้องการแก้ไขหรืออัปเดตข้อมูล กรุณาติดต่อทีมช่วยเหลือของเรา",
//         pendingPopupTitle: "กำลังตรวจสอบ",
//         pendingPopupMessage: "การยืนยันตัวตนของคุณอยู่ระหว่างการตรวจสอบ เมื่อเสร็จสิ้นคุณจะสามารถขอถอนเงินได้"
//       },


//       // Inside th.translation
//       withdrawal: {
//         noticeMessage: "คำขอถอนเงินทั้งหมดที่ยื่นระหว่างเวลา 18:00 น. ถึง 10:00 น. (ตามเวลาไทย) จะดำเนินการหลังจาก 10:00 น.",
//         credit: "เครดิต",
//         requestedAmount: "จำนวนเงินที่ต้องการถอน*",
//         amountPlaceholder: "กรอกจำนวนเงิน",
//         feeHint: "จะมีค่าธรรมเนียมทางกฎหมาย {fee}% กับยอดเงินทั้งหมดในระหว่างการถอน",
//         bankDetailsTitle: "รายละเอียดธนาคารของคุณ",
//         nonEditableNote: "(ไม่สามารถแก้ไขข้อมูลนี้ได้)",
//         enterName: "กรอกชื่อ*",
//         namePlaceholder: "ตามที่ปรากฏในบัตรประชาชน",
//         nameHint: "*กรอกอัตโนมัติจากข้อมูลทางกฎหมายของคุณ",
//         chooseBank: "เลือกธนาคารของคุณ",
//         bankAccountNumber: "กรอกเลขที่บัญชีธนาคารของคุณ",
//         requestedAmountLabel: "จำนวนเงินที่ขอถอน",
//         legalFeeLabel: "ค่าธรรมเนียมทางกฎหมาย {fee}%",
//         netAmountLabel: "จำนวนเงินสุทธิ",
//         submit: "ยืนยันการถอน",
//         submitting: "กำลังดำเนินการ...",
//         errorLoadDetails: "ไม่สามารถโหลดข้อมูลธนาคารและเครดิตของคุณได้",
//         errorNetwork: "เกิดข้อผิดพลาดเครือข่าย กรุณาตรวจสอบการเชื่อมต่อของคุณ",
//         verificationRequired: "จำเป็นต้องยืนยันตัวตน",
//         verificationMessage: "การยืนยันตัวตนของคุณยังไม่สมบูรณ์ กรุณายืนยันตัวตนก่อนขอถอนเงิน",
//         invalidAmount: "จำนวนเงินไม่ถูกต้อง",
//         invalidAmountMessage: "กรุณากรอกจำนวนเงินที่ต้องการถอนที่ถูกต้อง",
//         insufficientCredit: "เครดิตไม่เพียงพอ",
//         insufficientCreditMessage: "จำนวนเงินที่ขอถอนเกินเครดิตที่มีอยู่",
//         missingBankDetails: "ข้อมูลธนาคารไม่ครบถ้วน",
//         missingBankDetailsMessage: "ข้อมูลธนาคารขาดหายไป กรุณาติดต่อฝ่ายสนับสนุน",
//         authError: "ข้อผิดพลาดการรับรองตัวตน",
//         authErrorMessage: "กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ",
//         withdrawalSuccess: "สำเร็จ",
//         withdrawalSuccessMessage: "ส่งคำขอถอนเงินสำเร็จ!",
//         withdrawalFailed: "การถอนเงินล้มเหลว",
//         withdrawalFailedMessage: "คำขอถอนเงินล้มเหลว กรุณาลองอีกครั้ง",
//         networkErrorTitle: "ข้อผิดพลาดเครือข่าย",
//         networkErrorMessage: "เกิดข้อผิดพลาดเครือข่าย กรุณาตรวจสอบการเชื่อมต่อของคุณ",
//         verificationStatusTitle: "สถานะการยืนยันตัวตน",
//         ok: "ตกลง",
//         "legalfeeLabel": "ค่าธรรมเนียมทางกฎหมาย"
//       },

//       // Inside th.translation
//       sidebar: {
//         title: "ไทยXO โซเชียล",
//         home: "หน้าหลัก",
//         myEarnings: "รายได้ของฉัน",
//         payOutHistory: "ประวัติการจ่ายเงิน",
//         verifyIdentity: "ยืนยันตัวตน",
//         Withdraw: "ถอน",
//         milestone: "เป้าหมาย",
//         videoCallHistory: "ประวัติการสนทนาวิดีโอ",
//         helpSupport: "ช่วยเหลือและสนับสนุน",
//         logout: "ออกจากระบบ",
//         loggingOut: "กำลังออกจากระบบ...",
//         loading: "กำลังโหลด...",
//         logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//         logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//         cancel: "ยกเลิก",
//         confirmLogout: "ออกจากระบบ"
//       },

//       // Inside th.translation
//       helpSupport: {
//         title: "เราจะช่วยคุณได้อย่างไร?",
//         subtitle: "ค้นหาบทความที่เป็นประโยชน์เพื่อให้คุณใช้งานได้อย่างเต็มที่",
//         loading: "กำลังโหลดช่องทางการสนับสนุน...",
//         noChannels: "ขณะนี้ยังไม่มีช่องทางการสนับสนุน",
//         tryAgain: "ลองอีกครั้ง",
//         startChat: "เริ่มแชท",
//         errors: {
//           loginRequired: "กรุณาเข้าสู่ระบบเพื่อดูความช่วยเหลือและการสนับสนุน",
//           sessionExpired: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//           authFailed: "การยืนยันตัวตนล้มเหลว กรุณาเข้าสู่ระบบอีกครั้ง",
//           fetchFailed: "เกิดข้อผิดพลาดในการโหลดช่องทางการสนับสนุน"
//         }
//       },

//       // Thai (display Thai script)
//       bankNames: {
//         "Bangkok Bank": "ธนาคารกรุงเทพ",
//         "Kasikorn Bank": "ธนาคารกสิกรไทย",
//         "Siam Commercial Bank": "ธนาคารไทยพาณิชย์",
//         "Krungthai Bank": "ธนาคารกรุงไทย",
//         "Bank of Ayudhya": "ธนาคารกรุงศรีอยุธยา",
//         "TMBThanachart Bank": "ธนาคารทหารไทยธนชาต"
//       },
//       // th.json
//       "login": {
//         "title": "เข้าสู่ระบบ",
//         "subtitle": "สวัสดี! ยินดีต้อนรับกลับ",
//         "description": "กรุณากรอกหมายเลขโทรศัพท์ที่ลงทะเบียนไว้เพื่อเข้าสู่ระบบ เราจะส่ง OTP เพื่อยืนยันตัวตนของคุณ",
//         "countryCodeLabel": "รหัสประเทศ",
//         "phoneLabel": "กรอกหมายเลขติดต่อ*",
//         "phonePlaceholder": "12345-6789",
//         "button": "ส่ง OTP",
//         "buttonLoading": "กำลังส่ง OTP...",
//         "error": {
//           "invalidPhone": "กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง",
//           "loginFailed": "เข้าสู่ระบบไม่สำเร็จ",
//           "genericError": "เกิดข้อผิดพลาดระหว่างการเข้าสู่ระบบ"
//         }
//       },

//       "otp": {
//         "titles": "รับ สนข จาก วอทส์แอพพ์",
//         "instruction": "เปิด วอทส์แอพพ์ ของคุณ → คัดลอก OTP ที่ปลอดภัย",
//         "verifyButton": "ยืนยัน สนข",
//         "verifying": "กำลังยืนยัน...",
//         "didntReceive": "ไม่ได้รับโค้ด?",
//         "resend": "ส่งใหม่",
//         "sending": "กำลังส่ง...",
//         "timer": " - ",
//         "resendSuccess": "ส่ง สนข ใหม่สำเร็จ!",
//         "error": {
//           "invalidOtp": "กรุณากรอก สนข 6 หลักที่ถูกต้อง",
//           "verificationFailed": "การยืนยันล้มเหลว",
//           "genericError": "เกิดข้อผิดพลาดระหว่างการยืนยัน สนข",
//           "resendFailed": "ไม่สามารถส่ง สนข ใหม่ได้"
//         }
//       }



//     }
//   }
// };

// // i18n
// //   .use(LanguageDetector)
// //   .use(initReactI18next)
// //   .init({
// //     resources,
// //     fallbackLng: 'en',
// //     debug: false,
// //     interpolation: { escapeValue: false },
// //     // detection: {
// //     //   order: ['localStorage', 'navigator'],
// //     //   caches: ['localStorage'],
// //     //   lookupLocalStorage: 'appLanguage'
// //     // }
// //      detection: {
// //       order: ["navigator"], // detect browser language only
// //       caches: [] // IMPORTANT: disables cookies/localStorage/sessionStorage
// //     },


// //   });




// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: 'en',
//     debug: false,
//     interpolation: { escapeValue: false },
//     detection: {
//       order: ['cookie', 'navigator'],
//       caches: ['cookie'],
//       // optional: keep the language for 30 days
//       cookieMinutes: 60 * 24 * 30,
//       // if you previously used a custom key, uncomment:
//       // lookupCookie: 'appLanguage',
//     },
//   });

// export default i18n;





















import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome back {{name}}!",
      todayEarnings: "Today's Earnings",
      currentBalance: "Current Balance",
      lastMonthEarnings: "Last Month Earnings",
      earningGraph: "Earning Graph",
      weeklyProgress: "Weekly Progress",
      weeklyList: "Weekly list",
      date: "Date",
      income: "Income",
      noData: "No weekly earnings data available",
      loading: "Loading dashboard data...",
      tryAgain: "Try Again",
      errorSession: "Session expired. Please login again.",
      errorFetch: "An error occurred while fetching dashboard data",
      tooltipEarnings: "Earnings",
      thb: "THB",

      videoHistory: {
        date: "Date",
        packageName: "Package Name",
        callFrom: "Call From",
        startTime: "Start Time (TH)",
        endTime: "End Time (TH)",
        duration: "Duration",
        ratePerMin: "Rate/min",
        income: "Income (฿)",
        noData: "No video call history found"
      },

      header: {
        title: "ThaiXO Creator Studio",
        notifications: "Notifications",
        markAllRead: "Mark all as read",
        loading: "Loading...",
        loadingNotifications: "Loading notifications...",
        noNotifications: "No notifications",
        language: "Language",
        logout: "Log out",
        loggingOut: "Logging out...",
        logoutConfirmTitle: "Confirm Logout",
        logoutConfirmMessage: "Are you sure you want to log out?",
        cancel: "Cancel",
        confirmLogout: "Logout",
        loadError: "Could not load notifications"

      },

      milestone: {
        loading: "Loading Milestones...",
        errorBackToLogin: "Back to Login",
        myCreatorLevel: "My Creator Level:",
        progressTo: "Progress to",
        nextLevel: "(Next Level)",
        highestLevel: "🎉 You have reached the highest level!",
        hrs: "hrs",
        current: "(Current)",
        hoursRemaining: "hours remaining to unlock",
        andEarn: "and earn",
        keepStreaming: "You are at the highest level. Keep streaming!",
        levelsAndRewards: "Levels & Rewards",
        levelName: "Level Name",
        milestonesHours: "Milestones (Hours)",
        earningsRate: "Earnings (Rate)",
        status: "Status",
        active: "Active",
        completed: "Completed",
        locked: "Locked",
        unlockSoon: "(Unlock soon)",
        milestoneLabel: "Milestones",
        earningsLabel: "Earnings",
        silver: "Silver",
        gold: "Gold",
        diamond: "Diamond"
      },

      withdrawalHistory: {
        loading: "Loading withdrawal history...",
        errorSession: "Session expired. Please login again.",
        errorFetch: "An error occurred while fetching withdrawal history",
        tryAgain: "Try Again",
        noData: "No withdrawal history found",
        dateTime: "Date / Time",
        legalName: "Legal Name",
        accountNo: "Account No.",
        method: "Method",
        bankName: "Bank Name",
        withdrawalAmount: "Withdrawal Amount",
        tax: "Tax",
        netAmount: "Net Amount",
        status: "Status",
        note: "Note"
      },

      // === Add to "en" block ===
      incomeDashboard: {
        dailyIncome: "Daily Income",
        monthlyIncome: "Monthly Income",
        totalIncome: "Total Income",
        date: "Date",
        income: "Income",
        seeMore: "See More",
        loadingDaily: "Loading daily earnings...",
        loadingMonthly: "Loading monthly earnings...",
        noData: "No {type} income data available",
        errorFetch: "An error occurred while fetching earnings",
        tooltipIncome: "Income",
        currency: "THB"
      },

      // Add to en.translation
      dailySeeMore: {
        dailyIncome: "Daily Income",
        monthlyIncome: "Monthly Income",
        loading: "Loading {view} earnings...",
        switching: "Switching to {view}...",
        noData: "No {view} income data available.",
        refreshData: "Refresh Data",
        errorTitle: "Error Loading Data",
        retry: "Retry",
        date: "Date",
        income: "Income",
        month: "Month",
        totalIncome: "Total Income",
        yearLabel: "Monthly Income - {year}",
        tooltipIncome: "Income",
        selectYear: "Select Year",
        switchToDaily: "Switch to Daily",
        switchToMonthly: "Switch to Monthly"
      },


      // Inside en.translation
      creatorSelection: {
        loading: "Checking verification status...",
        selfCreator: "Self Creator",
        agencyCreator: "Agency Creator",
        comingSoon: "Coming Soon",
        verified: "Verified",
        underReview: "Under Review",
        rejected: "Rejected",
        approvedPopup: "Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.",
        pendingPopup: "Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request.",
        rejectedPopup: "Your verification has been rejected. Please update your information and submit again.",
        agencyAlert: "Agency Creator is coming soon!"
      },

      // Inside en.translation
      selfCreator: {
        checkingStatus: "Checking verification status...",
        identityVerified: "Identity Verified",
        verificationPending: "Verification Pending",
        verifyIdentity: "Verify Identity",
        legalName: "Legal Name*",
        legalNamePlaceholder: "Enter your legal name",
        legalNameHelper: "*as per ID document",
        chooseIdType: "Choose an ID type",
        uploadIdPhoto: "Upload Photo of Selected ID",
        browseUpload: "Browse & Upload Photo (JPEG, JPG, PNG)",
        documentLocked: "Document locked",
        alreadyUploaded: "Document already uploaded",
        chooseBank: "Choose Your Bank",
        selectBank: "Select a bank",
        accountNumber: "Enter Your Bank Account Number",
        accountPlaceholder: "Enter account number",
        uploadPassbook: "Upload Bank Passbook Photo",
        submitVerification: "Submit Verification",
        submitting: "Submitting...",
        legalDetailsSubmitted: "Your Legal Details Submitted",
        successTitle: "Success",
        successMessage: "Customer Legal Details Updated Successfully",
        errorLegalName: "Legal Name Not Found",
        errorBankName: "Bank Name Not Found",
        errorAccountNumber: "Bank Account Number Not Found",
        errorPassbookImage: "Passbook Image Not Found",
        errorLegalIdImage: "Legal ID Image Not Found",
        errorDocumentType: "Document Type Not Found",
        errorImageFormat: "Please upload image as JPEG, JPG or PNG",
        // Document type options
        docPassport: "Passport",
        docThaiNationalId: "Thai National ID",
        docDrivingLicense: "Driving License",
        // Popup messages for locked form
        verifiedPopupTitle: "Identity Verified",
        verifiedPopupMessage: "Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.",
        pendingPopupTitle: "Verification Pending",
        pendingPopupMessage: "Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request."
      },

      // Inside en.translation
      withdrawal: {
        noticeMessage: "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
        noticeMessage2: "Easily Withdraw Amount Above 500 quick secure, and seamless.",
        credit: "Credit",
        requestedAmount: "Requested Amount*",
        amountPlaceholder: "Enter amount",
        feeHint: "A standard Tax fee will be applied to the total amount during Withdrawal.",
        bankDetailsTitle: "Your Bank Details",
        nonEditableNote: "(non editable this data)",
        enterName: "Enter Name*",
        namePlaceholder: "As per ID",
        nameHint: "*Auto-filled from your legal details",
        chooseBank: "Choose Your Bank",
        bankAccountNumber: "Enter Your Bank Account Number",
        requestedAmountLabel: "Requested Amount",
        taxFeeLabel: "Tax Fee",
        netAmountLabel: "Net amount",
        submit: "Submit",
        submitting: "Submitting...",
        errorLoadDetails: "Failed to load your bank and credit details.",
        errorNetwork: "Network error. Please check your connection.",
        verificationRequired: "Verification Required",
        verificationMessage: "Your identity verification is not complete. Please complete verification before requesting a withdrawal.",
        invalidAmount: "Invalid Amount",
        invalidAmountMessage: "Please enter a valid requested amount.",
        insufficientCredit: "Insufficient Credit",
        insufficientCreditMessage: "Requested amount exceeds available credit.",
        missingBankDetails: "Missing Bank Details",
        missingBankDetailsMessage: "Bank details are missing. Please contact support.",
        authError: "Authentication Error",
        authErrorMessage: "Please login to continue.",
        withdrawalSuccess: "Success",
        withdrawalSuccessMessage: "Withdrawal request submitted successfully!",
        withdrawalFailed: "Withdrawal Failed",
        withdrawalFailedMessage: "Withdrawal request failed. Please try again.",
        networkErrorTitle: "Network Error",
        networkErrorMessage: "Network error. Please check your connection.",
        verificationStatusTitle: "Verification Status",
        ok: "OK",
        legalfeeLabel: "Legal Fee"
      },


      // Inside en.translation
      sidebar: {
        title: "ThaiXO Social",
        home: "Home",
        myEarnings: "My Earnings",
        payOutHistory: "Pay Out History",
        verifyIdentity: "Verify Identity",
        Withdraw: "Withdraw",
        milestone: "Milestone",
        videoCallHistory: "Video Call History",
        helpSupport: "Help & Support",
        logout: "Log out",
        loggingOut: "Logging out...",
        loading: "Loading...",
        logoutConfirmTitle: "Confirm Logout",
        logoutConfirmMessage: "Are you sure you want to log out?",
        cancel: "Cancel",
        confirmLogout: "Logout"
      },
      helpSupport: {
        title: "How can we help?",
        subtitle: "Find helpful articles to make the most of your experience.",
        loading: "Loading support channels...",
        noChannels: "No support channels available at the moment.",
        tryAgain: "Try Again",
        startChat: "Start Chat",
        errors: {
          loginRequired: "Please login to view help & support",
          sessionExpired: "Session expired. Please login again.",
          authFailed: "Authentication failed. Please login again.",
          fetchFailed: "An error occurred while fetching support links"
        }
      },

      // English (keep original names)
      bankNames: {
        "Bangkok_Bank": "Bangkok Bank",
        "Kasikorn_Bank": "Kasikorn Bank",
        "KASIKORN_BANK": "Kasikorn Bank",
        "Siam_Commercial_Bank": "Siam Commercial Bank",
        "SCB": "SCB",
        "Krung_Thai_Bank": "Krung Thai Bank",
        "Krungthai_Bank": "Krungthai Bank",
        "Bank_of_Ayudhya": "Bank of Ayudhya",
        "Krungsri": "Krungsri",
        "Thanachart_Bank": "Thanachart Bank",
        "TMB_Bank": "TMB Bank",
        "TMBThanachart_Bank": "TMBThanachart Bank",
        "ttb": "ttb",
        "CIMB_Thai_Bank": "CIMB Thai Bank",
        "Standard_Chartered_Bank": "Standard Chartered Bank",
        "Hongkong_and_Shanghai_Banking_Corporation": "Hongkong and Shanghai Banking Corporation",
        "HSBC": "HSBC"
      },

      // === API VALUE TRANSLATIONS (English - keep original) ===
      apiValues: {
        status: {
          done: "Done",
          pending: "Pending",
          rejected: "Rejected",
          processing: "Processing",
          cancelled: "Cancelled",
          completed: "Completed",
          failed: "Failed",
          approved: "Approved",
          under_review: "Under Review"
        },
        method: {
          bank: "Bank",
          cash: "Cash",
          wallet: "Wallet",
          paypal: "PayPal",
          credit_card: "Credit Card",
          promptpay: "PromptPay"
        },
        documentType: {
          id_card: "ID Card",
          passport: "Passport",
          driving_license: "Driving License",
          thai_national_id: "Thai National ID"
        }
      },

      "login": {
        "title": "Log In",
        "subtitle": "Hey there! Welcome back",
        "description": "Enter your registered mobile number to access your account. We'll send you a quick OTP for secure login.",
        "countryCodeLabel": "Country Code",
        "phoneLabel": "Enter Contact Number*",
        "phonePlaceholder": "12345-6789",
        "button": "Send OTP",
        "buttonLoading": "Sending OTP...",
        "error": {
          "invalidPhone": "Please enter a valid phone number",
          "loginFailed": "Login failed",
          "genericError": "An error occurred during login",
          "accountNotExists": "Account does not exist"
        }
      },
      "otp": {
        "titles": "Get OTP via WhatsApp",
        "instruction": "Open Your WhatsApp → Copy Your secure OTP.",
        "verifyButton": "Verify OTP",
        "verifying": "Verifying...",
        "didntReceive": "Didn't receive code?",
        "resend": "Resend",
        "sending": "Sending...",
        "timer": " - ",
        "resendSuccess": "OTP resent successfully!",

        "error": {
          "invalidOtp": "Please enter a valid 6-digit OTP",
          "verificationFailed": "Verification failed",
          "genericError": "An error occurred during OTP verification",
          "resendFailed": "Failed to resend OTP",
          "otpMismatch": "OTP does not match"
        }
      },

      // Inside en.translation AND th.translation
      "notes": {
        "Bank_server_down": "Bank server down",
        "Incorrect_bank_account_details": "Incorrect bank account details",
        "Name_mismatch_with_bank_account": "Name mismatch with bank account",
        "Suspicious_activity": "Suspicious activity",
        "Withdrawal_is_in_process": "Withdrawal is in process",
        "Withdrawal_is_completed": "Withdrawal is completed",
        "Processing": "Processing",
        "Processed": "Processed",
        "Completed": "Completed",
        "Pending_verification": "Pending verification",
        "Verified": "Verified",
        "Under_review": "Under review",
        "Rejected": "Rejected",
        "Approved": "Approved",
        "Auto_approved": "Auto-approved",
        "Manual_review_required": "Manual review required",
        "Waiting_for_bank_confirmation": "Waiting for bank confirmation",
        "Bank_transfer_initiated": "Bank transfer initiated",
        "Funds_transferred": "Funds transferred",
        "Withdrawal_request_received": "Withdrawal request received",
        "Queued_for_processing": "Queued for processing",
        "Success": "Success",
        "Failed": "Failed",
        "Pending": "Pending",
        "Cancelled": "Cancelled",
        "Refunded": "Refunded",
        "On_hold": "On hold",
        "In_progress": "In progress",
        "Done": "Done",
        "DONE": "Done",
        "PENDING": "Pending",
        "COMPLETED": "Completed",
        "APPROVED": "Approved",
        "REJECTED": "Rejected",
        "FAILED": "Failed",
        "CANCELLED": "Cancelled"
      },


      "status": {
        "DONE": "Done",
        "COMPLETED": "Completed",
        "APPROVED": "Approved",
        "PENDING": "Pending",
        "PROCESSING": "Processing",
        "UNDER_REVIEW": "Under Review",
        "REJECTED": "Rejected",
        "FAILED": "Failed",
        "CANCELLED": "Cancelled"
      },
      "currency": {
        "thb": "THB"
      },





    }
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับกลับ {{name}}!",
      todayEarnings: "รายได้วันนี้",
      currentBalance: "ยอดเงินคงเหลือ",
      lastMonthEarnings: "รายได้เดือนที่แล้ว",
      earningGraph: "กราฟรายได้",
      weeklyProgress: "ความคืบหน้ารายสัปดาห์",
      weeklyList: "รายการรายสัปดาห์",
      date: "วันที่",
      income: "รายได้",
      noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
      loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
      tryAgain: "ลองอีกครั้ง",
      errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
      errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
      tooltipEarnings: "รายได้",
      thb: "บาท",

      videoHistory: {
        date: "วันที่",
        packageName: "ชื่อแพ็คเกจ",
        callFrom: "ผู้โทร",
        startTime: "เวลาเริ่มต้น",
        endTime: "เวลาสิ้นสุด",
        duration: "ระยะเวลา",
        ratePerMin: "อัตราต่อนาที",
        income: "รายได้ (บาท)",
        noData: "ไม่มีประวัติการวิดีโอคอล"
      },

      header: {
        title: "ไทยเอ็กซ์โอ ผู้สร้าง สตูดิโอ",
        notifications: "การแจ้งเตือน",
        markAllRead: "ทำเครื่องหมายว่าอ่านทั้งหมด",
        loading: "กำลังโหลด...",
        loadingNotifications: "กำลังโหลดการแจ้งเตือน...",
        noNotifications: "ไม่มีการแจ้งเตือน",
        language: "ภาษา",
        logout: "ออกจากระบบ",
        loggingOut: "กำลังออกจากระบบ...",
        logoutConfirmTitle: "ยืนยันการออกจากระบบ",
        logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
        cancel: "ยกเลิก",
        confirmLogout: "ออกจากระบบ",
        loadError: "ไม่สามารถโหลดการแจ้งเตือนได้"
      },

      milestone: {
        loading: "กำลังโหลดข้อมูลระดับ...",
        errorBackToLogin: "กลับไปที่เข้าสู่ระบบ",
        myCreatorLevel: "ระดับครีเอเตอร์ของฉัน:",
        progressTo: "ความคืบหน้าไปสู่",
        nextLevel: "(ระดับถัดไป)",
        highestLevel: "🎉 คุณถึงระดับสูงสุดแล้ว!",
        hrs: "ชม.",
        current: "(ปัจจุบัน)",
        hoursRemaining: "ชั่วโมงที่เหลือเพื่อปลดล็อค",
        andEarn: "และรับรายได้",
        keepStreaming: "คุณอยู่ในระดับสูงสุด สตรีมต่อไปเรื่อย ๆ!",
        levelsAndRewards: "ระดับและรางวัล",
        levelName: "ชื่อระดับ",
        milestonesHours: "เป้าหมาย (ชั่วโมง)",
        earningsRate: "รายได้ (อัตรา)",
        status: "สถานะ",
        active: "ใช้งานอยู่",
        completed: "สำเร็จแล้ว",
        locked: "ล็อคอยู่",
        unlockSoon: "(จะปลดล็อคเร็วๆนี้)",
        milestoneLabel: "เป้าหมาย",
        earningsLabel: "รายได้",
        silver: "ซิลเวอร์",
        gold: "โกลด์",
        diamond: "ไดมอนด์"
      },

      withdrawalHistory: {
        loading: "กำลังโหลดประวัติการถอน...",
        errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
        errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลประวัติการถอน",
        tryAgain: "ลองอีกครั้ง",
        noData: "ไม่พบประวัติการถอน",
        dateTime: "วันที่ / เวลา",
        legalName: "ชื่อตามกฎหมาย",
        accountNo: "เลขที่บัญชี",
        method: "วิธีการ",
        bankName: "ชื่อธนาคาร",
        withdrawalAmount: "จำนวนเงินที่ถอน",
        tax: "ภาษี",
        netAmount: "จำนวนเงินสุทธิ",
        status: "สถานะ",
        note: "หมายเหตุ"
      },

      // === Add to "th" block ===
      incomeDashboard: {
        dailyIncome: "รายได้รายวัน",
        monthlyIncome: "รายได้รายเดือน",
        totalIncome: "รายได้รวม",
        date: "วันที่",
        income: "รายได้",
        seeMore: "ดูเพิ่มเติม",
        loadingDaily: "กำลังโหลดรายได้รายวัน...",
        loadingMonthly: "กำลังโหลดรายได้รายเดือน...",
        noData: "ไม่มีข้อมูลรายได้{type}",
        errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลรายได้",
        tooltipIncome: "รายได้",
        currency: "บาท"
      },

      // Add to th.translation
      dailySeeMore: {
        dailyIncome: "รายได้รายวัน",
        monthlyIncome: "รายได้รายเดือน",
        loading: "กำลังโหลดข้อมูล...",
        switching: "กำลังเปลี่ยนเป็น{view}...",
        noData: "ไม่มีข้อมูลรายได้{view}",
        refreshData: "รีเฟรชข้อมูล",
        errorTitle: "เกิดข้อผิดพลาดในการโหลดข้อมูล",
        retry: "ลองอีกครั้ง",
        date: "วันที่",
        income: "รายได้",
        month: "เดือน",
        totalIncome: "รายได้รวม",
        yearLabel: "รายได้รายเดือน - {year}",
        tooltipIncome: "รายได้",
        selectYear: "เลือกปี",
        switchToDaily: "เปลี่ยนเป็นรายวัน",
        switchToMonthly: "เปลี่ยนเป็นรายเดือน"
      },

      // Inside th.translation
      creatorSelection: {
        loading: "กำลังตรวจสอบสถานะการยืนยันตัวตน...",
        selfCreator: "ครีเอเตอร์ส่วนตัว",
        agencyCreator: "เอเจนซี่ครีเอเตอร์",
        comingSoon: "เร็วๆ นี้",
        verified: "ยืนยันแล้ว",
        underReview: "อยู่ระหว่างการตรวจสอบ",
        rejected: "ถูกปฏิเสธ",
        approvedPopup: "โปรไฟล์ของคุณได้รับการยืนยันแล้ว คุณสามารถทำการถอนเงินได้ หากต้องการแก้ไขหรืออัปเดตข้อมูล กรุณาติดต่อทีมช่วยเหลือของเรา",
        pendingPopup: "การยืนยันตัวตนของคุณอยู่ระหว่างการตรวจสอบ เมื่อเสร็จสิ้น คุณจะสามารถขอถอนเงินได้",
        rejectedPopup: "การยืนยันตัวตนของคุณถูกปฏิเสธ กรุณาอัปเดตข้อมูลและส่งใหม่อีกครั้ง",
        agencyAlert: "เอเจนซี่ครีเอเตอร์กำลังจะมาเร็วๆ นี้!"
      },

      // Inside th.translation
      selfCreator: {
        checkingStatus: "กำลังตรวจสอบสถานะการยืนยันตัวตน...",
        identityVerified: "ยืนยันตัวตนแล้ว",
        verificationPending: "กำลังตรวจสอบ",
        verifyIdentity: "ยืนยันตัวตน",
        legalName: "ชื่อตามกฎหมาย*",
        legalNamePlaceholder: "กรอกชื่อตามกฎหมายของคุณ",
        legalNameHelper: "*ตามที่ปรากฏในเอกสาร",
        chooseIdType: "เลือกประเภทบัตรประจำตัว",
        uploadIdPhoto: "อัปโหลดรูปถ่ายบัตรประจำตัวที่เลือก",
        browseUpload: "เรียกดูและอัปโหลดรูปภาพ (JPEG, JPG, PNG)",
        documentLocked: "เอกสารถูก锁定",
        alreadyUploaded: "อัปโหลดเอกสารแล้ว",
        chooseBank: "เลือกธนาคารของคุณ",
        selectBank: "เลือกธนาคาร",
        accountNumber: "กรอกเลขที่บัญชีธนาคารของคุณ",
        accountPlaceholder: "กรอกเลขที่บัญชี",
        uploadPassbook: "อัปโหลดรูปถ่ายสมุดบัญชีธนาคาร",
        submitVerification: "ส่งข้อมูลการยืนยันตัวตน",
        submitting: "กำลังส่ง...",
        legalDetailsSubmitted: "ส่งข้อมูลรายละเอียดทางกฎหมายแล้ว",
        successTitle: "สำเร็จ",
        successMessage: "อัปเดตข้อมูลรายละเอียดทางกฎหมายสำเร็จ",
        errorLegalName: "ไม่พบชื่อตามกฎหมาย",
        errorBankName: "ไม่พบชื่อธนาคาร",
        errorAccountNumber: "ไม่พบเลขที่บัญชีธนาคาร",
        errorPassbookImage: "ไม่พบรูปถ่ายสมุดบัญชี",
        errorLegalIdImage: "ไม่พบรูปถ่ายบัตรประจำตัว",
        errorDocumentType: "ไม่พบประเภทเอกสาร",
        errorImageFormat: "กรุณาอัปโหลดรูปภาพเป็นไฟล์ JPEG, JPG หรือ PNG",
        docPassport: "หนังสือเดินทาง",
        docThaiNationalId: "บัตรประจำตัวประชาชนไทย",
        docDrivingLicense: "ใบขับขี่",
        verifiedPopupTitle: "ยืนยันตัวตนแล้ว",
        verifiedPopupMessage: "โปรไฟล์ของคุณได้รับการยืนยันแล้ว คุณสามารถทำการถอนเงินได้ หากต้องการแก้ไขหรืออัปเดตข้อมูล กรุณาติดต่อทีมช่วยเหลือของเรา",
        pendingPopupTitle: "กำลังตรวจสอบ",
        pendingPopupMessage: "การยืนยันตัวตนของคุณอยู่ระหว่างการตรวจสอบ เมื่อเสร็จสิ้นคุณจะสามารถขอถอนเงินได้"
      },


      // Inside th.translation
      withdrawal: {
        noticeMessage: "คำขอถอนเงินทั้งหมดที่ยื่นระหว่างเวลา 18:00 น. ถึง 10:00 น. (ตามเวลาไทย) จะดำเนินการหลังจาก 10:00 น.",
        noticeMessage2: "ถอนเงินจำนวนมากกว่า 500 ได้อย่างง่ายดาย รวดเร็ว ปลอดภัย และราบรื่น",
        credit: "เครดิต",
        requestedAmount: "จำนวนเงินที่ต้องการถอน*",
        amountPlaceholder: "กรอกจำนวนเงิน",
        feeHint: "จะมีค่าธรรมเนียมทางกฎหมาย กับยอดเงินทั้งหมดในระหว่างการถอน",
        bankDetailsTitle: "รายละเอียดธนาคารของคุณ",
        nonEditableNote: "(ไม่สามารถแก้ไขข้อมูลนี้ได้)",
        enterName: "กรอกชื่อ*",
        namePlaceholder: "ตามที่ปรากฏในบัตรประชาชน",
        nameHint: "*กรอกอัตโนมัติจากข้อมูลทางกฎหมายของคุณ",
        chooseBank: "เลือกธนาคารของคุณ",
        bankAccountNumber: "กรอกเลขที่บัญชีธนาคารของคุณ",
        requestedAmountLabel: "จำนวนเงินที่ขอถอน",
        taxFeeLabel: "ค่าธรรมเนียมภาษี",
        netAmountLabel: "จำนวนเงินสุทธิ",
        submit: "ยืนยันการถอน",
        submitting: "กำลังดำเนินการ...",
        errorLoadDetails: "ไม่สามารถโหลดข้อมูลธนาคารและเครดิตของคุณได้",
        errorNetwork: "เกิดข้อผิดพลาดเครือข่าย กรุณาตรวจสอบการเชื่อมต่อของคุณ",
        verificationRequired: "จำเป็นต้องยืนยันตัวตน",
        verificationMessage: "การยืนยันตัวตนของคุณยังไม่สมบูรณ์ กรุณายืนยันตัวตนก่อนขอถอนเงิน",
        invalidAmount: "จำนวนเงินไม่ถูกต้อง",
        invalidAmountMessage: "กรุณากรอกจำนวนเงินที่ต้องการถอนที่ถูกต้อง",
        insufficientCredit: "เครดิตไม่เพียงพอ",
        insufficientCreditMessage: "จำนวนเงินที่ขอถอนเกินเครดิตที่มีอยู่",
        missingBankDetails: "ข้อมูลธนาคารไม่ครบถ้วน",
        missingBankDetailsMessage: "ข้อมูลธนาคารขาดหายไป กรุณาติดต่อฝ่ายสนับสนุน",
        authError: "ข้อผิดพลาดการรับรองตัวตน",
        authErrorMessage: "กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ",
        withdrawalSuccess: "สำเร็จ",
        withdrawalSuccessMessage: "ส่งคำขอถอนเงินสำเร็จ!",
        withdrawalFailed: "การถอนเงินล้มเหลว",
        withdrawalFailedMessage: "คำขอถอนเงินล้มเหลว กรุณาลองอีกครั้ง",
        networkErrorTitle: "ข้อผิดพลาดเครือข่าย",
        networkErrorMessage: "เกิดข้อผิดพลาดเครือข่าย กรุณาตรวจสอบการเชื่อมต่อของคุณ",
        verificationStatusTitle: "สถานะการยืนยันตัวตน",
        ok: "ตกลง",
        "legalfeeLabel": "ค่าธรรมเนียมทางกฎหมาย"
      },

      // Inside th.translation
      sidebar: {
        title: "ไทยXO โซเชียล",
        home: "หน้าหลัก",
        myEarnings: "รายได้ของฉัน",
        payOutHistory: "ประวัติการจ่ายเงิน",
        verifyIdentity: "ยืนยันตัวตน",
        Withdraw: "ถอน",
        milestone: "เป้าหมาย",
        videoCallHistory: "ประวัติการสนทนาวิดีโอ",
        helpSupport: "ช่วยเหลือและสนับสนุน",
        logout: "ออกจากระบบ",
        loggingOut: "กำลังออกจากระบบ...",
        loading: "กำลังโหลด...",
        logoutConfirmTitle: "ยืนยันการออกจากระบบ",
        logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
        cancel: "ยกเลิก",
        confirmLogout: "ออกจากระบบ"
      },

      // Inside th.translation
      helpSupport: {
        title: "เราจะช่วยคุณได้อย่างไร?",
        subtitle: "ค้นหาบทความที่เป็นประโยชน์เพื่อให้คุณใช้งานได้อย่างเต็มที่",
        loading: "กำลังโหลดช่องทางการสนับสนุน...",
        noChannels: "ขณะนี้ยังไม่มีช่องทางการสนับสนุน",
        tryAgain: "ลองอีกครั้ง",
        startChat: "เริ่มแชท",
        errors: {
          loginRequired: "กรุณาเข้าสู่ระบบเพื่อดูความช่วยเหลือและการสนับสนุน",
          sessionExpired: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
          authFailed: "การยืนยันตัวตนล้มเหลว กรุณาเข้าสู่ระบบอีกครั้ง",
          fetchFailed: "เกิดข้อผิดพลาดในการโหลดช่องทางการสนับสนุน"
        },
        platformNames: {
          "Line": "ไลน์",
          "Telegram": "เทเลแกรม",
          "Whatsapp": "วอทส์แอพ"
        }

      },

      // Thai (display Thai script)
      bankNames: {
        "Bangkok_Bank": "ธนาคารกรุงเทพ",
        "Kasikorn_Bank": "ธนาคารกสิกรไทย",
        "KASIKORN_BANK": "ธนาคารกสิกรไทย",
        "Siam_Commercial_Bank": "ธนาคารไทยพาณิชย์",
        "SCB": "ธนาคารไทยพาณิชย์",
        "Krung_Thai_Bank": "ธนาคารกรุงไทย",
        "Krungthai_Bank": "ธนาคารกรุงไทย",
        "Bank_of_Ayudhya": "ธนาคารกรุงศรีอยุธยา",
        "Krungsri": "ธนาคารกรุงศรีอยุธยา",
        "Thanachart_Bank": "ธนาคารธนชาต",
        "TMB_Bank": "ธนาคารทหารไทย",
        "TMBThanachart_Bank": "ธนาคารทหารไทยธนชาต",
        "ttb": "ธนาคารทหารไทยธนชาต",
        "CIMB_Thai_Bank": "ธนาคารซีไอเอ็มบี ไทย",
        "Standard_Chartered_Bank": "ธนาคารสแตนดาร์ดชาร์เตอร์ด",
        "Hongkong_and_Shanghai_Banking_Corporation": "ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น",
        "HSBC": "ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น"
      },

      // === API VALUE TRANSLATIONS (Thai) ===
      apiValues: {
        status: {
          done: "เสร็จสิ้น",
          pending: "รอดำเนินการ",
          rejected: "ถูกปฏิเสธ",
          processing: "กำลังดำเนินการ",
          cancelled: "ยกเลิก",
          completed: "เสร็จสมบูรณ์",
          failed: "ล้มเหลว",
          approved: "อนุมัติแล้ว",
          under_review: "อยู่ระหว่างการตรวจสอบ"
        },
        method: {
          bank: "ธนาคาร",
          cash: "เงินสด",
          wallet: "กระเป๋าเงิน",
          paypal: "เพย์พาล",
          credit_card: "บัตรเครดิต",
          promptpay: "พร้อมเพย์"
        },
        documentType: {
          id_card: "บัตรประชาชน",
          passport: "หนังสือเดินทาง",
          driving_license: "ใบขับขี่",
          thai_national_id: "บัตรประจำตัวประชาชนไทย"
        }
      },

      // th.json
      "login": {
        "title": "เข้าสู่ระบบ",
        "subtitle": "สวัสดี! ยินดีต้อนรับกลับ",
        "description": "กรุณากรอกหมายเลขโทรศัพท์ที่ลงทะเบียนไว้เพื่อเข้าสู่ระบบ เราจะส่ง สนข เพื่อยืนยันตัวตนของคุณ",
        "countryCodeLabel": "รหัสประเทศ",
        "phoneLabel": "กรอกหมายเลขติดต่อ*",
        "phonePlaceholder": "12345-6789",
        "button": "ส่ง สนข",
        "buttonLoading": "กำลังส่ง สนข...",
        "error": {
          "invalidPhone": "กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง",
          "loginFailed": "เข้าสู่ระบบไม่สำเร็จ",
          "genericError": "เกิดข้อผิดพลาดระหว่างการเข้าสู่ระบบ",
          "accountNotExists": "ไม่พบบัญชีผู้ใช้นี้"

        }
      },

      "otp": {
        "titles": "รับ สนข จาก วอทส์แอพพ์",
        "instruction": "เปิด วอทส์แอพพ์ ของคุณ → คัดลอก สนข ที่ปลอดภัย",
        "verifyButton": "ยืนยัน สนข",
        "verifying": "กำลังยืนยัน...",
        "didntReceive": "ไม่ได้รับโค้ด?",
        "resend": "ส่งใหม่",
        "sending": "กำลังส่ง...",
        "timer": " - ",
        "resendSuccess": "ส่ง สนข ใหม่สำเร็จ!",
        "error": {
          "invalidOtp": "กรุณากรอก สนข 6 หลักที่ถูกต้อง",
          "verificationFailed": "การยืนยันล้มเหลว",
          "genericError": "เกิดข้อผิดพลาดระหว่างการยืนยัน สนข",
          "resendFailed": "ไม่สามารถส่ง สนข ใหม่ได้",
          "otpMismatch": "รหัส สนข ไม่ถูกต้อง"
        }
      },

      "notes": {
        "Bank_server_down": "เซิร์ฟเวอร์ธนาคารล่ม",
        "Incorrect_bank_account_details": "รายละเอียดบัญชีธนาคารไม่ถูกต้อง",
        "Name_mismatch_with_bank_account": "ชื่อไม่ตรงกับบัญชีธนาคาร",
        "Suspicious_activity": "กิจกรรมที่น่าสงสัย",
        "Withdrawal_is_in_process": "กำลังดำเนินการถอนเงิน",
        "Withdrawal_is_completed": "การถอนเงินเสร็จสมบูรณ์",
        "Processing": "กำลังดำเนินการ",
        "Processed": "ดำเนินการแล้ว",
        "Completed": "เสร็จสมบูรณ์",
        "Pending_verification": "รอการตรวจสอบ",
        "Verified": "ตรวจสอบแล้ว",
        "Under_review": "อยู่ระหว่างการตรวจสอบ",
        "Rejected": "ถูกปฏิเสธ",
        "Approved": "อนุมัติแล้ว",
        "Auto_approved": "อนุมัติอัตโนมัติ",
        "Manual_review_required": "ต้องตรวจสอบด้วยตนเอง",
        "Waiting_for_bank_confirmation": "รอการยืนยันจากธนาคาร",
        "Bank_transfer_initiated": "เริ่มโอนเงินผ่านธนาคารแล้ว",
        "Funds_transferred": "โอนเงินเสร็จสิ้น",
        "Withdrawal_request_received": "ได้รับคำขอถอนเงิน",
        "Queued_for_processing": "อยู่ในคิวรอดำเนินการ",
        "Success": "สำเร็จ",
        "Failed": "ล้มเหลว",
        "Pending": "รอดำเนินการ",
        "Cancelled": "ยกเลิก",
        "Refunded": "คืนเงินแล้ว",
        "On_hold": "ระงับชั่วคราว",
        "In_progress": "กำลังดำเนินการ",
        "Done": "เสร็จสิ้น",
        "DONE": "เสร็จสิ้น",
        "PENDING": "รอดำเนินการ",
        "COMPLETED": "เสร็จสมบูรณ์",
        "APPROVED": "อนุมัติแล้ว",
        "REJECTED": "ถูกปฏิเสธ",
        "FAILED": "ล้มเหลว",
        "CANCELLED": "ยกเลิก"
      },

      "status": {
        "DONE": "เสร็จสิ้น",
        "COMPLETED": "เสร็จสมบูรณ์",
        "APPROVED": "อนุมัติแล้ว",
        "PENDING": "รอดำเนินการ",
        "PROCESSING": "กำลังดำเนินการ",
        "UNDER_REVIEW": "อยู่ระหว่างการตรวจสอบ",
        "REJECTED": "ถูกปฏิเสธ",
        "FAILED": "ล้มเหลว",
        "CANCELLED": "ยกเลิก"
      },


      "currency": {
        "thb": "บาท"
      },

    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
      cookieMinutes: 60 * 24 * 30,
    },
  });

export default i18n;