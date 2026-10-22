const SPOT_DATA = {
    theme: "history",
    title: "Ankara Gezi Rehberi",
    subtitle: "Cumhuriyetin Kalbi, Tarih ve Kültür Başkenti",
    category: "Tarih & Kültür",
    hero: {
        badge: "Türkiye'nin Başkenti",
        coverImage: "https://images.unsplash.com/photo-1589030343991-69ea1433b941?auto=format&fit=crop&w=1600&q=80&fm=webp",
        stats: [
            { label: "Ziyaretçi", value: "Yıllık 1M+" },
            { label: "İdeal Süre", value: "2-3 Gün" },
            { label: "Puan", value: "4.9 / 5" },
            { label: "Bölge", value: "İç Anadolu" }
        ]
    },
    venueSummary: {
        badgeTitle: "BAŞKENT GEZİSİ",
        typeTitle: "Ankara Ziyaret Rehberi",
        description: "Anıtkabir'den Kaleiçi'ne, Anadolu Medeniyetleri Müzesi'nden Kuğulu Park'a uzanan büyüleyici başkent rotası.",
        details: [{"label": "Bölge", "value": "İç Anadolu"}, {"label": "Öne Çıkan", "value": "Anıtkabir & Kale"}, {"label": "İdeal Süre", "value": "2-3 Gün"}]
    },
    overview: {
        title: "Ankara Gezi Rehberi Genel Bakış",
        paragraphs: ["Ankara, Türkiye'nin başkenti olmanın ötesinde, binlerce yıllık Anadolu tarihini modern bir kent kültürüyle harmanlayan eşsiz bir destinasyondur.", "Mustafa Kemal Atatürk'ün ebedi istirahatgahı Anıtkabir başta olmak üzere, tarihi Ankara Kalesi ve dünyanın en saygın müzelerinden Anadolu Medeniyetleri Müzesi şehirde mutlaka görülmesi gereken yerlerin başında gelir."],
        visitorNotes: [{"label": "En İyi Zaman", "value": "İlkbahar & Sonbahar"}, {"label": "Girişler", "value": "Anıtkabir Ücretsiz / MüzeKart Geçerli"}, {"label": "MüzeSaatleri", "value": "09:00 - 17:00"}]
    },
    
    whyVisit: {
        title: "Ankara Keşif Rotaları",
        subtitle: "Şehrin en gözde mekanlarını tematik kategorilere göre keşfedin",
        cards: [
            {
                icon: "fa-solid fa-landmark",
                title: "Tarihi Yerler",
                description: "Yüzyıllık anıtlar, kaleler, müzeler ve köklü medeniyet izleri.",
                linkText: "Tarihi Keşfet",
                url: "#must-see-items"
            },
            {
                icon: "fa-solid fa-city",
                title: "Modern Yerler",
                description: "Şehrin en popüler meydanları, alışveriş merkezleri ve plazas.",
                linkText: "Moderni İncele",
                url: "#must-see-items"
            },
            {
                icon: "fa-solid fa-gem",
                title: "Sofistike Yerler",
                description: "Seçkin kafeler, sanat galerileri ve nezih buluşma noktaları.",
                linkText: "Sofistike Noktalar",
                url: "#where-to-stay-title"
            },
            {
                icon: "fa-solid fa-tree",
                title: "Doğal Güzellikler",
                description: "Parklar, sahil şeritleri, kanyonlar ve nefis manzara noktaları.",
                linkText: "Doğayı Gör",
                url: "#transport-title"
            }
        ]
    },
     {"icon": "fa-solid fa-landmark-dome", "title": "Anadolu Medeniyetleri", "description": "Paleolitik çağdan günümüze Anadolu tarihine ışık tutan dünyaca ünlü müze."}, {"icon": "fa-solid fa-castle", "title": "Tarihi Ankara Kalesi", "description": "Şehrin panoramik manzarasını sunan, surları ve tarihi evleriyle büyüleyen kale bölgesi."}]},
    mustSee: {
        title: "Görülmesi Gereken Öne Çıkan Noktalar",
        items: [{"category": "Milli Miras", "title": "Anıtkabir", "description": "Türkiye Cumhuriyeti'nin simge yapısı ve Müze kompleksi."}, {"category": "Tarih", "title": "Ankara Kalesi", "description": "Eski Ankara sokakları ve nostaljik kafelere ev sahipliği yapar."}, {"category": "Müze", "title": "I. & II. TBMM Binası", "description": "Cumhuriyetin kuruluş adımlarına tanıklık eden tarihi meclis binaları."}, {"category": "Doğa", "title": "Kuğulu Park", "description": "Görkemli kuğuları ve asırlık ağaçlarıyla şehrin dinlenme noktası."}]
    },
    transportation: {"title": "Ankara'ya Ulaşım Şekilleri", "tip": "Ankarakart kullanarak metro, Ankaray ve otobüs hatlarını kolayca kullanabilirsiniz.", "mapUrl": "https://maps.google.com/?q=Ankara+Turkey", "methods": [{"icon": "fa-solid fa-plane", "title": "Havalimanı", "detail": "Esenboğa Havalimanı'ndan HAVAŞ ve 442 otobüsleri ile merkeze ulaşabilirsiniz."}, {"icon": "fa-solid fa-train", "title": "Yüksek Hızlı Tren", "detail": "Ankara YHT Garı şehir merkezinde yer almaktadır."}, {"icon": "fa-solid fa-bus", "title": "AŞTİ Otogar", "detail": "AŞTİ'den Ankaray hattı ile Kızılay'a doğrudan geçiş imkanı vardır."}]},
    whereToStay: {
        title: "Konaklama Önerileri",
        hotels: [{"badge": "Merkezi", "name": "JW Marriott Ankara", "distance": "Söğütözü - Merkeze 3 km", "link": "https://www.google.com/travel/hotels"}, {"badge": "Butik", "name": "Divan Cukurhan", "distance": "Ankara Kalesi Yanı", "link": "https://www.google.com/travel/hotels"}]
    },
    whereToEat: {
        title: "Nerede Ne Yenir?",
        restaurants: [{"badge": "Tarihi Lezzet", "name": "Boğaziçi Lokantası", "detail": "Geleneksel Ankara ve Osmanlı Ev Yemekleri", "rating": "4.7"}, {"badge": "Döner", "name": "Cebeci Düveroğlu", "detail": "Meşhur Ankara Döneri ve Kebap", "rating": "4.8"}]
    }
};