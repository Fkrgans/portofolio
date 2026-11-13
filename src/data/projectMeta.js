// src/data/projectMeta.js

const asset = (filename) => `${import.meta.env.BASE_URL}${filename}`;

export const PROJECT_META = [
  {
    id: 1,
    title: "Portofolio 2",
    slug: "flood-detection-system",
    category: "IoT & Embedded System",
    img: asset("portofolio2.jpg"),
    thumbnail: asset("portofolio2.jpg")
  },
  {
    id: 2,
    title: "Pendeteksi Objek",
    slug: "smart-scale",
    category: "Computer Vision",
    img: asset("deteksi_objek.jpg"),
    thumbnail: asset("deteksi_objek.jpg")
  },
  {
    id: 3,
    title: "Timbangan Kopi IoT",
    slug: "ai-object-detection",
    category: "IoT Monitoring",
    img: asset("timbangan-kopi.jpeg"),
    thumbnail: asset("timbangan-kopi.jpeg")
  }
];

// Membuat mapping berdasarkan slug agar "PROJECT_META_BY_SLUG" bisa dibaca projectRegistry.js
export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});