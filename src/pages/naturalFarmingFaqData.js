// Content for the Natural Farming FAQ / deep-dive page.
// Bilingual (hi/en) to match the rest of the site. Each section is rendered
// by a small block renderer in NaturalFarmingFaqPage.jsx.

export const faqHero = {
  eyebrow: { hi: "सामान्य प्रश्न", en: "Common questions" },
  title: {
    hi: "प्राकृतिक खेती — आपके हर सवाल का जवाब",
    en: "Natural farming — answers to your questions",
  },
  text: {
    hi: "उत्पादन, समय, लागत और बिना गाय की खेती जैसे सबसे सामान्य सवालों को सरल भाषा में समझें।",
    en: "The most common questions about yield, timeline, cost, and cow-free farming — explained simply.",
  },
  image:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80",
}

// The four questions shown as cards on the Natural Farming page.
export const faqQuestions = [
  {
    id: "utpadan",
    num: "01",
    question: {
      hi: "क्या प्राकृतिक खेती में उत्पादन कम होता है?",
      en: "Does natural farming reduce yield?",
    },
  },
  {
    id: "samay",
    num: "02",
    question: {
      hi: "कितने समय में परिणाम मिलते हैं?",
      en: "How long does it take to see results?",
    },
  },
  {
    id: "bina-gaay",
    num: "03",
    question: {
      hi: "क्या बिना गाय के प्राकृतिक खेती संभव है?",
      en: "Is natural farming possible without a cow?",
    },
  },
  {
    id: "lagat",
    num: "04",
    question: {
      hi: "प्राकृतिक खेती में लागत कितनी आती है?",
      en: "What does natural farming cost?",
    },
  },
]

