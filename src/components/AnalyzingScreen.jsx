// Analiz sürerken gösterilen ekran. Adımlar, sistem mimarisindeki işlem sırasını yansıtır.

import { useState, useEffect } from "react";
import { Spin, Steps, Typography } from "antd";

const STEPS = [
  "Metin çıkarılıyor",
  "Maddeler ayrılıyor",
  "İlgili mevzuat getiriliyor",
  "Maddeler değerlendiriliyor"
];

const STEP_INTERVAL_MS = 600;

export default function AnalyzingScreen() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStep((s) => Math.min(s + 1, STEPS.length)), STEP_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="analyzing" aria-live="polite">
      <Spin size="large" />
      <Typography.Title level={3}>Sözleşme analiz ediliyor</Typography.Title>
      <Steps
        direction="vertical"
        size="small"
        current={step}
        items={STEPS.map((title) => ({ title }))}
      />
    </div>
  );
}
