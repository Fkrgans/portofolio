import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Timbangan Kopi IoT",
  category: "IoT Monitoring",
  heroImg: `${import.meta.env.BASE_URL}timbangan-kopi.jpeg`,
  tagline:
    "Sistem timbangan kopi IoT yang mengukur berat biji kopi secara otomatis dan menampilkan data secara real-time.",
  year: "2025",
  stack: ["ESP32", "Load Cell", "MQTT", "React", "Dashboard"],
  features: [
    "Pengukuran berat kopi otomatis dengan sensor load cell.",
    "Pengiriman data berat ke dashboard web secara real-time.",
    "Histori berat dan peringatan untuk konsistensi takaran kopi.",
  ],
  impact: [
    "Meningkatkan konsistensi takaran kopi pada proses produksi dan penyajian.",
    "Menampilkan proof-of-concept IoT untuk aplikasi kopi cerdas.",
  ],
  links: {
    repo: "",
  },
};

export default function CoffeeScaleDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
