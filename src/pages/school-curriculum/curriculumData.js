// "बाल कृषि पाठशाला" — Natural Farming school curriculum (/for/school-kids).
// Hindi text is taken word-for-word from the curriculum brief; English is a
// translation of it. Every text field is { hi, en }.
import imgSchool from "../../assets/audience/school.jpg"
import imgKids from "../../assets/audience/kids.jpg"
import imgGrowbags from "../../assets/audience/growbags.jpg"
import imgHands from "../../assets/natural_farming/intro.jpg"
import imgEarthworm from "../../assets/natural_farming/b_soil.jpg"
import imgSeeds from "../../assets/natural_farming/p_beej.jpg"
import imgJeevamrit from "../../assets/natural_farming/jeevamrit.jpg"
import imgMulch from "../../assets/natural_farming/p_mulch.jpg"
import imgIntercrop from "../../assets/natural_farming/p_bio.jpg"
import imgBee from "../../assets/natural_farming/b_bio.jpg"
import imgDrip from "../../assets/natural_farming/b_water.jpg"
import imgHarvest from "../../assets/natural_farming/b_food.jpg"

export const scImages = {
  school: { src: imgSchool, credit: "Pradhan.suchil · GFDL", source: "https://commons.wikimedia.org/wiki/File:Primary_school_garden_-_Baragounian.jpg", alt: { hi: "एक प्राथमिक स्कूल का बगीचा", en: "A primary school garden" } },
  kids: { src: imgKids, credit: "Zabna · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Children_planting_in_Chalakudy_River_bank.JPG", alt: { hi: "मिट्टी में पौधा लगाते बच्चे", en: "Children planting in the soil" } },
  growbags: { src: imgGrowbags, credit: "AcornToOak · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Vegetable_in_Grow_Bags.jpg", alt: { hi: "Grow bags में उगती सब्ज़ियाँ", en: "Vegetables growing in grow bags" } },
  hands: { src: imgHands, credit: "Unsplash", source: "https://unsplash.com/photos/nvk0j5IAgwI", alt: { hi: "हाथों में मिट्टी और खाद", en: "Soil and compost in two hands" } },
  earthworm: { src: imgEarthworm, credit: "goosmurf · CC BY 2.0", source: "https://www.flickr.com/photos/19349404@N00/3828755105", alt: { hi: "मिट्टी में केंचुए", en: "Earthworms in soil" } },
  seeds: { src: imgSeeds, credit: "Deejriley · CC BY-SA 4.0", source: "https://commons.wikimedia.org/w/index.php?curid=150173856", alt: { hi: "हाथों में अलग-अलग देसी बीज", en: "Different native seeds in hands" } },
  jeevamrit: { src: imgJeevamrit, credit: "Param6102 · CC BY-SA 4.0", source: "https://commons.wikimedia.org/w/index.php?curid=95440780", alt: { hi: "ड्रम में Jeevamrit बनाते किसान", en: "A farmer preparing Jeevamrit in drums" } },
  mulch: { src: imgMulch, credit: "Doug Beckers · CC BY-SA 2.0", source: "https://www.flickr.com/photos/37103729@N02/6379111547", alt: { hi: "भूसे से ढकी क्यारी", en: "A bed covered with straw mulch" } },
  intercrop: { src: imgIntercrop, credit: "Ezhuttukari · CC BY-SA 3.0", source: "https://commons.wikimedia.org/w/index.php?curid=18415693", alt: { hi: "नारियल के पेड़ों के बीच गेंदे की खेती", en: "Marigold grown between coconut trees" } },
  bee: { src: imgBee, credit: "stanzebla · CC BY-SA 2.0", source: "https://www.flickr.com/photos/92823399@N07/51604452384", alt: { hi: "सरसों के फूलों पर मधुमक्खी", en: "A bee among mustard flowers" } },
  drip: { src: imgDrip, credit: "Vis M · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Drip_irrigation_and_mulching.jpg", alt: { hi: "Drip सिंचाई वाली क्यारियाँ", en: "Beds with drip irrigation" } },
  harvest: { src: imgHarvest, credit: "Unsplash", source: "https://unsplash.com/photos/hmoDcZnB7uw", alt: { hi: "ताज़ी सब्ज़ियों की टोकरी", en: "A crate of fresh vegetables" } },
}

