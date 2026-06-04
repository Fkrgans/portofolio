# Portfolio Pribadi — Professional Developer Portfolio

### 📌 Ringkasan Singkat
Selamat datang di repositori portofolio pribadi. Portofolio ini dirancang dengan gaya **Hitam Elegan & Putih (Minimalis Modern)** untuk memamerkan keahlian dan proyek di bidang rekayasa teknologi, khususnya Internet of Things (IoT), Frontend Development, Artificial Intelligence (AI), dan fondasi Cybersecurity.

---

### 🧠 Tech Stack & Instrumentasi
* **Frontend:** React.js, Vite, Tailwind CSS, GSAP (Animation), Lenis (Smooth Scroll)
* **Hardware & IoT:** Raspberry Pi 3, ESP8266 (NodeMCU), ESP32, Load Cell, Sensor IoT
* **AI & Computer Vision:** YOLOv8, OpenCV, Python, Cerebras Cloud API (AI Assistant)

---

### 💼 Proyek Utama

* **🌊 Flood Detection System**
    Sistem deteksi dini potensi bencana banjir berbasis mikrokomputer Raspberry Pi 3.
* **⚖️ Smart Digital Scale**
    Timbangan digital berbasis ESP8266 yang terhubung ke internet untuk monitoring data real-time secara online.
* **👁️ Real-time Object Detection**
    Implementasi model kecerdasan buatan YOLOv8 untuk mendeteksi objek secara instan melalui webcam.

---

### 📂 Struktur Folder Proyek

```text
Portfolio-dev/
├── .editorconfig
├── .gitignore
├── .hintrc
├── .npmrc
├── .env
├── build/                 # Hasil produksi, bisa dibersihkan jika perlu
├── build.zip              # Backup hasil build
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public/
│   ├── assets/
│   │   └── images/        # Seluruh asset gambar portfolio
│   └── manifest.json
├── README.md
├── src/
│   ├── App.jsx
│   ├── index.css          # Global style dan konfigurasi Tailwind
│   ├── index.js           # Entry point React
│   ├── main.jsx           # Inisialisasi Vite / React
│   ├── components/        # Komponen UI modular
│   │   ├── AboutSection.jsx
│   │   ├── ChatLauncher.jsx
│   │   ├── ChatWidget.jsx
│   │   ├── Cursor.jsx
│   │   ├── Footer.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── HackathonDetailModal.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LightRays.css
│   │   ├── LightRays.jsx
│   │   ├── Magnetic.jsx
│   │   ├── MarqueeBanner.jsx
│   │   ├── Navbar.jsx
│   │   ├── NoiseOverlay.jsx
│   │   ├── Preloader.jsx
│   │   ├── ProfessionalExperience.jsx
│   │   ├── ProjectGallery.jsx
│   │   ├── TechnicalCapabilities.jsx
│   │   ├── TechStack.jsx
│   │   └── projects/      # Sub-komponen proyek detail
│   ├── data/              # Data konten portofolio
│   │   ├── portfolioData.js
│   │   ├── projectDetailsData.js
│   │   ├── projectMeta.js
│   │   └── sectionRegistry.js
│   ├── hooks/             # Custom hooks React
│   │   ├── useLenis.js
│   │   └── useScrollToGallery.js
│   ├── pages/
│   │   └── Home.jsx       # Halaman utama
│   ├── projectDetails/    # Halaman detail setiap proyek
│   │   ├── CoffeeScaleDetail.jsx
│   │   ├── DiabetesClassificationDetail.jsx
│   │   ├── FinancialAssistantDetail.jsx
│   │   ├── FloodDetectionSystemDetail.jsx
│   │   ├── FloodSegmenDetail.jsx
│   │   ├── ImageClasDetail.jsx
│   │   ├── LeadsUpDetail.jsx
│   │   ├── LostAndFoundDetail.jsx
│   │   ├── PolsekRembangDetail.jsx
│   │   ├── projectRegistry.js
│   │   ├── QMealDetail.jsx
│   │   └── SmartScaleDetail.jsx
│   ├── services/          # Logika API & helper asisten AI
│   │   ├── aiContext.js
│   │   ├── cerebras.js
│   │   ├── intentRouter.js
│   │   └── responseSanitizer.js
│   └── utils/             # Utilitas kecil untuk animasi
│       ├── easing.js
│       └── gsapAnimate.jsx
├── tailwind.config.js
└── vite.config.js

graph TD
    User([Pengunjung Website]) -->|Interaksi UI| Home[pages/Home.jsx]
    
    subgraph Core_Application [Aplikasi React & Vite]
        Home -->|Rendering Tata Letak| Components[src/components/]
        Components -->|Navbar & Hero| HeroSection[HeroSection.jsx]
        Components -->|Galeri Proyek| Gallery[AboutSection / Projects]
        Components -->|Smooth Scrolling| LenisHook[hooks/useLenis.js]
        
        Gallery -->|Membaca Data Statis| LocalData[(data/portfolioData.js)]
    end

    subgraph AI_Integration [Asisten AI Interaktif]
        Components -->|Pemicu Chat| ChatWidget[ChatWidget.jsx]
        ChatWidget -->|Kirim Prompt| CerebrasService[services/cerebras.js]
        CerebrasService -->|Inference Request| CerebrasAPI[[Cerebras Cloud API]]
    end

    CerebrasAPI -.->|Respon AI Cepat| CerebrasService
    CerebrasService -.->|Tampilkan Pesan| ChatWidget
