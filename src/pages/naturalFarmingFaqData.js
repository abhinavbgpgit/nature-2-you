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
    id: "ghatak",
    num: "05",
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
    num: "06",
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
