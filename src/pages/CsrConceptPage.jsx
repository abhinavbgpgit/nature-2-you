import { Link } from "react-router-dom"
import csrBackground from "../assets/csr_background.png"
import imgClimateChange from "../assets/csr_problems/climate_change.png"
import imgWaterCrisis from "../assets/csr_problems/water_crisis.png"
import imgSoilDegradation from "../assets/csr_problems/soil_degradation.png"
import imgFarmerDistress from "../assets/csr_problems/farmer_distress.png"
import imgLossBiodiversity from "../assets/csr_problems/loss_of_biodiversity.png"
import img10LakhTree from "../assets/next_5_years/10_lakh_tree.png"
import imgFarmersTraining from "../assets/next_5_years/Farmers Training.png"
import imgWaterStructures from "../assets/next_5_years/Water_Structures.png"
import imgSustainableVillages from "../assets/next_5_years/Sustainable_Villages.png"
import imgSoilRestoration from "../assets/next_5_years/Soil Restoration.png"

const problemsContent = {
  en: {
    label: "The Problem",
    heading: "What Are The Biggest Challenges Today?",
    intro: "India and the world are facing a severe environmental and ecological crisis that goes far beyond nature — it directly impacts our health, agriculture, water security, economy, and the future of generations to come.",
    cards: [
      {
        icon: "🌍", title: "Climate Change",
        summary: "Climate change is one of the most pressing challenges facing the world today. Global temperatures are rising steadily, triggering extreme weather events such as heat waves, droughts, floods, and unpredictable rainfall patterns that devastate ecosystems and communities.",
        impacts: ["Record-breaking heat waves", "Unpredictable rainfall patterns", "Frequent floods & droughts", "Declining crop production", "Heat stress & health crises", "Forest fires & ecosystem damage"],
        imgUrl: imgClimateChange, imgAlt: "Climate Change",
      },
      {
        icon: "💧", title: "Water Crisis",
        summary: "Groundwater is India's most critical hidden resource, but overuse and poor water management are causing it to deplete at an alarming rate. Borewells are going deeper, traditional ponds are disappearing, and millions of people face growing water insecurity every year.",
        impacts: ["Falling groundwater levels", "Rivers & ponds drying up", "Inadequate rainwater harvesting", "Excessive agricultural water use", "Drinking water shortages", "Long-term water insecurity"],
        imgUrl: imgWaterCrisis, imgAlt: "Water Crisis",
      },
      {
        icon: "🌱", title: "Soil Degradation",
        summary: "Modern chemical farming has boosted short-term yields but caused severe long-term damage to soil health. Excessive use of chemical fertilisers and pesticides has gradually destroyed the natural microorganisms and organic carbon that make soil productive and resilient.",
        impacts: ["Loss of organic carbon", "Declining soil fertility", "Poor water retention capacity", "Loss of earthworms & microbes", "Rising crop diseases & pests", "Long-term agricultural risk"],
        imgUrl: imgSoilDegradation, imgAlt: "Soil Degradation",
      },
      {
        icon: "👨‍🌾", title: "Farmer Distress",
        summary: "India's farmers are caught in a deepening crisis. Input costs — fertilisers, seeds, diesel, and labour — keep rising while crop prices and farm income remain unpredictable. The financial pressure is forcing many farmers into debt and pushing the next generation away from agriculture.",
        impacts: ["Rising input costs", "High crop failure risk", "Unstable market prices", "Debt & financial burden", "Water scarcity for irrigation", "Youth abandoning farming"],
        imgUrl: imgFarmerDistress, imgAlt: "Farmer Distress",
      },
      {
        icon: "🌳", title: "Loss of Biodiversity",
        summary: "Rapid urbanisation, deforestation, and monoculture farming are accelerating the loss of biodiversity at an unprecedented scale. Trees are being cleared, birds and pollinators are vanishing, and natural ecosystems that took centuries to develop are being destroyed within decades.",
        impacts: ["Shrinking forest cover", "Wildlife habitat destruction", "Decline of bees & butterflies", "Disrupted food chains", "Local climate imbalance", "Increased ecological vulnerability"],
        imgUrl: imgLossBiodiversity, imgAlt: "Loss of Biodiversity",
      },
    ],
  },
  hi: {
    label: "समस्या",
    heading: "आज सबसे बड़ी समस्या क्या है?",
    intro: "भारत और पूरी दुनिया एक ऐसे पर्यावरणीय और पारिस्थितिक संकट का सामना कर रही है जो सिर्फ प्रकृति तक सीमित नहीं है — इसका सीधा असर हमारे स्वास्थ्य, खेती, पानी, अर्थव्यवस्था और भावी पीढ़ियों पर पड़ रहा है।",
    cards: [
      {
        icon: "🌍", title: "जलवायु परिवर्तन",
        summary: "जलवायु परिवर्तन आज दुनिया की सबसे बड़ी चुनौतियों में से एक है। वैश्विक तापमान लगातार बढ़ रहा है, जिसके कारण हीट वेव्स, सूखा, बाढ़ और अनियमित वर्षा जैसी चरम मौसमी घटनाएं तेजी से बढ़ रही हैं।",
        impacts: ["रिकॉर्ड तोड़ गर्मी", "अनिश्चित वर्षा पैटर्न", "बाढ़ और सूखे की बारंबारता", "फसल उत्पादन में गिरावट", "गर्मी से स्वास्थ्य समस्याएं", "जंगल की आग और नुकसान"],
        imgUrl: imgClimateChange, imgAlt: "जलवायु परिवर्तन",
      },
      {
        icon: "💧", title: "जल संकट",
        summary: "भूजल भारत का सबसे बड़ा छुपा हुआ संसाधन है, लेकिन अत्यधिक उपयोग और खराब जल प्रबंधन की वजह से यह तेजी से नीचे जा रहा है। बोरवेल गहरे होते जा रहे हैं, तालाब और पारंपरिक जल स्रोत गायब हो रहे हैं।",
        impacts: ["भूजल स्तर गिर रहा है", "नदियां और तालाब सूख रहे हैं", "वर्षा जल का अपर्याप्त संचयन", "खेती में अत्यधिक पानी का उपयोग", "पेयजल की कमी", "भविष्य में जल असुरक्षा"],
        imgUrl: imgWaterCrisis, imgAlt: "जल संकट",
      },
      {
        icon: "🌱", title: "मिट्टी की क्षति",
        summary: "आधुनिक रासायनिक खेती ने अल्पकालिक उत्पादन तो बढ़ाया, लेकिन दीर्घकालिक रूप से मिट्टी के स्वास्थ्य को बहुत नुकसान पहुंचाया है। अत्यधिक रासायनिक उर्वरकों और कीटनाशकों की वजह से मिट्टी के प्राकृतिक सूक्ष्मजीव और जैविक कार्बन धीरे-धीरे खत्म हो रहे हैं।",
        impacts: ["जैविक कार्बन में कमी", "मिट्टी की उर्वरता घट रही है", "जल धारण क्षमता कमजोर", "केंचुए और सूक्ष्मजीवों की कमी", "अधिक फसल रोग", "दीर्घकालिक खेती का खतरा"],
        imgUrl: imgSoilDegradation, imgAlt: "मिट्टी की क्षति",
      },
      {
        icon: "👨‍🌾", title: "किसान संकट",
        summary: "भारत का किसान आज कई दबावों का सामना कर रहा है। एक तरफ उर्वरक, बीज, डीजल और मजदूरी की लागत लगातार बढ़ रही है, दूसरी तरफ फसल की कीमतें और किसान की आय उतनी तेजी से नहीं बढ़ रही।",
        impacts: ["बढ़ती इनपुट लागत", "फसल नष्ट होने का जोखिम", "बाजार मूल्य अस्थिरता", "कर्ज और आर्थिक दबाव", "पानी की उपलब्धता की समस्या", "युवा खेती छोड़ रहे हैं"],
        imgUrl: imgFarmerDistress, imgAlt: "किसान संकट",
      },
      {
        icon: "🌳", title: "जैव विविधता का नुकसान",
        summary: "तेज शहरीकरण, वनों की कटाई और मोनोकल्चर खेती की वजह से जैव विविधता तेजी से कम हो रही है। पेड़ काटे जा रहे हैं, पक्षी और परागणकर्ता गायब हो रहे हैं, और प्राकृतिक पारिस्थितिकी तंत्र नष्ट होते जा रहे हैं।",
        impacts: ["वन क्षेत्र में कमी", "वन्यजीव आवास नष्ट", "मधुमक्खियों और तितलियों में कमी", "खाद्य श्रृंखला असंतुलित", "स्थानीय जलवायु असंतुलन", "बढ़ती संवेदनशीलता"],
        imgUrl: imgLossBiodiversity, imgAlt: "जैव विविधता का नुकसान",
      },
    ],
  },
}

