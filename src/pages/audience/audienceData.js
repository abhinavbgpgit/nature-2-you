// "सबके लिए" pages — natural farming explained for school children, teachers
// and city families. Each audience is a list of sections made of small blocks
// (rendered by AudiencePage.jsx). Every text field is { hi, en }.
import imgSchool from "../../assets/audience/school.jpg"
import imgGrowbags from "../../assets/audience/growbags.jpg"
import imgScraps from "../../assets/audience/scraps.jpg"

export const audienceImages = {
  school: { src: imgSchool, credit: "Pradhan.suchil · GFDL", source: "https://commons.wikimedia.org/wiki/File:Primary_school_garden_-_Baragounian.jpg" },
  growbags: { src: imgGrowbags, credit: "AcornToOak · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Vegetable_in_Grow_Bags.jpg" },
  scraps: { src: imgScraps, credit: "Anna.Massini · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Nothing_will_be_wasted!_Kitchen_scraps_for_compost!.jpg" },
}

export const audienceMenu = {
  label: { hi: "सबके लिए", en: "For everyone" },
  heading: { hi: "किसके लिए है?", en: "Who is it for?" },
}

export const audienceUi = {
  others: { hi: "दूसरों के लिए भी देखें", en: "See the other guides" },
  notFound: { hi: "यह पेज नहीं मिला।", en: "This page was not found." },
  showAnswer: { hi: "जवाब देखो", en: "Show answer" },
  materials: { hi: "क्या चाहिए", en: "You need" },
  time: { hi: "समय", en: "Time" },
}

