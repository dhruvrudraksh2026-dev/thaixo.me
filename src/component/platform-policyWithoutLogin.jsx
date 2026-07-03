
import "../css/platform-privacy.css";
import Logos from "../assets/Logos.png";
export default function PlatformPolicy() {
  return (
    <div className="policy-container">
      <div className="policy-card">

        <img src={Logos} alt="ThaiXO" className="logo" />

        <h1 className="policy-title">
          Become a Creator
        </h1>

        <p className="policy-subtitle">
          Privacy Policy & Community Rules
        </p>

        <div className="policy-content">

          <section className="policy-section">
            <h4>1. Information We Collect</h4>
            <ul>
              <li>Your profile details</li>
              <li>Your selfie for creator verification</li>
              <li>Photos or content you upload/post</li>
              <li>Basic app activity related to safety</li>
            </ul>
          </section>

          <section className="policy-section">
            <h4>2. How We Use Your Information</h4>
            <p className="policy-text">We use your information to:</p>
            <ul>
              <li>Verify your creator profile</li>
              <li>Keep the community safe and trusted</li>
              <li>Show your creator profile to users</li>
              <li>Review reports, suspicious activity, or rule violations</li>
              <li>Improve app safety and user experience</li>
            </ul>
          </section>

          <section className="policy-section">
            <h4>3. Creator Role</h4>
            <p className="policy-text">As a ThaiXO creator, you are an individual creator on the platform.</p>
            <p className="policy-text">You are not an employee, staff member, agent, or permanent worker of ThaiXO. Becoming a creator does not create any job, salary, employment, or company relationship.</p>
            <p className="policy-text">Creators are expected to communicate politely and responsibly with users.</p>
          </section>

          <section className="policy-section">
            <h4>4. Video Call Rules</h4>
            <p className="policy-text">Creators can receive video calls from users, but creators cannot directly start video calls by themselves.</p>
            <p className="policy-text">During a call, creators have the right to:</p>
            <ul>
              <li>End/cut the call anytime</li>
              <li>Block a user</li>
              <li>Report inappropriate behavior</li>
              <li>Stop communication if they feel uncomfortable</li>
            </ul>
            <p className="policy-text">All calls and conversations must stay respectful, friendly, and safe.</p>
          </section>

          <section className="policy-section">
            <h4>5. Allowed Creator Activity</h4>
            <p className="policy-text">Creators should use ThaiXO only for:</p>
            <ul>
              <li>Friendly social conversation</li>
              <li>Culture sharing</li>
              <li>Language exchange</li>
              <li>Travel and lifestyle discussions</li>
              <li>General respectful communication</li>
              <li>Helping users feel welcome in the community</li>
            </ul>
            <p className="policy-text">Creators must talk politely and behave professionally with all users.</p>
          </section>

          <section className="policy-section">
            <h4>6. Strictly Not Allowed</h4>
            <p className="policy-text">The following activities are strictly prohibited:</p>
            <ul>
              <li>Sex chat, nude content, adult content, or sexual behavior</li>
              <li>Sharing or asking for private photos/videos</li>
              <li>Illegal activities or promoting illegal services</li>
              <li>Abusive, hateful, threatening, or disrespectful language</li>
              <li>Scam, fraud, fake promises, or misleading activity</li>
              <li>Asking users for money, gifts, login details, passwords, OTP, ID, bank details, or personal documents</li>
              <li>Moving users too quickly to WhatsApp, Instagram, Telegram, or other outside platforms</li>
              <li>Sharing another person’s private information</li>
              <li>Fake profile, fake identity, or using someone else’s photos</li>
              <li>Harassment, blackmail, pressure, or emotional manipulation</li>
            </ul>
            <p className="policy-text">ThaiXO is only for safe, friendly, cultural, and social communication.</p>
          </section>

          <section className="policy-section">
            <h4>7. Personal Data Safety</h4>
            <p className="policy-text">Creators must never ask users for sensitive personal information such as:</p>
            <ul>
              <li>Passwords</li>
              <li>OTP or login codes</li>
              <li>Bank details</li>
              <li>Government ID</li>
              <li>Home address</li>
              <li>Private photos or videos</li>
              <li>Payment information</li>
              <li>Personal account access</li>
            </ul>
            <p className="policy-text">If any user shares such information by mistake, creators should not misuse it and should report suspicious activity if needed.</p>
          </section>

          <section className="policy-section">
            <h4>8. Content Review and Reports</h4>
            <p className="policy-text">ThaiXO may review creator profiles, uploaded photos, posts, reports, and suspicious activity to keep the platform safe.</p>
            <p className="policy-text">If users report a creator for inappropriate behavior, ThaiXO may investigate the account and take action as required.</p>
          </section>

          <section className="policy-section">
            <h4>9. Account Suspension or Removal</h4>
            <p className="policy-text">If a creator breaks these rules, ThaiXO has the right to:</p>
            <ul>
              <li>Warn the creator</li>
              <li>Remove inappropriate content</li>
              <li>Limit creator features</li>
              <li>Suspend creator profile</li>
              <li>Permanently block or remove the account</li>
            </ul>
            <p className="policy-text">Serious violations such as sexual content, scams, illegal activity, abuse, or asking for private data may result in immediate suspension without notice.</p>
          </section>

          <section className="policy-section">
            <h4>10. Your Responsibility</h4>
            <p className="policy-text">As a creator, you are responsible for your own behavior, communication, content, and actions inside the app.</p>
            <p className="policy-text">You agree to keep ThaiXO safe, respectful, and positive for all users.</p>
          </section>

          <section className="policy-section">
            <h4>11. Contact Us</h4>

            <p className="policy-text">
              For any questions, safety concerns, or privacy-related requests, contact us:
            </p>

            <p className="policy-text">
              Email:{" "}
              <a
                href="mailto:support@thaixo.app"
                className="policy-link"
              >
                support@thaixo.app
              </a>
            </p>

            <p className="policy-text">
              Website:{" "}
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
  );
}