const ecosystems = [
  {
    icon: "🌱",
    title: "Natural Farming Ecosystem",
    doing: ["Farmers Training", "Soil Regeneration", "Chemical-free Farming", "Jeevamrit & Mulching", "Indigenous Seeds"],
    result: ["Farming cost kam hogi", "Soil healthy hogi", "Farmers sustainable banenge"],
  },
  {
    icon: "💧",
    title: "Water Conservation Ecosystem",
    doing: ["Rainwater Harvesting", "Farm Ponds", "Water Recharge Systems", "Village Water Structures"],
    result: ["Groundwater improve hoga", "Irrigation better hogi", "Villages water secure banenge"],
  },
  {
    icon: "🌳",
    title: "Tree Plantation & Biodiversity",
    doing: ["Large-scale Plantation", "Agroforestry", "Native Tree Restoration", "Biodiversity Corridors"],
    result: ["Carbon absorption badega", "Temperature control hoga", "Ecosystem restore hoga"],
  },
  {
    icon: "♻️",
    title: "Organic Waste Ecosystem",
    doing: ["Composting Systems", "Organic Waste Recycling", "Soil Inputs Development"],
    result: ["Waste kam hoga", "Compost create hoga", "Soil fertility improve hogi"],
  },
]

const revenues = [
  { num: "01", title: "CSR Project Funding", desc: "Companies apne CSR budget ke through projects fund karengi।" },
  { num: "02", title: "Project Execution Fees", desc: "Ground implementation aur operations ke liye fees milegi।" },
  { num: "03", title: "Sustainability Consulting", desc: "Climate aur Natural Farming consulting services provide ki jayengi।" },
  { num: "04", title: "Training Programs", desc: "Farmers aur institutions ke liye paid workshops aur programs।" },
  { num: "05", title: "Government & Climate Grants", desc: "National aur international environmental grants।" },
  { num: "06", title: "Carbon & Ecosystem Opportunities", desc: "Carbon Credits, Ecosystem Restoration Funding, Climate Finance jaise sectors se bhi opportunities mil sakti hain।" },
]

