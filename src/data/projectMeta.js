// src/data/projectMeta.js

export const PROJECT_META = [
  {
    id: 1,
    title: "Portofolio 2",
    slug: "flood-detection-system",
    category: "IoT & Embedded System",
    img: "/portofolio/portofolio2.jpg",
    thumbnail: "/portofolio/portofolio2.jpg"
  },
  {
    id: 2,
    title: "Pendeteksi Objek",
    slug: "smart-scale",
    category: "Computer Vision",
    img: "/portofolio/deteksi_objek.jpg",
    thumbnail: "/portofolio/deteksi_objek.jpg"
  },
  {
    id: 3,
    title: "Timbangan Kopi IoT",
    slug: "ai-object-detection",
    category: "IoT Monitoring",
    img: "/portofolio/timbangan-kopi.jpeg",
    thumbnail: "/portofolio/timbangan-kopi.jpeg"
  }
];

// Membuat mapping berdasarkan slug agar "PROJECT_META_BY_SLUG" bisa dibaca projectRegistry.js
export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});