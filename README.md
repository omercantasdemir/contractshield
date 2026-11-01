# ContractShield (Sözleşme Kalkanı)

Sözleşme maddelerinde yapay zekâ destekli hukuki risk tespiti için web tabanlı bir prototip.
LEE508 Yapay Zekâ ve Uygulamaları dersi (Prof. Dr. Agah Tuğrul KORUCU) grup projesidir.

**Canlı demo:** https://contractshield-demo.vercel.app

> **Önemli:** Bu sürüm, kullanıcı arayüzü prototipidir. Analiz motoru henüz bağlı değildir.
> Gösterilen etiketler ve gerekçeler `src/data/sampleContract.js` dosyasındaki **temsili** örnek
> çıktılardır; model çıktısı değildir. Bu araç hukuki danışmanlık yerine geçmez.

## Ekip

| Kişi | Rol |
| --- | --- |
| Eylül Düvenci | Hukuk: veri seti, etiketleme, hukuki doğrulama |
| Yağmur Yabacı | Hukuk: veri seti, etiketleme, hukuki doğrulama |
| Ömercan Taşdemir | Teknik: mimari, yazılım geliştirme, değerlendirme |

## Uygulama ne yapar?

1. Kullanıcı sözleşme türünü seçer ve PDF/DOCX dosyasını yükler.
2. Sistem sözleşmeyi maddelere ayırır.
3. Her madde **Yeşil** (sorun yok), **Sarı** (riskli/aleyhte) veya **Kırmızı** (emredici hükme aykırı)
   olarak etiketlenir.
4. Sarı ve Kırmızı maddeler için dayanak kanun maddesi ve kısa bir gerekçe gösterilir.
5. Kullanıcı sonuçları etikete göre filtreleyebilir ve bir maddeye tıklayarak detayını görebilir.

## Sistem mimarisi

```
Kullanıcı arayüzü  →  Madde ayırma  →  Analiz motoru  →  Sonuç (etiket + mevzuat + gerekçe)
                                            ↑
                                  Mevzuat bilgi tabanı (TBK, İş Kanunu, TKHK)
```

Bu depo, mimarideki **kullanıcı arayüzü** katmanını içerir. Arayüz, analiz motoruyla tek bir fonksiyon
(`src/api.js` → `analyzeContract`) üzerinden konuşur. Analiz motoru hazır olduğunda yalnızca bu fonksiyon
gerçek `POST /analyze` uç noktasını çağıracak şekilde değiştirilir.

Analiz motoru için değerlendirilen yaklaşımlar (büyük dil modeli + RAG, ince ayarlı Türkçe hukuk dil modeli,
hibrit) ve seçim ölçütleri proje raporunda açıklanmaktadır.

## Kullanılan teknolojiler

| Alan | Teknoloji |
| --- | --- |
| Programlama dili | JavaScript (JSX) |
| Arayüz kütüphanesi | React 18 |
| Bileşen kütüphanesi | Ant Design 5 (Türkçe dil desteği, özel tema) |
| Derleme aracı | Vite 5 |
| Stil | Saf CSS |
| Barındırma | Vercel |
| Analiz motoru (planlanan) | Python, FastAPI, RAG; aday modeller raporda |

## Klasör yapısı

```
contractshield/
├── index.html                    Sayfa iskeleti
├── package.json                  Bağımlılıklar ve komutlar
├── vite.config.js                Vite ayarları
└── src/
    ├── main.jsx                  Giriş noktası
    ├── App.jsx                   Ekranlar arası geçiş (yükleme → analiz → sonuç)
    ├── api.js                    Analiz motoruyla iletişim (şu an temsili veri)
    ├── labels.js                 Yeşil / Sarı / Kırmızı etiket tanımları
    ├── styles.css                Sayfa düzeni stilleri
    ├── components/
    │   ├── Header.jsx            Üst çubuk
    │   ├── RiskTag.jsx           Yeşil / Sarı / Kırmızı etiket ve ikonları
    │   ├── UploadScreen.jsx      Sözleşme türü ve dosya yükleme
    │   ├── AnalyzingScreen.jsx   Analiz ilerleme ekranı
    │   ├── ResultScreen.jsx      Özet, filtreler, madde listesi
    │   └── DetailPanel.jsx       Seçili maddenin gerekçesi
    └── data/
        └── sampleContract.js     Temsili örnek sözleşme ve analiz çıktısı
```

## Veri

`src/data/sampleContract.js`, 14 maddelik temsili bir yazılım geliştirici iş sözleşmesi içerir
(6 Yeşil, 3 Sarı, 5 Kırmızı). Her madde, analiz motorunun döndüreceği şemaya uyar:

```json
{
  "clause_id": "3",
  "title": "Deneme Süresi",
  "text": "Taraflar arasında deneme süresi 4 (dört) ay olarak belirlenmiştir...",
  "label": "kirmizi",
  "confidence": 0.91,
  "legal_basis": "İş Kanunu m. 15",
  "rationale": "Deneme süresi en çok iki ay olabilir..."
}
```

Örnek sözleşme kurgusaldır ve kişisel veri içermez. Gerçek veri seti hukuk ekibi tarafından hazırlanmakta
olup bu depoda yer almaz.

## Kurulum ve çalıştırma

Gereksinim: Node.js 18 veya üstü.

```bash
git clone https://github.com/omercantasdemir/contractshield.git
cd contractshield
npm install
npm run dev
```

Ardından terminalde gösterilen adresi (varsayılan `http://localhost:5173`) tarayıcıda açın.

Üretim derlemesi için `npm run build` komutu kullanılır; çıktı `dist/` klasörüne yazılır ve
`npm run preview` ile yerel olarak denenebilir.

## Testler ve sınırlılıklar

- Arayüz, masaüstü ve mobil genişlikte elle test edilmiştir: yükleme, analiz, filtreleme ve madde detayı
  akışları çalışmaktadır.
- Analiz motoru bağlı olmadığı için yüklenen dosya işlenmez; her durumda örnek sözleşme gösterilir.
- Örnek etiketler ve gerekçeler temsilidir ve hukuk ekibinin doğrulamasından geçmemiştir.
- Prototip yalnızca yazılım geliştirici iş sözleşmesini kapsar.

## Yapay zekâ araçlarının kullanımı

Bu prototipin kodu ve temsili örnek veri, Claude (Anthropic) üretken yapay zekâ aracının yardımıyla
hazırlanmış ve ekip tarafından gözden geçirilmiştir.