export const faqSections = [
  {
    id: "utpadan",
    num: "01",
    title: {
      hi: "क्या प्राकृतिक खेती में उत्पादन कम होता है?",
      en: "Does natural farming reduce yield?",
    },
    blocks: [
      {
        type: "callout",
        hi: 'यह प्राकृतिक खेती के बारे में सबसे सामान्य प्रश्न है। इसका उत्तर है — "शुरुआत में कुछ मामलों में हाँ, लेकिन लंबे समय में जरूरी नहीं।"',
        en: 'This is the most common question about natural farming. The answer is — "In some cases yes at first, but not necessarily in the long run."',
      },
      { type: "h4", hi: "पहले वर्ष में क्या होता है?", en: "What happens in the first year?" },
      {
        type: "p",
        hi: "यदि खेत कई वर्षों से रासायनिक उर्वरकों और कीटनाशकों पर निर्भर रहा है, तो प्राकृतिक खेती अपनाने के बाद मिट्टी को पुनर्जीवित होने में समय लगता है। इस दौरान कुछ फसलों में उत्पादन 10% से 30% तक कम हो सकता है।",
        en: "If a field has depended on chemical fertilisers and pesticides for years, the soil needs time to regenerate after switching to natural farming. During this period some crops may see a 10%–30% drop in yield.",
      },
      {
        type: "h4",
        hi: "दूसरे और तीसरे वर्ष में क्या होता है?",
        en: "What happens in the second and third year?",
      },
      {
        type: "ul",
        hi: [
          "मिट्टी में केंचुओं और लाभकारी सूक्ष्मजीवों की संख्या बढ़ने लगती है।",
          "मिट्टी की जल धारण क्षमता बढ़ती है।",
          "पौधों की जड़ें गहरी होने लगती हैं।",
          "उत्पादन धीरे-धीरे स्थिर होने लगता है।",
        ],
        en: [
          "Earthworms and beneficial microbes in the soil begin to multiply.",
          "The soil's water-holding capacity increases.",
          "Plant roots start to grow deeper.",
          "Yield gradually begins to stabilise.",
        ],
      },
      {
        type: "h4",
        hi: "केवल उत्पादन ही महत्वपूर्ण नहीं है",
        en: "Yield alone is not what matters",
      },
      {
        type: "p",
        hi: "रासायनिक खेती में किसान को अक्सर इन पर भारी खर्च करना पड़ता है:",
        en: "In chemical farming, a farmer often spends heavily on:",
      },
      {
        type: "ul",
        hi: ["यूरिया", "डीएपी", "पोटाश", "कीटनाशक", "खरपतवारनाशक"],
        en: ["Urea", "DAP", "Potash", "Pesticides", "Weedicides"],
      },
      {
        type: "callout",
        hi: "प्राकृतिक खेती में उत्पादन थोड़ा कम भी हो तो इनपुट लागत बहुत कम होने के कारण किसान का शुद्ध लाभ (Net Profit) अधिक हो सकता है।",
        en: "Even if yield is slightly lower in natural farming, the much lower input cost means the farmer's Net Profit can actually be higher.",
      },
      { type: "label", hi: "उदाहरण:", en: "Example:" },
      {
        type: "table",
        head: {
          hi: ["विवरण", "रासायनिक खेती", "प्राकृतिक खेती"],
          en: ["Detail", "Chemical farming", "Natural farming"],
        },
        rows: {
          hi: [
            ["उत्पादन", "100 क्विंटल", "90 क्विंटल"],
            ["खर्च", "₹50,000", "₹10,000"],
            ["बिक्री मूल्य", "समान", "समान या अधिक"],
            ["शुद्ध लाभ", "कम", "अधिक"],
          ],
          en: [
            ["Yield", "100 quintal", "90 quintal"],
            ["Cost", "₹50,000", "₹10,000"],
            ["Selling price", "Same", "Same or higher"],
            ["Net profit", "Lower", "Higher"],
          ],
        },
      },
      {
        type: "p",
        hi: "इसलिए केवल उत्पादन नहीं, बल्कि आय और लाभ देखना चाहिए।",
        en: "So you should look at income and profit, not just yield.",
      },
    ],
  },
  {
    id: "samay",
    num: "02",
    title: {
      hi: "कितने समय में परिणाम मिलते हैं?",
      en: "How long does it take to see results?",
    },
    blocks: [
      {
        type: "p",
        hi: "प्राकृतिक खेती कोई जादू नहीं है कि एक महीने में मिट्टी बदल जाए। यह मिट्टी को पुनर्जीवित करने की प्रक्रिया है।",
        en: "Natural farming is not magic that transforms the soil in a month. It is a process of bringing the soil back to life.",
      },
      { type: "h4", hi: "3 से 6 महीने", en: "3 to 6 months" },
      {
        type: "ul",
        hi: [
          "मिट्टी नरम होने लगती है।",
          "सिंचाई की आवश्यकता थोड़ी कम होने लगती है।",
          "केंचुए दिखाई देने लगते हैं।",
          "रासायनिक खाद की निर्भरता घटने लगती है।",
        ],
        en: [
          "The soil starts to soften.",
          "Irrigation needs begin to drop a little.",
          "Earthworms start to appear.",
          "Dependence on chemical fertiliser begins to fall.",
        ],
      },
      { type: "h4", hi: "6 महीने से 1 वर्ष", en: "6 months to 1 year" },
      {
        type: "ul",
        hi: [
          "फसलों की गुणवत्ता बेहतर होती है।",
          "रोग और कीट का दबाव कम होने लगता है।",
          "मिट्टी में जैविक गतिविधि बढ़ती है।",
        ],
        en: [
          "Crop quality improves.",
          "Disease and pest pressure begins to ease.",
          "Biological activity in the soil increases.",
        ],
      },
      { type: "h4", hi: "1 से 3 वर्ष", en: "1 to 3 years" },
      {
        type: "ul",
        hi: [
          "मिट्टी की संरचना मजबूत होती है।",
          "पानी बचने लगता है।",
          "उत्पादन स्थिर होने लगता है।",
          "खेती की लागत काफी घट जाती है।",
        ],
        en: [
          "Soil structure grows stronger.",
          "Water starts to be saved.",
          "Yield begins to stabilise.",
          "Farming cost drops considerably.",
        ],
      },
      { type: "h4", hi: "3 से 5 वर्ष", en: "3 to 5 years" },
      {
        type: "ul",
        hi: [
          "खेत एक प्राकृतिक पारिस्थितिकी तंत्र (Ecosystem) की तरह काम करने लगता है।",
          "सूखा और अधिक वर्षा जैसी परिस्थितियों को बेहतर ढंग से सहन करता है।",
          "मिट्टी की उर्वरता लगातार बढ़ती रहती है।",
        ],
        en: [
          "The field starts to behave like a natural ecosystem.",
          "It withstands drought and heavy rainfall far better.",
          "Soil fertility keeps improving year after year.",
        ],
      },
    ],
  },
  {
    id: "bina-gaay",
    num: "03",
    title: {
      hi: "क्या बिना गाय के प्राकृतिक खेती संभव है?",
      en: "Is natural farming possible without a cow?",
    },
    blocks: [
      { type: "h4", hi: "हाँ, बिल्कुल संभव है।", en: "Yes, absolutely." },
      {
        type: "p",
        hi: "बहुत से लोग मानते हैं कि प्राकृतिक खेती केवल गाय से ही हो सकती है। यह पूरी तरह सही नहीं है।",
        en: "Many people believe natural farming is only possible with a cow. That is not entirely true.",
      },
      { type: "h4", hi: "गाय होने के फायदे", en: "Benefits of having a cow" },
      {
        type: "p",
        hi: "देशी गाय से मिलता है:",
        en: "A native cow provides:",
      },
      {
        type: "ul",
        hi: ["गोबर", "गोमूत्र", "जीवामृत बनाने की सामग्री", "घनजीवामृत", "पंचगव्य"],
        en: ["Dung", "Cow urine", "Ingredients for making Jeevamrit", "Ghanjeevamrit", "Panchgavya"],
      },
      {
        type: "p",
        hi: "इससे खेत के लिए जैविक इनपुट आसानी से उपलब्ध हो जाते हैं।",
        en: "This makes organic inputs for the field easily available.",
      },
      { type: "h4", hi: "यदि गाय नहीं है तो क्या करें?", en: "What if you don't have a cow?" },
      {
        type: "p",
        hi: "निम्न संसाधनों का उपयोग किया जा सकता है:",
        en: "The following resources can be used:",
      },
      {
        type: "steps",
        items: {
          hi: [
            { t: "कम्पोस्ट", d: "फसल अवशेष, पत्तियां और जैविक कचरे से।" },
            { t: "वर्मी कम्पोस्ट", d: "केंचुओं द्वारा तैयार जैविक खाद।" },
            { t: "हरी खाद", d: "ढैंचा, सन, मूंग, उड़द।" },
            { t: "फसल अवशेष", d: "धान का पुआल, गेहूं का भूसा, सूखी पत्तियां।" },
            { t: "स्थानीय गोबर", d: "पास के पशुपालकों से गोबर लिया जा सकता है।" },
            { t: "जैव उर्वरक", d: "एजोटोबैक्टर, पीएसबी, राइजोबियम।" },
          ],
          en: [
            { t: "Compost", d: "From crop residue, leaves and organic waste." },
            { t: "Vermicompost", d: "Organic manure prepared by earthworms." },
            { t: "Green manure", d: "Dhaincha, sunn hemp, moong, urad." },
            { t: "Crop residue", d: "Paddy straw, wheat husk, dry leaves." },
            { t: "Local dung", d: "Dung can be sourced from nearby cattle owners." },
            { t: "Bio-fertilisers", d: "Azotobacter, PSB, Rhizobium." },
          ],
        },
      },
      { type: "h4", hi: "सबसे महत्वपूर्ण क्या है?", en: "What matters most?" },
      {
        type: "p",
        hi: "प्राकृतिक खेती का मूल सिद्धांत है:",
        en: "The core principle of natural farming is:",
      },
      {
        type: "quote",
        hi: "मिट्टी को जीवित बनाना, जैव विविधता बढ़ाना और बाहरी लागत कम करना।",
        en: "Bring the soil to life, increase biodiversity, and reduce external cost.",
      },
      {
        type: "p",
        hi: "यह कार्य गाय के साथ भी किया जा सकता है और कई मामलों में बिना गाय के भी।",
        en: "This can be done with a cow — and in many cases, without one too.",
      },
    ],
  },
  {
    id: "lagat",
    num: "04",
    title: {
      hi: "प्राकृतिक खेती में लागत कितनी आती है?",
      en: "What does natural farming cost?",
    },
    blocks: [
      {
        type: "p",
        hi: "प्राकृतिक खेती की सबसे बड़ी ताकत इसकी कम लागत है।",
        en: "The greatest strength of natural farming is its low cost.",
      },
      { type: "h4", hi: "रासायनिक खेती में खर्च", en: "Cost in chemical farming" },
      {
        type: "p",
        hi: "एक एकड़ खेत में सामान्यतः खर्च:",
        en: "Typical cost for one acre:",
      },
      {
        type: "table",
        head: { hi: ["मद", "अनुमानित खर्च"], en: ["Item", "Estimated cost"] },
        rows: {
          hi: [
            ["बीज", "₹2,000–5,000"],
            ["यूरिया, डीएपी", "₹4,000–10,000"],
            ["कीटनाशक", "₹3,000–8,000"],
            ["खरपतवारनाशक", "₹2,000–5,000"],
            ["सिंचाई", "₹2,000–8,000"],
            ["कुल", "₹15,000–35,000+"],
          ],
          en: [
            ["Seeds", "₹2,000–5,000"],
            ["Urea, DAP", "₹4,000–10,000"],
            ["Pesticides", "₹3,000–8,000"],
            ["Weedicides", "₹2,000–5,000"],
            ["Irrigation", "₹2,000–8,000"],
            ["Total", "₹15,000–35,000+"],
          ],
        },
      },
      { type: "h4", hi: "प्राकृतिक खेती में खर्च", en: "Cost in natural farming" },
      {
        type: "table",
        head: { hi: ["मद", "अनुमानित खर्च"], en: ["Item", "Estimated cost"] },
        rows: {
          hi: [
            ["बीज", "₹2,000–5,000"],
            ["जीवामृत/कम्पोस्ट", "₹500–2,000"],
            ["मल्चिंग सामग्री", "स्थानीय उपलब्ध"],
            ["जैविक घोल", "₹500–1,500"],
            ["कुल", "₹3,000–10,000"],
          ],
          en: [
            ["Seeds", "₹2,000–5,000"],
            ["Jeevamrit/Compost", "₹500–2,000"],
            ["Mulching material", "Locally available"],
            ["Organic solution", "₹500–1,500"],
            ["Total", "₹3,000–10,000"],
          ],
        },
      },
      { type: "h4", hi: "लागत में कितनी कमी?", en: "How much does cost fall?" },
      {
        type: "ul",
        hi: [
          "50% से 90% तक कमी संभव।",
          "कई किसान बाहरी खाद और कीटनाशकों की खरीद लगभग बंद कर देते हैं।",
          "लाभांश (Profit Margin) बढ़ जाता है।",
        ],
        en: [
          "A 50%–90% reduction is possible.",
          "Many farmers almost stop buying external fertiliser and pesticides.",
          "The profit margin goes up.",
        ],
      },
    ],
  },
  {
    id: "shuruaat",
    num: "05",
    title: {
      hi: "प्राकृतिक खेती की शुरुआत कैसे करें?",
      en: "How do I start natural farming?",
    },
    blocks: [
      {
        type: "p",
        hi: "सबसे बड़ी गलती है पूरे खेत को एक साथ बदल देना। शुरुआत छोटे टुकड़े से करें, सीखें और फिर धीरे-धीरे क्षेत्र बढ़ाएँ।",
        en: "The biggest mistake is converting the whole farm at once. Start with a small plot, learn from it, and then expand step by step.",
      },
      { type: "h4", hi: "पहले सीज़न के कदम", en: "Steps for the first season" },
      {
        type: "steps",
        items: {
          hi: [
            { t: "खेत का छोटा हिस्सा चुनें", d: "आधा या एक एकड़ — ऐसा टुकड़ा जिसे आप रोज़ देख सकें।" },
            { t: "गोबर-गोमूत्र की व्यवस्था", d: "अपनी गाय, पड़ोसी या पास की गोशाला से नियमित आपूर्ति तय करें।" },
            { t: "घनजीवामृत तैयार रखें", d: "बुवाई से पहले खेत में डालने के लिए सूखा घनजीवामृत बना लें।" },
            { t: "बीजामृत से बीज उपचार", d: "बुवाई से एक दिन पहले बीजों को बीजामृत से उपचारित करें।" },
            { t: "जीवामृत का चक्र शुरू करें", d: "हर 15 दिन पर सिंचाई के साथ जीवामृत देने की आदत डालें।" },
            { t: "मल्चिंग और मिश्रित फसल", d: "मिट्टी ढकें और मुख्य फसल के साथ दलहन या मेड़ की फसल लगाएँ।" },
          ],
          en: [
            { t: "Choose a small plot", d: "Half an acre or one acre — a plot you can watch every day." },
            { t: "Arrange dung and urine", d: "Fix a regular supply from your own cow, a neighbour or a nearby gaushala." },
            { t: "Keep Ghanjeevamrit ready", d: "Prepare dry Ghanjeevamrit to apply in the field before sowing." },
            { t: "Treat seeds with Beejamrit", d: "Treat seeds with Beejamrit one day before sowing." },
            { t: "Start the Jeevamrit cycle", d: "Make a habit of giving Jeevamrit with irrigation every 15 days." },
            { t: "Mulch and mix crops", d: "Cover the soil and grow a pulse or border crop alongside the main crop." },
          ],
        },
      },
      {
        type: "callout",
        hi: "पहले साल का लक्ष्य अधिकतम उत्पादन नहीं, बल्कि सीखना और मिट्टी को जगाना होना चाहिए। एक डायरी में हर काम और उसका असर लिखते रहें।",
        en: "The goal of the first year should not be maximum yield, but learning and waking up the soil. Keep a diary of every task and its effect.",
      },
      { type: "h4", hi: "किससे मदद लें?", en: "Where can I get help?" },
      {
        type: "ul",
        hi: [
          "नज़दीकी कृषि विज्ञान केंद्र (KVK) और ब्लॉक कृषि अधिकारी।",
          "आपके इलाके में पहले से प्राकृतिक खेती कर रहे किसान — उनके खेत पर जाकर देखें।",
          "प्राकृतिक खेती पर लगने वाले प्रशिक्षण शिविर।",
        ],
        en: [
          "Your nearest Krishi Vigyan Kendra (KVK) and block agriculture officer.",
          "Farmers in your area who already practise natural farming — visit their fields.",
          "Training camps held on natural farming.",
        ],
      },
    ],
  },
  {
    id: "keet-rog",
    num: "06",
    title: {
      hi: "बिना रसायन के कीट और रोगों का नियंत्रण कैसे करें?",
      en: "How do I control pests and diseases without chemicals?",
    },
    blocks: [
      {
        type: "p",
        hi: "प्राकृतिक खेती में पहला बचाव स्वस्थ मिट्टी और मज़बूत पौधा है। जब पौधे को संतुलित पोषण मिलता है और खेत में मित्र कीट होते हैं, तो कीटों का हमला अपने आप कम हो जाता है। फिर भी ज़रूरत पड़ने पर घर पर बने ये घोल काम आते हैं।",
        en: "In natural farming the first line of defence is healthy soil and a strong plant. When plants get balanced nutrition and the field has friendly insects, pest attacks fall on their own. When needed, these home-made sprays help.",
      },
      {
        type: "table",
        head: {
          hi: ["घोल", "मुख्य सामग्री", "किस पर असरदार"],
          en: ["Spray", "Main ingredients", "Works against"],
        },
        rows: {
          hi: [
            ["नीमास्त्र", "नीम की पत्तियाँ, गोमूत्र, गोबर, पानी", "रस चूसने वाले कीट, छोटी इल्लियाँ"],
            ["ब्रह्मास्त्र", "गोमूत्र में उबाली नीम, सीताफल, पपीता, अमरूद, अनार की पत्तियाँ", "बड़ी इल्लियाँ, तना और फल छेदक"],
            ["अग्निअस्त्र", "गोमूत्र, नीम, तंबाकू, हरी मिर्च, लहसुन", "तना छेदक, फल छेदक, कठोर कीट"],
            ["दशपर्णी अर्क", "दस तरह की कड़वी/गंध वाली पत्तियाँ, गोमूत्र, गोबर", "लगभग सभी तरह के कीट"],
            ["खट्टी छाछ", "कुछ दिन पुरानी खट्टी छाछ, पानी", "फफूंद से होने वाले रोग"],
          ],
          en: [
            ["Neemastra", "Neem leaves, cow urine, dung, water", "Sucking pests, small caterpillars"],
            ["Brahmastra", "Neem, custard apple, papaya, guava, pomegranate leaves boiled in cow urine", "Large caterpillars, stem and fruit borers"],
            ["Agniastra", "Cow urine, neem, tobacco, green chilli, garlic", "Stem borers, fruit borers, tough pests"],
            ["Dashparni ark", "Ten kinds of bitter/strong-smelling leaves, cow urine, dung", "Most kinds of pests"],
            ["Sour buttermilk", "Buttermilk soured for a few days, water", "Fungal diseases"],
          ],
        },
      },
      { type: "h4", hi: "नीमास्त्र बनाने की विधि", en: "How to make Neemastra" },
      {
        type: "steps",
        items: {
          hi: [
            { t: "पत्तियाँ कूटें", d: "5 किलो नीम की हरी पत्तियाँ या टहनियाँ कूट लें।" },
            { t: "मिलाएँ", d: "100 लीटर पानी में 5 लीटर गोमूत्र और 1 किलो गोबर के साथ मिलाएँ।" },
            { t: "रखें", d: "ढककर 24 से 48 घंटे छाँव में रखें, बीच-बीच में घोलते रहें।" },
            { t: "छानकर छिड़कें", d: "कपड़े से छानकर बिना और पानी मिलाए फसल पर छिड़काव करें।" },
          ],
          en: [
            { t: "Crush the leaves", d: "Crush 5 kg of fresh neem leaves or twigs." },
            { t: "Mix", d: "Mix into 100 litres of water with 5 litres of cow urine and 1 kg of dung." },
            { t: "Rest", d: "Keep covered in shade for 24–48 hours, stirring now and then." },
            { t: "Filter and spray", d: "Filter through cloth and spray on the crop without further dilution." },
          ],
        },
      },
      {
        type: "callout",
        hi: "कोई भी घोल पहली बार पूरे खेत में डालने से पहले कुछ पौधों पर आज़माएँ। छिड़काव सुबह जल्दी या शाम को करें, तेज़ धूप में नहीं।",
        en: "Before using any spray on the whole field for the first time, test it on a few plants. Spray early in the morning or in the evening, not in strong sun.",
      },
      { type: "h4", hi: "बचाव के अन्य तरीके", en: "Other ways to prevent pests" },
      {
        type: "ul",
        hi: [
          "मेड़ पर गेंदा, सरसों या ज्वार जैसी ट्रैप फसलें लगाएँ।",
          "पीले और नीले चिपचिपे ट्रैप (Sticky traps) और फेरोमोन ट्रैप लगाएँ।",
          "पक्षियों के बैठने के लिए खेत में T-आकार की खूँटियाँ गाड़ें।",
          "एक ही फसल बार-बार न लगाएँ — फसल चक्र अपनाएँ।",
        ],
        en: [
          "Plant trap crops such as marigold, mustard or sorghum on the bunds.",
          "Use yellow and blue sticky traps and pheromone traps.",
          "Put up T-shaped perches in the field for birds.",
          "Don't grow the same crop again and again — follow crop rotation.",
        ],
      },
    ],
  },
  {
    id: "kharpatwar",
    num: "07",
    title: {
      hi: "बिना खरपतवारनाशक के खरपतवार का क्या करें?",
      en: "How do I manage weeds without weedicides?",
    },
    blocks: [
      {
        type: "p",
        hi: "प्राकृतिक खेती में खरपतवार को पूरी तरह दुश्मन नहीं माना जाता। सीमित मात्रा में ये मिट्टी को ढकते हैं और सूक्ष्मजीवों को भोजन देते हैं। लक्ष्य उन्हें खत्म करना नहीं, बल्कि नियंत्रण में रखना है ताकि वे मुख्य फसल से मुकाबला न करें।",
        en: "In natural farming weeds are not treated as pure enemies. In limited numbers they cover the soil and feed microbes. The goal is not to wipe them out, but to keep them under control so they don't compete with the main crop.",
      },
      {
        type: "steps",
        items: {
          hi: [
            { t: "मोटी मल्चिंग", d: "पुआल या फसल अवशेष की मोटी परत धूप रोकती है, जिससे खरपतवार कम उगते हैं।" },
            { t: "जीवित आवरण", d: "मूंग, उड़द या लोबिया जैसी फसलें खाली जगह भर देती हैं।" },
            { t: "घनी और मिश्रित बुवाई", d: "जब ज़मीन फसलों से ढकी हो तो खरपतवार को जगह नहीं मिलती।" },
            { t: "समय पर निराई", d: "बुवाई के 20–40 दिन के बीच हाथ या कुदाल से एक-दो बार निराई सबसे असरदार है।" },
            { t: "उखाड़े खरपतवार को मल्च बनाएँ", d: "फूल आने से पहले उखाड़कर वहीं बिछा दें — ये खाद बन जाते हैं।" },
          ],
          en: [
            { t: "Thick mulch", d: "A thick layer of straw or crop residue blocks sunlight, so fewer weeds sprout." },
            { t: "Living cover", d: "Crops like moong, urad or cowpea fill the empty spaces." },
            { t: "Dense, mixed sowing", d: "When the ground is covered by crops, weeds find no room." },
            { t: "Timely weeding", d: "One or two hand or hoe weedings between 20–40 days after sowing work best." },
            { t: "Turn pulled weeds into mulch", d: "Pull them before they flower and lay them on the spot — they become manure." },
          ],
        },
      },
      {
        type: "callout",
        hi: "खरपतवार कभी न जलाएँ। जलाने से मिट्टी के सूक्ष्मजीव और जैविक कार्बन दोनों नष्ट होते हैं।",
        en: "Never burn weeds. Burning destroys both soil microbes and organic carbon.",
      },
    ],
  },
  {
    id: "jeevamrit-vidhi",
    num: "08",
    title: {
      hi: "जीवामृत कैसे बनाएँ और कैसे डालें?",
      en: "How do I make and apply Jeevamrit?",
    },
    blocks: [
      {
        type: "p",
        hi: "जीवामृत प्राकृतिक खेती का सबसे ज़रूरी इनपुट है। यह मिट्टी में लाभकारी सूक्ष्मजीवों की संख्या कई गुना बढ़ाता है। एक एकड़ के लिए सामग्री:",
        en: "Jeevamrit is the most important input in natural farming. It multiplies beneficial microbes in the soil. Ingredients for one acre:",
      },
      {
        type: "table",
        head: { hi: ["सामग्री", "मात्रा"], en: ["Ingredient", "Quantity"] },
        rows: {
          hi: [
            ["पानी", "200 लीटर"],
            ["देशी गाय का ताज़ा गोबर", "10 किलो"],
            ["देशी गाय का गोमूत्र", "5–10 लीटर"],
            ["गुड़", "1–2 किलो"],
            ["बेसन (किसी भी दाल का आटा)", "1–2 किलो"],
            ["मेड़ या पेड़ के नीचे की मिट्टी", "1 मुट्ठी"],
          ],
          en: [
            ["Water", "200 litres"],
            ["Fresh native cow dung", "10 kg"],
            ["Native cow urine", "5–10 litres"],
            ["Jaggery", "1–2 kg"],
            ["Pulse flour (any pulse)", "1–2 kg"],
            ["Soil from a bund or under a tree", "1 handful"],
          ],
        },
      },
      {
        type: "steps",
        items: {
          hi: [
            { t: "ड्रम में मिलाएँ", d: "प्लास्टिक के ड्रम में सारी सामग्री पानी में अच्छी तरह घोलें।" },
            { t: "छाँव में रखें", d: "ड्रम को जूट की बोरी से ढककर छाँव में रखें, धूप में नहीं।" },
            { t: "दिन में दो बार घोलें", d: "सुबह-शाम लकड़ी के डंडे से घड़ी की दिशा में 1–2 मिनट घोलें।" },
            { t: "2 से 7 दिन में तैयार", d: "गर्मी में 2–3 दिन और ठंड में 5–7 दिन में घोल तैयार हो जाता है।" },
          ],
          en: [
            { t: "Mix in a drum", d: "Dissolve all ingredients well in water in a plastic drum." },
            { t: "Keep in shade", d: "Cover the drum with a jute sack and keep it in shade, not sunlight." },
            { t: "Stir twice a day", d: "Stir clockwise with a wooden stick for 1–2 minutes morning and evening." },
            { t: "Ready in 2 to 7 days", d: "It is ready in 2–3 days in summer and 5–7 days in winter." },
          ],
        },
      },
      { type: "h4", hi: "कैसे और कब डालें?", en: "How and when to apply?" },
      {
        type: "ul",
        hi: [
          "200 लीटर जीवामृत प्रति एकड़, सिंचाई के पानी के साथ, हर 15 दिन पर।",
          "पत्तियों पर छिड़काव के लिए छना हुआ जीवामृत पानी में 5–10% मिलाकर।",
          "तैयार होने के बाद लगभग 7 दिन के अंदर इस्तेमाल करें — उसके बाद असर घटने लगता है।",
        ],
        en: [
          "200 litres per acre with irrigation water, every 15 days.",
          "For a foliar spray, mix filtered Jeevamrit into water at 5–10%.",
          "Use it within about 7 days of being ready — after that its strength starts to fall.",
        ],
      },
    ],
  },
  {
    id: "ghanjeevamrit",
    num: "09",
    title: {
      hi: "घनजीवामृत क्या है और इसे कैसे बनाएँ?",
      en: "What is Ghanjeevamrit and how is it made?",
    },
    blocks: [
      {
        type: "p",
        hi: "घनजीवामृत जीवामृत का सूखा रूप है। इसे महीनों तक रखा जा सकता है, इसलिए यह बुवाई के समय या जहाँ तरल जीवामृत देना मुश्किल हो, वहाँ बहुत काम आता है।",
        en: "Ghanjeevamrit is the dry form of Jeevamrit. It can be stored for months, so it is very useful at sowing time or where liquid Jeevamrit is hard to apply.",
      },
      {
        type: "steps",
        items: {
          hi: [
            { t: "सामग्री", d: "100 किलो देशी गाय का गोबर, 1 किलो गुड़, 1 किलो बेसन और 1 मुट्ठी मेड़ की मिट्टी।" },
            { t: "मिलाएँ", d: "सबको अच्छी तरह मिलाएँ, ज़रूरत हो तो थोड़ा गोमूत्र छिड़कें ताकि मिश्रण गूँथा जा सके।" },
            { t: "छाँव में फैलाएँ", d: "मिश्रण को छाँव में ढेर बनाकर 48 घंटे जूट की बोरी से ढक दें।" },
            { t: "सुखाकर रखें", d: "फिर पतला फैलाकर सुखाएँ, तोड़कर बोरियों में भरें। यह 6 महीने तक काम करता है।" },
          ],
          en: [
            { t: "Ingredients", d: "100 kg native cow dung, 1 kg jaggery, 1 kg pulse flour and a handful of bund soil." },
            { t: "Mix", d: "Mix everything well, sprinkling a little cow urine if needed so it can be kneaded." },
            { t: "Heap in shade", d: "Heap the mix in shade and cover it with a jute sack for 48 hours." },
            { t: "Dry and store", d: "Then spread it thin to dry, break it up and fill sacks. It keeps for up to 6 months." },
          ],
        },
      },
      {
        type: "callout",
        hi: "बुवाई के समय 100–200 किलो घनजीवामृत प्रति एकड़ खेत में मिलाएँ। फल वाले पेड़ों में इसे तने के चारों ओर छतरी की परिधि में डालें।",
        en: "At sowing, mix 100–200 kg of Ghanjeevamrit per acre into the field. For fruit trees, apply it in a ring along the edge of the canopy.",
      },
    ],
  },
  {
    id: "fasal",
    num: "10",
    title: {
      hi: "किन फसलों में प्राकृतिक खेती सफल है?",
      en: "Which crops work well with natural farming?",
    },
    blocks: [
      {
        type: "p",
        hi: "लगभग हर फसल प्राकृतिक तरीके से उगाई जा सकती है। देश भर में किसान इन फसलों में अच्छे परिणाम ले रहे हैं:",
        en: "Almost every crop can be grown the natural way. Across the country farmers are getting good results with these crops:",
      },
      {
        type: "table",
        head: { hi: ["फसल समूह", "उदाहरण"], en: ["Crop group", "Examples"] },
        rows: {
          hi: [
            ["अनाज", "धान, गेहूँ, मक्का, बाजरा, ज्वार, रागी"],
            ["दलहन", "अरहर, मूंग, उड़द, चना, मसूर"],
            ["सब्ज़ियाँ", "टमाटर, बैंगन, भिंडी, लौकी, पत्तेदार सब्ज़ियाँ"],
            ["फल", "आम, केला, अमरूद, पपीता, लीची"],
            ["मसाले", "हल्दी, अदरक, मिर्च, लहसुन"],
          ],
          en: [
            ["Cereals", "Paddy, wheat, maize, pearl millet, sorghum, ragi"],
            ["Pulses", "Pigeon pea, moong, urad, chickpea, lentil"],
            ["Vegetables", "Tomato, brinjal, okra, bottle gourd, leafy greens"],
            ["Fruits", "Mango, banana, guava, papaya, litchi"],
            ["Spices", "Turmeric, ginger, chilli, garlic"],
          ],
        },
      },
      { type: "h4", hi: "शुरुआत के लिए आसान फसलें", en: "Easy crops to start with" },
      {
        type: "ul",
        hi: [
          "दलहन — ये खुद हवा से नाइट्रोजन लेती हैं, इसलिए कम इनपुट में अच्छी होती हैं।",
          "मोटे अनाज (बाजरा, ज्वार, रागी) — कम पानी और कम पोषण में भी टिकते हैं।",
          "घर के लिए सब्ज़ियाँ — छोटे क्षेत्र में जल्दी परिणाम दिखते हैं।",
        ],
        en: [
          "Pulses — they fix nitrogen from the air, so they do well with few inputs.",
          "Millets (pearl millet, sorghum, ragi) — they survive on little water and nutrition.",
          "Vegetables for the household — a small area shows results quickly.",
        ],
      },
      {
        type: "callout",
        hi: "हाइब्रिड की जगह देशी और स्थानीय किस्मों के बीज चुनें। ये प्राकृतिक परिस्थितियों में ज़्यादा मज़बूत रहते हैं और अगले साल के लिए बीज भी बचाया जा सकता है।",
        en: "Choose native and local varieties instead of hybrids. They are hardier under natural conditions, and you can save seed for next year.",
      },
    ],
  },
  {
    id: "bazaar",
    num: "11",
    title: {
      hi: "प्राकृतिक उपज कहाँ और कैसे बेचें?",
      en: "Where and how do I sell natural produce?",
    },
    blocks: [
      {
        type: "p",
        hi: "प्राकृतिक उपज को सामान्य मंडी में बेचने पर अक्सर उतना ही दाम मिलता है जितना रासायनिक उपज को। बेहतर दाम के लिए ग्राहक तक सीधे पहुँचना ज़रूरी है।",
        en: "Selling natural produce in a regular mandi often fetches the same price as chemical produce. To get a better price you need to reach the buyer directly.",
      },
      {
        type: "steps",
        items: {
          hi: [
            { t: "सीधे ग्राहक को", d: "आस-पास के शहर के परिवारों को नियमित रूप से सब्ज़ी, अनाज या दाल पहुँचाएँ।" },
            { t: "किसान बाज़ार और हाट", d: "कई शहरों में जैविक/प्राकृतिक उत्पादों के साप्ताहिक बाज़ार लगते हैं।" },
            { t: "किसान उत्पादक संगठन (FPO)", d: "समूह में बेचने से मात्रा बढ़ती है और बड़े खरीदार मिलते हैं।" },
            { t: "मूल्य संवर्धन", d: "दाल, आटा, गुड़, हल्दी पाउडर या अचार बनाकर बेचने से दाम कई गुना बढ़ता है।" },
            { t: "सोशल मीडिया", d: "WhatsApp ग्रुप और सोशल मीडिया से अपने खेत की कहानी और फोटो साझा करें।" },
          ],
          en: [
            { t: "Direct to customers", d: "Supply vegetables, grains or pulses regularly to families in a nearby town." },
            { t: "Farmers' markets and haats", d: "Many cities hold weekly markets for organic/natural produce." },
            { t: "Farmer Producer Organisations (FPO)", d: "Selling as a group increases volume and brings bigger buyers." },
            { t: "Value addition", d: "Selling dal, flour, jaggery, turmeric powder or pickles multiplies the price." },
            { t: "Social media", d: "Share your farm's story and photos on WhatsApp groups and social media." },
          ],
        },
      },
      { type: "h4", hi: "प्रमाणन (Certification)", en: "Certification" },
      {
        type: "p",
        hi: "ग्राहक का भरोसा जीतने के लिए PGS-India (भागीदारी गारंटी प्रणाली) जैसा समूह-आधारित प्रमाणन मदद करता है। यह किसानों के समूह द्वारा किया जाता है और तीसरे पक्ष के प्रमाणन से काफी सस्ता होता है। निर्यात के लिए NPOP के तहत प्रमाणन ज़रूरी होता है। अपने ज़िले के कृषि विभाग से इसकी जानकारी लें।",
        en: "Group-based certification such as PGS-India (Participatory Guarantee System) helps win the buyer's trust. It is done by a group of farmers and is much cheaper than third-party certification. For export, certification under NPOP is required. Ask your district agriculture department for details.",
      },
    ],
  },
  {
    id: "sarkari-sahayata",
    num: "12",
    title: {
      hi: "क्या सरकार से कोई सहायता मिलती है?",
      en: "Is there any support from the government?",
    },
    blocks: [
      {
        type: "p",
        hi: "हाँ। केंद्र और कई राज्य सरकारें प्राकृतिक खेती को बढ़ावा दे रही हैं। केंद्र सरकार ने नवंबर 2024 में राष्ट्रीय प्राकृतिक खेती मिशन (National Mission on Natural Farming) को मंज़ूरी दी, जिसके तहत:",
        en: "Yes. The central government and many state governments are promoting natural farming. In November 2024 the central government approved the National Mission on Natural Farming, under which:",
      },
      {
        type: "ul",
        hi: [
          "किसानों के क्लस्टर बनाकर उन्हें प्रशिक्षण दिया जाता है।",
          "गाँवों के पास जैव-इनपुट संसाधन केंद्र (Bio-input Resource Centres) बनाए जा रहे हैं, जहाँ से तैयार जीवामृत जैसे इनपुट मिल सकें।",
          "कृषि सखियाँ और प्रशिक्षित स्थानीय लोग किसानों को खेत पर मार्गदर्शन देते हैं।",
          "प्राकृतिक उपज के प्रमाणन और ब्रांडिंग में मदद दी जाती है।",
        ],
        en: [
          "Farmers are organised into clusters and trained.",
          "Bio-input Resource Centres are being set up near villages, where ready inputs like Jeevamrit can be obtained.",
          "Krishi Sakhis and trained local people guide farmers in the field.",
          "Help is given with certification and branding of natural produce.",
        ],
      },
      {
        type: "p",
        hi: "इसके अलावा आंध्र प्रदेश, हिमाचल प्रदेश, गुजरात जैसे कई राज्यों की अपनी प्राकृतिक खेती योजनाएँ हैं।",
        en: "In addition, several states such as Andhra Pradesh, Himachal Pradesh and Gujarat run their own natural farming programmes.",
      },
      {
        type: "callout",
        hi: "योजनाओं की शर्तें और राशि समय-समय पर बदलती रहती हैं। ताज़ा जानकारी के लिए अपने कृषि विज्ञान केंद्र (KVK), ब्लॉक कृषि अधिकारी या राज्य कृषि विभाग से संपर्क करें।",
        en: "Scheme rules and amounts change from time to time. For the latest information, contact your Krishi Vigyan Kendra (KVK), block agriculture officer or state agriculture department.",
      },
    ],
  },
  {
    id: "jaivik-antar",
    num: "13",
    title: {
      hi: "प्राकृतिक खेती और जैविक खेती में क्या अंतर है?",
      en: "What is the difference between natural and organic farming?",
    },
    blocks: [
      {
        type: "p",
        hi: "दोनों में रासायनिक खाद और कीटनाशक का उपयोग नहीं होता, इसलिए लोग अक्सर इन्हें एक ही मान लेते हैं। लेकिन तरीके और लागत में बड़ा अंतर है।",
        en: "Neither uses chemical fertilisers or pesticides, so people often think they are the same. But there is a big difference in method and cost.",
      },
      {
        type: "table",
        head: {
          hi: ["पहलू", "जैविक खेती", "प्राकृतिक खेती"],
          en: ["Aspect", "Organic farming", "Natural farming"],
        },
        rows: {
          hi: [
            ["इनपुट", "बाज़ार से खरीदे जैविक इनपुट भी चलते हैं", "लगभग सभी इनपुट खेत पर ही बनते हैं"],
            ["खाद की मात्रा", "बड़ी मात्रा में कम्पोस्ट/वर्मीकम्पोस्ट", "कम मात्रा में सूक्ष्मजीव घोल (जीवामृत)"],
            ["लागत", "मध्यम", "बहुत कम"],
            ["जुताई", "सामान्य जुताई", "कम से कम जुताई"],
            ["प्रमाणन", "लेबल के लिए प्रमाणन ज़रूरी", "PGS जैसे प्रमाणन से भरोसा बढ़ता है"],
          ],
          en: [
            ["Inputs", "Organic inputs bought from the market are allowed", "Almost all inputs are made on the farm"],
            ["Manure quantity", "Large amounts of compost/vermicompost", "Small amounts of microbial culture (Jeevamrit)"],
            ["Cost", "Medium", "Very low"],
            ["Ploughing", "Normal tillage", "Minimum tillage"],
            ["Certification", "Required for the label", "Certification such as PGS builds trust"],
          ],
        },
      },
      {
        type: "callout",
        hi: "सीधे शब्दों में — जैविक खेती रसायन की जगह जैविक सामान डालती है, जबकि प्राकृतिक खेती मिट्टी के सूक्ष्मजीवों को जगाकर खेत को खुद पोषण बनाने देती है।",
        en: "Simply put — organic farming replaces chemicals with organic inputs, while natural farming wakes up soil microbes and lets the field make its own nutrition.",
      },
    ],
  },
  {
    id: "mitti-pehchan",
    num: "14",
    title: {
      hi: "कैसे पहचानें कि मेरी मिट्टी सुधर रही है?",
      en: "How can I tell my soil is improving?",
    },
    blocks: [
      {
        type: "p",
        hi: "मिट्टी के सुधार को आप बिना किसी मशीन के, अपनी आँखों और हाथों से पहचान सकते हैं। हर 3–6 महीने पर ये आसान जाँच करें:",
        en: "You can recognise soil improvement with your own eyes and hands, no machine needed. Do these simple checks every 3–6 months:",
      },
      {
        type: "steps",
        items: {
          hi: [
            { t: "केंचुओं की गिनती", d: "1 फुट लंबा, चौड़ा और गहरा गड्ढा खोदें। जितने ज़्यादा केंचुए, उतनी स्वस्थ मिट्टी।" },
            { t: "केंचुए का मल (Casts)", d: "सुबह मिट्टी की सतह पर केंचुओं के छोटे-छोटे दानेदार ढेर दिखना अच्छा संकेत है।" },
            { t: "खुशबू", d: "स्वस्थ मिट्टी से बारिश जैसी सोंधी, मीठी खुशबू आती है।" },
            { t: "भुरभुरापन", d: "मुट्ठी में मिट्टी दबाकर छोड़ें — अच्छी मिट्टी दानों में बिखर जाती है, ढेला नहीं बनती।" },
            { t: "पानी सोखना", d: "दोनों ओर से खुला डिब्बा मिट्टी में गाड़कर पानी डालें। पानी जितनी जल्दी सोखे, उतना अच्छा।" },
          ],
          en: [
            { t: "Count earthworms", d: "Dig a pit 1 foot long, wide and deep. The more earthworms, the healthier the soil." },
            { t: "Worm casts", d: "Small granular heaps of worm casts on the surface in the morning are a good sign." },
            { t: "Smell", d: "Healthy soil has a sweet, earthy smell like the first rain." },
            { t: "Crumbliness", d: "Squeeze soil in your fist and let go — good soil breaks into crumbs instead of a lump." },
            { t: "Water absorption", d: "Push an open-ended tin into the soil and pour water in. The faster it soaks in, the better." },
          ],
        },
      },
      { type: "h4", hi: "प्रयोगशाला जाँच", en: "Laboratory test" },
      {
        type: "p",
        hi: "साल में एक बार मृदा स्वास्थ्य कार्ड (Soil Health Card) योजना के तहत मिट्टी की जाँच कराएँ और जैविक कार्बन (Organic Carbon) पर नज़र रखें:",
        en: "Once a year, get your soil tested under the Soil Health Card scheme and keep an eye on Organic Carbon:",
      },
      {
        type: "table",
        head: { hi: ["जैविक कार्बन", "स्थिति"], en: ["Organic carbon", "Status"] },
        rows: {
          hi: [
            ["0.5% से कम", "कम — मिट्टी को सुधार की ज़रूरत"],
            ["0.5% – 0.75%", "मध्यम"],
            ["0.75% से अधिक", "अच्छा"],
          ],
          en: [
            ["Below 0.5%", "Low — the soil needs improvement"],
            ["0.5% – 0.75%", "Medium"],
            ["Above 0.75%", "Good"],
          ],
        },
      },
      {
        type: "callout",
        hi: "हर साल जैविक कार्बन में थोड़ी-सी बढ़त भी बड़ी सफलता है — इसका मतलब है कि आपकी मिट्टी सचमुच जीवित हो रही है।",
        en: "Even a small rise in organic carbon each year is a big success — it means your soil is truly coming alive.",
      },
    ],
  },
  {
    id: "ghatak",
    num: "15",
    title: {
      hi: "प्राकृतिक खेती के प्रमुख घटक",
      en: "Key components of natural farming",
    },
    blocks: [
      {
        type: "steps",
        items: {
          hi: [
            { t: "जीवामृत", d: "लाभकारी सूक्ष्मजीवों की संख्या बढ़ाने वाला तरल घोल।" },
            { t: "घनजीवामृत", d: "जीवामृत का ठोस रूप, मिट्टी की उर्वरता बढ़ाता है।" },
            { t: "आच्छादन (Mulching)", d: "मिट्टी को पुआल, पत्तियों या फसल अवशेषों से ढकना।" },
            { t: "वाफसा", d: "मिट्टी में हवा और नमी का संतुलन बनाए रखना।" },
            { t: "मिश्रित खेती", d: "एक साथ कई फसलें उगाना — जैसे मक्का + अरहर, आम + हल्दी + अदरक, लीची + सब्जियां।" },
            { t: "जैव विविधता", d: "खेत में पेड़, फसल, पशु, पक्षी और सूक्ष्मजीवों का संतुलन बनाना।" },
            { t: "देशी बीज", d: "स्थानीय परिस्थितियों के अनुकूल बीजों का उपयोग।" },
          ],
          en: [
            { t: "Jeevamrit", d: "A liquid culture that boosts beneficial soil microbes." },
            { t: "Ghanjeevamrit", d: "The solid form of Jeevamrit; raises soil fertility." },
            { t: "Mulching", d: "Covering the soil with straw, leaves or crop residue." },
            { t: "Waaphasa", d: "Maintaining the balance of air and moisture in the soil." },
            { t: "Mixed cropping", d: "Growing several crops together — e.g. maize + pigeon pea, mango + turmeric + ginger, litchi + vegetables." },
            { t: "Biodiversity", d: "Balancing trees, crops, animals, birds and microbes on the farm." },
            { t: "Native seeds", d: "Using seeds suited to local conditions." },
          ],
        },
      },
      {
        type: "callout",
        hi: "मल्चिंग के लाभ: नमी संरक्षण, खरपतवार नियंत्रण और मिट्टी का तापमान संतुलित रहना।",
        en: "Benefits of mulching: moisture conservation, weed control, and a balanced soil temperature.",
      },
    ],
  },
  {
    id: "nishkarsh",
    num: "16",
    title: { hi: "निष्कर्ष", en: "Conclusion" },
    blocks: [
      {
        type: "p",
        hi: "प्राकृतिक खेती का उद्देश्य केवल रासायनिक खाद छोड़ना नहीं है। इसका लक्ष्य है:",
        en: "The aim of natural farming is not merely to give up chemical fertiliser. Its goals are:",
      },
      {
        type: "checklist",
        hi: [
          "मिट्टी को जीवित बनाना",
          "खेती की लागत कम करना",
          "किसानों की आय बढ़ाना",
          "पानी बचाना",
          "सुरक्षित और पोषक भोजन पैदा करना",
          "आने वाली पीढ़ियों के लिए उपजाऊ भूमि छोड़ना",
        ],
        en: [
          "Bring the soil to life",
          "Reduce farming cost",
          "Increase farmers' income",
          "Save water",
          "Produce safe and nutritious food",
          "Leave fertile land for future generations",
        ],
      },
      {
        type: "quote",
        hi: "प्राकृतिक खेती में सफलता का माप केवल उत्पादन नहीं, बल्कि कम लागत, स्वस्थ मिट्टी, सुरक्षित भोजन और अधिक शुद्ध लाभ है। 🌱🌾🌍",
        en: "In natural farming, success is measured not by yield alone, but by lower cost, healthy soil, safe food, and higher net profit. 🌱🌾🌍",
      },
    ],
  },
]