const SHARED = [
  { num: "01", icon: "🌳", accent1: "#22c55e", accent2: "#16a34a", imgUrl: img10LakhTree,          imgW: "sm:w-[55%]" },
  { num: "02", icon: "👨‍🌾", accent1: "#f59e0b", accent2: "#d97706", imgUrl: imgFarmersTraining,    imgW: "sm:w-[55%]" },
  { num: "03", icon: "💧", accent1: "#3b82f6", accent2: "#2563eb", imgUrl: imgWaterStructures,     imgW: "sm:w-[55%]" },
  { num: "04", icon: "🏡", accent1: "#8b5cf6", accent2: "#7c3aed", imgUrl: imgSustainableVillages, imgW: "sm:w-[55%]" },
  { num: "05", icon: "🌱", accent1: "#ec4899", accent2: "#db2777", imgUrl: imgSoilRestoration,     imgW: "sm:w-[46%]" },
]

const goalsContent = {
  en: {
    badge: "Next 5 Years Vision",
    title: "Next 5 Years Goals",
    subtitle: "Our unwavering commitment to sustainable development — bringing transformative change for the environment, farmers, and communities in the next five years.",
    cta: "Start Your CSR Partnership",
    goals: [
      { title: "10 Lakh Trees Plantation", target: "10,00,000+ Trees by 2030", desc: "Our goal is to plant more than 10 lakh trees in the next 5 years, prioritising native species. This initiative will reduce the carbon footprint, strengthen local ecosystems, provide habitat for wildlife, and create livelihood opportunities for rural communities.", metrics: [{ label: "CO₂ Absorption", value: "15,000+ Tons/Year" }, { label: "Biodiversity", value: "200+ Species" }], impact: "Each tree absorbs an average of 22 kg of CO₂ per year over its lifetime, making this our biggest climate action initiative." },
      { title: "1000+ Farmers Training", target: "1,000+ Farmers Empowered", desc: "We will train over 1000 farmers in modern agricultural techniques, climate-smart farming, organic manure management, and sustainable practices — including vermicompost, natural pest control, crop diversification, and soil health management.", metrics: [{ label: "Yield Increase", value: "25–40%" }, { label: "Training Modules", value: "50+ Topics" }], impact: "Trained farmers can increase their income by up to 30% while reducing environmental impact by up to 50%." },
      { title: "100+ Water Structures", target: "100+ Water Structures", desc: "Construction of more than 100 water structures — large and small dams, ponds, wells, rainwater harvesting systems, and check dams. This initiative will revive groundwater levels, ensure irrigation availability, and resolve the long-term water crisis in the region.", metrics: [{ label: "Water Storage", value: "50+ Crore Litres" }, { label: "Area Benefited", value: "10,000+ Acres" }], impact: "Each water structure will irrigate an average of 500 acres and provide a stable water supply to 200+ families." },
      { title: "50 Sustainable Villages", target: "50 Sustainable Villages", desc: "Making 50 villages self-reliant and eco-friendly — through solar energy, organic food production, clean sanitation, waste management, and conservation of natural resources. Every village will focus on climate-resilient infrastructure and community participation.", metrics: [{ label: "Beneficiary Families", value: "25,000+ Homes" }, { label: "Carbon Reduction", value: "5,000+ Tons/Year" }], impact: "Sustainable villages show 40% better health indicators and up to 60% more employment opportunities for rural youth." },
      { title: "Large-scale Soil Restoration", target: "25,000+ Hectares Restored", desc: "Restoration of more than 25,000 hectares of land using organic manure, cover cropping, mulching, and soil conservation techniques. This initiative focuses on stopping soil erosion, increasing water retention capacity, and strengthening soil as a carbon sink.", metrics: [{ label: "Carbon Sequestration", value: "10,000+ Tons/Year" }, { label: "Soil Biodiversity", value: "300% Improvement" }], impact: "Healthy soil can store 20 tonnes of carbon per hectare, making it the most effective weapon against climate change." },
    ],
    stats: [
      { value: "10 Lakh+", label: "Total Trees" },
      { value: "1,000+", label: "Trained Farmers" },
      { value: "100+", label: "Water Structures" },
      { value: "25,000+", label: "Hectares Restored" },
      { value: "25,000+", label: "Beneficiary Families" },
    ],
  },
  hi: {
    badge: "अगले 5 वर्षों का विजन",
    title: "अगले 5 वर्षों के लक्ष्य",
    subtitle: "सतत विकास के प्रति हमारी अटूट प्रतिबद्धता — अगले पांच वर्षों में पर्यावरण, किसानों और समुदायों के लिए व्यापक परिवर्तन लाना।",
    cta: "अपनी CSR साझेदारी शुरू करें",
    goals: [
      { title: "10 लाख पेड़ों का वृक्षारोपण", target: "10,00,000+ Trees by 2030", desc: "हमारा लक्ष्य अगले 5 वर्षों में 10 लाख से अधिक पेड़ लगाना है, जिसमें देशी प्रजातियों को प्राथमिकता दी जाएगी। यह पहल न केवल कार्बन फुटप्रिंट को कम करेगी, बल्कि स्थानीय पारिस्थितिकी तंत्र को मजबूत करेगी, वन्यजीवों के लिए आवास प्रदान करेगी, और ग्रामीण समुदायों को आजीविका के अवसर देगी।", metrics: [{ label: "CO₂ अवशोषण", value: "15,000+ टन/वर्ष" }, { label: "जैव विविधता", value: "200+ प्रजातियां" }], impact: "हर पेड़ अपने जीवनकाल में औसतन 22 किलोग्राम CO₂ प्रति वर्ष अवशोषित करता है, जिससे यह हमारी सबसे बड़ी जलवायु कार्रवाई पहल है।" },
      { title: "1000+ किसानों का प्रशिक्षण", target: "1,000+ Farmers Empowered", desc: "हम 1000 से अधिक किसानों को आधुनिक कृषि तकनीक, जलवायु-स्मार्ट खेती, जैविक खाद प्रबंधन, और टिकाऊ खेती के तरीकों पर प्रशिक्षित करेंगे। इसमें वर्मीकम्पोस्ट, प्राकृतिक कीट नियंत्रण, फसल विविधीकरण, और मृदा स्वास्थ्य प्रबंधन शामिल होगा।", metrics: [{ label: "उपज वृद्धि", value: "25-40% तक" }, { label: "प्रशिक्षण मॉड्यूल", value: "50+ विषय" }], impact: "प्रशिक्षित किसान अपनी आय में 30% तक की वृद्धि कर सकते हैं, जबकि पर्यावरणीय प्रभाव 50% तक कम होता है।" },
      { title: "100+ जल संरचनाएं", target: "100+ Water Structures", desc: "100 से अधिक जल संरचनाओं का निर्माण — बड़े और लघु बांध, तालाब, कुएं, वर्षा जल संचयन प्रणाली, और चेक डैम। यह पहल भूजल स्तर को पुनर्जीवित करेगी, सिंचाई के लिए जल उपलब्धता सुनिश्चित करेगी, और क्षेत्र में जल के दीर्घकालिक संकट को हल करेगी।", metrics: [{ label: "जल भंडारण", value: "50+ करोड़ लीटर" }, { label: "लाभान्वित क्षेत्र", value: "10,000+ एकड़" }], impact: "प्रत्येक जल संरचना औसतन 500 एकड़ भूमि को सिंचित करेगी और 200+ परिवारों को पानी की स्थिर आपूर्ति प्रदान करेगी।" },
      { title: "50 टिकाऊ गांव", target: "50 Sustainable Villages", desc: "50 गांवों को आत्मनिर्भर और पर्यावरण-अनुकूल बनाना — सौर ऊर्जा, जैविक खाद्य उत्पादन, स्वच्छ स्वच्छता, कचरे का प्रबंधन, और प्राकृतिक संसाधनों का संरक्षण। हर गांव में जलवायु-प्रतिरोधी अवसंरचना और सामुदायिक भागीदारी पर ध्यान केंद्रित किया जाएगा।", metrics: [{ label: "लाभार्थी परिवार", value: "25,000+ घर" }, { label: "कार्बन कटौती", value: "5,000+ टन/वर्ष" }], impact: "टिकाऊ गांवों में स्वास्थ्य संकेतक 40% बेहतर होते हैं और ग्रामीण युवाओं के लिए रोजगार के अवसर 60% तक बढ़ जाते हैं।" },
      { title: "व्यापक मृदा पुनर्स्थापना", target: "25,000+ Hectares Restored", desc: "25,000 से अधिक हेक्टेयर भूमि का पुनर्स्थापन — जैविक खाद, कवर क्रॉपिंग, मल्चिंग, और मृदा संरक्षण तकनीकों से। यह पहल मृदा क्षरण रोकने, जल धारण क्षमता बढ़ाने, और कार्बन सिंक के रूप में मृदा को मजबूत करने पर केंद्रित है।", metrics: [{ label: "कार्बन सीक्वेस्ट्रेशन", value: "10,000+ टन/वर्ष" }, { label: "मृदा जैव विविधता", value: "300% तक सुधार" }], impact: "स्वस्थ मृदा प्रति हेक्टेयर 20 टन कार्बन संचयित कर सकती है, जो इसे जलवायु परिवर्तन के विरुद्ध सबसे प्रभावी हथियार बनाती है।" },
    ],
    stats: [
      { value: "10 लाख+", label: "कुल पेड़" },
      { value: "1,000+", label: "प्रशिक्षित किसान" },
      { value: "100+", label: "जल संरचनाएं" },
      { value: "25,000+", label: "हेक्टेयर पुनर्स्थापित" },
      { value: "25,000+", label: "लाभार्थी परिवार" },
    ],
  },
}

