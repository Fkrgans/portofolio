import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Portofolio 2",
  category: "IoT & Embedded System",
  heroImg: "/portofolio2.jpg",
  tagline:
    "Portofolio 2 adalah showcase proyek yang menampilkan kemampuan saya dalam membangun antarmuka web modern dan solusi IoT.",
  year: "2025",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "IoT",
  ],
  features: [
    "Tampilan proyek singkat dengan nama Portofolio 2.",
    "Gambar utama yang terhubung ke thumbnail portofolio.",
    "Klik untuk membuka detail proyek dalam modal overlay.",
    "Desain visual yang konsisten dengan branding portofolio.",
  ],
  impact: [
    "Membuat pengunjung memahami karya dengan cepat melalui nama dan gambar yang jelas.",
    "Memperkuat kesan profesional pada portofolio digital.",
  ],
  links: {
    repo: "",
  },
};

export default function FloodDetectionSystemDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
