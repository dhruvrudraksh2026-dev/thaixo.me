
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import "../css/platform-policy.css";
import Logos from "../assets/Logos.png";
import Header from "./Header";
import { useTranslation } from "react-i18next";
export default function PlatformPolicy() {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="policy-page">
      <Sidebar
        show={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeItem="privacy"
      />


      <div className="policy-main">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="policy-container">
          <div className="policy-card">

            <img src={Logos} alt="ThaiXO" className="logo" />

            <h1 className="policy-title">
              {t("privacyPolicy.title")}
            </h1>

            <p className="policy-subtitle">
              {t("privacyPolicy.description")}
            </p>

            <div className="policy-content">

              <section className="policy-section">
                <h4>{t("privacyPolicy.firstTitle")}</h4>
                <ul>
                  <li>{t("privacyPolicy.firstOne")}</li>
                  <li>{t("privacyPolicy.firstTwo")}</li>
                  <li>{t("privacyPolicy.firstThree")}</li>
                  <li>{t("privacyPolicy.firstFour")}</li>
                </ul>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.secondTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.secondDescription")}</p>
                <ul>
                  <li>{t("privacyPolicy.secondOne")}</li>
                  <li>{t("privacyPolicy.secondTwo")}</li>
                  <li>{t("privacyPolicy.secondThree")}</li>
                  <li>{t("privacyPolicy.secondFour")}</li>
                  <li>{t("privacyPolicy.secondFive")}</li>
                </ul>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.thirdTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.thirdOne")}</p>
                <p className="policy-text">{t("privacyPolicy.thirdTwo")}</p>
                <p className="policy-text">{t("privacyPolicy.thirdThree")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.fourthTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.fourthOne")}</p>
                <p className="policy-text">{t("privacyPolicy.fourthDescription")}</p>
                <ul>
                  <li>{t("privacyPolicy.fourthTwo")}</li>
                  <li>{t("privacyPolicy.fourthThree")}</li>
                  <li>{t("privacyPolicy.fourthFour")}</li>
                  <li>{t("privacyPolicy.fourthFive")}</li>
                </ul>
                <p className="policy-text">{t("privacyPolicy.fourthSix")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.fifthTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.fifthDescription")}</p>
                <ul>
                  <li>{t("privacyPolicy.fifthOne")}</li>
                  <li>{t("privacyPolicy.fifthTwo")}</li>
                  <li>{t("privacyPolicy.fifthThree")}</li>
                  <li>{t("privacyPolicy.fifthFour")}</li>
                  <li>{t("privacyPolicy.fifthFive")}</li>
                  <li>{t("privacyPolicy.fifthSix")}</li>
                </ul>
                <p className="policy-text">{t("privacyPolicy.fifthSeven")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.sixthTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.sixthDescription")}</p>
                <ul>
                  <li>{t("privacyPolicy.sixthOne")}</li>
                  <li>{t("privacyPolicy.sixthTwo")}</li>
                  <li>{t("privacyPolicy.sixthThree")}</li>
                  <li>{t("privacyPolicy.sixthFour")}</li>
                  <li>{t("privacyPolicy.sixthFive")}</li>
                  <li>{t("privacyPolicy.sixthSix")}</li>
                  <li>{t("privacyPolicy.sixthSeven")}</li>
                  <li>{t("privacyPolicy.sixthEight")}</li>
                  <li>{t("privacyPolicy.sixthNine")}</li>
                  <li>{t("privacyPolicy.sixthTen")}</li>
                </ul>
                <p className="policy-text">{t("privacyPolicy.sixthEleven")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.seventhTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.seventhOne")}</p>
                <ul>
                  <li>{t("privacyPolicy.seventhTwo")}</li>
                  <li>{t("privacyPolicy.seventhThree")}</li>
                  <li>{t("privacyPolicy.seventhFour")}</li>
                  <li>{t("privacyPolicy.seventhFive")}</li>
                  <li>{t("privacyPolicy.seventhSix")}</li>
                  <li>{t("privacyPolicy.seventhSeven")}</li>
                  <li>{t("privacyPolicy.seventhEight")}</li>
                  <li>{t("privacyPolicy.seventhNine")}</li>
                </ul>
                <p className="policy-text">{t("privacyPolicy.seventhTen")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.eighthTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.eighthOne")}</p>
                <p className="policy-text">{t("privacyPolicy.eighthTwo")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.ninthTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.ninthOne")}</p>
                <ul>
                  <li>{t("privacyPolicy.ninthTwo")}</li>
                  <li>{t("privacyPolicy.ninthThree")}</li>
                  <li>{t("privacyPolicy.ninthFour")}</li>
                  <li>{t("privacyPolicy.ninthFive")}</li>
                  <li>{t("privacyPolicy.ninthSix")}</li>
                </ul>
                <p className="policy-text">{t("privacyPolicy.ninthSeven")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.tenthTitle")}</h4>
                <p className="policy-text">{t("privacyPolicy.tenthOne")}</p>
                <p className="policy-text">{t("privacyPolicy.tenthTwo")}</p>
              </section>

              <section className="policy-section">
                <h4>{t("privacyPolicy.eleventhTitle")}</h4>

                <p className="policy-text">
                  {t("privacyPolicy.eleventhOne")}
                </p>

                <p className="policy-text">
                  {t("privacyPolicy.eleventhTwo")}{" "}
                  <a
                    href="mailto:support@thaixo.app"
                    className="policy-link"
                  >
                    support@thaixo.app
                  </a>
                </p>

                <p className="policy-text">
                  {t("privacyPolicy.eleventhThree")}{" "}
                  <a
                    href="https://thaixo.co/support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="policy-link"
                  >
                    thaixo.co/support
                  </a>
                </p>
              </section>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}