const WHY_CARDS = [
  { icon: "🏗️", gradient: "from-emerald-400 to-emerald-600" },
  { icon: "🏘️", gradient: "from-orange-400 to-orange-500" },
  { icon: "📋", gradient: "from-blue-400 to-blue-600" },
  { icon: "🌍", gradient: "from-teal-400 to-teal-600" },
  { icon: "♻️", gradient: "from-green-400 to-green-600" },
]

const whyContent = {
  en: {
    badge: "WHY CHOOSE US",
    heading1: "Why Us?",
    heading2: "Why Companies Need Us",
    subtitle: "India's large companies are legally required to spend on CSR. They need reliable implementation partners who don't just distribute funds — they create measurable, ground-level impact.",
    challengeTitle: "The Challenge Companies Face",
    challengeText: "Under the CSR Act, every large company must mandatorily spend at least 2% of net profit on CSR. But without the right partner, projects fail, reporting has gaps, and impact cannot be measured. We provide the complete end-to-end solution to exactly this problem.",
    cardsHeading: "We Deliver These 5 Key Benefits",
    cardsSub: "Each point is our core strength",
    cards: [
      { title: "Ground Execution", desc: "Effective and transparent execution at the grassroots level. Our team stays on-ground and personally supervises every project from start to finish." },
      { title: "Village-Level Reach", desc: "Capability to work in remote villages across India. We understand rural communities' needs and maintain a trusted, long-term presence there." },
      { title: "Proper Reporting", desc: "Audit-ready reporting with full compliance and transparency. Every rupee is accounted for, every impact is documented and independently verifiable." },
      { title: "Climate Impact Measurement", desc: "We track measurable climate impact for every project — quantifying carbon footprint reduction, CO₂ savings, and broader environmental benefits." },
      { title: "Sustainable Projects", desc: "We execute long-term sustainable projects — not one-time charity. Initiatives designed to run for years and genuinely empower local communities." },
    ],
    stats: [
      { value: "50+", label: "Villages Covered" },
      { value: "100%", label: "Compliance Rate" },
      { value: "25+", label: "Corporate Partners" },
      { value: "10K+", label: "Lives Impacted" },
    ],
    ctaHeading1: "We Provide The Exact",
    ctaHeading2: "Solution To This Problem",
    ctaText: "Whether your company's focus is education, healthcare, environment, or rural development — we are ready to convert your CSR funds into maximum, measurable social impact.",
    checklist: [
      "Execute projects at the ground level",
      "Work directly in villages and rural areas",
      "Deliver proper compliance reporting",
      "Measure real climate and social impact",
      "Run long-term sustainable projects",
    ],
    cta: "Partner With Us Today →",
  },
  hi: {
    badge: "हमें क्यों चुनें",
    heading1: "हम क्यों?",
    heading2: "कंपनियों को हमारी जरूरत क्यों होगी?",
    subtitle: "भारत की बड़ी कंपनियों को कानूनी रूप से CSR पर खर्च करना अनिवार्य है। उन्हें ऐसे भरोसेमंद कार्यान्वयन भागीदारों की जरूरत है जो सिर्फ धन वितरित न करें — बल्कि मापनीय जमीनी प्रभाव पैदा करें।",
    challengeTitle: "कंपनियों के सामने चुनौती",
    challengeText: "CSR अधिनियम के तहत हर बड़ी कंपनी को अपने शुद्ध लाभ का कम से कम 2% CSR पर खर्च करना अनिवार्य है। लेकिन सही भागीदार न मिलने से परियोजनाएं विफल हो जाती हैं, रिपोर्टिंग में कमियाँ रहती हैं, और प्रभाव को मापा नहीं जा पाता। हम ठीक इसी समस्या का पूर्ण समाधान प्रदान करते हैं।",
    cardsHeading: "हम कंपनियों को ये 5 प्रमुख लाभ देते हैं",
    cardsSub: "हर बिंदु हमारी मूल ताकत है",
    cards: [
      { title: "जमीनी क्रियान्वयन", desc: "जमीनी स्तर पर प्रभावी और पारदर्शी क्रियान्वयन। हमारी टीम हर परियोजना की शुरू से अंत तक व्यक्तिगत रूप से निगरानी करती है।" },
      { title: "ग्राम स्तरीय पहुँच", desc: "दूरदराज के गाँवों में जाकर काम करने की क्षमता। हम ग्रामीण समुदायों की जरूरतें समझते हैं और वहाँ दीर्घकालिक विश्वसनीय उपस्थिति रखते हैं।" },
      { title: "उचित रिपोर्टिंग", desc: "पूर्ण अनुपालन और पारदर्शिता के साथ ऑडिट-तैयार रिपोर्टिंग। हर रुपये का हिसाब, हर प्रभाव दस्तावेज़ीकृत और स्वतंत्र रूप से सत्यापनीय।" },
      { title: "जलवायु प्रभाव मापन", desc: "हर परियोजना का मापनीय जलवायु प्रभाव ट्रैक करते हैं — कार्बन उत्सर्जन में कमी, CO₂ बचत और व्यापक पर्यावरणीय लाभों को मापकर रिपोर्ट करते हैं।" },
      { title: "दीर्घकालिक परियोजनाएं", desc: "दीर्घकालिक और टिकाऊ परियोजनाएं चलाते हैं — एकमुश्त दान नहीं। ऐसी पहलें जो वर्षों तक चलें और स्थानीय समुदाय को वास्तव में सशक्त बनाएं।" },
    ],
    stats: [
      { value: "50+", label: "कवर किए गाँव" },
      { value: "100%", label: "अनुपालन दर" },
      { value: "25+", label: "कॉर्पोरेट भागीदार" },
      { value: "10K+", label: "जीवन प्रभावित" },
    ],
    ctaHeading1: "हम ठीक इसी समस्या का",
    ctaHeading2: "समाधान प्रदान करते हैं",
    ctaText: "चाहे आपकी कंपनी का ध्यान शिक्षा पर हो, स्वास्थ्य पर, पर्यावरण पर, या ग्रामीण विकास पर — हम आपके CSR धन को अधिकतम सामाजिक प्रभाव में बदलने के लिए तैयार हैं।",
    checklist: [
      "जमीनी स्तर पर परियोजनाएं क्रियान्वित कर सकें",
      "गाँवों और ग्रामीण क्षेत्रों में सीधे काम कर सकें",
      "उचित अनुपालन रिपोर्टिंग दे सकें",
      "वास्तविक जलवायु और सामाजिक प्रभाव माप सकें",
      "दीर्घकालिक टिकाऊ परियोजनाएं चला सकें",
    ],
    cta: "आज साझेदारी करें →",
  },
}

