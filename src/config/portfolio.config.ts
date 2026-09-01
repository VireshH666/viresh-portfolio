import type { PortfolioData } from "@/types/portfolio.types";

/**
 * Centralized portfolio data.
 * Contains only verified information strictly following the engineering design system.
 */
export const portfolioConfig = {
  personalProfile: {
    name: "Viresh Hunasagi",
    title: "Data Science Engineering Student",
    tagline: "Building machine learning and AI-powered applications.",
    shortBio:
      "Data Science Engineering student with hands-on experience in developing machine learning models and AI-powered applications.",
    aboutText:
      "I'm a Data Science Engineering student interested in building practical solutions using data, machine learning and AI. I enjoy turning ideas into working applications and exploring how intelligent systems can solve real-world problems. My project experience spans crop nutrient deficiency detection, AI-assisted business contact discovery, and ongoing research in acoustic signal processing.",
    email: "vireshhunasagi134@gmail.com",
  },
  socialLinks: {
    github: "https://github.com/VireshH666",
    linkedin: "https://www.linkedin.com/in/viresh-hunasagi-021998314",
    email: "mailto:vireshhunasagi134@gmail.com",
  },
  projects: [
    {
      id: "whatsapp-for-business",
      projectNumber: "01",
      title: "WhatsAppForBusiness – Business Intelligence & Contact Discovery",
      status: "completed",
      category: "Business Intelligence / Contact Discovery / AI",
      shortDescription:
        "Business contact discovery platform for finding publicly available person and business information through name, email, phone, and location-based searches.",
      description:
        "Developed an automated business intelligence platform for finding publicly available person and business information across search engines using name, email, phone, and geolocation parameters.",
      workflowSteps: ["SEARCH", "AI", "DATA", "CONTACT"],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "SerpAPI",
        "LLM/AI",
        "MongoDB",
        "Geolocation",
        "PhonePe API",
      ],
      goal: "Provide an automated, AI-assisted pipeline to discover, extract, validate, and manage publicly available person and business contact information.",
      solution:
        "Connected SerpAPI search discovery with LLM structured parsing, automated deduplication, MongoDB persistence, and PhonePe API integration.",
      architecture: "SEARCH → AI → DATA → CONTACT",
      technicalDecisions: [
        "Built responsive search interfaces with Next.js, React, and TypeScript.",
        "Queried public search endpoints asynchronously using Node.js and SerpAPI.",
        "Parsed unstructured web text into structured contact schemas using LLMs.",
        "Persisted normalized contact records and geolocation data in MongoDB.",
      ],
      privacyNote:
        "Uses publicly available information discovered through public web/search sources.",
    },
    {
      id: "crop-nutrient-deficiency-detection",
      projectNumber: "02",
      title: "Detection of Nutrient Deficiency in Crop Leaves",
      status: "completed",
      category: "Computer Vision / Machine Learning",
      shortDescription:
        "AI-based system for detecting Nitrogen, Phosphorus, and Potassium deficiencies from rice leaf images.",
      description:
        "Developed an end-to-end computer vision and machine learning system to diagnose agricultural nutrient deficiencies (Nitrogen, Phosphorus, Potassium) from rice leaf photos.",
      workflowSteps: ["LEAF", "IMAGE", "MODEL", "PREDICTION"],
      technologies: [
        "Python",
        "CNN",
        "MobileNetV2",
        "Random Forest",
        "OpenCV",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
      ],
      goal: "Accurately identify and classify Nitrogen (N), Phosphorus (P), and Potassium (K) deficiencies from agricultural rice leaf imagery.",
      solution:
        "Constructed an automated computer vision pipeline integrating OpenCV segmentation, color moment and GLCM texture extraction, with MobileNetV2 CNN and Random Forest classification.",
      architecture: "LEAF → IMAGE → MODEL → PREDICTION",
      technicalDecisions: [
        "Segmented leaf regions and suppressed background noise using OpenCV.",
        "Extracted color statistics and GLCM texture descriptors for feature analysis.",
        "Trained and evaluated MobileNetV2 CNN alongside Random Forest classifiers.",
      ],
      results: [
        "Up to 93% accuracy in detecting Nitrogen, Phosphorus, and Potassium deficiencies.",
      ],
    },
    {
      id: "acoustic-signal-processing",
      projectNumber: "03",
      title: "Acoustic Signal Processing for Sound Event Detection and 3D Localization",
      status: "in-progress",
      category: "Signal Processing / Machine Learning / Audio",
      shortDescription:
        "Exploring sound event detection and spatial audio techniques for 3D sound localization.",
      description:
        "Ongoing exploratory research project investigating acoustic signal processing, MFCC extraction, and spatial audio representations for 3D sound event localization.",
      workflowSteps: ["WAVEFORM", "MFCC", "SOUND", "3D"],
      technologies: [
        "Python",
        "Librosa",
        "MFCC",
        "Signal Processing",
        "Machine Learning",
      ],
      goal: "Explore acoustic feature representations for multi-channel sound event detection and 3D spatial localization.",
      solution:
        "Developing a signal processing architecture leveraging Librosa for spectral and MFCC feature extraction alongside spatial audio modeling.",
      architecture: "WAVEFORM → MFCC → SOUND → 3D",
      technicalDecisions: [
        "Extracted Mel-Frequency Cepstral Coefficients (MFCC) and spectral features using Librosa.",
        "Exploring spatial audio feature representations for 3D direction-of-arrival modeling.",
      ],
    },
  ],
  skills: [
    // Machine Learning & Deep Learning
    { name: "TensorFlow", category: "Machine Learning & Deep Learning" },
    { name: "Keras", category: "Machine Learning & Deep Learning" },
    { name: "CNN", category: "Machine Learning & Deep Learning" },
    { name: "Random Forest", category: "Machine Learning & Deep Learning" },
    { name: "SVM", category: "Machine Learning & Deep Learning" },
    { name: "Scikit-learn", category: "Machine Learning & Deep Learning" },
    { name: "LLM / AI", category: "Machine Learning & Deep Learning" },

    // Programming
    { name: "Python", category: "Programming" },
    { name: "C", category: "Programming" },
    { name: "TypeScript", category: "Programming" },

    // Data & Visualization
    { name: "Pandas", category: "Data & Visualization" },
    { name: "NumPy", category: "Data & Visualization" },
    { name: "Matplotlib", category: "Data & Visualization" },
    { name: "Tableau", category: "Data & Visualization" },
    { name: "Power BI", category: "Data & Visualization" },

    // Computer Vision & Audio
    { name: "OpenCV", category: "Computer Vision & Audio" },
    { name: "Librosa", category: "Computer Vision & Audio" },
    { name: "Image Processing", category: "Computer Vision & Audio" },
    { name: "Feature Engineering", category: "Computer Vision & Audio" },
    { name: "MFCC", category: "Computer Vision & Audio" },

    // Web & Backend
    { name: "Next.js", category: "Web & Backend" },
    { name: "React", category: "Web & Backend" },
    { name: "Node.js", category: "Web & Backend" },

    // Tools & Databases
    { name: "MongoDB", category: "Tools & Databases" },
    { name: "Git", category: "Tools & Databases" },
    { name: "GitHub", category: "Tools & Databases" },
    { name: "SerpAPI", category: "Tools & Databases" },
    { name: "Geolocation", category: "Tools & Databases" },
    { name: "PhonePe API", category: "Tools & Databases" },

    // Computer Science Fundamentals
    { name: "Data Structures", category: "Computer Science Fundamentals" },
    { name: "OOP", category: "Computer Science Fundamentals" },
    { name: "DBMS", category: "Computer Science Fundamentals" },
    { name: "Operating Systems", category: "Computer Science Fundamentals" },
    { name: "Computer Networks", category: "Computer Science Fundamentals" },
  ],
} satisfies PortfolioData;

export const portfolio = portfolioConfig;
export default portfolioConfig;
