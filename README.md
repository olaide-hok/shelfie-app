# Shelfie

<!-- dev.habeeb.shelfie -->

# 📱 React Native App

Welcome to the React Native App repository!  
This project is a cross-platform mobile application built with [React Native](https://reactnative.dev/).

## Table of Contents

-   [About the Project](#about-the-project)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
-   [Environment Variables](#environment-variables)
-   [Available Scripts](#available-scripts)
-   [Folder Structure](#folder-structure)
-   [Contributing](#contributing)
-   [License](#license)

---

## 📖 About the Project

Shelfie App is for managing a users reading list .It includes native components, routing, navigation, styling, authentication, light and dark themes etc. Available on both iOS and Android.

---

## ⚙️ Tech Stack

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.dev/) or [React Native CLI](https://reactnative.dev/docs/environment-setup) (specify which one)
-   [React Context API](https://react.dev/reference/react/createContext) (for state management)
-   [React Navigation](https://reactnavigation.org/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   Node.js (v22 or above)
-   Yarn or npm
-   Watchman (for macOS)
-   Xcode (for iOS development) or Android Studio (for Android development)
-   Visual Studio Code Editor.

> You can follow [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide.

### Installation

1. **Clone the repo**

```bash
git clone https://github.com/olaide-hok/shelfie-app.git

cd shelfie-app
```

2. **Install dependencies**

```bash
# Using Yarn
yarn install

# or npm
npm install

```

3. **Set up environment variables**

Create a `.env` file in the root directory and add necessary variables.

3. **Run the app**

-   For Expo:

```bash
npx expo start
```

## 🗂 Folder Structure

```bash
.
├── app
│   ├──(auth)             # Authorization group
|      ├── _layout.jsx         # AuthLayout configuration
│      ├── login.jsx           # login screen (page)
│      ├── register.jsx        # registration screen (page)
│   ├──(dashboard)         # Dashboard group
│      ├── _layout             # DashboardLayout configuration
│      ├── books.jsx           # books screen (page)
│      ├── create.jsx          # create screen (page)
│      ├── profile.jsx         # profile screen (page)
│   ├── _layout.jsx         # RootLayout configuration
│   ├── about.jsx           # About screen
│   ├── contact.jsx         # Contact screen
│   └── index.jsx           # App entry file
├── assets                  # Images, fonts, icons
├── components              # Reusable UI components
├── constants               # App-wide constants
├── contexts                # App-wide Context API
├── hooks                   # Custom React hooks
├── libs                    # 3rd party library
├── app.json                # App configuration
├── package.json            # Development packages and libraries
└── README.md
```

## 🤝 Contributing

-   We welcome contributions!

-   Fork the repository.

-   Create your branch (`git checkout -b feature/YourFeature`).

-   Commit your changes (`git commit -m 'Add some feature`).

-   Push to the branch (`git push origin feature/YourFeature`).

-   Open a Pull Request.

## 📄 License

Distributed under the MIT License. See LICENSE for more information.
