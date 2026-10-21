// Integrated Farming Modules — one entry per income module.
// Every module page uses the same six headings (see `detailHeadings`), so the
// fields under `detail` must stay in the same shape for each module.
// Money figures are rough small-scale estimates; refine them page by page.

export const modulesIntro = {
  eyebrow: { hi: "कमाई के साधन", en: "Income sources" },
  title: { hi: "इंटीग्रेटेड फार्मिंग मॉड्यूल", en: "Integrated Farming Modules" },
  text: {
    hi: "सिर्फ़ फसल बेचकर खेती में फ़ायदा मुश्किल है। ये मॉड्यूल खेत से ही नई कमाई जोड़ते हैं — और हर एक का कचरा दूसरे का इनपुट बनता है। अपनी ज़मीन, पानी और समय के हिसाब से एक-एक करके जोड़ें।",
    en: "Selling crops alone rarely makes farming profitable. These modules add new income from the same farm — and the waste of one becomes the input of another. Add them one at a time to suit your land, water and time.",
  },
  linkLabel: { hi: "खेती से जुड़ाव", en: "Link with the farm" },
  incomeLabel: { hi: "कमाई", en: "Income" },
  cta: { hi: "और जानें →", en: "Learn more →" },
}

export const detailHeadings = {
  cost: { hi: "शुरुआती लागत", en: "Starting cost", icon: "💰" },
  space: { hi: "ज़रूरी जगह", en: "Space needed", icon: "📐" },
  daily: { hi: "रोज़ का काम", en: "Daily work", icon: "🕒" },
  farmLink: { hi: "खेती से कैसे जुड़ता है", en: "How it links with farming", icon: "🔄" },
  income: { hi: "कमाई कब से शुरू होती है", en: "When income starts", icon: "📈" },
  risks: { hi: "जोखिम और सावधानियाँ", en: "Risks and precautions", icon: "⚠️" },
}

export const detailUi = {
  back: { hi: "← सभी मॉड्यूल", en: "← All modules" },
  estimate: {
    hi: "सभी आंकड़े छोटे स्तर के अनुमान हैं। आपके इलाके, नस्ल/किस्म और बाज़ार के हिसाब से ये बदल सकते हैं — शुरुआत से पहले नज़दीकी कृषि विज्ञान केंद्र (KVK) से सलाह ज़रूर लें।",
    en: "All figures are rough small-scale estimates. They vary with your region, breed/variety and market — consult your nearest Krishi Vigyan Kendra (KVK) before starting.",
  },
  others: { hi: "दूसरे मॉड्यूल भी देखें", en: "Explore other modules" },
  notFound: { hi: "यह मॉड्यूल नहीं मिला।", en: "This module was not found." },
}

