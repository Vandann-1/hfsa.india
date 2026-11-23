import {
  ServiceItem,
  CourseItem,
  IndustryItem,
  ArticleItem,
  TeamMemberItem,
  DashboardMetrics,
  EnquiryItem
} from './api';

export const FALLBACK_SETTINGS = {
  company_name: "Haridra Food Safety Assurance Pvt. Ltd.",
  tagline: "Food Safety Is More Than Compliance. It Is Our Responsibility.",
  primary_email: "contact@haridrafoodsafety.com",
  training_email: "training@haridrafoodsafety.com",
  primary_phone: "+91 98765 43210",
  whatsapp_number: "+919876543210",
  office_address: "Corporate Suite 402, Food & Bio-Innovation Park, Bangalore, Karnataka - 560001, India",
  operating_hours: "Monday to Saturday: 09:30 AM – 06:30 PM IST",
  linkedin_url: "https://linkedin.com/company/haridra-food-safety",
};

export const FALLBACK_SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Food Safety Consultancy",
    slug: "food-safety-consultancy",
    category: "consultancy",
    tagline: "Systematic guidance to establish, implement and sustain compliant food safety systems.",
    icon_name: "ShieldCheck",
    order: 1,
    is_published: true,
    short_description: "Comprehensive consulting support covering HACCP, GMP, GHP, regulatory compliance alignment, and documentation systems tailored for food operations.",
    full_description: "Haridra Food Safety Assurance provides structured technical consultancy to help food establishments implement robust food safety management protocols. We assist organizations in identifying biological, chemical, and physical hazards across their supply chain and setting up preventive control mechanisms.",
    problems_addressed: [
      "Difficulty navigating complex food safety regulations and standards",
      "Gaps in prerequisite programs (PRPs), GMP, and operational hygiene",
      "Inadequate or unstructured documentation and standard operating procedures (SOPs)",
      "Cross-contamination risks during storage, handling, and processing",
      "Lack of systematic hazard analysis and critical control point (HACCP) planning"
    ],
    scope_of_services: [
      "Gap analysis against national and recognized food safety benchmarks",
      "HACCP plan formulation, critical limit validation, and monitoring protocols",
      "Good Manufacturing Practices (GMP) and Good Hygiene Practices (GHP) implementation",
      "Standard Operating Procedure (SOP) and Sanitation SOP (SSOP) authoring",
      "Allergen management, traceability system design, and recall preparedness"
    ],
    benefits: [
      "Enhanced consumer confidence and commercial reputation",
      "Systematic reduction in operational non-conformances and product recalls",
      "Full regulatory preparedness for inspections and statutory audits",
      "Standardized daily practices across production, sanitation, and dispatch"
    ],
    process_workflow: [
      { step: "01", title: "Diagnostic Assessment", description: "Preliminary site evaluation and operational walkthrough to identify compliance gaps." },
      { step: "02", title: "Framework Design", description: "Authoring tailored HACCP plans, CCP monitoring sheets, and SOP documentation." },
      { step: "03", title: "Implementation Guidance", description: "Hands-on team mentoring to embed hygiene practices into daily routines." },
      { step: "04", title: "Internal Verification", description: "Mock audits and corrective action verification before operational handover." }
    ],
    target_audience: [
      "Food Processing Plants & Packaged Goods Manufacturers",
      "Central Kitchens, QSR Chains & Cloud Kitchen Operators",
      "Cold Chain Logistics Providers & Warehousing Hubs",
      "Specialty Food Startups and Exporters"
    ],
    faqs: [
      { q: "Does Haridra certify our facility directly?", a: "No. Haridra is a professional technical consultancy organization. We prepare, guide, and audit your facility to ensure compliance with relevant standards. Official statutory licenses and external certifications are issued by designated third-party certification bodies and regulatory authorities." },
      { q: "How long does a typical consultancy project take?", a: "Durations vary based on facility size and baseline readiness, typically ranging from 4 to 12 weeks." }
    ]
  },
  {
    id: 2,
    title: "Food Safety Audits",
    slug: "food-safety-audits",
    category: "audit",
    tagline: "Independent, objective evaluations to verify hygiene standards and identify operational vulnerabilities.",
    icon_name: "ClipboardCheck",
    order: 2,
    is_published: true,
    short_description: "Rigorous first-party and second-party hygiene inspections, supplier verification audits, and comprehensive corrective action plans (CAPA).",
    full_description: "Our audit services provide food business operators with an unbiased assessment of facility hygiene, staff practices, temperature logs, pest control efficacy, and sanitation routines. Audits are conducted with meticulous attention to detail to uncover potential failure points before they impact consumer safety.",
    problems_addressed: [
      "Unidentified hygiene and cross-contamination hazards in daily workflows",
      "Inconsistent supplier raw material quality and handling standards",
      "Lack of objective visibility for management across multi-location facilities",
      "Audit fatigue or unpreparedness for mandatory inspections"
    ],
    scope_of_services: [
      "Facility hygiene and sanitation walkthrough audits",
      "Second-party vendor and raw material supplier compliance audits",
      "Kitchen, restaurant, and catering hygiene rating assessments",
      "Temperature control and cold-chain compliance verification",
      "CAPA (Corrective and Preventive Action) formulation and follow-up reviews"
    ],
    benefits: [
      "Early detection of non-compliances before statutory penalties or contamination events",
      "Benchmarking across multiple operating units or franchisee stores",
      "Clear, prioritized roadmap of corrective engineering and behavioral improvements",
      "Documented evidence of rigorous internal due diligence"
    ],
    process_workflow: [
      { step: "01", title: "Audit Planning", description: "Scoping checklist, facility boundaries, and key control points." },
      { step: "02", title: "On-Site Inspection", description: "Physical facility walkthrough, record examination, and staff interview." },
      { step: "03", title: "Audit Reporting", description: "Detailed photographic report with risk-weighted non-conformance classifications." },
      { step: "04", title: "CAPA Closure", description: "Reviewing supplier and unit corrective action evidence." }
    ],
    target_audience: [
      "Hotels, Banquet Facilities, and Fine-Dining Groups",
      "Multi-Unit Restaurant Franchises & Retail Delis",
      "Institutional Messes & Hospital Food Services",
      "Food Manufacturers vetting raw ingredient vendors"
    ],
    faqs: [
      { q: "Are your audits surprise or scheduled?", a: "We conduct both announced diagnostic audits and unannounced mystery hygiene audits depending on client governance requirements." }
    ]
  },
  {
    id: 3,
    title: "Quality Assurance",
    slug: "quality-assurance",
    category: "quality_assurance",
    tagline: "Engineering end-to-end quality systems that guarantee consistency, shelf-life, and sensory excellence.",
    icon_name: "CheckCircle2",
    order: 3,
    is_published: true,
    short_description: "Process standardization, QA documentation, specification drafting, in-process sampling protocols, and continuous improvement frameworks.",
    full_description: "Quality assurance is the systematic foundation that prevents defective or substandard food products from reaching customers. Haridra assists clients in formulating robust quality policies, establishing raw material acceptance criteria, and implementing statistical process controls.",
    problems_addressed: [
      "High batch-to-batch variation in finished food product taste, texture, or shelf-life",
      "Frequent customer complaints regarding packaging integrity or foreign particles",
      "Undefined product specifications and inconsistent raw material acceptance",
      "Lack of structured root-cause analysis for quality deviations"
    ],
    scope_of_services: [
      "Quality Manual and Quality Management System (QMS) drafting",
      "Finished product and ingredient technical specification sheets",
      "In-process quality monitoring (IPQC) protocol design",
      "Sensory evaluation and shelf-life study advisory",
      "Defect tracking, customer complaint investigation, and root-cause analysis"
    ],
    benefits: [
      "Reliable product consistency across production batches",
      "Reduced raw material wastage and finished product rejection rates",
      "Data-backed decision making for plant managers and QA executives",
      "Elevated customer loyalty through dependable product excellence"
    ],
    process_workflow: [
      { step: "01", title: "Specification Mapping", description: "Documenting sensory, chemical, and physical parameters for all lines." },
      { step: "02", title: "Sampling Plan", description: "Defining statistically sound raw material, in-line, and finished testing protocols." },
      { step: "03", title: "Laboratory Workflow", description: "Advising on internal test methods, calibration, and sensory panels." },
      { step: "04", title: "Continuous QA Review", description: "Quarterly trend analysis of deviation logs and supplier performance." }
    ],
    target_audience: [
      "Consumer Packaged Goods (CPG) & Beverage Brands",
      "Bakeries, Confectionery, and Dairy Processing Units",
      "Contract Manufacturers and Co-Packers",
      "Agri-Food Exporters"
    ],
    faqs: [
      { q: "Do you perform wet-lab testing directly?", a: "Haridra provides technical QA advisory, testing protocol design, and sampling oversight. We guide clients on working with accredited testing laboratories." }
    ]
  },
  {
    id: 4,
    title: "Technical Consultancy",
    slug: "technical-consultancy",
    category: "technical_consultancy",
    tagline: "Science-driven engineering guidance for plant layouts, hygienic design, and process optimization.",
    icon_name: "Cpu",
    order: 4,
    is_published: true,
    short_description: "Specialized food technology advisory for hygienic facility zoning, cleanroom air handling, thermal processing validation, and clean-in-place (CIP) design.",
    full_description: "Technical food safety challenges require deep scientific grounding in food microbiology, chemistry, and hygienic engineering. Haridra provides advanced consultancy to resolve complex operational hurdles including persistent biofilm formation, shelf-life extension without artificial preservatives, and layout optimization.",
    problems_addressed: [
      "Suboptimal plant layout causing cross-traffic between raw and cooked zones",
      "Recurring microbial contamination and biofilm issues in processing equipment",
      "Thermal process validation and pasteurization/sterilization verification",
      "Cleaning-In-Place (CIP) inefficiencies leading to excessive chemical/water usage"
    ],
    scope_of_services: [
      "Hygienic plant design, civil zoning, and workflow optimization advisory",
      "Environmental monitoring program (EMP) design for pathogen control",
      "Sanitation validation and CIP cycle optimization",
      "Thermal processing, lethality (F0 value) calculation and review",
      "Water treatment and air filtration hygiene advisory"
    ],
    benefits: [
      "Elimination of cross-contamination risks through sanitary engineering",
      "Optimized utility and sanitation costs through targeted CIP protocols",
      "Scientific validation protecting against microbial spore survival",
      "Compliance with advanced hygienic equipment design principles"
    ],
    process_workflow: [
      { step: "01", title: "Engineering Review", description: "Analyzing CAD layouts, personnel flow, and equipment schematics." },
      { step: "02", title: "Microbial Hazard Mapping", description: "Identifying environmental niches, drainage risks, and condensate points." },
      { step: "03", title: "Engineering Interventions", description: "Recommending physical zoning, differential pressures, and barrier controls." },
      { step: "04", title: "Validation & Sign-Off", description: "Reviewing post-implementation environmental swabbing and performance logs." }
    ],
    target_audience: [
      "Engineering & Project Teams setting up new food manufacturing plants",
      "Industrial Bakeries, Meat & Poultry Processors, Ready-to-Eat (RTE) Units",
      "Dairy Plants & Aseptic Packaging Facilities"
    ],
    faqs: [
      { q: "Can you review our floor plan before construction begins?", a: "Yes. Reviewing plant layouts during the architectural design phase is the most cost-effective way to ensure hygienic zoning and avoid expensive civil modifications later." }
    ]
  },
  {
    id: 5,
    title: "Professional Training & Capacity Building",
    slug: "professional-training",
    category: "professional_training",
    tagline: "Empowering students, managers, and operational teams with practical food safety competencies.",
    icon_name: "GraduationCap",
    order: 5,
    is_published: true,
    short_description: "Industry-aligned certified training, EOSH-accredited hygiene courses, college campus workshops, and tailored corporate workforce training.",
    full_description: "A food safety system is only as strong as the people who execute it daily. Haridra designs and delivers structured educational programs that bridge the gap between academic theory and factory-floor realities. Our courses emphasize practical case studies, real-world audit scenarios, and actionable compliance skills.",
    problems_addressed: [
      "Fresh graduates lacking practical understanding of industrial food safety practices",
      "High employee turnover requiring repetitive basic hygiene onboarding",
      "Supervisory staff unfamiliar with root-cause analysis or audit defense",
      "Lack of formal continuing professional development (CPD) in food operations"
    ],
    scope_of_services: [
      "Foundational food handler hygiene and personal sanitation workshops",
      "Intermediate and Advanced HACCP implementation certification modules",
      "Internal Auditor capacity building for QA and manufacturing teams",
      "EOSH-accredited international standard training (within verified scope)",
      "Academic campus masterclasses and professional bootcamps"
    ],
    benefits: [
      "Immediate reduction in human-error-driven hygiene violations",
      "Elevated career prospects and industry readiness for student participants",
      "Certified competencies recognized by hiring employers",
      "Customized enterprise cohorts aligned with specific company SOPs"
    ],
    process_workflow: [
      { step: "01", title: "Training Needs Analysis", description: "Evaluating team baseline knowledge or student syllabus gaps." },
      { step: "02", title: "Curriculum Customization", description: "Integrating client case studies, specific product categories, and regulatory context." },
      { step: "03", title: "Interactive Delivery", description: "Hybrid, online, or classroom training with real audit simulations." },
      { step: "04", title: "Assessment & Certification", description: "Objective examination, practical evaluation, and certificate issuance." }
    ],
    target_audience: [
      "Undergraduate & Postgraduate Students in Food Science, Biotech, Microbiology",
      "Corporate QA, QC, and Production Supervisors",
      "Food Service and Catering Team Leaders",
      "Independent Auditors & Industry Aspirants"
    ],
    faqs: [
      { q: "Are certificates issued immediately upon course completion?", a: "Certificates are awarded upon successful completion of all mandatory modules and passing the final assessment." }
    ]
  },
  {
    id: 6,
    title: "Industry-Academia Collaboration",
    slug: "industry-academia-collaboration",
    category: "collaboration",
    tagline: "Bridging higher education with manufacturing excellence through joint initiatives.",
    icon_name: "Users",
    order: 6,
    is_published: true,
    short_description: "Institutional MoUs, guest lectures, curriculum enrichment, student industrial exposure, and joint skill development programs with universities.",
    full_description: "Haridra actively collaborates with universities, engineering colleges, and technical institutes to equip aspiring food technologists with contemporary industry skills. We work alongside faculty to introduce practical audit simulations, plant exposure opportunities, and specialized training programs.",
    problems_addressed: [
      "Curricular lag behind evolving international food safety regulations",
      "Limited student exposure to actual industrial audits and quality documentation",
      "Difficulty for food businesses to recruit job-ready QA/QC professionals",
      "Lack of industry-sponsored technical workshops on campus"
    ],
    scope_of_services: [
      "Formal Institutional MoU partnerships with universities and colleges",
      "Value-added professional certificate courses delivered on-campus",
      "Faculty Development Programs (FDP) on modern food assurance systems",
      "Technical guest lectures, panel discussions, and career mentoring",
      "Internship and industrial project guidance for students"
    ],
    benefits: [
      "Substantially higher placement readiness for graduating students",
      "Institutional differentiation and NAAC/NBA accreditation support",
      "Direct talent pipeline for food manufacturing enterprises",
      "Strengthened academic reputation for technical practical excellence"
    ],
    process_workflow: [
      { step: "01", title: "Institutional Alignment", description: "Consultation with department leadership to identify curricular enrichment areas." },
      { step: "02", title: "MoU Formalization", description: "Defining clear partnership scope, student cohorts, and timeline." },
      { step: "03", title: "Program Execution", description: "Delivering expert workshops, practical labs, and study material." },
      { step: "04", title: "Impact Review", description: "Annual evaluation of student placements and learning outcomes." }
    ],
    target_audience: [
      "Universities & Autonomous Colleges offering Food Science, Biotech, Nutrition",
      "Polytechnic Institutes & Vocational Training Centers",
      "Academic Departments seeking industrial knowledge partners"
    ],
    faqs: [
      { q: "How can an educational institution initiate a collaboration?", a: "Colleges can submit an Institutional Collaboration Enquiry via our website to schedule an initial consultative discussion with our academic liaison team." }
    ]
  }
];

