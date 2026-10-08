import { asset } from "./assets";

export const school = {
  name: "Tulas International School",
  short: "TIS",
  helpline: { label: "+91-9837983791", href: "tel:+91-9837983791" },
  email: "info@tis.edu.in",
  landlines: [
    { label: "0135-2699444", href: "tel:0135-2699444" },
    { label: "0135-2699666", href: "tel:0135-2699666" },
  ],
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  mapsLink: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  mapEmbed:
    "https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India&t=m&z=10&output=embed&iwloc=near",
  applyUrl: "https://admission.tis.edu.in",
  virtualTourUrl: "https://tis.edu.in/virtual-tour/",
};

export const navItems = [
  { label: "About TIS", href: "#about" },
  { label: "Beyond Academics", href: "#sports" },
  { label: "Awards", href: "#awards" },
  { label: "Parents", href: "#reviews" },
  { label: "Contact", href: "#enquire" },
];

export const stats = [
  { value: "22", unit: "Acre", label: "Pollution-free campus" },
  { value: "16+", unit: "", label: "Olympic sports" },
  { value: "24×7", unit: "", label: "Medical assistance" },
  { value: "6:1", unit: "", label: "Student-teacher ratio" },
];

export const rankings = [
  { rank: "#1", place: "In Dehradun", title: "Co-Educational Boarding School in Dehradun", by: "Education Today" },
  { rank: "#2", place: "In Uttarakhand", title: "Co-Educational Boarding School in North India", by: "Education Today" },
  { rank: "#1", place: "In North India", title: "Co-Educational Boarding School in North India", by: "Outlook" },
  { rank: "#4", place: "In India", title: "Co-Educational Boarding School in India", by: "Education Today" },
];

export const awards = [
  { src: asset("TopBoarding.e5405c1a.jpg"), alt: "Top Boarding School award" },
  { src: asset("BestResidential.5173db8d.jpg"), alt: "Best Residential School award" },
  { src: asset("UTTARAKHAND.652376d5.jpg"), alt: "Uttarakhand school excellence award" },
];

export const partners = [
  { src: asset("Universidad.935e33e1.png"), alt: "Partner university logo" },
  { src: asset("yhnbepcntet.3b80eac6.jpg"), alt: "Partner institution logo" },
  { src: asset("Universitat.f7fac869.jpg"), alt: "Partner university logo" },
  { src: asset("Cpi6.106c6037.jpg"), alt: "Partner institution logo" },
  { src: asset("inseec.780a3115.png"), alt: "INSEEC logo" },
  { src: asset("Trinty.31016999.png"), alt: "Trinity logo" },
  { src: asset("University.6c89dc70.png"), alt: "Partner university logo" },
  { src: asset("International_Award_for_Young_People_logo.a0d1c4fa.jpg"), alt: "International Award for Young People logo" },
  { src: asset("lions.bf493cc1.png"), alt: "Lions logo" },
  { src: asset("inseecU.1e5c929a.png"), alt: "INSEEC U logo" },
  { src: asset("Universitas.d9db402c.png"), alt: "Partner university logo" },
  { src: asset("universityLogo.6e446aad.jpg"), alt: "Partner university logo" },
];

export const footerLinks = [
  { label: "FAQ", href: "https://tis.edu.in/faq/" },
  { label: "Calendar", href: "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf" },
  { label: "Brochure", href: "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf" },
  { label: "Virtual Tour", href: school.virtualTourUrl },
  { label: "Privacy Policy", href: "https://tis.edu.in/privacy-policy/" },
  { label: "Terms & Conditions", href: "https://tis.edu.in/terms-conditions/" },
  { label: "Disclaimer", href: "https://tis.edu.in/disclaimer/" },
  { label: "Disciplinary Policy", href: "https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf" },
  { label: "Mobile Phone Policy", href: "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf" },
  { label: "Child Welfare & Safety Policy", href: "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf" },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/" },
  { label: "Twitter", href: "https://twitter.com/tulas_intschool?lang=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/school/tulas-international-school/" },
  { label: "Instagram", href: "https://www.instagram.com/tulasinternationalschool/?hl=en" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw" },
];
