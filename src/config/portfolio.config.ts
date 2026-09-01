import type { PortfolioData } from "@/types/portfolio.types";

/**
 * Single source of truth for portfolio data.
 * Contains only verified data explicitly provided by the user.
 */
export const portfolioConfig = {
  personalProfile: {
    name: "Viresh Hunasagi",
    title: "Data Science Engineering Student",
    tagline: "Building with Machine Learning, Deep Learning & AI.",
    shortBio:
      "Data Science Engineering student interested in Machine Learning, AI, Computer Vision, and Data Science. Currently building practical projects involving ML models, AI-powered applications, and signal processing.",
    longBio:
      "Data Science Engineering student interested in Machine Learning, AI, Computer Vision, and Data Science. Currently building practical projects involving ML models, AI-powered applications, and signal processing.",
    location: "Vijaypur, India",
    email: "vireshhunasagi134@gmail.com",
    phone: "+91-9036964686",
    profileImage: "",
    resumeUrl: "/resume/Viresh_Hunasagi_Resume.pdf",
    availability: "Open to Internship Opportunities",
  },
  socialLinks: {
    github: "https://github.com/VireshH666",
    linkedin: "https://www.linkedin.com/in/viresh-hunasagi-021998314",
    twitter: "",
    instagram: "",
    email: "mailto:vireshhunasagi134@gmail.com",
    website: "",
  },
  projects: [
    {
      id: "whatsapp-for-business",
      title: "WhatsAppForBusiness",
      subtitle: "Business Intelligence & Contact Discovery",
      shortDescription:
        "Public-web contact discovery using SerpAPI, AI/LLM, Next.js, and Docker.",
      description:
        "A business contact discovery platform that finds publicly available person and business information using name, email, phone number, and location-based searches.",
      featured: true,
      status: "completed",
      role: "",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "SerpAPI",
        "LLM / AI",
        "Docker",
        "PhonePe API",
      ],
      category: "AI & Full Stack",
      image: "",
      screenshots: [],
      githubUrl: "",
      liveUrl: "",
      problem:
        "Manual discovery and aggregation of publicly available business contact records across web search endpoints is time-consuming and error-prone.",
      goal:
        "Provide a streamlined, AI-assisted pipeline to search, extract, validate, and manage publicly available person and business contact information.",
      solution:
        "Built a platform connecting SerpAPI search discovery with LLM structured parsing, automated deduplication, MongoDB persistence, and PhonePe payment integration.",
      features: [
        "Person & business discovery across public web sources",
        "Name, email, phone & location-based queries",
        "Nearby business discovery via geolocation",
        "AI / LLM-powered structured entity extraction",
        "Automated validation and duplicate removal",
        "Contact management interface and PhonePe payments",
      ],
      architecture: "Search → Web → AI → Validate → Database → Contact",
      technicalDecisions: [
        "Next.js & React: Built responsive, type-safe search and contact dashboards.",
        "Node.js & SerpAPI: Handled asynchronous web queries across public endpoints.",
        "LLM Entity Parsing: Converted unstructured web page text into clean JSON contact schemas.",
        "Deduplication Engine: Sanitized and validated phone/email patterns.",
        "Docker: Containerized application environments for streamlined local and cloud setups.",
      ],
      challenges: [
        "Normalizing disparate, unstructured web data into reliable entity models.",
      ],
      results: [
        "Multi-parameter search and automated discovery pipeline on public web data.",
      ],
    },
    {
      id: "crop-nutrient-deficiency-detection",
      title: "Detection of Nutrient Deficiency in Crop Leaves",
      subtitle: "Computer Vision · Machine Learning",
      shortDescription:
        "Rice-leaf nutrient deficiency detection using CNN, Random Forest, OpenCV, and MobileNetV2.",
      description:
        "AI-based computer vision system to identify Nitrogen (N), Phosphorus (P), and Potassium (K) deficiencies from rice leaf imagery.",
      featured: false,
      status: "completed",
      role: "",
      technologies: [
        "Python",
        "CNN",
        "MobileNetV2",
        "Random Forest",
        "OpenCV",
        "Scikit-learn",
        "TensorFlow",
      ],
      category: "Computer Vision & ML",
      image: "",
      screenshots: [],
      githubUrl: "",
      liveUrl: "",
      problem:
        "Visual diagnosis of crop nutrient deficiencies is subjective and manual inspection delays agricultural corrective actions.",
      goal:
        "Accurately classify Nitrogen, Phosphorus, and Potassium deficiencies from rice leaf images.",
      solution:
        "Implemented an end-to-end vision pipeline combining OpenCV segmentation, RGB/GLCM feature extraction, and CNN (MobileNetV2) & Random Forest classification.",
      features: [
        "Image preprocessing and background suppression",
        "Leaf region segmentation",
        "RGB color statistics & GLCM texture descriptor extraction",
        "MobileNetV2 CNN & Random Forest classification",
      ],
      architecture:
        "Rice Leaf → Preprocessing → Segmentation → Features → Classification → Prediction",
      technicalDecisions: [
        "OpenCV: Color-space transformations and leaf mask segmentation.",
        "Feature Engineering: Color moments and GLCM texture matrix extraction.",
        "Model Comparison: Trained and benchmarked MobileNetV2 CNN vs Random Forest ensemble.",
      ],
      challenges: [
        "Handling varied illumination and background noise in agricultural leaf photos.",
      ],
      results: [
        "Up to 93% accuracy in detecting Nitrogen, Phosphorus, and Potassium deficiencies.",
      ],
    },
    {
      id: "acoustic-signal-processing",
      title: "Acoustic Signal Processing",
      subtitle: "Signal Processing · Audio ML",
      shortDescription:
        "Exploring MFCC, sound event detection, and 3D localization.",
      description:
        "Ongoing exploratory project for sound event classification and spatial audio localization using signal processing techniques.",
      featured: false,
      status: "in-progress",
      role: "",
      technologies: [
        "Python",
        "Librosa",
        "MFCC",
        "Signal Processing",
        "Machine Learning",
      ],
      category: "Signal Processing & Audio",
      image: "",
      screenshots: [],
      githubUrl: "",
      liveUrl: "",
      problem:
        "Identifying and estimating the 3D direction-of-arrival for sound events from multi-channel acoustic signals.",
      goal:
        "Design a pipeline for acoustic event detection and 3D spatial localization.",
      solution:
        "Developing a signal processing architecture exploring Librosa feature extraction (MFCC) and spatial audio modeling.",
      features: [
        "Acoustic signal pipeline design",
        "MFCC and spectral feature extraction with Librosa",
        "Spatial audio modeling & 3D localization exploration",
      ],
      architecture:
        "Audio → MFCC → Spatial Audio → ML → Sound Detection → 3D Localization",
      technicalDecisions: [
        "Librosa: Extracted Mel-Frequency Cepstral Coefficients from multi-channel audio.",
        "Spatial Modeling: Exploring acoustic feature representations for 3D positioning.",
      ],
      challenges: [
        "Minimizing acoustic reverberation and ambient noise during spatial feature extraction.",
      ],
      results: [],
    },
  ],
  skills: [
    // Machine Learning
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "Keras", category: "Machine Learning" },
    { name: "CNN", category: "Machine Learning" },
    { name: "LSTM", category: "Machine Learning" },
    { name: "Random Forest", category: "Machine Learning" },
    { name: "SVM", category: "Machine Learning" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "LLM / AI", category: "Machine Learning" },

    // Computer Vision & Audio
    { name: "OpenCV", category: "Computer Vision & Audio" },
    { name: "Librosa", category: "Computer Vision & Audio" },
    { name: "Image Processing", category: "Computer Vision & Audio" },
    { name: "Feature Engineering", category: "Computer Vision & Audio" },
    { name: "MFCC", category: "Computer Vision & Audio" },

    // Development
    { name: "Python", category: "Development" },
    { name: "C", category: "Development" },
    { name: "TypeScript", category: "Development" },
    { name: "Next.js", category: "Development" },
    { name: "React", category: "Development" },
    { name: "Node.js", category: "Development" },
    { name: "Docker", category: "Development" },

    // Data & Tools
    { name: "Pandas", category: "Data & Tools" },
    { name: "NumPy", category: "Data & Tools" },
    { name: "Matplotlib", category: "Data & Tools" },
    { name: "Tableau", category: "Data & Tools" },
    { name: "Power BI", category: "Data & Tools" },
    { name: "Git", category: "Data & Tools" },
    { name: "GitHub", category: "Data & Tools" },
    { name: "SerpAPI", category: "Data & Tools" },
    { name: "PhonePe API", category: "Data & Tools" },

    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "Database", category: "Databases" },
    { name: "Geolocation", category: "Databases" },

    // Fundamentals
    { name: "Data Structures", category: "Fundamentals" },
    { name: "OOP", category: "Fundamentals" },
    { name: "DBMS", category: "Fundamentals" },
    { name: "Operating Systems", category: "Fundamentals" },
    { name: "Computer Networks", category: "Fundamentals" },
  ],
  experience: [],
  education: [
    {
      id: "btech-cse-ds",
      degree: "B.E. CSE (Data Science)",
      institution:
        "BLDEA's V P Dr PG Halakatti College of Engineering & Technology",
      location: "Vijayapur, India",
      startDate: "2023",
      endDate: "2027 Expected",
      score: "CGPA: 8.3",
      description: "Specializing in Computer Science & Engineering (Data Science).",
    },
    {
      id: "puc",
      degree: "PUC (PCMB)",
      institution: "Pre-University College",
      location: "India",
      startDate: "",
      endDate: "",
      score: "91%",
      description: "Physics, Chemistry, Mathematics, Biology",
    },
    {
      id: "high-school",
      degree: "10th Standard",
      institution: "Secondary School",
      location: "India",
      startDate: "",
      endDate: "",
      score: "90%",
      description: "Secondary School Education",
    },
  ],
  achievements: [
    {
      id: "ideathon-2025",
      title: "Ideathon 2025",
      type: "Participation",
      organization: "Ideathon",
      date: "2025",
      description: "Team-based prototype participation.",
    },
  ],
  certifications: [
    {
      id: "nptel-dl-foundations",
      title: "NPTEL — Foundations of Deep Learning",
      organization: "NPTEL",
      date: "2026",
      description: "Elite + Silver",
    },
    {
      id: "nptel-ds-python",
      title: "NPTEL — Data Science Using Python",
      organization: "NPTEL",
      date: "2025",
      description: "NPTEL Certification",
    },
  ],
  hobbies: ["Technology podcasts", "Cooking"],
} satisfies PortfolioData;

export const portfolio = portfolioConfig;
export default portfolioConfig;