export const audiences = [
  /* ------------------------------------------------------------------ */
  {
    // Has its own page: pages/school-curriculum/SchoolCurriculumPage.jsx
    slug: "school-kids",
    icon: "🎒",
    menuLabel: { hi: "स्कूल के बच्चों के लिए", en: "For school children" },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "teachers",
    icon: "👩‍🏫",
    menuLabel: { hi: "शिक्षकों के लिए", en: "For teachers" },
    hero: {
      eyebrow: { hi: "शिक्षकों के लिए", en: "For teachers" },
      title: { hi: "स्कूल की ज़मीन को कक्षा बनाइए", en: "Turn the school ground into a classroom" },
      text: {
        hi: "विज्ञान, पर्यावरण, गणित और पोषण — सब कुछ एक छोटी सी क्यारी में सिखाया जा सकता है। यहाँ स्कूल में प्राकृतिक खेती का बगीचा शुरू करने, पाठ योजना बनाने और बच्चों को जोड़ने का पूरा तरीका है।",
        en: "Science, environment, maths and nutrition — all of it can be taught in one small garden bed. Here is how to start a natural-farming garden at school, plan lessons and get children involved.",
      },
      image: "school",
      imageAlt: { hi: "एक प्राथमिक स्कूल का बगीचा", en: "A primary school garden" },
    },
    sections: [
      {
        title: { hi: "क्यों पढ़ाएँ?", en: "Why teach it?" },
        blocks: [
          {
            type: "cards",
            items: [
              { icon: "🧑‍🔬", t: { hi: "करके सीखना", en: "Learning by doing" }, d: { hi: "बीज, मिट्टी, पानी और जीवों के बारे में किताब में पढ़ी बातें बच्चे अपनी आँखों से देखते हैं। नई शिक्षा नीति भी अनुभव से सीखने पर ज़ोर देती है।", en: "Children see with their own eyes what they read about seeds, soil, water and living things. The National Education Policy also stresses experiential learning." } },
              { icon: "📚", t: { hi: "हर विषय से जुड़ाव", en: "Links to every subject" }, d: { hi: "पौधे की लंबाई नापना (गणित), मिट्टी के जीव (विज्ञान), मौसम (भूगोल), बगीचे की डायरी (भाषा)।", en: "Measuring plant height (maths), soil life (science), seasons (geography), garden diary (language)." } },
              { icon: "🥗", t: { hi: "पोषण और स्वास्थ्य", en: "Nutrition and health" }, d: { hi: "स्कूल में उगी रसायन-मुक्त सब्ज़ियाँ मध्याह्न भोजन में जुड़ सकती हैं। कई राज्य स्कूल पोषण वाटिका को बढ़ावा देते हैं।", en: "Chemical-free vegetables grown at school can add to the midday meal. Many states promote school nutrition gardens." } },
              { icon: "🌍", t: { hi: "पर्यावरण की ज़िम्मेदारी", en: "Care for the environment" }, d: { hi: "कचरे से खाद, पानी की बचत और जैव विविधता — बच्चे ये आदतें घर तक ले जाते हैं।", en: "Waste to compost, saving water and biodiversity — children carry these habits home." } },
            ],
          },
        ],
      },
      {
        title: { hi: "स्कूल बगीचा कैसे शुरू करें", en: "How to start a school garden" },
        blocks: [
          {
            type: "steps",
            items: {
              hi: [
                { t: "जगह चुनें", d: "ऐसी जगह जहाँ रोज़ 5–6 घंटे धूप आए और पानी पास हो। ज़मीन न हो तो छत, गमले या पुराने टायर-बाल्टियाँ भी चलेंगी।" },
                { t: "इको-क्लब और टीमें", d: "हर कक्षा की एक टीम बनाएँ — पानी, खाद, बीज और डायरी की ज़िम्मेदारी बारी-बारी से बदलें।" },
                { t: "क्यारियाँ तैयार करें", d: "3–4 फुट चौड़ी क्यारियाँ बनाएँ ताकि बच्चे बिना अंदर उतरे काम कर सकें। मिट्टी में कम्पोस्ट मिलाएँ।" },
                { t: "मौसम के हिसाब से बीज", d: "बरसात/खरीफ़ में भिंडी, लौकी, तुरई, बीन्स; सर्दी/रबी में पालक, मेथी, मूली, गाजर, मटर, धनिया।" },
                { t: "प्राकृतिक इनपुट", d: "स्कूल की कैंटीन और पत्तियों से कम्पोस्ट बनाएँ; पास के किसान या गोशाला की मदद से जीवामृत का प्रदर्शन कराएँ।" },
                { t: "फसल उत्सव", d: "कटाई के दिन अभिभावकों को बुलाएँ, बच्चों से उनका अनुभव सुनवाएँ और उपज मध्याह्न भोजन में जोड़ें।" },
              ],
              en: [
                { t: "Choose a spot", d: "A place with 5–6 hours of sun daily and water nearby. No ground? A roof, pots or old tyres and buckets work too." },
                { t: "Eco-club and teams", d: "Form one team per class — rotate the jobs of watering, compost, seeds and the diary." },
                { t: "Prepare beds", d: "Make beds 3–4 feet wide so children can work without stepping in. Mix compost into the soil." },
                { t: "Seeds for the season", d: "Monsoon/kharif: okra, bottle gourd, ridge gourd, beans. Winter/rabi: spinach, methi, radish, carrot, peas, coriander." },
                { t: "Natural inputs", d: "Make compost from canteen waste and leaves; invite a nearby farmer or gaushala to demonstrate Jeevamrit." },
                { t: "Harvest festival", d: "Invite parents on harvest day, let children share their experience, and add the produce to the midday meal." },
              ],
            },
          },
        ],
      },
      {
        title: { hi: "6 हफ्ते की पाठ योजना", en: "A 6-week lesson plan" },
        text: { hi: "हर हफ्ते एक कक्षा (40–45 मिनट) बगीचे में और एक कक्षा में चर्चा/डायरी।", en: "Each week one period (40–45 minutes) in the garden and one in class for discussion and the diary." },
        blocks: [
          {
            type: "table",
            head: { hi: ["हफ्ता", "विषय", "गतिविधि", "बच्चे क्या सीखेंगे"], en: ["Week", "Topic", "Activity", "Children learn"] },
            rows: {
              hi: [
                ["1", "जीवित मिट्टी", "मिट्टी जासूस: केंचुए और जीव गिनना", "मिट्टी में जीवन होता है"],
                ["2", "बीज", "बीज अंकुरण प्रयोग, बीजामृत का प्रदर्शन", "बीज कैसे जागता है"],
                ["3", "पौधों का भोजन", "जीवामृत/कम्पोस्ट बनाना", "सूक्ष्मजीव पौधों को खाना देते हैं"],
                ["4", "पानी", "मल्च वाला और बिना मल्च का गमला", "पानी कैसे बचाएँ"],
                ["5", "जैव विविधता", "बगीचे में कीट, पक्षी, फूल की सूची", "हर जीव का काम है"],
                ["6", "फसल और भोजन", "कटाई, तौल, चखना", "खेत से थाली तक"],
              ],
              en: [
                ["1", "Living soil", "Soil detective: count earthworms and creatures", "Soil is alive"],
                ["2", "Seeds", "Germination experiment, Beejamrit demo", "How a seed wakes up"],
                ["3", "Plant food", "Make Jeevamrit/compost", "Microbes feed plants"],
                ["4", "Water", "Mulched vs bare pot", "How to save water"],
                ["5", "Biodiversity", "List insects, birds, flowers in the garden", "Every creature has a job"],
                ["6", "Harvest and food", "Harvest, weigh, taste", "From field to plate"],
              ],
            },
          },
        ],
      },
      {
        title: { hi: "कक्षा के हिसाब से गतिविधियाँ", en: "Activities by class" },
        blocks: [
          {
            type: "cards",
            items: [
              { icon: "🧒", t: { hi: "कक्षा 1–5", en: "Classes 1–5" }, d: { hi: "बीज बोना, पानी देना, पत्तियों के रंग-आकार पहचानना, केंचुए का चित्र बनाना, कहानियाँ और गीत।", en: "Sowing seeds, watering, spotting leaf shapes and colours, drawing earthworms, stories and songs." } },
              { icon: "🧑", t: { hi: "कक्षा 6–8", en: "Classes 6–8" }, d: { hi: "मल्च प्रयोग, पौधों की लंबाई का ग्राफ़, कम्पोस्ट का तापमान नापना, मिश्रित फसल की योजना।", en: "Mulch experiment, graphing plant height, measuring compost temperature, planning mixed crops." } },
              { icon: "🧑‍🎓", t: { hi: "कक्षा 9–12", en: "Classes 9–12" }, d: { hi: "रासायनिक और प्राकृतिक क्यारी की तुलना का प्रोजेक्ट, मिट्टी का pH, लागत-लाभ हिसाब, किसान से इंटरव्यू।", en: "Project comparing a chemical and a natural bed, soil pH, cost-benefit sums, interviewing a farmer." } },
            ],
          },
        ],
      },
      {
        title: { hi: "कुछ ज़रूरी सुझाव", en: "Useful tips" },
        blocks: [
          {
            type: "checklist",
            items: {
              hi: [
                "पास के किसी प्राकृतिक किसान के खेत पर बच्चों का भ्रमण कराएँ।",
                "छुट्टियों में बगीचे की देखभाल के लिए अभिभावकों या स्टाफ़ की बारी तय करें।",
                "मूल्यांकन के लिए बच्चों की डायरी, चित्र और प्रस्तुति को अंक दें — सिर्फ़ उपज को नहीं।",
                "गोबर-गोमूत्र वाला काम शिक्षक की देखरेख में कराएँ और हाथ धोने की आदत डालें।",
                "स्थानीय कृषि विज्ञान केंद्र (KVK) से बीज, प्रशिक्षण और विशेषज्ञ बुलाने में मदद लें।",
              ],
              en: [
                "Take children on a visit to a nearby natural farmer's field.",
                "Set a rota of parents or staff to look after the garden during holidays.",
                "Assess the diary, drawings and presentations — not just the harvest.",
                "Supervise any work with dung or cow urine and build a hand-washing habit.",
                "Ask your local Krishi Vigyan Kendra (KVK) for seeds, training and expert visits.",
              ],
            },
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "urban-families",
    icon: "🏙️",
    menuLabel: { hi: "शहरी परिवारों के लिए", en: "For city families" },
    hero: {
      eyebrow: { hi: "शहरी परिवारों के लिए", en: "For city families" },
      title: { hi: "बालकनी से थाली तक", en: "From balcony to plate" },
      text: {
        hi: "खेत न हो तो भी प्राकृतिक खेती हो सकती है। छत, बालकनी या खिड़की पर कुछ गमलों से शुरुआत कीजिए — रसोई का कचरा खाद बनेगा, और परिवार को मिलेंगी ताज़ी, रसायन-मुक्त सब्ज़ियाँ।",
        en: "You can farm naturally even without a farm. Start with a few pots on a terrace, balcony or window — kitchen waste becomes compost, and the family gets fresh, chemical-free vegetables.",
      },
      image: "growbags",
      imageAlt: { hi: "ग्रो बैग में उगती पत्तेदार सब्ज़ियाँ", en: "Leafy vegetables growing in grow bags" },
    },
    sections: [
      {
        title: { hi: "आपकी जगह में क्या उगेगा?", en: "What will grow in your space?" },
        text: { hi: "सबसे ज़रूरी है धूप। एक दिन ध्यान से देखिए कि आपकी जगह पर कितने घंटे सीधी धूप आती है।", en: "Sunlight matters most. Watch for a day how many hours of direct sun your space gets." },
        blocks: [
          {
            type: "table",
            head: { hi: ["धूप", "क्या उगाएँ"], en: ["Sunlight", "What to grow"] },
            rows: {
              hi: [
                ["6 घंटे या ज़्यादा", "टमाटर, मिर्च, बैंगन, भिंडी, लौकी, बीन्स"],
                ["3–5 घंटे", "पालक, मेथी, धनिया, सलाद पत्ता, मूली, हरा प्याज़"],
                ["2–3 घंटे", "पुदीना, करी पत्ता, अदरक, हल्दी"],
              ],
              en: [
                ["6 hours or more", "Tomato, chilli, brinjal, okra, bottle gourd, beans"],
                ["3–5 hours", "Spinach, methi, coriander, lettuce, radish, spring onion"],
                ["2–3 hours", "Mint, curry leaf, ginger, turmeric"],
              ],
            },
          },
        ],
      },
      {
        title: { hi: "शुरुआत के 5 कदम", en: "5 steps to start" },
        blocks: [
          {
            type: "steps",
            items: {
              hi: [
                { t: "गमले जुटाएँ", d: "ग्रो बैग, पुरानी बाल्टियाँ, पेंट के डिब्बे या थर्माकोल के बक्से — नीचे पानी निकलने के छेद ज़रूर करें। पत्तेदार सब्ज़ी के लिए 6–8 इंच और टमाटर-बैंगन के लिए 12 इंच गहरा गमला।" },
                { t: "गमले की मिट्टी बनाएँ", d: "एक हिस्सा मिट्टी, एक हिस्सा कम्पोस्ट/वर्मीकम्पोस्ट और एक हिस्सा कोकोपीट या सूखी पत्तियों का चूरा मिलाएँ। ये हल्की रहती है और पानी भी रोकती है।" },
                { t: "बीज या पौध लगाएँ", d: "आसान शुरुआत: धनिया, मेथी, पालक, मूली के बीज सीधे बोएँ; टमाटर-मिर्च की पौध नर्सरी से लाएँ।" },
                { t: "ऊपर से ढकें", d: "मिट्टी पर सूखी पत्तियाँ या नारियल के छिलके बिछाएँ — गर्मी में गमले जल्दी नहीं सूखेंगे।" },
                { t: "सही पानी", d: "सुबह पानी दें। उँगली मिट्टी में डालें — ऊपर का एक इंच सूखा हो तभी पानी दें। ज़्यादा पानी से जड़ें सड़ती हैं।" },
              ],
              en: [
                { t: "Gather containers", d: "Grow bags, old buckets, paint tins or thermocol boxes — always make drainage holes. 6–8 inches deep for leafy greens, 12 inches for tomato and brinjal." },
                { t: "Make potting mix", d: "Mix one part soil, one part compost/vermicompost and one part cocopeat or crushed dry leaves. It stays light and holds water." },
                { t: "Sow seeds or plant seedlings", d: "Easy start: sow coriander, methi, spinach and radish directly; buy tomato and chilli seedlings from a nursery." },
                { t: "Cover the top", d: "Spread dry leaves or coconut husk on the soil — pots won't dry out so fast in summer." },
                { t: "Water right", d: "Water in the morning. Push a finger into the soil — water only if the top inch is dry. Too much water rots roots." },
              ],
            },
          },
        ],
      },
      {
        title: { hi: "रसोई के कचरे से खाद", en: "Compost from kitchen waste" },
        image: "scraps",
        imageAlt: { hi: "खाद के लिए रसोई के छिलके", en: "Kitchen scraps for compost" },
        blocks: [
          {
            type: "p",
            text: {
              hi: "एक परिवार के रोज़ के छिलकों से हर महीने कई किलो खाद बन सकती है। दो बाल्टी वाला तरीका सबसे आसान है:",
              en: "A family's daily peels can make several kilos of compost a month. The two-bucket method is the easiest:",
            },
          },
          {
            type: "checklist",
            items: {
              hi: [
                "ढक्कन वाली बाल्टी के चारों ओर और नीचे छोटे छेद करें।",
                "हरा (छिलके, बची सब्ज़ी, चायपत्ती) और भूरा (सूखी पत्तियाँ, फटा अख़बार, गत्ता) बारी-बारी से परतों में डालें।",
                "हर परत पर थोड़ी मिट्टी या पुरानी खाद छिड़कें — इससे बदबू नहीं आती।",
                "हफ्ते में एक बार हिलाएँ। पहली बाल्टी भरने पर दूसरी शुरू करें।",
                "लगभग 45–60 दिन में पहली बाल्टी की खाद काली और भुरभुरी हो जाएगी।",
                "दूध, मांस, तेल वाला खाना न डालें — इनसे बदबू और कीड़े आते हैं।",
              ],
              en: [
                "Drill small holes around and under a bucket with a lid.",
                "Add green (peels, leftover vegetables, tea leaves) and brown (dry leaves, torn newspaper, cardboard) in alternate layers.",
                "Sprinkle a little soil or old compost on each layer — it stops the smell.",
                "Stir once a week. When the first bucket is full, start the second.",
                "In about 45–60 days the first bucket's compost turns dark and crumbly.",
                "Don't add dairy, meat or oily food — they cause smells and pests.",
              ],
            },
          },
        ],
      },
      {
        title: { hi: "बिना गाय के प्राकृतिक उपाय", en: "Natural remedies without a cow" },
        blocks: [
          {
            type: "cards",
            items: [
              { icon: "🥛", t: { hi: "खट्टी छाछ", en: "Sour buttermilk" }, d: { hi: "3–4 दिन पुरानी खट्टी छाछ को 10 गुना पानी में मिलाकर पत्तियों पर छिड़कें — फफूंद वाले रोगों में मदद करती है।", en: "Mix buttermilk soured for 3–4 days with 10 times water and spray on leaves — helps against fungal disease." } },
              { icon: "🌿", t: { hi: "नीम तेल का घोल", en: "Neem oil spray" }, d: { hi: "1 लीटर पानी में 5 मिली नीम तेल और 2–3 बूँद साबुन का घोल — माहू और सफ़ेद मक्खी पर शाम को छिड़कें।", en: "5 ml neem oil and 2–3 drops of liquid soap in 1 litre of water — spray in the evening on aphids and whitefly." } },
              { icon: "🪱", t: { hi: "वर्मीकम्पोस्ट", en: "Vermicompost" }, d: { hi: "महीने में एक बार हर गमले में एक-दो मुट्ठी वर्मीकम्पोस्ट डालें। जीवामृत चाहिए तो पास की गोशाला से गोबर लिया जा सकता है।", en: "Add a handful or two of vermicompost to each pot once a month. For Jeevamrit, dung can be had from a nearby gaushala." } },
              { icon: "🌼", t: { hi: "गेंदा और तुलसी", en: "Marigold and tulsi" }, d: { hi: "सब्ज़ियों के बीच गेंदा और तुलसी लगाएँ — ये कीटों को भटकाते हैं और मधुमक्खियों को बुलाते हैं।", en: "Plant marigold and tulsi among the vegetables — they confuse pests and invite bees." } },
            ],
          },
          {
            type: "callout",
            tone: "warning",
            text: {
              hi: "ध्यान दें: गमलों के नीचे की प्लेट में पानी जमा न रहने दें — इसमें मच्छर पनपते हैं।",
              en: "Note: don't let water stand in the saucers under pots — mosquitoes breed in it.",
            },
          },
        ],
      },
      {
        title: { hi: "किसानों का साथ दीजिए", en: "Stand with farmers" },
        blocks: [
          {
            type: "cards",
            items: [
              { icon: "🧺", t: { hi: "सीधे किसान से खरीदें", en: "Buy directly from farmers" }, d: { hi: "प्राकृतिक किसानों से हर हफ्ते सब्ज़ी या अनाज की टोकरी मँगवाएँ — किसान को सही दाम, आपको भरोसेमंद भोजन।", en: "Order a weekly basket of vegetables or grains from natural farmers — a fair price for them, trustworthy food for you." } },
              { icon: "🚜", t: { hi: "खेत घूमने जाइए", en: "Visit a farm" }, d: { hi: "छुट्टी के दिन बच्चों के साथ किसी प्राकृतिक खेत पर जाइए — देखिए आपका खाना कहाँ और कैसे उगता है।", en: "On a holiday, take the children to a natural farm — see where and how your food grows." } },
              { icon: "🤝", t: { hi: "आंदोलन से जुड़िए", en: "Join the movement" }, d: { hi: "अपने मोहल्ले में छत-बागवानी समूह बनाइए, बीज बाँटिए और हमारे समुदाय से जुड़िए।", en: "Start a terrace-gardening group in your neighbourhood, share seeds and join our community." } },
            ],
          },
        ],
      },
    ],
  },
]

export const findAudience = (slug) => audiences.find((a) => a.slug === slug)