export const FALLBACK_COURSES: CourseItem[] = [
  {
    id: 1,
    title: "HACCP Implementation Practitioner",
    slug: "haccp-implementation-practitioner",
    code: "HFSA-HACCP-201",
    category_name: "HACCP & Hygiene Systems",
    level: "Intermediate",
    duration: "3 Weeks (24 Hours)",
    delivery_mode: "Hybrid",
    fee: "₹6,500 (Concession for Student Batches Available)",
    is_eosh_accredited: false,
    accreditation_details: "Awarded by Haridra Food Safety Assurance Pvt. Ltd. Industry Technical Certificate.",
    short_description: "Master the 7 principles and 12 steps of HACCP with real-world hazard analysis, decision trees, and monitoring protocols.",
    full_description: "This intensive program trains food safety officers, QA technicians, and students in developing and maintaining an operational HACCP plan. Participants work through real production scenarios, identifying biological, chemical, physical, and allergen hazards, determining critical control points (CCPs), and defining critical limits.",
    target_audience: [
      "Food Processing Supervisors & Production Executives",
      "QA / QC Analysts in Food Manufacturing Units",
      "Undergraduate / Postgraduate Students in Food Science & Microbiology",
      "Culinary Chefs and Central Kitchen Managers"
    ],
    learning_outcomes: [
      "Formulate a complete HACCP plan from product description to verification",
      "Apply the Codex Alimentarius CCP decision tree accurately",
      "Establish scientific critical limits and corrective action procedures",
      "Design effective verification and documentation audit trails"
    ],
    curriculum: [
      { module: "Module 1", title: "Foundations & Prerequisite Programs (PRPs)", topics: ["Sanitation basics", "GMP/GHP essentials", "Pest control and personal hygiene"] },
      { module: "Module 2", title: "The Preliminary Steps of HACCP", topics: ["HACCP team assembly", "Product characterization", "Flow diagram construction and on-site verification"] },
      { module: "Module 3", title: "Hazard Analysis & CCP Determination", topics: ["Hazard identification", "Risk ranking matrix", "Codex CCP decision tree application"] },
      { module: "Module 4", title: "Monitoring, Corrective Actions & Verification", topics: ["Setting critical limits", "Real-time monitoring logs", "Deviation handling and verification reviews"] }
    ],
    eligibility: "Basic background in Science, Food Technology, Catering, or 6 months experience in a food handling environment.",
    certificate_details: "Haridra Certificate of Competence issued upon scoring 70%+ in the practical case evaluation and final examination.",
    featured: true,
    is_published: true
  },
  {
    id: 2,
    title: "Food Safety Internal Auditor Certification",
    slug: "food-safety-internal-auditor",
    code: "HFSA-AUDIT-301",
    category_name: "Quality Management & Assurance",
    level: "Advanced",
    duration: "4 Weeks (32 Hours)",
    delivery_mode: "Live Online",
    fee: "₹8,500 (Includes Comprehensive Auditor Toolkit)",
    is_eosh_accredited: false,
    accreditation_details: "Institutional Technical Certification by Haridra Food Safety Assurance.",
    short_description: "Learn to plan, conduct, report, and follow up internal food safety audits based on international auditing methodologies.",
    full_description: "Designed for professionals responsible for maintaining compliance within their organizations, this course covers the end-to-end internal audit cycle. Participants learn objective evidence gathering, non-conformance grading (Minor, Major, Critical), opening/closing meeting conduct, and CAPA verification.",
    target_audience: [
      "Quality Assurance Managers and Compliance Officers",
      "Internal Audit Team Members in Food Enterprises",
      "Food Plant Managers & Technical Supervisors",
      "Consultants seeking structured audit training"
    ],
    learning_outcomes: [
      "Plan and execute risk-based internal audit schedules",
      "Conduct structured interviews and uncover hidden non-conformances",
      "Write clear, objective non-conformance reports with evidence",
      "Review and verify corrective and preventive action (CAPA) closures"
    ],
    curriculum: [
      { module: "Module 1", title: "Auditing Principles & Guidelines", topics: ["Auditor ethics and independence", "Audit scopes and objectives", "Risk-based audit planning"] },
      { module: "Module 2", title: "Audit Preparation & Checklists", topics: ["Document review techniques", "Customizing sector-specific checklists", "Opening meetings"] },
      { module: "Module 3", title: "On-Site Audit Execution", topics: ["Interviewing techniques", "Sampling methods", "Gathering objective evidence"] },
      { module: "Module 4", title: "Reporting & CAPA Follow-Up", topics: ["Categorizing findings", "Non-conformance authoring", "Closing meetings and root cause analysis verification"] }
    ],
    eligibility: "Prior knowledge of basic food safety concepts or minimum 1 year food sector experience.",
    certificate_details: "Internal Auditor Certificate issued upon passing the written exam and audit report simulation.",
    featured: true,
    is_published: true
  },
  {
    id: 3,
    title: "EOSH UK Accredited Food Safety & Hygiene Practitioner",
    slug: "eosh-food-safety-hygiene-practitioner",
    code: "HFSA-EOSH-FS2",
    category_name: "EOSH-Accredited Programs",
    level: "Intermediate",
    duration: "3 Weeks (20 Hours)",
    delivery_mode: "Hybrid",
    fee: "₹9,500 (Examination and EOSH Registration Included)",
    is_eosh_accredited: true,
    accreditation_details: "Delivered under verified accreditation by EOSH (European Organization for Safety and Health, UK). Specific accredited qualification: Food Safety & Hygiene Practice. Verification available through official EOSH UK registry.",
    short_description: "Internationally benchmarked hygiene qualification accredited by EOSH UK for food professionals, managers, and hospitality supervisors.",
    full_description: "This program delivers internationally recognized safety and hygiene competencies under the accredited framework of EOSH UK. Learners study microbial contamination controls, allergen risk mitigation, temperature management, and statutory hygiene responsibilities required across international and domestic hospitality and food businesses.",
    target_audience: [
      "Hospitality & Hotel F&B Executives",
      "Catering In-Charges & Restaurant Operations Managers",
      "Food Processing Shift In-Charges",
      "Professionals preparing for global career opportunities"
    ],
    learning_outcomes: [
      "Understand international hygiene regulations and duty-of-care frameworks",
      "Identify food-borne pathogens, temperature danger zones, and growth conditions",
      "Implement comprehensive chemical and physical contamination barriers",
      "Manage allergen declaration, storage separation, and staff protocols"
    ],
    curriculum: [
      { module: "Module 1", title: "International Food Safety Frameworks", topics: ["EOSH safety guidelines", "Global hygiene standards", "Legal responsibilities of food handlers"] },
      { module: "Module 2", title: "Pathogens, Microorganisms & Spoilage", topics: ["Major food-borne bacteria, viruses, and parasites", "Time-temperature controls", "Thermal death curves"] },
      { module: "Module 3", title: "Cross-Contamination & Allergen Controls", topics: ["Physical zoning", "Color-coded equipment systems", "The 14 major allergens and management"] },
      { module: "Module 4", title: "Cleaning, Disinfection & Pest Control", topics: ["Chemical safety and dilution", "Cleaning stages and verification", "Integrated Pest Management (IPM)"] }
    ],
    eligibility: "Open to all working food professionals, graduates, and final-year students.",
    certificate_details: "Official EOSH UK Accredited Qualification Certificate awarded directly by EOSH upon successful assessment.",
    featured: true,
    is_published: true
  },
  {
    id: 4,
    title: "Good Manufacturing Practices (GMP) & Sanitary Plant Design",
    slug: "good-manufacturing-practices-gmp",
    code: "HFSA-GMP-102",
    category_name: "Food Processing & Technical Safety",
    level: "Foundational",
    duration: "2 Weeks (16 Hours)",
    delivery_mode: "Live Online",
    fee: "₹4,800",
    is_eosh_accredited: false,
    accreditation_details: "Awarded by Haridra Food Safety Assurance Pvt. Ltd.",
    short_description: "Core factory standards covering hygienic plant zoning, surface cleanability, air filtration, water quality, and employee hygiene.",
    full_description: "A must-attend course for production engineers, quality executives, and factory teams. It demystifies prerequisite programs, hygienic design of machinery, personal protective equipment (PPE) protocols, waste handling, and chemical storage.",
    target_audience: [
      "Production & Packaging Machine Operators",
      "Maintenance & Engineering Technicians in Food Plants",
      "Sanitation & Housekeeping In-Charges",
      "Fresh Science Graduates entering manufacturing"
    ],
    learning_outcomes: [
      "Evaluate plant equipment for hygienic cleanability and drainage",
      "Establish strict personnel hygiene and health screening protocols",
      "Understand water, steam, and compressed air purity standards",
      "Formulate daily and deep-cleaning schedules (SSOPs)"
    ],
    curriculum: [
      { module: "Module 1", title: "Premises & Plant Layout", topics: ["Site location risks", "Flooring, walls, ceilings, and lighting", "Ventilation and condensation control"] },
      { module: "Module 2", title: "Equipment & Maintenance", topics: ["Sanitary materials (SS 304/316)", "Dead-leg elimination", "Lubricant food-grade requirements"] },
      { module: "Module 3", title: "Personnel Hygiene & Facility Sanitation", topics: ["Handwashing stations", "Locker room zoning", "Chemical storage and SDS"] }
    ],
    eligibility: "High school diploma or working experience in manufacturing.",
    certificate_details: "Certificate of Completion in Good Manufacturing Practices from Haridra.",
    featured: false,
    is_published: true
  },
  {
    id: 5,
    title: "Food Safety for Students & Career Starter Bootcamp",
    slug: "food-safety-student-career-bootcamp",
    code: "HFSA-CAMPUS-101",
    category_name: "Campus & Career Readiness",
    level: "Foundational",
    duration: "2 Weeks (14 Hours)",
    delivery_mode: "Hybrid",
    fee: "₹2,500 (Subsidized Student Cohort Fee)",
    is_eosh_accredited: false,
    accreditation_details: "Industry-Academia Skill Development Initiative by Haridra Food Safety Assurance.",
    short_description: "Practical bridging program giving students practical factory insights, mock audit exercises, and resume-ready food safety knowledge.",
    full_description: "Specifically designed in collaboration with academic partner colleges, this bootcamp introduces students to what food manufacturing companies actually look for when hiring QA/QC analysts and food technologists.",
    target_audience: [
      "B.Sc / M.Sc Food Science, Biotechnology, Microbiology Students",
      "B.Tech / M.Tech Food Technology Graduates",
      "Diploma in Hotel Management & Catering Students"
    ],
    learning_outcomes: [
      "Translate theoretical microbiology into practical plant sanitation",
      "Understand basic regulatory compliance and standard formats",
      "Prepare for technical interviews in food manufacturing QA roles",
      "Analyze real-world food recall and contamination case studies"
    ],
    curriculum: [
      { module: "Module 1", title: "Industrial Food Safety Overview", topics: ["Regulatory bodies", "The anatomy of a modern food processing plant", "Key roles in QA/QC"] },
      { module: "Module 2", title: "Practical Testing & Documentation", topics: ["Understanding COAs (Certificate of Analysis)", "Sensory evaluation sheets", "Swab sampling methods"] },
      { module: "Module 3", title: "Interview Prep & Case Studies", topics: ["Common technical interview questions", "Case analysis of recent food safety alerts", "Career roadmaps"] }
    ],
    eligibility: "Current students or recent graduates in life sciences or allied disciplines.",
    certificate_details: "Certificate in Applied Food Safety & Industrial Readiness.",
    featured: true,
    image_url: "/images/food-safety-training-lab.jpg",
    is_published: true
  }
];

