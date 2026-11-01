// Risk etiketleri. Anahtarlar, veri setindeki ve analiz motoru çıktısındaki
// `label` alanıyla aynıdır: yesil / sari / kirmizi.
// `status`, Ant Design'ın durum renklerine (success / warning / error) karşılık gelir.

export const LABELS = {
  yesil: { name: "Yeşil", description: "Sorun yok", status: "success" },
  sari: { name: "Sarı", description: "Riskli / aleyhte", status: "warning" },
  kirmizi: { name: "Kırmızı", description: "Emredici hükme aykırı", status: "error" }
};

// Özet ve filtrelerde gösterim sırası (en riskliden başlayarak).
export const LABEL_ORDER = ["kirmizi", "sari", "yesil"];
