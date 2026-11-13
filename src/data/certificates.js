const BASE = import.meta.env.BASE_URL;
const thumb = (slug) => `${BASE}certificate/thumbs/${slug}.jpg`;
const pdf = (filename) => `${BASE}certificate/${encodeURI(filename)}`;

export const CERTIFICATES = [
  {
    id: "gen-ai-azure",
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "21 Des 2025",
    thumbnail: thumb("gen-ai-azure"),
    pdf: pdf("sertifikat_course_899_5404100_211225022457.pdf"),
  },
  {
    id: "data-science-fabric",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "10 Des 2025",
    thumbnail: thumb("data-science-fabric"),
    pdf: pdf("sertifikat_course_902_5404100_101225081615.pdf"),
  },
  {
    id: "ai-dasar",
    title: "Dasar-Dasar Implementasi Kecerdasan Artifisial",
    issuer: "Digital Talent Scholarship 2026",
    date: "9 Des 2025",
    thumbnail: thumb("ai-dasar"),
    pdf: pdf("Sertifikat_AHMAD FIKRI_Dasar-Dasar Implementasi Kecerdasan Artifisial.pdf"),
  },
  {
    id: "iot",
    title: "Pengenalan Internet of Things: Konsep, Teknologi, dan Aplikasinya",
    issuer: "Digital Talent Scholarship 2026",
    date: "9 Des 2025",
    thumbnail: thumb("iot"),
    pdf: pdf("Sertifikat_AHMAD FIKRI_Pengenalan Internet of Things Konsep, Teknologi, dan Aplikasinya.pdf"),
  },
  {
    id: "cyber-security",
    title: "Introduction to Cyber Security and Career Awareness",
    issuer: "Digital Talent Scholarship 2026",
    date: "28 Nov 2025",
    thumbnail: thumb("cyber-security"),
    pdf: pdf("Sertifikat_AHMAD FIKRI_Introduction to Cyber Security and Career Awareness.pdf"),
  },
  {
    id: "konsep-pemrograman",
    title: "Konsep Pemrograman",
    issuer: "Digital Talent Scholarship 2026",
    date: "27 Nov 2025",
    thumbnail: thumb("konsep-pemrograman"),
    pdf: pdf("Sertifikat_AHMAD FIKRI_Konsep Pemrograman.pdf"),
  },
];
