import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Pendeteksi Objek",
  category: "Computer Vision",
  heroImg: "/portofolio/deteksi_objek.jpg",
  tagline:
    "Aplikasi deteksi objek real-time berbasis YOLOv8 untuk monitoring visual dan automasi.",
  year: "2025",
  stack: ["Python", "YOLOv8", "OpenCV", "React", "Webcam"],
  features: [
    "Deteksi objek secara real-time menggunakan model YOLOv8.",
    "Menampilkan bounding box dan label deteksi secara langsung pada video kamera.",
    "Dukungan untuk beberapa kelas objek yang relevan dalam demo AI vision.",
  ],
  impact: [
    "Meningkatkan monitoring visual dengan deteksi objek otomatis yang siap dipresentasikan.",
    "Menyediakan proof-of-concept AI vision yang menarik bagi pengunjung portofolio.",
  ],
  links: {
    repo: "",
  },
};

export default function SmartScaleDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
