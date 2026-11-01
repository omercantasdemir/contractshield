// Analiz motoruyla iletişim katmanı.
//
// Bu prototipte analiz motoru henüz bağlı değildir. analyzeContract(), gerçek
// sistemin döndüreceği şemada hazırlanmış TEMSİLİ örnek çıktıyı döndürür.
//
// Analiz motoru hazır olduğunda yalnızca bu fonksiyon değiştirilir; arayüzün
// geri kalanı aynı kalır. Planlanan gerçek çağrı:
//
//   const form = new FormData();
//   form.append("file", file);
//   form.append("contract_type", contractType);
//   const res = await fetch("/analyze", { method: "POST", body: form });
//   return await res.json();

import { sampleContract } from "./data/sampleContract.js";

const DEMO_DELAY_MS = 2400;

export function analyzeContract(file, contractType) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sampleContract), DEMO_DELAY_MS);
  });
}
