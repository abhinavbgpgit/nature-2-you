// "पौधों के पोषक तत्व" page (/natural-farming/nutrients).
// Hindi is taken from the reference document; English is a translation.
// Every text field is { hi, en }.
import imgNodules from "../../assets/nutrients/nodules.jpg"
import imgPdef from "../../assets/nutrients/pdef.jpg"
import imgKdef from "../../assets/nutrients/kdef.jpg"
import imgBer from "../../assets/nutrients/ber.jpg"
import imgMgdef from "../../assets/nutrients/mgdef.jpg"
import imgFedef from "../../assets/nutrients/fedef.jpg"
import imgAsh from "../../assets/nutrients/ash.jpg"
import imgHands from "../../assets/natural_farming/intro.jpg"
import imgCrop from "../../assets/natural_farming/e_crop.jpg"
import imgMicrobes from "../../assets/natural_farming/p_microbes.jpg"
import imgMulch from "../../assets/natural_farming/p_mulch.jpg"
import imgJeevamrit from "../../assets/natural_farming/jeevamrit.jpg"
import imgEarthworm from "../../assets/natural_farming/b_soil.jpg"

export const nuImages = {
  hands: { src: imgHands, credit: "Unsplash", source: "https://unsplash.com/photos/nvk0j5IAgwI", alt: { hi: "हाथों में मिट्टी और खाद", en: "Soil and compost in two hands" } },
  crop: { src: imgCrop, credit: "Unsplash", source: "https://unsplash.com/photos/V6_hi3GXIF0", alt: { hi: "धूप में हरा धान का खेत", en: "A green paddy field in sunlight" } },
  nodules: { src: imgNodules, credit: "Terraprima · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Nitrogen-fixing_nodules_in_the_roots_of_legumes..JPG", alt: { hi: "दलहन की जड़ों पर Nitrogen पकड़ने वाली गाँठें", en: "Nitrogen-fixing nodules on legume roots" } },
  pdef: { src: imgPdef, credit: "Alandmanson · CC0", source: "https://commons.wikimedia.org/wiki/File:2005_1214_0928_Hlokozi_-_Acid-induced_P_deficiency.jpg", alt: { hi: "Phosphorus की कमी: मक्का के बैंगनी पत्ते", en: "Phosphorus deficiency: purple maize leaves" } },
  kdef: { src: imgKdef, credit: "Goldlocki · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Tomate_Blatt_Kalimangel.jpg", alt: { hi: "Potassium की कमी: टमाटर के पत्ते के किनारे झुलसे", en: "Potassium deficiency: scorched edges on a tomato leaf" } },
  ber: { src: imgBer, credit: "Fructibus · CC0", source: "https://commons.wikimedia.org/wiki/File:Blossom_end_rot_tomato_2017_A.jpg", alt: { hi: "Blossom End Rot: टमाटर का काला निचला सिरा", en: "Blossom end rot: the black bottom of a tomato" } },
  mgdef: { src: imgMgdef, credit: "Agronom · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Maize_of_magnesium_deficiency,_symptoms_on_leaves.jpg", alt: { hi: "Magnesium की कमी: मक्का के पत्तों में नसों के बीच पीलापन", en: "Magnesium deficiency: yellow stripes between veins on maize" } },
  fedef: { src: imgFedef, credit: "Eiku en exil · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Chlorose_ferrique_sur_Citrus_aurantium.jpg", alt: { hi: "Iron की कमी: नए पत्ते पीले, नसें हरी", en: "Iron deficiency: young leaf yellow with green veins" } },
  ash: { src: imgAsh, credit: "Laurentius · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Wood_ash.jpg", alt: { hi: "लकड़ी की राख", en: "Wood ash" } },
  microbes: { src: imgMicrobes, credit: "Rajarshi Rit · CC BY 4.0", source: "https://commons.wikimedia.org/w/index.php?curid=106885692", alt: { hi: "जड़ के अंदर माइकोराइजा फफूंद (सूक्ष्मदर्शी से)", en: "Mycorrhizal fungus inside a root (under a microscope)" } },
  mulch: { src: imgMulch, credit: "Doug Beckers · CC BY-SA 2.0", source: "https://www.flickr.com/photos/37103729@N02/6379111547", alt: { hi: "भूसे से ढकी क्यारी", en: "A bed covered with straw mulch" } },
  jeevamrit: { src: imgJeevamrit, credit: "Param6102 · CC BY-SA 4.0", source: "https://commons.wikimedia.org/w/index.php?curid=95440780", alt: { hi: "ड्रम में जीवामृत बनाते किसान", en: "A farmer preparing Jeevamrit in drums" } },
  earthworm: { src: imgEarthworm, credit: "goosmurf · CC BY 2.0", source: "https://www.flickr.com/photos/19349404@N00/3828755105", alt: { hi: "मिट्टी में केंचुए", en: "Earthworms in soil" } },
}