export const sc = {
  brand: { hi: "🌱 बाल कृषि पाठशाला", en: "🌱 Bal Krishi Pathshala" },
  nav: [
    ["home", { hi: "परिचय", en: "Intro" }],
    ["why", { hi: "क्यों", en: "Why" }],
    ["policy", { hi: "नीति", en: "Policy" }],
    ["syllabus", { hi: "पाठ्यक्रम", en: "Syllabus" }],
    ["needs", { hi: "आवश्यकताएँ", en: "Needs" }],
    ["assessment", { hi: "मूल्यांकन", en: "Assessment" }],
    ["safety", { hi: "सुरक्षा", en: "Safety" }],
    ["pilot", { hi: "Pilot", en: "Pilot" }],
    ["faq", { hi: "प्रश्न", en: "FAQ" }],
  ],
  print: { hi: "🖨️ Print / PDF", en: "🖨️ Print / PDF" },

  hero: {
    pill: { hi: "NEP 2020 के अनुरूप · कक्षा 3 से 12", en: "Aligned with NEP 2020 · Classes 3 to 12" },
    title: { hi: "स्कूलों में Natural Farming शिक्षा", en: "Natural Farming education in schools" },
    subtitle: { hi: "मिट्टी से जुड़ें, करके सीखें।", en: "Connect with the soil, learn by doing." },
    text: {
      hi: "यह पाठ्यक्रम बच्चों को किताब से निकालकर खेत तक ले जाता है। कक्षा 3 से 12 तक तीन चरणों में बच्चे मिट्टी, बीज, पानी और पौधों को समझते हैं, रसायन-मुक्त खेती के तरीके अपने हाथों से करते हैं, और विज्ञान, गणित व पर्यावरण को जीवंत रूप में सीखते हैं। शुरुआत के लिए न बड़ी ज़मीन चाहिए, न बड़ा बजट।",
      en: "This curriculum takes children out of the textbook and into the field. In three stages from Class 3 to 12, children understand soil, seeds, water and plants, practise chemical-free farming with their own hands, and learn science, maths and environment in a living way. You need neither a large plot nor a large budget to begin.",
    },
    primary: { hi: "पाठ्यक्रम देखें", en: "See the syllabus" },
    secondary: { hi: "Pilot योजना", en: "Pilot plan" },
    stats: [
      { big: { hi: "3 चरण", en: "3 stages" }, small: { hi: "कक्षा 3–5, 6–8, 9–12", en: "Classes 3–5, 6–8, 9–12" } },
      { big: { hi: "22 इकाइयाँ", en: "22 units" }, small: { hi: "हर इकाई में practical", en: "A practical in every unit" } },
      { big: { hi: "500 वर्ग फुट", en: "500 sq ft" }, small: { hi: "इतनी जगह से शुरुआत संभव", en: "Enough space to begin" } },
    ],
    image: "kids",
  },

  why: {
    title: { hi: "यह शिक्षा क्यों ज़रूरी है?", en: "Why does this education matter?" },
    text: {
      hi: "आज के बहुत से बच्चे, गाँव के भी, यह नहीं जानते कि उनकी थाली का भोजन कैसे उगता है। रसायनों के अधिक उपयोग से मिट्टी की उर्वरता घटी है और खेती की लागत बढ़ी है। स्कूल वह जगह है जहाँ अगली पीढ़ी प्रकृति के साथ संतुलन से जीना सीख सकती है। Natural Farming इसके लिए सबसे सरल और सस्ता रास्ता है, क्योंकि इसमें लगभग सारी सामग्री स्थानीय रूप से मिल जाती है।",
      en: "Many children today, even in villages, do not know how the food on their plate is grown. Heavy use of chemicals has reduced soil fertility and raised the cost of farming. School is where the next generation can learn to live in balance with nature. Natural Farming is the simplest and cheapest way to do this, because almost all its materials are available locally.",
    },
    cards: [
      { icon: "leaf", t: { hi: "प्रकृति की समझ", en: "Understanding nature" }, d: { hi: "बच्चे नज़दीक से देखते हैं कि मिट्टी एक जीवित तंत्र है। केंचुए, सूक्ष्मजीव, बीज, पानी और कीट कैसे मिलकर काम करते हैं, यह समझ किताब से नहीं, अनुभव से आती है।", en: "Children see up close that soil is a living system. How earthworms, microbes, seeds, water and insects work together is understood through experience, not from a book." } },
      { icon: "handPlant", t: { hi: "करके सीखना", en: "Learning by doing" }, d: { hi: "हर इकाई में एक practical है। बच्चे बीज बोते हैं, खाद बनाते हैं, mulching करते हैं और अपनी उगाई सब्ज़ी काटते हैं। हाथ से किया हुआ काम लंबे समय तक याद रहता है।", en: "Every unit has a practical. Children sow seeds, make compost, do mulching and harvest vegetables they grew themselves. Work done by hand is remembered for a long time." } },
      { icon: "bookPlant", t: { hi: "विषयों का व्यावहारिक उपयोग", en: "Subjects put to practical use" }, d: { hi: "अंकुरण दर निकालना गणित है, photosynthesis विज्ञान है, मौसम के अनुसार फसल चुनना भूगोल है। Garden एक खुली प्रयोगशाला बन जाता है।", en: "Working out the germination rate is maths, photosynthesis is science, choosing crops by season is geography. The garden becomes an open laboratory." } },
      { icon: "people", t: { hi: "जीवन कौशल", en: "Life skills" }, d: { hi: "क्यारी की साझी ज़िम्मेदारी से टीमवर्क आता है, बीज से फसल तक का इंतज़ार धैर्य सिखाता है, और किसान के श्रम के प्रति सम्मान बढ़ता है।", en: "Sharing responsibility for a bed builds teamwork, waiting from seed to harvest teaches patience, and respect for the farmer's labour grows." } },
    ],
  },

  policy: {
    title: { hi: "सरकारी नीति से सीधा जुड़ाव", en: "A direct link with government policy" },
    text: {
      hi: "यह पाठ्यक्रम कोई अलग बोझ नहीं है। यह उन्हीं लक्ष्यों को पूरा करता है जो स्कूलों के लिए पहले से तय हैं, इसलिए इसे मौजूदा समय-सारणी और योजनाओं के भीतर ही लागू किया जा सकता है।",
      en: "This curriculum is not an extra burden. It meets the same goals already set for schools, so it can be run within the existing timetable and schemes.",
    },
    cards: [
      {
        t: { hi: "राष्ट्रीय शिक्षा नीति (NEP 2020)", en: "National Education Policy (NEP 2020)" },
        points: {
          hi: [
            "NEP 2020 कक्षा 6 से बच्चों को vocational education से परिचित कराने की बात करती है।",
            "कक्षा 6 से 8 के बीच 10 दिन का \"bagless period\" सुझाया गया है, जिसमें बच्चे माली, कारीगर जैसे स्थानीय विशेषज्ञों से सीख सकें।",
            "नीति experiential learning, यानी करके सीखने, और स्थानीय ज्ञान को पाठ्यक्रम में जोड़ने पर ज़ोर देती है।",
          ],
          en: [
            "NEP 2020 speaks of introducing children to vocational education from Class 6.",
            "It suggests a 10-day \"bagless period\" between Classes 6 and 8, when children can learn from local experts such as gardeners and craftspeople.",
            "The policy stresses experiential learning — learning by doing — and bringing local knowledge into the curriculum.",
          ],
        },
        fit: {
          hi: "यह कोर्स कैसे फिट होता है: कक्षा 6 से 8 का चरण vocational exposure है, और bagless days किसी natural farming किसान के खेत पर बिताए जा सकते हैं।",
          en: "How this course fits: the Class 6–8 stage is vocational exposure, and the bagless days can be spent on a natural farming farmer's field.",
        },
      },
      {
        t: { hi: "PM POSHAN (mid-day meal)", en: "PM POSHAN (mid-day meal)" },
        points: {
          hi: [
            "PM POSHAN योजना में स्कूलों में School Nutrition Garden बनाने का प्रावधान है।",
            "Garden की ताज़ी सब्ज़ियाँ बच्चों के भोजन में पोषण जोड़ती हैं।",
          ],
          en: [
            "The PM POSHAN scheme provides for School Nutrition Gardens in schools.",
            "Fresh vegetables from the garden add nutrition to children's meals.",
          ],
        },
        fit: {
          hi: "यह कोर्स कैसे फिट होता है: वही garden कक्षा का practical स्थल भी बन जाता है। एक ही जगह से पढ़ाई भी होती है और रसोई को सब्ज़ी भी मिलती है।",
          en: "How this course fits: the same garden becomes the class's practical site too. One place gives both lessons and vegetables for the kitchen.",
        },
      },
    ],
    note: {
      hi: "नीतियों और योजनाओं के प्रावधान समय-समय पर बदलते हैं। लागू करने से पहले अपने राज्य शिक्षा विभाग के वर्तमान दिशा-निर्देश जाँच लें।",
      en: "Provisions of policies and schemes change from time to time. Check your state education department's current guidelines before implementing.",
    },
  },

  syllabus: {
    title: { hi: "कक्षा-वार पाठ्यक्रम", en: "Class-wise syllabus" },
    text: {
      hi: "पाठ्यक्रम तीन चरणों में बँटा है। छोटी कक्षाओं में खेल और जिज्ञासा, बीच की कक्षाओं में Natural Farming की मूल तकनीकें, और बड़ी कक्षाओं में योजना, data और उद्यमिता। हर चरण पिछले चरण पर आगे बढ़ता है।",
      en: "The curriculum has three stages: play and curiosity in the junior classes, the core techniques of Natural Farming in the middle classes, and planning, data and entrepreneurship in the senior classes. Each stage builds on the one before.",
    },
    labels: {
      unit: { hi: "इकाई", en: "Unit" },
      teach: { hi: "क्या सिखाएँ", en: "What to teach" },
      activity: { hi: "गतिविधि", en: "Activity" },
      outcome: { hi: "सीखने का परिणाम", en: "Learning outcome" },
      learn: { hi: "क्या सीखेंगे", en: "What they will learn" },
      practical: { hi: "Practical", en: "Practical" },
      project: { hi: "Practical / Project", en: "Practical / Project" },
      recipe: { hi: "विधि", en: "Recipe" },
      caution: { hi: "सावधानी", en: "Caution" },
    },
    tabs: [
      {
        id: "junior",
        tab: { hi: "कक्षा 3–5", en: "Classes 3–5" },
        heading: { hi: "कक्षा 3 से 5, खेल-खेल में परिचय", en: "Classes 3 to 5: an introduction through play" },
        info: {
          time: { hi: "⏱ सप्ताह में 1 period (40 मिनट)", en: "⏱ 1 period a week (40 minutes)" },
          goal: { hi: "🎯 लक्ष्य: मिट्टी और पौधों के प्रति जिज्ञासा और प्रेम जगाना", en: "🎯 Goal: spark curiosity and love for soil and plants" },
        },
        intro: {
          hi: "इस उम्र में लक्ष्य तकनीक सिखाना नहीं, बल्कि बच्चों को मिट्टी से दोस्ती कराना है। हर period का आधा समय बाहर garden में बीते।",
          en: "At this age the goal is not to teach technique but to make children friends with the soil. Half of every period should be spent outside in the garden.",
        },
        image: "school",
        kind: "table",
        rows: {
          hi: [
            ["1. मिट्टी को जानो", "मिट्टी में जीवन है; केंचुआ मिट्टी को नरम और उपजाऊ बनाता है, इसलिए वह किसान का मित्र है", "समूह में एक कटोरी मिट्टी लेकर केंचुए, चींटियाँ, जड़ें ढूँढना और चित्र बनाना; देखने के बाद जीवों को वापस मिट्टी में छोड़ना", "बच्चा मिट्टी के तीन जीवों के नाम और उनका काम बता सके"],
            ["2. बीज से पौधा", "बीज के अंदर छोटा पौधा सोया है; पानी और गर्मी मिलने पर वह जागता है", "गीले कपड़े में चना या मूंग रखकर रोज़ देखना, जड़ और अंकुर का चित्र डायरी में बनाना", "बच्चा अंकुरण के क्रम को चित्र से समझा सके"],
            ["3. पौधों की देखभाल", "पौधे को पानी, धूप और हवा चाहिए; ज़्यादा पानी भी नुकसान करता है", "हर बच्चे का अपना गमला या क्यारी का हिस्सा; धनिया, मेथी, पालक उगाना (ये 3–4 हफ़्ते में तैयार हो जाते हैं)", "बच्चा अपने पौधे की नियमित देखभाल करे"],
            ["4. रसोई का कचरा", "सब्ज़ी के छिलके और सूखी पत्तियाँ सड़कर खाद बनती हैं; plastic कभी खाद नहीं बनता", "Mid-day meal के छिलकों से मटका compost या छोटा compost pit; हर हफ़्ते पलटना और बदलाव देखना", "बच्चा गीला और सूखा कचरा अलग कर सके"],
            ["5. हमारा भोजन कहाँ से आता है", "खेत से थाली तक का सफ़र; किसान का महत्व", "पास के किसान के खेत की सैर; किसान से पाँच सवाल पूछना", "बच्चा अपनी थाली की तीन चीज़ों का स्रोत बता सके"],
          ],
          en: [
            ["1. Know the soil", "Soil is alive; the earthworm makes soil soft and fertile, so it is the farmer's friend", "In groups, take a bowl of soil and look for earthworms, ants and roots, and draw them; put the creatures back in the soil afterwards", "The child can name three soil creatures and say what they do"],
            ["2. From seed to plant", "A tiny plant is asleep inside the seed; it wakes up when it gets water and warmth", "Keep chana or moong in a wet cloth and watch daily; draw the root and shoot in the diary", "The child can explain the stages of germination with a drawing"],
            ["3. Caring for plants", "A plant needs water, sunlight and air; too much water also harms it", "Each child has their own pot or part of a bed; grow coriander, methi and spinach (ready in 3–4 weeks)", "The child looks after their plant regularly"],
            ["4. Kitchen waste", "Vegetable peels and dry leaves rot into compost; plastic never becomes compost", "Pot (matka) compost or a small compost pit from mid-day meal peels; turn it weekly and watch the change", "The child can separate wet and dry waste"],
            ["5. Where our food comes from", "The journey from field to plate; the importance of the farmer", "Visit a nearby farmer's field; ask the farmer five questions", "The child can name the source of three things on their plate"],
          ],
        },
      },
      {
        id: "middle",
        tab: { hi: "कक्षा 6–8", en: "Classes 6–8" },
        heading: { hi: "कक्षा 6 से 8, Natural Farming की मूल तकनीकें", en: "Classes 6 to 8: the core techniques of Natural Farming" },
        info: {
          time: { hi: "⏱ सप्ताह में 2 period + महीने में 1 practical दिवस", en: "⏱ 2 periods a week + 1 practical day a month" },
          goal: { hi: "🎯 लक्ष्य: स्कूल की क्यारी में पूरी तरह रसायन-मुक्त फसल उगाना", en: "🎯 Goal: grow a fully chemical-free crop in the school bed" },
        },
        intro: {
          hi: "यह पाठ्यक्रम का केंद्र है। आठ इकाइयों में बच्चे वह सब सीखते हैं जो एक natural farming किसान रोज़ करता है। घोल बनाने की विधियाँ स्कूल स्तर की छोटी मात्रा में दी गई हैं और हर बार शिक्षक की निगरानी में ही बनाई जाएँ।",
          en: "This is the heart of the curriculum. In eight units children learn everything a natural farming farmer does every day. Recipes for the preparations are given in small school-level quantities and must always be made under a teacher's supervision.",
        },
        kind: "accordion",
        units: [
          {
            t: { hi: "इकाई 1: Natural Farming क्या है?", en: "Unit 1: What is Natural Farming?" },
            image: "hands",
            learn: {
              hi: "खेती के तीन तरीके। रासायनिक खेती में बाज़ार की खाद और कीटनाशक डाले जाते हैं। Organic farming में रसायन नहीं होते, पर अक्सर बाहर से बड़ी मात्रा में जैविक खाद लानी पड़ती है। Natural farming में बाहर से लगभग कुछ नहीं खरीदा जाता; खेत और गाँव में मिलने वाली चीज़ों से मिट्टी के जीवों को सक्रिय किया जाता है और वही पौधे को पोषण देते हैं। इसके चार स्तंभ: Jeevamrit (मिट्टी के जीवों का भोजन), Beejamrit (बीज की सुरक्षा), Achhadan या mulching (मिट्टी को ढकना), और Whapasa (मिट्टी में नमी और हवा का संतुलन)।",
              en: "Three ways of farming. Chemical farming uses fertilisers and pesticides from the market. Organic farming uses no chemicals, but often needs large amounts of organic manure brought from outside. Natural farming buys almost nothing from outside; things found on the farm and in the village are used to activate soil life, and that soil life feeds the plant. Its four pillars: Jeevamrit (food for soil life), Beejamrit (seed protection), Achhadan or mulching (covering the soil) and Whapasa (the balance of moisture and air in the soil).",
            },
            practical: {
              hi: "तीनों तरीकों की तुलना का chart बनाना (लागत, मिट्टी पर असर, स्वास्थ्य पर असर); स्कूल की क्यारी के लिए जगह चुनना और साफ़ करना।",
              en: "Make a chart comparing the three methods (cost, effect on soil, effect on health); choose and clear a spot for the school bed.",
            },
            outcome: { hi: "बच्चा तीनों तरीकों का अंतर और चार स्तंभ अपने शब्दों में बता सके।", en: "The child can explain the difference between the three methods and the four pillars in their own words." },
          },
          {
            t: { hi: "इकाई 2: मिट्टी का स्वास्थ्य", en: "Unit 2: Soil health" },
            image: "earthworm",
            learn: {
              hi: "मिट्टी की परतें (ऊपरी उपजाऊ परत, नीचे की कठोर परत)। Humus क्या है और यह पानी को स्पंज की तरह कैसे रोकता है। Microorganisms (बैक्टीरिया, फफूंद) कैसे पत्तियों को खाद में बदलते हैं। स्वस्थ मिट्टी की पहचान: गहरा रंग, भुरभुरी, मिट्टी की सोंधी खुशबू, केंचुए।",
              en: "Soil layers (the fertile top layer, the hard layer below). What humus is and how it holds water like a sponge. How microorganisms (bacteria, fungi) turn leaves into compost. Signs of healthy soil: dark colour, crumbly, an earthy smell, earthworms.",
            },
            practical: {
              hi: "दो जगह की मिट्टी लाना (पेड़ के नीचे की और सड़क किनारे की कठोर)। दोनों को कीप में रखकर बराबर पानी डालना और देखना किसमें पानी जल्दी सोखता है और कितना पानी नीचे निकलता है। गिलास में मिट्टी घोलकर परतें बनते देखना (रेत, गाद, चिकनी मिट्टी)।",
              en: "Bring soil from two places (under a tree, and hard soil from the roadside). Put each in a funnel, pour equal water and see which soaks it up faster and how much drains out. Stir soil in a glass of water and watch the layers settle (sand, silt, clay).",
            },
            outcome: { hi: "बच्चा स्वस्थ और थकी हुई मिट्टी में तीन अंतर बता सके।", en: "The child can name three differences between healthy and tired soil." },
          },
          {
            t: { hi: "इकाई 3: बीज संस्कार (Beejamrit)", en: "Unit 3: Seed treatment (Beejamrit)" },
            image: "seeds",
            learn: {
              hi: "देसी बीज स्थानीय मौसम के अनुकूल होते हैं और इन्हें अगले साल के लिए बचाया जा सकता है (seed saving)। Beejamrit एक घोल है जिससे बीज बोने से पहले उपचारित किए जाते हैं, ताकि शुरुआती रोगों से बचाव हो।",
              en: "Native seeds suit the local climate and can be saved for next year (seed saving). Beejamrit is a solution used to treat seeds before sowing, to protect them from early diseases.",
            },
            recipe: {
              hi: "स्कूल स्तर, लगभग 10 किलो बीज के लिए: 2 लीटर पानी, 500 ग्राम देसी गाय का गोबर, 500 मि.ली. गोमूत्र, लगभग 5 ग्राम चूना, एक चुटकी खेत की मिट्टी। गोबर को कपड़े में बाँधकर रात भर पानी में लटकाएँ, सुबह निचोड़कर बाकी सामग्री मिलाएँ। बीजों पर छिड़ककर छाया में सुखाएँ और उसी दिन बोएँ।",
              en: "School level, for about 10 kg of seed: 2 litres water, 500 g native cow dung, 500 ml cow urine, about 5 g lime, a pinch of field soil. Tie the dung in a cloth and hang it in the water overnight; in the morning squeeze it out and add the other ingredients. Sprinkle on the seeds, dry them in shade and sow the same day.",
            },
            caution: { hi: "चूना त्वचा और आँख के लिए हानिकारक है, इसे केवल शिक्षक मिलाएँ।", en: "Lime is harmful to skin and eyes; only the teacher should mix it." },
            practical: {
              hi: "20-20 बीज के दो समूह, एक Beejamrit से उपचारित, दूसरा बिना उपचार। 10 दिन बाद गिनना कि कितने अंकुरित हुए और अंकुरण दर = (अंकुरित बीज ÷ कुल बीज) × 100 निकालना।",
              en: "Two groups of 20 seeds each, one treated with Beejamrit and one untreated. After 10 days count how many sprouted and work out germination rate = (sprouted seeds ÷ total seeds) × 100.",
            },
            outcome: { hi: "बच्चा बीज उपचार का कारण बता सके और अंकुरण दर निकाल सके।", en: "The child can explain why seeds are treated and can calculate the germination rate." },
          },
          {
            t: { hi: "इकाई 4: Jeevamrit और Ghanjeevamrit", en: "Unit 4: Jeevamrit and Ghanjeevamrit" },
            image: "jeevamrit",
            learn: {
              hi: "Jeevamrit एक तरल घोल है जो खाद नहीं, बल्कि \"जामन\" की तरह काम करता है: इसमें करोड़ों उपयोगी सूक्ष्मजीव होते हैं जो मिट्टी में जाकर पोषक तत्व पौधों तक पहुँचाते हैं। Ghanjeevamrit इसी का सूखा (ठोस) रूप है, जिसे लंबे समय तक रखा जा सकता है।",
              en: "Jeevamrit is a liquid that works not as a fertiliser but like a \"starter\" (jaaman): it carries millions of useful microbes that go into the soil and deliver nutrients to plants. Ghanjeevamrit is its dry (solid) form, which can be stored for a long time.",
            },
            recipe: {
              hi: "Jeevamrit (स्कूल स्तर): 20 लीटर पानी, 1 किलो देसी गाय का गोबर, 500 मि.ली. से 1 लीटर गोमूत्र, 200 ग्राम गुड़, 200 ग्राम बेसन या किसी दाल का आटा, एक मुट्ठी पेड़ के नीचे की मिट्टी। सब को प्लास्टिक के ड्रम में मिलाकर छाया में ढककर रखें, दिन में दो बार लकड़ी से घड़ी की दिशा में घुमाएँ। लगभग 2 से 4 दिन में तैयार; लगभग एक हफ़्ते के भीतर इस्तेमाल करें। सिंचाई के पानी के साथ मिट्टी में डालें।\n\nGhanjeevamrit (स्कूल स्तर): 10 किलो गोबर, 100 ग्राम गुड़, 100 ग्राम बेसन, एक मुट्ठी मिट्टी और थोड़ा गोमूत्र मिलाकर लड्डू जैसा बनाएँ, छाया में सुखाकर बोरे में रखें। बुवाई के समय मिट्टी में मिलाएँ।",
              en: "Jeevamrit (school level): 20 litres water, 1 kg native cow dung, 500 ml to 1 litre cow urine, 200 g jaggery, 200 g gram flour or any pulse flour, a handful of soil from under a tree. Mix everything in a plastic drum, keep it covered in shade, and stir clockwise with a stick twice a day. Ready in about 2 to 4 days; use within about a week. Apply to the soil with irrigation water.\n\nGhanjeevamrit (school level): mix 10 kg dung, 100 g jaggery, 100 g gram flour, a handful of soil and a little cow urine into laddoo-like balls, dry them in shade and store in a sack. Mix into the soil at sowing time.",
            },
            practical: {
              hi: "शिक्षक की निगरानी में समूह बनाकर Jeevamrit बनाना, रोज़ घुमाने की ज़िम्मेदारी बाँटना, और एक क्यारी में Jeevamrit डालकर दूसरी से पौधों की बढ़त की तुलना करना।",
              en: "Make Jeevamrit in groups under the teacher's supervision, share out the daily stirring, and compare plant growth in a bed given Jeevamrit with one that wasn't.",
            },
            outcome: { hi: "बच्चा समझा सके कि Jeevamrit खाद नहीं बल्कि सूक्ष्मजीवों का स्रोत है।", en: "The child can explain that Jeevamrit is not a fertiliser but a source of microbes." },
          },
          {
            t: { hi: "इकाई 5: Mulching (आच्छादन)", en: "Unit 5: Mulching (Achhadan)" },
            image: "mulch",
            learn: {
              hi: "खुली मिट्टी धूप में सूखती और कठोर होती है। सूखी पत्तियों, भूसे या फसल के अवशेष से मिट्टी ढकने पर नमी बचती है, खरपतवार कम उगते हैं, केंचुए ऊपर आते हैं और धीरे-धीरे यह परत खुद खाद बन जाती है।",
              en: "Bare soil dries out and hardens in the sun. Covering it with dry leaves, straw or crop residue saves moisture, keeps weeds down, brings earthworms up, and the layer slowly turns into compost itself.",
            },
            practical: {
              hi: "एक जैसी दो क्यारियाँ, एक पर 3 से 4 इंच सूखी पत्तियों की परत, दूसरी खुली। हर दिन एक उंगली डालकर नमी जाँचना, और एक महीने बाद दोनों में खरपतवार गिनना।",
              en: "Two identical beds, one with a 3–4 inch layer of dry leaves and one bare. Check moisture daily with a finger, and count weeds in both after a month.",
            },
            outcome: { hi: "बच्चा mulching के तीन लाभ प्रयोग के आधार पर बता सके।", en: "The child can give three benefits of mulching based on the experiment." },
          },
          {
            t: { hi: "इकाई 6: मिश्रित खेती (Multi-cropping)", en: "Unit 6: Mixed cropping (Multi-cropping)" },
            image: "intercrop",
            learn: {
              hi: "एक साथ कई फसलें उगाने से जोखिम बँटता है और पौधे एक-दूसरे की मदद करते हैं। दलहन (चना, मटर, लोबिया) की जड़ों की गाँठों में बैक्टीरिया हवा की नाइट्रोजन मिट्टी में जोड़ते हैं। Companion planting: कुछ पौधे पास-पास अच्छे उगते हैं, जैसे टमाटर के साथ गेंदा।",
              en: "Growing several crops together spreads the risk, and plants help one another. Bacteria in the root nodules of pulses (chana, peas, cowpea) add nitrogen from the air to the soil. Companion planting: some plants grow well side by side, such as marigold with tomato.",
            },
            practical: {
              hi: "\"तीन बहनें\" क्यारी: मक्का (सीधा सहारा), लोबिया (मक्के पर चढ़ती है और नाइट्रोजन देती है), कद्दू (ज़मीन ढककर नमी बचाता है)। जड़ उखाड़कर दलहन की गाँठें देखना।",
              en: "A \"three sisters\" bed: maize (a straight support), cowpea (climbs the maize and adds nitrogen), pumpkin (covers the ground and saves moisture). Pull up a root and look at the pulse nodules.",
            },
            outcome: { hi: "बच्चा तीन फसलों का साथी संयोजन स्वयं सुझा सके।", en: "The child can suggest a companion combination of three crops on their own." },
          },
          {
            t: { hi: "इकाई 7: कीट प्रबंधन, बिना ज़हर के", en: "Unit 7: Pest management, without poison" },
            image: "bee",
            learn: {
              hi: "हर कीट दुश्मन नहीं होता। मित्र कीट: लेडीबर्ड (माहू खाती है), मकड़ी, मधुमक्खी, तितली। शत्रु कीट: माहू, सफ़ेद मक्खी, इल्लियाँ। स्वस्थ मिट्टी और मिश्रित खेती से कीट अपने आप कम होते हैं। ज़रूरत पड़ने पर वनस्पति आधारित घोल, जैसे Neemastra, का छिड़काव।",
              en: "Not every insect is an enemy. Friendly insects: ladybird (eats aphids), spider, bee, butterfly. Harmful insects: aphids, whitefly, caterpillars. Healthy soil and mixed cropping reduce pests on their own. When needed, spray a plant-based preparation such as Neemastra.",
            },
            recipe: {
              hi: "Neemastra (स्कूल स्तर): 5 लीटर पानी, 250 ग्राम कुटी हुई नीम की पत्तियाँ, 250 मि.ली. गोमूत्र, 50 ग्राम गोबर। मिलाकर लगभग 48 घंटे ढककर रखें, दिन में दो बार घुमाएँ, फिर कपड़े से छानकर शाम को पत्तियों पर छिड़कें।",
              en: "Neemastra (school level): 5 litres water, 250 g crushed neem leaves, 250 ml cow urine, 50 g dung. Mix and keep covered for about 48 hours, stirring twice a day, then strain through a cloth and spray on the leaves in the evening.",
            },
            caution: {
              hi: "Agniastra जैसे मिर्च-लहसुन वाले तीखे घोल आँख और त्वचा में जलन करते हैं। बच्चे इन्हें स्वयं न बनाएँ और न छिड़कें; शिक्षक केवल demonstration दें।",
              en: "Pungent chilli-garlic preparations such as Agniastra irritate the eyes and skin. Children must not make or spray them; the teacher should only give a demonstration.",
            },
            practical: {
              hi: "Garden में \"कीट सर्वेक्षण\": हर समूह 10 पौधों पर मिलने वाले कीटों की तालिका बनाए, मित्र और शत्रु में बाँटे। शिक्षक के साथ Neemastra बनाना।",
              en: "An \"insect survey\" in the garden: each group lists the insects found on 10 plants and sorts them into friends and enemies. Make Neemastra with the teacher.",
            },
            outcome: { hi: "बच्चा तीन मित्र और तीन शत्रु कीट पहचान सके।", en: "The child can identify three friendly and three harmful insects." },
          },
          {
            t: { hi: "इकाई 8: जल संरक्षण", en: "Unit 8: Water conservation" },
            image: "drip",
            learn: {
              hi: "वर्षा का पानी सबसे साफ़ स्रोत है। Rainwater harvesting से छत का पानी टंकी या गड्ढे में जमा होता है। Drip (बूँद-बूँद) सिंचाई से पानी सीधे जड़ तक पहुँचता है। Natural farming में कम पानी लगता है, क्योंकि mulching और humus नमी बचाते हैं।",
              en: "Rainwater is the cleanest source. Rainwater harvesting collects roof water in a tank or pit. Drip (drop-by-drop) irrigation takes water straight to the roots. Natural farming needs less water because mulching and humus hold moisture.",
            },
            practical: {
              hi: "पुरानी प्लास्टिक बोतल में छेद करके घरेलू drip बनाना; स्कूल की छत का क्षेत्रफल नापकर अनुमान लगाना कि साल भर में कितना वर्षा जल इकट्ठा हो सकता है (क्षेत्रफल वर्ग मीटर × सालाना वर्षा मि.मी. = लीटर, लगभग)।",
              en: "Make a home-made drip by punching holes in an old plastic bottle; measure the school roof and estimate how much rainwater could be collected in a year (area in sq m × annual rainfall in mm ≈ litres).",
            },
            outcome: { hi: "बच्चा पानी बचाने के तीन तरीके बता सके और छत से वर्षा जल का हिसाब लगा सके।", en: "The child can name three ways to save water and calculate rainwater from a roof." },
          },
        ],
        note: {
          hi: "घोलों की मात्रा स्कूल की छोटी क्यारी के लिए अनुमानित है। अपने क्षेत्र के लिए सही मात्रा नज़दीकी Krishi Vigyan Kendra (KVK) से जाँच लें।",
          en: "Quantities of the preparations are estimates for a small school bed. Check the right quantities for your area with the nearest Krishi Vigyan Kendra (KVK).",
        },
      },
      {
        id: "senior",
        tab: { hi: "कक्षा 9–12", en: "Classes 9–12" },
        heading: { hi: "कक्षा 9 से 12, योजना, विज्ञान और उद्यमिता", en: "Classes 9 to 12: planning, science and entrepreneurship" },
        info: {
          time: { hi: "⏱ Vocational subject या club/elective, सप्ताह में 2–3 period", en: "⏱ Vocational subject or club/elective, 2–3 periods a week" },
          goal: { hi: "🎯 लक्ष्य: पूरे साल का garden स्वयं चलाना, हिसाब रखना और उपज से आय कमाना सीखना", en: "🎯 Goal: run the garden for a whole year, keep accounts and learn to earn from the harvest" },
        },
        intro: {
          hi: "इस चरण में छात्र खुद \"किसान और प्रबंधक\" बनते हैं। वे फसल की योजना बनाते हैं, मिट्टी जाँचते हैं, data रखते हैं और उपज को उत्पाद बनाकर बेचते हैं। इससे खेती एक सम्मानजनक और आधुनिक career विकल्प के रूप में दिखती है।",
          en: "In this stage students themselves become \"farmer and manager\". They plan crops, test soil, keep data and turn the harvest into products to sell. Farming then appears as a respectable, modern career option.",
        },
        image: "harvest",
        kind: "table3",
        rows: {
          hi: [
            ["1. खेत की योजना", "खरीफ (जून–अक्टूबर), रबी (अक्टूबर–मार्च), जायद (मार्च–जून) मौसम; crop rotation क्यों (एक ही फसल बार-बार लगाने से मिट्टी थकती है और कीट बढ़ते हैं)", "स्कूल garden का पूरे साल का नक्शा और फसल कैलेंडर बनाना"],
            ["2. Soil testing", "Soil Health Card में क्या लिखा होता है (pH, नाइट्रोजन, फास्फोरस, पोटाश, organic carbon); pH का अर्थ (7 से कम अम्लीय, 7 से ज़्यादा क्षारीय)", "pH test kit से तीन जगह की मिट्टी जाँचना; KVK से स्कूल की मिट्टी का नमूना जाँच करवाना"],
            ["3. Agroforestry", "खेत में पेड़ों की भूमिका; multi-layer या पंचस्तरीय मॉडल, जिसमें अलग-अलग ऊँचाई के पौधे (ऊँचे पेड़, फलदार, झाड़ी, सब्ज़ी, ज़मीन ढकने वाले) एक साथ धूप का पूरा उपयोग करते हैं", "स्कूल की सीमा पर फलदार पेड़ (अमरूद, नींबू, पपीता, सहजन) लगाना; एक छोटा बहु-स्तरीय कोना बनाना"],
            ["4. पशुपालन से जुड़ाव", "Natural farming में देसी गाय के गोबर-गोमूत्र की भूमिका; खेत और पशु एक-दूसरे के पूरक", "गाँव की किसी गौशाला या पशुपालक के यहाँ अध्ययन भ्रमण और रिपोर्ट"],
            ["5. Data और रिकॉर्ड", "वैज्ञानिक रिकॉर्ड क्यों ज़रूरी है; पैदावार, लागत, पानी और मौसम का हिसाब", "हर क्यारी का साप्ताहिक रिकॉर्ड spreadsheet में, साल के अंत में graph से तुलना"],
            ["6. Value addition", "कच्ची उपज को उत्पाद बनाने से कीमत और टिकाऊपन बढ़ता है; साफ़-सफ़ाई और packaging के नियम", "अचार, सूखी मेथी/धनिया, देसी बीजों के पैकेट बनाना और label design करना"],
            ["7. Marketing और उद्यमिता", "लागत, कीमत और लाभ का हिसाब (cost-benefit); ग्राहक कौन है", "स्कूल मेले या अभिभावक दिवस पर स्टॉल, आय-व्यय का पूरा हिसाब"],
            ["8. सरकारी योजनाएँ और संस्थाएँ", "National Mission on Natural Farming, Krishi Vigyan Kendra (KVK) और कृषि विभाग की भूमिका; किसान इनसे कैसे जुड़ता है", "KVK का दौरा या वैज्ञानिक का स्कूल में व्याख्यान"],
            ["9. Internship और अंतिम project", "असली खेत पर काम का अनुभव", "किसी natural farming किसान के साथ 10 दिन की internship, फिर फ़ोटो और data के साथ project report"],
          ],
          en: [
            ["1. Farm planning", "Kharif (June–October), Rabi (October–March) and Zaid (March–June) seasons; why crop rotation (growing the same crop again and again tires the soil and increases pests)", "Make a year-round map and crop calendar of the school garden"],
            ["2. Soil testing", "What a Soil Health Card shows (pH, nitrogen, phosphorus, potash, organic carbon); what pH means (below 7 acidic, above 7 alkaline)", "Test soil from three places with a pH kit; get a school soil sample tested at the KVK"],
            ["3. Agroforestry", "The role of trees on a farm; the multi-layer or five-layer model, where plants of different heights (tall trees, fruit trees, shrubs, vegetables, ground cover) together make full use of sunlight", "Plant fruit trees (guava, lemon, papaya, moringa) along the school boundary; make a small multi-layer corner"],
            ["4. Link with livestock", "The role of native cow dung and urine in natural farming; farm and animals complement each other", "Study visit to a village gaushala or livestock keeper, with a report"],
            ["5. Data and records", "Why scientific records matter; accounts of yield, cost, water and weather", "A weekly record of every bed in a spreadsheet, compared with graphs at year end"],
            ["6. Value addition", "Turning raw produce into products raises price and shelf life; rules of hygiene and packaging", "Make pickles, dried methi/coriander and packets of native seeds, and design labels"],
            ["7. Marketing and entrepreneurship", "Working out cost, price and profit (cost-benefit); who the customer is", "A stall at the school fair or parents' day, with full income and expense accounts"],
            ["8. Government schemes and institutions", "The role of the National Mission on Natural Farming, Krishi Vigyan Kendra (KVK) and the agriculture department; how a farmer connects with them", "A visit to the KVK or a lecture by a scientist at school"],
            ["9. Internship and final project", "Experience of working on a real farm", "A 10-day internship with a natural farming farmer, then a project report with photos and data"],
          ],
        },
      },
    ],
  },

  needs: {
    title: { hi: "स्कूल को क्या चाहिए?", en: "What does the school need?" },
    text: {
      hi: "इस कार्यक्रम की सबसे बड़ी खूबी इसकी कम लागत है। ज़्यादातर सामग्री गाँव में मुफ़्त या बहुत कम कीमत पर मिल जाती है, और शुरुआत लगभग किसी भी स्कूल में हो सकती है।",
      en: "The biggest strength of this programme is its low cost. Most materials are free or very cheap in the village, and almost any school can begin.",
    },
    cards: [
      { icon: "bed", t: { hi: "जगह", en: "Space" }, d: { hi: "शुरुआत के लिए 500 से 1000 वर्ग फुट ज़मीन काफ़ी है, जिसमें 4–5 घंटे धूप आती हो और पानी पास हो। ज़मीन न हो तो स्कूल की छत, गलियारे में गमले, grow bags, पुराने टायर, बाल्टियाँ या डिब्बे भी उतने ही अच्छे हैं।", en: "500 to 1000 sq ft of land is enough to begin, with 4–5 hours of sun and water nearby. No land? The school roof, pots in a corridor, grow bags, old tyres, buckets or tins work just as well." } },
      { icon: "trowel", t: { hi: "सामग्री", en: "Materials" }, d: { hi: "कुछ बुनियादी औज़ार, घोल के लिए एक ड्रम, देसी बीज और सूखी पत्तियाँ। गोबर और गोमूत्र गाँव के किसी पशुपालक से मिल सकता है। कोई महँगी खाद या कीटनाशक नहीं खरीदना।", en: "A few basic tools, a drum for preparations, native seeds and dry leaves. Dung and cow urine can come from a village livestock keeper. No expensive fertiliser or pesticide to buy." } },
      { icon: "handshake", t: { hi: "मार्गदर्शन", en: "Guidance" }, d: { hi: "एक उत्साही शिक्षक को \"Garden प्रभारी\" बनाएँ। नज़दीकी Krishi Vigyan Kendra (KVK) या ज़िला कृषि विभाग से संपर्क करें, जो अक्सर training और बीज में मदद करते हैं। गाँव के किसी अनुभवी natural farming किसान को \"अतिथि शिक्षक\" के रूप में बुलाएँ।", en: "Make one enthusiastic teacher the \"Garden in-charge\". Contact the nearest Krishi Vigyan Kendra (KVK) or district agriculture department, which often help with training and seeds. Invite an experienced natural farming farmer from the village as a \"guest teacher\"." } },
    ],
    image: "growbags",
    checklistTitle: { hi: "शुरुआत के लिए ज़रूरी सामान", en: "Essentials to get started" },
    checklist: {
      hi: [
        "4–5 खुरपी, 2 फावड़े, 1 कुदाल",
        "2 बाल्टियाँ और 2 पानी देने के कैन (हज़ारा)",
        "ढक्कन वाला एक प्लास्टिक ड्रम (घोल के लिए) और घुमाने के लिए लकड़ी",
        "बच्चों के लिए दस्ताने और साबुन",
        "देसी बीज (मौसम के अनुसार)",
        "सूखी पत्तियाँ या भूसा (mulching के लिए)",
        "हर बच्चे के लिए एक Garden Diary (साधारण कॉपी काफ़ी)",
        "क्यारी के नाम के लिए लकड़ी की तख़्तियाँ",
      ],
      en: [
        "4–5 hand trowels (khurpi), 2 spades, 1 hoe",
        "2 buckets and 2 watering cans (hazara)",
        "One plastic drum with a lid (for preparations) and a stick to stir",
        "Gloves and soap for the children",
        "Native seeds (by season)",
        "Dry leaves or straw (for mulching)",
        "One Garden Diary per child (an ordinary notebook is enough)",
        "Wooden boards to name the beds",
      ],
    },
    seasonsTitle: { hi: "किस मौसम में क्या उगाएँ", en: "What to grow in which season" },
    seasonsHead: { hi: ["मौसम", "लगभग महीने", "स्कूल garden के लिए आसान फसलें"], en: ["Season", "Approx. months", "Easy crops for a school garden"] },
    seasons: {
      hi: [
        ["खरीफ", "जून से अक्टूबर", "भिंडी, लौकी, तोरई, लोबिया, मक्का, कद्दू"],
        ["रबी", "अक्टूबर से मार्च", "पालक, मेथी, धनिया, मूली, गाजर, मटर, टमाटर, सरसों"],
        ["जायद", "मार्च से जून", "खीरा, ककड़ी, कद्दू, लोबिया"],
      ],
      en: [
        ["Kharif", "June to October", "Okra, bottle gourd, ridge gourd, cowpea, maize, pumpkin"],
        ["Rabi", "October to March", "Spinach, methi, coriander, radish, carrot, peas, tomato, mustard"],
        ["Zaid", "March to June", "Cucumber, snake cucumber, pumpkin, cowpea"],
      ],
    },
    seasonsNote: {
      hi: "बुवाई का सही समय क्षेत्र के अनुसार बदलता है; स्थानीय किसान या KVK से पुष्टि करें। लंबी छुट्टियों से पहले ऐसी फसलें चुनें जो छुट्टी से पहले कट जाएँ।",
      en: "The right sowing time varies by region; confirm with local farmers or the KVK. Before long holidays, choose crops that will be harvested before the break.",
    },
  },

  assessment: {
    title: { hi: "मूल्यांकन कैसे होगा?", en: "How will assessment work?" },
    text: {
      hi: "इस कोर्स में रटने की नहीं, करने की परीक्षा होती है। बच्चे के नियमित काम, उसके अवलोकन और समूह में भागीदारी को पूरे साल देखा जाता है। नीचे दिया गया भार एक सुझाव है, स्कूल इसे अपनी ज़रूरत के अनुसार बदल सकता है।",
      en: "This course tests doing, not rote learning. A child's regular work, observations and group participation are seen through the year. The weights below are a suggestion; the school can change them as needed.",
    },
    head: { hi: ["घटक", "क्या देखा जाएगा", "सुझावित भार"], en: ["Component", "What is assessed", "Suggested weight"] },
    rows: {
      hi: [
        ["Garden Diary", "नियमित अवलोकन, चित्र, माप (पौधे की ऊँचाई, पत्तियों की गिनती), अपने शब्दों में सीख", "30%"],
        ["क्यारी की देखभाल", "नियमितता, सफ़ाई, पौधों की सेहत, टीमवर्क", "25%"],
        ["Practical और मौखिक प्रश्न", "घोल बनाने की समझ, कीट और पौधों की पहचान, \"क्यों\" वाले सवाल", "20%"],
        ["Harvest Day / Project", "साल के अंत में उपज की प्रदर्शनी और प्रस्तुति; कक्षा 9 से ऊपर project report", "25%"],
      ],
      en: [
        ["Garden Diary", "Regular observations, drawings, measurements (plant height, leaf count), learning in their own words", "30%"],
        ["Bed care", "Regularity, cleanliness, plant health, teamwork", "25%"],
        ["Practical and oral questions", "Understanding of preparations, identifying insects and plants, \"why\" questions", "20%"],
        ["Harvest Day / Project", "Year-end display and presentation of the harvest; project report for Class 9 and above", "25%"],
      ],
    },
    diary: {
      title: { hi: "Garden Diary का एक पन्ना", en: "A page from the Garden Diary" },
      lines: [
        { k: { hi: "तारीख़", en: "Date" }, v: { hi: "____ · मौसम: धूप / बादल / बारिश", en: "____ · Weather: sun / cloud / rain" } },
        { k: { hi: "आज क्या किया", en: "What I did today" }, v: { hi: "मेथी की क्यारी में पानी दिया और खरपतवार निकाले", en: "Watered the methi bed and pulled out weeds" } },
        { k: { hi: "मैंने क्या देखा", en: "What I saw" }, v: { hi: "सबसे ऊँचा पौधा 6 से.मी., दो पत्तियों पर छेद", en: "Tallest plant 6 cm, holes in two leaves" } },
        { k: { hi: "मेरा सवाल", en: "My question" }, v: { hi: "पत्तियों में छेद किस कीट ने किए?", en: "Which insect made the holes in the leaves?" } },
      ],
      drawing: { hi: "चित्र के लिए खाली जगह", en: "Space for a drawing" },
    },
  },

  subjects: {
    title: { hi: "एक garden, कई विषय", en: "One garden, many subjects" },
    text: {
      hi: "यह कोर्स पढ़ाई का समय नहीं काटता, बल्कि बाकी विषयों की समझ को मज़बूत करता है। शिक्षक अपने विषय का कोई पाठ garden में पढ़ा सकते हैं।",
      en: "This course doesn't cut into study time; it strengthens understanding of other subjects. Teachers can teach a lesson of their own subject in the garden.",
    },
    learnLabel: { hi: "Garden में क्या सीखते हैं", en: "What they learn in the garden" },
    exampleLabel: { hi: "उदाहरण गतिविधि", en: "Example activity" },
    items: [
      { icon: "🔬", t: { hi: "Science", en: "Science" }, learn: { hi: "Photosynthesis, सूक्ष्मजीव, nitrogen cycle, अंकुरण, खाद्य शृंखला", en: "Photosynthesis, microbes, the nitrogen cycle, germination, food chains" }, ex: { hi: "एक पौधे को अंधेरे और एक को धूप में रखकर तुलना", en: "Keep one plant in the dark and one in the sun and compare" } },
      { icon: "➗", t: { hi: "Maths", en: "Maths" }, learn: { hi: "क्षेत्रफल, अनुपात, प्रतिशत, graph, लागत-लाभ", en: "Area, ratio, percentage, graphs, cost-benefit" }, ex: { hi: "क्यारी का क्षेत्रफल नापकर पौधों की संख्या तय करना; अंकुरण दर का प्रतिशत", en: "Measure a bed's area to decide the number of plants; germination rate as a percentage" } },
      { icon: "🌦", t: { hi: "EVS / Geography", en: "EVS / Geography" }, learn: { hi: "मौसम, मिट्टी के प्रकार, जल चक्र, फसल के मौसम", en: "Weather, soil types, the water cycle, crop seasons" }, ex: { hi: "स्कूल का साप्ताहिक मौसम रिकॉर्ड और वर्षा मापक (बोतल से बना)", en: "A weekly school weather record and a rain gauge (made from a bottle)" } },
      { icon: "✍️", t: { hi: "Hindi / English", en: "Hindi / English" }, learn: { hi: "अवलोकन लेखन, अनुभव लेखन, साक्षात्कार", en: "Observation writing, experience writing, interviews" }, ex: { hi: "\"मेरा पहला पौधा\" निबंध; किसान से साक्षात्कार", en: "An essay \"My first plant\"; interviewing a farmer" } },
      { icon: "🥗", t: { hi: "Health", en: "Health" }, learn: { hi: "पोषण, ताज़ी सब्ज़ी का महत्व, स्वच्छता", en: "Nutrition, the value of fresh vegetables, hygiene" }, ex: { hi: "Garden की सब्ज़ी mid-day meal में; \"सतरंगी थाली\" chart", en: "Garden vegetables in the mid-day meal; a \"rainbow plate\" chart" } },
    ],
  },

  safety: {
    title: { hi: "सुरक्षा सबसे पहले", en: "Safety first" },
    text: {
      hi: "Garden में काम सुरक्षित है, बशर्ते कुछ सरल नियमों का हमेशा पालन हो। ये नियम garden के पास दीवार पर भी लिखे जाएँ।",
      en: "Garden work is safe as long as a few simple rules are always followed. Write these rules on a wall near the garden too.",
    },
    rules: {
      hi: [
        "गोबर, गोमूत्र या कोई भी घोल संभालते समय दस्ताने पहनें।",
        "काम के बाद और खाने से पहले हाथ साबुन से अच्छी तरह धोएँ।",
        "खुरपी, फावड़ा जैसे औज़ार शिक्षक की निगरानी में ही चलाएँ, और काम के बाद तय जगह रखें।",
        "चूना और मिर्च-लहसुन वाले तीखे घोल (जैसे Agniastra) केवल शिक्षक बनाएँ और छिड़कें।",
        "कोई भी घोल चखना या आँख के पास ले जाना मना है। आँख में जाए तो साफ़ पानी से धोएँ और शिक्षक को बताएँ।",
        "घोल का ड्रम हमेशा ढककर रखें और उस पर \"पीने योग्य नहीं\" लिखें।",
        "Garden की कोई भी उपज खाने से पहले साफ़ पानी से अच्छी तरह धोएँ।",
        "धूप में काम करते समय टोपी पहनें, पानी पीते रहें, और काम सुबह या शाम के ठंडे समय में रखें।",
      ],
      en: [
        "Wear gloves when handling dung, cow urine or any preparation.",
        "Wash hands well with soap after work and before eating.",
        "Use tools like trowels and spades only under a teacher's supervision, and put them back in their place afterwards.",
        "Only the teacher makes and sprays lime and pungent chilli-garlic preparations (such as Agniastra).",
        "Never taste any preparation or bring it near the eyes. If it gets in an eye, rinse with clean water and tell the teacher.",
        "Always keep the preparation drum covered and write \"not for drinking\" on it.",
        "Wash any garden produce well with clean water before eating.",
        "Wear a cap when working in the sun, keep drinking water, and work in the cool of morning or evening.",
      ],
    },
  },

  pilot: {
    title: { hi: "छोटे से शुरुआत: Pilot योजना", en: "Start small: the Pilot plan" },
    text: {
      hi: "पूरे स्कूल में एक साथ लागू करने की ज़रूरत नहीं है। एक कक्षा, एक क्यारी और एक शिक्षक के साथ शुरुआत करें, परिणाम देखें, फिर आगे बढ़ाएँ।",
      en: "There's no need to roll it out across the whole school at once. Start with one class, one bed and one teacher, see the results, then expand.",
    },
    steps: [
      { when: { hi: "महीना 1", en: "Month 1" }, t: { hi: "तैयारी", en: "Preparation" }, d: { hi: "प्रिंसिपल की स्वीकृति, एक कक्षा (कक्षा 6 या 7) और एक प्रभारी शिक्षक का चयन, KVK से संपर्क, जगह साफ़ करना और क्यारी बनाना।", en: "The principal's approval, choosing one class (Class 6 or 7) and a teacher in charge, contacting the KVK, clearing the site and making the bed." } },
      { when: { hi: "महीना 2", en: "Month 2" }, t: { hi: "बुवाई", en: "Sowing" }, d: { hi: "Beejamrit से बीज उपचार, मौसम की आसान फसलों की बुवाई, mulching, पहला Jeevamrit।", en: "Seed treatment with Beejamrit, sowing easy seasonal crops, mulching, the first Jeevamrit." } },
      { when: { hi: "महीना 3", en: "Month 3" }, t: { hi: "देखभाल", en: "Care" }, d: { hi: "समूहों में ज़िम्मेदारी, Garden Diary, कीट सर्वेक्षण, किसान का अतिथि सत्र।", en: "Responsibilities in groups, the Garden Diary, an insect survey, a guest session by a farmer." } },
      { when: { hi: "महीना 4", en: "Month 4" }, t: { hi: "Harvest Day", en: "Harvest Day" }, d: { hi: "उपज की प्रदर्शनी, अभिभावकों को निमंत्रण, सब्ज़ी mid-day meal में।", en: "A display of the harvest, inviting parents, vegetables into the mid-day meal." } },
      { when: { hi: "अगला सत्र", en: "Next session" }, t: { hi: "विस्तार", en: "Expansion" }, d: { hi: "समीक्षा के बाद बाकी कक्षाओं में तीनों चरणों का पाठ्यक्रम लागू करना।", en: "After a review, rolling out all three stages of the curriculum to the other classes." } },
    ],
    badges: [
      { hi: "💰 लागत लगभग न के बराबर", en: "💰 Almost no cost" },
      { hi: "📘 NEP 2020 और PM POSHAN से सीधा मेल", en: "📘 Directly in line with NEP 2020 and PM POSHAN" },
      { hi: "🤝 अभिभावकों और समुदाय में स्कूल की अच्छी छवि", en: "🤝 A good image for the school among parents and the community" },
    ],
    cta: {
      title: { hi: "आइए, इसी सत्र से शुरुआत करें", en: "Let's begin this very session" },
      text: { hi: "एक कक्षा, एक क्यारी, एक शिक्षक। चार महीने में परिणाम सामने होंगे।", en: "One class, one bed, one teacher. Results in four months." },
      button: { hi: "🖨️ यह योजना Print करें", en: "🖨️ Print this plan" },
    },
  },

  faq: {
    title: { hi: "आपके प्रश्न, हमारे उत्तर", en: "Your questions, our answers" },
    items: [
      { q: { hi: "हमारे स्कूल में खाली ज़मीन नहीं है, तो क्या करें?", en: "Our school has no empty land. What can we do?" }, a: { hi: "छत, गलियारे या दीवार के किनारे गमले, grow bags, पुराने टायर और बाल्टियों में पूरा पाठ्यक्रम चल सकता है। पत्तेदार सब्ज़ियाँ, टमाटर, मिर्च और बेल वाली सब्ज़ियाँ गमलों में अच्छी होती हैं।", en: "The whole curriculum can run in pots, grow bags, old tyres and buckets on the roof, in corridors or along walls. Leafy greens, tomato, chilli and climbing vegetables do well in pots." } },
      { q: { hi: "क्या इससे पढ़ाई का समय कटेगा?", en: "Will this cut into study time?" }, a: { hi: "नहीं। कक्षा 3–5 में सप्ताह में एक period है, और कक्षा 6–8 में यह NEP 2020 के vocational समय में आता है। Science, Maths और EVS के कई पाठ garden में ही पढ़ाए जा सकते हैं, जिससे उनकी समझ बेहतर होती है।", en: "No. Classes 3–5 have one period a week, and in Classes 6–8 it falls within NEP 2020's vocational time. Many Science, Maths and EVS lessons can be taught in the garden itself, which improves understanding." } },
      { q: { hi: "शिक्षक खेती नहीं जानते, तो कौन सिखाएगा?", en: "Teachers don't know farming. Who will teach?" }, a: { hi: "नज़दीकी Krishi Vigyan Kendra (KVK) से शिक्षकों का एक दिन का प्रशिक्षण कराया जा सकता है। गाँव के अनुभवी किसान अतिथि शिक्षक बन सकते हैं। इस website पर हर इकाई की विधि सरल भाषा में दी गई है।", en: "The nearest Krishi Vigyan Kendra (KVK) can run a one-day training for teachers. Experienced village farmers can be guest teachers. This website gives every unit's method in simple language." } },
      { q: { hi: "गोबर-गोमूत्र से गंदगी या बदबू तो नहीं होगी?", en: "Won't dung and cow urine cause mess or smell?" }, a: { hi: "स्कूल स्तर पर मात्रा बहुत कम होती है। घोल का ड्रम कक्षाओं से दूर garden के कोने में, छाया में और ढककर रखा जाता है। दस्ताने और हाथ धोने के नियम से स्वच्छता बनी रहती है।", en: "The quantities at school level are very small. The drum is kept covered, in shade, in a corner of the garden away from classrooms. Gloves and hand-washing rules keep things hygienic." } },
      { q: { hi: "छुट्टियों में garden की देखभाल कौन करेगा?", en: "Who will look after the garden in the holidays?" }, a: { hi: "लंबी छुट्टियों से पहले कटने वाली फसलें चुनें और मोटी mulching करें, जिससे पानी की ज़रूरत बहुत कम हो जाती है। चाहें तो नज़दीक रहने वाले बच्चों या स्कूल कर्मचारी की बारी-बारी से साप्ताहिक ज़िम्मेदारी लगाएँ।", en: "Choose crops that are harvested before long holidays and mulch thickly, which greatly reduces the need for water. If you like, set a weekly rota of children who live nearby or school staff." } },
      { q: { hi: "इसमें कितना खर्च आएगा?", en: "How much will it cost?" }, a: { hi: "सबसे बड़ा खर्च एक बार के औज़ार और ड्रम का है। बीज, गोबर, गोमूत्र और सूखी पत्तियाँ स्थानीय रूप से मुफ़्त या बहुत कम कीमत पर मिल जाते हैं। रासायनिक खाद या कीटनाशक पर कोई खर्च नहीं होता।", en: "The biggest cost is a one-time purchase of tools and a drum. Seeds, dung, cow urine and dry leaves are available locally for free or very cheaply. Nothing is spent on chemical fertiliser or pesticide." } },
    ],
  },

  footer: {
    tagline: { hi: "मिट्टी से जुड़ें, करके सीखें।", en: "Connect with the soil, learn by doing." },
    orgsTitle: { hi: "उपयोगी संस्थाएँ", en: "Useful institutions" },
    orgs: {
      hi: ["नज़दीकी Krishi Vigyan Kendra (KVK)", "ज़िला कृषि विभाग", "राज्य शिक्षा विभाग"],
      en: ["Nearest Krishi Vigyan Kendra (KVK)", "District agriculture department", "State education department"],
    },
    note: {
      hi: "योजनाओं के नाम और प्रावधान समय के साथ बदलते हैं; वर्तमान दिशा-निर्देश अपने राज्य शिक्षा विभाग या नज़दीकी KVK से जाँचें। घोलों की मात्रा अनुमानित है।",
      en: "Scheme names and provisions change over time; check current guidelines with your state education department or nearest KVK. Quantities of preparations are estimates.",
    },
  },

  ui: {
    openAll: { hi: "सब खोलें", en: "Open all" },
    closeAll: { hi: "सब बंद करें", en: "Close all" },
    others: { hi: "दूसरों के लिए भी देखें", en: "See the other guides" },
  },
}
