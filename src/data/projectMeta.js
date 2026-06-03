// src/data/projectMeta.js

export const PROJECT_META = [
  {
    id: 1,
    title: "Portofolio 2",
    slug: "flood-detection-system",
    category: "IoT & Embedded System",
    img: "/portofolio2.jpg",
    thumbnail: "/portofolio2.jpg"
  },
  {
    id: 2,
    title: "Pendeteksi Objek",
    slug: "smart-scale",
    category: "Computer Vision",
    img: "/deteksi_objek.jpg",
    thumbnail: "/deteksi_objek.jpg"
  },
  {
    id: 3,
    title: "Timbangan Kopi IoT",
    slug: "ai-object-detection",
    category: "IoT Monitoring",
    img: "/timbangan-kopi.jpeg",
    thumbnail: "/timbangan-kopi.jpeg"
  }
];

// Membuat mapping berdasarkan slug agar "PROJECT_META_BY_SLUG" bisa dibaca projectRegistry.js
export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});