export const FALLBACK_INDUSTRIES: IndustryItem[] = [
  {
    id: 1,
    name: "Food Manufacturing",
    slug: "food-manufacturing",
    headline: "Safeguarding High-Volume Production Lines",
    order: 1,
    icon_name: "Factory",
    description: "Comprehensive assurance across raw material intake, automated processing lines, packaging integrity, and warehouse staging.",
    challenges: [
      "Controlling pathogen niches in continuous conveyor systems",
      "Managing allergen cross-contact in multi-product facilities",
      "Managing high-speed automated packaging seal integrity",
      "Meeting rigorous retail supplier compliance criteria"
    ],
    standards_and_regulations: [
      "FSSAI Manufacturing Licensing Requirements",
      "Codex General Principles of Food Hygiene",
      "ISO 22000 / FSSC 22000 Framework Principles",
      "Good Manufacturing Practices (Schedule 4 Standards)"
    ],
    how_haridra_helps: [
      "Designing comprehensive HACCP and prerequisite programs (PRPs)",
      "Conducting in-depth internal audits and environmental monitoring reviews",
      "Providing workforce hygiene and machinery sanitization training",
      "Developing supplier quality management protocols"
    ]
  },
  {
    id: 2,
    name: "Food Processing",
    slug: "food-processing",
    headline: "Science-Based Process Validation & Quality Control",
    order: 2,
    icon_name: "Flame",
    description: "Targeted technical advisory for thermal processing, drying, fermentation, milling, and beverage extraction units.",
    challenges: [
      "Validating thermal death time (F0/D-value) parameters for safe preservation",
      "Preventing mycotoxin and moisture spoilage in grain handling",
      "Maintaining clean-in-place (CIP) effectiveness without chemical residues",
      "Minimizing processing yield loss while enforcing strict quality parameters"
    ],
    standards_and_regulations: [
      "Hygienic Process Engineering Standards",
      "Thermal Processing Regulatory Guidelines",
      "Aseptic Filling & Packaging Protocols"
    ],
    how_haridra_helps: [
      "Thermal process review and lethality validation",
      "Cleaning validation protocols for industrial CIP systems",
      "Root-cause analysis of unexpected microbiological spikes",
      "Process improvement consulting to reduce rework and waste"
    ]
  },
  {
    id: 3,
    name: "Hospitality & Hotels",
    slug: "hospitality-hotels",
    headline: "Flawless Guest Dining & Banqueting Food Safety",
    order: 3,
    icon_name: "Hotel",
    description: "Protecting five-star and luxury hotel reputation through strict cold-holding, buffet hygiene, and staff health protocols.",
    challenges: [
      "Mass banquet food preparation with complex holding time-temperatures",
      "Preventing norovirus and cross-contamination across multiple kitchens",
      "Managing guest dietary requirements and strict allergen transparency",
      "High kitchen team turnover requiring rapid onboarding"
    ],
    standards_and_regulations: [
      "Commercial Kitchen Hygiene Regulations",
      "Five-Star Hygiene Rating Benchmarks",
      "Allergen Information & Declaration Standards"
    ],
    how_haridra_helps: [
      "Unannounced mystery hygiene and food safety audits",
      "Kitchen staff hygiene and food handling training workshops",
      "Buffet and banquet temperature management standard operating procedures",
      "Corrective action guidance for food service managers"
    ]
  },
  {
    id: 4,
    name: "Restaurants & Cloud Kitchens",
    slug: "restaurants-cloud-kitchens",
    headline: "Hygiene Excellence for Fast-Paced Kitchens",
    order: 4,
    icon_name: "Utensils",
    description: "Practical, space-efficient food safety systems designed for quick-service restaurants, dark kitchens, and dynamic food delivery operations.",
    challenges: [
      "High operational pace leading to skipped sanitization steps",
      "Limited kitchen footprint increasing cross-contamination risk",
      "Ensuring delivery packaging preserves food safety in transit",
      "Frequent supplier changes affecting raw ingredient quality"
    ],
    standards_and_regulations: [
      "FSSAI Food Service Regulations",
      "Good Hygiene Practices for Catering Establishments",
      "Packaging Safety & Food Delivery Guidelines"
    ],
    how_haridra_helps: [
      "Streamlined daily hygiene checklists for quick kitchen opening/closing",
      "Color-coded prep area separation strategies for compact spaces",
      "Delivery packaging and tamper-evident seal guidance",
      "Quick-bite food safety training modules for culinary staff"
    ]
  },
  {
    id: 5,
    name: "Catering Services",
    slug: "catering-services",
    headline: "Safe Large-Scale Institutional & Event Food Delivery",
    order: 5,
    icon_name: "Truck",
    description: "Specialized food protection across preparation, insulated transport, and remote venue serving for corporate and institutional caterers.",
    challenges: [
      "Time-temperature abuse during transport to off-site locations",
      "Managing bulk quantities of perishable food without refrigeration on-site",
      "Water quality at external client serving locations",
      "Hygiene enforcement across temporary event staff"
    ],
    standards_and_regulations: [
      "Event Catering Safety Standards",
      "Transport and Insulated Vehicle Hygiene Guidelines",
      "Large-Scale Food Preparation Hygiene Protocols"
    ],
    how_haridra_helps: [
      "Logistics temperature monitoring protocols and log systems",
      "On-site serving station hygiene SOPs and handwashing setups",
      "Emergency contamination response and contingency planning",
      "Periodic audit inspections of central commissary kitchens"
    ]
  },
  {
    id: 6,
    name: "Food Retail & Supermarkets",
    slug: "food-retail",
    headline: "Cold-Chain Integrity & Storefront Hygiene",
    order: 6,
    icon_name: "Store",
    description: "Auditing cold display cabinets, fresh produce handling, delicatessens, and bakery counters in modern retail formats.",
    challenges: [
      "Maintaining continuous cold chain in open-front display chillers",
      "Preventing cross-contamination at deli slicing and butchery counters",
      "Effective inventory rotation (FIFO/FEFO) to avoid expired stock",
      "Customer handling and hygiene at bulk self-service bins"
    ],
    standards_and_regulations: [
      "Retail Food Safety Guidelines",
      "Packaged Food Labeling & Display Compliance",
      "Cold Storage and Temperature Maintenance Laws"
    ],
    how_haridra_helps: [
      "Store-level food hygiene audits across retail supermarket networks",
      "Staff training on stock rotation, allergen signage, and waste segregation",
      "Refrigeration breakdown contingency protocols",
      "Compliance support for retail food preparation licenses"
    ]
  },
  {
    id: 7,
    name: "Educational Institutions",
    slug: "educational-institutions",
    headline: "Campus Dining Safety & Student Academic Enrichment",
    order: 7,
    icon_name: "School",
    description: "Ensuring spotless hostel messes and university cafeterias, while delivering structured food safety education to students.",
    challenges: [
      "Safeguarding thousands of students daily against water and food-borne illnesses",
      "Managing diverse vendor food stalls and student cafeterias on campus",
      "Equipping food science and biotechnology students with industry-relevant skills",
      "Establishing accountability in institutional mess contract operations"
    ],
    standards_and_regulations: [
      "Campus Hostel Mess Hygiene Guidelines",
      "Institutional Drinking Water Safety Standards",
      "UGC/AICTE Industry-Academia Collaboration Goals"
    ],
    how_haridra_helps: [
      "Comprehensive mess hygiene audits and water quality review advisory",
      "Institutional MoUs for specialized on-campus student training",
      "Value-added HACCP and Food Safety Practitioner certificate modules",
      "Vendor compliance monitoring across campus dining establishments"
    ]
  }
];

