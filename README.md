🖤 Ahmad Fikri — Professional Developer Portfolio

📌 Ringkasan Singkat

Selamat datang di repositori portofolio pribadi Ahmad Fikri. Portofolio ini dirancang dengan gaya Hitam Elegan & Putih (Minimalis Modern) untuk memamerkan keahlian dan proyek di bidang rekayasa teknologi, khususnya Internet of Things (IoT), Frontend Development, Artificial Intelligence (AI), dan fondasi Cybersecurity.

🧠 Tech Stack & Instrumentasi

💼 Proyek Unggulan

🌊 Flood Detection System — Sistem deteksi dini potensi bencana banjir berbasis mikrokomputer Raspberry Pi 3.

⚖️ Smart Digital Scale — Timbangan digital berbasis ESP8266 yang terhubung ke internet untuk monitoring data real-time secara online.

👁️ Real-time Object Detection — Implementasi model kecerdasan buatan YOLOv8 untuk mendeteksi objek secara instan melalui webcam.

📂 Struktur Folder Proyek

Portfolio-dev/
├─ .editorconfig
├─ .gitignore
├─ .hintrc
├─ .npmrc
├─ .env
├─ build/                 # Hasil produksi, bisa dibersihkan jika perlu
├─ build.zip              # Backup hasil build
├─ index.html
├─ package.json
├─ package-lock.json
├─ postcss.config.js
├─ public/
│  ├─ assets/
│  │  └─ images/          # Seluruh asset gambar portfolio
│  └─ manifest.json
├─ README.md
├─ src/
│  ├─ App.jsx
│  ├─ index.css           # Global style dan konfigurasi Tailwind
│  ├─ index.js            # Entry point React
│  ├─ main.jsx            # Inisialisasi Vite / React
│  ├─ components/         # Komponen UI modular
│  │  ├─ AboutSection.jsx
│  │  ├─ ChatLauncher.jsx
│  │  ├─ ChatWidget.jsx
│  │  ├─ Cursor.jsx
│  │  ├─ Footer.jsx
│  │  ├─ GitHubStats.jsx
│  │  ├─ HackathonDetailModal.jsx
│  │  ├─ HeroSection.jsx
│  │  ├─ LightRays.css
│  │  ├─ LightRays.jsx
│  │  ├─ Magnetic.jsx
│  │  ├─ MarqueeBanner.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ NoiseOverlay.jsx
│  │  ├─ Preloader.jsx
│  │  ├─ ProfessionalExperience.jsx
│  │  ├─ ProjectGallery.jsx
│  │  ├─ projects/        # Sub-komponen proyek detail
│  │  ├─ TechnicalCapabilities.jsx
│  │  └─ TechStack.jsx
│  ├─ data/               # Data konten portofolio
│  │  ├─ portfolioData.js
│  │  ├─ projectDetailsData.js
│  │  ├─ projectMeta.js
│  │  └─ sectionRegistry.js
│  ├─ hooks/              # Custom hooks React
│  │  ├─ useLenis.js
│  │  └─ useScrollToGallery.js
│  ├─ pages/
│  │  └─ Home.jsx         # Halaman utama
│  ├─ projectDetails/     # Halaman detail setiap proyek
│  │  ├─ CoffeeScaleDetail.jsx
│  │  ├─ DiabetesClassificationDetail.jsx
│  │  ├─ FinancialAssistantDetail.jsx
│  │  ├─ FloodDetectionSystemDetail.jsx
│  │  ├─ FloodSegmenDetail.jsx
│  │  ├─ ImageClasDetail.jsx
│  │  ├─ LeadsUpDetail.jsx
│  │  ├─ LostAndFoundDetail.jsx
│  │  ├─ PolsekRembangDetail.jsx
│  │  ├─ projectRegistry.js
│  │  ├─ QMealDetail.jsx
│  │  └─ SmartScaleDetail.jsx
│  ├─ services/           # Logika API & helper asisten AI
│  │  ├─ aiContext.js
│  │  ├─ cerebras.js
│  │  ├─ intentRouter.js
│  │  └─ responseSanitizer.js
│  └─ utils/              # Utilitas kecil untuk animasi
│     ├─ easing.js
│     └─ gsapAnimate.jsx
├─ tailwind.config.js
└─ vite.config.js

