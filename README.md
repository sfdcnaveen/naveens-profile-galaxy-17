# ☁️ Salesforce Lightning Portfolio

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)
![Salesforce](https://img.shields.io/badge/Salesforce-Lightning-00A1E0?logo=salesforce)

A premium, 100% data-driven professional portfolio built with **Next.js**, styled seamlessly to mimic the **Salesforce Lightning Design System (SLDS)**, and powered entirely by a live **Salesforce Org** backend via OAuth 2.0 JWT Bearer Flow.

If you are a Salesforce Developer, Architect, or SDET, this is the ultimate way to showcase your skills. Your entire portfolio (Projects, Experience, Skills, Certifications, Contact Info, and even your Resume URL) is managed directly inside your Salesforce Org using Custom Objects and Metadata Types.

No hardcoded data. No deployment required to update your resume. Just edit a record in Salesforce, and your global portfolio updates instantly!

## ✨ Features

- **Salesforce Lightning Experience UI:** The interface is built to look and feel exactly like a native Salesforce App, complete with global search, tabs, accordion layouts, and key highlights panels.
- **100% Salesforce-Driven Data:** Every piece of information on the site is fetched from Salesforce.
- **OAuth 2.0 JWT Bearer Authentication:** Enterprise-grade secure server-to-server connection. No passwords or security tokens stored in the codebase.
- **Blazing Fast Performance:** Leverages Next.js Static Site Generation (SSG) to pre-render the data, ensuring instantaneous load times with zero API limits hit during traffic spikes.
- **Photography / Creative App:** Includes an "App Launcher" navigation to switch to a secondary creative portfolio layout.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sfdcnaveen/naveens-profile-galaxy-17.git
cd naveens-profile-galaxy-17
npm install
```

### 2. Configure Salesforce Connected App

To securely connect the portfolio to your Salesforce org, you must set up an OAuth 2.0 JWT Bearer Connected App.

1. Generate an X.509 Certificate (`server.crt` and `server.key`) using OpenSSL.
2. Create a **Connected App** in Salesforce:
    - Enable OAuth Settings.
    - Check **Use digital signatures** and upload your `server.crt`.
    - Add scopes: `Api`, `Web`, `RefreshToken`, `OfflineAccess`.
    - Manage the App and set "Permitted Users" to **Admin approved users are pre-authorized**, and assign your System Administrator profile.
3. Note the **Consumer Key** (Client ID).

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your credentials:

```env
SF_LOGIN_URL=https://login.salesforce.com
SF_USERNAME=your_salesforce_username@example.com
SF_CLIENT_ID=your_connected_app_consumer_key
SF_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nMultiline\nKey\nHere\n-----END PRIVATE KEY-----"
```

### 4. Create Salesforce Schema

You will need to create the corresponding Custom Objects (`__c`) and Custom Metadata Types (`__mdt`) in your Salesforce Org to house your data. The codebase expects the following schemas:

- `Portfolio_Project__c` (Projects)
- `Work_Experience__c` (Experience)
- `Skill__c` (Skills)
- `Certification__mdt` (Certifications)
- `Portfolio_Settings__mdt` (Global Settings & Links)

_(Note: You can use the Salesforce CLI to rapidly deploy these objects into your org)._

### 5. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your live, Salesforce-powered portfolio!

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** CSS Modules with SLDS Design Tokens
- **Backend/CMS:** Salesforce Platform (SOQL & REST API via `jsforce`)
- **Authentication:** Native Node.js `crypto` JWT signing

## 🤝 Contributing

Want to add more Salesforce components (like Chatter feeds, Reports, or Dashboards)? Pull requests are welcome!

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