export const FALLBACK_ARTICLES: ArticleItem[] = [
  {
    id: 10,
    title: "Food Safety vs Food Quality: Essential Differences, Operational Standards & Global Compliance Framework",
    slug: "food-safety-vs-food-quality-standards-compliance-framework",
    category: "food_safety_awareness",
    category_display: "Core Comparative Analysis",
    excerpt: "A comprehensive operational analysis comparing mandatory statutory safety parameters (pathogens, chemical toxins, physical hazards) with sensory commercial quality attributes (flavor, brix, texture, shelf stability).",
    image_url: "/images/food-safety-vs-quality.jpg",
    content: `In the modern food processing and hospitality industries, the terms **"Food Safety"** and **"Food Quality"** are frequently used interchangeably. However, conflating these two distinct disciplines creates substantial operational vulnerabilities, audit non-conformances, and brand liabilities.

Understanding the critical distinctions, regulatory boundaries, and interconnected workflows between Food Safety and Food Quality is essential for food business operators, quality assurance managers, and technical auditors alike.

---

### 1. Fundamental Definitions

#### What is Food Safety?
**Food Safety** refers to all the conditions and measures necessary during the production, processing, storage, distribution, and preparation of food to ensure that it is safe, wholesome, and fit for human consumption when prepared or eaten according to its intended use. 
- **Core Principle:** Prevention of chronic or acute harm, illness, or injury to the consumer.
- **Nature of Requirement:** Non-negotiable, mandatory, and governed strictly by statutory law (e.g., FSSAI, US FDA FSMA, EU Regulations, Codex Alimentarius).

#### What is Food Quality?
**Food Quality** encompasses the totality of characteristics and features of a food product that bear on its ability to satisfy stated or implied commercial specifications and consumer expectations. This includes sensory traits (appearance, color, aroma, taste, mouthfeel, texture) and quantitative physical/chemical attributes (Brix, pH, viscosity, moisture content, nutritional labeling accuracy).
- **Core Principle:** Meeting customer satisfaction, brand consistency, and market standards.
- **Nature of Requirement:** Market-driven, contractual, and commercially negotiated between suppliers, retailers, and end-consumers.

---

### 2. Comprehensive Comparison Matrix

| Critical Parameter | Food Safety | Food Quality |
| :--- | :--- | :--- |
| **Primary Objective** | Prevent consumer illness, bodily injury, or death | Deliver customer satisfaction, brand delight & repeatability |
| **Legal Status** | **Mandatory by Law** (Criminal liability for breaches) | **Commercial Agreement** (Civil contract / brand preference) |
| **Compromise Level** | **Zero Tolerance** (Never negotiable under any circumstance) | Tolerances defined by grade standards (A-grade, B-grade) |
| **Hazard Focus** | Biological (pathogens), Chemical (pesticides, heavy metals), Physical (glass, metal), Allergens | Staling, minor discoloration, off-flavor, texture softness, viscosity deviation |
| **Standard Frameworks** | HACCP, ISO 22000, FSSC 22000, BRCGS Food Safety, IFS Food | ISO 9001, Six Sigma, Sensory Profiling, AGMARK, Retailer Spec Sheets |
| **Detection Timing** | Continuous real-time CCP monitoring & preventative sanitation | Batch sensory appraisal, statistical sampling, lab QA testing |
| **Consequence of Failure** | Recalls, statutory plant closure, hospitalization, criminal prosecution | Consumer complaints, product returns, lower repeat sales, markdowns |

---

### 3. The Classic Paradox: Safety vs. Quality in Daily Production

Can safe food have poor quality? Can high-quality food be unsafe? The answer to both is an emphatic **yes**:

1. **Safe Food with Poor Quality:** A loaf of bread that has been baked cleanly in a compliant facility but has become stale and dry after 5 days. It poses zero microbiological health risk to the consumer, but its eating quality is severely degraded.
2. **Unsafe Food with Perceived High Quality:** A beautifully decorated gourmet salad or fresh sushi roll that looks crisp, vibrant, and smells fresh, but harbors 10^5 CFU/g of pathogenic *Salmonella enterica* or Norovirus due to infected food handler cross-contamination. To the consumer's eyes and palate, the quality appears impeccable—yet it causes life-threatening foodborne infection.

---

### 4. Hazard Categories Monitored Under Food Safety

Food Safety systems are engineered around proactive hazard prevention:

- **Microbiological Hazards:** *Salmonella*, *Listeria monocytogenes*, *Escherichia coli* (STEC), *Staphylococcus aureus* enterotoxins, *Clostridium botulinum*.
- **Chemical Contaminants:** Mycotoxins (Aflatoxin M1 in dairy), pesticide residues exceeding MRLs, heavy metals (Lead, Cadmium, Arsenic), cleaning chemical cross-contamination.
- **Physical Foreign Bodies:** Metal shavings from worn agitators, glass fragments from broken sight glasses, hard plastic, bone splinters.
- **Undeclared Allergens:** Milk, peanut, soy, wheat/gluten, tree nuts, egg, fish, and crustacea cross-contact.

---

### 5. Harmonizing Both into an Integrated FSQMS

World-class organizations do not pit safety against quality; they integrate them into a unified **Food Safety and Quality Management System (FSQMS)**:

1. **Prerequisite Programs (PRPs):** Establish the baseline sanitary environment through Good Manufacturing Practices (GMP) and Good Hygiene Practices (GHP).
2. **HACCP Framework:** Formulate unambiguous Critical Control Points (CCPs) for lethal kill-steps, metal detection, and cold-chain temperature thresholds.
3. **Quality Control Points (QCPs):** Position intermediate quality checkpoints for recipe consistency, moisture control, colorimetry, and seal integrity.
4. **Competency Training:** Empower shop-floor operators with accredited training so they understand not just *how* to follow an SOP, but *why* microbiological hygiene prevents catastrophic failure.

At Haridra Food Safety Assurance Pvt. Ltd., our technical consultancy and audit methodology bridges this exact gap—enabling food companies to build certified, audit-ready facilities that consistently achieve both regulatory food safety compliance and commercial quality leadership.`,
    read_time: "7 min read",
    author_name: "Haridra Technical Editorial Board",
    author_title: "Food Safety & Quality Assurance Division",
    featured: true,
    is_published: true,
    published_at: "2026-11-20T08:00:00Z"
  },
  {
    id: 1,
    title: "Understanding HACCP: Beyond the 7 Principles to Practical Factory Execution",
    slug: "understanding-haccp-practical-factory-execution",
    category: "food_safety_awareness",
    category_display: "Food Safety Awareness",
    excerpt: "Why traditional theoretical HACCP plans often fail on the factory floor, and how to build verifiable, operator-friendly control points.",
    content: `Hazard Analysis and Critical Control Point (HACCP) is universally celebrated as the cornerstone of preventative food safety management. However, in our audits across diverse manufacturing and catering units, a common failure pattern emerges: the disconnect between the HACCP binder residing in the QA office and the daily physical reality on the production line.

### The Pitfall of Desk-Bound Hazard Analysis
A classic error is formulating hazard analysis exclusively from generic desk references without observing actual plant operations during shift changeovers, deep sanitation cycles, or equipment changeovers. When operators are confronted with complex, 10-column monitoring sheets during high-speed production runs, compliance rapidly deteriorates into post-shift retrospective sign-offs.

### Establishing Realistic Critical Limits
Critical limits must be objective, measurable in real-time, and within the direct control of the operator. If a temperature monitoring point requires waiting for a 24-hour swab incubation, it cannot function as a preventative control for a continuous packaging line. Sensory or physical indicators—such as continuous digital probe displays, differential pressure gauges, and calibrated sieves—must provide immediate actionable signals.

### Empowering Line Operators
True food safety culture exists when a frontline packaging operator feels confident to halt a line when a critical limit is breached without fear of management reprisal. Organizations that invest in operator-level coaching and transparent deviation protocols consistently report lower non-conformance rates during statutory audits.`,
    read_time: "6 min read",
    author_name: "Haridra Technical Editorial Board",
    author_title: "Food Safety & Quality Assurance Division",
    featured: true,
    is_published: true,
    published_at: "2026-11-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Temperature Danger Zone Management: Critical Safeguards for Commercial Kitchens",
    slug: "temperature-danger-zone-commercial-kitchens",
    category: "hygiene_sanitation",
    category_display: "Hygiene & Sanitation",
    excerpt: "A deep dive into pathogen multiplication curves between 5°C and 60°C, and operational best practices for blast chilling and banquet staging.",
    content: `In commercial kitchens, banquets, and catering operations, temperature abuse remains the leading microbiological cause of food-borne illness outbreaks. Pathogenic organisms such as *Staphylococcus aureus*, *Salmonella spp.*, and *Clostridium perfringens* multiply exponentially within the critical temperature window of 5°C to 60°C (41°F to 140°F).

### The Two-Stage Cooling Protocol
Placing large cauldrons of boiling gravy or rice directly into standard walk-in refrigerators is a widespread operational mistake. The immense thermal mass raises ambient cold-room temperatures, placing neighboring items in danger, while the center of the pot cools at an dangerously slow rate. 

Food service operations must enforce the two-stage cooling standard:
1. Cool cooked food from 60°C to 21°C within 2 hours.
2. Cool from 21°C to 5°C or below within an additional 4 hours.

Employing shallow stainless steel cooling pans (depth not exceeding 5 cm), ice wands, or dedicated blast chillers is essential to ensure compliance with this vital safety curve.

### Buffet Holding and Continuous Monitoring
Hot-holding units (bain-maries) must maintain food at or above 63°C throughout service. They are engineered to hold hot food, never to reheat cold food. Operators must log core internal temperatures using sanitized digital thermometers rather than relying on surface infrared readings, which can lead to misleadingly high estimates.`,
    read_time: "5 min read",
    author_name: "Haridra Technical Editorial Board",
    author_title: "Hospitality & Hygiene Division",
    featured: true,
    is_published: true,
    published_at: "2026-11-10T09:30:00Z"
  },
  {
    id: 3,
    title: "Bridging the Academia-Industry Divide in Food Safety Education",
    slug: "bridging-academia-industry-divide-food-safety",
    category: "professional_development",
    category_display: "Professional Development",
    excerpt: "How structured industrial partnerships and realistic simulation training can prepare science graduates for immediate technical impact.",
    content: `Every year, thousands of capable students graduate with degrees in Food Technology, Biotechnology, and Microbiology. Yet, talent acquisition teams in food manufacturing and QA regularly report extended onboarding cycles before new hires can independently manage factory documentation or audit verification.

### Academic Theory vs. Factory Realities
University curricula excel in imparting foundational science—understanding microbial kinetics, biochemical pathways, and analytical chemistry. However, graduates are rarely exposed to:
- Real-world CAPA (Corrective and Preventive Action) root-cause methodologies
- Conducting vendor audits under commercial time pressures
- Reviewing calibration certificates and microbiological testing swab frequencies
- Navigating complex national licensing requirements and inspection checklists

### The Value of Institutional Collaborations
At Haridra Food Safety Assurance, our collaboration framework with universities introduces experiential modules into final-year curricula. By engaging students in simulated audit walkthroughs, interpreting authentic production defect logs, and mastering statutory compliance terminology, educational institutions can dramatically improve student employability while providing food processors with job-ready technical talent.`,
    read_time: "4 min read",
    author_name: "Haridra Academic Advisory Panel",
    author_title: "Education & Collaboration Desk",
    featured: false,
    is_published: true,
    published_at: "2026-11-05T14:15:00Z"
  },
  {
    id: 4,
    title: "Allergen Management in Multi-Product Food Processing Facilities",
    slug: "allergen-management-multi-product-facilities",
    category: "food_quality",
    category_display: "Food Quality",
    excerpt: "Systematic approaches to physical segregation, scheduling order, dedicated tools, and cleaning validation to prevent cross-contact.",
    content: `Food allergens represent one of the primary drivers of commercial product recalls worldwide. Unlike bacterial hazards, which can often be inactivated through thermal cooking steps, allergenic proteins remain thermally stable throughout standard baking, frying, and pasteurization processes.

### Four Pillars of Facility Allergen Control
1. **Intake and Raw Material Segregation:** Clearly labeling allergen-containing ingredients upon receipt and storing them on bottom tiers to prevent accidental spillage onto allergen-free raw materials.
2. **Dedicated Tooling and Utensils:** Employing strict color-coded scoops, containers, and maintenance tools to avoid cross-contamination.
3. **Production Sequencing:** Scheduling non-allergenic runs first, followed by products containing allergens, followed by comprehensive deep wet sanitization.
4. **Validated Cleaning Verification:** Utilizing rapid allergen lateral-flow swab tests to verify the complete removal of target proteins prior to line switchovers.`,
    read_time: "5 min read",
    author_name: "Haridra Technical Editorial Board",
    author_title: "Food Safety & Quality Assurance Division",
    featured: false,
    is_published: true,
    published_at: "2026-10-28T11:00:00Z"
  }
];

