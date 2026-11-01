// ContractShield demo — TEMSİLİ (örnek) analiz çıktısı.
// Bu dosyadaki etiketler ve gerekçeler model çıktısı değildir; arayüzü göstermek için
// elle hazırlanmıştır ve hukuk ekibinin doğrulamasından geçmemiştir.
// Her madde, raporda tanımlanan analiz motoru çıktı şemasına uyar:
// { clause_id, title, text, label, confidence, legal_basis, rationale }

export const sampleContract = {
  contract_id: "IS_DEMO_001",
  contract_type: "is",
  title: "Yazılım Geliştirici İş Sözleşmesi",
  parties: "Örnek Yazılım A.Ş. (İşveren) — [Çalışan Adı Soyadı] (Çalışan)",
  clauses: [
    {
      clause_id: "1",
      title: "Taraflar",
      text: "İşbu sözleşme, bir tarafta Örnek Yazılım A.Ş. (bundan sonra \"İşveren\") ile diğer tarafta [Çalışan Adı Soyadı] (bundan sonra \"Çalışan\") arasında aşağıdaki şartlarla akdedilmiştir.",
      label: "yesil",
      confidence: 0.98,
      legal_basis: null,
      rationale: null
    },
    {
      clause_id: "2",
      title: "İşin Konusu",
      text: "Çalışan, İşveren nezdinde Yazılım Geliştirici (Backend) unvanıyla istihdam edilecek; İşveren'in yazılım ürünlerinin tasarımı, geliştirilmesi, test edilmesi ve bakımı görevlerini yerine getirecektir.",
      label: "yesil",
      confidence: 0.96,
      legal_basis: null,
      rationale: null
    },
    {
      clause_id: "3",
      title: "Deneme Süresi",
      text: "Taraflar arasında deneme süresi 4 (dört) ay olarak belirlenmiştir. Bu süre içinde taraflar sözleşmeyi bildirim süresine gerek olmaksızın ve tazminatsız feshedebilir.",
      label: "kirmizi",
      confidence: 0.91,
      legal_basis: "İş Kanunu m. 15",
      rationale: "Deneme süresi en çok iki ay olabilir; dört aya kadar uzatılması ancak toplu iş sözleşmesiyle mümkündür. Bireysel sözleşmede iki ayı aşan kısım geçersizdir."
    },
    {
      clause_id: "4",
      title: "Çalışma Süresi",
      text: "Haftalık çalışma süresi 45 saattir ve Pazartesi–Cuma günleri arasında eşit olarak dağıtılır. Günlük çalışma saatleri 09.00–18.00 olup bir saat ara dinlenmesi verilir.",
      label: "yesil",
      confidence: 0.94,
      legal_basis: "İş Kanunu m. 63",
      rationale: null
    },
    {
      clause_id: "5",
      title: "Fazla Çalışma",
      text: "Çalışanın yapacağı tüm fazla çalışmaların ücreti aylık ücretine dahildir; fazla çalışma için ayrıca bir ödeme yapılmaz.",
      label: "sari",
      confidence: 0.84,
      legal_basis: "İş Kanunu m. 41",
      rationale: "Fazla çalışmanın ücrete dahil olduğu kaydı uygulamada yıllık 270 saatlik sınıra kadar geçerli kabul edilir. Bu sınırı aşan fazla çalışmanın her saati %50 zamlı olarak ayrıca ödenmelidir; 'tüm fazla çalışmalar' ifadesi bu nedenle çalışan aleyhinedir."
    },
    {
      clause_id: "6",
      title: "Ücret",
      text: "Çalışana aylık brüt [tutar] TL ücret ödenir. Ücret her ayın son iş günü Çalışanın banka hesabına yatırılır.",
      label: "yesil",
      confidence: 0.97,
      legal_basis: "İş Kanunu m. 32",
      rationale: null
    },
    {
      clause_id: "7",
      title: "Yıllık Ücretli İzin",
      text: "Çalışan, hak kazandığı yıllık ücretli izinlerini kullanmayıp her yıl sonunda karşılığını ücret olarak almayı şimdiden kabul eder.",
      label: "kirmizi",
      confidence: 0.93,
      legal_basis: "İş Kanunu m. 53, m. 59",
      rationale: "Yıllık ücretli izin hakkından vazgeçilemez. Kullanılmayan izinlerin ücreti ancak iş sözleşmesi sona erdiğinde ödenebilir; sözleşme devam ederken izni ücrete çevirme kaydı geçersizdir."
    },
    {
      clause_id: "8",
      title: "Fikri Mülkiyet",
      text: "Çalışanın sözleşme süresince, çalışma saatleri içinde veya dışında, İşveren'in imkânlarını kullansın ya da kullanmasın geliştirdiği her türlü yazılım, kod ve eser üzerindeki tüm haklar İşveren'e aittir.",
      label: "sari",
      confidence: 0.78,
      legal_basis: "FSEK m. 18/2",
      rationale: "Kanun, çalışanın görevini yerine getirirken meydana getirdiği eserler üzerindeki hakları işverene tanır. Çalışma saatleri dışında ve işle ilgisi olmadan geliştirilen kişisel projeleri de kapsayan bu geniş kayıt çalışan aleyhinedir ve tartışmalıdır."
    },
    {
      clause_id: "9",
      title: "Gizlilik",
      text: "Çalışan, görevi sırasında öğrendiği İşveren'e ait ticari sırları, kaynak kodlarını ve müşteri bilgilerini sözleşme süresince ve sona ermesinden sonra üçüncü kişilerle paylaşmayacaktır.",
      label: "yesil",
      confidence: 0.92,
      legal_basis: "TBK m. 396",
      rationale: null
    },
    {
      clause_id: "10",
      title: "Rekabet Yasağı",
      text: "Çalışan, sözleşmenin herhangi bir nedenle sona ermesinden itibaren 5 (beş) yıl süreyle Türkiye'de ve yurt dışında yazılım sektöründe faaliyet gösteren hiçbir şirkette çalışmayacağını kabul eder.",
      label: "kirmizi",
      confidence: 0.89,
      legal_basis: "TBK m. 444, m. 445",
      rationale: "Rekabet yasağı yer, zaman ve iş türü bakımından çalışanın ekonomik geleceğini hakkaniyete aykırı biçimde tehlikeye sokmayacak şekilde sınırlanmalıdır ve özel durumlar dışında iki yılı aşamaz. Beş yıllık, tüm sektörü ve tüm dünyayı kapsayan yasak bu sınırları aşmaktadır."
    },
    {
      clause_id: "11",
      title: "Cezai Şart",
      text: "Çalışan, sözleşme süresi dolmadan işten ayrılması halinde İşveren'e 6 (altı) aylık brüt ücreti tutarında cezai şart ödemeyi kabul eder.",
      label: "kirmizi",
      confidence: 0.92,
      legal_basis: "TBK m. 420",
      rationale: "Hizmet sözleşmelerinde yalnızca işçi aleyhine öngörülen ceza koşulu geçersizdir. Maddede işveren için karşılıklı bir cezai şart bulunmamaktadır."
    },
    {
      clause_id: "12",
      title: "Ücret Kesintisi",
      text: "Çalışanın işe geç kaldığı her gün için bir günlük ücreti kesilir.",
      label: "sari",
      confidence: 0.81,
      legal_basis: "İş Kanunu m. 38",
      rationale: "Ücret kesme cezası sözleşmede gösterilen sebeplerle verilebilir; ancak bir ayda iki gündelikten fazla olamaz. Sınırsız günlük kesinti öngören bu kayıt kanuni sınırla çelişebilir."
    },
    {
      clause_id: "13",
      title: "Sözleşmenin Feshi",
      text: "İşveren, sözleşmeyi herhangi bir bildirim süresine uymaksızın her zaman feshedebilir. Çalışan ise sözleşmeyi feshetmeden 3 (üç) ay önce İşveren'e yazılı bildirimde bulunmak zorundadır.",
      label: "kirmizi",
      confidence: 0.9,
      legal_basis: "İş Kanunu m. 17",
      rationale: "Kanundaki bildirim süreleri asgari sürelerdir ve sözleşmeyle çalışan aleyhine kısaltılamaz. İşverene bildirimsiz fesih hakkı tanıyan bu kayıt geçersizdir."
    },
    {
      clause_id: "14",
      title: "Uyuşmazlıkların Çözümü",
      text: "İşbu sözleşmeden doğan uyuşmazlıklarda İstanbul (Anadolu) İş Mahkemeleri yetkilidir.",
      label: "yesil",
      confidence: 0.95,
      legal_basis: null,
      rationale: null
    }
  ]
};