const closingContent = {
  en: {
    quote: '"Restoring nature is not just an environmental mission — it is the greatest sustainable economic opportunity of the future."',
    heading: "Let's Build The Future Together",
    cta1: "Partner With Us",
    cta2: "Become an Investor",
  },
  hi: {
    quote: '"प्रकृति को पुनर्स्थापित करना केवल एक पर्यावरणीय मिशन नहीं है — यह भविष्य का सबसे बड़ा सतत आर्थिक अवसर है।"',
    heading: "आइए मिलकर भविष्य बनाएं",
    cta1: "हमारे साथ जुड़ें",
    cta2: "निवेशक बनें",
  },
}

const heroContent = {
  en: {
    eyebrow: "CSR Concept",
    heading: "Building India's Natural & Climate-Resilient Future",
    sub: "We are building a scalable, climate-focused ecosystem through Natural Farming, Water Conservation, Tree Plantation, and Rural Ecosystem Development.",
    bullets: [
      "Restore Nature",
      "Empower Farmers",
      "Build Sustainable Villages",
      "Generate long-term revenue through CSR & Climate Funding",
    ],
    cta1: "Explore Vision", cta2: "Partner With Us", cta3: "Become an Investor",
  },
  hi: {
    eyebrow: "CSR अवधारणा",
    heading: "भारत का प्राकृतिक और जलवायु-अनुकूल भविष्य बनाना",
    sub: "हम प्राकृतिक खेती, जल संरक्षण, वृक्षारोपण और ग्रामीण पारिस्थितिकी तंत्र विकास के माध्यम से एक स्केलेबल, जलवायु-केंद्रित पारिस्थितिकी तंत्र बना रहे हैं।",
    bullets: [
      "प्रकृति को पुनर्स्थापित करें",
      "किसानों को सशक्त बनाएं",
      "टिकाऊ गांव बनाएं",
      "CSR और जलवायु फंडिंग के माध्यम से दीर्घकालिक राजस्व उत्पन्न करें",
    ],
    cta1: "विजन देखें", cta2: "साझेदारी करें", cta3: "निवेशक बनें",
  },
}

