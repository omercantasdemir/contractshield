// Uygulamanın giriş noktası.
// ConfigProvider, Ant Design bileşenlerine Türkçe dil desteğini ve proje temasını uygular.

import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import trTR from "antd/locale/tr_TR";
import App from "./App.jsx";
import "./styles.css";

const appTheme = {
  token: {
    colorPrimary: "#1f3a5f",
    borderRadius: 8,
    fontFamily: "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
  }
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider locale={trTR} theme={appTheme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