export const FALLBACK_TEAM: TeamMemberItem[] = [
  {
    id: 1,
    name: "[Director - Technical & Operations - Placeholder]",
    role: "Managing Director / Principal Food Safety Consultant",
    qualification: "M.Sc Food Technology / Lead Auditor (Representative Profile)",
    bio: "20+ years of technical experience in food safety audits, quality assurance systems, and corporate compliance across food manufacturing and hospitality. [Official Verified Bio Pending]",
    is_placeholder: true,
    order: 1
  },
  {
    id: 2,
    name: "[Head of Education & Training - Placeholder]",
    role: "Head of Professional Education & Campus Collaborations",
    qualification: "Ph.D in Food Science / Certified Trainer (Representative Profile)",
    bio: "Experienced academician and corporate trainer specializing in bridging higher education with industry requirements and EOSH-accredited initiatives. [Official Verified Bio Pending]",
    is_placeholder: true,
    order: 2
  },
  {
    id: 3,
    name: "[Senior Quality Assurance Consultant - Placeholder]",
    role: "Principal Consultant - Audits & Sanitary Engineering",
    qualification: "B.Tech Food Engineering (Representative Profile)",
    bio: "Expert in plant layout design, HACCP plan verification, environmental pathogen monitoring, and cold-chain audit methodologies. [Official Verified Bio Pending]",
    is_placeholder: true,
    order: 3
  }
];

