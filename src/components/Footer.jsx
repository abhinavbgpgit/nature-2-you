const footerCopy = {
  en: "Farm2Home Natural Farming Platform - farming with nature, healthy food, and sustainable income.",
  hi: "फार्म2होम प्राकृतिक खेती मंच - प्रकृति के साथ खेती, स्वस्थ भोजन और टिकाऊ आय।",
}

export default function Footer({ language }) {
  return <footer>{footerCopy[language]}</footer>
}
