export const personalInfo = {
  name: "Fodilu Akorede",
  title: "Senior Software Engineer",
  location: "Toronto, Canada",
  tagline: "I build systems that scale.",
  email: "afordeal88@gmail.com",
  linkedin: "https://www.linkedin.com/in/fodilu-akorede-a385a8100/",
  github: "https://github.com/RoadRunner11",
};

export const aboutText = `I'm a senior software engineer with 8+ years of experience building backend systems, distributed architectures, and AI-powered products. I've designed multi-tenant SaaS platforms from scratch, cut satellite imagery latency by 85%, and shipped agentic AI systems to production. I work across the full stack but my depth is in backend infrastructure, system design, and making complex things work reliably at scale. If it needs to be fast, resilient, and maintainable — that's where I operate.`;

export const projects = [
  {
    title: "Praxis",
    subtitle: "AI-Powered Clinical Documentation",
    url: "https://app.praxischart.com/",
    role: "Sole Architect & Engineer",
    description:
      "Multi-tenant SaaS platform that streamlines clinical documentation for physiotherapists. Captures patient encounter audio, transcribes it, and uses an AI agent to generate structured SOAP note drafts — which clinicians review, edit, and sign into immutable PDF records.",
    tech: ["Python", "FastAPI", "OpenAI", "WebSockets", "PostgreSQL", "AWS"],
    highlights: [
      "Designed full multi-tenant architecture from scratch",
      "AI agent pipeline: audio capture → transcription → structured SOAP notes",
      "Immutable PDF record system for legal compliance",
      "Real-time collaboration for clinical teams",
    ],
  },
  {
    title: "Eat&Vibe",
    subtitle: "Social Dining Platform",
    url: "https://www.eatandvibe.com/",
    role: "Backend Lead",
    description:
      "Social dining platform connecting people through food experiences. Built the entire backend powering AI-powered user matching, real-time chat, and OAuth authentication.",
    tech: ["NestJS", "TypeScript", "MongoDB", "Socket.IO", "OAuth"],
    highlights: [
      "AI-powered matching algorithm for user pairing",
      "Real-time chat infrastructure using WebSockets",
      "OAuth authentication flow",
      "Scalable API architecture handling concurrent users",
    ],
  },
];

export const experience = [
  {
    company: "Micro1",
    title: "Senior Software Engineer",
    period: "June 2025 — Present",
    description:
      "Built agentic AI system for advanced analytics, pushing the boundaries of autonomous data processing and insight generation.",
  },
  {
    company: "SkyWatch Inc.",
    title: "Senior Software Engineer",
    period: "July 2022 — June 2025",
    description:
      "85% latency reduction in satellite imagery processing. Built orchestration workflows with AWS Fargate/Lambda and a white-labeling solution with Terraform.",
  },
  {
    company: "Jungle.ai",
    title: "Senior Fullstack Engineer",
    period: "July 2021 — June 2022",
    description:
      "50x performance boost on task queue system. Built eventing system across 5 microservices. Mentored 8 interns through their engineering onboarding.",
  },
  {
    company: "386Konsult",
    title: "Fullstack Engineer",
    period: "June 2019 — May 2021",
    description:
      "Data warehouse & ETL pipelines with 76% faster processing. Built scraping systems for large-scale data collection.",
  },
  {
    company: "Bancore Global Services",
    title: "Software Data Engineer",
    period: "Feb 2018 — June 2019",
    description:
      "Built data pipelines and API services. Brought legacy systems under test coverage for reliability.",
  },
];

export const techStack = {
  "Languages": ["Python", "Java", "TypeScript", "Golang"],
  "Backend & APIs": [
    "Django",
    "FastAPI",
    "Flask",
    "Node.js",
    "Express",
    "NestJS",
  ],
  "Frontend": ["React", "Angular", "Vue.js"],
  "Cloud (AWS)": [
    "S3",
    "IAM",
    "Lambda",
    "DynamoDB",
    "SQS",
    "Route 53",
    "ECS Fargate",
    "CloudFormation",
  ],
  "DevOps & Containers": [
    "Docker",
    "Kubernetes",
    "Helm",
    "Terraform",
    "Terragrunt",
    "GitHub Actions",
    "GitLab",
    "Jenkins",
    "CircleCI",
  ],
  "AI / ML / Gen AI": [
    "OpenAI",
    "PydanticAI",
    "CrewAI",
    "LangChain",
    "HuggingFace",
    "DeepSeek",
    "TensorFlow",
    "PyTorch",
    "Keras",
  ],
  "Monitoring": ["Datadog", "New Relic", "CloudWatch", "ELK Stack"],
  "Architecture": [
    "Microservices",
    "System Design",
    "Domain-Driven Design",
    "Test-Driven Development",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