⚙️ Alur Kerja & Arsitektur Aplikasi

Berikut adalah gambaran bagaimana komponen-komponen di dalam proyek ini saling berinteraksi, termasuk integrasi widget chat AI pintar menggunakan Cerebras API:

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


🎯 Flowchart Pengembangan (Development Lifecycle)

Gunakan diagram alur berikut sebagai panduan ketika Anda ingin memperbarui atau mengembangkan portofolio ini dari lokal hingga siap di-deploy:

flowchart TD
    Start([Mulai]) --> Clone[1. Clone Repositori dari GitHub]
    Clone --> Install[2. Jalankan 'npm install' untuk Pasang Dependensi]
    Install --> DevServer[3. Jalankan Server Lokal: 'npm run dev']
    
    DevServer --> Decision{Ada Perubahan Konten/Fitur?}
    
    Decision -->|Ya, Ubah Data Proyek| EditData[Edit src/data/portfolioData.js]
    Decision -->|Ya, Ubah Tampilan UI| EditComponent[Edit file di src/components/]
    
    EditData --> LivePreview[Verifikasi Hasil di http://localhost:5173]
    EditComponent --> LivePreview
    LivePreview --> Decision
    
    Decision -->|Tidak, Sudah Siap| Build[4. Jalankan Kompilasi: 'npm run build']
    Build --> Deploy[5. Deploy Folder 'dist/' ke Platform Hosting]
    Deploy --> End([Selesai / Website Live])

    style Start fill:#000,stroke:#fff,stroke-width:2px,color:#fff
    style End fill:#000,stroke:#fff,stroke-width:2px,color:#fff
    style Decision fill:#333,stroke:#fff,color:#fff


🛠️ Panduan Instalasi Lokal

Ikuti langkah-langkah di bawah ini untuk memasang proyek di komputer Anda secara lokal:

Clone Repositori

git clone https://github.com/ahmadfikri/your-portfolio-repo.git
cd Portfolio-dev


Instal Dependensi

npm install


Jalankan Mode Pengembangan

npm run dev


Buka http://localhost:5173 di peramban Anda untuk melihat hasilnya.

Kompilasi untuk Produksi

npm run build


📸 Panduan Manajemen Gambar (Assets)

Letakkan semua file visual pendukung di dalam folder public/assets/images/.

Daftar path file rekomendasi:

Profil Utama: /assets/images/profile.jpg

Deteksi Banjir: /assets/images/flood-detection-system.jpg

Timbangan Digital: /assets/images/smart-digital-scale.jpg

Deteksi Objek AI: /assets/images/real-time-object-detection.jpg

💡 Tips: Vite membaca folder public langsung dari root /. Sehingga di dalam kode, panggil gambar cukup menggunakan path /assets/images/nama-file.jpg.

🤝 Cara Berkontribusi

Lakukan Fork pada repositori ini.

Buat branch fitur baru (git checkout -b feature/FiturKeren).

Lakukan perubahan data proyek di folder src/data/ atau perbaiki antarmuka komponen.

Jalankan npm run dev untuk memastikan tidak ada error yang terjadi.

Commit perubahan Anda (git commit -m 'Menambahkan fitur deteksi AI').

Push ke branch Anda (git push origin feature/FiturKeren) dan buat Pull Request.

🚀 Deployment

Jalankan perintah npm run build untuk menghasilkan folder kompilasi (biasanya bernama dist atau build).

Deploy folder tersebut ke layanan hosting statis favorit Anda seperti Vercel, Netlify, atau GitHub Pages.

Catatan khusus GitHub Pages: Jika Anda men-deploy ke sub-path GitHub Pages, pastikan parameter base pada vite.config.js sudah disesuaikan dengan nama repositori Anda.