// Content for the DIY ("jugaad") egg incubator tutorial page.
// Based on a farmer's home-built thermocol incubator: 27 desi eggs, 21 days.
import imgBox from "../../assets/incubator/box.jpg"
import imgWooden from "../../assets/incubator/wooden.jpg"
import imgCandleOk from "../../assets/incubator/candleOk.jpg"
import imgCandleNo from "../../assets/incubator/candleNo.jpg"
import imgPip from "../../assets/incubator/pip.jpg"
import imgHatch from "../../assets/incubator/hatch.jpg"
import imgChicks from "../../assets/incubator/chicks.jpg"
import imgBrooder from "../../assets/incubator/brooder.jpg"

export const incubatorImages = {
  box: { src: imgBox, credit: "Alex Ford · CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Small_Chicken_Egg_Incubator.jpg" },
  wooden: { src: imgWooden, credit: "Izvora · Public domain", source: "https://commons.wikimedia.org/wiki/File:Egg_incubation.jpg" },
  candleOk: { src: imgCandleOk, credit: "CDC / Dr. Joseph McDade · Public domain", source: "https://commons.wikimedia.org/wiki/File:CDC_PHIL_10149_%E2%80%93_fertilized_egg,_11_days_old.jpg" },
  candleNo: { src: imgCandleNo, credit: "CDC / Dr. Joseph McDade · Public domain", source: "https://commons.wikimedia.org/wiki/File:CDC_PHIL_10147_%E2%80%93_candling,_non-fertile_egg.jpg" },
  pip: { src: imgPip, credit: "Reuvenk · Public domain", source: "https://commons.wikimedia.org/wiki/File:Chicks_hatching.JPG" },
  hatch: { src: imgHatch, credit: "Jonathunder · GFDL 1.2", source: "https://commons.wikimedia.org/wiki/File:ChickHatching.jpg" },
  chicks: { src: imgChicks, credit: "Aq279 · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Chicks_in_an_Incubator.jpg" },
  brooder: { src: imgBrooder, credit: "Abdulybature · CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Raising_young_chicks_in_a_wooden_brooder.jpg" },
}

