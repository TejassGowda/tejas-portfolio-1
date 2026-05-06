export const PORTFOLIO_DATA = {
  name: "Tejas",
  role: "Software Engineer • Machine Learning Enthusiast",
  summary: "Master’s student in Software Engineering with certifications in IBM Data Science, Google Digital Marketing & E-commerce, and Python. I specialize in building intelligent, scalable applications by combining machine learning, data analytics, and modern web development to solve real-world problems efficiently.",
  skills: [
    { name: "Machine Learning", description: "Regression, Prediction Models, Data Analysis", icon: "Brain" },
    { name: "Web Development", description: "HTML, CSS, JavaScript, React", icon: "Code" },
    { name: "Python", description: "Pandas, NumPy, Data Visualization", icon: "LaptopCode" },
    { name: "Data Science", description: "SQL, EDA, Data Wrangling", icon: "Database" }
  ],
  projects: [
    {
      title: "Crop Recommendation",
      description: "ML model for smart agriculture providing fertilizer suggestions and disease alerts.",
      tech: ["Python", "ML", "HTML", "CSS"],
      link: "https://tejassgowda.github.io/tejas-crop/"
    },
    {
      title: "Weather AI",
      description: "AI-based weather prediction integrating OpenWeatherMap API + IoT sensor data.",
      tech: ["ML", "Python", "API Integration"],
      link: "https://tejassgowda.github.io/tejas-weather/"
    },
    {
      title: "Salary Prediction",
      description: "Developed an employee salary prediction system using ML algorithms during internship.",
      tech: ["ML", "Data Analysis", "Python"],
      link: "#"
    }
  ],
  certifications: [
    { title: "Google Digital Marketing", provider: "Professional Certificate", link: "certificates_google.pdf" },
    { title: "IBM Data Science", provider: "Professional Certificate", link: "certificates_ibm.pdf" },
    { title: "Python Internship", provider: "NSDC • RankBook", link: "certificates_python.pdf" }
  ],
  contact: {
    email: "tejassgowda137@gmail.com",
    phone: "+49 15231671490",
    linkedin: "https://www.linkedin.com/in/tejas-401518369",
    github: "https://github.com/TejassGowda",
    location: "Berlin, Germany / Bangalore, India"
  }
};

export const AI_CONTEXT = `
You are the AI Assistant for Tejas's portfolio website. 
Your goal is to answer questions about Tejas's professional background, skills, and projects in a friendly, professional, and concise manner.

Background:
- Tejas is a Software Engineer and ML Enthusiast.
- He is a Master's student in Software Engineering with a BCA background from PES College.
- He is currently based in Berlin, Germany (originally from Bangalore, India).

Skills:
- Programming: Python, Java, JavaScript, PHP, Dart, C.
- ML/Data: Pandas, NumPy, Matplotlib, Regression Models, SQL, EDA.
- Web: HTML, CSS, JavaScript, React.
- Tools: Git, VS Code, Flutter, Jupyter.

Projects:
- Smart Crop Prediction: Built with NPK, pH, humidity data. Uses ML for recommendations.
- Weather Forecasting using AI: Integrates OpenWeatherMap API and IoT data.
- Employee Salary Prediction: Built during RankBook Mysore internship.

Certifications:
- IBM Data Science Professional Certificate.
- Google Digital Marketing & E-commerce Professional Certificate.
- Python Internship at RankBook.

Style:
- Be encouraging and tech-forward.
- Keep answers under 3 sentences unless asked for detail.
- If asked about something not in this context, politely say you only know about Tejas's professional profile.
`;
