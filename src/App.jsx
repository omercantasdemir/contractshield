// Ana bileşen. Üç ekran arasında geçişi yönetir:
//   upload    → kullanıcı sözleşme türünü seçer ve dosya yükler
//   analyzing → analiz sürerken ilerleme gösterilir
//   result    → maddeler renk kodlu olarak listelenir

import { useState } from "react";
import { Layout, Alert } from "antd";
import { analyzeContract } from "./api.js";
import AppHeader from "./components/Header.jsx";
import UploadScreen from "./components/UploadScreen.jsx";
import AnalyzingScreen from "./components/AnalyzingScreen.jsx";
import ResultScreen from "./components/ResultScreen.jsx";

const { Content, Footer } = Layout;

export default function App() {
  const [screen, setScreen] = useState("upload");
  const [result, setResult] = useState(null);

  async function startAnalysis(file, contractType) {
    setScreen("analyzing");
    const data = await analyzeContract(file, contractType);
    setResult(data);
    setScreen("result");
  }

  function reset() {
    setResult(null);
    setScreen("upload");
  }

  return (
    <Layout className="app">
      <AppHeader onHome={reset} />
      <Alert
        banner
        type="warning"
        message={
          <span>
            <strong>Akademik prototip.</strong> Bu araç hukuki danışmanlık yerine geçmez. Bu sürümde
            gösterilen etiketler ve gerekçeler temsili örnek çıktılardır.
          </span>
        }
      />
      <Content className="content">
        {screen === "upload" && <UploadScreen onAnalyze={startAnalysis} />}
        {screen === "analyzing" && <AnalyzingScreen />}
        {screen === "result" && <ResultScreen contract={result} onReset={reset} />}
      </Content>
      <Footer className="footer">
        ContractShield · LEE508 Yapay Zekâ ve Uygulamaları · İstanbul Ticaret Üniversitesi
      </Footer>
    </Layout>
  );
}