export const nu = {
  brand: { hi: "🌿 पौधों के पोषक तत्व", en: "🌿 Plant nutrients" },
  nav: [
    ["intro", { hi: "परिचय", en: "Intro" }],
    ["sun", { hi: "धूप और हवा", en: "Sun & air" }],
    ["elements", { hi: "सभी तत्व", en: "All elements" }],
    ["symptoms", { hi: "लक्षण पहचानें", en: "Read symptoms" }],
    ["summary", { hi: "सारांश", en: "Summary" }],
    ["recipes", { hi: "विधियाँ", en: "Recipes" }],
    ["tips", { hi: "सलाह", en: "Tips" }],
  ],

  hero: {
    pill: { hi: "17 आवश्यक तत्व + लाभकारी तत्व", en: "17 essential elements + beneficial elements" },
    title: { hi: "पौधों के पोषक तत्व", en: "Plant nutrients" },
    subtitle: { hi: "कार्य, कमी के लक्षण और प्राकृतिक स्रोत", en: "What they do, signs of deficiency, and natural sources" },
    text: {
      hi: "पौधे को अपना जीवन पूरा करने के लिए 17 आवश्यक पोषक तत्व (Essential Nutrients) चाहिए। इनमें से किसी एक की भी कमी हो तो पौधा अपना जीवन-चक्र (बीज से बीज तक) पूरा नहीं कर सकता, और कोई दूसरा तत्व उसकी जगह नहीं ले सकता।",
      en: "A plant needs 17 essential nutrients to complete its life. If even one is missing, the plant cannot complete its life cycle (seed to seed), and no other element can take its place.",
    },
    stats: [
      { big: { hi: "17", en: "17" }, small: { hi: "आवश्यक तत्व", en: "essential elements" } },
      { big: { hi: "~95%", en: "~95%" }, small: { hi: "पौधा हवा, पानी और धूप से बनता है", en: "of a plant comes from air, water and sun" } },
      { big: { hi: "4", en: "4" }, small: { hi: "लाभकारी तत्व", en: "beneficial elements" } },
    ],
    image: "crop",
  },

  intro: {
    title: { hi: "पौधे को कुल कितने तत्व चाहिए?", en: "How many elements does a plant need?" },
    eighteen: {
      hi: "\"18 तत्व\" पर स्पष्टीकरण: वैज्ञानिक रूप से आवश्यक तत्व 17 हैं। कई किताबों और प्राकृतिक खेती के प्रशिक्षणों में Cobalt (दलहनी फसलों के लिए) को 18वाँ तत्व गिना जाता है। इस पेज में 17 आवश्यक तत्व + Cobalt, Silicon, Sodium, Selenium जैसे लाभकारी तत्व, सब शामिल हैं।",
      en: "About \"18 elements\": scientifically there are 17 essential elements. Many books and natural farming trainings count Cobalt (for legume crops) as the 18th. This page covers the 17 essential elements plus beneficial ones such as Cobalt, Silicon, Sodium and Selenium.",
    },
    groupsHead: { hi: ["समूह", "तत्व", "कहाँ से मिलते हैं"], en: ["Group", "Elements", "Where they come from"] },
    groups: {
      hi: [
        ["अ-खनिज (Non-mineral)", "Carbon (C), Hydrogen (H), Oxygen (O)", "हवा और पानी से"],
        ["मुख्य (Primary Macronutrients)", "Nitrogen (N), Phosphorus (P), Potassium (K)", "मिट्टी से, बड़ी मात्रा में"],
        ["द्वितीयक (Secondary Macronutrients)", "Calcium (Ca), Magnesium (Mg), Sulphur (S)", "मिट्टी से, मध्यम मात्रा में"],
        ["सूक्ष्म (Micronutrients)", "Iron (Fe), Manganese (Mn), Zinc (Zn), Copper (Cu), Boron (B), Molybdenum (Mo), Chlorine (Cl), Nickel (Ni)", "मिट्टी से, बहुत कम मात्रा में"],
        ["लाभकारी (Beneficial)", "Cobalt (Co), Silicon (Si), Sodium (Na), Selenium (Se)", "मिट्टी से, कुछ फसलों के लिए"],
      ],
      en: [
        ["Non-mineral", "Carbon (C), Hydrogen (H), Oxygen (O)", "From air and water"],
        ["Primary macronutrients", "Nitrogen (N), Phosphorus (P), Potassium (K)", "From soil, in large amounts"],
        ["Secondary macronutrients", "Calcium (Ca), Magnesium (Mg), Sulphur (S)", "From soil, in moderate amounts"],
        ["Micronutrients", "Iron (Fe), Manganese (Mn), Zinc (Zn), Copper (Cu), Boron (B), Molybdenum (Mo), Chlorine (Cl), Nickel (Ni)", "From soil, in very small amounts"],
        ["Beneficial", "Cobalt (Co), Silicon (Si), Sodium (Na), Selenium (Se)", "From soil, for some crops"],
      ],
    },
    liebigTitle: { hi: "\"सूक्ष्म\" का मतलब \"कम जरूरी\" नहीं है", en: "\"Micro\" does not mean \"less important\"" },
    liebig: {
      hi: "पौधे को Boron की जरूरत Nitrogen से हजारों गुना कम होती है, लेकिन Boron न हो तो फूल और फल नहीं बनते। इसे Liebig का न्यूनतम का नियम (Law of the Minimum) कहते हैं: पौधे की बढ़वार उस तत्व से तय होती है जो सबसे कम उपलब्ध है, जैसे सबसे छोटी लकड़ी वाले बाल्टी में पानी उसी लकड़ी तक भरता है।",
      en: "A plant needs thousands of times less Boron than Nitrogen, but without Boron there are no flowers or fruit. This is Liebig's Law of the Minimum: growth is set by the element in shortest supply, just as a bucket made of staves only fills up to its shortest stave.",
    },
    barrelLabel: { hi: "पानी सबसे छोटी लकड़ी (B) तक ही भरता है", en: "Water fills only up to the shortest stave (B)" },
    viewTitle: { hi: "प्राकृतिक खेती का दृष्टिकोण", en: "The natural farming view" },
    view: {
      hi: "रासायनिक खेती में सोच होती है: \"कमी है तो बाहर से डालो।\" प्राकृतिक खेती में सोच है: ज्यादातर तत्व मिट्टी में पहले से हैं, बस पौधे के लेने लायक रूप (Available Form) में नहीं हैं। इन्हें उपलब्ध कराने का काम मिट्टी के सूक्ष्मजीव (Microorganisms), केंचुए और जैविक पदार्थ (Organic Matter) करते हैं।",
      en: "Chemical farming thinks: \"If something is short, add it from outside.\" Natural farming thinks: most elements are already in the soil, just not in a form the plant can take up (available form). Soil microorganisms, earthworms and organic matter do the job of making them available.",
    },
    ways: [
      { icon: "🔓", t: { hi: "उपलब्ध कराना (Mobilise)", en: "Mobilise" }, d: { hi: "सूक्ष्मजीव और जड़ की सेहत सुधारकर मिट्टी में पहले से मौजूद तत्व को पौधे तक पहुँचाना।", en: "Improve microbes and root health so the element already in the soil reaches the plant." } },
      { icon: "♻️", t: { hi: "लौटाना (Recycle/Add)", en: "Recycle / add" }, d: { hi: "प्राकृतिक स्रोतों (राख, खली, हड्डी का चूरा, पत्ते, पशुओं का गोबर-मूत्र) से तत्व को खेत में वापस लाना।", en: "Bring the element back to the field from natural sources (ash, oil cake, bone meal, leaves, animal dung and urine)." } },
    ],
    caution: {
      hi: "जरूरी सावधानी: पत्तों के लक्षण देखकर कमी का अंदाजा लग सकता है, पर कई तत्वों के लक्षण एक-दूसरे से मिलते हैं और बीमारी या पानी की कमी से भी हो सकते हैं। इसलिए हर 2-3 साल में मिट्टी जाँच (Soil Testing) करवाना सबसे भरोसेमंद तरीका है (भारत में Soil Health Card योजना के तहत)।",
      en: "Important caution: leaf symptoms can hint at a deficiency, but many elements show similar signs, and disease or lack of water can cause them too. A soil test every 2–3 years is the most reliable way (in India, under the Soil Health Card scheme).",
    },
  },

  sun: {
    title: { hi: "सूर्य का प्रकाश, Carbon, Hydrogen और Oxygen", en: "Sunlight, Carbon, Hydrogen and Oxygen" },
    text: {
      hi: "पौधे के सूखे वजन का लगभग 95% हिस्सा सिर्फ तीन तत्वों से बनता है: Carbon, Hydrogen और Oxygen। ये तीनों मिट्टी से नहीं, हवा और पानी से आते हैं, और इन्हें भोजन में बदलने की ऊर्जा सूर्य से आती है। यानी खेती असल में धूप की खेती है; मिट्टी के खनिज बाकी लगभग 5% हैं।",
      en: "About 95% of a plant's dry weight is made of just three elements: Carbon, Hydrogen and Oxygen. All three come from air and water, not soil, and the energy to turn them into food comes from the sun. Farming is really the farming of sunlight; soil minerals make up the remaining ~5%.",
    },
    photoTitle: { hi: "प्रकाश संश्लेषण (Photosynthesis)", en: "Photosynthesis" },
    photo: {
      hi: "पत्ते हवा से Carbon dioxide (CO₂) लेते हैं, जड़ें मिट्टी से पानी (H₂O) लेती हैं, और धूप की ऊर्जा से Chlorophyll इनसे शक्कर (Glucose) बनाता है। Oxygen बाहर निकलती है। यही शक्कर आगे चलकर स्टार्च, सेल्युलोज (तना, लकड़ी), प्रोटीन, तेल और फल की मिठास बनती है।",
      en: "Leaves take carbon dioxide (CO₂) from the air, roots take water (H₂O) from the soil, and chlorophyll uses sunlight to turn them into sugar (glucose). Oxygen is released. This sugar later becomes starch, cellulose (stems, wood), protein, oil and the sweetness of fruit.",
    },
    diagram: {
      hi: { sun: "धूप", co2: "हवा से CO₂", water: "जड़ से पानी (H₂O)", o2: "Oxygen बाहर", sugar: "शक्कर (Glucose)" },
      en: { sun: "Sunlight", co2: "CO₂ from air", water: "Water (H₂O) from roots", o2: "Oxygen out", sugar: "Sugar (glucose)" },
    },
    cards: [
      {
        icon: "☀️",
        t: { hi: "सूर्य का प्रकाश (Sunlight)", en: "Sunlight" },
        role: { hi: "भोजन बनाने की सारी ऊर्जा देता है। दिन की लंबाई (Photoperiod) से कई फसलों में फूल आने का समय तय होता है।", en: "Supplies all the energy for making food. Day length (photoperiod) decides flowering time in many crops." },
        lack: { hi: "कम धूप के लक्षण: पौधा लंबा और पतला हो जाता है (Etiolation), पत्ते हल्के हरे, फूल-फल कम आते हैं।", en: "Signs of too little sun: the plant grows tall and thin (etiolation), leaves turn pale green, fewer flowers and fruit." },
        tips: {
          hi: [
            "बहुस्तरीय खेती (Multi-layer Farming): ऊँचे पेड़ (नारियल, आम), मध्यम (केला, पपीता), छोटे (सब्जियाँ) और जमीन के नीचे (हल्दी, अदरक) एक साथ लगाने से हर स्तर पर धूप पकड़ी जाती है। हल्दी-अदरक छाया में अच्छे होते हैं।",
            "कतार की दिशा: सब्जियों की कतारें उत्तर-दक्षिण दिशा में रखने से दिन भर दोनों तरफ धूप मिलती है।",
            "सही दूरी: बहुत घने पौधे एक-दूसरे की धूप रोकते हैं।",
            "खेत कभी खाली न छोड़ें: खाली जमीन पर पड़ी धूप बेकार जाती है और मिट्टी को गर्म करके जीवाणु मारती है। हर समय कोई न कोई हरी फसल रखें।",
          ],
          en: [
            "Multi-layer farming: tall trees (coconut, mango), medium (banana, papaya), short (vegetables) and underground crops (turmeric, ginger) together catch sunlight at every level. Turmeric and ginger do well in shade.",
            "Row direction: running vegetable rows north–south gives both sides sun all day.",
            "Right spacing: plants that are too dense block each other's light.",
            "Never leave the field bare: sun falling on bare ground is wasted and heats the soil, killing microbes. Keep some green crop at all times.",
          ],
        },
      },
      {
        icon: "🌑",
        t: { hi: "Carbon (C)", en: "Carbon (C)" },
        role: { hi: "पौधे का ढाँचा बनाता है। हर जैविक अणु (शक्कर, प्रोटीन, DNA, सेल्युलोज) की रीढ़ Carbon ही है। पौधे के सूखे वजन का लगभग 45% Carbon होता है। पौधा Carbon सिर्फ हवा की CO₂ से, पत्तों के छिद्रों (Stomata) द्वारा लेता है, इसलिए Carbon \"डाला\" नहीं जाता।", en: "Builds the plant's frame. Carbon is the backbone of every organic molecule (sugar, protein, DNA, cellulose). About 45% of a plant's dry weight is Carbon. The plant takes Carbon only from CO₂ in the air, through the leaf pores (stomata), so Carbon is not \"added\"." },
        lack: { hi: "मिट्टी का जैविक Carbon (Soil Organic Carbon, SOC) पूरी मिट्टी की सेहत का सबसे बड़ा पैमाना है। भारत की ज्यादातर खेती की मिट्टियों में Organic Carbon 0.5% से कम है, जबकि अच्छी मिट्टी में यह 0.75% से ऊपर माना जाता है (अनुमानित आंकड़े)।", en: "Soil Organic Carbon (SOC) is the biggest measure of overall soil health. Most Indian farm soils have less than 0.5% organic carbon, while good soil is considered above 0.75% (approximate figures)." },
        tips: {
          hi: [
            "आच्छादन (Mulching): फसल के अवशेष, पुआल, सूखे पत्ते जमीन पर बिछाएँ। इन्हें कभी न जलाएँ; पराली जलाने से Carbon धुएँ में उड़ जाता है।",
            "जीवित जड़ें (Living Roots): हर समय कोई फसल रखें। जड़ें अपनी बनाई शक्कर का लगभग 20-40% मिट्टी में छोड़ती हैं (Root Exudates), जो सीधे सूक्ष्मजीवों का भोजन बनता है।",
            "हरी खाद (Green Manure) और ढकी फसलें (Cover Crops): ढैंचा, सनई, लोबिया।",
            "कम जुताई (Minimum Tillage): गहरी जुताई से मिट्टी का Carbon हवा में उड़ जाता है।",
            "घनजीवामृत, Compost, केंचुआ खाद (Vermicompost) और पेड़ों की मेड़।",
          ],
          en: [
            "Mulching: spread crop residue, straw and dry leaves on the ground. Never burn them; burning stubble sends Carbon up in smoke.",
            "Living roots: keep a crop growing at all times. Roots release about 20–40% of the sugar they make into the soil (root exudates), which directly feeds microbes.",
            "Green manure and cover crops: dhaincha, sunn hemp, cowpea.",
            "Minimum tillage: deep ploughing releases soil Carbon into the air.",
            "Ghanjeevamrit, compost, vermicompost and trees on the bunds.",
          ],
        },
        image: "mulch",
      },
      {
        icon: "💧",
        t: { hi: "Hydrogen (H) और Oxygen (O)", en: "Hydrogen (H) and Oxygen (O)" },
        role: { hi: "Hydrogen पानी से आता है और शक्कर बनाने तथा कोशिकाओं में ऊर्जा संचार में लगता है। Oxygen से पौधा साँस (Respiration) लेता है और शक्कर से ऊर्जा निकालता है।", en: "Hydrogen comes from water and is used to make sugar and move energy in cells. With Oxygen the plant breathes (respiration) and releases energy from sugar." },
        lack: { hi: "जड़ों को भी साँस लेने के लिए Oxygen चाहिए। खेत में पानी भरा रहे तो जड़ें घुटने लगती हैं और पौधा पीला पड़कर मुरझाता है, भले ही पानी भरपूर हो।", en: "Roots need Oxygen to breathe too. If the field stays waterlogged, roots suffocate and the plant yellows and wilts, even though there is plenty of water." },
        tips: {
          hi: [
            "वाफसा (Whapasa): सुभाष पालेकर पद्धति का सिद्धांत है कि जड़ों को पानी नहीं, मिट्टी के कणों के बीच 50% हवा और 50% नमी चाहिए। जरूरत से ज्यादा सिंचाई नुकसान करती है।",
            "दोपहर में पौधे की छाया की बाहरी किनारे पर नाली से सिंचाई करें, तने के पास नहीं; पानी सोखने वाली जड़ें वहीं होती हैं।",
            "केंचुए और Organic Matter मिट्टी में सुरंगें बनाते हैं, जिनसे हवा और पानी दोनों अंदर जाते हैं।",
            "निचली जमीन में पानी निकासी (Drainage) की नालियाँ बनाएँ या ऊँची क्यारियों (Raised Beds) पर बुवाई करें।",
          ],
          en: [
            "Whapasa: a principle of the Subhash Palekar method — roots need not water but 50% air and 50% moisture between soil particles. Over-irrigation does harm.",
            "Irrigate through a channel along the outer edge of the plant's midday shadow, not next to the stem; that is where the water-absorbing roots are.",
            "Earthworms and organic matter make tunnels in the soil that let both air and water in.",
            "On low land, dig drainage channels or sow on raised beds.",
          ],
        },
        image: "earthworm",
      },
    ],
  },

  groups: [
    { id: "all", label: { hi: "सभी", en: "All" } },
    { id: "primary", label: { hi: "मुख्य (NPK)", en: "Primary (NPK)" } },
    { id: "secondary", label: { hi: "द्वितीयक", en: "Secondary" } },
    { id: "micro", label: { hi: "सूक्ष्म", en: "Micro" } },
    { id: "beneficial", label: { hi: "लाभकारी", en: "Beneficial" } },
  ],

  elementsSection: {
    title: { hi: "मिट्टी के सभी पोषक तत्व", en: "All the soil nutrients" },
    text: {
      hi: "किसी भी तत्व पर क्लिक करें और पढ़ें — वह पौधे में क्या करता है, उसकी कमी कैसी दिखती है, और प्राकृतिक खेती में उसे कैसे लाएँ। एक आसान याद रखने का तरीका: N = ऊपर (पत्ते), P = नीचे (जड़ें) और फूल, K = पूरा शरीर (ताकत, फल की गुणवत्ता)।",
      en: "Tap any element to read what it does in the plant, what its deficiency looks like, and how to supply it in natural farming. An easy memory aid: N = top (leaves), P = bottom (roots) and flowers, K = whole body (strength, fruit quality).",
    },
    microNote: {
      hi: "सूक्ष्म तत्वों की अधिकता से सावधान: \"कमी\" और \"जहर\" के बीच का फासला बहुत कम है, खासकर Boron और Copper में। बाजार के सूक्ष्म तत्व मिश्रण अंदाजे से न डालें। सबसे सुरक्षित स्रोत है अलग-अलग तरह का जैविक पदार्थ, क्योंकि हर पौधा अलग गहराई से अलग खनिज खींचता है। मिट्टी का pH सबसे अहम है: Fe, Mn, Zn, Cu और B क्षारीय मिट्टी (pH 7.5 से ऊपर) में मौजूद होकर भी पौधे को नहीं मिलते; Molybdenum उल्टा, अम्लीय मिट्टी में कम मिलता है।",
      en: "Beware of excess micronutrients: the gap between \"deficient\" and \"toxic\" is very small, especially for Boron and Copper. Don't add market micronutrient mixes by guesswork. The safest source is a variety of organic matter, since each plant draws different minerals from different depths. Soil pH matters most: Fe, Mn, Zn, Cu and B are present but unavailable in alkaline soil (pH above 7.5); Molybdenum is the opposite, scarce in acidic soil.",
    },
    labels: {
      role: { hi: "पौधे में काम", en: "Role in the plant" },
      lack: { hi: "कमी के लक्षण", en: "Deficiency signs" },
      excess: { hi: "अधिकता / सावधानी", en: "Excess / caution" },
      fact: { hi: "महत्वपूर्ण तथ्य", en: "Key fact" },
      sources: { hi: "प्राकृतिक स्रोत और उपाय", en: "Natural sources and remedies" },
      showsOn: { hi: "कमी दिखती है:", en: "Shows on:" },
      open: { hi: "पूरा पढ़ें", en: "Read more" },
      close: { hi: "बंद करें", en: "Close" },
    },
    where: {
      old: { hi: "पुराने पत्ते", en: "Old leaves" },
      new: { hi: "नए पत्ते / फल", en: "New leaves / fruit" },
      rare: { hi: "बहुत दुर्लभ", en: "Very rare" },
    },
  },

  elements: [
    {
      sym: "N", group: "primary", where: "old", image: "nodules",
      name: { hi: "Nitrogen", en: "Nitrogen" },
      tag: { hi: "हरियाली और बढ़वार का तत्व", en: "The element of greenness and growth" },
      role: {
        hi: ["Chlorophyll का मुख्य हिस्सा है, इसलिए पत्तों का गहरा हरा रंग Nitrogen से आता है।", "हर प्रोटीन, एंजाइम (Enzyme), DNA और RNA में Nitrogen होता है।", "पत्तों और तने की तेज बढ़वार (Vegetative Growth) करता है। अनाज में प्रोटीन की मात्रा इसी से तय होती है।"],
        en: ["A main part of chlorophyll, so the deep green colour of leaves comes from Nitrogen.", "Every protein, enzyme, DNA and RNA contains Nitrogen.", "Drives fast leaf and stem growth (vegetative growth). It sets the protein content of grain."],
      },
      lack: { hi: "पुराने पत्ते समान रूप से पीले पड़ते हैं (सिरे से शुरू होकर), पौधा छोटा और कमजोर रहता है, कल्ले (Tillers) कम फूटते हैं।", en: "Old leaves turn evenly yellow (starting at the tip), the plant stays small and weak, fewer tillers form." },
      excess: { hi: "पौधा हरा-भरा और नरम हो जाता है, कीट (माहू, सफेद मक्खी) तेजी से आकर्षित होते हैं, धान-गेहूँ गिर जाते हैं (Lodging), फूल-फल देर से और कम आते हैं। रासायनिक यूरिया की सबसे बड़ी समस्या यही है।", en: "The plant becomes lush and soft, pests (aphids, whitefly) are quickly attracted, paddy and wheat fall over (lodging), flowers and fruit come late and few. This is the biggest problem with chemical urea." },
      fact: { hi: "हमारी हवा में लगभग 78% Nitrogen गैस है, पर पौधा इसे सीधे नहीं ले सकता। कुछ जीवाणु इसे पौधे के लेने लायक रूप में बदलते हैं; इसे नाइट्रोजन स्थिरीकरण (Nitrogen Fixation) कहते हैं। प्राकृतिक खेती में Nitrogen का सबसे बड़ा स्रोत यही है।", en: "About 78% of air is Nitrogen gas, but plants can't take it directly. Some bacteria convert it into a usable form; this is nitrogen fixation, the biggest source of Nitrogen in natural farming." },
      sources: {
        hi: [
          "दलहनी फसलें (Legumes): मूंग, उड़द, चना, अरहर, लोबिया, मटर, ग्वार। इनकी जड़ों की गाँठों (Root Nodules) में Rhizobium जीवाणु हवा की Nitrogen पकड़ते हैं। मुख्य फसल के साथ अंतरफसल (Intercropping) के रूप में लगाएँ।",
          "हरी खाद (Green Manure): ढैंचा या सनई 45-50 दिन उगाकर, फूल आने से पहले काटकर मिट्टी पर बिछा दें या हल्का मिला दें।",
          "Nitrogen देने वाले पेड़: ग्लिरिसिडिया (Gliricidia), सुबबूल, सेसबानिया। मेड़ पर लगाएँ और इनकी टहनियाँ काटकर Mulch करें।",
          "मुक्त-जीवी जीवाणु: Azotobacter, Azospirillum (अनाज वाली फसलों के लिए)। जीवामृत इन जैसे सूक्ष्मजीवों की संख्या बढ़ाता है।",
          "पशु-आधारित: गोमूत्र (Nitrogen और Potassium दोनों से भरपूर), पकी हुई गोबर खाद, मुर्गी की खाद (खूब सड़ाकर)।",
          "खली (Oil Cakes): नीम खली, करंज खली, अरंडी खली, मूँगफली खली। नीम खली Nitrogen को धीरे-धीरे छोड़ती है और मिट्टी के कीट भी रोकती है।",
          "माछी अमीनो अम्ल (Fish Amino Acid) और अंडा-नींबू अर्क: तुरंत Nitrogen के लिए पत्तों पर छिड़काव (Foliar Spray)।",
          "Azolla: धान के खेत में तैरने वाला फर्न, जो हवा की Nitrogen पकड़ता है और पशुआहार भी है।",
        ],
        en: [
          "Legumes: moong, urad, chana, arhar, cowpea, peas, guar. Rhizobium bacteria in their root nodules capture Nitrogen from the air. Grow them as an intercrop with the main crop.",
          "Green manure: grow dhaincha or sunn hemp for 45–50 days, cut before flowering and spread on the soil or mix in lightly.",
          "Nitrogen-giving trees: Gliricidia, subabul, Sesbania. Plant on bunds and use their cut branches as mulch.",
          "Free-living bacteria: Azotobacter, Azospirillum (for cereals). Jeevamrit multiplies microbes like these.",
          "Animal-based: cow urine (rich in Nitrogen and Potassium), well-rotted dung manure, poultry manure (fully rotted).",
          "Oil cakes: neem, karanj, castor, groundnut cake. Neem cake releases Nitrogen slowly and also deters soil pests.",
          "Fish amino acid and egg-lemon extract: foliar spray for quick Nitrogen.",
          "Azolla: a floating fern in paddy fields that fixes Nitrogen from the air and is also fodder.",
        ],
      },
    },
    {
      sym: "P", group: "primary", where: "old", image: "pdef",
      name: { hi: "Phosphorus", en: "Phosphorus" },
      tag: { hi: "जड़, फूल और ऊर्जा का तत्व", en: "The element of roots, flowers and energy" },
      role: {
        hi: ["पौधे की \"बैटरी\" ATP में Phosphorus होता है; कोशिका का हर ऊर्जा वाला काम इसी से चलता है।", "DNA, RNA और कोशिका की दीवार (Cell Membrane) का हिस्सा है।", "जड़ों का तेज विकास, फूल आना, बीज और दाने का बनना, फसल का जल्दी पकना।"],
        en: ["The plant's \"battery\" ATP contains Phosphorus; every energy task in the cell runs on it.", "Part of DNA, RNA and the cell membrane.", "Fast root growth, flowering, seed and grain formation, earlier ripening."],
      },
      lack: { hi: "पुराने पत्ते गहरे हरे या बैंगनी-लाल (Purple) हो जाते हैं (खासकर मक्का में), जड़ें कमजोर, बढ़वार रुकी हुई, फूल और पकना देर से।", en: "Old leaves turn dark green or purple-red (especially in maize), roots are weak, growth is stunted, flowering and ripening are late." },
      fact: { hi: "ज्यादातर मिट्टियों में Phosphorus की कुल मात्रा काफी होती है, पर वह Calcium, Iron या Aluminium से चिपककर (Fixed) पड़ा रहता है। रासायनिक DAP का भी बड़ा हिस्सा इसी तरह फँस जाता है। इसलिए यहाँ सबसे अहम उपाय \"डालना\" नहीं, \"घुलाना\" (Solubilise) है।", en: "Most soils hold plenty of Phosphorus in total, but it stays locked (fixed) to Calcium, Iron or Aluminium. Much of chemical DAP gets locked the same way. So the key here is not to \"add\" but to \"dissolve\" (solubilise)." },
      sources: {
        hi: [
          "माइकोराइजा (Mycorrhiza / VAM): यह फफूंद जड़ों से जुड़कर उनकी पहुँच कई गुना बढ़ा देती है और दूर से Phosphorus लाती है। यह जुताई और रसायनों से नष्ट होती है, इसलिए प्राकृतिक खेती में अपने आप बढ़ती है।",
          "PSB (Phosphate Solubilising Bacteria): ये जीवाणु अम्ल छोड़कर फँसे हुए Phosphorus को घुलाते हैं। जीवामृत और घनजीवामृत इन्हें बढ़ाते हैं।",
          "हड्डी का चूरा (Bone Meal): Phosphorus और Calcium दोनों देता है, धीरे-धीरे घुलता है।",
          "रॉक फॉस्फेट (Rock Phosphate): प्राकृतिक खनिज है; Compost या गोबर खाद के साथ सड़ाकर डालने से ज्यादा असर करता है (अम्लीय मिट्टी में सबसे अच्छा)।",
          "केंचुआ खाद और मुर्गी की खाद: अच्छे स्रोत हैं।",
          "केले के छिलके और गुड़: फूल आने के समय के घरेलू तरल खाद में उपयोगी।",
          "Organic Matter बढ़ाएँ: जैविक पदार्थ से बने अम्ल Phosphorus को फँसने से बचाते हैं।",
        ],
        en: [
          "Mycorrhiza (VAM): this fungus joins roots, multiplies their reach and brings Phosphorus from afar. Ploughing and chemicals destroy it, so it thrives naturally in natural farming.",
          "PSB (phosphate-solubilising bacteria): release acids that dissolve locked Phosphorus. Jeevamrit and Ghanjeevamrit multiply them.",
          "Bone meal: gives both Phosphorus and Calcium, dissolving slowly.",
          "Rock phosphate: a natural mineral; works better when rotted with compost or dung manure (best in acidic soil).",
          "Vermicompost and poultry manure: good sources.",
          "Banana peels and jaggery: useful in home-made liquid manure at flowering.",
          "Increase organic matter: acids from organic matter keep Phosphorus from getting locked.",
        ],
      },
    },
    {
      sym: "K", group: "primary", where: "old", image: "kdef",
      name: { hi: "Potassium", en: "Potassium" },
      tag: { hi: "ताकत, रोग-प्रतिरोध और गुणवत्ता का तत्व", en: "The element of strength, disease resistance and quality" },
      role: {
        hi: ["पत्तों के छिद्र (Stomata) खोलना-बंद करना कंट्रोल करता है, इसलिए सूखे में पानी बचाता है।", "60 से ज्यादा एंजाइमों को सक्रिय करता है।", "पत्तों में बनी शक्कर को फल, दाने और कंद (आलू) तक पहुँचाता है; इससे फल का आकार, रंग, मिठास और टिकाउपन (Shelf Life) बढ़ता है।", "तने को मजबूत करता है और पाला, सूखा तथा बीमारियों से लड़ने की ताकत देता है।"],
        en: ["Controls the opening and closing of leaf pores (stomata), saving water in drought.", "Activates more than 60 enzymes.", "Carries sugar made in leaves to fruit, grain and tubers (potato), improving size, colour, sweetness and shelf life.", "Strengthens stems and gives the power to resist frost, drought and disease."],
      },
      lack: { hi: "पुराने पत्तों के किनारे और सिरे पीले होकर झुलसे हुए (Scorching) दिखते हैं, तना कमजोर, फसल गिरती है, फल छोटे और बेस्वाद, दाने पिचके।", en: "Edges and tips of old leaves turn yellow and look scorched, stems are weak, the crop falls over, fruit is small and tasteless, grains are shrivelled." },
      sources: {
        hi: [
          "लकड़ी की राख (Wood Ash): Potassium का सबसे आसान स्रोत (साथ में Calcium भी)। सावधानी: यह क्षारीय (Alkaline) है, क्षारीय मिट्टी में बहुत कम डालें; कोयले या प्लास्टिक की राख कभी नहीं।",
          "केले का तना और छिलके: केले का तना Potassium से भरपूर है; काटकर Mulch करें या सड़ाकर तरल खाद बनाएँ।",
          "गोमूत्र: Potassium का अच्छा स्रोत; हमेशा पानी में मिलाकर ही उपयोग करें।",
          "KSB / KMB (Potash Mobilising Bacteria): Frateuria aurantia जैसे जीवाणु मिट्टी में फँसे Potassium को उपलब्ध कराते हैं। भारत की ज्यादातर मिट्टियाँ Potassium वाले खनिजों से भरी हैं।",
          "फसल के अवशेष वापस खेत में: पुआल और डंठल में पौधे का ज्यादातर Potassium रहता है। इन्हें जलाना या बाहर ले जाना खेत से Potassium निकाल देता है।",
          "समुद्री शैवाल अर्क (Seaweed Extract) और सरसों/अरंडी की खली।",
        ],
        en: [
          "Wood ash: the easiest source of Potassium (with Calcium). Caution: it is alkaline — use very little on alkaline soil; never coal or plastic ash.",
          "Banana stem and peels: the banana stem is rich in Potassium; chop and mulch, or rot into liquid manure.",
          "Cow urine: a good Potassium source; always dilute with water.",
          "KSB / KMB (potash-mobilising bacteria): bacteria such as Frateuria aurantia release locked Potassium. Most Indian soils are full of Potassium-bearing minerals.",
          "Return crop residue to the field: most of a plant's Potassium is in straw and stalks. Burning or removing them takes Potassium out of the field.",
          "Seaweed extract and mustard/castor oil cake.",
        ],
      },
    },
    {
      sym: "Ca", group: "secondary", where: "new", image: "ber",
      name: { hi: "Calcium", en: "Calcium" },
      tag: { hi: "कोशिका की दीवार का सीमेंट", en: "The cement of the cell wall" },
      role: {
        hi: ["कोशिका की दीवार (Cell Wall) को मजबूत बनाता है, जैसे ईंटों के बीच सीमेंट।", "नई जड़ों और कोंपलों (Growing Tips) का विकास।", "फल मजबूत और टिकाऊ बनते हैं, फटते नहीं।", "मिट्टी में: अम्लता (Acidity) कम करता है और मिट्टी के कणों को भुरभुरे ढेलों (Aggregates) में बाँधता है।"],
        en: ["Strengthens the cell wall, like cement between bricks.", "Growth of new roots and shoot tips.", "Fruit becomes firm and long-lasting and doesn't crack.", "In soil: reduces acidity and binds particles into crumbly aggregates."],
      },
      lack: { hi: "कोंपलें मुड़ी-सूखी, टमाटर और मिर्च में फल का निचला सिरा काला सड़ना (Blossom End Rot), मूँगफली में खाली फलियाँ (Pops), फलों का फटना।", en: "Curled, dried shoot tips; in tomato and chilli the bottom of the fruit rots black (blossom end rot); empty groundnut pods (pops); cracked fruit." },
      excess: { hi: "Blossom End Rot का अक्सर कारण मिट्टी में Calcium की कमी नहीं, बल्कि अनियमित सिंचाई होता है। Calcium सिर्फ पानी के साथ चलता है, इसलिए नमी एक-सी रखना और Mulching उतना ही जरूरी है जितना Calcium डालना।", en: "Blossom end rot is often caused not by lack of Calcium in the soil but by irregular watering. Calcium moves only with water, so steady moisture and mulching matter as much as adding Calcium." },
      sources: {
        hi: [
          "अंडे के छिलके: धोकर, सुखाकर, बारीक पीसकर मिट्टी में मिलाएँ (धीरे घुलते हैं)।",
          "Water Soluble Calcium (WSCa): अंडे के छिलकों को भूनकर सिरके (Vinegar) में घोलने से बनता है; पत्तों पर छिड़काव के लिए (Korean Natural Farming की विधि)।",
          "चूना पत्थर (Agricultural Lime) या डोलोमाइट (Dolomite): सिर्फ अम्लीय मिट्टी (pH 6 से कम) में।",
          "जिप्सम (Gypsum): Calcium और Sulphur दोनों; pH नहीं बढ़ाता और क्षारीय (ऊसर) मिट्टी सुधारने में काम आता है। मूँगफली में फूल आने के समय बहुत उपयोगी।",
          "हड्डी का चूरा, सीप-शंख का चूरा, लकड़ी की राख।",
        ],
        en: [
          "Eggshells: wash, dry, grind fine and mix into the soil (dissolve slowly).",
          "Water-soluble calcium (WSCa): made by roasting eggshells and dissolving them in vinegar; for foliar spray (a Korean Natural Farming method).",
          "Agricultural lime or dolomite: only in acidic soil (pH below 6).",
          "Gypsum: gives both Calcium and Sulphur; doesn't raise pH and helps reclaim alkaline (usar) soil. Very useful for groundnut at flowering.",
          "Bone meal, crushed shells, wood ash.",
        ],
      },
    },
    {
      sym: "Mg", group: "secondary", where: "old", image: "mgdef",
      name: { hi: "Magnesium", en: "Magnesium" },
      tag: { hi: "Chlorophyll का केंद्र", en: "The centre of chlorophyll" },
      role: {
        hi: ["हर Chlorophyll अणु के बीचों-बीच एक Magnesium परमाणु होता है। Magnesium के बिना प्रकाश संश्लेषण नहीं हो सकता।", "Phosphorus को पौधे के अंदर ले जाने में मदद करता है और एंजाइमों को सक्रिय करता है।", "तिलहन (तेल वाली) फसलों में तेल बनाने में मदद।"],
        en: ["Every chlorophyll molecule has a Magnesium atom at its centre. Without Magnesium there is no photosynthesis.", "Helps move Phosphorus inside the plant and activates enzymes.", "Helps oilseed crops make oil."],
      },
      lack: { hi: "नसों (Veins) के बीच का हिस्सा पीला हो जाता है और नसें हरी रहती हैं (Interveinal Chlorosis), जैसे पत्ते पर हरी जाली। बाद में लालिमा आ सकती है।", en: "The area between veins turns yellow while veins stay green (interveinal chlorosis), like a green net on the leaf. Reddening may follow." },
      excess: { hi: "बहुत ज्यादा Potassium (राख या पोटाश) डालने से पौधा Magnesium नहीं ले पाता। संतुलन जरूरी है।", en: "Too much Potassium (ash or potash) stops the plant taking up Magnesium. Balance matters." },
      sources: {
        hi: ["डोलोमाइट (Dolomite): Calcium + Magnesium, अम्लीय मिट्टी के लिए।", "केंचुआ खाद, Compost, गोबर खाद में संतुलित मात्रा।", "समुद्री शैवाल अर्क (Seaweed Extract)।", "हरी पत्तेदार Mulch: हरे पत्तों में Chlorophyll के साथ Magnesium भी वापस आता है।"],
        en: ["Dolomite: Calcium + Magnesium, for acidic soil.", "Balanced amounts in vermicompost, compost and dung manure.", "Seaweed extract.", "Green leafy mulch: green leaves return Magnesium along with chlorophyll."],
      },
    },
    {
      sym: "S", group: "secondary", where: "new",
      name: { hi: "Sulphur", en: "Sulphur" },
      tag: { hi: "प्रोटीन, तेल और सुगंध का तत्व", en: "The element of protein, oil and aroma" },
      role: {
        hi: ["कुछ जरूरी अमीनो अम्ल (Methionine, Cysteine) और इसलिए प्रोटीन का हिस्सा।", "सरसों, तिल, मूँगफली जैसी तिलहन फसलों में तेल की मात्रा बढ़ाता है।", "प्याज, लहसुन और सरसों की तीखी गंध और स्वाद Sulphur से आता है।", "Chlorophyll बनाने और दलहनी फसलों में Nitrogen स्थिरीकरण में मदद।"],
        en: ["Part of some essential amino acids (methionine, cysteine) and so of protein.", "Raises oil content in oilseeds such as mustard, sesame and groundnut.", "The sharp smell and taste of onion, garlic and mustard come from Sulphur.", "Helps make chlorophyll and fix Nitrogen in legumes."],
      },
      lack: { hi: "नए पत्ते पूरे के पूरे हल्के पीले, नसें भी। यह Nitrogen की कमी जैसा दिखता है, फर्क सिर्फ इतना है कि Nitrogen की कमी पुराने पत्तों पर और Sulphur की नए पत्तों पर पहले दिखती है।", en: "New leaves turn wholly pale yellow, veins too. It looks like Nitrogen deficiency; the only difference is that Nitrogen shortage appears first on old leaves and Sulphur shortage on new ones." },
      sources: {
        hi: ["जिप्सम (Gypsum): Sulphur का सबसे सामान्य प्राकृतिक स्रोत।", "सरसों की खली और नीम खली।", "Compost और गोबर खाद: मिट्टी का ज्यादातर Sulphur Organic Matter में ही रहता है और सूक्ष्मजीव इसे उपलब्ध कराते हैं।", "प्याज, लहसुन और सरसों के अवशेष Compost में डालें।"],
        en: ["Gypsum: the most common natural source of Sulphur.", "Mustard cake and neem cake.", "Compost and dung manure: most soil Sulphur sits in organic matter and microbes release it.", "Add onion, garlic and mustard residue to compost."],
      },
    },
    {
      sym: "Fe", group: "micro", where: "new", image: "fedef",
      name: { hi: "Iron (लोहा)", en: "Iron" },
      tag: { hi: "Chlorophyll बनाने में जरूरी", en: "Needed to make chlorophyll" },
      role: { hi: ["Chlorophyll बनाने में जरूरी (हालाँकि Chlorophyll का हिस्सा नहीं), प्रकाश संश्लेषण और साँस में इलेक्ट्रॉन संचार।"], en: ["Needed to make chlorophyll (though not part of it); moves electrons in photosynthesis and respiration."] },
      lack: { hi: "नए पत्तों पर: नसें हरी, बीच का भाग पीला; ज्यादा कमी में पत्ते लगभग सफेद। क्षारीय और चूने वाली मिट्टी में आम (गन्ना, मूँगफली, नींबू वर्ग)।", en: "On new leaves: green veins with yellow between; in severe cases leaves turn almost white. Common in alkaline and limy soils (sugarcane, groundnut, citrus)." },
      sources: { hi: ["Compost और गोबर खाद, जीवामृत (सूक्ष्मजीव Iron को घुलनशील रूप में रखते हैं), मिट्टी की हवादारी सुधारें; जलभराव और अधिक चूना से बचें।"], en: ["Compost and dung manure, Jeevamrit (microbes keep Iron soluble); improve soil aeration; avoid waterlogging and excess lime."] },
    },
    {
      sym: "Mn", group: "micro", where: "new",
      name: { hi: "Manganese", en: "Manganese" },
      tag: { hi: "पानी तोड़कर Oxygen", en: "Splits water to release Oxygen" },
      role: { hi: ["प्रकाश संश्लेषण में पानी तोड़कर Oxygen निकालने वाला तंत्र Manganese से ही चलता है। कई एंजाइमों को सक्रिय करता है और बीमारियों से लड़ने में मदद करता है।"], en: ["The system that splits water to release Oxygen in photosynthesis runs on Manganese. It activates many enzymes and helps fight disease."] },
      lack: { hi: "नए पत्तों पर नसों के बीच पीलापन और भूरे-स्लेटी धब्बे। गेहूँ में स्लेटी धारियाँ।", en: "Yellowing between veins with brown-grey spots on new leaves. Grey streaks in wheat." },
      sources: { hi: ["Compost, जीवामृत, हरी खाद। अधिक चूना डालने से बचें।"], en: ["Compost, Jeevamrit, green manure. Avoid too much lime."] },
    },
    {
      sym: "Zn", group: "micro", where: "new",
      name: { hi: "Zinc (जस्ता)", en: "Zinc" },
      tag: { hi: "बढ़वार हॉर्मोन (Auxin)", en: "Growth hormone (auxin)" },
      role: { hi: ["बढ़वार हॉर्मोन Auxin बनाने में जरूरी, इसलिए पत्तों का आकार और गाँठों के बीच की लंबाई इसी से तय होती है। प्रोटीन बनाना और दाने बनना।"], en: ["Needed to make the growth hormone auxin, so it sets leaf size and the length between nodes. Protein making and grain formation."] },
      lack: { hi: "पत्ते छोटे और गुच्छे में (Little Leaf, Rosetting), पौधा बौना। धान में \"खैरा रोग\" इसी की कमी से होता है (पत्तों पर भूरे-लाल धब्बे)। भारतीय मिट्टियों में Zinc की कमी सबसे आम सूक्ष्म तत्व की कमी है।", en: "Small leaves in clusters (little leaf, rosetting), a dwarfed plant. \"Khaira disease\" in paddy comes from this deficiency (brown-red spots on leaves). Zinc is the most common micronutrient deficiency in Indian soils." },
      excess: { hi: "बहुत ज्यादा Phosphorus डालने से Zinc की कमी बढ़ती है।", en: "Too much Phosphorus worsens Zinc deficiency." },
      sources: { hi: ["माइकोराइजा (यह Phosphorus के साथ Zinc भी लाती है), Zinc घुलाने वाले जीवाणु (ZSB), Compost और गोबर खाद, केंचुआ खाद।"], en: ["Mycorrhiza (brings Zinc along with Phosphorus), zinc-solubilising bacteria (ZSB), compost and dung manure, vermicompost."] },
    },
    {
      sym: "Cu", group: "micro", where: "new",
      name: { hi: "Copper (तांबा)", en: "Copper" },
      tag: { hi: "एंजाइम, Lignin, परागकण", en: "Enzymes, lignin, pollen" },
      role: { hi: ["प्रकाश संश्लेषण और साँस के एंजाइम, Lignin (पौधे की कठोरता) बनाना, परागकण (Pollen) का स्वस्थ होना।"], en: ["Enzymes of photosynthesis and respiration, making lignin (the plant's stiffness), healthy pollen."] },
      lack: { hi: "नए पत्तों के सिरे सफेद होकर मुड़ना, पौधा मुरझाया सा, गेहूँ में खाली बालियाँ। अधिक जैविक पदार्थ वाली मिट्टी में हो सकती है।", en: "Tips of new leaves turn white and curl, the plant looks wilted, empty ears in wheat. Can occur in soils very high in organic matter." },
      excess: { hi: "बार-बार Copper वाले फफूंदनाशक (Bordeaux Mixture) छिड़कने से Copper मिट्टी में जमा होकर केंचुओं और सूक्ष्मजीवों को नुकसान पहुँचाता है।", en: "Repeated sprays of copper fungicides (Bordeaux mixture) build up Copper in the soil and harm earthworms and microbes." },
      sources: { hi: ["संतुलित Compost और गोबर खाद आमतौर पर पर्याप्त है।"], en: ["Balanced compost and dung manure are usually enough."] },
    },
    {
      sym: "B", group: "micro", where: "new",
      name: { hi: "Boron", en: "Boron" },
      tag: { hi: "फूल से फल बनना", en: "Flower to fruit" },
      role: { hi: ["फूल आना, परागनलिका (Pollen Tube) का बढ़ना और इसलिए फल और बीज का बनना (Fruit Set)। कोशिका की दीवार में Calcium के साथ काम करता है और शक्कर को फल तक पहुँचाने में मदद करता है।"], en: ["Flowering and pollen-tube growth, and so fruit and seed set. Works with Calcium in the cell wall and helps move sugar to fruit."] },
      lack: { hi: "फूल झड़ना, फल कम लगना या टेढ़े-मेढ़े होना, कोंपल का मरना, फूलगोभी का तना अंदर से खोखला और भूरा, आंवले में भूरा गूदा, पपीते का टेढ़ा फल।", en: "Flower drop, poor or misshapen fruit, dying shoot tips, hollow brown cauliflower stems, brown flesh in amla, crooked papaya fruit." },
      excess: { hi: "Boron में कमी और जहर का अंतर सबसे कम है; मिट्टी जाँच के बिना बोरेक्स न डालें।", en: "Boron has the smallest gap between deficiency and toxicity; don't apply borax without a soil test." },
      sources: { hi: ["Compost और केंचुआ खाद, समुद्री शैवाल अर्क, Organic Matter बढ़ाएँ (रेतीली मिट्टी में Boron बहकर निकल जाता है)।"], en: ["Compost and vermicompost, seaweed extract, more organic matter (Boron washes out of sandy soil)."] },
    },
    {
      sym: "Mo", group: "micro", where: "old",
      name: { hi: "Molybdenum", en: "Molybdenum" },
      tag: { hi: "नाइट्रेट का उपयोग, गाँठें", en: "Using nitrate, nodules" },
      role: { hi: ["नाइट्रेट (Nitrate) को पौधे के अंदर उपयोगी रूप में बदलना। दलहनी फसलों की गाँठों में Rhizobium को Nitrogen स्थिरीकरण के लिए इसकी जरूरत होती है।"], en: ["Converts nitrate into a usable form inside the plant. Rhizobium in legume nodules needs it to fix Nitrogen."] },
      lack: { hi: "Nitrogen की कमी जैसे पीले पत्ते, पत्तों के किनारे मुड़ना; फूलगोभी में पत्ते सिर्फ नस जैसे पतले (Whiptail)। अम्लीय मिट्टी में आम।", en: "Yellow leaves like Nitrogen deficiency, curled leaf edges; in cauliflower the leaves shrink to just the midrib (whiptail). Common in acidic soil." },
      sources: { hi: ["अम्लीय मिट्टी में चूना या लकड़ी की राख से pH सुधारें; इससे मिट्टी का अपना Molybdenum उपलब्ध हो जाता है। Compost और समुद्री शैवाल अर्क।"], en: ["In acidic soil, correct pH with lime or wood ash; this frees the soil's own Molybdenum. Compost and seaweed extract."] },
    },
    {
      sym: "Cl", group: "micro", where: "rare",
      name: { hi: "Chlorine", en: "Chlorine" },
      tag: { hi: "पानी का संतुलन", en: "Water balance" },
      role: { hi: ["प्रकाश संश्लेषण में पानी तोड़ने में मदद, पत्तों के छिद्र खोलने-बंद करने में Potassium का साथ, कोशिकाओं में पानी का संतुलन।"], en: ["Helps split water in photosynthesis, works with Potassium to open and close leaf pores, keeps water balance in cells."] },
      lack: { hi: "खेतों में लगभग कभी नहीं दिखती, क्योंकि बारिश, सिंचाई के पानी और धूल से पर्याप्त मिल जाता है। समस्या अक्सर इसकी अधिकता होती है (खारा पानी, पत्तों के किनारे जलना)।", en: "Almost never seen in fields, since rain, irrigation water and dust supply enough. The usual problem is excess (salty water, burnt leaf edges)." },
      sources: { hi: ["अलग से डालने की जरूरत नहीं।"], en: ["No need to add it separately."] },
    },
    {
      sym: "Ni", group: "micro", where: "rare",
      name: { hi: "Nickel", en: "Nickel" },
      tag: { hi: "यूरिया तोड़ना, अंकुरण", en: "Breaking down urea, germination" },
      role: { hi: ["Urease एंजाइम का हिस्सा, जो पौधे के अंदर यूरिया को तोड़ता है। बीज के अंकुरण (Germination) की क्षमता। सबसे आखिर में (1987 में) आवश्यक तत्व माना गया।"], en: ["Part of the urease enzyme, which breaks down urea inside the plant. Seed germination ability. The last to be recognised as essential (in 1987)."] },
      lack: { hi: "बहुत दुर्लभ; पत्तों के सिरों पर यूरिया जमा होकर काले धब्बे (पीकन, दलहन)।", en: "Very rare; urea builds up at leaf tips causing dark spots (pecan, legumes)." },
      sources: { hi: ["अलग से डालने की जरूरत नहीं; जैविक खाद में पर्याप्त मात्रा होती है।"], en: ["No need to add it; organic manure contains enough."] },
    },
    {
      sym: "Co", group: "beneficial", where: "old",
      name: { hi: "Cobalt — \"18वाँ तत्व\"", en: "Cobalt — the \"18th element\"" },
      tag: { hi: "दलहन की गाँठों में N स्थिरीकरण", en: "Nitrogen fixation in legume nodules" },
      role: { hi: ["दलहनी फसलों की गाँठों में रहने वाले Rhizobium जीवाणुओं को Vitamin B12 बनाने के लिए Cobalt चाहिए। इसके बिना Nitrogen स्थिरीकरण कमजोर होता है। यानी सीधे पौधे को नहीं, उसके साथी जीवाणुओं को जरूरत है। यह पशुओं के चारे के जरिए पशुओं के लिए भी जरूरी है।"], en: ["Rhizobium bacteria in legume nodules need Cobalt to make vitamin B12; without it Nitrogen fixation weakens. So it's needed not by the plant directly but by its partner bacteria. It's also needed by animals, through their fodder."] },
      lack: { hi: "दलहनी फसलों में गाँठें कम बनना और Nitrogen की कमी जैसे पीले पत्ते।", en: "Fewer nodules in legumes and yellow leaves like Nitrogen deficiency." },
      sources: { hi: ["गोबर खाद, Compost, समुद्री शैवाल अर्क। जरूरत बहुत ही कम होती है।"], en: ["Dung manure, compost, seaweed extract. Very little is needed."] },
    },
    {
      sym: "Si", group: "beneficial", where: "old",
      name: { hi: "Silicon", en: "Silicon" },
      tag: { hi: "पौधे का कवच", en: "The plant's armour" },
      role: { hi: ["पत्तों और तने की बाहरी परत के नीचे कांच जैसी परत बनाता है। इससे तना सीधा और मजबूत रहता है (गिरता नहीं), रस चूसने वाले कीट और फफूंद अंदर नहीं घुस पाते, और सूखे तथा लवणता का असर कम होता है। धान, गन्ना, गेहूँ और बाँस जैसी घास कुल की फसलों के लिए खासतौर पर अहम।"], en: ["Forms a glass-like layer under the outer skin of leaves and stems. Stems stay upright and strong, sap-sucking insects and fungi can't get in, and drought and salinity hit less. Especially important for grass-family crops such as paddy, sugarcane, wheat and bamboo."] },
      lack: { hi: "पत्ते नरम और झुके हुए, फसल गिरना, धान में ब्लास्ट (Blast) जैसी बीमारियाँ ज्यादा।", en: "Soft, drooping leaves, lodging, more disease such as blast in paddy." },
      sources: { hi: ["धान की भूसी की राख (Rice Husk Ash) सबसे अच्छा स्रोत है; धान का पुआल वापस खेत में डालें; हॉर्सटेल (Equisetum) का काढ़ा; बाँस के पत्तों का Mulch।"], en: ["Rice husk ash is the best source; return paddy straw to the field; horsetail (Equisetum) tea; bamboo-leaf mulch."] },
    },
    {
      sym: "Na", group: "beneficial", where: "rare",
      name: { hi: "Sodium", en: "Sodium" },
      tag: { hi: "कुछ पौधों में Potassium का साथी", en: "A partial stand-in for Potassium in some plants" },
      role: { hi: ["कुछ खास पौधों (चुकंदर, पालक वर्ग, कुछ रेगिस्तानी घास) में Potassium का आंशिक काम कर सकता है।"], en: ["Can partly do Potassium's job in some plants (beet, the spinach family, some desert grasses)."] },
      lack: { hi: "भारत में Sodium की कमी नहीं, अधिकता समस्या है।", en: "In India the problem is not a lack of Sodium but an excess." },
      excess: { hi: "अधिक Sodium से मिट्टी ऊसर (Sodic) हो जाती है, चिपचिपी और सख्त बनती है। सुधार के लिए जिप्सम, ढैंचा की हरी खाद और जैविक पदार्थ। खारे पानी से सिंचाई से बचें।", en: "Too much Sodium makes soil sodic (usar), sticky and hard. Reclaim it with gypsum, dhaincha green manure and organic matter. Avoid irrigating with salty water." },
      sources: { hi: ["अलग से न डालें।"], en: ["Do not add it."] },
    },
    {
      sym: "Se", group: "beneficial", where: "rare",
      name: { hi: "Selenium", en: "Selenium" },
      tag: { hi: "तनाव से लड़ने में थोड़ी मदद", en: "A little help against stress" },
      role: { hi: ["पौधे के लिए आवश्यक नहीं, पर पौधे को तनाव (सूखा, गर्मी) से लड़ने में थोड़ी मदद करता है। इसका मुख्य महत्व मनुष्य और पशुओं के पोषण में है, जो भोजन के जरिए मिलता है।"], en: ["Not essential for plants, but helps a little against stress (drought, heat). Its main importance is in human and animal nutrition, through food."] },
      lack: { hi: "पौधे में कमी के खास लक्षण नहीं।", en: "No specific deficiency signs in plants." },
      excess: { hi: "पंजाब के कुछ इलाकों में मिट्टी में इसकी अधिकता से फसल और चारा जहरीला होने की समस्या दर्ज हुई है। अलग से कभी न डालें।", en: "In parts of Punjab, excess soil Selenium has made crops and fodder toxic. Never add it separately." },
      sources: { hi: ["अलग से कभी न डालें।"], en: ["Never add it separately."] },
    },
  ],

  symptoms: {
    title: { hi: "लक्षण से पहचानें: पुराने पत्ते या नए पत्ते?", en: "Read the symptoms: old leaves or new leaves?" },
    text: {
      hi: "N, P, K और Mg पौधे के अंदर चल सकते हैं (Mobile)। कमी होने पर पौधा इन्हें पुराने पत्तों से निकालकर नए पत्तों में भेज देता है, इसलिए लक्षण पुराने (नीचे के) पत्तों पर पहले दिखते हैं। Ca, B, Fe, S जैसे Immobile तत्वों की कमी नए (ऊपर के) पत्तों पर दिखती है।",
      en: "N, P, K and Mg can move inside the plant (mobile). When they run short, the plant pulls them from old leaves to feed new ones, so symptoms appear first on old (lower) leaves. Shortages of immobile elements such as Ca, B, Fe and S show on new (upper) leaves.",
    },
    labels: {
      hi: { newLeaves: "नए पत्ते (ऊपर)", oldLeaves: "पुराने पत्ते (नीचे)", newList: "Ca, S, Fe, Mn, Zn, Cu, B", oldList: "N, P, K, Mg", arrow: "पौधा तत्व ऊपर भेजता है" },
      en: { newLeaves: "New leaves (top)", oldLeaves: "Old leaves (bottom)", newList: "Ca, S, Fe, Mn, Zn, Cu, B", oldList: "N, P, K, Mg", arrow: "Plant moves elements upward" },
    },
    gallery: [
      { image: "pdef", caption: { hi: "Phosphorus: पत्ते बैंगनी", en: "Phosphorus: purple leaves" } },
      { image: "kdef", caption: { hi: "Potassium: किनारे झुलसे", en: "Potassium: scorched edges" } },
      { image: "mgdef", caption: { hi: "Magnesium: नसों के बीच पीलापन", en: "Magnesium: yellow between veins" } },
      { image: "fedef", caption: { hi: "Iron: नया पत्ता पीला, नसें हरी", en: "Iron: young leaf yellow, veins green" } },
      { image: "ber", caption: { hi: "Calcium: फल का निचला सिरा काला", en: "Calcium: black fruit bottom" } },
    ],
  },

  summary: {
    title: { hi: "सारांश तालिका", en: "Summary table" },
    text: { hi: "एक नजर में सभी तत्व: कक्षा में सिखाने या खेत में जल्दी देखने के लिए।", en: "Every element at a glance: for teaching in class or a quick check in the field." },
    head: { hi: ["तत्व", "मुख्य काम", "कमी कहाँ दिखती है", "प्रमुख प्राकृतिक स्रोत"], en: ["Element", "Main role", "Where deficiency shows", "Main natural sources"] },
    rows: {
      hi: [
        ["सूर्य का प्रकाश", "भोजन बनाने की ऊर्जा", "पूरा पौधा लंबा-पतला", "बहुस्तरीय खेती, सही दूरी"],
        ["Carbon (C)", "पौधे का ढाँचा; मिट्टी की सेहत", "-", "हवा की CO₂; मिट्टी के लिए Mulch, Compost"],
        ["Hydrogen, Oxygen", "शक्कर बनाना, साँस", "जलभराव में मुरझाना", "पानी, वाफसा"],
        ["Nitrogen (N)", "हरियाली, प्रोटीन, बढ़वार", "पुराने पत्ते पीले", "दलहन, ढैंचा, गोमूत्र, खली"],
        ["Phosphorus (P)", "जड़ें, फूल, ऊर्जा (ATP)", "पुराने पत्ते बैंगनी", "माइकोराइजा, PSB, हड्डी का चूरा"],
        ["Potassium (K)", "पानी नियंत्रण, फल की गुणवत्ता", "पुराने पत्तों के किनारे झुलसे", "लकड़ी की राख, केले का तना, गोमूत्र"],
        ["Calcium (Ca)", "कोशिका की दीवार, मजबूत फल", "नई कोंपलें, फल का निचला सिरा", "अंडे के छिलके, जिप्सम, चूना"],
        ["Magnesium (Mg)", "Chlorophyll का केंद्र", "पुराने पत्तों में नसों के बीच पीलापन", "डोलोमाइट, Compost"],
        ["Sulphur (S)", "प्रोटीन, तेल, सुगंध", "नए पत्ते पूरे पीले", "जिप्सम, सरसों खली"],
        ["Iron (Fe)", "Chlorophyll बनाना", "नए पत्ते, नसें हरी", "Compost, जीवामृत"],
        ["Manganese (Mn)", "पानी तोड़कर Oxygen", "नए पत्ते, स्लेटी धब्बे", "Compost, हरी खाद"],
        ["Zinc (Zn)", "बढ़वार हॉर्मोन (Auxin)", "छोटे गुच्छेदार पत्ते, खैरा रोग", "माइकोराइजा, ZSB, Compost"],
        ["Copper (Cu)", "एंजाइम, Lignin, परागकण", "नए पत्तों के सिरे सफेद", "Compost, गोबर खाद"],
        ["Boron (B)", "फूल से फल बनना", "फूल झड़ना, टेढ़े फल", "Compost, समुद्री शैवाल"],
        ["Molybdenum (Mo)", "नाइट्रेट का उपयोग, गाँठें", "पीले पत्ते (अम्लीय मिट्टी)", "pH सुधार, राख"],
        ["Chlorine (Cl)", "पानी का संतुलन", "लगभग कभी नहीं", "बारिश, पानी"],
        ["Nickel (Ni)", "यूरिया तोड़ना, अंकुरण", "बहुत दुर्लभ", "जैविक खाद"],
        ["Cobalt (Co)", "दलहन की गाँठों में N स्थिरीकरण", "गाँठें कम", "गोबर खाद"],
        ["Silicon (Si)", "तने की मजबूती, कीटों से कवच", "फसल गिरना", "धान की भूसी की राख, पुआल"],
      ],
      en: [
        ["Sunlight", "Energy to make food", "Whole plant tall and thin", "Multi-layer farming, right spacing"],
        ["Carbon (C)", "Plant's frame; soil health", "-", "CO₂ from air; mulch and compost for soil"],
        ["Hydrogen, Oxygen", "Making sugar, breathing", "Wilting when waterlogged", "Water, whapasa"],
        ["Nitrogen (N)", "Greenness, protein, growth", "Old leaves yellow", "Legumes, dhaincha, cow urine, oil cake"],
        ["Phosphorus (P)", "Roots, flowers, energy (ATP)", "Old leaves purple", "Mycorrhiza, PSB, bone meal"],
        ["Potassium (K)", "Water control, fruit quality", "Old leaf edges scorched", "Wood ash, banana stem, cow urine"],
        ["Calcium (Ca)", "Cell wall, firm fruit", "New shoots, bottom of fruit", "Eggshells, gypsum, lime"],
        ["Magnesium (Mg)", "Centre of chlorophyll", "Yellow between veins on old leaves", "Dolomite, compost"],
        ["Sulphur (S)", "Protein, oil, aroma", "New leaves wholly yellow", "Gypsum, mustard cake"],
        ["Iron (Fe)", "Making chlorophyll", "New leaves, veins green", "Compost, Jeevamrit"],
        ["Manganese (Mn)", "Splitting water for Oxygen", "New leaves, grey spots", "Compost, green manure"],
        ["Zinc (Zn)", "Growth hormone (auxin)", "Small clustered leaves, khaira disease", "Mycorrhiza, ZSB, compost"],
        ["Copper (Cu)", "Enzymes, lignin, pollen", "White tips on new leaves", "Compost, dung manure"],
        ["Boron (B)", "Flower to fruit", "Flower drop, misshapen fruit", "Compost, seaweed"],
        ["Molybdenum (Mo)", "Using nitrate, nodules", "Yellow leaves (acidic soil)", "pH correction, ash"],
        ["Chlorine (Cl)", "Water balance", "Almost never", "Rain, water"],
        ["Nickel (Ni)", "Breaking urea, germination", "Very rare", "Organic manure"],
        ["Cobalt (Co)", "N fixation in legume nodules", "Fewer nodules", "Dung manure"],
        ["Silicon (Si)", "Strong stems, armour against pests", "Lodging", "Rice husk ash, straw"],
      ],
    },
    rule: {
      hi: "याद रखने का नियम: पुराने पत्तों पर लक्षण = N, P, K, Mg (चलने वाले तत्व)। नए पत्तों या फलों पर लक्षण = Ca, S, Fe, Mn, Zn, Cu, B (न चलने वाले तत्व)।",
      en: "Rule to remember: symptoms on old leaves = N, P, K, Mg (mobile elements). Symptoms on new leaves or fruit = Ca, S, Fe, Mn, Zn, Cu, B (immobile elements).",
    },
  },

  recipes: {
    title: { hi: "प्राकृतिक इनपुट बनाने की विधियाँ", en: "Recipes for natural inputs" },
    text: {
      hi: "नीचे दी गई मात्राएँ प्राकृतिक खेती प्रशिक्षणों (सुभाष पालेकर पद्धति और सहयोगी कार्यक्रमों) में आमतौर पर बताई जाने वाली हैं। अलग-अलग स्रोतों में थोड़ा फर्क मिलता है।",
      en: "The quantities below are those commonly taught in natural farming trainings (the Subhash Palekar method and allied programmes). Sources differ slightly.",
    },
    materials: { hi: "सामग्री", en: "Ingredients" },
    items: [
      {
        t: { hi: "जीवामृत (Jeevamrit): सूक्ष्मजीवों का जामन", en: "Jeevamrit: a starter of microbes" },
        image: "jeevamrit",
        intro: { hi: "यह खाद नहीं, सूक्ष्मजीवों का स्रोत (Microbial Culture) है। ये सूक्ष्मजीव मिट्टी में पहले से मौजूद N, P, K और सूक्ष्म तत्वों को पौधे तक पहुँचाते हैं।", en: "It is not a fertiliser but a microbial culture. These microbes deliver the N, P, K and micronutrients already in the soil to the plant." },
        materials: { hi: "1 एकड़ के लिए: 200 लीटर पानी, 10 kg देसी गाय का ताजा गोबर, 5-10 लीटर गोमूत्र, 2 kg गुड़, 2 kg दाल का आटा (बेसन), एक मुट्ठी मेड़ या पुराने पेड़ के नीचे की मिट्टी।", en: "For 1 acre: 200 litres water, 10 kg fresh native cow dung, 5–10 litres cow urine, 2 kg jaggery, 2 kg pulse flour (besan), a handful of soil from a bund or under an old tree." },
        steps: {
          hi: ["सब कुछ प्लास्टिक के ड्रम में मिलाएँ और जूट की बोरी से ढककर छाया में रखें।", "दिन में दो बार लकड़ी से घड़ी की दिशा में 1-2 मिनट घुमाएँ।", "गर्मी में 48 घंटे, सर्दी में 3-4 दिन में तैयार। 7 दिन के अंदर इस्तेमाल कर लें।", "सिंचाई के पानी के साथ खेत में दें, या छानकर पत्तों पर छिड़कें (शुरुआत में 5%, बाद में 10% घोल)।"],
          en: ["Mix everything in a plastic drum, cover with a jute sack and keep in shade.", "Stir clockwise with a stick for 1–2 minutes twice a day.", "Ready in 48 hours in summer, 3–4 days in winter. Use within 7 days.", "Apply with irrigation water, or strain and spray on leaves (5% at first, later 10%)."],
        },
      },
      {
        t: { hi: "घनजीवामृत (Ghanjeevamrit): सूखा जीवामृत", en: "Ghanjeevamrit: dry Jeevamrit" },
        intro: { hi: "बुवाई के समय डालने के लिए ठोस रूप, जिसे महीनों तक रखा जा सकता है।", en: "A solid form for applying at sowing, which keeps for months." },
        materials: { hi: "100 kg देसी गोबर, 1 kg गुड़, 1 kg बेसन, एक मुट्ठी मेड़ की मिट्टी, थोड़ा गोमूत्र (आटे जैसा गूँधने लायक)।", en: "100 kg native cow dung, 1 kg jaggery, 1 kg gram flour, a handful of bund soil, a little cow urine (enough to knead like dough)." },
        steps: {
          hi: ["सब मिलाकर ढेर बनाएँ और जूट की बोरी से ढककर 48 घंटे छाया में रखें।", "फिर छाया में पतला फैलाकर सुखाएँ, भुरभुरा करके बोरियों में भरें। लगभग 6 महीने तक उपयोगी।", "बुवाई के समय लगभग 200 kg प्रति एकड़।"],
          en: ["Mix into a heap, cover with a jute sack and keep in shade for 48 hours.", "Then spread thin in shade to dry, crumble and fill sacks. Keeps for about 6 months.", "About 200 kg per acre at sowing."],
        },
      },
      {
        t: { hi: "बीजामृत (Beejamrit): बीज संस्कार", en: "Beejamrit: seed treatment" },
        intro: { hi: "बीज को मिट्टी से आने वाली बीमारियों से बचाता है और जड़ों को शुरुआत से ही अच्छे सूक्ष्मजीवों से जोड़ता है।", en: "Protects seed from soil-borne disease and links roots with good microbes from the start." },
        materials: { hi: "20 लीटर पानी, 5 kg देसी गोबर (कपड़े में बाँधकर), 5 लीटर गोमूत्र, 50 g चूना, एक मुट्ठी मेड़ की मिट्टी।", en: "20 litres water, 5 kg native cow dung (tied in cloth), 5 litres cow urine, 50 g lime, a handful of bund soil." },
        steps: {
          hi: ["गोबर की पोटली रात भर पानी में लटकाएँ।", "सुबह निचोड़कर बाकी सामग्री मिलाएँ।", "बीज पर लगाकर छाया में सुखाएँ और बो दें।"],
          en: ["Hang the bundle of dung in the water overnight.", "In the morning squeeze it out and add the other ingredients.", "Coat the seed, dry in shade and sow."],
        },
      },
    ],
    homeTitle: { hi: "तत्व-विशेष घरेलू इनपुट", en: "Element-specific home inputs" },
    homeHead: { hi: ["इनपुट", "मुख्य तत्व", "कैसे बनाएँ / उपयोग करें"], en: ["Input", "Main element", "How to make / use"] },
    homeRows: {
      hi: [
        ["केले के छिलके का तरल", "K, थोड़ा P", "छिलके पानी में 7-10 दिन सड़ाएँ, छानकर पानी में पतला करके जड़ में डालें"],
        ["अंडे के छिलके का चूर्ण", "Ca", "धोकर, सुखाकर, बारीक पीसकर मिट्टी में मिलाएँ"],
        ["लकड़ी की राख", "K, Ca", "केवल अम्लीय या सामान्य मिट्टी में, थोड़ी मात्रा में छिड़कें"],
        ["माछी अमीनो अम्ल (FAA)", "N", "मछली के अवशेष और गुड़ बराबर मात्रा में 3-4 हफ्ते सड़ाएँ; बहुत पतला करके छिड़काव"],
        ["नीम खली", "N, कीट नियंत्रण", "बुवाई से पहले मिट्टी में मिलाएँ"],
        ["धान की भूसी की राख", "Si, K", "खेत में फैलाएँ या Compost में मिलाएँ"],
      ],
      en: [
        ["Banana peel liquid", "K, some P", "Rot peels in water for 7–10 days, strain, dilute and pour at the roots"],
        ["Eggshell powder", "Ca", "Wash, dry, grind fine and mix into the soil"],
        ["Wood ash", "K, Ca", "Only on acidic or normal soil, sprinkle a little"],
        ["Fish amino acid (FAA)", "N", "Rot fish waste with an equal weight of jaggery for 3–4 weeks; spray very dilute"],
        ["Neem cake", "N, pest control", "Mix into the soil before sowing"],
        ["Rice husk ash", "Si, K", "Spread on the field or mix into compost"],
      ],
    },
    ashImage: "ash",
    caution: {
      hi: "स्वच्छता: गोबर, मूत्र और मछली से बने इनपुट बनाते समय दस्ताने पहनें; कच्ची खाई जाने वाली सब्जियों पर तोड़ने से ठीक पहले छिड़काव न करें।",
      en: "Hygiene: wear gloves when making inputs from dung, urine or fish; don't spray vegetables eaten raw just before harvest.",
    },
  },

  tips: {
    title: { hi: "व्यावहारिक सलाह", en: "Practical advice" },
    items: [
      { icon: "🧪", t: { hi: "पहले मिट्टी जाँच", en: "Test the soil first" }, d: { hi: "अनुमान के बजाय Soil Health Card से pH, Organic Carbon और कमी वाले तत्व जानें।", en: "Instead of guessing, learn pH, organic carbon and deficient elements from a Soil Health Card." } },
      { icon: "🌳", t: { hi: "विविधता सबसे बड़ा सूक्ष्म तत्व स्रोत है", en: "Diversity is the biggest micronutrient source" }, d: { hi: "अलग-अलग गहराई की जड़ों वाली फसलें, पेड़ और पशु एक साथ रखें। गहरी जड़ों वाले पेड़ नीचे से खनिज खींचकर पत्तों के जरिए ऊपर लाते हैं।", en: "Keep crops with roots at different depths, trees and animals together. Deep-rooted trees draw minerals from below and bring them up through their leaves." } },
      { icon: "🔥", t: { hi: "कुछ भी जलाएँ नहीं", en: "Burn nothing" }, d: { hi: "कुछ भी जलाएँ नहीं, खेत से बाहर न भेजें: फसल के अवशेष सबसे सस्ता संपूर्ण खाद हैं।", en: "Burn nothing and send nothing off the farm: crop residue is the cheapest complete manure." } },
      { icon: "⏳", t: { hi: "धीरे-धीरे बदलाव (Transition)", en: "Change gradually (transition)" }, d: { hi: "रासायनिक से प्राकृतिक खेती में मिट्टी के सूक्ष्मजीव लौटने में आमतौर पर 2-3 साल लगते हैं। इस दौरान पैदावार थोड़ी कम हो सकती है, इसलिए पहले खेत के एक हिस्से से शुरुआत करें।", en: "Moving from chemical to natural farming, soil microbes usually take 2–3 years to return. Yields may dip a little meanwhile, so start with part of the farm." } },
    ],
  },

  footer: {
    note: {
      hi: "मात्राएँ और आंकड़े अनुमानित हैं और अलग-अलग स्रोतों में थोड़े अलग मिलते हैं। अपने खेत के लिए नज़दीकी Krishi Vigyan Kendra (KVK) या Soil Health Card से पुष्टि करें।",
      en: "Quantities and figures are approximate and vary slightly between sources. Confirm for your own field with the nearest Krishi Vigyan Kendra (KVK) or a Soil Health Card.",
    },
  },
}
