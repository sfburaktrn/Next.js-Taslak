export type ServiceProvider = {
    name: string;
    address?: string;
    phones?: string[];
};

export type ServiceLocation = {
    city: string;
    lat: number;
    lon: number;
    providers: ServiceProvider[];
};

export const serviceLocations: ServiceLocation[] = [
    {
        city: "Adana",
        lat: 37.0,
        lon: 35.32,
        providers: [
            {
                name: "Özen İlave Dingil",
                address: "Yeni San. Sit. 20. Blok No:13",
                phones: ["0322 428 15 57"],
            },
            {
                name: "İkikardeş Otomotiv",
                address: "T. Cemal Beriker Bulv. Zeytinli Mah. No:635/A Seyhan",
                phones: ["0322 441 01 19", "0507 463 86 88"],
            },
        ],
    },
    {
        city: "Adıyaman",
        lat: 37.76,
        lon: 38.28,
        providers: [
            {
                name: "Küçük Kurtuluş Damper",
                address: "Sanayi Sit. 11. Blok No:6",
                phones: ["0535 354 42 50"],
            },
        ],
    },
    {
        city: "Afyonkarahisar",
        lat: 38.76,
        lon: 30.54,
        providers: [
            {
                name: "Tanış Dizel",
                address: "2. Küçük Sanayi Sitesi 14. Ada 4. Blok No:5",
                phones: ["0532 371 71 47"],
            },
        ],
    },
    {
        city: "Aksaray",
        lat: 38.37,
        lon: 34.03,
        providers: [
            {
                name: "Ak-Dor-San Oto",
                address: "Sanayi Mah. 2035 Sok. No:14",
                phones: ["0382 215 53 63"],
            },
            {
                name: "Sevindiler Tic",
                address: "Sanayi Mah.",
                phones: ["0543 369 28 28"],
            },
        ],
    },
    {
        city: "Ankara",
        lat: 39.93,
        lon: 32.86,
        providers: [
            {
                name: "Özde Hidrolik",
                address: "Ostim San. Sit.",
                phones: ["0545 693 69 33"],
            },
            {
                name: "Oto Üçler Fren Servisi",
                address: "E-90 Karayolu Üzeri Yeni San. Sit. Yanı Şereflikoçhisar",
                phones: ["0312 686 42 85"],
            },
            {
                name: "Başkent Balata",
                address: "Ostim San. Sit. 216. Sokak No:28",
                phones: ["0312 354 52 65"],
            },
        ],
    },
    {
        city: "Antalya",
        lat: 36.89,
        lon: 30.7,
        providers: [
            {
                name: "Manavgat Uysal Torna",
                address: "Manavgat",
                phones: ["0242 746 23 66"],
            },
            {
                name: "Yıldız Şase",
                address: "Sanayi Sit. Endüstri Meslek Lisesi Karşısı Alanya",
                phones: ["0242 515 13 72"],
            },
            {
                name: "Hayrettin Özer (Yeşil Antalya)",
                address: "San. Sit. 3189/7 Sok. No:5",
                phones: ["0242 221 08 21"],
            },
        ],
    },
    {
        city: "Aydın",
        lat: 37.85,
        lon: 27.84,
        providers: [
            {
                name: "Ersoy Damper",
                address: "Astim OSB 5. Cad. No:19",
                phones: ["0256 211 61 07"],
            },
            {
                name: "Altınel Torna",
                address: "Yeni San. Sit. Cumhuriyet Cad. No:261-A",
                phones: ["0532 205 47 81"],
            },
        ],
    },
    {
        city: "Balıkesir",
        lat: 39.65,
        lon: 27.88,
        providers: [
            {
                name: "Bandırma Hidrolik",
                address: "San. Sit. 1310 Sok. No:50 Bandırma",
                phones: ["0542 204 48 84"],
            },
        ],
    },
    {
        city: "Batman",
        lat: 37.88,
        lon: 41.14,
        providers: [
            {
                name: "Özbulut Damper",
                address: "Yeni San. Sit. B Blok No:6/2",
            },
        ],
    },
    {
        city: "Bilecik / Bozüyük",
        lat: 40.15,
        lon: 29.98,
        providers: [
            {
                name: "Yaşar Usta (Yaşar Altıntaş)",
                address: "San. Sit. 1. Blok No:1/2 Söğüt",
                phones: ["0536 463 53 77"],
            },
            {
                name: "Bozüyük Tic",
                address: "Bozüyük San. Sitesi",
                phones: ["0536 293 59 23"],
            },
        ],
    },
    {
        city: "Bingöl",
        lat: 38.88,
        lon: 40.5,
        providers: [
            {
                name: "Eren Oto Makas",
                address: "Kaleönü Mah. Sanayi Cad.",
                phones: ["0545 436 11 12"],
            },
        ],
    },
    {
        city: "Bitlis",
        lat: 38.4,
        lon: 42.1,
        providers: [
            {
                name: "Üç Kardeşler",
                address: "Yeni San. Sit. G1 Blok No:19 Tatvan",
                phones: ["0532 527 55 62"],
            },
        ],
    },
    {
        city: "Bolu",
        lat: 40.73,
        lon: 31.61,
        providers: [
            {
                name: "Acar Makina",
                phones: ["0536 891 93 90"],
            },
        ],
    },
    {
        city: "Burdur",
        lat: 37.72,
        lon: 30.29,
        providers: [
            {
                name: "Palalı Hidrolik",
                address: "K. San. Sit. 5. Sok. No:39",
                phones: ["0248 252 84 37"],
            },
        ],
    },
    {
        city: "Bursa",
        lat: 40.18,
        lon: 29.06,
        providers: [
            {
                name: "Aydemir Oto Fren",
                phones: ["0224 441 13 28"],
            },
            {
                name: "Atılım Oto Fren",
                address: "Beşevler Küçük San. Sit. 6. Blok No:22",
                phones: ["0224 443 13 88"],
            },
            {
                name: "Yaşar Damper",
                address: "Sinan Bey Mah. 40. Sok. No:1 İnegöl",
                phones: ["0224 714 80 34"],
            },
        ],
    },
    {
        city: "Çorum",
        lat: 40.55,
        lon: 34.96,
        providers: [
            {
                name: "Kuşçuoğlu Damper",
                address: "Ankara Asfaltı 5. Km",
                phones: ["0364 235 03 25"],
            },
            {
                name: "Çağsan Treyler Servis",
                address: "Ankara Yolu 5. Km ve K.San.Sit. 10. Cad No:13",
                phones: ["0364 235 00 78"],
            },
        ],
    },
    {
        city: "Denizli",
        lat: 37.77,
        lon: 29.08,
        providers: [
            {
                name: "Akın Damper",
                address: "3. San. Sit. 54. Sok. No:75",
                phones: ["0258 251 66 39"],
            },
            {
                name: "Uzmanlar Otomotiv",
                address: "İzmir Karayolu Üzeri 15. Km Sarayköy",
                phones: ["0258 421 60 88"],
            },
        ],
    },
    {
        city: "Diyarbakır",
        lat: 37.92,
        lon: 40.21,
        providers: [
            {
                name: "Diyar Damper",
                address: "Sanayi Sitesi F-2 Blok No:9",
                phones: ["0532 405 73 57"],
            },
            {
                name: "Tursan Damper",
                address: "2. San. Sit. B-1 Blok No:10",
                phones: ["0412 255 03 83"],
            },
            {
                name: "Furcan Dingil",
                phones: ["0412 226 01 30"],
            },
        ],
    },
    {
        city: "Edirne",
        lat: 41.67,
        lon: 26.56,
        providers: [
            {
                name: "Trakya Fren",
                address: "Eski Sanayi Sit. 5. Blok No:3",
                phones: ["0542 810 20 10"],
            },
            {
                name: "Trakya Damper",
                address: "Keşan Sanayi Sit. 26. Blok No:10",
                phones: ["0533 718 37 00"],
            },
        ],
    },
    {
        city: "Elazığ",
        lat: 38.68,
        lon: 39.22,
        providers: [
            {
                name: "Sağlamış Makina",
                address: "Bingöl Yolu Akçakiraz Yol Ayrımı Karşısı",
                phones: ["0424 224 06 41"],
            },
        ],
    },
    {
        city: "Erzincan",
        lat: 39.75,
        lon: 39.49,
        providers: [
            {
                name: "Güçlü Hidrolik",
                address: "Sanayi Çarşısı 787. Sok. No:11",
                phones: ["0530 608 20 48"],
            },
        ],
    },
    {
        city: "Erzurum",
        lat: 39.9,
        lon: 41.27,
        providers: [
            {
                name: "Birlik Damper",
                address: "Yeni San. Sit. B/Blok No:64",
                phones: ["0442 242 79 33"],
            },
            {
                name: "Er Yıldırım Otomotiv",
                address: "Çevre Yolu Üzeri, Aziziye Otoban Sit. Yanı Yakutiye",
                phones: ["0442 242 77 72"],
            },
        ],
    },
    {
        city: "Eskişehir",
        lat: 39.78,
        lon: 30.52,
        providers: [
            {
                name: "Özünlü Uztaş Damper",
                address: "Sanayi Çarşısı Şener Sokak No:21",
                phones: ["0536 471 64 34"],
            },
            {
                name: "Fren Servisi San. Tic.",
                address: "Sanayi Çarşısı 1. Soğuk Demirciler Sok. No:14",
                phones: ["0222 237 22 95"],
            },
        ],
    },
    {
        city: "Gaziantep",
        lat: 37.07,
        lon: 37.38,
        providers: [
            {
                name: "Mehmet Bozkurt Oto",
                address: "Yeni Nizip Yolu Üzeri Dünyatır Garajı İçi No:1 Şehitkamil",
                phones: ["0342 241 41 44"],
            },
            {
                name: "Yükseliş Otomotiv",
                address: "Küsget San. Sit. Göllüce Cad. No:14 Şehitkamil",
                phones: ["0342 235 27 35"],
            },
        ],
    },
    {
        city: "Giresun",
        lat: 40.91,
        lon: 38.39,
        providers: [
            {
                name: "Öztürk Damper",
                address: "Merkez San. Sit. 17. Sok No:6",
                phones: ["0535 728 01 18"],
            },
        ],
    },
    {
        city: "Hatay",
        lat: 36.2,
        lon: 36.1,
        providers: [
            {
                name: "Yılmazlar Karoser",
                address: "Payas San. Sit. Ahi Evran Bulv. A Blok No:16 Payas",
            },
            {
                name: "Hidromir Hidrolik",
                address: "Yeni San. Sit. 4. İniş 8. Cad. No:22 Antakya",
                phones: ["0532 414 02 81"],
            },
            {
                name: "Dablan Otomotiv",
                address: "Yeni San. Sit. 45/C Blok No:10 Antakya",
                phones: ["0532 241 49 42"],
            },
            {
                name: "S.A.M. Otomotiv",
                address: "Narlıca Çevre Yolu ve İskenderun Yolu Üzeri",
                phones: ["0326 221 20 11"],
            },
        ],
    },
    {
        city: "Iğdır",
        lat: 39.92,
        lon: 44.04,
        providers: [
            {
                name: "Çeçenoğulları",
                address: "Sanayi Sitesi Yanı",
                phones: ["0476 210 14 44"],
            },
        ],
    },
    {
        city: "Isparta",
        lat: 37.76,
        lon: 30.55,
        providers: [
            {
                name: "Turan Damper",
                address: "Gül Sanayi Sit. H Ada 1. Blok No:3",
                phones: ["0532 782 61 60"],
            },
        ],
    },
    {
        city: "Mersin",
        lat: 36.8,
        lon: 34.6,
        providers: [
            {
                name: "Sena Damper",
                address: "Tırmıl San. Sit. C2 Blok No:43",
                phones: ["0535 868 63 06"],
            },
            {
                name: "Uzkar Uzman Kardeşler",
                address: "Çilek Mah. 63128 Sok. No:6",
                phones: ["0324 234 57 82"],
            },
            {
                name: "Aslan Fren Servisi",
                address: "Tırmıl San. Sit. Karşısı",
                phones: ["0324 234 34 27"],
            },
        ],
    },
    {
        city: "İstanbul",
        lat: 41.01,
        lon: 28.97,
        providers: [
            {
                name: "Özcan Hidrolik (Avrupa)",
                address: "Eski Edirne Asfaltı Pirinççi Köyü No:84 Habipler",
                phones: ["0212 595 06 82"],
            },
            {
                name: "Frenmarket (Avrupa)",
                address: "İkitelli OSB Esenler San. Sit. 10. Blok No:11-12",
                phones: ["0212 671 25 25"],
            },
            {
                name: "Hidrosin Damper (Anadolu)",
                address: "Koçullu Köyü Girişi Ömerli Ümraniye",
                phones: ["0532 351 95 11"],
            },
            {
                name: "Karadeniz Oto (Anadolu)",
                address: "Yedpa Ticaret Merkezi Cadde A No:59 Ataşehir",
                phones: ["0216 471 13 60"],
            },
            {
                name: "Çağlar Otomotiv (Anadolu)",
                address: "Kadosan San. Sit. F Blok No:9-11 Dudullu",
                phones: ["0216 634 20 77"],
            },
        ],
    },
    {
        city: "İzmir",
        lat: 38.42,
        lon: 27.14,
        providers: [
            {
                name: "Özenir Makina",
                address: "4. San. Sit. 129/15 Sok. No:15 Bornova",
                phones: ["0541 640 94 15"],
            },
            {
                name: "Başaran Fren",
                address: "5. San. Sit. 7419 Sok. No:22 Pınarbaşı",
                phones: ["0232 479 04 00"],
            },
            {
                name: "Oto Yılmaz",
                address: "San. Sit. 3A Blok No:23-24",
                phones: ["0532 375 70 56"],
            },
        ],
    },
    {
        city: "Kahramanmaraş",
        lat: 37.58,
        lon: 36.93,
        providers: [
            {
                name: "Yerli Otomotiv",
                address: "Yeni San. Sit. 5. Cad. No:28",
                phones: ["0532 744 04 64"],
            },
            {
                name: "Ermezler Grup",
                address: "Yeni San. Sit. 20/A Blok No:1 Elbistan",
                phones: ["0344 412 06 33"],
            },
        ],
    },
    {
        city: "Kırıkkale",
        lat: 39.85,
        lon: 33.52,
        providers: [
            {
                name: "Koyuncuoğulları Hidrolik",
                address: "Yahşihan San. Sit. D4 Blok No:12",
                phones: ["0536 299 24 35"],
            },
        ],
    },
    {
        city: "Kocaeli",
        lat: 40.76,
        lon: 29.94,
        providers: [
            {
                name: "Toklar Makina",
                address: "Hasköy Döküm San. 10. Blok No:7 Gebze",
                phones: ["0262 643 52 27"],
            },
            {
                name: "Ender Otomotiv",
                address: "Yeni Sanayi Sitesi 307. Blok No:29 İzmit",
                phones: ["0262 335 07 50"],
            },
        ],
    },
    {
        city: "Konya",
        lat: 37.87,
        lon: 32.48,
        providers: [
            {
                name: "Selçuklu Fren",
                address: "Topkapı San. Sit. Kurtbey Sok. No:54 Selçuklu",
                phones: ["0332 239 00 00"],
            },
        ],
    },
    {
        city: "Kütahya",
        lat: 39.42,
        lon: 29.99,
        providers: [
            {
                name: "Ankara Damper",
                phones: ["0532 274 28 58"],
            },
            {
                name: "Özsan Torna",
                address: "Yeni San. Selçuklu Cad. No:5A Tavşanlı",
                phones: ["0543 979 72 17"],
            },
        ],
    },
    {
        city: "Manisa",
        lat: 38.63,
        lon: 27.43,
        providers: [
            {
                name: "Yalçın Çal Tic",
                address: "San. Sit. Reyhan Sok. No:3/C Soma",
                phones: ["0236 612 76 03"],
            },
        ],
    },
    {
        city: "Mardin",
        lat: 37.32,
        lon: 40.74,
        providers: [
            {
                name: "Kayasan Torna",
                phones: ["0532 704 91 68"],
            },
            {
                name: "Çiftçi Otomotiv",
                address: "Nusaybin Yolu Üzeri Kızıltepe",
                phones: ["0482 312 44 97"],
            },
        ],
    },
    {
        city: "Muğla",
        lat: 37.21,
        lon: 28.36,
        providers: [
            {
                name: "Aslan Oto Makas",
                address: "San. Sit. 4/G-5 Yatağan",
                phones: ["0252 572 21 25"],
            },
            {
                name: "Hidrohas",
                address: "Sanayi Sitesi Milas",
                phones: ["0252 513 29 51"],
            },
        ],
    },
    {
        city: "Osmaniye",
        lat: 37.07,
        lon: 36.24,
        providers: [
            {
                name: "Güvensan Tic",
                phones: ["0532 687 55 69"],
            },
            {
                name: "Kayalar Oto Fren",
                address: "Ek San. Sit. J-2 Blok No:3",
                phones: ["0328 826 13 45"],
            },
            {
                name: "Ekrem Çifci Oto Fren",
                address: "Ek San. Sit. C-1 Blok No:5",
                phones: ["0328 826 13 45"],
            },
        ],
    },
    {
        city: "Sakarya",
        lat: 40.77,
        lon: 30.4,
        providers: [
            {
                name: "Ertürk Otomotiv",
                address: "E-5 Karayolu Üzeri Erenler/Adapazarı",
                phones: ["0264 353 54 15"],
            },
        ],
    },
    {
        city: "Samsun",
        lat: 41.28,
        lon: 36.34,
        providers: [
            {
                name: "Güven Damper",
                address: "Eski San. Sit. 15. Sok. No:3",
                phones: ["0362 228 52 36"],
            },
            {
                name: "Öz Kardeşler",
                phones: ["0362 266 44 08"],
            },
        ],
    },
    {
        city: "Siirt",
        lat: 37.93,
        lon: 41.94,
        providers: [
            {
                name: "Oto Alp",
                address: "Küçük Sanayi Sitesi 3. Blok No:3",
            },
        ],
    },
    {
        city: "Sivas",
        lat: 39.75,
        lon: 37.01,
        providers: [
            {
                name: "Göztepe Hidrolik",
                address: "4 Eylül San. Sit. 32/A Blok No:21",
                phones: ["0346 226 33 49"],
            },
        ],
    },
    {
        city: "Tekirdağ",
        lat: 40.98,
        lon: 27.51,
        providers: [
            {
                name: "Akman Damper",
                address: "Çevreyolu Marmara Tır Parkı İçi No:8",
            },
        ],
    },
    {
        city: "Trabzon",
        lat: 41.0,
        lon: 39.72,
        providers: [
            {
                name: "Memaksan Memişoğlu",
                address: "Organize San. Böl. Arsin",
                phones: ["0462 325 23 26"],
            },
        ],
    },
    {
        city: "Uşak",
        lat: 38.68,
        lon: 29.41,
        providers: [
            {
                name: "Birol Uşak Torna",
                address: "Eylül San. Sit. 11. Sok No:18",
            },
        ],
    },
    {
        city: "Van",
        lat: 38.5,
        lon: 43.38,
        providers: [
            {
                name: "İkizler Oto Şase",
                address: "Yeni San. Sit. G Blok No:3",
                phones: ["0532 423 87 51"],
            },
        ],
    },
    {
        city: "Yozgat",
        lat: 39.82,
        lon: 34.81,
        providers: [
            {
                name: "Doğan Hidrolik",
                address: "Sorgun",
                phones: ["0533 487 67 24"],
            },
        ],
    },
    {
        city: "Zonguldak",
        lat: 41.45,
        lon: 31.79,
        providers: [
            {
                name: "Usta Tic",
                address: "Alaplı",
                phones: ["0533 243 46 95"],
            },
        ],
    },
];
