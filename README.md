# Phoenix-Take-Home-Test

Phoenix-Take-Home-Test/
├── app/
│ ├── index.tsx → Entry screen with navigation buttons
│ ├── \_layout.tsx → Global layout using expo-router
│ ├── atoms/ → Reusable base UI components
│ │ ├── Button/
│ │ │ └── Button.tsx
│ │ └── Typography/
│ │ └── Link.tsx
│ ├── molecules/ → Form components composed of atoms
│ │ └── FormTextInput/
│ │ └── FormTextInput.tsx
│ ├── screens/ → Main feature screens
│ │ ├── Login.tsx
│ │ └── PushNotificationTest.tsx
│ ├── utils/ → Hooks and utility functions
│ │ └── notifications.ts
│
├── global.css → Tailwind base styles
├── tailwind.config.js → Tailwind/NativeWind config
├── app.json → Expo config (with scheme for deep linking)
├── tsconfig.json → TypeScript config
├── babel.config.js → Babel config
├── metro.config.js → Metro bundler config
├── package.json → Project dependencies
└── README.md