export default function CsrConceptPage({ language = "en" }) {
  const h1 = heroContent[language] ?? heroContent.en
  const p2 = problemsContent[language] ?? problemsContent.en
  const g9 = goalsContent[language] ?? goalsContent.en
  const c10 = closingContent[language] ?? closingContent.en
  const w5 = whyContent[language] ?? whyContent.en
  const goalsData = g9.goals.map((g, i) => ({ ...SHARED[i], ...g }))

  return (
    <div className="csr-page">

      {/* SECTION 1 — Hero */}
      <section className="csr-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(${csrBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="csr-hero-inner">
          <p className="csr-eyebrow">{h1.eyebrow}</p>
          <h1 className="csr-hero-heading">{h1.heading}</h1>
          <p className="csr-hero-sub">{h1.sub}</p>
          <ul className="csr-hero-bullets">
            {h1.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="csr-hero-actions">
            <a href="#vision" className="primary-btn">{h1.cta1}</a>
            <a href="#partner" className="secondary-btn">{h1.cta2}</a>
            <Link to="/investor/model-1" className="csr-outline-btn">{h1.cta3}</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Problem */}
      <section className="py-16 bg-[#f5f7f9]">

        {/* Header */}
        <div className="text-center px-6 pb-12 max-w-3xl mx-auto">
          <p className="text-sm tracking-[2px] uppercase font-bold text-[#e67e22] mb-2">{p2.label}</p>
          <h2 className="text-[2.2rem] font-extrabold text-[#1a1a1a] mb-4">{p2.heading}</h2>
          <p className="text-[1.05rem] text-[#555] max-w-2xl mx-auto leading-relaxed">{p2.intro}</p>
        </div>

        {/* Cards */}
        {p2.cards.map((card, i) => {
          const isEven = i % 2 !== 0
          return (
            <div key={i} className={isEven ? "bg-[#e8ecf1]" : "bg-white"}>
              <div className={`flex items-center max-w-[1200px] mx-auto px-6 py-10 gap-10 flex-col sm:flex-row ${isEven ? "sm:flex-row-reverse" : ""}`}>

                {/* Image */}
                <div className="w-full sm:w-[45%] shrink-0">
                  <img
                    src={card.imgUrl}
                    alt={card.imgAlt}
                    className="w-full h-auto rounded-2xl object-cover shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 py-2">
                  <h3 className="text-[1.6rem] font-bold text-[#1e293b] mb-1">{card.icon} {card.title}</h3>
                  <div className="w-full h-[3px] bg-[#e67e22] rounded mb-5" />
                  <p className="text-[1rem] text-[#4b5563] mb-5 leading-relaxed">{card.summary}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {card.impacts.map((item, j) => (
                      <li key={j} className="text-[0.92rem] text-[#374151] flex items-start gap-2">
                        <span className="text-[#e67e22] font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          )
        })}

      </section>

       {/* SECTION 3 — Goals */}
      <section className="py-20 bg-[linear-gradient(135deg,#0a1628_0%,#1a2f4a_50%,#0d3d2e_100%)]">
        <div className="max-w-[1400px] mx-auto px-5">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-5 py-2 rounded-full text-green-400 text-sm font-medium mb-5">
              🕐 {g9.badge}
            </span>
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold mb-4"
              style={{ background: "linear-gradient(135deg,#fff 0%,#a7f3d0 50%,#6ee7b7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              {g9.title}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {g9.subtitle}
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 py-10">

            {goalsData.map((g, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={g.num}>
                  <article className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">

                      {/* Image + Content */}
                      <div className={`flex flex-col sm:flex-row sm:h-[500px] ${!isLeft ? "sm:flex-row-reverse" : ""}`}>

                        {/* Image — per-card ratio */}
                        <div className={`${g.imgW} h-[300px] sm:h-full shrink-0`}>
                          <img src={g.imgUrl} alt={g.title} className="w-full h-full object-contain" />
                        </div>

                        {/* Content — full height, vertically distributed */}
                        <div className="flex-1 px-7 py-6 flex flex-col">

                          {/* Top group */}
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <span
                                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                                style={{ background: `linear-gradient(135deg,${g.accent1},${g.accent2})` }}
                              >{g.num}</span>
                              <span className="text-2xl">{g.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white leading-snug">{g.title}</h3>

                            <div className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                              ⭐ {g.target}
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed">{g.desc}</p>
                          </div>

                          {/* Pushes bottom group to card base */}
                          <div className="flex-1" />

                          {/* Bottom group — metrics + insight */}
                          <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                              {g.metrics.map(m => (
                                <div key={m.label}>
                                  <p className="text-[11px] text-white/50 uppercase tracking-wide mb-0.5">{m.label}</p>
                                  <p className="text-sm font-semibold text-white">{m.value}</p>
                                </div>
                              ))}
                            </div>

                            <div className="flex gap-2 p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                              <span className="text-yellow-400 text-base shrink-0">⚡</span>
                              <p className="text-white/80 text-xs leading-relaxed">{g.impact}</p>
                            </div>
                          </div>

                        </div>
                      </div>
                  </article>
                </div>
              )
            })}
          </div>
          </div>
      </section>

      {/* SECTION 5 — Why Companies */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#f0fdf4] via-[#ecfeff] to-[#f0fdf4]" id="partner">

        {/* Decorative blobs */}
        <div className="absolute w-96 h-96 rounded-full bg-emerald-300/40 blur-[80px] -top-20 -left-20 pointer-events-none" />
        <div className="absolute w-80 h-80 rounded-full bg-cyan-300/40 blur-[80px] bottom-0 right-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse inline-block" />
              {w5.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
              {w5.heading1}<br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{w5.heading2}</span>
            </h2>
            <p className="text-lg text-[#555] leading-relaxed">{w5.subtitle}</p>
          </div>

          {/* Challenge box */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <span className="text-[#e67e22] text-2xl">⚠</span>
                {w5.challengeTitle}
              </h3>
              <p className="text-[#555] text-lg leading-relaxed">{w5.challengeText}</p>
            </div>
          </div>

          {/* Cards heading */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">{w5.cardsHeading}</h3>
            <p className="text-[#555]">{w5.cardsSub}</p>
          </div>

          {/* 5 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {w5.cards.map((card, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.25)] transition-all duration-300${i === 4 ? " md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl bg-gradient-to-br ${WHY_CARDS[i].gradient} shadow-lg`}>
                  {WHY_CARDS[i].icon}
                </div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">{card.title}</h4>
                <p className="text-[#555] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {w5.stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-4xl md:text-5xl font-extrabold mb-2">{s.value}</div>
                    <div className="text-emerald-100 text-sm md:text-base">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA box */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border-2 border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -mr-16 -mt-16 opacity-50 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-100 rounded-full -ml-12 -mb-12 opacity-50 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
                  {w5.ctaHeading1}<br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{w5.ctaHeading2}</span>
                </h3>
                <p className="text-lg text-[#555] mb-8 max-w-2xl mx-auto leading-relaxed">{w5.ctaText}</p>
                <ul className="text-left max-w-md mx-auto mb-8 space-y-3 text-[#374151]">
                  {w5.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-xl shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#partner" className="primary-btn">{w5.cta}</a>
              </div>
            </div>
          </div>

        </div>
      </section>
     

      {/* SECTION 10 — Closing */}
      <section
        className="csr-closing-section"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(${csrBackground})` }}
      >
        <div className="csr-closing-content">
          <blockquote className="csr-quote">{c10.quote}</blockquote>
          <h2 className="csr-closing-heading">{c10.heading}</h2>
          <div className="csr-hero-actions">
            <a href="#partner" className="primary-btn">{c10.cta1}</a>
            <Link to="/investor/model-1" className="csr-outline-btn">{c10.cta2}</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
