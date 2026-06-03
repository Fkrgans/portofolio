// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  "flood-detection-system": {
    title: "Portofolio 2",
    category: "IoT & Embedded System",
    tagline: "Sistem monitoring ketinggian air dan kendali pintu air otomatis untuk mitigasi banjir.",
    year: "2025",
    stack: ["Raspberry Pi 3", "Sensor Air", "Relay", "Python", "Automation"],
    features: [
      "Monitoring ketinggian air realtime dan trigger otomatis untuk pengendalian pintu air.",
      "Integrasi sensor level, pompa, dan kontrol aktuator untuk respons cepat di kondisi kritis.",
      "Dashboard ringkas untuk menampilkan kondisi terkini dan status sistem.",
      "Desain sistem tahan kondisi lapangan untuk pemantauan lingkungan banjir.",
    ],
    impact: [
      "Membantu mitigasi banjir dengan peringatan dini dan tindakan otomatis tanpa intervensi manual yang lambat.",
      "Meningkatkan kecepatan respon terhadap kenaikan muka air di area rawan banjir.",
    ],
    links: {
      repo: "",
    },
  },
  "smart-scale": {
    title: "Pendeteksi Objek",
    category: "Computer Vision",
    tagline: "Aplikasi deteksi objek real-time menggunakan YOLOv8 dan kamera untuk monitoring visual dan automasi.",
    year: "2025",
    stack: ["Python", "YOLOv8", "OpenCV", "React", "Webcam"],
    features: [
      "Deteksi objek secara real-time menggunakan model YOLOv8.",
      "Tampilan video kamera dengan bounding box dan label objek yang jelas.",
      "Respons cepat untuk berbagai kelas objek yang dilatih dalam model.",
    ],
    impact: [
      "Meningkatkan sistem monitoring dengan informasi visual yang langsung dapat ditindaklanjuti.",
      "Menyediakan demo AI vision yang mudah dipahami untuk pengguna dan pengunjung portofolio.",
    ],
    links: {
      repo: "",
    },
  },
  "ai-object-detection": {
    title: "Timbangan Kopi IoT",
    category: "IoT Monitoring",
    tagline: "Sistem timbangan kopi IoT yang mengukur berat biji kopi secara real-time dan mengirim data ke dashboard.",
    year: "2025",
    stack: ["ESP32", "Load Cell", "MQTT", "React", "Dashboard"],
    features: [
      "Pengukuran berat kopi otomatis menggunakan sensor load cell.",
      "Pengiriman data berat secara real-time ke dashboard web.",
      "Notifikasi dan historikal berat untuk operasional kopi yang lebih presisi.",
    ],
    impact: [
      "Membantu penyiapan kopi lebih konsisten dengan data berat yang akurat.",
      "Memberikan bukti konsep IoT untuk aplikasi industri kopi dan produksi skala kecil.",
    ],
    links: {
      repo: "",
    },
  },
  "diabetes-classification": {
    title: "Diabetes Classification",
    category: "AI / Machine Learning",
    tagline:
      "A Machine Learning-based diabetes classification app that predicts diabetes risk from patient data, packaged in a simple, fast, and user-friendly web interface.",
    year: "2025",
    stack: [
      "Python",
      "Pandas / NumPy",
      "Scikit-learn",
      "Matplotlib / Seaborn",
      "Streamlit",
      "Model Serialization (Pickle / Joblib)",
    ],
    features: [
      "Patient data input form (glucose, BMI, age, insulin, etc.) for instant risk prediction.",
      "Preprocessing pipeline: handles missing values, scaling, and feature selection for model stability.",
      "Multi-algorithm training & evaluation (Logistic Regression / Random Forest / SVM) to select the best performer.",
      "Clear prediction output (Diabetes / Non-Diabetes) with easy-to-understand feedback messages.",
      "Clean project structure: data processing, training, evaluation, and inference separated for easier maintenance.",
    ],
    impact: [
      "Helps identify diabetes risk early based on patient health data before serious symptoms appear.",
      "Supports decision-making with fast predictions on whether a patient is likely to develop diabetes.",
      "Can be used as an initial screening tool to raise awareness and enable early prevention of diabetes.",
    ],
    links: {
      live: "https://diabetes-classificationn.streamlit.app/",
      repo: "https://github.com/your-username/Projek-Klasifikasi-Diabetes",
    },
  },
  leadsup: {
    title: "LeadsUp",
    category: "AI-Powered Lead Scoring",
    tagline:
      "An AI-powered sales portal that prioritizes the most promising prospects for term deposit subscriptions - helping sales teams focus on high-value leads and boost follow-up efficiency.",
    year: "2025",
    stack: ["Python", "React", "Tailwind", "REST API", "ExpressJS", "Supabase"],
    features: [
      "Auto-ranking leads: automatically sorts prospects by highest subscription probability for term deposits.",
      "Transparent lead scoring: each prospect has a score/probability so sales can prioritize calls data-driven, not randomly.",
      "Concise sales dashboard: KPI overview of total leads, contacted, pending follow-ups, conversion rate, and high-priority prospects.",
      "Quick filter & segmentation: sort by status (contacted/pending), priority, and key attributes (age/job/campaign history).",
      "Actionable lead detail view: displays key prospect information to help sales tailor their approach when reaching out.",
      "Follow-up workflow: contact status updates + activity logging so every prospect's progress is tracked and never missed.",
    ],
    impact: [
      "Helps sales save time by focusing on the most promising prospects based on model predictions, rather than calling randomly.",
      "Increases campaign conversion rates by directing follow-up priority to prospects with the highest probability.",
      "Provides an easy-to-use MVP for daily sales workflow: ranking > contact > update status > monitor results.",
    ],
    links: {
      repo: "https://github.com/your-username/Predictive-Lead-Scoring-Portal-for-Banking",
    },
  },
  polsekrembang: {
    title: "Polsek Rembang",
    category: "Virtual Assistant",
    tagline:
      "A RAG-based virtual assistant for Polsek Rembang Kota information services - helping citizens get quick, clear, and human-like answers about SKCK, lost item reports, event permits, and related police services.",
    year: "2025",
    stack: [
      "Next.js (API Route)",
      "Google Gemini API",
      "RAG (Knowledge Base + Retrieval)",
      "Prompt Engineering (system prompt & guardrails)",
      "Chat UI (interactive conversation)",
    ],
    features: [
      "Interactive chat for Q&A about police services with a friendly yet professional and informative tone.",
      "RAG knowledge base: answers are derived from internal knowledge (station profile, service hours, SKCK, lost item reports, event permits, detainee visits, etc.).",
      "Response guardrails: assistant only answers topics relevant to police services, and politely declines off-topic questions.",
      "Consistent answer format (plain text): no markdown, no unusual symbols - easily readable on any device.",
      "Quick actions to speed up user flow: e.g., police service buttons, incident reports, and contact an officer.",
      "Download transcript: users can download chat history as evidence/conversation summary.",
      "Multimodal mode (optional): can receive images for analysis if needed (e.g., evidence or simple visual context).",
    ],
    impact: [
      "Speeds up access to service information: citizens no longer need to search for procedures and requirements as answers are instantly available via chat.",
      "Reduces repetitive questions to officers for administrative matters (SKCK, lost items, permits), allowing officers to focus on field services.",
      "Enhances citizen experience with clear, consistent, and human-like responses - bringing public services closer through AI technology.",
    ],
    links: {
      repo: "https://github.com/your-username/chatbot_ai",
    },
  },
  floodsegmen: {
    title: "Flood Segmentation Analyzer",
    category: "Computer Vision",
    tagline:
      "A deep learning-based flood segmentation app to detect and calculate affected area from imagery - with side-by-side U-Net and U-Net++ comparison in a single analysis dashboard.",
    year: "2025",
    stack: [
      "Python (Backend)",
      "FastAPI",
      "PyTorch",
      "U-Net",
      "U-Net++",
      "Image Preprocessing (OpenCV)",
      "Post-processing (mask refinement & thresholding)",
      "Frontend Dashboard (Next.js)",
      "Microsoft Azure (Deployment & Hosting)",
    ],
    features: [
      "Automatic flood segmentation from uploaded images to generate clear and readable flood masks.",
      "Two models in one system: U-Net and U-Net++ to compare segmentation performance on the same case.",
      "Analysis statistics: flood area (%), flood pixel count, total pixels, and model difference summary.",
      "Compare mode: displays Original vs U-Net Mask vs U-Net++ Mask and disagreement map for areas of conflict.",
      "Model agreement score to measure prediction consistency between U-Net and U-Net++ (consensus & pixel difference).",
      "Python backend inference pipeline deployed to Microsoft Azure for online access and scalability.",
      "Quick workflow: upload image > inference > result visualization > download/recap analysis.",
    ],
    impact: [
      "Enables rapid identification of flood-affected areas from imagery, making situational analysis more efficient.",
      "Provides quantitative estimates (area/pixel count) that can serve as a basis for reporting and condition monitoring.",
      "Facilitates segmentation model evaluation through direct U-Net vs U-Net++ comparison to select the best approach.",
    ],
    links: {
      repo: "https://github.com/your-username/FloodSegmentationAPP",
    },
  },
  qmeal: {
    title: "QMeal E-Kantin",
    category: "Multi-Vendor Ordering Platform",
    tagline:
      "A multi-vendor canteen platform that lets users order from multiple stalls at once - faster, queue-free, with AI-powered budget-based menu recommendations and QRIS/cashless payment via Midtrans.",
    year: "2025",
    stack: [
      "Next.js",
      "TailwindCSS",
      "Database (Supabase)",
      "Authentication (JWT / NextAuth)",
      "Midtrans Payment Gateway",
      "QRIS + E-Wallet / VA (via Midtrans) + Cash option",
      "Chatbot Recommendation (Rule-based / LLM integration)",
      "Order History & Rating System",
    ],
    features: [
      "Multi-stall checkout: users can select menu items from multiple vendors in a single order flow (no app-switching needed).",
      "Queue-free ordering: online ordering system reduces wait times and makes buying food more efficient during peak hours.",
      "AI Assistant (chatbot) for recommendations: helps choose menu items based on budget, preferences (snacks/drinks/full meals), and value bundles.",
      "Smart cart: automatically groups items per stall/vendor and shows a clear total summary before checkout.",
      "Flexible payments: supports QRIS/cashless via Midtrans, plus a CASH option for on-site payment (per canteen policy).",
      "Order history: users can view purchase history, order status, and total transactions for expense tracking.",
      "Store rating & review: displays vendor ratings so users can choose the most trustworthy and quality-consistent stalls.",
      "Search & category discovery: menu/vendor search + categories (breakfast/lunch/snacks) for faster exploration.",
    ],
    impact: [
      "Reduces wasted time during breaks as users can pre-order without standing in long queues.",
      "Improves canteen shopping experience with a smooth ordering flow, fast payments, and budget-relevant menu recommendations.",
      "Provides vendor quality insights through ratings and purchase history, making user decisions more confident and data-driven.",
    ],
    links: {
      repo: "https://github.com/your-username/user-canteen",
    },
  },
  lostandfound: {
    title: "SITEMU Lost & Found Portal",
    category: "Campus Web Application",
    tagline:
      "A Lost & Found app for Udinus students to quickly report lost or found items - complete with a statistics dashboard and per-post chat feature for easier coordination between users.",
    year: "2025",
    stack: ["Next.js", "TailwindCSS", "Supabase (PostgreSQL)", "Realtime Chat", "Geolocation"],
    features: [
      "Lost & found item reporting: students can create detailed reports with category, time, and item description.",
      "Geolocation tagging: when creating a report, users can auto-detect location (GPS) or select a point on the map to mark where the item was last seen/found.",
      "Map view for location context: reports display location pins so other users can better understand the area and speed up the search.",
      "Clean post board: users can browse recent reports, search, and filter by status (lost/found/resolved).",
      "Per-post chat: each report has a discussion thread to facilitate communication between the reporter and the finder.",
      "Statistics dashboard: shows total reports, lost items, found items, active reports, and resolved cases for campus-wide insights.",
      "Udinus email-only login: access is restricted to Udinus email domain to keep the system secure and relevant to the campus environment.",
      "Status tracking: reports can be updated to resolved once the item has been returned to its owner.",
    ],
    impact: [
      "Speeds up item recovery since reports can be created and accessed online without manually spreading the word.",
      "Accurate geolocation helps make searches more effective and reduces confusion about where items were lost.",
      "Reduces miscommunication through direct chat on posts, making verification and item return processes faster.",
      "Enhances system security and relevance as only Udinus students can access it via campus email authentication.",
    ],
    links: {
      repo: "https://github.com/your-username/LostItem-Project",
    },
    notes: "Access Restricted: This website is only accessible using Udinus student email (@mhs.dinus.ac.id).",
  },
  imageclas: {
    title: "Vegetable Image Classification",
    category: "Computer Vision",
    tagline:
      "A TensorFlow-based image classification app that recognizes various vegetable types from uploaded photos, complete with confidence scores and Top-5 predictions in an interactive UI.",
    year: "2025",
    stack: ["TensorFlow / Keras", "Python", "Streamlit"],
    features: [
      "Simple image upload: supports drag & drop or file browse (JPG/JPEG/PNG) for instant classification.",
      "Primary prediction + confidence score: displays classification results that are easy for users to understand.",
      "Top-5 predictions: provides alternative predictions with score rankings for increased model transparency.",
      "Confidence visualization: confidence level bars to clarify how certain the model is about its predictions.",
      "Recognized class catalog: displays the list of vegetables the model can predict so users know the model's scope.",
      "Responsive and clean UI: focused on user experience to make the ML demo feel like a real product.",
    ],
    impact: [
      "Makes vegetable type identification from photos quick and easy - ideal for computer vision demos and AI education.",
      "Builds user trust as prediction results are displayed transparently through confidence scores and Top-5 rankings.",
      "Represents a complete end-to-end pipeline: from TensorFlow model training to deployment/inference in a web application.",
    ],
    links: {
      live: "https://vegetable-classifier.streamlit.app/",
      repo: "https://github.com/your-username/vegetable-classification",
    },
  },
  "financial-assistant-bot": {
    title: "Financial Assistant Bot",
    category: "AI / Fintech",
    tagline:
      "A personal AI-powered financial assistant on Telegram that automatically tracks expenses & income using RAG technology and OCR.",
    year: "2026",
    stack: [
      "Python (aiogram)",
      "Supabase (PostgreSQL + pgvector)",
      "RAG (Retrieval-Augmented Generation)",
      "LLM (Cerebras / OpenAI)",
      "Docker & Render",
      "Sentence Transformers",
    ],
    features: [
      "Natural language input (text/voice) for instant transaction logging without complicated manual forms.",
      "Advanced RAG Engine that learns user spending patterns for automatic category classification.",
      "Double-entry Ledger system (Bank Core) to ensure balance accuracy and real-time budget tracking.",
      "OCR integration to scan shopping receipts and automatically convert them into transaction data.",
      "Smart clarification mechanism using interactive buttons when input is ambiguous or incomplete.",
      "Periodic financial reports (daily/weekly/monthly) plus AI-based insights for savings recommendations.",
    ],
    impact: [
      "Transforms boring manual financial record-keeping into natural and efficient conversations.",
      "Provides full visibility into users' financial health through instant access in their everyday chat app.",
      "Helps users make better financial decisions through accurate spending data analysis.",
    ],
    links: {
      live: "https://t.me/your-username_bot",
      repo: "https://github.com/your-username/Accounting-Assistant",
    },
  },
  "base-realms": {
    title: "RSV Agro Hydro",
    category: "IoT / Hydroponic Monitoring",
    tagline:
      "A live hydroponic monitoring dashboard for smart agriculture, connecting sensors, system controls, and environment data in one place.",
    year: "2025",
    stack: ["React", "Tailwind", "Node.js", "IoT", "Dashboard"],
    features: [
      "Real-time sensor telemetry for pH, EC/PPM, temperature, and humidity.",
      "Smart automation controls to manage pumps and nutrient dosing based on thresholds.",
      "Clear system status panels with alerts and remote monitoring.",
      "Responsive dashboard optimized for desktop and mobile monitoring.",
      "Integrated hydroponic performance tracking for more efficient crop management.",
    ],
    impact: [
      "Improves crop health by making environmental conditions visible and actionable.",
      "Reduces manual system checks with remote monitoring and alerting.",
      "Helps growers optimize water and nutrient use through real-time analytics.",
    ],
    links: {
      live: "https://rsv-agro.onrender.com/",
      repo: "https://github.com/Fkrgans/rfv_hydro",
    },
    notes: "Project: RSV Agro Hydroponic Monitoring System. Live demo available at rsv-agro.onrender.com.",
  },
};