export const FALLBACK_METRICS: DashboardMetrics = {
  total_enquiries: 3,
  pending_enquiries: 2,
  training_enquiries: 1,
  consultancy_enquiries: 1,
  collaboration_enquiries: 1,
  converted_enquiries: 0,
  published_courses: 5,
  total_courses: 5,
  eosh_accredited_courses: 1,
  published_articles: 4,
  total_articles: 4,
  verified_collaborations: 0
};

export const FALLBACK_ENQUIRIES: EnquiryItem[] = [
  {
    id: 1,
    full_name: "Dr. Ramesh Kulkarni",
    email: "dean.foodtech@exemplar-univ.ac.in",
    phone: "+91 98230 11223",
    organization: "Exemplar University Department of Food Science",
    enquiry_type: "collaboration",
    subject: "Institutional MoU for 2026-27 Final Year Student Training",
    message: "We would like to explore partnering with Haridra to deliver an on-campus HACCP and Food Safety Practitioner certificate course for our graduating cohort of 60 students.",
    status: "new",
    internal_notes: "Follow up with academic liaison team to schedule introductory video conference.",
    created_at: "2026-11-21T10:30:00Z",
    updated_at: "2026-11-21T10:30:00Z"
  },
  {
    id: 2,
    full_name: "Sunita Menon",
    email: "sunita.menon@apollocatering.com",
    phone: "+91 97401 55678",
    organization: "Apollo Central Kitchens Pvt. Ltd.",
    enquiry_type: "audit",
    subject: "Pre-Inspection Diagnostic Food Safety Audit",
    message: "We operate two central commissaries supplying 45 outlets. We require a comprehensive hygiene and HACCP compliance audit across both facilities next month.",
    status: "in_progress",
    internal_notes: "Diagnostic audit scope document sent via email. Awaiting facility floor plans.",
    created_at: "2026-11-20T14:45:00Z",
    updated_at: "2026-11-21T09:15:00Z"
  },
  {
    id: 3,
    full_name: "Arjun Singhal",
    email: "arjun.singhal@freshharvestfoods.co",
    phone: "+91 98112 33445",
    organization: "Fresh Harvest Packaged Foods",
    enquiry_type: "training",
    course_name: "Food Safety Internal Auditor Certification",
    subject: "Corporate Cohort Enrollment for 8 QA Executives",
    message: "We want to enroll our internal QA and line supervisors in the upcoming batch of the Food Safety Internal Auditor course. Please share group pricing and scheduling details.",
    status: "contacted",
    internal_notes: "Spoke on phone on Nov 20. Sent corporate proposal with 15% group concession.",
    created_at: "2026-11-19T16:20:00Z",
    updated_at: "2026-11-20T11:00:00Z"
  }
];
