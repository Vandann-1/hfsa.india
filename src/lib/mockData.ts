import {
  AcademicCategory,
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

export const FALLBACK_ACADEMIC_CATEGORIES: AcademicCategory[] = [
  {
    "id": "cat-btech-food-tech",
    "title": "B.Tech Food Science and Technology",
    "degreeLabel": "B.Tech Food Science & Technology",
    "slug": "btech-food-science-and-technology",
    "intro": "Explore specialized subjects related to food production, food quality, packaging, sensory evaluation and nutritional regulations.",
    "image": "/images/training-btech-food-tech.jpg",
    "subjects": [
      {
        "id": "subj-food-safety-hygiene",
        "title": "Food Safety and Hygiene",
        "slug": "food-safety-and-hygiene",
        "academicTrack": "btech-food-tech",
        "academicCategoryName": "B.Tech Food Science and Technology",
        "degreeLabel": "B.Tech Food Science & Technology",
        "code": "HFSA-BFST-01",
        "shortDescription": "Industrial hygiene principles, biological and chemical hazard control, personal hygiene standards, and factory sanitation protocols.",
        "overview": "This subject introduces food science students to the fundamental principles of industrial hygiene and safety compliance. Learners explore contamination pathways in processing plants, prerequisite hygiene programs (PRPs), personal sanitization regimens, and the regulatory framework governing factory-floor hygiene standards.",
        "focusAreas": [
          "Microbial and chemical hazard identification in food processing",
          "Prerequisite programs (PRPs) and personal hygiene discipline",
          "Sanitation Standard Operating Procedures (SSOP) design",
          "Zoning, air quality, and water purity in manufacturing"
        ],
        "practicalApplications": [
          "Conducting factory-floor personal hygiene checks",
          "Verifying sanitation chemicals and contact times",
          "Authoring sanitation logs and hygiene non-conformance reports"
        ],
        "recommendedFor": "Food engineering & technology students preparing for production QA and technical operations.",
        "deliveryModePlaceholder": "Campus Workshop / Interactive Classroom / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-btech-food-tech.jpg"
      },
      {
        "id": "subj-qc-food-production",
        "title": "Quality Control in Food Production",
        "slug": "quality-control-in-food-production",
        "academicTrack": "btech-food-tech",
        "academicCategoryName": "B.Tech Food Science and Technology",
        "degreeLabel": "B.Tech Food Science & Technology",
        "code": "HFSA-BFST-02",
        "shortDescription": "Analytical inspection methods, statistical quality control, defect categorization, and batch record verification.",
        "overview": "Quality control is the frontline defense in food manufacturing. This subject provides rigorous exposure to in-line sampling protocols, raw material intake verification, Certificate of Analysis (COA) reviews, and statistical process control (SPC) techniques used across modern food processing plants.",
        "focusAreas": [
          "Raw material receiving inspection and testing protocols",
          "Statistical process control and tolerance tracking",
          "Non-conformance grading (Minor, Major, Critical)",
          "Verification of batch documentation and traceability records"
        ],
        "practicalApplications": [
          "Performing statistical batch sampling and defect logging",
          "Verifying raw material specifications against supplier COAs",
          "Establishing critical control point inspection logs"
        ],
        "recommendedFor": "Students targeting QA/QC laboratory technician and quality inspector careers.",
        "deliveryModePlaceholder": "Campus Workshop / Laboratory Practical / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-btech-food-tech.jpg"
      },
      {
        "id": "subj-food-packaging-tech",
        "title": "Food Packaging Technology",
        "slug": "food-packaging-technology",
        "academicTrack": "btech-food-tech",
        "academicCategoryName": "B.Tech Food Science and Technology",
        "degreeLabel": "B.Tech Food Science & Technology",
        "code": "HFSA-BFST-03",
        "shortDescription": "Packaging materials, barrier characteristics, modified atmosphere packaging (MAP), and seal integrity testing.",
        "overview": "Modern packaging preserves food safety, prevents spoilage, and extends shelf-life. This subject covers food contact material regulations, migration safety testing, oxygen and moisture barrier kinetics, vacuum and modified atmosphere packaging (MAP), and sustainable biodegradable materials.",
        "focusAreas": [
          "Food contact materials compliance and global migration limits",
          "Modified atmosphere packaging (MAP) and gas flushing principles",
          "Seal integrity testing, burst testing, and vacuum decay methods",
          "Eco-friendly and biodegradable food packaging innovations"
        ],
        "practicalApplications": [
          "Conducting package seal leakage and dye penetration tests",
          "Evaluating food packaging material compatibility with food matrices",
          "Reviewing migration test reports and compliance certificates"
        ],
        "recommendedFor": "Undergraduates focusing on packaging development, logistics, and processing engineering.",
        "deliveryModePlaceholder": "Classroom / Technical Demo / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-btech-food-tech.jpg"
      },
      {
        "id": "subj-sensory-evaluation",
        "title": "Sensory Evaluation of Food Products",
        "slug": "sensory-evaluation-of-food-products",
        "academicTrack": "btech-food-tech",
        "academicCategoryName": "B.Tech Food Science and Technology",
        "degreeLabel": "B.Tech Food Science & Technology",
        "code": "HFSA-BFST-04",
        "shortDescription": "Sensory panel screening, discrimination testing, descriptive profiling, and consumer acceptance analytics.",
        "overview": "Sensory evaluation links scientific formulation with human perception. This subject trains students in structured sensory laboratory setup, discrimination testing (triangle, duo-trio), descriptive quantitative analysis, panelist screening, and organoleptic quality verification during shelf-life studies.",
        "focusAreas": [
          "Physiology of human taste, aroma, texture, and visual perception",
          "Sensory panel selection, training, and blind testing protocols",
          "Discrimination testing and quantitative descriptive analysis (QDA)",
          "Statistical evaluation of sensory testing data"
        ],
        "practicalApplications": [
          "Setting up a standard sensory testing booth and blind sample flight",
          "Running triangle difference tests for formulation changes",
          "Mapping organoleptic degradation across accelerated shelf-life studies"
        ],
        "recommendedFor": "Food science students aiming for R&D, new product formulation (NPD), and QA roles.",
        "deliveryModePlaceholder": "Practical Sensory Lab / Campus Workshop / Interactive",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-btech-food-tech.jpg"
      },
      {
        "id": "subj-nutritional-labeling",
        "title": "Nutritional Labeling Regulations",
        "slug": "nutritional-labeling-regulations",
        "academicTrack": "btech-food-tech",
        "academicCategoryName": "B.Tech Food Science and Technology",
        "degreeLabel": "B.Tech Food Science & Technology",
        "code": "HFSA-BFST-05",
        "shortDescription": "FSSAI and Codex labeling laws, allergen disclosures, nutritional panel calculation, and regulatory claim substantiation.",
        "overview": "Food labels communicate essential nutritional facts and statutory warnings to consumers. This subject covers FSSAI Packaging & Labelling regulations, mandatory nutritional declaration formats, serving size calculations, allergen warnings, date marking (Best Before vs Expiry), and health claim substantiation.",
        "focusAreas": [
          "Statutory labeling requirements under national and international standards",
          "Calculating nutritional fact panels from laboratory analytical data",
          "Allergen declaration requirements and cross-contact advisories",
          "Nutritional and health claim substantiation guidelines"
        ],
        "practicalApplications": [
          "Reviewing commercial artwork proofs for compliance and statutory font heights",
          "Formulating allergen warning boxes and net quantity statements",
          "Drafting ingredient declarations conforming to descending order rules"
        ],
        "recommendedFor": "Students aspiring to regulatory affairs, food compliance, and product branding careers.",
        "deliveryModePlaceholder": "Classroom / Regulatory Seminar / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-btech-food-tech.jpg"
      }
    ]
  },
  {
    "id": "cat-bsc-agriculture",
    "title": "B.Sc. Agriculture",
    "degreeLabel": "B.Sc. Agriculture",
    "slug": "bsc-agriculture",
    "intro": "Explore agricultural practices, sustainable farming, soil health and responsible agricultural development.",
    "image": "/images/training-bsc-agriculture.jpg",
    "subjects": [
      {
        "id": "subj-organic-farming",
        "title": "Organic Farming Practices",
        "slug": "organic-farming-practices",
        "academicTrack": "bsc-agriculture",
        "academicCategoryName": "B.Sc. Agriculture",
        "degreeLabel": "B.Sc. Agriculture",
        "code": "HFSA-BAGR-01",
        "shortDescription": "Organic soil management, bio-inputs, organic certification compliance, and natural crop defense systems.",
        "overview": "Organic farming requires rigorous ecological discipline and formal certification integrity. This subject covers conversion processes, organic soil biology, bio-fertilizers, organic manure composting, biological pest control, and national/international organic certification standards.",
        "focusAreas": [
          "Principles of organic agriculture and farm conversion timelines",
          "Bio-fertilizers, green manures, and compost preparation",
          "Organic seed standards and non-chemical pest prevention",
          "Organic certification documentation and traceability requirements"
        ],
        "practicalApplications": [
          "Designing organic crop rotation schedules",
          "Formulating farm-level organic input production plans",
          "Reviewing internal audit checklists for organic farm certification"
        ],
        "recommendedFor": "Agriculture students aiming for agribusiness, organic consulting, and farm management roles.",
        "deliveryModePlaceholder": "Field Practical / Campus Workshop / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-agriculture.jpg"
      },
      {
        "id": "subj-sustainable-agriculture",
        "title": "Introduction to Sustainable Agriculture",
        "slug": "introduction-to-sustainable-agriculture",
        "academicTrack": "bsc-agriculture",
        "academicCategoryName": "B.Sc. Agriculture",
        "degreeLabel": "B.Sc. Agriculture",
        "code": "HFSA-BAGR-02",
        "shortDescription": "Resource conservation, water efficiency, carbon-smart farming, and resilient agricultural food systems.",
        "overview": "Sustainable agriculture balances high-yield productivity with long-term ecosystem vitality. Students explore conservation tillage, precision irrigation, agro-forestry, integrated farming systems (IFS), carbon sequestration in agricultural soils, and climate-resilient crop selection.",
        "focusAreas": [
          "Water stewardship and micro-irrigation management",
          "Conservation agriculture and minimal soil disturbance",
          "Integrated farming systems combining crops, livestock, and aquaculture",
          "Climate-resilient cropping and carbon-smart agriculture"
        ],
        "practicalApplications": [
          "Assessing farm water budgets and irrigation efficiency",
          "Evaluating multi-tier integrated farming layouts",
          "Measuring farm carbon footprint and biodiversity indicators"
        ],
        "recommendedFor": "Students interested in agricultural sustainability, rural development, and environmental agronomy.",
        "deliveryModePlaceholder": "Classroom / Case Studies / Field Demonstrations",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-agriculture.jpg"
      },
      {
        "id": "subj-pest-management",
        "title": "Pest Management Techniques",
        "slug": "pest-management-techniques",
        "academicTrack": "bsc-agriculture",
        "academicCategoryName": "B.Sc. Agriculture",
        "degreeLabel": "B.Sc. Agriculture",
        "code": "HFSA-BAGR-03",
        "shortDescription": "Integrated Pest Management (IPM), biological control agents, pheromone monitoring, and pesticide residue controls.",
        "overview": "Pest management must safeguard crop health while preventing chemical residue contamination in the food chain. This subject teaches Economic Threshold Levels (ETL), beneficial predator propagation, pheromone trapping, bio-botanicals, and regulatory maximum residue limits (MRLs).",
        "focusAreas": [
          "Integrated Pest Management (IPM) core principles and field scouting",
          "Biological control using parasitoids, predators, and pathogens",
          "Pheromone lures, sticky traps, and physical barriers",
          "Safe pesticide handling and Maximum Residue Limits (MRL) compliance"
        ],
        "practicalApplications": [
          "Calculating Economic Threshold Levels (ETL) through field scouting",
          "Installing and monitoring pheromone trap densities",
          "Drafting chemical withholding period and MRL risk mitigation plans"
        ],
        "recommendedFor": "Agriculture students preparing for plant protection, ag-input consulting, and field operations.",
        "deliveryModePlaceholder": "Field Scout Training / Campus Workshop / Hybrid",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-agriculture.jpg"
      },
      {
        "id": "subj-soil-health-assessment",
        "title": "Soil Health Assessment",
        "slug": "soil-health-assessment",
        "academicTrack": "bsc-agriculture",
        "academicCategoryName": "B.Sc. Agriculture",
        "degreeLabel": "B.Sc. Agriculture",
        "code": "HFSA-BAGR-04",
        "shortDescription": "Physical, chemical, and biological soil diagnostics, nutrient profiling, and fertility restoration plans.",
        "overview": "Healthy soil is the foundation of food safety and crop nutrition. This subject covers soil sampling methodologies, pH and electrical conductivity testing, organic carbon determination, macronutrient and micronutrient diagnostics, and biological microbial activity indicators.",
        "focusAreas": [
          "Soil sampling techniques and sample preparation standards",
          "Chemical parameters: pH, electrical conductivity, cation exchange capacity (CEC)",
          "Soil organic matter and biological soil health indicators",
          "Interpreting soil health card reports and customized fertilizer recommendations"
        ],
        "practicalApplications": [
          "Performing soil sample collection and field kit testing",
          "Interpreting laboratory soil analysis reports",
          "Formulating balanced soil amendment and remediation strategies"
        ],
        "recommendedFor": "Students targeting soil testing laboratories, agronomic advisory, and precision farming.",
        "deliveryModePlaceholder": "Soil Testing Lab Practical / Classroom / Hybrid",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-agriculture.jpg"
      },
      {
        "id": "subj-agroecology-principles",
        "title": "Agroecology Principles",
        "slug": "agroecology-principles",
        "academicTrack": "bsc-agriculture",
        "academicCategoryName": "B.Sc. Agriculture",
        "degreeLabel": "B.Sc. Agriculture",
        "code": "HFSA-BAGR-05",
        "shortDescription": "Ecological farm design, biodiversity conservation, polyculture systems, and ecological food sovereignty.",
        "overview": "Agroecology studies agricultural production as an integral part of natural ecological systems. Students explore biodiversity dynamics, polyculture cropping, agro-ecosystem nutrient loops, biological pest suppression, and the socio-economic dimensions of regenerative farming.",
        "focusAreas": [
          "Agro-ecosystem structure, trophic relationships, and nutrient cycles",
          "Companion planting, intercropping, and biodiversity corridors",
          "Soil-plant-microbe interactions and mycorrhizal networks",
          "Agroecological transitions and sustainable community food systems"
        ],
        "practicalApplications": [
          "Mapping farm biodiversity and pollinator habitats",
          "Designing multi-crop spatial and temporal configurations",
          "Conducting ecological resilience assessments for agrarian holdings"
        ],
        "recommendedFor": "Undergraduates focusing on ecological agriculture, research, and sustainable development.",
        "deliveryModePlaceholder": "Classroom / Field Seminars / Interactive Studies",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-agriculture.jpg"
      }
    ]
  },
  {
    "id": "cat-bsc-food-science",
    "title": "B.Sc. Food Science",
    "degreeLabel": "B.Sc. Food Science",
    "slug": "bsc-food-science",
    "intro": "Develop an understanding of food microbiology, preservation, food additives, flavor chemistry and plant-based nutrition.",
    "image": "/images/training-bsc-food-science.jpg",
    "subjects": [
      {
        "id": "subj-food-microbiology-basics",
        "title": "Food Microbiology Basics",
        "slug": "food-microbiology-basics",
        "academicTrack": "bsc-food-science",
        "academicCategoryName": "B.Sc. Food Science",
        "degreeLabel": "B.Sc. Food Science",
        "code": "HFSA-BFSC-01",
        "shortDescription": "Pathogen biology, spoilage organisms, laboratory culturing, and microbiological safety standards.",
        "overview": "Food microbiology is essential for preventing foodborne illness and preserving product integrity. Students study bacterial growth kinetics, major foodborne pathogens (Salmonella, Listeria, E. coli, Clostridium), spoilage molds and yeasts, beneficial fermentation bacteria, and laboratory aseptic techniques.",
        "focusAreas": [
          "Bacterial growth curves, D-values, and z-values",
          "Common food-borne pathogens, intoxication, and infectious mechanisms",
          "Microbial spoilage patterns in dairy, meat, and processed produce",
          "Aseptic sampling, agar plating, and colony enumeration"
        ],
        "practicalApplications": [
          "Performing serial dilutions and pour/spread plate counts",
          "Identifying pathogen colonies and interpreting test plates",
          "Evaluating environmental swab test data against statutory limits"
        ],
        "recommendedFor": "Food science & microbiology students targeting laboratory analyst and QA careers.",
        "deliveryModePlaceholder": "Laboratory Practical / Classroom / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-food-science.jpg"
      },
      {
        "id": "subj-food-preservation-techniques",
        "title": "Introduction to Food Preservation Techniques",
        "slug": "introduction-to-food-preservation-techniques",
        "academicTrack": "bsc-food-science",
        "academicCategoryName": "B.Sc. Food Science",
        "degreeLabel": "B.Sc. Food Science",
        "code": "HFSA-BFSC-02",
        "shortDescription": "Thermal processing, dehydration, cold chain preservation, water activity control, and hurdle technology.",
        "overview": "Preserving food quality requires a multi-hurdle approach to inhibit microbial proliferation and enzymatic degradation. This subject covers thermal processing (pasteurization, retort canning), dehydration kinetics, freezing crystallization, water activity (aw) control, and hurdle technology.",
        "focusAreas": [
          "Thermal lethality concepts, pasteurization, and commercial sterility",
          "Freezing mechanics, ice crystal morphology, and thawing quality",
          "Water activity (aw) modification and drying methods",
          "Hurdle technology: synergistic combinations of pH, aw, and temperature"
        ],
        "practicalApplications": [
          "Calculating thermal lethality (F0 values) for heat treatments",
          "Measuring food water activity (aw) and equilibrium moisture content",
          "Formulating multi-barrier hurdle preservation models for novel foods"
        ],
        "recommendedFor": "Students aspiring to food processing, packaging line oversight, and technical QA.",
        "deliveryModePlaceholder": "Classroom / Technical Demos / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-food-science.jpg"
      },
      {
        "id": "subj-food-additives-applications",
        "title": "Food Additives and Their Applications",
        "slug": "food-additives-and-their-applications",
        "academicTrack": "bsc-food-science",
        "academicCategoryName": "B.Sc. Food Science",
        "degreeLabel": "B.Sc. Food Science",
        "code": "HFSA-BFSC-03",
        "shortDescription": "Technological functional classes, INS numbering, Maximum Permissible Limits (MPL), and safety assessments.",
        "overview": "Food additives enhance texture, preservation, color, and stability. This subject provides in-depth technical knowledge of preservatives, emulsifiers, stabilizers, colorants, antioxidants, and leavening agents, alongside the Codex INS system and national regulatory permissible limits.",
        "focusAreas": [
          "Functional categories of intentional food additives",
          "Safety evaluations: ADI (Acceptable Daily Intake) and NOAEL indices",
          "Maximum Permissible Limits (MPL) across food categories",
          "Clean-label reformulation and natural additive alternatives"
        ],
        "practicalApplications": [
          "Calculating batch addition rates of preservatives within statutory limits",
          "Verifying additive compliance from technical raw material data sheets",
          "Conducting stability trials for emulsifier and antioxidant blends"
        ],
        "recommendedFor": "Food science students aiming for product development, formulation, and compliance roles.",
        "deliveryModePlaceholder": "Classroom / Formulation Practical / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-food-science.jpg"
      },
      {
        "id": "subj-flavor-chemistry",
        "title": "Flavor Chemistry",
        "slug": "flavor-chemistry",
        "academicTrack": "bsc-food-science",
        "academicCategoryName": "B.Sc. Food Science",
        "degreeLabel": "B.Sc. Food Science",
        "code": "HFSA-BFSC-04",
        "shortDescription": "Aroma volatiles, Maillard reaction pathways, extraction chemistry, flavor stability, and encapsulation.",
        "overview": "Flavor is a complex interaction of volatile aroma compounds and non-volatile taste molecules. Students explore chemical families of flavor (esters, aldehydes, terpenes, pyrazines), thermal reaction flavor generation (Maillard, caramelization), flavor degradation, and encapsulation technology.",
        "focusAreas": [
          "Volatile aroma compounds and olfaction receptor mechanisms",
          "Maillard reaction kinetics and cooked flavor chemistry",
          "Natural flavor extraction and essential oil fractionation",
          "Flavor stability, oxidation protection, and encapsulation techniques"
        ],
        "practicalApplications": [
          "Assessing aroma profiles using standardized sensory wheels",
          "Evaluating lipid oxidation and off-flavor development in foods",
          "Reviewing flavor encapsulation performance in beverage and snack matrices"
        ],
        "recommendedFor": "Students interested in flavor houses, R&D sensory laboratories, and confectionery/beverage sciences.",
        "deliveryModePlaceholder": "Classroom / Aroma Chemistry Demo / Hybrid",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-food-science.jpg"
      },
      {
        "id": "subj-plant-based-nutrition",
        "title": "Plant-Based Foods and Nutrition",
        "slug": "plant-based-foods-and-nutrition",
        "academicTrack": "bsc-food-science",
        "academicCategoryName": "B.Sc. Food Science",
        "degreeLabel": "B.Sc. Food Science",
        "code": "HFSA-BFSC-05",
        "shortDescription": "Plant protein functionality, alternative dairy/meat formulation, nutritional profiling, and clean-label processing.",
        "overview": "The plant-based food sector is rapidly evolving. This subject covers plant protein extraction (pea, soy, oat, faba), texturization technology (extrusion, shear cell), anti-nutritional factors (phytates, lectins), micronutrient fortification, and clean-label formulation.",
        "focusAreas": [
          "Functional properties of plant proteins: solubility, gelation, emulsification",
          "Extrusion and texturization techniques for meat analogs",
          "De-flavoring plant proteins and masking beany off-notes",
          "Nutritional equivalence, amino acid scoring, and allergen oversight"
        ],
        "practicalApplications": [
          "Formulating balanced plant-based beverage and protein alternative bases",
          "Evaluating anti-nutritional reduction through thermal and fermentation methods",
          "Verifying nutritional profile and amino acid completeness against standards"
        ],
        "recommendedFor": "Students aspiring to modern food tech, alternative protein innovation, and nutritional science.",
        "deliveryModePlaceholder": "Classroom / Product Workshop / Hybrid Online",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-food-science.jpg"
      }
    ]
  },
  {
    "id": "cat-bsc-hotel-mgmt",
    "title": "B.Sc. Hotel Management",
    "degreeLabel": "B.Sc. Hotel Management",
    "slug": "bsc-hotel-management",
    "intro": "Explore hospitality operations, food and beverage management, customer service and sustainable hospitality practices.",
    "image": "/images/training-bsc-hotel-mgmt.jpg",
    "subjects": [
      {
        "id": "subj-customer-service-excellence",
        "title": "Customer Service Excellence",
        "slug": "customer-service-excellence",
        "academicTrack": "bsc-hotel-mgmt",
        "academicCategoryName": "B.Sc. Hotel Management",
        "degreeLabel": "B.Sc. Hotel Management",
        "code": "HFSA-BHTM-01",
        "shortDescription": "Guest journey mapping, luxury hospitality etiquette, allergy and dietary communication, and crisis recovery.",
        "overview": "Delivering exceptional hospitality requires flawless service delivery and acute food safety communication. This subject teaches guest touchpoint management, luxury service standards, safe handling of guest allergy requests, service recovery during operational errors, and hospitality leadership.",
        "focusAreas": [
          "Guest expectations and touchpoint design in commercial hospitality",
          "Communication protocols for dietary restrictions and severe allergens",
          "Service recovery frameworks (HEAR / LAST methodologies)",
          "Customer satisfaction measurement and feedback analysis"
        ],
        "practicalApplications": [
          "Simulating front-of-house guest dietary requirement briefing",
          "Role-playing service escalation and complaint resolution",
          "Conducting service audit walkthroughs in dining environments"
        ],
        "recommendedFor": "Hotel management students preparing for front office, guest relations, and F&B service leadership.",
        "deliveryModePlaceholder": "Service Simulation / Interactive Workshop / Classroom",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-hotel-mgmt.jpg"
      },
      {
        "id": "subj-food-beverage-management",
        "title": "Food and Beverage Management",
        "slug": "food-and-beverage-management",
        "academicTrack": "bsc-hotel-mgmt",
        "academicCategoryName": "B.Sc. Hotel Management",
        "degreeLabel": "B.Sc. Hotel Management",
        "code": "HFSA-BHTM-02",
        "shortDescription": "Commercial kitchen hygiene, food cost controls, menu engineering, and buffet temperature compliance.",
        "overview": "F&B operations demand strict coordination between culinary production, hygiene compliance, and financial profitability. This subject covers kitchen sanitation zoning, raw food receiving procedures, buffet temperature holding, menu engineering, and food safety record-keeping.",
        "focusAreas": [
          "Commercial kitchen layout, sanitation zoning, and cross-contamination prevention",
          "Temperature controls: hot-holding, blast chilling, and refrigerated display",
          "Menu planning, food cost calculation, and portion standardization",
          "Kitchen inspection checklists and health department readiness"
        ],
        "practicalApplications": [
          "Maintaining hot and cold food holding temperature log sheets",
          "Conducting kitchen hygiene audits using standard regulatory forms",
          "Calculating portion costs and waste variance across prep shifts"
        ],
        "recommendedFor": "Hospitality students targeting executive chef, sous chef, and F&B director roles.",
        "deliveryModePlaceholder": "Commercial Kitchen Practical / Classroom / Hybrid",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-hotel-mgmt.jpg"
      },
      {
        "id": "subj-event-planning-basics",
        "title": "Event Planning Basics",
        "slug": "event-planning-basics",
        "academicTrack": "bsc-hotel-mgmt",
        "academicCategoryName": "B.Sc. Hotel Management",
        "degreeLabel": "B.Sc. Hotel Management",
        "code": "HFSA-BHTM-03",
        "shortDescription": "High-volume banquet operations, outdoor catering hygiene, event timelines, and crowd management.",
        "overview": "Large events and banquet operations present unique food safety and logistical challenges. This subject covers event run-sheet creation, bulk food transport safety, temporary satellite kitchen setups, banquet buffet turnover, and hygiene compliance during mass catering.",
        "focusAreas": [
          "Banquet and catering event run-sheets and operational planning",
          "Transporting hot and cold bulk foods safely to off-premise venues",
          "Temporary water supply and waste disposal for outdoor events",
          "Mass gathering crowd flow, hand sanitation, and safety oversight"
        ],
        "practicalApplications": [
          "Drafting an event food safety management plan for a 500+ guest banquet",
          "Establishing time-temperature monitoring logs for satellite catering",
          "Conducting vendor and subcontractor food hygiene verifications"
        ],
        "recommendedFor": "Students aspiring to banquet management, convention sales, and corporate event planning.",
        "deliveryModePlaceholder": "Classroom / Event Simulation / Interactive Seminar",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-hotel-mgmt.jpg"
      },
      {
        "id": "subj-sustainable-hospitality",
        "title": "Sustainable Hospitality Practices",
        "slug": "sustainable-hospitality-practices",
        "academicTrack": "bsc-hotel-mgmt",
        "academicCategoryName": "B.Sc. Hotel Management",
        "degreeLabel": "B.Sc. Hotel Management",
        "code": "HFSA-BHTM-04",
        "shortDescription": "Zero-food-waste kitchen routines, single-use plastic reduction, eco-procurement, and energy-efficient kitchens.",
        "overview": "Sustainable hospitality is a core priority for modern hotels and restaurants. Students explore commercial kitchen food waste measurement, composting and bio-methanation, single-use plastic elimination, sustainable local food procurement, and eco-certified hospitality benchmarking.",
        "focusAreas": [
          "Kitchen waste tracking and circular food recycling systems",
          "Energy and water efficiency in commercial kitchen equipment",
          "Sustainable procurement and fair-trade ingredient sourcing",
          "Eco-certifications and environmental management systems (EMS)"
        ],
        "practicalApplications": [
          "Performing a kitchen food waste audit and identifying prevention points",
          "Drafting an institutional single-use plastic phaseout roadmap",
          "Developing a green hotel dining operational checklist"
        ],
        "recommendedFor": "Undergraduates targeting luxury resort management, environmental auditing, and hospitality consulting.",
        "deliveryModePlaceholder": "Classroom / Sustainability Audit Workshop / Hybrid",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-hotel-mgmt.jpg"
      },
      {
        "id": "subj-basic-bar-mgmt-mixology",
        "title": "Basic Bar Management and Mixology",
        "slug": "basic-bar-management-and-mixology",
        "academicTrack": "bsc-hotel-mgmt",
        "academicCategoryName": "B.Sc. Hotel Management",
        "degreeLabel": "B.Sc. Hotel Management",
        "code": "HFSA-BHTM-05",
        "shortDescription": "Bar sanitation standards, ice hygiene, glassware cleaning protocols, beverage inventory, and responsible service.",
        "overview": "Bar operations require precise sanitation standards alongside beverage craft. This subject covers ice machine microbiological hygiene, glasswashing temperature verification, draught line cleaning schedules, garnish preparation safety, responsible alcohol service, and bar inventory controls.",
        "focusAreas": [
          "Bar station layout, speed rails, and sanitary workflow design",
          "Ice machine sanitation and ice scoop storage contamination prevention",
          "Glassware cleaning, chemical sanitizing, and beer-clean glass standards",
          "Draught beer line maintenance and cocktail ingredient freshness control"
        ],
        "practicalApplications": [
          "Performing bar opening and closing hygiene walkthrough checklists",
          "Executing draught line chemical sanitization and rinse verification",
          "Logging garnish shelf-life and safe temperature holding"
        ],
        "recommendedFor": "Hospitality students preparing for bar management, beverage directorship, and restaurant supervision.",
        "deliveryModePlaceholder": "Beverage Lab / Bar Simulation / Classroom",
        "schedulePlaceholder": "Flexible module sessions / Inquire for next academic cohort",
        "image": "/images/training-bsc-hotel-mgmt.jpg"
      }
    ]
  }
];

export const FALLBACK_PROFESSIONAL_AWARDS: CourseItem[] = [
  {
    "id": 101,
    "title": "Award in Basic Food Safety",
    "slug": "award-in-basic-food-safety",
    "code": "HFSA-AWD-01",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Essential foundational training for food handlers covering personal hygiene, cross-contamination, temperature controls, and basic workplace sanitization.",
    "full_description": "The Award in Basic Food Safety establishes the critical baseline hygiene competencies required by anyone who stores, prepares, serves, or handles food products. Participants learn how bacteria grow and spread, how personal hygiene protects consumers, the vital significance of the temperature danger zone, and effective cleaning and disinfection routines.",
    "target_audience": [
      "Entry-level food handlers and kitchen assistants",
      "Food service and catering service staff",
      "Food manufacturing line operatives",
      "Cloud kitchen and delivery packaging teams"
    ],
    "learning_outcomes": [
      "Understand how foodborne pathogens cause disease and how to prevent their transmission",
      "Demonstrate correct handwashing, protective apparel, and personal hygiene discipline",
      "Control food holding, cooking, and chilling temperatures accurately",
      "Implement proper two-stage cleaning and chemical sanitizing routines"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Introduction to Food Safety & Pathogens",
        "topics": [
          "The food safety challenge",
          "Bacteria, viruses, and physical contaminants",
          "High-risk foods and spoilage"
        ]
      },
      {
        "module": "Module 2",
        "title": "Personal Hygiene Standards",
        "topics": [
          "Protective workwear and hairnets",
          "Handwashing stages and frequency",
          "Reporting illness and wound care"
        ]
      },
      {
        "module": "Module 3",
        "title": "Time & Temperature Control",
        "topics": [
          "The temperature danger zone",
          "Cooking, reheating, and chilling standards",
          "Calibrating and using food probe thermometers"
        ]
      },
      {
        "module": "Module 4",
        "title": "Cleaning, Disinfection & Safe Storage",
        "topics": [
          "Detergents vs disinfectants",
          "Color-coded cleaning tools",
          "Dry, chilled, and frozen storage protocols"
        ]
      }
    ],
    "eligibility": "Open to all working food handlers, kitchen staff, and fresh entrants to the food sector.",
    "certificate_details": "Haridra Award Certificate of Competence issued upon successful completion of continuous assessment and end-of-program test.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/food-safety-training-lab.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 102,
    "title": "Award in Food Safety Management",
    "slug": "award-in-food-safety-management",
    "code": "HFSA-AWD-02",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Live Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Advanced program for plant managers and QA leads to design, verify, and maintain compliant food safety management frameworks.",
    "full_description": "The Award in Food Safety Management is engineered for team leaders, department managers, and compliance professionals. It provides systemic tools to design, audit, and sustain comprehensive food safety frameworks, including prerequisite program architecture, hazard analysis methodologies, corrective action tracking, and fostering an active food safety culture.",
    "target_audience": [
      "Operations Managers & Quality Assurance Leads",
      "Food Business Owners & General Managers",
      "Production Executives and Shift In-Charges",
      "Food Safety Management System (FSMS) Team Leaders"
    ],
    "learning_outcomes": [
      "Design and maintain compliant food safety management systems",
      "Conduct systematic hazard analysis across complex production lines",
      "Establish verified CCP monitoring and deviation protocols",
      "Drive behavioral food safety culture across diverse operational teams"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Food Safety Governance & Systems",
        "topics": [
          "Management commitment and leadership",
          "Statutory compliance obligations",
          "FSMS documentation structure"
        ]
      },
      {
        "module": "Module 2",
        "title": "Hazard Analysis & Risk Assessment",
        "topics": [
          "Biological, chemical, physical, and allergen risk ranking",
          "Defining critical control points (CCPs)",
          "Validation of critical operational limits"
        ]
      },
      {
        "module": "Module 3",
        "title": "Verification, Audits & Non-Conformance",
        "topics": [
          "Internal verification schedules",
          "Root cause analysis (5-Whys / Fishbone)",
          "CAPA design and implementation"
        ]
      },
      {
        "module": "Module 4",
        "title": "Food Safety Culture & Continuous Improvement",
        "topics": [
          "Behavioral compliance indicators",
          "Employee engagement and training",
          "Management review and KPI tracking"
        ]
      }
    ],
    "eligibility": "Supervisory or managerial experience in food operations or relevant science degree.",
    "certificate_details": "Haridra Professional Award in Food Safety Management upon passing technical evaluation.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 103,
    "title": "Award in Food Hygiene and Safety Management",
    "slug": "award-in-food-hygiene-and-safety-management",
    "code": "HFSA-AWD-03",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Comprehensive hygiene management covering sanitation engineering, chemical safety, environmental verification, and pest exclusion.",
    "full_description": "The Award in Food Hygiene and Safety Management focuses on deep sanitation governance. Participants gain expert understanding of chemical titration, sanitation standard operating procedures (SSOPs), hygiene zoning, bio-film eradication, ATP swab testing, and professional integrated pest management (IPM).",
    "target_audience": [
      "Hygiene Officers and Housekeeping In-Charges",
      "Sanitation Supervisors in Processing Plants",
      "Facility Managers in Food Enterprises",
      "Hospitality F&B Hygiene Controllers"
    ],
    "learning_outcomes": [
      "Author and enforce rigorous Sanitation SOPs (SSOPs)",
      "Select and handle food-grade detergents and sanitizing chemicals safely",
      "Verify sanitation effectiveness using ATP bioluminescence and microbiological swabs",
      "Oversee integrated pest management contracts and preventative barriers"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Industrial Sanitation & Detergent Science",
        "topics": [
          "Chemical classifications and modes of action",
          "Dilution ratios and titration testing",
          "Safety Data Sheets (SDS) and storage safety"
        ]
      },
      {
        "module": "Module 2",
        "title": "SSOP Authoring & Scheduling",
        "topics": [
          "Pre-operational, operational, and post-operational cleaning",
          "Master sanitation schedules",
          "Color-coded equipment protocols"
        ]
      },
      {
        "module": "Module 3",
        "title": "Sanitation Verification & Swab Testing",
        "topics": [
          "Visual inspection benchmarks",
          "ATP bioluminescence rapid testing",
          "Environmental pathogen monitoring (Listeria/Salmonella swabs)"
        ]
      },
      {
        "module": "Module 4",
        "title": "Pest Exclusion & Integrated Management",
        "topics": [
          "Pest biology and entry prevention",
          "Electronic insect killer maintenance",
          "Bait station maps and trend auditing"
        ]
      }
    ],
    "eligibility": "Prior working knowledge of food hygiene or food operations supervisory experience.",
    "certificate_details": "Haridra Award Certificate in Food Hygiene and Safety Management.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 104,
    "title": "Award in Food Safety Catering",
    "slug": "award-in-food-safety-catering",
    "code": "HFSA-AWD-04",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / On-Site Commercial Kitchen / Hybrid",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Tailored food safety standards for commercial kitchens, high-volume banqueting, hotel dining, and QSR restaurant operations.",
    "full_description": "Specifically developed for catering professionals, executive chefs, and restaurant managers, this course tackles the intense real-world pressures of high-volume food service. It explores allergen segregation, hot holding thresholds, cooling curves, safe thawing methods, cross-contamination prevention, and kitchen staff monitoring.",
    "target_audience": [
      "Executive Chefs, Sous Chefs & Kitchen In-Charges",
      "Banquet & Catering Operations Managers",
      "Quick Service Restaurant (QSR) Supervisors",
      "Institutional and Industrial Canteen Operators"
    ],
    "learning_outcomes": [
      "Prevent cross-contamination during peak culinary service hours",
      "Implement robust allergen controls and recipe ingredient transparency",
      "Enforce mandatory cooking, holding, and cooling temperature standards",
      "Conduct daily opening and closing kitchen food safety checks"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Catering Hazards & Cross-Contamination",
        "topics": [
          "Raw and cooked food separation",
          "Chopping board and knife color-coding",
          "High-risk prep staging"
        ]
      },
      {
        "module": "Module 2",
        "title": "Allergen Management in Commercial Dining",
        "topics": [
          "The 14 major allergens",
          "Dedicated allergen prep kits",
          "Communicating dietary risks with service staff"
        ]
      },
      {
        "module": "Module 3",
        "title": "Temperature Management During Service",
        "topics": [
          "Safe thawing protocols",
          "Core cooking temperatures (75°C standard)",
          "Hot buffet holding (above 63°C) and chill holding"
        ]
      },
      {
        "module": "Module 4",
        "title": "Kitchen Due Diligence Records",
        "topics": [
          "Daily probe calibration records",
          "Fridge and freezer temperature logs",
          "Hygiene audit checklists"
        ]
      }
    ],
    "eligibility": "Chefs, cooks, and hospitality professionals working in food preparation or catering.",
    "certificate_details": "Haridra Award in Food Safety Catering.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-bsc-hotel-mgmt.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 105,
    "title": "Award in Food Safety Manufacturing",
    "slug": "award-in-food-safety-manufacturing",
    "code": "HFSA-AWD-05",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Manufacturing Plant On-Site / Live Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Focused industrial compliance for food processing lines, raw material intake, packaging seals, and automated production.",
    "full_description": "Geared towards manufacturing plant personnel, this award delivers practical training on factory hygiene zoning, foreign material detection (metal detectors, X-rays, magnets), equipment cleanability, water and air filtration, and prerequisite manufacturing controls (GMP).",
    "target_audience": [
      "Production Supervisors and Factory Team Leads",
      "Packaging and Processing Machine Operators",
      "Maintenance and Plant Engineering Technicians",
      "Quality Assurance Line Inspectors"
    ],
    "learning_outcomes": [
      "Maintain Good Manufacturing Practices (GMP) across automated processing lines",
      "Operate and test metal detectors and optical sorting checkpoints",
      "Eliminate physical and foreign matter contamination sources",
      "Participate effectively in plant internal hygiene audits"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Factory Layout & Hygiene Zoning",
        "topics": [
          "Low, medium, and high-care zoning",
          "Air pressurization and HEPA filtration",
          "Drainage and water quality standards"
        ]
      },
      {
        "module": "Module 2",
        "title": "Foreign Body Prevention & Detection",
        "topics": [
          "Glass and brittle plastic policies",
          "Metal detector validation with test wands",
          "Sieves, filters, and magnetic traps"
        ]
      },
      {
        "module": "Module 3",
        "title": "Packaging Line Integrity",
        "topics": [
          "Seal integrity inspection",
          "Date code and batch printing verification",
          "Packaging defect classification"
        ]
      },
      {
        "module": "Module 4",
        "title": "Shift Changeovers & Line Clearance",
        "topics": [
          "Allergen washdown and line clearance checklists",
          "Temporary maintenance sign-offs",
          "Production log sheets"
        ]
      }
    ],
    "eligibility": "Manufacturing plant personnel or food technology graduates.",
    "certificate_details": "Haridra Award in Food Safety Manufacturing.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 106,
    "title": "Award in Food Safety Retail",
    "slug": "award-in-food-safety-retail",
    "code": "HFSA-AWD-06",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Retail Floor On-Site / Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Retail food assurance covering display refrigeration, shelf-life verification, date coding, customer handling, and FIFO inventory.",
    "full_description": "The Award in Food Safety Retail addresses the critical customer-facing stage of the supply chain. Participants learn display chilling standards, date coding enforcement, FIFO/FEFO rotation, raw versus ready-to-eat separation in display counters, and handling customer food safety inquiries.",
    "target_audience": [
      "Supermarket and Hypermarket Department Leads",
      "Cold Room and Warehousing Supervisors",
      "Delicatessen, Bakery, and Meat Counter Staff",
      "Retail Operations Area Managers"
    ],
    "learning_outcomes": [
      "Ensure display chillers and freezers maintain critical cold chain limits",
      "Enforce First-In, First-Out (FIFO) and date code compliance",
      "Prevent customer-handling contamination in self-service displays",
      "Manage damaged packaging and stock quarantine procedures"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Retail Display Temperature Management",
        "topics": [
          "Open chiller load limits and airflow",
          "Defrost cycles and temperature logging",
          "Cold room storage standards"
        ]
      },
      {
        "module": "Module 2",
        "title": "Date Coding & Stock Rotation",
        "topics": [
          "Use By vs Best Before distinctions",
          "FIFO and FEFO inventory execution",
          "Damaged goods write-off and quarantine"
        ]
      },
      {
        "module": "Module 3",
        "title": "Counter Hygiene & Ready-to-Eat Foods",
        "topics": [
          "Meat, deli, and bakery service hygiene",
          "Glove usage and utensil sanitizing",
          "Cross-contamination in retail service"
        ]
      },
      {
        "module": "Module 4",
        "title": "Customer Interaction & Recall Handling",
        "topics": [
          "Addressing customer hygiene inquiries",
          "Store-level product recall withdrawal steps",
          "Health inspector liaison"
        ]
      }
    ],
    "eligibility": "Retail store staff, supermarket department leads, or food merchandising personnel.",
    "certificate_details": "Haridra Award in Food Safety Retail.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/food-safety-training-lab.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 107,
    "title": "Award in Food Process Safety Management",
    "slug": "award-in-food-process-safety-management",
    "code": "HFSA-AWD-07",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Technical Seminar / Hybrid Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Technical process control covering thermal processing validation, continuous pasteurization, aseptic lines, and process parameters.",
    "full_description": "Designed for process engineers, food technologists, and technical specialists, this program dives deep into thermal process calculations (F0, D-value, z-value), continuous pasteurizer diversion valves, pressure monitoring, water activity validation, and automated process parameter verification.",
    "target_audience": [
      "Process Engineers & Food Technologists",
      "Thermal Processing Technicians & Retort Operators",
      "Continuous Pasteurization & UHT Plant Operators",
      "Technical QA & Process Validation Leads"
    ],
    "learning_outcomes": [
      "Validate thermal destruction curves and lethal thermal process times",
      "Monitor automated diversion valves and safety interlocks",
      "Evaluate aseptic packaging barrier parameters and micro-filtration",
      "Troubleshoot process deviation events and execute containment"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Thermal Lethality Kinetics",
        "topics": [
          "Microbial death curves (D and z values)",
          "F0 value calculation and retort cook charts",
          "Cold-spot temperature validation"
        ]
      },
      {
        "module": "Module 2",
        "title": "Continuous Flow Processing Systems",
        "topics": [
          "Plate heat exchangers and holding tubes",
          "Flow diversion valves and pressure differentials",
          "Aseptic sterile surge tank maintenance"
        ]
      },
      {
        "module": "Module 3",
        "title": "Non-Thermal Process Controls",
        "topics": [
          "High pressure processing (HPP) basics",
          "Membrane filtration and UV treatment",
          "Controlled atmosphere processing"
        ]
      },
      {
        "module": "Module 4",
        "title": "Process Deviation Management",
        "topics": [
          "Automatic alarm response protocols",
          "Hold-and-release quarantine procedures",
          "Process re-validation requirements"
        ]
      }
    ],
    "eligibility": "Degree or diploma in food technology, engineering, dairy science, or equivalent industry technical experience.",
    "certificate_details": "Haridra Award in Food Process Safety Management.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 108,
    "title": "Award in Food Safety Supervision",
    "slug": "award-in-food-safety-supervision",
    "code": "HFSA-AWD-08",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Practical supervisory leadership covering shift-level compliance monitoring, corrective action coaching, and incident logging.",
    "full_description": "Supervisors are the crucial bridge between corporate policy and daily operational reality. This program trains shift supervisors, line leaders, and department chiefs in conducting daily hygiene walkthroughs, coaching frontline employees, enforcing compliance, and taking rapid corrective action during deviations.",
    "target_audience": [
      "Shift In-Charges and Production Line Supervisors",
      "Kitchen Supervisors and Catering Team Leaders",
      "Warehouse and Dispatch Supervisors",
      "Freshly promoted team leads in food businesses"
    ],
    "learning_outcomes": [
      "Conduct shift-level hygiene briefings and pre-operational checks",
      "Recognize operational non-compliances and coach employees on the spot",
      "Document deviation incidents and initiate immediate containment",
      "Foster accountability and high morale in safety-critical tasks"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "The Role of the Food Safety Supervisor",
        "topics": [
          "Supervisory duties and legal responsibilities",
          "Daily handover checklists",
          "Shift opening and closing audits"
        ]
      },
      {
        "module": "Module 2",
        "title": "Observing & Coaching Staff Practices",
        "topics": [
          "Detecting hygiene lapses on the line",
          "Constructive coaching techniques",
          "Overcoming resistance to SOP compliance"
        ]
      },
      {
        "module": "Module 3",
        "title": "Handling Daily Operational Deviations",
        "topics": [
          "Immediate corrective action steps",
          "Quarantine and segregation of suspect goods",
          "Completing incident reports"
        ]
      },
      {
        "module": "Module 4",
        "title": "Audit Preparedness & Record Auditing",
        "topics": [
          "Reviewing temperature and cleaning logs",
          "Preparing shifts for third-party inspections",
          "Supervisor verification sign-offs"
        ]
      }
    ],
    "eligibility": "Current or aspiring supervisors in any food handling, manufacturing, or catering establishment.",
    "certificate_details": "Haridra Award in Food Safety Supervision.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/food-safety-training-lab.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 109,
    "title": "Award in Food Safety Hazards",
    "slug": "award-in-food-safety-hazards",
    "code": "HFSA-AWD-09",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Technical Seminar / Live Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Comprehensive risk analysis covering biological, chemical, physical, and allergen hazards across industrial food processing.",
    "full_description": "Accurate hazard identification is the bedrock of every successful HACCP and FSMS plan. This award equips participants with scientific hazard analysis techniques to assess pathogen contamination, chemical toxins (mycotoxins, pesticide residues, heavy metals), physical foreign bodies, and allergen cross-contact.",
    "target_audience": [
      "HACCP Team Members and QA Technicians",
      "Food Safety Officers & Laboratory Analysts",
      "Product Development and Formulation Scientists",
      "Compliance and Regulatory Affairs Executives"
    ],
    "learning_outcomes": [
      "Categorize and risk-rank biological, chemical, physical, and allergen hazards",
      "Evaluate mycotoxins, heavy metals, and chemical residue contamination points",
      "Implement allergen matrix controls and validated cleaning protocols",
      "Apply probability and severity matrices to establish validated control measures"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Biological Hazards & Microbial Toxins",
        "topics": [
          "Infectious pathogens vs intoxications",
          "Bacterial spore formers and heat resistance",
          "Mycotoxins (Aflatoxin, Ochratoxin) in raw commodities"
        ]
      },
      {
        "module": "Module 2",
        "title": "Chemical Hazards & Contaminants",
        "topics": [
          "Pesticide residues and Maximum Residue Limits (MRL)",
          "Heavy metals (Lead, Cadmium, Arsenic)",
          "Process-induced contaminants (Acrylamide, PAHs)"
        ]
      },
      {
        "module": "Module 3",
        "title": "Physical Hazards & Packaging Inclusions",
        "topics": [
          "Glass, brittle plastic, wood, and metal shavings",
          "Intrinsic vs extrinsic physical hazards",
          "Preventative control barriers"
        ]
      },
      {
        "module": "Module 4",
        "title": "Allergens & Cross-Contact Science",
        "topics": [
          "Major global allergen lists",
          "Cross-contact mechanisms during processing",
          "Cleaning validation for allergen-free claims"
        ]
      }
    ],
    "eligibility": "Science background or working experience in food safety/quality assurance.",
    "certificate_details": "Haridra Award in Food Safety Hazards.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 110,
    "title": "Award in Food Quality Control (FQC)",
    "slug": "award-in-food-quality-control-fqc",
    "code": "HFSA-AWD-10",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Laboratory Practical / Hybrid Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Laboratory testing, sampling plans, calibration, standard deviations, and documentation for quality control inspectors.",
    "full_description": "Quality control protects brand reputation through objective physical, chemical, and organoleptic measurements. The Award in Food Quality Control trains inspectors and technicians in sampling methodologies (AQL standards), testing equipment calibration, documentation, and defect management.",
    "target_audience": [
      "Quality Control (QC) Inspectors and Lab Technicians",
      "Incoming Raw Material Quality Analysts",
      "Packaging Quality Inspectors",
      "Food Technology Graduates entering QC roles"
    ],
    "learning_outcomes": [
      "Execute statistically sound sampling plans (Acceptable Quality Level - AQL)",
      "Calibrate laboratory testing equipment (refractometers, pH meters, moisture analyzers)",
      "Interpret analytical test data and verify compliance against product specifications",
      "Generate clear, indisputable Certificates of Analysis (COA) and QC release reports"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Sampling Theory & Inspection Plans",
        "topics": [
          "AQL sampling tables (ISO 2859 / IS 2500)",
          "Representative composite sampling",
          "Incoming intake inspection protocols"
        ]
      },
      {
        "module": "Module 2",
        "title": "Basic Food Lab Testing Methods",
        "topics": [
          "Moisture determination and water activity",
          "pH, titratable acidity, and Brix refractometry",
          "Texture and viscosity measurement"
        ]
      },
      {
        "module": "Module 3",
        "title": "Instrumentation Calibration & Records",
        "topics": [
          "Daily calibration schedules and standard buffer verification",
          "Weigh scale and temperature calibration",
          "Equipment maintenance logs"
        ]
      },
      {
        "module": "Module 4",
        "title": "QC Documentation & Release Procedures",
        "topics": [
          "Writing standard inspection reports",
          "Out-of-specification (OOS) investigation",
          "Batch release vs quarantine sign-offs"
        ]
      }
    ],
    "eligibility": "Science background (Food Science, Chemistry, Microbiology, or Life Sciences).",
    "certificate_details": "Haridra Award in Food Quality Control (FQC).",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 111,
    "title": "Award in Food Safety for Management Professionals",
    "slug": "award-in-food-safety-for-management-professionals",
    "code": "HFSA-AWD-11",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Executive Seminar / Live Online / Corporate Boardroom",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Executive-level governance covering legal liability, recall risk mitigation, food safety culture, and board-level risk management.",
    "full_description": "Food safety is an existential business risk requiring strategic boardroom governance. Designed for C-suite executives, general managers, and directors, this executive course outlines statutory director liabilities, financial repercussions of product recalls, crisis communication, and building institutional food safety culture.",
    "target_audience": [
      "Business Owners, CEOs, and Managing Directors",
      "Operations Vice Presidents and General Managers",
      "Corporate Legal and Risk Compliance Officers",
      "Supply Chain Heads & Procurement Directors"
    ],
    "learning_outcomes": [
      "Understand executive and statutory legal responsibilities under food laws",
      "Mitigate enterprise risk associated with contamination outbreaks and recalls",
      "Assess capital expenditure for hygiene infrastructure and modernization",
      "Instill top-down food safety leadership across multi-site enterprises"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Corporate Governance & Legal Liability",
        "topics": [
          "Director responsibilities under food safety legislation",
          "Statutory inspection powers and legal penalties",
          "Due diligence defense mechanisms"
        ]
      },
      {
        "module": "Module 2",
        "title": "Enterprise Recall & Crisis Management",
        "topics": [
          "Financial and brand damage of product recalls",
          "Crisis communication frameworks",
          "Mock recall protocols and traceability audits"
        ]
      },
      {
        "module": "Module 3",
        "title": "Supply Chain Risk & Vendor Assurance",
        "topics": [
          "Supplier verification and vulnerability assessments",
          "Contract manufacturing oversight",
          "Raw material traceability"
        ]
      },
      {
        "module": "Module 4",
        "title": "Cultivating Food Safety Culture",
        "topics": [
          "Tone from the top: leadership commitment",
          "Food safety KPIs for management reviews",
          "Continuous improvement investment strategy"
        ]
      }
    ],
    "eligibility": "Senior management, executives, directors, or business owners.",
    "certificate_details": "Haridra Award in Food Safety for Management Professionals.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/food-safety-consultant.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 112,
    "title": "Award in Food Safety and Sanitation for Food Manufacturers",
    "slug": "award-in-food-safety-and-sanitation-for-food-manufacturers",
    "code": "HFSA-AWD-12",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Plant Floor Practical / Live Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Specialized industrial sanitation covering Clean-In-Place (CIP), biofilm remediation, chemical titration, and drainage hygiene.",
    "full_description": "This highly specialized technical program delivers actionable expertise in industrial sanitation engineering. Participants explore Clean-In-Place (CIP) cycle parameters (time, temperature, action, chemical), Clean-Out-of-Place (COP) tanks, enzymatic biofilm eradication, sanitary valve design, and environmental pathogen verification.",
    "target_audience": [
      "Plant Sanitation Managers and CIP Lead Operators",
      "Facility Maintenance Engineers and Plant Supervisors",
      "Hygiene and Food Safety Technical Specialists",
      "Food Plant Sanitation Chemical Technicians"
    ],
    "learning_outcomes": [
      "Optimize Clean-In-Place (CIP) 5-step and 7-step cycles for maximum microbial clearance",
      "Identify and eradicate resilient bacterial biofilms in piping and dead-legs",
      "Safely test and calibrate caustic and acid chemical wash concentrations",
      "Formulate environmental pathogen monitoring swabbing grids (EMP)"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "CIP / COP Engineering & Fluid Dynamics",
        "topics": [
          "The 4 pillars of sanitation (TACT principles)",
          "Velocity, spray-ball coverage, and pressure drop",
          "Dead-leg identification and elimination"
        ]
      },
      {
        "module": "Module 2",
        "title": "Sanitation Chemistry & Titration",
        "topics": [
          "Caustic soda wash and organic residue dissolution",
          "Acid washes for mineral scale removal",
          "Peracetic acid (PAA) and chlorine dioxide sanitizers"
        ]
      },
      {
        "module": "Module 3",
        "title": "Biofilm Dynamics & Remediation",
        "topics": [
          "Biofilm formation stages on stainless steel",
          "Enzymatic and oxidative biofilm destruction",
          "Pre-operational visual and ATP verification"
        ]
      },
      {
        "module": "Module 4",
        "title": "Drainage, Zoning & Pathogen Grids",
        "topics": [
          "Hygienic drainage design and trap sanitation",
          "Environmental Monitoring Programs (EMP)",
          "Corrective actions for positive environmental swabs"
        ]
      }
    ],
    "eligibility": "Experience in food manufacturing, maintenance engineering, or facility sanitation.",
    "certificate_details": "Haridra Award in Food Safety and Sanitation for Food Manufacturers.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  }
];

