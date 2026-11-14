/* ===== SOZLAMALAR: mijozga qarab faqat shu yerni o'zgartiring ===== */
const CONFIG={
logo:"images/logo.jpg",
defaultLang:"uz",

/* Aloqa. Bo'sh qoldirilsa, o'sha joy saytda ko'rinmaydi */
phones:["+998 71 231 05 02","+998 95 170 05 02"],
email:"info@iroda-stom.uz",
/* Xarita: Google Maps havolasi (qisqa) va xaritada qidiriladigan joy (plus-kod) */
mapLink:"https://maps.app.goo.gl/nWGa9Gg4JaFTouBs5",
mapQuery:"979M+Q8V Tashkent",
instagram:"iroda_stom",
facebook:"https://www.facebook.com/irodastom/",
youtube:"https://www.youtube.com/channel/UCBU1ILlORgdIpI6f3yvW7sA",
website:"https://iroda-stom.uz/uz/",
/* "Xush kelibsiz" bo'limidagi klinika rasmlari (aylanma) */
aboutPhotos:Array.from({length:9},(_,i)=>"images/about"+String(i+1).padStart(2,"0")+".webp"),
/* Sertifikat rasmlari */
certs:[1,2,3,4,5,6].map(i=>"images/cert"+i+".webp"),
/* Yangilik rasmlari (aylanma) */
newsPhotos:Array.from({length:12},(_,i)=>"images/news"+String(i+1).padStart(2,"0")+".webp"),
telegram:"",                     /* TODO: Telegram username, @ siz */
whatsapp:"",                     /* TODO: raqam, masalan 998951700502 */

/* Onlayn yozilish (Blaze Dental). mode: "iframe" = sayt ichida oyna, "tab" = yangi oynada */
bookingUrl:"https://iroda.blaze-dental.uz",
bookingMode:"iframe",

/* ===== MATNLAR: har bir til alohida (uz / ru) ===== */
lang:{
uz:{
 brand:"Iroda oilaviy stomatologiyasi",short:"Iroda",
 title:"Iroda oilaviy stomatologiyasi — Toshkent",
 aboutT:"Xush kelibsiz!",
 aboutP1:"«Iroda» stomatologiya klinikasi tomonidan taqdim etiladigan muolajalar har doim sizning xizmatingizda! Sizga ma’qul bo‘ladigan narxlarda siz samarali davolanish va eng qisqa vaqt ichida sog‘ligingizni tiklash uchun barcha sharoitlarga ega bo‘lasiz.",
 aboutP2:"Bizning sohada yuqori tajribaga ega bo‘lgan malakali shifokorlar tish va milklar uchun eng yaxshi zamonaviy davolashni amalga oshiradilar. Kafolatli oqartirish, tiklash, tishlarni tuzatish, joylashtirish, tish protezlari va yana ko‘pgina xizmatlar.",
 heroBadge:"Har kuni 09:00–00:00",
 heroTitle:"Butun oilangiz tabassumi uchun",
 heroText:"Tajribali shifokorlar, zamonaviy davolash va ma’qul narxlar. Qabulga saytning o‘zida yozilib, vaqtingizni tejang.",
 menu:[["Xizmatlar","#services"],["Shifokorlar","#doctors"],["Yangiliklar","#news"],["Sertifikatlar","#certs"],["Aloqa","#contact"]],
 address:"Toshkent, Yunusobod tumani",
 news:[{t:"«IRODA» oilaviy stomatologiya klinikasining tantanali ochilish marosimidan suratlar",date:"26.11.2018"}],
 ui:{book:"Onlayn qabulga yozilish",services:"Xizmatlar",doctors:"Mutaxassislar",contact:"Aloqa",more:"Batafsil",back:"← Xizmatlar",
  who:"Kimga kerak:",incl:"Nimalar kiradi",price:"Narxni shifokor ko‘rikdan keyin aytadi yoki qo‘ng‘iroq qilib so‘rang.",
  bookSvc:"Shu xizmatga yozilish",call:"Qo‘ng‘iroq qilish",signup:"Yozilish",sheetOpen:"Oyna ochilmasa, yangi oynada oching",close:"Yopish",
  map:"Klinika manzili xaritada",phone:"Telefon",addr:"Manzil",news:"Yangiliklar",certs:"Bizning sertifikatlarimiz",findUs:"Bizni xaritadan toping",openMap:"Xaritada ochish",hours:"Ish vaqti",site:"Sayt",follow:"Ijtimoiy tarmoqlar",zoom:"Kattalashtirish",rights:"Barcha huquqlar himoyalangan.",docsAria:"Shifokorlar",docsPick:"Shifokorlarni tanlash",sheetAria:"Onlayn qabulga yozilish",langAria:"Til"},
 services:[
 {k:"tashxis",t:"Tishlarning tashxisi",d:"Stomatologik maslahat va diagnostika",img:"images/s1.webp",items:["Shifokor ko‘rigi","Rentgen va diagnostika","Davolash rejasi"],
  intro:"Shifokor siz bilan suhbatlashadi, tish va milk holatini ko‘radi, muammoning sababini aniqlaydi va avvalgi tekshiruv natijalari bilan tanishadi. Shundan keyin davolash rejasini tushuntiradi.",
  who:"Tish parvarishini nimadan boshlashni bilmaganlar va og‘riq bo‘lmasa ham ko‘rikdan o‘tmoqchi bo‘lganlar uchun."},
 {k:"qayta-tiklash",t:"Tishlarni qayta tiklash",d:"Plomba bilan shakl va rangni tiklash",img:"images/s2.webp",items:["Estetik plombalash","Tish shaklini tiklash","Rangini moslashtirish"],
  intro:"Turli plomba materiallari yordamida tishning shakli va rangi tiklanadi yoki o‘zgartiriladi. Maqsad — tishning tabiiy va chiroyli ko‘rinishiga erishish.",
  who:"Tishi sinib ketgan, teshik paydo bo‘lgan yoki tabassumining ko‘rinishidan norozi bo‘lganlar uchun."},
 {k:"protez",t:"Protez tishlar",d:"Yo‘qolgan tishlarni tiklash",img:"images/s3.webp",items:["Koronkalar","Yechiladigan protezlar","Tishni individual tayyorlash"],
  intro:"Tishning anatomik shakli tiklanadi yoki yo‘qolgan tish o‘rniga yangisi tayyorlanadi. Protez zubotexnik laboratoriyasida ishlanib, shifokor tomonidan o‘rnatiladi.",
  who:"Tishi sinib ketgan, qisman yoki butunlay yo‘qolgan odamlar uchun."},
 {k:"oqartirish",t:"Tishlarni oqartirish",d:"Tish emali rangini yengillashtirish",img:"images/s4.webp",items:["Ko‘rik","Professional oqartirish","Parvarish bo‘yicha tavsiyalar"],
  intro:"Tish emali soyasini yengillashtirishning stomatologik usuli. Boshlashdan oldin shifokor tishlar holatini ko‘rib chiqadi va mos usulni tanlaydi.",
  who:"Tishlari rangi sarg‘ayganidan yoki xira tortganidan noroziligi bor odamlar uchun."},
 {k:"jarrohlik",t:"Jarrohlik stomatologiyasi",d:"Tish olish va operatsiyalar",img:"images/s5.webp",items:["Tish olish","Implantatsiya","Milk operatsiyalari"],
  intro:"Tishni saqlab bo‘lmaydigan hollarda jarrohlik yordami: tish olish, yo‘qolgan tish o‘rniga implant qo‘yish, milk va tish atrofi to‘qimalaridagi operatsiyalar.",
  who:"Tishi saqlab bo‘lmaydigan darajada shikastlangan yoki yo‘qolgan, milk bilan muammosi bor odamlar uchun."},
 {k:"ortodontiya",t:"Ortodontiya",d:"Tishlov va tishlar joylashuvini to‘g‘rilash",img:"images/s6.webp",items:["Ko‘rik va tashxis","Breketlar","Nazorat tashriflari"],
  intro:"Tishlov va tishlar joylashuvidagi nuqsonlarni aniqlash, oldini olish va davolash. Usulni shifokor ko‘rikdan keyin tavsiya qiladi.",
  who:"Tishlari gavjum yoki noto‘g‘ri joylashgan, tishlovi noto‘g‘ri bo‘lgan kattalar va bolalar uchun."},
 {k:"bolalar",t:"Bolalar stomatologiyasi",d:"Eng kichik bemorlar uchun yumshoq yondashuv",img:"images/s7.webp",items:["Bolalar ko‘rigi","Sut tishlarni davolash","Og‘riqsiz davolash"],
  intro:"Bolaning sog‘lig‘i tishlar sog‘lig‘i bilan bog‘liq. Bolalarni sterillik va og‘riqsizlik tamoyilida, qulay muhitda qabul qilamiz. Sut va doimiy tishlar kasalliklari ham davolanadi.",
  who:"Tishi og‘riyotgan yoki ko‘rikdan o‘tishi kerak bo‘lgan bolalar va ularning ota-onalari uchun."}
 ],
 doctors:[
 {n:"Abdukadirov Javohir",r:"Umumiy stomatolog",e:"",img:"",b:"Yo‘nalish: umumiy stomatologiya, terapevtik davolash."},
 {n:"Abdukadirova Ziyoda",r:"Umumiy stomatolog",e:"",img:"",b:"Yo‘nalish: umumiy stomatologiya, terapevtik davolash."},
 {n:"Babayev Sanjar",r:"Umumiy stomatolog",e:"",img:"",b:"Yo‘nalish: umumiy stomatologiya, terapevtik davolash."},
 {n:"Botirov Iskandar",r:"Umumiy stomatolog",e:"",img:"",b:"Yo‘nalish: umumiy stomatologiya, terapevtik davolash."}
 ]
},
ru:{
 brand:"Семейная стоматология «Ирода»",short:"Ирода",
 title:"Семейная стоматология «Ирода» — Ташкент",
 aboutT:"Добро пожаловать!",
 aboutP1:"Услуги стоматологической клиники «Ирода» всегда к вашим услугам! По доступным ценам вы получите эффективное лечение и все условия, чтобы как можно скорее восстановить здоровье.",
 aboutP2:"Наши опытные квалифицированные врачи проводят лучшее современное лечение зубов и дёсен: гарантированное отбеливание, реставрация, исправление и установка зубов, протезирование и многое другое.",
 heroBadge:"Ежедневно 09:00–00:00",
 heroTitle:"Для улыбки всей вашей семьи",
 heroText:"Опытные врачи, современное лечение и доступные цены. Записывайтесь на приём прямо на сайте и экономьте время.",
 menu:[["Услуги","#services"],["Врачи","#doctors"],["Новости","#news"],["Сертификаты","#certs"],["Контакты","#contact"]],
 address:"Ташкент, Юнусабадский район",
 news:[{t:"Фото с торжественного открытия семейной стоматологической клиники «IRODA»",date:"26.11.2018"}],
 ui:{book:"Записаться онлайн",services:"Услуги",doctors:"Специалисты",contact:"Контакты",more:"Подробнее",back:"← Услуги",
  who:"Кому подойдёт:",incl:"Что входит",price:"Стоимость врач назовёт после осмотра, или уточните по телефону.",
  bookSvc:"Записаться на эту услугу",call:"Позвонить",signup:"Записаться",sheetOpen:"Если окно не открылось, откройте в новой вкладке",close:"Закрыть",
  map:"Адрес клиники на карте",phone:"Телефон",addr:"Адрес",news:"Новости",certs:"Наши сертификаты",findUs:"Найдите нас на карте",openMap:"Открыть на карте",hours:"Режим работы",site:"Сайт",follow:"Мы в соцсетях",zoom:"Увеличить",rights:"Все права защищены.",docsAria:"Врачи",docsPick:"Выбор врача",sheetAria:"Онлайн-запись на приём",langAria:"Язык"},
 services:[
 {k:"tashxis",t:"Диагностика зубов",d:"Консультация стоматолога и диагностика",img:"images/s1.webp",items:["Осмотр врача","Рентген и диагностика","План лечения"],
  intro:"Врач побеседует с вами, осмотрит зубы и дёсны, выяснит причину проблемы и ознакомится с результатами прошлых обследований. После этого объяснит план лечения.",
  who:"Тем, кто не знает, с чего начать уход за зубами, и тем, кто хочет пройти осмотр, даже если ничего не болит."},
 {k:"qayta-tiklash",t:"Реставрация зубов",d:"Восстановление формы и цвета пломбой",img:"images/s2.webp",items:["Эстетическая пломба","Восстановление формы зуба","Подбор цвета"],
  intro:"С помощью различных пломбировочных материалов восстанавливают или меняют форму и цвет зуба. Цель — добиться естественного и красивого вида зуба.",
  who:"Тем, у кого зуб скололся, появилась полость или не нравится внешний вид улыбки."},
 {k:"protez",t:"Протезирование зубов",d:"Восстановление утраченных зубов",img:"images/s3.webp",items:["Коронки","Съёмные протезы","Индивидуальное изготовление зуба"],
  intro:"Восстанавливается анатомическая форма зуба или изготавливается новый зуб взамен утраченного. Протез делают в зуботехнической лаборатории, а устанавливает врач.",
  who:"Тем, у кого зуб разрушился, а также при частичной или полной потере зубов."},
 {k:"oqartirish",t:"Отбеливание зубов",d:"Осветление оттенка эмали",img:"images/s4.webp",items:["Осмотр","Профессиональное отбеливание","Рекомендации по уходу"],
  intro:"Стоматологический способ осветлить оттенок зубной эмали. Перед началом врач осматривает зубы и подбирает подходящий метод.",
  who:"Тем, кому не нравится, что зубы пожелтели или потускнели."},
 {k:"jarrohlik",t:"Хирургическая стоматология",d:"Удаление зубов и операции",img:"images/s5.webp",items:["Удаление зуба","Имплантация","Операции на дёснах"],
  intro:"Хирургическая помощь, когда зуб нельзя сохранить: удаление, установка импланта на место утраченного зуба, операции на дёснах и тканях вокруг зуба.",
  who:"Тем, чей зуб разрушен или утрачен, а также при проблемах с дёснами."},
 {k:"ortodontiya",t:"Ортодонтия",d:"Исправление прикуса и положения зубов",img:"images/s6.webp",items:["Осмотр и диагностика","Брекеты","Контрольные визиты"],
  intro:"Выявление, профилактика и лечение аномалий прикуса и положения зубов. Метод врач рекомендует после осмотра.",
  who:"Взрослым и детям с тесным или неправильным положением зубов и неправильным прикусом."},
 {k:"bolalar",t:"Детская стоматология",d:"Бережный подход к самым маленьким пациентам",img:"images/s7.webp",items:["Осмотр ребёнка","Лечение молочных зубов","Безболезненное лечение"],
  intro:"Здоровье ребёнка связано со здоровьем зубов. Мы принимаем детей в комфортной обстановке по принципу стерильности и безболезненности. Лечим болезни молочных и постоянных зубов.",
  who:"Детям, у которых болит зуб или нужен осмотр, и их родителям."}
 ],
 doctors:[
 {n:"Абдукадыров Жавохир",r:"Врач-стоматолог",e:"",img:"",b:"Направление: общая стоматология, терапевтическое лечение."},
 {n:"Абдукадырова Зиёда",r:"Врач-стоматолог",e:"",img:"",b:"Направление: общая стоматология, терапевтическое лечение."},
 {n:"Бабаев Санжар",r:"Врач-стоматолог",e:"",img:"",b:"Направление: общая стоматология, терапевтическое лечение."},
 {n:"Ботиров Искандар",r:"Врач-стоматолог",e:"",img:"",b:"Направление: общая стоматология, терапевтическое лечение."}
 ]
}
}
};