export const modules = [
  {
    slug: "desi-cow",
    icon: "🐄",
    title: { hi: "देसी गाय पालन", en: "Native cow rearing" },
    summary: {
      hi: "प्राकृतिक खेती की रीढ़। गाय से रोज़ दूध की कमाई, और गोबर-गोमूत्र से जीवामृत, घनजीवामृत और कम्पोस्ट — खेत के लगभग सारे इनपुट।",
      en: "The backbone of natural farming. Daily income from milk, and dung and urine for Jeevamrit, Ghanjeevamrit and compost — almost every farm input.",
    },
    link: {
      hi: "गोबर-गोमूत्र → जीवामृत, कम्पोस्ट; चारा ← फसल अवशेष",
      en: "Dung & urine → Jeevamrit, compost; fodder ← crop residue",
    },
    incomeType: {
      hi: "रोज़ (दूध, घी, पनीर, गोमूत्र बोतल)",
      en: "Daily (milk, ghee, paneer, bottled cow urine)",
    },
    detail: {
      cost: {
        value: { hi: "₹1.2 – 2 लाख (2 गाय)", en: "₹1.2 – 2 lakh (2 cows)" },
        points: {
          hi: [
            "2 देसी गाय (गिर, साहीवाल, थारपारकर आदि) — नस्ल और दूध के हिसाब से दाम।",
            "पक्की फर्श वाली छायादार गोशाला, नाली और गोमूत्र इकट्ठा करने का गड्ढा या ड्रम।",
            "चारे की नाँद, पानी की व्यवस्था और शुरुआती दाना-दवा।",
          ],
          en: [
            "2 native cows (Gir, Sahiwal, Tharparkar etc.) — price depends on breed and milk yield.",
            "A shaded shed with a pucca floor, a drain and a pit or drum to collect urine.",
            "A feed trough, water supply and starter feed and medicines.",
          ],
        },
      },
      space: {
        value: { hi: "300–400 वर्ग फुट + चारे के लिए 0.25–0.5 एकड़", en: "300–400 sq ft + 0.25–0.5 acre for fodder" },
        points: {
          hi: ["गोशाला: प्रति गाय लगभग 40–50 वर्ग फुट ढकी जगह और खुला बाड़ा।", "गोबर के गड्ढे और जीवामृत के ड्रम गोशाला के पास रखें, ताकि ढोना न पड़े।"],
          en: ["Shed: about 40–50 sq ft of covered space per cow plus an open paddock.", "Keep the dung pit and Jeevamrit drums next to the shed so nothing has to be carried far."],
        },
      },
      daily: {
        hi: [
          "सुबह-शाम चारा, पानी और दूध दुहना — लगभग 3–4 घंटे।",
          "गोशाला की सफ़ाई, गोबर को खाद के गड्ढे या जीवामृत के लिए अलग रखना।",
          "गोमूत्र अलग इकट्ठा करना (जीवामृत और बिक्री के लिए)।",
        ],
        en: [
          "Feeding, watering and milking morning and evening — about 3–4 hours.",
          "Cleaning the shed and setting dung aside for the compost pit or Jeevamrit.",
          "Collecting urine separately (for Jeevamrit and for sale).",
        ],
      },
      farmLink: {
        hi: [
          "1 गाय के गोबर-गोमूत्र से कई एकड़ के लिए जीवामृत और घनजीवामृत बनता है।",
          "बचे गोबर से कम्पोस्ट या वर्मीकम्पोस्ट बनाएँ — या बायोगैस मॉड्यूल जोड़कर रसोई गैस भी पाएँ।",
          "धान का पुआल, गेहूँ का भूसा और मेड़ की घास गाय का चारा बनते हैं।",
        ],
        en: [
          "Dung and urine from one cow make Jeevamrit and Ghanjeevamrit for several acres.",
          "Turn the rest of the dung into compost or vermicompost — or add the biogas module for cooking gas too.",
          "Paddy straw, wheat husk and bund grass become cattle fodder.",
        ],
      },
      income: {
        value: { hi: "पहले दिन से (अगर गाय दुधारू है)", en: "From day one (if the cow is in milk)" },
        points: {
          hi: [
            "देसी गाय का दूध (A2) और घी सामान्य दूध से ऊँचे दाम पर बिकता है।",
            "घी, पनीर, छाछ बनाकर बेचने से कमाई बढ़ती है।",
            "छने हुए गोमूत्र की बोतल और गोबर के कंडे भी बिकते हैं।",
          ],
          en: [
            "Native-cow (A2) milk and ghee sell above ordinary milk prices.",
            "Making ghee, paneer and buttermilk raises income.",
            "Filtered cow-urine bottles and dung cakes also sell.",
          ],
        },
      },
      risks: {
        hi: [
          "देसी गाय का दूध कम होता है (लगभग 5–10 लीटर/दिन) — कमाई दूध की मात्रा से नहीं, गुणवत्ता और उत्पादों से बनती है।",
          "खुरपका-मुँहपका, लम्पी जैसी बीमारियाँ — समय पर टीकाकरण कराएँ।",
          "गर्मी में हरे चारे की कमी — पहले से चारा उत्पादन की योजना बनाएँ।",
        ],
        en: [
          "Native cows give less milk (about 5–10 litres/day) — income comes from quality and products, not volume.",
          "Diseases such as foot-and-mouth and lumpy skin — vaccinate on time.",
          "Green fodder runs short in summer — plan fodder production in advance.",
        ],
      },
    },
  },
  {
    slug: "biogas",
    icon: "🔥",
    title: { hi: "बायोगैस प्लांट (गोबर गैस)", en: "Biogas plant (gobar gas)" },
    summary: {
      hi: "गोबर से रसोई की गैस, और बची हुई स्लरी से बढ़िया तरल खाद। एलपीजी और लकड़ी का खर्च बचता है और रसोई धुएँ से मुक्त होती है।",
      en: "Cooking gas from dung, and excellent liquid manure from the leftover slurry. Saves on LPG and firewood and keeps the kitchen smoke-free.",
    },
    link: {
      hi: "गोबर + पानी → रसोई गैस; स्लरी → खेत की तरल खाद",
      en: "Dung + water → cooking gas; slurry → liquid manure for the field",
    },
    incomeType: {
      hi: "रोज़ की बचत (एलपीजी/लकड़ी), स्लरी खाद",
      en: "Daily savings (LPG/firewood), slurry manure",
    },
    detail: {
      cost: {
        value: { hi: "₹20,000 – 45,000 (1–2 घन मीटर घरेलू प्लांट)", en: "₹20,000 – 45,000 (1–2 cubic-metre household plant)" },
        points: {
          hi: [
            "पक्का गुंबद वाला (दीनबंधु मॉडल), तैरते ड्रम वाला या तैयार प्लास्टिक/फ़ाइबर प्लांट — तीनों तरह के मिलते हैं।",
            "गैस पाइप, वाल्व और बायोगैस वाला चूल्हा।",
            "केंद्र और राज्य की योजनाओं में घरेलू बायोगैस प्लांट पर सब्सिडी मिलती है — ज़िला कृषि या ऊर्जा कार्यालय से पता करें।",
          ],
          en: [
            "Fixed-dome (Deenbandhu model), floating-drum or ready-made plastic/fibre plants — all three types are available.",
            "Gas pipe, valve and a biogas stove.",
            "Central and state schemes subsidise household biogas plants — ask your district agriculture or energy office.",
          ],
        },
      },
      space: {
        value: { hi: "लगभग 10×10 फुट, गोशाला और रसोई के पास", en: "About 10×10 ft, near the cowshed and kitchen" },
        points: {
          hi: [
            "धूप वाली जगह चुनें — गर्मी में गैस ज़्यादा बनती है।",
            "गोशाला के पास हो ताकि गोबर ढोना न पड़े, और रसोई तक पाइप छोटा रहे।",
            "पास में पानी हो और स्लरी के लिए गड्ढे की जगह हो।",
          ],
          en: [
            "Pick a sunny spot — more gas forms when it is warm.",
            "Close to the cowshed so dung needn't be carried, with a short pipe to the kitchen.",
            "Water nearby and room for a slurry pit.",
          ],
        },
      },
      daily: {
        hi: [
          "रोज़ गोबर में बराबर पानी मिलाकर घोल बनाएँ और प्लांट में डालें — 15–20 मिनट।",
          "1 घन मीटर के लिए लगभग 20–25 किलो ताज़ा गोबर रोज़ चाहिए (2–3 पशुओं का)।",
          "स्लरी के गड्ढे पर नज़र रखें और पाइप-वाल्व में रिसाव तो नहीं, यह देखें।",
        ],
        en: [
          "Mix dung with an equal amount of water each day and feed it in — 15–20 minutes.",
          "About 20–25 kg of fresh dung a day per cubic metre (from 2–3 animals).",
          "Keep an eye on the slurry pit and check pipes and valves for leaks.",
        ],
      },
      farmLink: {
        hi: [
          "बायोगैस की स्लरी बेहतरीन तरल खाद है — सीधे सिंचाई के पानी के साथ खेत में डालें या सुखाकर कम्पोस्ट में मिलाएँ।",
          "गोबर का पूरा फ़ायदा: पहले गैस, फिर खाद — कुछ भी बेकार नहीं।",
          "लकड़ी जलाना कम होता है, जिससे पेड़ बचते हैं और रसोई में धुआँ नहीं होता।",
        ],
        en: [
          "Biogas slurry is an excellent liquid manure — apply it with irrigation water or dry it and mix it into compost.",
          "Full use of dung: gas first, then manure — nothing is wasted.",
          "Less firewood is burnt, which saves trees and keeps the kitchen smoke-free.",
        ],
      },
      income: {
        value: { hi: "पहली बार भरने के 2–4 हफ्ते बाद से गैस", en: "Gas from 2–4 weeks after the first filling" },
        points: {
          hi: [
            "2 घन मीटर का प्लांट 4–5 लोगों के परिवार के रोज़ के खाने के लिए काफ़ी गैस दे सकता है।",
            "सीधी कमाई नहीं, बल्कि एलपीजी सिलेंडर और खाद का पैसा बचता है।",
            "ज़्यादा स्लरी खाद पड़ोसी किसानों को बेची जा सकती है।",
          ],
          en: [
            "A 2 cubic-metre plant can give enough gas for a family of 4–5 to cook daily meals.",
            "Not direct income — it saves the money spent on LPG cylinders and manure.",
            "Surplus slurry manure can be sold to neighbouring farmers.",
          ],
        },
      },
      risks: {
        hi: [
          "सर्दियों में गैस कम बनती है — प्लांट को धूप में रखें और ऊपर पुआल से ढकें।",
          "गोबर रोज़ न डाला तो गैस बंद हो जाती है — पशु और गोबर की पक्की व्यवस्था पहले करें।",
          "गैस रिसाव से आग का खतरा — जोड़ों को साबुन के पानी से जाँचें, आग पास न लाएँ।",
          "स्लरी का खुला गड्ढा बच्चों और पशुओं के लिए खतरनाक — उसे ढककर या बाड़ से घेरकर रखें।",
        ],
        en: [
          "Less gas forms in winter — keep the plant in the sun and cover it with straw.",
          "Gas stops if dung isn't fed daily — secure animals and a dung supply first.",
          "Leaking gas is a fire risk — check joints with soapy water and keep flames away.",
          "An open slurry pit is dangerous for children and animals — cover or fence it.",
        ],
      },
    },
  },
  {
    slug: "goat-farming",
    icon: "🐐",
    title: { hi: "बकरी पालन", en: "Goat farming" },
    summary: {
      hi: "कम पूँजी, कम जगह और जल्दी बढ़ने वाला पशुधन। बकरियाँ झाड़ियाँ और पत्ते खाकर पलती हैं और साल भर में बच्चे देकर झुंड बढ़ाती हैं।",
      en: "Low capital, little space and fast-growing livestock. Goats live on shrubs and leaves and grow the herd by kidding within a year.",
    },
    link: {
      hi: "मींगनी → खाद; झाड़ी/पत्ते → चारा",
      en: "Droppings → manure; shrubs/leaves → fodder",
    },
    incomeType: { hi: "6–12 महीने (बिक्री)", en: "6–12 months (sale)" },
    detail: {
      cost: {
        value: { hi: "₹80,000 – 1.5 लाख (10 बकरी + 1 बकरा)", en: "₹80,000 – 1.5 lakh (10 does + 1 buck)" },
        points: {
          hi: [
            "स्थानीय या उन्नत नस्लें — बरबरी, सिरोही, जमुनापारी, ब्लैक बंगाल।",
            "ज़मीन से ऊपर उठा हुआ (मचान वाला) बाड़ा — नमी और बीमारी से बचाता है।",
            "टीके, दवा और शुरुआती दाने का खर्च।",
          ],
          en: [
            "Local or improved breeds — Barbari, Sirohi, Jamunapari, Black Bengal.",
            "A raised (slatted) shed — protects from damp and disease.",
            "Vaccines, medicines and starter feed.",
          ],
        },
      },
      space: {
        value: { hi: "150–200 वर्ग फुट बाड़ा + चराई की जगह", en: "150–200 sq ft shed + grazing area" },
        points: {
          hi: ["प्रति बकरी लगभग 10–15 वर्ग फुट ढकी जगह।", "मेड़ पर सुबबूल, सहजन, गिलिरिसिडिया जैसे चारा पेड़ लगाएँ।"],
          en: ["About 10–15 sq ft of covered space per goat.", "Plant fodder trees such as subabul, moringa and gliricidia on the bunds."],
        },
      },
      daily: {
        hi: ["2–4 घंटे चराई या कटा हुआ चारा देना।", "साफ़ पानी और बाड़े की सफ़ाई।", "बीमार या कमज़ोर बकरी पर रोज़ नज़र।"],
        en: ["2–4 hours of grazing or cut-and-carry feeding.", "Clean water and shed cleaning.", "Daily watch on sick or weak animals."],
      },
      farmLink: {
        hi: [
          "बकरी की मींगनी नाइट्रोजन से भरपूर खाद है — कम्पोस्ट और वर्मीकम्पोस्ट में डालें।",
          "मेड़ की झाड़ियाँ, पेड़ों की छँटाई और फसल अवशेष चारा बन जाते हैं।",
        ],
        en: [
          "Goat droppings are nitrogen-rich manure — add them to compost and vermicompost.",
          "Bund shrubs, tree prunings and crop residue become fodder.",
        ],
      },
      income: {
        value: { hi: "6–12 महीने में पहली बिक्री", en: "First sale in 6–12 months" },
        points: {
          hi: [
            "बकरी साल में एक बार और अक्सर जुड़वाँ बच्चे देती है।",
            "बच्चे 6–12 महीने के होने पर बिकते हैं — त्योहारों (जैसे बकरीद) से पहले अच्छे दाम।",
            "मींगनी की खाद भी बेची जा सकती है।",
          ],
          en: [
            "A doe kids about once a year, often with twins.",
            "Kids are sold at 6–12 months — prices are best before festivals such as Bakrid.",
            "Droppings can also be sold as manure.",
          ],
        },
      },
      risks: {
        hi: [
          "पीपीआर और एंटरोटॉक्सीमिया जैसी बीमारियाँ — टीकाकरण और कृमिनाशक दवा समय पर।",
          "खुली बकरियाँ फसल और पौधे खा जाती हैं — बाड़ ज़रूरी।",
          "चोरी और कुत्तों से खतरा; बाज़ार भाव में उतार-चढ़ाव।",
        ],
        en: [
          "Diseases such as PPR and enterotoxaemia — vaccinate and deworm on time.",
          "Loose goats eat crops and saplings — fencing is essential.",
          "Risk of theft and dogs; market prices fluctuate.",
        ],
      },
    },
  },
  {
    slug: "poultry",
    icon: "🐓",
    title: { hi: "मुर्गी पालन", en: "Poultry rearing" },
    summary: {
      hi: "देसी मुर्गियाँ खेत में घूमकर कीड़े और खरपतवार के बीज खाती हैं। रोज़ अंडों से छोटी-छोटी कमाई और 2–3 महीने में मांस की बिक्री।",
      en: "Native chickens roam the farm eating insects and weed seeds. Small daily income from eggs and meat sales in 2–3 months.",
    },
    link: { hi: "कीट खाते हैं, बीट → खाद", en: "Eat pests, droppings → manure" },
    incomeType: { hi: "रोज़ (अंडे), 2–3 महीने (मांस)", en: "Daily (eggs), 2–3 months (meat)" },
    detail: {
      cost: {
        value: { hi: "₹20,000 – 50,000 (50–100 मुर्गियाँ)", en: "₹20,000 – 50,000 (50–100 birds)" },
        points: {
          hi: [
            "देसी/उन्नत देसी नस्लें — कड़कनाथ, वनराजा, ग्रामप्रिया, असील।",
            "रात के लिए सुरक्षित, हवादार दड़बा।",
            "दाना, पानी के बर्तन और टीके।",
          ],
          en: [
            "Native/improved native breeds — Kadaknath, Vanaraja, Gramapriya, Aseel.",
            "A safe, airy coop for the night.",
            "Feed, waterers and vaccines.",
          ],
        },
      },
      space: {
        value: { hi: "100–200 वर्ग फुट दड़बा + खुला घूमने का क्षेत्र", en: "100–200 sq ft coop + open range" },
        points: {
          hi: ["प्रति मुर्गी रात के लिए 1.5–2 वर्ग फुट।", "दिन में खेत या बगीचे में खुला घूमने दें, सब्ज़ी की क्यारियों से दूर।"],
          en: ["1.5–2 sq ft per bird for the night.", "Let them range freely by day in the field or orchard, away from vegetable beds."],
        },
      },
      daily: {
        hi: ["सुबह छोड़ना, शाम को बंद करना — लगभग 1 घंटा।", "दाना-पानी देना और अंडे इकट्ठा करना।"],
        en: ["Letting birds out in the morning and shutting them in at dusk — about 1 hour.", "Feeding, watering and collecting eggs."],
      },
      farmLink: {
        hi: [
          "खुले में घूमती मुर्गियाँ दीमक, इल्लियाँ और खरपतवार के बीज खाती हैं।",
          "मुर्गी की बीट नाइट्रोजन से भरपूर है और कम्पोस्ट को तेज़ी से पकाती है।",
          "टूटा अनाज, सब्ज़ियों का कचरा और दीमक/कीड़े उनका सस्ता भोजन बनते हैं।",
        ],
        en: [
          "Free-ranging chickens eat termites, caterpillars and weed seeds.",
          "Chicken droppings are rich in nitrogen and speed up composting.",
          "Broken grain, vegetable waste and insects become their low-cost feed.",
        ],
      },
      income: {
        value: { hi: "अंडे लगभग 5–6 महीने की उम्र से रोज़; मांस 2–3 महीने में", en: "Eggs daily from about 5–6 months of age; meat in 2–3 months" },
        points: {
          hi: ["देसी अंडे और कड़कनाथ का मांस सामान्य से कई गुना दाम पर बिकता है।", "चूज़े तैयार करके बेचना भी एक कमाई है।"],
          en: ["Native eggs and Kadaknath meat fetch several times the usual price.", "Raising and selling chicks is another income."],
        },
      },
      risks: {
        hi: [
          "रानीखेत और बर्ड फ्लू — टीकाकरण और साफ़-सफ़ाई ज़रूरी।",
          "कुत्ते, नेवले, साँप और बाज़ से नुकसान — रात में मज़बूत दड़बा।",
          "खुली मुर्गियाँ नई बोई क्यारियों को कुरेद देती हैं — उस समय बाड़ लगाएँ।",
        ],
        en: [
          "Ranikhet disease and bird flu — vaccination and hygiene are essential.",
          "Losses to dogs, mongooses, snakes and hawks — a strong coop at night.",
          "Loose chickens scratch up freshly sown beds — fence them off at that time.",
        ],
      },
    },
  },
  {
    slug: "jugaad-incubator",
    icon: "🥚",
    // Has its own tutorial page (IncubatorPage) instead of the six-section `detail`.
    title: { hi: "जुगाड़ इनक्यूबेटर (अंडे से चूज़े)", en: "DIY egg incubator (eggs to chicks)" },
    summary: {
      hi: "थर्माकोल के डिब्बे, बल्ब, पंखे और एक छोटी किट से घर पर इनक्यूबेटर बनाइए। अपने देसी अंडों से 21 दिन में अपने चूज़े — पूरा तरीका फोटो के साथ।",
      en: "Build an incubator at home from a thermocol box, bulbs, fans and a small kit. Your own chicks from your own desi eggs in 21 days — full method with photos.",
    },
    link: {
      hi: "अपने देसी अंडे → अपने चूज़े; बाहर से चूज़े खरीदने का खर्च बचे",
      en: "Your desi eggs → your own chicks; no need to buy chicks",
    },
    incomeType: { hi: "21 दिन में चूज़े; ज़्यादा हों तो बेच भी सकते हैं", en: "Chicks in 21 days; sell the surplus" },
  },
  {
    slug: "duck",
    icon: "🦆",
    title: { hi: "बत्तख पालन", en: "Duck rearing" },
    summary: {
      hi: "धान के खेत और तालाब वाले किसानों के लिए बढ़िया मॉड्यूल। बत्तखें खेत में कीट और खरपतवार खाती हैं, और मुर्गी से ज़्यादा अंडे देती हैं।",
      en: "A great module for farmers with paddy fields or a pond. Ducks eat pests and weeds in the field, and lay more eggs than chickens.",
    },
    link: {
      hi: "धान के खेत में कीट-खरपतवार खाती हैं; बीट → खाद और मछली का भोजन",
      en: "Eat pests and weeds in paddy; droppings → manure and fish feed",
    },
    incomeType: { hi: "रोज़ (अंडे), 2 महीने (मांस)", en: "Daily (eggs), 2 months (meat)" },
    detail: {
      cost: {
        value: { hi: "₹15,000 – 40,000 (50–100 बत्तख)", en: "₹15,000 – 40,000 (50–100 ducks)" },
        points: {
          hi: [
            "अंडे के लिए खाकी कैंपबेल; मांस के लिए व्हाइट पेकिन; या स्थानीय देसी बत्तख।",
            "रात के लिए सूखा, हवादार बाड़ा।",
            "दाना, टीके और पानी की व्यवस्था।",
          ],
          en: [
            "Khaki Campbell for eggs; White Pekin for meat; or local native ducks.",
            "A dry, airy shed for the night.",
            "Feed, vaccines and access to water.",
          ],
        },
      },
      space: {
        value: { hi: "100–200 वर्ग फुट बाड़ा + तालाब या धान का खेत", en: "100–200 sq ft shed + a pond or paddy field" },
        points: {
          hi: ["प्रति बत्तख रात के लिए 2–3 वर्ग फुट।", "बत्तखों को तैरने और चोंच डुबोने के लिए पानी चाहिए — खेत तालाब सबसे अच्छा।"],
          en: ["2–3 sq ft per duck for the night.", "Ducks need water to swim and dip their bills — a farm pond is ideal."],
        },
      },
      daily: {
        hi: ["सुबह तालाब या खेत में छोड़ना, शाम को वापस लाना — लगभग 1 घंटा।", "अंडे सुबह जल्दी इकट्ठा करना — बत्तखें ज़्यादातर रात या भोर में अंडे देती हैं।"],
        en: ["Letting them out to the pond or field in the morning and bringing them back at dusk — about 1 hour.", "Collecting eggs early — ducks lay mostly at night or dawn."],
      },
      farmLink: {
        hi: [
          "रोपाई के 2–3 हफ्ते बाद धान के खेत में छोड़ें — बत्तखें कीट, घोंघे और खरपतवार खाती हैं।",
          "उनके तैरने से पानी में हलचल होती है और बीट से खेत को खाद मिलती है।",
          "बत्तख + मछली साथ पालें — बत्तख की बीट से तालाब में मछलियों का प्राकृतिक भोजन बढ़ता है।",
        ],
        en: [
          "Release them into paddy 2–3 weeks after transplanting — ducks eat pests, snails and weeds.",
          "Their swimming stirs the water and their droppings manure the field.",
          "Raise ducks with fish — duck droppings boost natural fish food in the pond.",
        ],
      },
      income: {
        value: { hi: "अंडे लगभग 5–6 महीने की उम्र से; मांस वाली नस्ल 2 महीने में", en: "Eggs from about 5–6 months of age; meat breeds in 2 months" },
        points: {
          hi: ["खाकी कैंपबेल साल में लगभग 250–300 अंडे देती है — देसी मुर्गी से कहीं ज़्यादा।", "बत्तख के अंडे और मांस की कई इलाकों (पूर्व और दक्षिण भारत) में अच्छी माँग है।"],
          en: ["A Khaki Campbell lays about 250–300 eggs a year — far more than a native hen.", "Duck eggs and meat are in good demand in many regions (eastern and southern India)."],
        },
      },
      risks: {
        hi: [
          "डक प्लेग और डक कॉलरा — समय पर टीकाकरण।",
          "पानी के बिना बत्तख पालन मुश्किल; सूखे इलाकों के लिए सही नहीं।",
          "धान में बालियाँ आने के बाद बत्तखें दाने खा सकती हैं — तब खेत से हटा लें।",
          "कुछ इलाकों में बत्तख के अंडों का बाज़ार छोटा — पहले खरीदार देखें।",
        ],
        en: [
          "Duck plague and duck cholera — vaccinate on time.",
          "Duck rearing is hard without water; not suited to dry areas.",
          "Once paddy starts heading, ducks may eat the grain — take them out of the field then.",
          "Duck-egg markets are small in some areas — find buyers first.",
        ],
      },
    },
  },
  {
    slug: "fish-farming",
    icon: "🐟",
    title: { hi: "मछली पालन (खेत तालाब)", en: "Fish farming (farm pond)" },
    summary: {
      hi: "बारिश का पानी रोकने वाला खेत तालाब एक साथ तीन काम करता है — सिंचाई, भूजल रिचार्ज और मछली से कमाई।",
      en: "A farm pond that stores rainwater does three jobs at once — irrigation, groundwater recharge and income from fish.",
    },
    link: { hi: "तालाब का पानी → सिंचाई; गाद → खाद", en: "Pond water → irrigation; silt → manure" },
    incomeType: { hi: "6–10 महीने", en: "6–10 months" },
    detail: {
      cost: {
        value: { hi: "₹60,000 – 1.5 लाख (0.1–0.25 एकड़ तालाब)", en: "₹60,000 – 1.5 lakh (0.1–0.25 acre pond)" },
        points: {
          hi: [
            "तालाब की खुदाई — मनरेगा या सिंचाई योजनाओं से खेत तालाब में मदद मिल सकती है।",
            "रोहू, कतला, मृगल जैसी मछलियों के बीज (फिंगरलिंग)।",
            "चूना, खाद और दाना।",
          ],
          en: [
            "Digging the pond — MGNREGA or irrigation schemes may support farm ponds.",
            "Fingerlings of rohu, catla, mrigal and similar fish.",
            "Lime, manure and feed.",
          ],
        },
      },
      space: {
        value: { hi: "0.1–0.25 एकड़, कम से कम 1.5–2 मीटर गहरा", en: "0.1–0.25 acre, at least 1.5–2 metres deep" },
        points: {
          hi: ["खेत का सबसे निचला हिस्सा चुनें जहाँ बारिश का पानी अपने-आप आए।", "मिट्टी ऐसी हो जो पानी रोक सके।"],
          en: ["Choose the lowest part of the farm where rainwater collects naturally.", "The soil should hold water."],
        },
      },
      daily: {
        hi: ["सुबह दाना देना और पानी का रंग देखना — लगभग 30 मिनट।", "पानी का स्तर और मछलियों का व्यवहार जाँचना।"],
        en: ["Feeding in the morning and checking water colour — about 30 minutes.", "Checking water level and fish behaviour."],
      },
      farmLink: {
        hi: [
          "मछलियों वाला पानी पोषक तत्वों से भरा होता है — सिंचाई में खाद का काम करता है।",
          "तालाब की गाद हर साल निकालकर खेत में डालें — बहुत उपजाऊ होती है।",
          "गोबर और फसल अवशेष मछलियों के प्राकृतिक भोजन (प्लवक) को बढ़ाते हैं।",
        ],
        en: [
          "Water from a fish pond is nutrient-rich — it doubles as manure when irrigating.",
          "Remove pond silt every year and spread it on the field — it is very fertile.",
          "Dung and crop residue boost plankton, the fish's natural food.",
        ],
      },
      income: {
        value: { hi: "6–10 महीने में पहली पकड़", en: "First harvest in 6–10 months" },
        points: {
          hi: ["एक साल में एक या दो बार मछली निकालकर बेचें।", "मेड़ पर सब्ज़ी या फल लगाकर तालाब की जगह से अतिरिक्त कमाई।"],
          en: ["Harvest and sell fish once or twice a year.", "Grow vegetables or fruit on the pond bunds for extra income."],
        },
      },
      risks: {
        hi: [
          "गर्मी में पानी सूखना — तालाब की गहराई और पानी के स्रोत की योजना बनाएँ।",
          "ऑक्सीजन की कमी से मछलियाँ मरना (बादल वाले, उमस भरे दिनों में) — ज़्यादा दाना न डालें।",
          "चोरी और पक्षियों से नुकसान।",
        ],
        en: [
          "Water drying up in summer — plan pond depth and a water source.",
          "Fish deaths from low oxygen (on cloudy, humid days) — don't overfeed.",
          "Losses to theft and birds.",
        ],
      },
    },
  },
  {
    slug: "beekeeping",
    icon: "🐝",
    title: { hi: "मधुमक्खी पालन", en: "Beekeeping" },
    summary: {
      hi: "मधुमक्खियाँ परागण करके फसल की उपज बढ़ाती हैं और साथ में शहद व मोम की कमाई देती हैं। प्राकृतिक खेत इनके लिए सबसे सुरक्षित जगह है।",
      en: "Bees raise crop yields through pollination and add income from honey and wax. A natural farm is the safest place for them.",
    },
    link: { hi: "परागण (pollination) से उपज बढ़े", en: "Pollination raises yield" },
    incomeType: { hi: "मौसमी (शहद, मोम)", en: "Seasonal (honey, wax)" },
    detail: {
      cost: {
        value: { hi: "₹40,000 – 70,000 (10 बक्से)", en: "₹40,000 – 70,000 (10 boxes)" },
        points: {
          hi: [
            "मधुमक्खी कॉलोनी सहित बक्से, स्टैंड और जाली।",
            "शहद निकालने की मशीन (एक्सट्रैक्टर), दस्ताने और नकाब।",
            "राष्ट्रीय मधुमक्खी पालन और शहद मिशन जैसी योजनाओं से प्रशिक्षण और मदद मिल सकती है।",
          ],
          en: [
            "Boxes with bee colonies, stands and nets.",
            "Honey extractor, gloves and veil.",
            "Schemes such as the National Beekeeping and Honey Mission may offer training and support.",
          ],
        },
      },
      space: {
        value: { hi: "बहुत कम — खेत की मेड़ या बगीचे में", en: "Very little — on bunds or in an orchard" },
        points: {
          hi: ["बक्से छाँव में, एक-दूसरे से 1–2 मीटर दूरी पर रखें।", "आस-पास सरसों, सूरजमुखी, फल-पेड़ जैसी फूल वाली फसलें होनी चाहिए।"],
          en: ["Keep boxes in shade, 1–2 metres apart.", "Flowering crops such as mustard, sunflower and fruit trees should be nearby."],
        },
      },
      daily: {
        hi: ["रोज़ काम कम; हफ्ते में एक बार 1–2 घंटे बक्सों की जाँच।", "फूलों की कमी के मौसम में चीनी का घोल देना।"],
        en: ["Little daily work; a 1–2 hour box inspection once a week.", "Feeding sugar syrup during the flowerless season."],
      },
      farmLink: {
        hi: [
          "परागण से सरसों, सूरजमुखी, फल और सब्ज़ियों की उपज साफ़ तौर पर बढ़ती है।",
          "रासायनिक छिड़काव न होने से प्राकृतिक खेत मधुमक्खियों के लिए सुरक्षित है।",
        ],
        en: [
          "Pollination clearly raises yields of mustard, sunflower, fruit and vegetables.",
          "With no chemical sprays, a natural farm is safe for bees.",
        ],
      },
      income: {
        value: { hi: "फूलों के मौसम में (साल में 2–4 बार शहद)", en: "During flowering seasons (honey 2–4 times a year)" },
        points: {
          hi: ["प्रति बक्सा साल में लगभग 10–25 किलो शहद (फूलों पर निर्भर)।", "मोम, पराग और नई कॉलोनियाँ भी बिकती हैं।"],
          en: ["About 10–25 kg of honey per box per year (depends on flowers).", "Wax, pollen and new colonies also sell."],
        },
      },
      risks: {
        hi: [
          "पड़ोसी खेतों में कीटनाशक छिड़काव से मधुमक्खियाँ मरती हैं — पड़ोसियों से बात करें।",
          "माइट, ततैया और चींटियों का हमला।",
          "फूलों की कमी में कॉलोनी भाग सकती है — शुरुआत से पहले प्रशिक्षण लें।",
        ],
        en: [
          "Pesticide sprays on neighbouring farms kill bees — talk to your neighbours.",
          "Attacks by mites, wasps and ants.",
          "Colonies may abscond when flowers are scarce — get trained before starting.",
        ],
      },
    },
  },
  {
    slug: "vermicompost",
    icon: "🪱",
    title: { hi: "वर्मीकम्पोस्ट यूनिट", en: "Vermicompost unit" },
    summary: {
      hi: "केंचुए खेत के कचरे को 2–3 महीने में बेहतरीन खाद में बदल देते हैं। अपने खेत में डालें और बची हुई खाद बेचकर कमाएँ।",
      en: "Earthworms turn farm waste into excellent manure in 2–3 months. Use it on your field and sell the surplus.",
    },
    link: { hi: "खेत का कचरा → खाद", en: "Farm waste → manure" },
    incomeType: { hi: "2–3 महीने, बेच भी सकते हैं", en: "2–3 months, can also be sold" },
    detail: {
      cost: {
        value: { hi: "₹15,000 – 40,000 (4 बेड)", en: "₹15,000 – 40,000 (4 beds)" },
        points: {
          hi: ["छाया के लिए सस्ता शेड (बाँस/शेड नेट)।", "ईंटों के बेड या तैयार वर्मी-बेड।", "केंचुए (आइसीनिया फेटिडा) — एक बार खरीदें, फिर खुद बढ़ते हैं।"],
          en: ["A low-cost shade shed (bamboo/shade net).", "Brick beds or ready-made vermi-beds.", "Earthworms (Eisenia fetida) — buy once, they multiply on their own."],
        },
      },
      space: {
        value: { hi: "200–500 वर्ग फुट छायादार जगह", en: "200–500 sq ft of shaded space" },
        points: {
          hi: ["हर बेड लगभग 10 फुट लंबा, 3 फुट चौड़ा, 1.5–2 फुट ऊँचा।", "जगह ऊँची हो ताकि बारिश का पानी न भरे।"],
          en: ["Each bed about 10 ft long, 3 ft wide and 1.5–2 ft high.", "Choose raised ground so rainwater doesn't collect."],
        },
      },
      daily: {
        hi: ["नमी बनाए रखने के लिए पानी छिड़कना — लगभग 30 मिनट।", "चींटी, चूहे और पक्षियों से बचाव।"],
        en: ["Sprinkling water to keep beds moist — about 30 minutes.", "Protecting from ants, rats and birds."],
      },
      farmLink: {
        hi: ["फसल अवशेष, पत्तियाँ, गोबर और रसोई का कचरा — सब इसका कच्चा माल।", "तैयार खाद और वर्मीवॉश (तरल) सीधे खेत में।"],
        en: ["Crop residue, leaves, dung and kitchen waste — all are raw material.", "Finished compost and vermiwash (liquid) go straight to the field."],
      },
      income: {
        value: { hi: "2–3 महीने में पहली खाद", en: "First compost in 2–3 months" },
        points: {
          hi: ["अपने खेत की खाद का खर्च बचता है।", "बची हुई खाद पैकेट में भरकर नर्सरी, बागवानी और शहरी ग्राहकों को बेचें।", "बढ़े हुए केंचुए भी बेचे जा सकते हैं।"],
          en: ["Saves the cost of manure for your own field.", "Pack surplus compost for nurseries, gardeners and urban buyers.", "Surplus earthworms can be sold too."],
        },
      },
      risks: {
        hi: ["35°C से ज़्यादा गर्मी या जलभराव में केंचुए मर जाते हैं — छाया और सही नमी ज़रूरी।", "ताज़ा गोबर सीधे डालने से गर्मी बढ़ती है — 10–15 दिन पुराना गोबर डालें।"],
        en: ["Worms die above 35°C or in waterlogging — shade and the right moisture are essential.", "Fresh dung heats up — use dung that is 10–15 days old."],
      },
    },
  },
  {
    slug: "mushroom",
    icon: "🍄",
    title: { hi: "मशरूम उत्पादन", en: "Mushroom production" },
    summary: {
      hi: "जलाई जाने वाली पराली और भूसा मशरूम उगाने का माध्यम बन जाता है। एक छोटे कमरे में 1–2 महीने में फसल तैयार।",
      en: "Straw and husk that would be burnt become the medium for mushrooms. A crop is ready in 1–2 months in a small room.",
    },
    link: { hi: "पराली/भूसा → माध्यम", en: "Straw/husk → growing medium" },
    incomeType: { hi: "1–2 महीने", en: "1–2 months" },
    detail: {
      cost: {
        value: { hi: "₹20,000 – 50,000 (छोटी यूनिट)", en: "₹20,000 – 50,000 (small unit)" },
        points: {
          hi: ["रैक, पॉलीथीन बैग, स्पॉन (बीज) और भूसा उबालने/उपचार का ड्रम।", "ढींगरी (ऑयस्टर) मशरूम से शुरुआत सबसे आसान।"],
          en: ["Racks, polythene bags, spawn and a drum for treating straw.", "Oyster (dhingri) mushroom is the easiest to start with."],
        },
      },
      space: {
        value: { hi: "200–300 वर्ग फुट का अंधेरा, हवादार कमरा", en: "A dark, airy room of 200–300 sq ft" },
        points: {
          hi: ["कच्चा कमरा, छप्पर या पुराना गोदाम भी चल जाता है।", "नमी बनाए रखने की व्यवस्था ज़रूरी।"],
          en: ["A mud room, thatched hut or old store works.", "A way to keep humidity high is essential."],
        },
      },
      daily: {
        hi: ["दिन में 2–3 बार पानी का छिड़काव — लगभग 1–2 घंटे।", "तैयार मशरूम रोज़ तोड़ना और पैक करना।"],
        en: ["Misting 2–3 times a day — about 1–2 hours.", "Picking and packing ready mushrooms every day."],
      },
      farmLink: {
        hi: ["धान की पराली और गेहूँ का भूसा जलाने की जगह कमाई में बदलता है।", "मशरूम उगने के बाद बचा भूसा बढ़िया कम्पोस्ट और पशु-आहार बनता है।"],
        en: ["Paddy straw and wheat husk turn into income instead of being burnt.", "Spent straw after harvest makes good compost and cattle feed."],
      },
      income: {
        value: { hi: "1–2 महीने में पहली तुड़ाई", en: "First picking in 1–2 months" },
        points: {
          hi: ["ढींगरी में बिजाई के लगभग 3–4 हफ्ते बाद पहली फसल, फिर 2–3 बार और।", "ताज़ा मशरूम के अलावा सुखाकर या पाउडर बनाकर भी बेचें।"],
          en: ["Oyster gives its first flush about 3–4 weeks after spawning, then 2–3 more.", "Sell fresh, or dried and powdered."],
        },
      },
      risks: {
        hi: ["हरी फफूंद जैसा संक्रमण — साफ़-सफ़ाई और भूसे का सही उपचार।", "गर्मी (30°C से ऊपर) में उत्पादन घटता है — मौसम के हिसाब से किस्म चुनें।", "ताज़ा मशरूम जल्दी खराब होता है — बेचने की व्यवस्था पहले करें।"],
        en: ["Contamination such as green mould — hygiene and proper straw treatment.", "Yield drops in heat (above 30°C) — pick a variety for the season.", "Fresh mushrooms spoil fast — arrange buyers first."],
      },
    },
  },
  {
    slug: "fodder",
    icon: "🌾",
    title: { hi: "चारा उत्पादन (नेपियर, हाइड्रोपोनिक)", en: "Fodder production (Napier, hydroponic)" },
    summary: {
      hi: "पशुपालन का सबसे बड़ा खर्च चारा है। मेड़ पर नेपियर घास और हाइड्रोपोनिक चारा उगाकर ये खर्च बहुत घटाया जा सकता है।",
      en: "Fodder is the biggest cost in livestock rearing. Napier grass on bunds and hydroponic fodder can cut it sharply.",
    },
    link: {
      hi: "मेड़ पर नेपियर; हाइड्रोपोनिक चारा (reference model: 19% protein)",
      en: "Napier on bunds; hydroponic fodder (reference model: 19% protein)",
    },
    incomeType: { hi: "पशु-आहार का खर्च घटाता है", en: "Cuts the cost of animal feed" },
    detail: {
      cost: {
        value: { hi: "नेपियर: ₹2,000–5,000 | हाइड्रोपोनिक: ₹30,000+", en: "Napier: ₹2,000–5,000 | Hydroponic: ₹30,000+" },
        points: {
          hi: ["संकर नेपियर (जैसे CO-4, CO-5) की जड़ें/कलम — एक बार लगाने पर 4–5 साल चलती है।", "हाइड्रोपोनिक यूनिट: रैक, ट्रे, पानी का छिड़काव और मक्का/जौ के बीज।"],
          en: ["Hybrid Napier (e.g. CO-4, CO-5) root slips — one planting lasts 4–5 years.", "Hydroponic unit: racks, trays, water misting and maize/barley seed."],
        },
      },
      space: {
        value: { hi: "नेपियर: मेड़ या 0.1 एकड़ | हाइड्रोपोनिक: 100–200 वर्ग फुट", en: "Napier: bunds or 0.1 acre | Hydroponic: 100–200 sq ft" },
        points: {
          hi: ["0.1 एकड़ नेपियर से 1–2 गायों के लिए साल भर हरा चारा।", "हाइड्रोपोनिक चारा ज़मीन के बिना, छोटे कमरे में।"],
          en: ["0.1 acre of Napier gives year-round green fodder for 1–2 cows.", "Hydroponic fodder needs no land, just a small room."],
        },
      },
      daily: {
        hi: ["नेपियर: हर 35–45 दिन पर कटाई, बीच में बहुत कम काम।", "हाइड्रोपोनिक: रोज़ बीज भिगोना, ट्रे लगाना और 7–8 दिन पुराना चारा निकालना — लगभग 1 घंटा।"],
        en: ["Napier: a cut every 35–45 days, little work in between.", "Hydroponic: soak seed, set trays and harvest 7–8-day-old fodder daily — about 1 hour."],
      },
      farmLink: {
        hi: ["नेपियर की जड़ें मेड़ की मिट्टी को कटने से बचाती हैं।", "हरा चारा → गाय/बकरी → गोबर → जीवामृत: पूरा चक्र खेत के अंदर।"],
        en: ["Napier roots stop bund soil from eroding.", "Green fodder → cow/goat → dung → Jeevamrit: the whole cycle stays on the farm."],
      },
      income: {
        value: { hi: "सीधी कमाई कम, बचत ज़्यादा", en: "Little direct income, big savings" },
        points: {
          hi: ["नेपियर की पहली कटाई 60–75 दिन में।", "दूध बढ़ता है और खरीदे दाने का खर्च घटता है।", "नेपियर की कलम और ज़्यादा चारा बेचा भी जा सकता है।"],
          en: ["First Napier cut in 60–75 days.", "Milk yield rises and bought-in feed costs fall.", "Napier slips and surplus fodder can also be sold."],
        },
      },
      risks: {
        hi: ["हाइड्रोपोनिक में फफूंद लगना — ट्रे की सफ़ाई और सही पानी।", "हाइड्रोपोनिक चारा अकेला पूरा आहार नहीं — सूखा चारा भी साथ दें।", "बिजली और पानी की नियमित ज़रूरत।"],
        en: ["Mould in hydroponic trays — keep trays clean and water correctly.", "Hydroponic fodder alone is not a complete diet — feed dry fodder too.", "Needs regular power and water."],
      },
    },
  },
  {
    slug: "polyhouse",
    icon: "🏠",
    title: { hi: "पॉलीहाउस (संरक्षित खेती, विकल्प)", en: "Polyhouse (protected farming, optional)" },
    summary: {
      hi: "मौसम की मार से सुरक्षित खेती। ओले, तेज़ गर्मी और बारिश में भी उत्पादन, और बेमौसम सब्ज़ी के ऊँचे दाम। अनुभव होने के बाद जोड़ने वाला मॉड्यूल।",
      en: "Farming protected from the weather. Production even in hail, extreme heat and rain, and high off-season prices. A module to add once you have experience.",
    },
    link: {
      hi: "ओले, 45°C गर्मी और बारिश में भी उत्पादन; self-pollinated बीज चाहिए",
      en: "Production even in hail, 45°C heat and rain; needs self-pollinated seed",
    },
    incomeType: {
      hi: "Off-season में ऊँचे दाम; 1–3 साल बाद जोड़ें",
      en: "High off-season prices; add after 1–3 years",
    },
    detail: {
      cost: {
        value: { hi: "₹8 – 12 लाख (1000 वर्ग मीटर)", en: "₹8 – 12 lakh (1000 sq m)" },
        points: {
          hi: [
            "ढाँचा, पॉली फ़िल्म, ड्रिप सिंचाई और फ़ॉगर/कूलिंग।",
            "बागवानी योजनाओं में पॉलीहाउस पर सब्सिडी मिलती है — राशि राज्य के अनुसार अलग।",
          ],
          en: [
            "Structure, poly film, drip irrigation and foggers/cooling.",
            "Horticulture schemes subsidise polyhouses — the amount varies by state.",
          ],
        },
      },
      space: {
        value: { hi: "लगभग 1000 वर्ग मीटर (¼ एकड़) समतल ज़मीन", en: "About 1000 sq m (¼ acre) of level land" },
        points: {
          hi: ["पानी का पक्का स्रोत और अच्छी सड़क के पास।", "तेज़ हवा वाली जगह से बचें।"],
          en: ["A reliable water source and good road access.", "Avoid very windy sites."],
        },
      },
      daily: {
        hi: ["3–4 घंटे — सिंचाई, तापमान-नमी पर नज़र, बेलों को बाँधना और तुड़ाई।", "प्रशिक्षण के बिना शुरू न करें।"],
        en: ["3–4 hours — irrigation, watching temperature and humidity, training vines and harvesting.", "Don't start without training."],
      },
      farmLink: {
        hi: [
          "पॉलीहाउस में मधुमक्खियाँ नहीं पहुँचतीं — इसलिए self-pollinated या बिना परागण फल देने वाली किस्मों के बीज चाहिए।",
          "पॉलीहाउस में भी जीवामृत, घनजीवामृत और मल्चिंग से प्राकृतिक तरीका अपनाया जा सकता है।",
          "नर्सरी पौध तैयार करके खुले खेत के लिए भी इस्तेमाल करें।",
        ],
        en: [
          "Bees can't reach inside a polyhouse — so you need self-pollinated or parthenocarpic varieties.",
          "Natural methods — Jeevamrit, Ghanjeevamrit and mulching — work inside a polyhouse too.",
          "Raise nursery seedlings for the open field as well.",
        ],
      },
      income: {
        value: { hi: "पहली फसल 3–4 महीने में, लेकिन लागत वसूली में 3–5 साल", en: "First crop in 3–4 months, but 3–5 years to recover cost" },
        points: {
          hi: ["शिमला मिर्च, खीरा, टमाटर, रंगीन मिर्च जैसी फसलें बेमौसम ऊँचे दाम पर।", "पहले 1–3 साल खुले खेत में प्राकृतिक खेती का अनुभव लें, फिर जोड़ें।"],
          en: ["Crops like capsicum, cucumber, tomato and coloured peppers fetch high off-season prices.", "Gain 1–3 years of open-field natural farming experience first, then add it."],
        },
      },
      risks: {
        hi: ["बड़ा निवेश — कर्ज़ लेकर शुरू करने से पहले बाज़ार पक्का करें।", "मिट्टी में निमेटोड और रोग बढ़ना — फसल चक्र ज़रूरी।", "आँधी से फ़िल्म फटना; हर 3–5 साल में फ़िल्म बदलनी पड़ती है।"],
        en: ["A big investment — secure a market before borrowing.", "Nematodes and soil diseases build up — rotate crops.", "Storms tear the film; it must be replaced every 3–5 years."],
      },
    },
  },
  {
    slug: "value-addition",
    icon: "📦",
    title: { hi: "मूल्य संवर्धन (Value Addition)", en: "Value addition" },
    summary: {
      hi: "कच्ची उपज बेचने की जगह उसे पैकेट वाले उत्पाद में बदलिए — हल्दी पाउडर, दाल, आटा, गुड़, अचार, घी। वही उपज, 2–3 गुना दाम।",
      en: "Instead of selling raw produce, turn it into packaged products — turmeric powder, dal, flour, jaggery, pickles, ghee. Same produce, 2–3 times the price.",
    },
    link: { hi: "उपज → पैकेट वाला उत्पाद", en: "Produce → packaged product" },
    incomeType: { hi: "उपज से 2–3 गुना दाम", en: "2–3 times the price of raw produce" },
    detail: {
      cost: {
        value: { hi: "₹20,000 – 3 लाख (उत्पाद के अनुसार)", en: "₹20,000 – 3 lakh (depends on product)" },
        points: {
          hi: [
            "छोटी मशीनें — आटा चक्की, मिनी दाल मिल, ग्राइंडर, पैकिंग/सीलिंग मशीन।",
            "FSSAI पंजीकरण, लेबल और पैकेजिंग।",
            "स्वयं सहायता समूह (SHG) या FPO के साथ मिलकर लागत बाँटी जा सकती है।",
          ],
          en: [
            "Small machines — flour mill, mini dal mill, grinder, packing/sealing machine.",
            "FSSAI registration, labels and packaging.",
            "Costs can be shared with a self-help group (SHG) or FPO.",
          ],
        },
      },
      space: {
        value: { hi: "एक साफ़, सूखा कमरा (150–300 वर्ग फुट)", en: "A clean, dry room (150–300 sq ft)" },
        points: {
          hi: ["सुखाने के लिए धूप वाली छत या सोलर ड्रायर।", "कच्चे माल और तैयार माल के लिए अलग जगह।"],
          en: ["A sunny roof or solar dryer for drying.", "Separate space for raw material and finished goods."],
        },
      },
      daily: {
        hi: ["काम बैच में होता है — फसल के बाद ज़्यादा, बाकी समय पैकिंग और बिक्री।", "ग्राहकों से संपर्क और ऑर्डर संभालना।"],
        en: ["Work happens in batches — heavy after harvest, otherwise packing and selling.", "Handling customer contact and orders."],
      },
      farmLink: {
        hi: ["छोटे, टूटे या दाग वाले फल-सब्ज़ी भी अचार, पाउडर या जैम में काम आ जाते हैं।", "प्रोसेसिंग का बचा हिस्सा (भूसी, छिलके) पशु-आहार या खाद बनता है।"],
        en: ["Small, broken or blemished produce goes into pickles, powders or jams.", "Processing leftovers (husk, peels) become feed or compost."],
      },
      income: {
        value: { hi: "पहली फसल के बाद से", en: "From the first harvest onwards" },
        points: {
          hi: ["प्राकृतिक खेती की कहानी और ब्रांड के साथ बेचने पर सबसे अच्छे दाम।", "सीधे ग्राहक, दुकानें, मेले और ऑनलाइन — कई रास्ते।"],
          en: ["Best prices when sold with the story and brand of natural farming.", "Direct customers, shops, fairs and online — many channels."],
        },
      },
      risks: {
        hi: ["FSSAI नियम, सही लेबल और शेल्फ़-लाइफ़ का ध्यान ज़रूरी।", "ब्रांड बनाने और बाज़ार ढूँढने में समय लगता है।", "कच्चा माल खरीदने और स्टॉक रखने के लिए पूँजी चाहिए।"],
        en: ["FSSAI rules, correct labels and shelf life need care.", "Building a brand and finding markets takes time.", "Working capital is needed to buy raw material and hold stock."],
      },
    },
  },
]

export const findModule = (slug) => modules.find((m) => m.slug === slug)
