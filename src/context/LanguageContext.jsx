// context/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Translation data
const translations = {
  en: {
    // Header translations
    header: {
      title: "ThaiXO Creator Studio",
      logout: "Log out",
      loggingOut: "Logging out...",
      language: "Language",
      notifications: "Notifications",
      markAllAsRead: "Mark all as read",
      noNotifications: "No notifications",
      viewAll: "View All"
    },
    // Withdrawal History translations
    withdrawal: {
      title: "Withdrawal History",
      date: "Date",
      amount: "Amount",
      status: "Status",
      method: "Method",
      reference: "Reference ID",
      noData: "No withdrawal history found",
      loading: "Loading...",
      error: "Error loading withdrawal history",
      pending: "Pending",
      completed: "Completed",
      failed: "Failed",
      processing: "Processing",
      bankTransfer: "Bank Transfer",
      wallet: "E-Wallet",
      cash: "Cash"
    }
  },
  th: {
    // Header translations
    header: {
      title: "ไทยXO Creator Studio",
      logout: "ออกจากระบบ",
      loggingOut: "กำลังออกจากระบบ...",
      language: "ภาษา",
      notifications: "การแจ้งเตือน",
      markAllAsRead: "ทำเครื่องหมายว่าอ่านแล้วทั้งหมด",
      noNotifications: "ไม่มีการแจ้งเตือน",
      viewAll: "ดูทั้งหมด"
    },
    // Withdrawal History translations
    withdrawal: {
      title: "ประวัติการถอนเงิน",
      date: "วันที่",
      amount: "จำนวนเงิน",
      status: "สถานะ",
      method: "วิธีการ",
      reference: "รหัสอ้างอิง",
      noData: "ไม่พบประวัติการถอนเงิน",
      loading: "กำลังโหลด...",
      error: "เกิดข้อผิดพลาดในการโหลดประวัติการถอนเงิน",
      pending: "รอดำเนินการ",
      completed: "สำเร็จ",
      failed: "ล้มเหลว",
      processing: "กำลังดำเนินการ",
      bankTransfer: "โอนผ่านธนาคาร",
      wallet: "กระเป๋าเงินอิเล็กทรอนิกส์",
      cash: "เงินสด"
    }
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('appLanguage');
    return savedLanguage || 'en';
  });

  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = async (lang) => {
    setIsLoading(true);
    try {
      setLanguage(lang);
      localStorage.setItem('appLanguage', lang);
      
      // If you want to save language preference on server
      const token = localStorage.getItem('token');
      if (token) {
        await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/language`, 
          { language: lang },
          {
            headers: {
              'Authorization': `${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
      }
    } catch (error) {
      console.error('Error saving language preference:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    return value;
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    t,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};