export const FALLBACK_COURSES: CourseItem[] = [
  {
    "id": 101,
    "title": "Award in Basic Food Safety",
    "slug": "award-in-basic-food-safety",
    "code": "HFSA-AWD-01",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Essential foundational training for food handlers covering personal hygiene, cross-contamination, temperature controls, and basic workplace sanitization.",
    "full_description": "The Award in Basic Food Safety establishes the critical baseline hygiene competencies required by anyone who stores, prepares, serves, or handles food products. Participants learn how bacteria grow and spread, how personal hygiene protects consumers, the vital significance of the temperature danger zone, and effective cleaning and disinfection routines.",
    "target_audience": [
      "Entry-level food handlers and kitchen assistants",
      "Food service and catering service staff",
      "Food manufacturing line operatives",
      "Cloud kitchen and delivery packaging teams"
    ],
    "learning_outcomes": [
      "Understand how foodborne pathogens cause disease and how to prevent their transmission",
      "Demonstrate correct handwashing, protective apparel, and personal hygiene discipline",
      "Control food holding, cooking, and chilling temperatures accurately",
      "Implement proper two-stage cleaning and chemical sanitizing routines"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Introduction to Food Safety & Pathogens",
        "topics": [
          "The food safety challenge",
          "Bacteria, viruses, and physical contaminants",
          "High-risk foods and spoilage"
        ]
      },
      {
        "module": "Module 2",
        "title": "Personal Hygiene Standards",
        "topics": [
          "Protective workwear and hairnets",
          "Handwashing stages and frequency",
          "Reporting illness and wound care"
        ]
      },
      {
        "module": "Module 3",
        "title": "Time & Temperature Control",
        "topics": [
          "The temperature danger zone",
          "Cooking, reheating, and chilling standards",
          "Calibrating and using food probe thermometers"
        ]
      },
      {
        "module": "Module 4",
        "title": "Cleaning, Disinfection & Safe Storage",
        "topics": [
          "Detergents vs disinfectants",
          "Color-coded cleaning tools",
          "Dry, chilled, and frozen storage protocols"
        ]
      }
    ],
    "eligibility": "Open to all working food handlers, kitchen staff, and fresh entrants to the food sector.",
    "certificate_details": "Haridra Award Certificate of Competence issued upon successful completion of continuous assessment and end-of-program test.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/food-safety-training-lab.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 102,
    "title": "Award in Food Safety Management",
    "slug": "award-in-food-safety-management",
    "code": "HFSA-AWD-02",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Live Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Advanced program for plant managers and QA leads to design, verify, and maintain compliant food safety management frameworks.",
    "full_description": "The Award in Food Safety Management is engineered for team leaders, department managers, and compliance professionals. It provides systemic tools to design, audit, and sustain comprehensive food safety frameworks, including prerequisite program architecture, hazard analysis methodologies, corrective action tracking, and fostering an active food safety culture.",
    "target_audience": [
      "Operations Managers & Quality Assurance Leads",
      "Food Business Owners & General Managers",
      "Production Executives and Shift In-Charges",
      "Food Safety Management System (FSMS) Team Leaders"
    ],
    "learning_outcomes": [
      "Design and maintain compliant food safety management systems",
      "Conduct systematic hazard analysis across complex production lines",
      "Establish verified CCP monitoring and deviation protocols",
      "Drive behavioral food safety culture across diverse operational teams"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Food Safety Governance & Systems",
        "topics": [
          "Management commitment and leadership",
          "Statutory compliance obligations",
          "FSMS documentation structure"
        ]
      },
      {
        "module": "Module 2",
        "title": "Hazard Analysis & Risk Assessment",
        "topics": [
          "Biological, chemical, physical, and allergen risk ranking",
          "Defining critical control points (CCPs)",
          "Validation of critical operational limits"
        ]
      },
      {
        "module": "Module 3",
        "title": "Verification, Audits & Non-Conformance",
        "topics": [
          "Internal verification schedules",
          "Root cause analysis (5-Whys / Fishbone)",
          "CAPA design and implementation"
        ]
      },
      {
        "module": "Module 4",
        "title": "Food Safety Culture & Continuous Improvement",
        "topics": [
          "Behavioral compliance indicators",
          "Employee engagement and training",
          "Management review and KPI tracking"
        ]
      }
    ],
    "eligibility": "Supervisory or managerial experience in food operations or relevant science degree.",
    "certificate_details": "Haridra Professional Award in Food Safety Management upon passing technical evaluation.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 103,
    "title": "Award in Food Hygiene and Safety Management",
    "slug": "award-in-food-hygiene-and-safety-management",
    "code": "HFSA-AWD-03",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Comprehensive hygiene management covering sanitation engineering, chemical safety, environmental verification, and pest exclusion.",
    "full_description": "The Award in Food Hygiene and Safety Management focuses on deep sanitation governance. Participants gain expert understanding of chemical titration, sanitation standard operating procedures (SSOPs), hygiene zoning, bio-film eradication, ATP swab testing, and professional integrated pest management (IPM).",
    "target_audience": [
      "Hygiene Officers and Housekeeping In-Charges",
      "Sanitation Supervisors in Processing Plants",
      "Facility Managers in Food Enterprises",
      "Hospitality F&B Hygiene Controllers"
    ],
    "learning_outcomes": [
      "Author and enforce rigorous Sanitation SOPs (SSOPs)",
      "Select and handle food-grade detergents and sanitizing chemicals safely",
      "Verify sanitation effectiveness using ATP bioluminescence and microbiological swabs",
      "Oversee integrated pest management contracts and preventative barriers"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Industrial Sanitation & Detergent Science",
        "topics": [
          "Chemical classifications and modes of action",
          "Dilution ratios and titration testing",
          "Safety Data Sheets (SDS) and storage safety"
        ]
      },
      {
        "module": "Module 2",
        "title": "SSOP Authoring & Scheduling",
        "topics": [
          "Pre-operational, operational, and post-operational cleaning",
          "Master sanitation schedules",
          "Color-coded equipment protocols"
        ]
      },
      {
        "module": "Module 3",
        "title": "Sanitation Verification & Swab Testing",
        "topics": [
          "Visual inspection benchmarks",
          "ATP bioluminescence rapid testing",
          "Environmental pathogen monitoring (Listeria/Salmonella swabs)"
        ]
      },
      {
        "module": "Module 4",
        "title": "Pest Exclusion & Integrated Management",
        "topics": [
          "Pest biology and entry prevention",
          "Electronic insect killer maintenance",
          "Bait station maps and trend auditing"
        ]
      }
    ],
    "eligibility": "Prior working knowledge of food hygiene or food operations supervisory experience.",
    "certificate_details": "Haridra Award Certificate in Food Hygiene and Safety Management.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 104,
    "title": "Award in Food Safety Catering",
    "slug": "award-in-food-safety-catering",
    "code": "HFSA-AWD-04",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / On-Site Commercial Kitchen / Hybrid",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Tailored food safety standards for commercial kitchens, high-volume banqueting, hotel dining, and QSR restaurant operations.",
    "full_description": "Specifically developed for catering professionals, executive chefs, and restaurant managers, this course tackles the intense real-world pressures of high-volume food service. It explores allergen segregation, hot holding thresholds, cooling curves, safe thawing methods, cross-contamination prevention, and kitchen staff monitoring.",
    "target_audience": [
      "Executive Chefs, Sous Chefs & Kitchen In-Charges",
      "Banquet & Catering Operations Managers",
      "Quick Service Restaurant (QSR) Supervisors",
      "Institutional and Industrial Canteen Operators"
    ],
    "learning_outcomes": [
      "Prevent cross-contamination during peak culinary service hours",
      "Implement robust allergen controls and recipe ingredient transparency",
      "Enforce mandatory cooking, holding, and cooling temperature standards",
      "Conduct daily opening and closing kitchen food safety checks"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Catering Hazards & Cross-Contamination",
        "topics": [
          "Raw and cooked food separation",
          "Chopping board and knife color-coding",
          "High-risk prep staging"
        ]
      },
      {
        "module": "Module 2",
        "title": "Allergen Management in Commercial Dining",
        "topics": [
          "The 14 major allergens",
          "Dedicated allergen prep kits",
          "Communicating dietary risks with service staff"
        ]
      },
      {
        "module": "Module 3",
        "title": "Temperature Management During Service",
        "topics": [
          "Safe thawing protocols",
          "Core cooking temperatures (75°C standard)",
          "Hot buffet holding (above 63°C) and chill holding"
        ]
      },
      {
        "module": "Module 4",
        "title": "Kitchen Due Diligence Records",
        "topics": [
          "Daily probe calibration records",
          "Fridge and freezer temperature logs",
          "Hygiene audit checklists"
        ]
      }
    ],
    "eligibility": "Chefs, cooks, and hospitality professionals working in food preparation or catering.",
    "certificate_details": "Haridra Award in Food Safety Catering.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-bsc-hotel-mgmt.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 105,
    "title": "Award in Food Safety Manufacturing",
    "slug": "award-in-food-safety-manufacturing",
    "code": "HFSA-AWD-05",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Manufacturing Plant On-Site / Live Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Focused industrial compliance for food processing lines, raw material intake, packaging seals, and automated production.",
    "full_description": "Geared towards manufacturing plant personnel, this award delivers practical training on factory hygiene zoning, foreign material detection (metal detectors, X-rays, magnets), equipment cleanability, water and air filtration, and prerequisite manufacturing controls (GMP).",
    "target_audience": [
      "Production Supervisors and Factory Team Leads",
      "Packaging and Processing Machine Operators",
      "Maintenance and Plant Engineering Technicians",
      "Quality Assurance Line Inspectors"
    ],
    "learning_outcomes": [
      "Maintain Good Manufacturing Practices (GMP) across automated processing lines",
      "Operate and test metal detectors and optical sorting checkpoints",
      "Eliminate physical and foreign matter contamination sources",
      "Participate effectively in plant internal hygiene audits"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Factory Layout & Hygiene Zoning",
        "topics": [
          "Low, medium, and high-care zoning",
          "Air pressurization and HEPA filtration",
          "Drainage and water quality standards"
        ]
      },
      {
        "module": "Module 2",
        "title": "Foreign Body Prevention & Detection",
        "topics": [
          "Glass and brittle plastic policies",
          "Metal detector validation with test wands",
          "Sieves, filters, and magnetic traps"
        ]
      },
      {
        "module": "Module 3",
        "title": "Packaging Line Integrity",
        "topics": [
          "Seal integrity inspection",
          "Date code and batch printing verification",
          "Packaging defect classification"
        ]
      },
      {
        "module": "Module 4",
        "title": "Shift Changeovers & Line Clearance",
        "topics": [
          "Allergen washdown and line clearance checklists",
          "Temporary maintenance sign-offs",
          "Production log sheets"
        ]
      }
    ],
    "eligibility": "Manufacturing plant personnel or food technology graduates.",
    "certificate_details": "Haridra Award in Food Safety Manufacturing.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 106,
    "title": "Award in Food Safety Retail",
    "slug": "award-in-food-safety-retail",
    "code": "HFSA-AWD-06",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Retail Floor On-Site / Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Retail food assurance covering display refrigeration, shelf-life verification, date coding, customer handling, and FIFO inventory.",
    "full_description": "The Award in Food Safety Retail addresses the critical customer-facing stage of the supply chain. Participants learn display chilling standards, date coding enforcement, FIFO/FEFO rotation, raw versus ready-to-eat separation in display counters, and handling customer food safety inquiries.",
    "target_audience": [
      "Supermarket and Hypermarket Department Leads",
      "Cold Room and Warehousing Supervisors",
      "Delicatessen, Bakery, and Meat Counter Staff",
      "Retail Operations Area Managers"
    ],
    "learning_outcomes": [
      "Ensure display chillers and freezers maintain critical cold chain limits",
      "Enforce First-In, First-Out (FIFO) and date code compliance",
      "Prevent customer-handling contamination in self-service displays",
      "Manage damaged packaging and stock quarantine procedures"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Retail Display Temperature Management",
        "topics": [
          "Open chiller load limits and airflow",
          "Defrost cycles and temperature logging",
          "Cold room storage standards"
        ]
      },
      {
        "module": "Module 2",
        "title": "Date Coding & Stock Rotation",
        "topics": [
          "Use By vs Best Before distinctions",
          "FIFO and FEFO inventory execution",
          "Damaged goods write-off and quarantine"
        ]
      },
      {
        "module": "Module 3",
        "title": "Counter Hygiene & Ready-to-Eat Foods",
        "topics": [
          "Meat, deli, and bakery service hygiene",
          "Glove usage and utensil sanitizing",
          "Cross-contamination in retail service"
        ]
      },
      {
        "module": "Module 4",
        "title": "Customer Interaction & Recall Handling",
        "topics": [
          "Addressing customer hygiene inquiries",
          "Store-level product recall withdrawal steps",
          "Health inspector liaison"
        ]
      }
    ],
    "eligibility": "Retail store staff, supermarket department leads, or food merchandising personnel.",
    "certificate_details": "Haridra Award in Food Safety Retail.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/food-safety-training-lab.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 107,
    "title": "Award in Food Process Safety Management",
    "slug": "award-in-food-process-safety-management",
    "code": "HFSA-AWD-07",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Technical Seminar / Hybrid Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Technical process control covering thermal processing validation, continuous pasteurization, aseptic lines, and process parameters.",
    "full_description": "Designed for process engineers, food technologists, and technical specialists, this program dives deep into thermal process calculations (F0, D-value, z-value), continuous pasteurizer diversion valves, pressure monitoring, water activity validation, and automated process parameter verification.",
    "target_audience": [
      "Process Engineers & Food Technologists",
      "Thermal Processing Technicians & Retort Operators",
      "Continuous Pasteurization & UHT Plant Operators",
      "Technical QA & Process Validation Leads"
    ],
    "learning_outcomes": [
      "Validate thermal destruction curves and lethal thermal process times",
      "Monitor automated diversion valves and safety interlocks",
      "Evaluate aseptic packaging barrier parameters and micro-filtration",
      "Troubleshoot process deviation events and execute containment"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Thermal Lethality Kinetics",
        "topics": [
          "Microbial death curves (D and z values)",
          "F0 value calculation and retort cook charts",
          "Cold-spot temperature validation"
        ]
      },
      {
        "module": "Module 2",
        "title": "Continuous Flow Processing Systems",
        "topics": [
          "Plate heat exchangers and holding tubes",
          "Flow diversion valves and pressure differentials",
          "Aseptic sterile surge tank maintenance"
        ]
      },
      {
        "module": "Module 3",
        "title": "Non-Thermal Process Controls",
        "topics": [
          "High pressure processing (HPP) basics",
          "Membrane filtration and UV treatment",
          "Controlled atmosphere processing"
        ]
      },
      {
        "module": "Module 4",
        "title": "Process Deviation Management",
        "topics": [
          "Automatic alarm response protocols",
          "Hold-and-release quarantine procedures",
          "Process re-validation requirements"
        ]
      }
    ],
    "eligibility": "Degree or diploma in food technology, engineering, dairy science, or equivalent industry technical experience.",
    "certificate_details": "Haridra Award in Food Process Safety Management.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 108,
    "title": "Award in Food Safety Supervision",
    "slug": "award-in-food-safety-supervision",
    "code": "HFSA-AWD-08",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Online / Corporate On-Site",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Practical supervisory leadership covering shift-level compliance monitoring, corrective action coaching, and incident logging.",
    "full_description": "Supervisors are the crucial bridge between corporate policy and daily operational reality. This program trains shift supervisors, line leaders, and department chiefs in conducting daily hygiene walkthroughs, coaching frontline employees, enforcing compliance, and taking rapid corrective action during deviations.",
    "target_audience": [
      "Shift In-Charges and Production Line Supervisors",
      "Kitchen Supervisors and Catering Team Leaders",
      "Warehouse and Dispatch Supervisors",
      "Freshly promoted team leads in food businesses"
    ],
    "learning_outcomes": [
      "Conduct shift-level hygiene briefings and pre-operational checks",
      "Recognize operational non-compliances and coach employees on the spot",
      "Document deviation incidents and initiate immediate containment",
      "Foster accountability and high morale in safety-critical tasks"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "The Role of the Food Safety Supervisor",
        "topics": [
          "Supervisory duties and legal responsibilities",
          "Daily handover checklists",
          "Shift opening and closing audits"
        ]
      },
      {
        "module": "Module 2",
        "title": "Observing & Coaching Staff Practices",
        "topics": [
          "Detecting hygiene lapses on the line",
          "Constructive coaching techniques",
          "Overcoming resistance to SOP compliance"
        ]
      },
      {
        "module": "Module 3",
        "title": "Handling Daily Operational Deviations",
        "topics": [
          "Immediate corrective action steps",
          "Quarantine and segregation of suspect goods",
          "Completing incident reports"
        ]
      },
      {
        "module": "Module 4",
        "title": "Audit Preparedness & Record Auditing",
        "topics": [
          "Reviewing temperature and cleaning logs",
          "Preparing shifts for third-party inspections",
          "Supervisor verification sign-offs"
        ]
      }
    ],
    "eligibility": "Current or aspiring supervisors in any food handling, manufacturing, or catering establishment.",
    "certificate_details": "Haridra Award in Food Safety Supervision.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/food-safety-training-lab.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 109,
    "title": "Award in Food Safety Hazards",
    "slug": "award-in-food-safety-hazards",
    "code": "HFSA-AWD-09",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Technical Seminar / Live Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Comprehensive risk analysis covering biological, chemical, physical, and allergen hazards across industrial food processing.",
    "full_description": "Accurate hazard identification is the bedrock of every successful HACCP and FSMS plan. This award equips participants with scientific hazard analysis techniques to assess pathogen contamination, chemical toxins (mycotoxins, pesticide residues, heavy metals), physical foreign bodies, and allergen cross-contact.",
    "target_audience": [
      "HACCP Team Members and QA Technicians",
      "Food Safety Officers & Laboratory Analysts",
      "Product Development and Formulation Scientists",
      "Compliance and Regulatory Affairs Executives"
    ],
    "learning_outcomes": [
      "Categorize and risk-rank biological, chemical, physical, and allergen hazards",
      "Evaluate mycotoxins, heavy metals, and chemical residue contamination points",
      "Implement allergen matrix controls and validated cleaning protocols",
      "Apply probability and severity matrices to establish validated control measures"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Biological Hazards & Microbial Toxins",
        "topics": [
          "Infectious pathogens vs intoxications",
          "Bacterial spore formers and heat resistance",
          "Mycotoxins (Aflatoxin, Ochratoxin) in raw commodities"
        ]
      },
      {
        "module": "Module 2",
        "title": "Chemical Hazards & Contaminants",
        "topics": [
          "Pesticide residues and Maximum Residue Limits (MRL)",
          "Heavy metals (Lead, Cadmium, Arsenic)",
          "Process-induced contaminants (Acrylamide, PAHs)"
        ]
      },
      {
        "module": "Module 3",
        "title": "Physical Hazards & Packaging Inclusions",
        "topics": [
          "Glass, brittle plastic, wood, and metal shavings",
          "Intrinsic vs extrinsic physical hazards",
          "Preventative control barriers"
        ]
      },
      {
        "module": "Module 4",
        "title": "Allergens & Cross-Contact Science",
        "topics": [
          "Major global allergen lists",
          "Cross-contact mechanisms during processing",
          "Cleaning validation for allergen-free claims"
        ]
      }
    ],
    "eligibility": "Science background or working experience in food safety/quality assurance.",
    "certificate_details": "Haridra Award in Food Safety Hazards.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 110,
    "title": "Award in Food Quality Control (FQC)",
    "slug": "award-in-food-quality-control-fqc",
    "code": "HFSA-AWD-10",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Laboratory Practical / Hybrid Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Laboratory testing, sampling plans, calibration, standard deviations, and documentation for quality control inspectors.",
    "full_description": "Quality control protects brand reputation through objective physical, chemical, and organoleptic measurements. The Award in Food Quality Control trains inspectors and technicians in sampling methodologies (AQL standards), testing equipment calibration, documentation, and defect management.",
    "target_audience": [
      "Quality Control (QC) Inspectors and Lab Technicians",
      "Incoming Raw Material Quality Analysts",
      "Packaging Quality Inspectors",
      "Food Technology Graduates entering QC roles"
    ],
    "learning_outcomes": [
      "Execute statistically sound sampling plans (Acceptable Quality Level - AQL)",
      "Calibrate laboratory testing equipment (refractometers, pH meters, moisture analyzers)",
      "Interpret analytical test data and verify compliance against product specifications",
      "Generate clear, indisputable Certificates of Analysis (COA) and QC release reports"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Sampling Theory & Inspection Plans",
        "topics": [
          "AQL sampling tables (ISO 2859 / IS 2500)",
          "Representative composite sampling",
          "Incoming intake inspection protocols"
        ]
      },
      {
        "module": "Module 2",
        "title": "Basic Food Lab Testing Methods",
        "topics": [
          "Moisture determination and water activity",
          "pH, titratable acidity, and Brix refractometry",
          "Texture and viscosity measurement"
        ]
      },
      {
        "module": "Module 3",
        "title": "Instrumentation Calibration & Records",
        "topics": [
          "Daily calibration schedules and standard buffer verification",
          "Weigh scale and temperature calibration",
          "Equipment maintenance logs"
        ]
      },
      {
        "module": "Module 4",
        "title": "QC Documentation & Release Procedures",
        "topics": [
          "Writing standard inspection reports",
          "Out-of-specification (OOS) investigation",
          "Batch release vs quarantine sign-offs"
        ]
      }
    ],
    "eligibility": "Science background (Food Science, Chemistry, Microbiology, or Life Sciences).",
    "certificate_details": "Haridra Award in Food Quality Control (FQC).",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 111,
    "title": "Award in Food Safety for Management Professionals",
    "slug": "award-in-food-safety-for-management-professionals",
    "code": "HFSA-AWD-11",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Executive Seminar / Live Online / Corporate Boardroom",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Executive-level governance covering legal liability, recall risk mitigation, food safety culture, and board-level risk management.",
    "full_description": "Food safety is an existential business risk requiring strategic boardroom governance. Designed for C-suite executives, general managers, and directors, this executive course outlines statutory director liabilities, financial repercussions of product recalls, crisis communication, and building institutional food safety culture.",
    "target_audience": [
      "Business Owners, CEOs, and Managing Directors",
      "Operations Vice Presidents and General Managers",
      "Corporate Legal and Risk Compliance Officers",
      "Supply Chain Heads & Procurement Directors"
    ],
    "learning_outcomes": [
      "Understand executive and statutory legal responsibilities under food laws",
      "Mitigate enterprise risk associated with contamination outbreaks and recalls",
      "Assess capital expenditure for hygiene infrastructure and modernization",
      "Instill top-down food safety leadership across multi-site enterprises"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "Corporate Governance & Legal Liability",
        "topics": [
          "Director responsibilities under food safety legislation",
          "Statutory inspection powers and legal penalties",
          "Due diligence defense mechanisms"
        ]
      },
      {
        "module": "Module 2",
        "title": "Enterprise Recall & Crisis Management",
        "topics": [
          "Financial and brand damage of product recalls",
          "Crisis communication frameworks",
          "Mock recall protocols and traceability audits"
        ]
      },
      {
        "module": "Module 3",
        "title": "Supply Chain Risk & Vendor Assurance",
        "topics": [
          "Supplier verification and vulnerability assessments",
          "Contract manufacturing oversight",
          "Raw material traceability"
        ]
      },
      {
        "module": "Module 4",
        "title": "Cultivating Food Safety Culture",
        "topics": [
          "Tone from the top: leadership commitment",
          "Food safety KPIs for management reviews",
          "Continuous improvement investment strategy"
        ]
      }
    ],
    "eligibility": "Senior management, executives, directors, or business owners.",
    "certificate_details": "Haridra Award in Food Safety for Management Professionals.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/food-safety-consultant.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 112,
    "title": "Award in Food Safety and Sanitation for Food Manufacturers",
    "slug": "award-in-food-safety-and-sanitation-for-food-manufacturers",
    "code": "HFSA-AWD-12",
    "category_name": "Professional Food Safety Training",
    "duration": "Provided upon enquiry / Program schedule",
    "delivery_mode": "Classroom / Plant Floor Practical / Live Online",
    "fee": "Contact for fee details & institutional concessions",
    "is_eosh_accredited": false,
    "accreditation_details": "Professional Qualification issued under Haridra Food Safety Assurance Industry Standards.",
    "short_description": "Specialized industrial sanitation covering Clean-In-Place (CIP), biofilm remediation, chemical titration, and drainage hygiene.",
    "full_description": "This highly specialized technical program delivers actionable expertise in industrial sanitation engineering. Participants explore Clean-In-Place (CIP) cycle parameters (time, temperature, action, chemical), Clean-Out-of-Place (COP) tanks, enzymatic biofilm eradication, sanitary valve design, and environmental pathogen verification.",
    "target_audience": [
      "Plant Sanitation Managers and CIP Lead Operators",
      "Facility Maintenance Engineers and Plant Supervisors",
      "Hygiene and Food Safety Technical Specialists",
      "Food Plant Sanitation Chemical Technicians"
    ],
    "learning_outcomes": [
      "Optimize Clean-In-Place (CIP) 5-step and 7-step cycles for maximum microbial clearance",
      "Identify and eradicate resilient bacterial biofilms in piping and dead-legs",
      "Safely test and calibrate caustic and acid chemical wash concentrations",
      "Formulate environmental pathogen monitoring swabbing grids (EMP)"
    ],
    "curriculum": [
      {
        "module": "Module 1",
        "title": "CIP / COP Engineering & Fluid Dynamics",
        "topics": [
          "The 4 pillars of sanitation (TACT principles)",
          "Velocity, spray-ball coverage, and pressure drop",
          "Dead-leg identification and elimination"
        ]
      },
      {
        "module": "Module 2",
        "title": "Sanitation Chemistry & Titration",
        "topics": [
          "Caustic soda wash and organic residue dissolution",
          "Acid washes for mineral scale removal",
          "Peracetic acid (PAA) and chlorine dioxide sanitizers"
        ]
      },
      {
        "module": "Module 3",
        "title": "Biofilm Dynamics & Remediation",
        "topics": [
          "Biofilm formation stages on stainless steel",
          "Enzymatic and oxidative biofilm destruction",
          "Pre-operational visual and ATP verification"
        ]
      },
      {
        "module": "Module 4",
        "title": "Drainage, Zoning & Pathogen Grids",
        "topics": [
          "Hygienic drainage design and trap sanitation",
          "Environmental Monitoring Programs (EMP)",
          "Corrective actions for positive environmental swabs"
        ]
      }
    ],
    "eligibility": "Experience in food manufacturing, maintenance engineering, or facility sanitation.",
    "certificate_details": "Haridra Award in Food Safety and Sanitation for Food Manufacturers.",
    "featured": true,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "professional_award"
  },
  {
    "id": 212,
    "title": "Food Safety and Hygiene",
    "slug": "food-safety-and-hygiene",
    "code": "HFSA-BFST-01",
    "category_name": "B.Tech Food Science and Technology",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Campus Workshop / Interactive Classroom / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Industrial hygiene principles, biological and chemical hazard control, personal hygiene standards, and factory sanitation protocols.",
    "full_description": "This subject introduces food science students to the fundamental principles of industrial hygiene and safety compliance. Learners explore contamination pathways in processing plants, prerequisite hygiene programs (PRPs), personal sanitization regimens, and the regulatory framework governing factory-floor hygiene standards.",
    "target_audience": [
      "Food engineering & technology students preparing for production QA and technical operations.",
      "Students enrolled in or pursuing B.Tech Food Science & Technology",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Microbial and chemical hazard identification in food processing",
      "Prerequisite programs (PRPs) and personal hygiene discipline",
      "Sanitation Standard Operating Procedures (SSOP) design",
      "Zoning, air quality, and water purity in manufacturing"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Microbial and chemical hazard identification in food processing",
          "Prerequisite programs (PRPs) and personal hygiene discipline"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Sanitation Standard Operating Procedures (SSOP) design",
          "Zoning, air quality, and water purity in manufacturing"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Conducting factory-floor personal hygiene checks",
          "Verifying sanitation chemicals and contact times",
          "Authoring sanitation logs and hygiene non-conformance reports"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Tech Food Science & Technology and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "student_subject",
    "academic_track": "btech-food-tech",
    "academic_category_name": "B.Tech Food Science and Technology"
  },
  {
    "id": 213,
    "title": "Quality Control in Food Production",
    "slug": "quality-control-in-food-production",
    "code": "HFSA-BFST-02",
    "category_name": "B.Tech Food Science and Technology",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Campus Workshop / Laboratory Practical / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Analytical inspection methods, statistical quality control, defect categorization, and batch record verification.",
    "full_description": "Quality control is the frontline defense in food manufacturing. This subject provides rigorous exposure to in-line sampling protocols, raw material intake verification, Certificate of Analysis (COA) reviews, and statistical process control (SPC) techniques used across modern food processing plants.",
    "target_audience": [
      "Students targeting QA/QC laboratory technician and quality inspector careers.",
      "Students enrolled in or pursuing B.Tech Food Science & Technology",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Raw material receiving inspection and testing protocols",
      "Statistical process control and tolerance tracking",
      "Non-conformance grading (Minor, Major, Critical)",
      "Verification of batch documentation and traceability records"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Raw material receiving inspection and testing protocols",
          "Statistical process control and tolerance tracking"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Non-conformance grading (Minor, Major, Critical)",
          "Verification of batch documentation and traceability records"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Performing statistical batch sampling and defect logging",
          "Verifying raw material specifications against supplier COAs",
          "Establishing critical control point inspection logs"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Tech Food Science & Technology and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "student_subject",
    "academic_track": "btech-food-tech",
    "academic_category_name": "B.Tech Food Science and Technology"
  },
  {
    "id": 214,
    "title": "Food Packaging Technology",
    "slug": "food-packaging-technology",
    "code": "HFSA-BFST-03",
    "category_name": "B.Tech Food Science and Technology",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Technical Demo / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Packaging materials, barrier characteristics, modified atmosphere packaging (MAP), and seal integrity testing.",
    "full_description": "Modern packaging preserves food safety, prevents spoilage, and extends shelf-life. This subject covers food contact material regulations, migration safety testing, oxygen and moisture barrier kinetics, vacuum and modified atmosphere packaging (MAP), and sustainable biodegradable materials.",
    "target_audience": [
      "Undergraduates focusing on packaging development, logistics, and processing engineering.",
      "Students enrolled in or pursuing B.Tech Food Science & Technology",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Food contact materials compliance and global migration limits",
      "Modified atmosphere packaging (MAP) and gas flushing principles",
      "Seal integrity testing, burst testing, and vacuum decay methods",
      "Eco-friendly and biodegradable food packaging innovations"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Food contact materials compliance and global migration limits",
          "Modified atmosphere packaging (MAP) and gas flushing principles"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Seal integrity testing, burst testing, and vacuum decay methods",
          "Eco-friendly and biodegradable food packaging innovations"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Conducting package seal leakage and dye penetration tests",
          "Evaluating food packaging material compatibility with food matrices",
          "Reviewing migration test reports and compliance certificates"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Tech Food Science & Technology and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "student_subject",
    "academic_track": "btech-food-tech",
    "academic_category_name": "B.Tech Food Science and Technology"
  },
  {
    "id": 215,
    "title": "Sensory Evaluation of Food Products",
    "slug": "sensory-evaluation-of-food-products",
    "code": "HFSA-BFST-04",
    "category_name": "B.Tech Food Science and Technology",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Practical Sensory Lab / Campus Workshop / Interactive",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Sensory panel screening, discrimination testing, descriptive profiling, and consumer acceptance analytics.",
    "full_description": "Sensory evaluation links scientific formulation with human perception. This subject trains students in structured sensory laboratory setup, discrimination testing (triangle, duo-trio), descriptive quantitative analysis, panelist screening, and organoleptic quality verification during shelf-life studies.",
    "target_audience": [
      "Food science students aiming for R&D, new product formulation (NPD), and QA roles.",
      "Students enrolled in or pursuing B.Tech Food Science & Technology",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Physiology of human taste, aroma, texture, and visual perception",
      "Sensory panel selection, training, and blind testing protocols",
      "Discrimination testing and quantitative descriptive analysis (QDA)",
      "Statistical evaluation of sensory testing data"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Physiology of human taste, aroma, texture, and visual perception",
          "Sensory panel selection, training, and blind testing protocols"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Discrimination testing and quantitative descriptive analysis (QDA)",
          "Statistical evaluation of sensory testing data"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Setting up a standard sensory testing booth and blind sample flight",
          "Running triangle difference tests for formulation changes",
          "Mapping organoleptic degradation across accelerated shelf-life studies"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Tech Food Science & Technology and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "student_subject",
    "academic_track": "btech-food-tech",
    "academic_category_name": "B.Tech Food Science and Technology"
  },
  {
    "id": 216,
    "title": "Nutritional Labeling Regulations",
    "slug": "nutritional-labeling-regulations",
    "code": "HFSA-BFST-05",
    "category_name": "B.Tech Food Science and Technology",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Regulatory Seminar / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "FSSAI and Codex labeling laws, allergen disclosures, nutritional panel calculation, and regulatory claim substantiation.",
    "full_description": "Food labels communicate essential nutritional facts and statutory warnings to consumers. This subject covers FSSAI Packaging & Labelling regulations, mandatory nutritional declaration formats, serving size calculations, allergen warnings, date marking (Best Before vs Expiry), and health claim substantiation.",
    "target_audience": [
      "Students aspiring to regulatory affairs, food compliance, and product branding careers.",
      "Students enrolled in or pursuing B.Tech Food Science & Technology",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Statutory labeling requirements under national and international standards",
      "Calculating nutritional fact panels from laboratory analytical data",
      "Allergen declaration requirements and cross-contact advisories",
      "Nutritional and health claim substantiation guidelines"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Statutory labeling requirements under national and international standards",
          "Calculating nutritional fact panels from laboratory analytical data"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Allergen declaration requirements and cross-contact advisories",
          "Nutritional and health claim substantiation guidelines"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Reviewing commercial artwork proofs for compliance and statutory font heights",
          "Formulating allergen warning boxes and net quantity statements",
          "Drafting ingredient declarations conforming to descending order rules"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Tech Food Science & Technology and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-btech-food-tech.jpg",
    "program_type": "student_subject",
    "academic_track": "btech-food-tech",
    "academic_category_name": "B.Tech Food Science and Technology"
  },
  {
    "id": 217,
    "title": "Organic Farming Practices",
    "slug": "organic-farming-practices",
    "code": "HFSA-BAGR-01",
    "category_name": "B.Sc. Agriculture",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Field Practical / Campus Workshop / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Organic soil management, bio-inputs, organic certification compliance, and natural crop defense systems.",
    "full_description": "Organic farming requires rigorous ecological discipline and formal certification integrity. This subject covers conversion processes, organic soil biology, bio-fertilizers, organic manure composting, biological pest control, and national/international organic certification standards.",
    "target_audience": [
      "Agriculture students aiming for agribusiness, organic consulting, and farm management roles.",
      "Students enrolled in or pursuing B.Sc. Agriculture",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Principles of organic agriculture and farm conversion timelines",
      "Bio-fertilizers, green manures, and compost preparation",
      "Organic seed standards and non-chemical pest prevention",
      "Organic certification documentation and traceability requirements"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Principles of organic agriculture and farm conversion timelines",
          "Bio-fertilizers, green manures, and compost preparation"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Organic seed standards and non-chemical pest prevention",
          "Organic certification documentation and traceability requirements"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Designing organic crop rotation schedules",
          "Formulating farm-level organic input production plans",
          "Reviewing internal audit checklists for organic farm certification"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Agriculture and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-agriculture.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-agriculture",
    "academic_category_name": "B.Sc. Agriculture"
  },
  {
    "id": 218,
    "title": "Introduction to Sustainable Agriculture",
    "slug": "introduction-to-sustainable-agriculture",
    "code": "HFSA-BAGR-02",
    "category_name": "B.Sc. Agriculture",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Case Studies / Field Demonstrations",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Resource conservation, water efficiency, carbon-smart farming, and resilient agricultural food systems.",
    "full_description": "Sustainable agriculture balances high-yield productivity with long-term ecosystem vitality. Students explore conservation tillage, precision irrigation, agro-forestry, integrated farming systems (IFS), carbon sequestration in agricultural soils, and climate-resilient crop selection.",
    "target_audience": [
      "Students interested in agricultural sustainability, rural development, and environmental agronomy.",
      "Students enrolled in or pursuing B.Sc. Agriculture",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Water stewardship and micro-irrigation management",
      "Conservation agriculture and minimal soil disturbance",
      "Integrated farming systems combining crops, livestock, and aquaculture",
      "Climate-resilient cropping and carbon-smart agriculture"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Water stewardship and micro-irrigation management",
          "Conservation agriculture and minimal soil disturbance"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Integrated farming systems combining crops, livestock, and aquaculture",
          "Climate-resilient cropping and carbon-smart agriculture"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Assessing farm water budgets and irrigation efficiency",
          "Evaluating multi-tier integrated farming layouts",
          "Measuring farm carbon footprint and biodiversity indicators"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Agriculture and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-agriculture.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-agriculture",
    "academic_category_name": "B.Sc. Agriculture"
  },
  {
    "id": 219,
    "title": "Pest Management Techniques",
    "slug": "pest-management-techniques",
    "code": "HFSA-BAGR-03",
    "category_name": "B.Sc. Agriculture",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Field Scout Training / Campus Workshop / Hybrid",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Integrated Pest Management (IPM), biological control agents, pheromone monitoring, and pesticide residue controls.",
    "full_description": "Pest management must safeguard crop health while preventing chemical residue contamination in the food chain. This subject teaches Economic Threshold Levels (ETL), beneficial predator propagation, pheromone trapping, bio-botanicals, and regulatory maximum residue limits (MRLs).",
    "target_audience": [
      "Agriculture students preparing for plant protection, ag-input consulting, and field operations.",
      "Students enrolled in or pursuing B.Sc. Agriculture",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Integrated Pest Management (IPM) core principles and field scouting",
      "Biological control using parasitoids, predators, and pathogens",
      "Pheromone lures, sticky traps, and physical barriers",
      "Safe pesticide handling and Maximum Residue Limits (MRL) compliance"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Integrated Pest Management (IPM) core principles and field scouting",
          "Biological control using parasitoids, predators, and pathogens"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Pheromone lures, sticky traps, and physical barriers",
          "Safe pesticide handling and Maximum Residue Limits (MRL) compliance"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Calculating Economic Threshold Levels (ETL) through field scouting",
          "Installing and monitoring pheromone trap densities",
          "Drafting chemical withholding period and MRL risk mitigation plans"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Agriculture and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-agriculture.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-agriculture",
    "academic_category_name": "B.Sc. Agriculture"
  },
  {
    "id": 220,
    "title": "Soil Health Assessment",
    "slug": "soil-health-assessment",
    "code": "HFSA-BAGR-04",
    "category_name": "B.Sc. Agriculture",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Soil Testing Lab Practical / Classroom / Hybrid",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Physical, chemical, and biological soil diagnostics, nutrient profiling, and fertility restoration plans.",
    "full_description": "Healthy soil is the foundation of food safety and crop nutrition. This subject covers soil sampling methodologies, pH and electrical conductivity testing, organic carbon determination, macronutrient and micronutrient diagnostics, and biological microbial activity indicators.",
    "target_audience": [
      "Students targeting soil testing laboratories, agronomic advisory, and precision farming.",
      "Students enrolled in or pursuing B.Sc. Agriculture",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Soil sampling techniques and sample preparation standards",
      "Chemical parameters: pH, electrical conductivity, cation exchange capacity (CEC)",
      "Soil organic matter and biological soil health indicators",
      "Interpreting soil health card reports and customized fertilizer recommendations"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Soil sampling techniques and sample preparation standards",
          "Chemical parameters: pH, electrical conductivity, cation exchange capacity (CEC)"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Soil organic matter and biological soil health indicators",
          "Interpreting soil health card reports and customized fertilizer recommendations"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Performing soil sample collection and field kit testing",
          "Interpreting laboratory soil analysis reports",
          "Formulating balanced soil amendment and remediation strategies"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Agriculture and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-agriculture.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-agriculture",
    "academic_category_name": "B.Sc. Agriculture"
  },
  {
    "id": 221,
    "title": "Agroecology Principles",
    "slug": "agroecology-principles",
    "code": "HFSA-BAGR-05",
    "category_name": "B.Sc. Agriculture",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Field Seminars / Interactive Studies",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Ecological farm design, biodiversity conservation, polyculture systems, and ecological food sovereignty.",
    "full_description": "Agroecology studies agricultural production as an integral part of natural ecological systems. Students explore biodiversity dynamics, polyculture cropping, agro-ecosystem nutrient loops, biological pest suppression, and the socio-economic dimensions of regenerative farming.",
    "target_audience": [
      "Undergraduates focusing on ecological agriculture, research, and sustainable development.",
      "Students enrolled in or pursuing B.Sc. Agriculture",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Agro-ecosystem structure, trophic relationships, and nutrient cycles",
      "Companion planting, intercropping, and biodiversity corridors",
      "Soil-plant-microbe interactions and mycorrhizal networks",
      "Agroecological transitions and sustainable community food systems"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Agro-ecosystem structure, trophic relationships, and nutrient cycles",
          "Companion planting, intercropping, and biodiversity corridors"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Soil-plant-microbe interactions and mycorrhizal networks",
          "Agroecological transitions and sustainable community food systems"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Mapping farm biodiversity and pollinator habitats",
          "Designing multi-crop spatial and temporal configurations",
          "Conducting ecological resilience assessments for agrarian holdings"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Agriculture and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-agriculture.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-agriculture",
    "academic_category_name": "B.Sc. Agriculture"
  },
  {
    "id": 222,
    "title": "Food Microbiology Basics",
    "slug": "food-microbiology-basics",
    "code": "HFSA-BFSC-01",
    "category_name": "B.Sc. Food Science",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Laboratory Practical / Classroom / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Pathogen biology, spoilage organisms, laboratory culturing, and microbiological safety standards.",
    "full_description": "Food microbiology is essential for preventing foodborne illness and preserving product integrity. Students study bacterial growth kinetics, major foodborne pathogens (Salmonella, Listeria, E. coli, Clostridium), spoilage molds and yeasts, beneficial fermentation bacteria, and laboratory aseptic techniques.",
    "target_audience": [
      "Food science & microbiology students targeting laboratory analyst and QA careers.",
      "Students enrolled in or pursuing B.Sc. Food Science",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Bacterial growth curves, D-values, and z-values",
      "Common food-borne pathogens, intoxication, and infectious mechanisms",
      "Microbial spoilage patterns in dairy, meat, and processed produce",
      "Aseptic sampling, agar plating, and colony enumeration"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Bacterial growth curves, D-values, and z-values",
          "Common food-borne pathogens, intoxication, and infectious mechanisms"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Microbial spoilage patterns in dairy, meat, and processed produce",
          "Aseptic sampling, agar plating, and colony enumeration"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Performing serial dilutions and pour/spread plate counts",
          "Identifying pathogen colonies and interpreting test plates",
          "Evaluating environmental swab test data against statutory limits"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Food Science and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-food-science",
    "academic_category_name": "B.Sc. Food Science"
  },
  {
    "id": 223,
    "title": "Introduction to Food Preservation Techniques",
    "slug": "introduction-to-food-preservation-techniques",
    "code": "HFSA-BFSC-02",
    "category_name": "B.Sc. Food Science",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Technical Demos / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Thermal processing, dehydration, cold chain preservation, water activity control, and hurdle technology.",
    "full_description": "Preserving food quality requires a multi-hurdle approach to inhibit microbial proliferation and enzymatic degradation. This subject covers thermal processing (pasteurization, retort canning), dehydration kinetics, freezing crystallization, water activity (aw) control, and hurdle technology.",
    "target_audience": [
      "Students aspiring to food processing, packaging line oversight, and technical QA.",
      "Students enrolled in or pursuing B.Sc. Food Science",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Thermal lethality concepts, pasteurization, and commercial sterility",
      "Freezing mechanics, ice crystal morphology, and thawing quality",
      "Water activity (aw) modification and drying methods",
      "Hurdle technology: synergistic combinations of pH, aw, and temperature"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Thermal lethality concepts, pasteurization, and commercial sterility",
          "Freezing mechanics, ice crystal morphology, and thawing quality"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Water activity (aw) modification and drying methods",
          "Hurdle technology: synergistic combinations of pH, aw, and temperature"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Calculating thermal lethality (F0 values) for heat treatments",
          "Measuring food water activity (aw) and equilibrium moisture content",
          "Formulating multi-barrier hurdle preservation models for novel foods"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Food Science and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-food-science",
    "academic_category_name": "B.Sc. Food Science"
  },
  {
    "id": 224,
    "title": "Food Additives and Their Applications",
    "slug": "food-additives-and-their-applications",
    "code": "HFSA-BFSC-03",
    "category_name": "B.Sc. Food Science",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Formulation Practical / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Technological functional classes, INS numbering, Maximum Permissible Limits (MPL), and safety assessments.",
    "full_description": "Food additives enhance texture, preservation, color, and stability. This subject provides in-depth technical knowledge of preservatives, emulsifiers, stabilizers, colorants, antioxidants, and leavening agents, alongside the Codex INS system and national regulatory permissible limits.",
    "target_audience": [
      "Food science students aiming for product development, formulation, and compliance roles.",
      "Students enrolled in or pursuing B.Sc. Food Science",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Functional categories of intentional food additives",
      "Safety evaluations: ADI (Acceptable Daily Intake) and NOAEL indices",
      "Maximum Permissible Limits (MPL) across food categories",
      "Clean-label reformulation and natural additive alternatives"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Functional categories of intentional food additives",
          "Safety evaluations: ADI (Acceptable Daily Intake) and NOAEL indices"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Maximum Permissible Limits (MPL) across food categories",
          "Clean-label reformulation and natural additive alternatives"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Calculating batch addition rates of preservatives within statutory limits",
          "Verifying additive compliance from technical raw material data sheets",
          "Conducting stability trials for emulsifier and antioxidant blends"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Food Science and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-food-science",
    "academic_category_name": "B.Sc. Food Science"
  },
  {
    "id": 225,
    "title": "Flavor Chemistry",
    "slug": "flavor-chemistry",
    "code": "HFSA-BFSC-04",
    "category_name": "B.Sc. Food Science",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Aroma Chemistry Demo / Hybrid",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Aroma volatiles, Maillard reaction pathways, extraction chemistry, flavor stability, and encapsulation.",
    "full_description": "Flavor is a complex interaction of volatile aroma compounds and non-volatile taste molecules. Students explore chemical families of flavor (esters, aldehydes, terpenes, pyrazines), thermal reaction flavor generation (Maillard, caramelization), flavor degradation, and encapsulation technology.",
    "target_audience": [
      "Students interested in flavor houses, R&D sensory laboratories, and confectionery/beverage sciences.",
      "Students enrolled in or pursuing B.Sc. Food Science",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Volatile aroma compounds and olfaction receptor mechanisms",
      "Maillard reaction kinetics and cooked flavor chemistry",
      "Natural flavor extraction and essential oil fractionation",
      "Flavor stability, oxidation protection, and encapsulation techniques"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Volatile aroma compounds and olfaction receptor mechanisms",
          "Maillard reaction kinetics and cooked flavor chemistry"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Natural flavor extraction and essential oil fractionation",
          "Flavor stability, oxidation protection, and encapsulation techniques"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Assessing aroma profiles using standardized sensory wheels",
          "Evaluating lipid oxidation and off-flavor development in foods",
          "Reviewing flavor encapsulation performance in beverage and snack matrices"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Food Science and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-food-science",
    "academic_category_name": "B.Sc. Food Science"
  },
  {
    "id": 226,
    "title": "Plant-Based Foods and Nutrition",
    "slug": "plant-based-foods-and-nutrition",
    "code": "HFSA-BFSC-05",
    "category_name": "B.Sc. Food Science",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Product Workshop / Hybrid Online",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Plant protein functionality, alternative dairy/meat formulation, nutritional profiling, and clean-label processing.",
    "full_description": "The plant-based food sector is rapidly evolving. This subject covers plant protein extraction (pea, soy, oat, faba), texturization technology (extrusion, shear cell), anti-nutritional factors (phytates, lectins), micronutrient fortification, and clean-label formulation.",
    "target_audience": [
      "Students aspiring to modern food tech, alternative protein innovation, and nutritional science.",
      "Students enrolled in or pursuing B.Sc. Food Science",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Functional properties of plant proteins: solubility, gelation, emulsification",
      "Extrusion and texturization techniques for meat analogs",
      "De-flavoring plant proteins and masking beany off-notes",
      "Nutritional equivalence, amino acid scoring, and allergen oversight"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Functional properties of plant proteins: solubility, gelation, emulsification",
          "Extrusion and texturization techniques for meat analogs"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "De-flavoring plant proteins and masking beany off-notes",
          "Nutritional equivalence, amino acid scoring, and allergen oversight"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Formulating balanced plant-based beverage and protein alternative bases",
          "Evaluating anti-nutritional reduction through thermal and fermentation methods",
          "Verifying nutritional profile and amino acid completeness against standards"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Food Science and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-food-science.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-food-science",
    "academic_category_name": "B.Sc. Food Science"
  },
  {
    "id": 227,
    "title": "Customer Service Excellence",
    "slug": "customer-service-excellence",
    "code": "HFSA-BHTM-01",
    "category_name": "B.Sc. Hotel Management",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Service Simulation / Interactive Workshop / Classroom",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Guest journey mapping, luxury hospitality etiquette, allergy and dietary communication, and crisis recovery.",
    "full_description": "Delivering exceptional hospitality requires flawless service delivery and acute food safety communication. This subject teaches guest touchpoint management, luxury service standards, safe handling of guest allergy requests, service recovery during operational errors, and hospitality leadership.",
    "target_audience": [
      "Hotel management students preparing for front office, guest relations, and F&B service leadership.",
      "Students enrolled in or pursuing B.Sc. Hotel Management",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Guest expectations and touchpoint design in commercial hospitality",
      "Communication protocols for dietary restrictions and severe allergens",
      "Service recovery frameworks (HEAR / LAST methodologies)",
      "Customer satisfaction measurement and feedback analysis"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Guest expectations and touchpoint design in commercial hospitality",
          "Communication protocols for dietary restrictions and severe allergens"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Service recovery frameworks (HEAR / LAST methodologies)",
          "Customer satisfaction measurement and feedback analysis"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Simulating front-of-house guest dietary requirement briefing",
          "Role-playing service escalation and complaint resolution",
          "Conducting service audit walkthroughs in dining environments"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Hotel Management and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-hotel-mgmt.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-hotel-mgmt",
    "academic_category_name": "B.Sc. Hotel Management"
  },
  {
    "id": 228,
    "title": "Food and Beverage Management",
    "slug": "food-and-beverage-management",
    "code": "HFSA-BHTM-02",
    "category_name": "B.Sc. Hotel Management",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Commercial Kitchen Practical / Classroom / Hybrid",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Commercial kitchen hygiene, food cost controls, menu engineering, and buffet temperature compliance.",
    "full_description": "F&B operations demand strict coordination between culinary production, hygiene compliance, and financial profitability. This subject covers kitchen sanitation zoning, raw food receiving procedures, buffet temperature holding, menu engineering, and food safety record-keeping.",
    "target_audience": [
      "Hospitality students targeting executive chef, sous chef, and F&B director roles.",
      "Students enrolled in or pursuing B.Sc. Hotel Management",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Commercial kitchen layout, sanitation zoning, and cross-contamination prevention",
      "Temperature controls: hot-holding, blast chilling, and refrigerated display",
      "Menu planning, food cost calculation, and portion standardization",
      "Kitchen inspection checklists and health department readiness"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Commercial kitchen layout, sanitation zoning, and cross-contamination prevention",
          "Temperature controls: hot-holding, blast chilling, and refrigerated display"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Menu planning, food cost calculation, and portion standardization",
          "Kitchen inspection checklists and health department readiness"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Maintaining hot and cold food holding temperature log sheets",
          "Conducting kitchen hygiene audits using standard regulatory forms",
          "Calculating portion costs and waste variance across prep shifts"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Hotel Management and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-hotel-mgmt.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-hotel-mgmt",
    "academic_category_name": "B.Sc. Hotel Management"
  },
  {
    "id": 229,
    "title": "Event Planning Basics",
    "slug": "event-planning-basics",
    "code": "HFSA-BHTM-03",
    "category_name": "B.Sc. Hotel Management",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Event Simulation / Interactive Seminar",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "High-volume banquet operations, outdoor catering hygiene, event timelines, and crowd management.",
    "full_description": "Large events and banquet operations present unique food safety and logistical challenges. This subject covers event run-sheet creation, bulk food transport safety, temporary satellite kitchen setups, banquet buffet turnover, and hygiene compliance during mass catering.",
    "target_audience": [
      "Students aspiring to banquet management, convention sales, and corporate event planning.",
      "Students enrolled in or pursuing B.Sc. Hotel Management",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Banquet and catering event run-sheets and operational planning",
      "Transporting hot and cold bulk foods safely to off-premise venues",
      "Temporary water supply and waste disposal for outdoor events",
      "Mass gathering crowd flow, hand sanitation, and safety oversight"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Banquet and catering event run-sheets and operational planning",
          "Transporting hot and cold bulk foods safely to off-premise venues"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Temporary water supply and waste disposal for outdoor events",
          "Mass gathering crowd flow, hand sanitation, and safety oversight"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Drafting an event food safety management plan for a 500+ guest banquet",
          "Establishing time-temperature monitoring logs for satellite catering",
          "Conducting vendor and subcontractor food hygiene verifications"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Hotel Management and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-hotel-mgmt.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-hotel-mgmt",
    "academic_category_name": "B.Sc. Hotel Management"
  },
  {
    "id": 230,
    "title": "Sustainable Hospitality Practices",
    "slug": "sustainable-hospitality-practices",
    "code": "HFSA-BHTM-04",
    "category_name": "B.Sc. Hotel Management",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Classroom / Sustainability Audit Workshop / Hybrid",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Zero-food-waste kitchen routines, single-use plastic reduction, eco-procurement, and energy-efficient kitchens.",
    "full_description": "Sustainable hospitality is a core priority for modern hotels and restaurants. Students explore commercial kitchen food waste measurement, composting and bio-methanation, single-use plastic elimination, sustainable local food procurement, and eco-certified hospitality benchmarking.",
    "target_audience": [
      "Undergraduates targeting luxury resort management, environmental auditing, and hospitality consulting.",
      "Students enrolled in or pursuing B.Sc. Hotel Management",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Kitchen waste tracking and circular food recycling systems",
      "Energy and water efficiency in commercial kitchen equipment",
      "Sustainable procurement and fair-trade ingredient sourcing",
      "Eco-certifications and environmental management systems (EMS)"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Kitchen waste tracking and circular food recycling systems",
          "Energy and water efficiency in commercial kitchen equipment"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Sustainable procurement and fair-trade ingredient sourcing",
          "Eco-certifications and environmental management systems (EMS)"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Performing a kitchen food waste audit and identifying prevention points",
          "Drafting an institutional single-use plastic phaseout roadmap",
          "Developing a green hotel dining operational checklist"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Hotel Management and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-hotel-mgmt.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-hotel-mgmt",
    "academic_category_name": "B.Sc. Hotel Management"
  },
  {
    "id": 231,
    "title": "Basic Bar Management and Mixology",
    "slug": "basic-bar-management-and-mixology",
    "code": "HFSA-BHTM-05",
    "category_name": "B.Sc. Hotel Management",
    "duration": "Flexible module sessions / Inquire for next academic cohort",
    "delivery_mode": "Beverage Lab / Bar Simulation / Classroom",
    "fee": "Student Concessions & Institutional Packages Available",
    "is_eosh_accredited": false,
    "accreditation_details": "Academic Enrichment & Industry Bridging Subject by Haridra Food Safety Assurance Pvt. Ltd. (Note: Haridra provides specialized industry training and does not award university degrees).",
    "short_description": "Bar sanitation standards, ice hygiene, glassware cleaning protocols, beverage inventory, and responsible service.",
    "full_description": "Bar operations require precise sanitation standards alongside beverage craft. This subject covers ice machine microbiological hygiene, glasswashing temperature verification, draught line cleaning schedules, garnish preparation safety, responsible alcohol service, and bar inventory controls.",
    "target_audience": [
      "Hospitality students preparing for bar management, beverage directorship, and restaurant supervision.",
      "Students enrolled in or pursuing B.Sc. Hotel Management",
      "Graduates seeking industry-oriented practical food safety skills",
      "Academic institutions seeking specialized technical workshops"
    ],
    "learning_outcomes": [
      "Bar station layout, speed rails, and sanitary workflow design",
      "Ice machine sanitation and ice scoop storage contamination prevention",
      "Glassware cleaning, chemical sanitizing, and beer-clean glass standards",
      "Draught beer line maintenance and cocktail ingredient freshness control"
    ],
    "curriculum": [
      {
        "module": "Focus Area 1",
        "title": "Theoretical Principles & Regulatory Context",
        "topics": [
          "Bar station layout, speed rails, and sanitary workflow design",
          "Ice machine sanitation and ice scoop storage contamination prevention"
        ]
      },
      {
        "module": "Focus Area 2",
        "title": "Practical Plant & Field Implementation",
        "topics": [
          "Glassware cleaning, chemical sanitizing, and beer-clean glass standards",
          "Draught beer line maintenance and cocktail ingredient freshness control"
        ]
      },
      {
        "module": "Focus Area 3",
        "title": "Industry Applications & Verification",
        "topics": [
          "Performing bar opening and closing hygiene walkthrough checklists",
          "Executing draught line chemical sanitization and rinse verification",
          "Logging garnish shelf-life and safe temperature holding"
        ]
      }
    ],
    "eligibility": "Open to undergraduate and postgraduate students in B.Sc. Hotel Management and allied sciences.",
    "certificate_details": "Haridra Certificate of Subject Completion upon active participation and practical assignment review.",
    "featured": false,
    "is_published": true,
    "image_url": "/images/training-bsc-hotel-mgmt.jpg",
    "program_type": "student_subject",
    "academic_track": "bsc-hotel-mgmt",
    "academic_category_name": "B.Sc. Hotel Management"
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