export const incubator = {
  hero: {
    eyebrow: { hi: "मुर्गी पालन · जुगाड़", en: "Poultry · DIY" },
    title: { hi: "घर पर जुगाड़ से इनक्यूबेटर बनाएँ", en: "Build a DIY egg incubator at home" },
    text: {
      hi: "थर्माकोल का एक डिब्बा, ऑनलाइन मिलने वाली एक छोटी किट और थोड़ी देखभाल — 21 दिन में अपने देसी अंडों से अपने चूज़े। यहाँ पूरा तरीका कदम-दर-कदम है।",
      en: "One thermocol box, a small kit bought online and a little care — your own chicks from your own desi eggs in 21 days. Here is the whole method, step by step.",
    },
  },
  facts: [
    { value: { hi: "21 दिन", en: "21 days" }, label: { hi: "अंडे से चूज़ा", en: "Egg to chick" } },
    { value: { hi: "37.5–37.8°C", en: "37.5–37.8°C" }, label: { hi: "अंदर का तापमान", en: "Temperature inside" } },
    { value: { hi: "~100 अंडे", en: "~100 eggs" }, label: { hi: "एक डिब्बे की क्षमता", en: "Capacity of one box" } },
    { value: { hi: "70–80%", en: "70–80%" }, label: { hi: "ताज़े अंडों से सफलता", en: "Success with fresh eggs" } },
  ],
  why: {
    title: { hi: "इनक्यूबेटर क्यों?", en: "Why an incubator?" },
    points: {
      hi: [
        "बाहर से चूज़े खरीदने का खर्च बचता है — अपने अंडों से अपने चूज़े।",
        "मुर्गी को महीनों तक अंडे सेने में नहीं लगना पड़ता, वह अंडे देती रहती है।",
        "एक साथ बहुत से चूज़े निकलते हैं, जिससे झुंड जल्दी बढ़ता है।",
        "ज़्यादा चूज़े आस-पास के किसानों को बेचकर अलग कमाई।",
      ],
      en: [
        "Saves the cost of buying chicks — your own chicks from your own eggs.",
        "The hen doesn't spend weeks brooding, so she keeps laying.",
        "Many chicks hatch together, so the flock grows fast.",
        "Extra chicks can be sold to nearby farmers for added income.",
      ],
    },
  },
  materials: {
    title: { hi: "ज़रूरी सामान", en: "What you need" },
    items: {
      hi: [
        { t: "थर्माकोल का डिब्बा", d: "गर्मी अंदर रोकता है। बाज़ार में फल-मछली वाले डिब्बे अक्सर मुफ़्त या बहुत सस्ते मिल जाते हैं।" },
        { t: "इनक्यूबेटर किट (ऑनलाइन)", d: "डिजिटल तापमान कंट्रोलर (सेंसर के साथ), 2 बल्ब होल्डर और 2 छोटे 12 वोल्ट के पंखे।" },
        { t: "2 बल्ब", d: "गर्मी देने के लिए। कंट्रोलर इन्हें अपने-आप जलाता-बुझाता है।" },
        { t: "12 वोल्ट अडैप्टर", d: "दोनों पंखे इसी से सीधे चलते हैं।" },
        { t: "काँच का टुकड़ा और टेप", d: "ढक्कन में खिड़की के लिए, ताकि बिना खोले अंदर देख सकें।" },
        { t: "लकड़ी का भूसा (बुरादा)", d: "अंडों के नीचे नरम बिछावन।" },
        { t: "पानी का बर्तन और पार्टीशन", d: "लगभग 1 लीटर पानी — अंदर नमी (ह्यूमिडिटी) बनाए रखता है।" },
        { t: "तापमान मीटर (थर्मामीटर)", d: "अंडों के पास का असली तापमान देखने के लिए।" },
        { t: "पेंसिल या मार्कर", d: "हर अंडे पर निशान लगाने के लिए।" },
      ],
      en: [
        { t: "Thermocol box", d: "Keeps the heat in. Fruit and fish boxes from the market are often free or very cheap." },
        { t: "Incubator kit (online)", d: "A digital temperature controller (with sensor), 2 bulb holders and 2 small 12-volt fans." },
        { t: "2 bulbs", d: "The heat source. The controller switches them on and off automatically." },
        { t: "12-volt adapter", d: "Runs both fans directly." },
        { t: "A piece of glass and tape", d: "For a window in the lid, so you can look inside without opening it." },
        { t: "Wood shavings (sawdust)", d: "A soft bed under the eggs." },
        { t: "Water bowl and a partition", d: "About 1 litre of water — keeps the air inside humid." },
        { t: "Thermometer", d: "To read the real temperature next to the eggs." },
        { t: "Pencil or marker", d: "To mark each egg." },
      ],
    },
  },
  diagram: {
    title: { hi: "अंदर से कैसा दिखता है", en: "What it looks like inside" },
    labels: {
      hi: { lid: "ढक्कन + काँच की खिड़की", vents: "हवा के छेद", bulb: "बल्ब", fan: "पंखा (12V)", sensor: "सेंसर", controller: "तापमान कंट्रोलर", water: "पानी", eggs: "अंडे (लकड़ी के भूसे पर)", box: "थर्माकोल का डिब्बा" },
      en: { lid: "Lid + glass window", vents: "Air holes", bulb: "Bulb", fan: "Fan (12V)", sensor: "Sensor", controller: "Temperature controller", water: "Water", eggs: "Eggs (on wood shavings)", box: "Thermocol box" },
    },
  },
  build: {
    title: { hi: "बनाने का तरीका", en: "How to build it" },
    steps: {
      hi: [
        { t: "डिब्बे में खिड़की बनाएँ", d: "ढक्कन में एक चौकोर खिड़की काटें, उस पर काँच रखें और चारों ओर टेप से अच्छी तरह सील कर दें। इससे बिना ढक्कन खोले अंडे और तापमान देख सकेंगे।"},
        { t: "हवा के छेद करें", d: "ढक्कन के ऊपर कई छोटे-छोटे छेद करें। इनसे ताज़ी हवा आती है और ज़्यादा गर्मी बाहर निकलती है।" },
        { t: "बल्ब और पंखे लगाएँ", d: "दोनों बल्ब होल्डर और दोनों पंखे डिब्बे के ऊपरी हिस्से में लगाएँ। पंखे पूरे डिब्बे में हवा घुमाते हैं ताकि हर कोने में एक-सा तापमान रहे। पंखे 12 वोल्ट अडैप्टर से सीधे चलेंगे।" },
        { t: "कंट्रोलर की वायरिंग", d: "कंट्रोलर से चार तार निकलते हैं — पहले दो मेन लाइन (बिजली) में जाते हैं, और बाकी दो बल्बों से जुड़ते हैं। सेंसर को अंडों की ऊँचाई पर रखें।" },
        { t: "तापमान सेट करें", d: "कंट्रोलर पर कम-से-कम 37.5°C और ज़्यादा-से-ज़्यादा 37.8°C सेट करें। तापमान 37.5 से नीचे जाते ही बल्ब अपने-आप जलेगा और 37.8 से ऊपर जाते ही बंद हो जाएगा।" },
        { t: "बिछावन और पानी", d: "तल पर लकड़ी का भूसा बिछाकर बराबर करें। एक तरफ़ पार्टीशन लगाकर उसके पीछे लगभग 1 लीटर पानी का बर्तन रखें।" },
        { t: "पहले खाली चलाकर देखें", d: "अंडे रखने से पहले इनक्यूबेटर चालू करें और देखें कि तापमान 37.5–37.8°C पर टिकता है या नहीं। अगर 38°C से ऊपर जाए तो कहीं एक छोटा गैप या छेद बढ़ा दें।", img: "wooden" },
      ],
      en: [
        { t: "Make a window", d: "Cut a square window in the lid, place the glass over it and seal all round with tape. You can then check the eggs and temperature without opening the lid."},
        { t: "Make air holes", d: "Punch several small holes on top of the lid. Fresh air comes in and excess heat escapes." },
        { t: "Fit bulbs and fans", d: "Mount both bulb holders and both fans in the upper part of the box. The fans circulate air so every corner stays at the same temperature. The fans run directly from the 12-volt adapter." },
        { t: "Wire the controller", d: "Four wires come out of the controller — the first two go to the mains supply and the other two connect to the bulbs. Place the sensor at egg height." },
        { t: "Set the temperature", d: "Set a minimum of 37.5°C and a maximum of 37.8°C. As soon as it drops below 37.5 the bulbs switch on, and above 37.8 they switch off." },
        { t: "Bedding and water", d: "Spread wood shavings evenly on the floor. Fit a partition on one side and place a bowl with about 1 litre of water behind it." },
        { t: "Test it empty first", d: "Before setting eggs, switch it on and check that the temperature holds at 37.5–37.8°C. If it goes above 38°C, widen a small gap or hole somewhere.", img: "wooden" },
      ],
    },
    imgAlt: {
      hi: { box: "खिड़की वाला थर्माकोल जैसा इनक्यूबेटर", wooden: "लकड़ी के डिब्बे से बना घरेलू इनक्यूबेटर, अंदर थर्मामीटर" },
      en: { box: "A thermocol-style incubator with windows", wooden: "A home-made wooden incubator with a thermometer inside" },
    },
  },
  safety: {
    hi: "सावधानी: कंट्रोलर 220 वोल्ट की बिजली से जुड़ता है। अगर वायरिंग का भरोसा न हो तो बिजली मिस्त्री से करवाएँ। सारे जोड़ टेप से ढकें, बल्ब थर्माकोल को कहीं न छुए (गर्मी से पिघल या आग लग सकती है), और डिब्बे को बच्चों की पहुँच से दूर रखें।",
    en: "Caution: the controller runs on 220-volt mains. If you are not confident with wiring, get an electrician to do it. Tape over every joint, make sure the bulbs never touch the thermocol (it can melt or catch fire), and keep the box out of children's reach.",
  },
  eggs: {
    title: { hi: "सही अंडे कैसे चुनें", en: "Choosing the right eggs" },
    points: {
      hi: [
        "सिर्फ़ निषेचित (fertile) अंडे निकलते हैं — मुर्गियों के साथ मुर्गा होना चाहिए।",
        "हफ़्ते भर पुराने अंडे सबसे अच्छा नतीजा देते हैं; 10–12 दिन तक चल जाते हैं। 15 दिन से पुराने अंडे लगभग नहीं निकलते।",
        "साफ़, बिना दरार वाले, सामान्य आकार के अंडे चुनें।",
        "अगर अंडे ठंडी जगह या फ्रिज में रखे थे तो पहले उन्हें कमरे के तापमान पर आने दें, फिर इनक्यूबेटर में रखें।",
        "हर अंडे के एक तरफ़ पेंसिल से X का निशान लगाएँ — इससे पता रहेगा कि कौन-सी तरफ़ ऊपर है और घुमाया या नहीं।",
      ],
      en: [
        "Only fertile eggs hatch — there must be a rooster with the hens.",
        "Week-old eggs give the best results; up to 10–12 days is fine. Eggs older than 15 days hardly hatch.",
        "Choose clean, uncracked, normal-sized eggs.",
        "If the eggs were kept somewhere cold or in the fridge, let them reach room temperature before setting them.",
        "Mark an X in pencil on one side of each egg — you'll know which side is up and whether it has been turned.",
      ],
    },
  },
  timeline: {
    title: { hi: "21 दिन का कैलेंडर", en: "The 21-day calendar" },
    steps: {
      hi: [
        { day: "दिन 1", t: "अंडे रखें", d: "शाम को अंडों को X ऊपर करके भूसे पर लिटा दें। पानी का बर्तन भरें और ढक्कन बंद करें। तापमान 37.5°C तक पहुँचने में थोड़ा समय लगेगा।" },
        { day: "दिन 1–18", t: "रोज़ दो बार घुमाएँ", d: "हर सुबह 8 बजे और रात 8 बजे हर अंडे को आधा घुमाएँ — एक बार X ऊपर, अगली बार X नीचे। पानी कम हो तो थोड़ा गुनगुना पानी डालें।" },
        { day: "दिन 7–10", t: "कैंडलिंग (अतिरिक्त सुझाव)", d: "अंधेरे कमरे में अंडे के नीचे तेज़ टॉर्च लगाकर देखें। अंदर नसें और परछाईं दिखे तो चूज़ा बन रहा है; अंडा बिल्कुल साफ़ चमके तो बाँझ है — उसे निकाल दें ताकि सड़े नहीं।", img: "candle" },
        { day: "दिन 18", t: "आखिरी बार घुमाना", d: "आज अंडे आखिरी बार घुमाएँ। अब नमी थोड़ी बढ़ाएँ। तापमान बनाए रखने के लिए ज़रूरत हो तो एक-आध हवा का गैप बंद कर दें, ऊपर के छोटे छेद खुले रहने दें।" },
        { day: "दिन 19", t: "हाथ न लगाएँ — दरारें आने लगेंगी", d: "अब अंडों को बिल्कुल न छुएँ। ढक्कन जितना कम हो सके उतना खोलें। कुछ अंडों में दरारें (चोंच से तोड़ना) दिखने लगेंगी।", img: "pip" },
        { day: "दिन 20–21", t: "चूज़े निकलते हैं", d: "चूज़े एक-एक करके खोल तोड़कर निकलेंगे। जल्दबाज़ी में बाहर न निकालें — उन्हें अंदर की गर्मी में पूरी तरह सूखने और फूलने दें (लगभग एक दिन)। ढक्कन खोलें तो गुनगुना पानी ज़रूर डालें।", img: "hatch" },
        { day: "दिन 21 के बाद", t: "ब्रूडर में शिफ़्ट करें", d: "सूखे और चुस्त चूज़ों को गर्म ब्रूडर (बल्ब वाला बाड़ा) में रखें। निकलने के अगले दिन से साफ़ पानी और चूज़ों का दाना दें।", img: "brooder" },
      ],
      en: [
        { day: "Day 1", t: "Set the eggs", d: "In the evening lay the eggs on the shavings with the X facing up. Fill the water bowl and close the lid. It takes a while for the temperature to reach 37.5°C." },
        { day: "Days 1–18", t: "Turn twice a day", d: "Every morning at 8 and every night at 8, turn each egg halfway — X up one time, X down the next. Top up with a little warm water when it runs low." },
        { day: "Days 7–10", t: "Candling (extra tip)", d: "In a dark room, shine a strong torch under the egg. Veins and a shadow mean a chick is growing; an egg that glows clear is infertile — remove it so it doesn't rot.", img: "candle" },
        { day: "Day 18", t: "Last turn", d: "Turn the eggs for the last time today. Now raise the humidity a little. If needed, close an air gap to hold the temperature, but leave the small holes on top open." },
        { day: "Day 19", t: "Hands off — cracks appear", d: "Don't touch the eggs at all from now on. Open the lid as little as possible. Some eggs will start showing cracks (pipping).", img: "pip" },
        { day: "Days 20–21", t: "Chicks hatch", d: "Chicks break out one by one. Don't rush to take them out — let them dry and fluff up fully in the warmth (about a day). Whenever you open the lid, add some warm water.", img: "hatch" },
        { day: "After day 21", t: "Move to a brooder", d: "Move dry, active chicks to a warm brooder (a pen with a bulb). From the next day give clean water and chick feed.", img: "brooder" },
      ],
    },
    imgAlt: {
      hi: { candleOk: "कैंडलिंग: अंदर नसें दिखता जीवित अंडा", candleNo: "कैंडलिंग: साफ़ चमकता बाँझ अंडा", pip: "दिन 19: अंडों में दरारें", hatch: "अंडे से निकलता चूज़ा", brooder: "ब्रूडर में चूज़े, पानी और दाने के बर्तन" },
      en: { candleOk: "Candling: a living egg with visible veins", candleNo: "Candling: an infertile egg glowing clear", pip: "Day 19: cracks in the eggs", hatch: "A chick hatching from its egg", brooder: "Chicks in a brooder with waterer and feeder" },
    },
    candleCaption: {
      hi: ["जीवित — नसें दिखती हैं", "बाँझ — साफ़ चमकता है"],
      en: ["Alive — veins visible", "Infertile — glows clear"],
    },
  },
  humidity: {
    hi: "नमी क्यों ज़रूरी है? पानी से अंदर की हवा नम रहती है। आखिरी चार दिन (18–21) नमी ज़्यादा रखने से खोल सही से टूटता है और चूज़ा अंदर फँसता नहीं। जितनी बार ढक्कन खोलें, उतनी बार गुनगुना पानी डालें ताकि नमी वापस बन जाए।",
    en: "Why humidity matters: the water keeps the air inside moist. Keeping humidity higher in the last four days (18–21) lets the shell break properly so the chick doesn't get stuck. Every time you open the lid, add warm water to restore the humidity.",
  },
  result: {
    title: { hi: "असली नतीजा: 27 अंडे, 21 दिन", en: "Real result: 27 eggs, 21 days" },
    text: {
      hi: "इस तरीके से एक किसान ने 27 देसी मुर्गी के अंडे रखे — दो तरह के:",
      en: "A farmer set 27 desi hen eggs this way — in two batches:",
    },
    head: {
      hi: ["अंडे", "कितने पुराने", "चूज़े निकले", "सफलता"],
      en: ["Eggs", "Age", "Chicks hatched", "Success"],
    },
    rows: {
      hi: [
        ["15", "10–12 दिन", "15", "100%"],
        ["12", "15 दिन से ज़्यादा", "0", "0%"],
        ["27 (कुल)", "—", "15", "लगभग 55%"],
      ],
      en: [
        ["15", "10–12 days", "15", "100%"],
        ["12", "Over 15 days", "0", "0%"],
        ["27 (total)", "—", "15", "About 55%"],
      ],
    },
    lesson: {
      hi: "सबसे बड़ी सीख: अंडे 10–12 दिन से पुराने न हों। ताज़े अंडों से लगभग हर अंडे से चूज़ा निकला, जबकि पुराने अंडों में से एक भी नहीं।",
      en: "The biggest lesson: eggs must not be older than 10–12 days. Almost every fresh egg hatched, while not one of the old eggs did.",
    },
    img: "chicks",
    imgAlt: { hi: "इनक्यूबेटर में लकड़ी के भूसे पर बैठे नए चूज़े", en: "Newly hatched chicks on wood shavings in an incubator" },
  },
  problems: {
    title: { hi: "आम दिक्कतें और हल", en: "Common problems and fixes" },
    head: { hi: ["दिक्कत", "क्या करें"], en: ["Problem", "What to do"] },
    rows: {
      hi: [
        ["तापमान 38°C से ऊपर जा रहा है", "कहीं एक छोटा गैप या छेद बढ़ाएँ; डिब्बे को धूप और गर्म जगह से हटाएँ।"],
        ["तापमान 37.5°C तक नहीं पहुँच रहा", "ढक्कन ठीक से बंद करें, गैप टेप से सील करें, बल्ब और कनेक्शन जाँचें।"],
        ["चूज़ा खोल में फँस गया", "नमी कम थी — आखिरी 4 दिन पानी बढ़ाएँ और ढक्कन कम खोलें।"],
        ["कई अंडे निकले ही नहीं", "अंडे पुराने या बाँझ थे — 10–12 दिन से ताज़े और मुर्गे वाले झुंड के अंडे लें।"],
        ["बिजली चली गई (अतिरिक्त सुझाव)", "छोटी कटौती में ढक्कन बंद रखें और ऊपर कंबल डाल दें; लंबी कटौती वाले इलाके में इन्वर्टर या बैटरी का इंतज़ाम रखें।"],
      ],
      en: [
        ["Temperature going above 38°C", "Widen a small gap or hole; move the box away from sun and hot spots."],
        ["Temperature won't reach 37.5°C", "Close the lid properly, tape up gaps, check the bulbs and connections."],
        ["Chick stuck in the shell", "Humidity was too low — add more water in the last 4 days and open the lid less."],
        ["Many eggs never hatched", "The eggs were old or infertile — use eggs fresher than 10–12 days from a flock with a rooster."],
        ["Power cut (extra tip)", "For short cuts keep the lid shut and put a blanket over the box; in areas with long cuts arrange an inverter or battery."],
      ],
    },
  },
  ui: {
    back: { hi: "← सभी मॉड्यूल", en: "← All modules" },
    poultry: { hi: "मुर्गी पालन मॉड्यूल देखें →", en: "See the poultry module →" },
    note: {
      hi: "“अतिरिक्त सुझाव” वाली बातें आम अनुभव से जोड़ी गई हैं; बाकी तरीका एक किसान के घर पर बने इनक्यूबेटर के असली अनुभव पर आधारित है।",
      en: "Points marked “extra tip” are added from general practice; the rest of the method is based on one farmer's real experience with a home-built incubator.",
    },
    stepLabel: { hi: "कदम", en: "Step" },
  },
}
