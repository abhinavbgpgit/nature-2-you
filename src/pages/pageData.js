export const data = {
  benefits: [
    ["Protects Soil", "मिट्टी बचती है", "Jeevamrit and mulching keep soil microorganisms active.", "जीवामृत और मल्चिंग मिट्टी के सूक्ष्मजीवों को सक्रिय रखते हैं।"],
    ["Reduces Cost", "खर्च कम होता है", "Locally made inputs reduce dependency on costly chemicals.", "स्थानीय इनपुट महंगे रसायनों पर निर्भरता घटाते हैं।"],
    ["Saves Water", "पानी बचता है", "Waaphasa and organic cover help retain moisture.", "वाफसा और जैविक आवरण नमी रोकने में मदद करते हैं।"],
    ["Healthier Food", "स्वस्थ भोजन", "Chemical-free produce creates confidence for families and buyers.", "रसायन-मुक्त उपज परिवारों और खरीदारों में भरोसा बनाती है।"],
    ["Biodiversity", "जैव विविधता", "Birds, microbes, earthworms and mixed crops restore balance.", "पक्षी, सूक्ष्मजीव, केंचुए और मिश्रित फसलें संतुलन लौटाते हैं।"],
    ["Native Cow Value", "देशी गाय का महत्व", "Cow-based inputs make farming local and regenerative.", "गाय आधारित इनपुट खेती को स्थानीय और पुनर्योजी बनाते हैं।"],
  ],
  principles: [
    ["Beejamrit", "बीजामृत"],
    ["Jeevamrit", "जीवामृत"],
    ["Mulching", "मल्चिंग"],
    ["Waaphasa", "वाफसा"],
    ["Biodiversity", "जैव विविधता"],
    ["Soil Microbes", "मिट्टी के सूक्ष्मजीव"],
  ],
  ecosystem: [
    ["Native Cow", "देशी गाय"],
    ["Jeevamrit", "जीवामृत"],
    ["Healthy Soil", "स्वस्थ मिट्टी"],
    ["Healthy Crop", "स्वस्थ फसल"],
    ["Healthy Human", "स्वस्थ मानव"],
    ["Healthy Earth", "स्वस्थ धरती"],
  ],
  stats: [
    ["12K+", "Farmers Connected", "किसान जुड़े"],
    ["50K", "Trees Planned", "पेड़ लगाने का लक्ष्य"],
    ["78%", "Chemical Reduction", "रसायन में कमी"],
    ["42%", "Water Saved", "पानी की बचत"],
  ],
  streams: [
    ["Vegetables", "सब्जियां"],
    ["Fruits", "फल"],
    ["Seeds", "बीज"],
    ["Cow Products", "गाय उत्पाद"],
    ["Agro Tourism", "कृषि पर्यटन"],
    ["Export", "निर्यात"],
  ],
  videos: [
    {
      category: ["Government", "सरकार"],
      title: ["Natural Farming Mission in India", "भारत में प्राकृतिक खेती मिशन"],
      desc: ["Policy, training and village-level adoption.", "नीति, प्रशिक्षण और गांव स्तर पर अपनाने की जानकारी।"],
    },
    {
      category: ["Farmer Stories", "किसान कहानियां"],
      title: ["From Chemical to Natural Farming", "रासायनिक से प्राकृतिक खेती तक"],
      desc: ["A farmer's journey of restoring soil and income.", "मिट्टी और आय सुधारने की किसान की वास्तविक यात्रा।"],
    },
    {
      category: ["Training", "प्रशिक्षण"],
      title: ["How to Prepare Jeevamrit", "जीवामृत बनाना सीखें"],
      desc: ["A practical cow-based input demonstration.", "गाय आधारित इनपुट तैयार करने का व्यावहारिक तरीका।"],
    },
    {
      category: ["Research", "रिसर्च"],
      title: ["Soil Health and Microbiology", "मिट्टी स्वास्थ्य और सूक्ष्मजीव विज्ञान"],
      desc: ["Understanding carbon, microbes and crop resilience.", "कार्बन, सूक्ष्मजीव और फसल मजबूती को समझें।"],
    },
    {
      category: ["Water Saving", "पानी बचत"],
      title: ["Moisture Management with Mulching", "मल्चिंग से नमी प्रबंधन"],
      desc: ["Field methods that help reduce irrigation demand.", "सिंचाई की जरूरत घटाने वाले खेत-स्तरीय तरीके।"],
    },
    {
      category: ["Farmer Stories", "किसान कहानियां"],
      title: ["A Bihar Farmer's New Harvest", "बिहार के किसान की नई फसल"],
      desc: ["Market confidence through natural produce.", "प्राकृतिक उपज से बाजार में भरोसा बनाने की कहानी।"],
    },
  ],
  articles: [
    ["Research Based", "रिसर्च आधारित", "Is soil alive? The simple science of microbes", "क्या मिट्टी जीवित होती है? सूक्ष्मजीवों का सरल विज्ञान"],
    ["Environment", "पर्यावरण", "How trees control farm temperature", "पेड़ खेत का तापमान कैसे नियंत्रित करते हैं"],
    ["Farming Tips", "खेती टिप्स", "Natural pesticide using neem and local inputs", "नीम और स्थानीय इनपुट से प्राकृतिक कीटनाशक"],
    ["Water", "पानी", "Mulching and the future of groundwater", "मल्चिंग और भूजल का भविष्य"],
    ["Healthy Food", "स्वस्थ भोजन", "Why chemical-free food builds trust", "रसायन-मुक्त भोजन भरोसा क्यों बनाता है"],
    ["Business", "व्यवसाय", "Additional farm income through agro tourism", "कृषि पर्यटन से अतिरिक्त आय"],
  ],
}

export function pick(language, english, hindi) {
  return language === "hi" ? hindi : english
}
