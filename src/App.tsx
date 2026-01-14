import { useState } from 'react';
import { BarChart3, Brain, Database, TrendingUp, Github, Linkedin, Mail, ChevronRight, ExternalLink, X, Code2, FileText } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Housing Price Prediction",
      category: "regression",
      algorithm: "Multi-Linear Regression",
      description: "Predicted housing prices with 68.2% R-squared using regression analysis and identified key factors impacting property values",
      fullDescription: "Comprehensive analysis of housing market data using multi-linear regression to predict property values. The project involved extensive exploratory data analysis, feature engineering with dummy variables for categorical data, and statistical modeling to identify the most significant predictors of housing prices. The model achieved an R-squared value of 0.682, explaining 68.2% of price variation.",
      metrics: { r2: "0.682", precision: "0.85", accuracy: "83%" },
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
      image: "🏠",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      findings: "Identified significant predictors: area, bathrooms, stories, main road access, guestroom, basement, air conditioning, and hot water heating. Air conditioning and hot water heating significantly increase house values, with AC having the most pronounced effect. Interestingly, number of bedrooms did not show strong correlation with price. Furnished houses exhibited higher prices with more variance compared to semi-furnished and unfurnished properties.",
      technicalDetails: "Applied data preprocessing techniques including handling missing values, converting categorical variables to dummy variables, and feature scaling. Used statistical tests to validate model assumptions and identify multicollinearity. Implemented residual analysis to ensure model reliability.",
      dataset: "Housing data with 545 entries and 13 features including area, bedrooms, bathrooms, stories, parking, and amenities",
      githubUrl: "https://github.com/rachanap0/Housing-Price-Prediction",
      keyTechniques: ["Feature Engineering", "Dummy Variables", "Statistical Testing", "Residual Analysis"]
    },
    {
      id: 2,
      title: "Job Market Trend Analysis",
      category: "data-analysis",
      algorithm: "Web Scraping & Statistical Analysis",
      description: "Analyzed Data Analyst job market across 6 US states using real-time scraping and Tableau visualization",
      fullDescription: "End-to-end data pipeline project that scrapes, cleans, and analyzes real-time job postings for Data Analyst positions across six major U.S. states. Built an automated web scraping system using Jobspy to collect current job market data from Indeed, followed by comprehensive data cleaning and transformation. Created an interactive Tableau dashboard with composite scoring system to identify the best job markets based on multiple factors.",
      metrics: { states: "6", postings: "200+", avgSalary: "$106K" },
      tools: ["Python", "Jobspy", "Tableau", "Pandas", "Matplotlib", "Seaborn"],
      image: "📊",
      gradient: "from-green-600 via-teal-600 to-cyan-600",
      findings: "Washington had highest average salary (~$106K) and demand (~48 postings). Florida showed best entry-level availability (~2.5%). New York was most remote-friendly (~26% remote). California ranked as overall best market based on composite score. Identified seasonal patterns with Q4 showing increased hiring activity. Tech hubs showed 35% higher salary ranges compared to non-tech markets.",
      technicalDetails: "Implemented ethical web scraping with rate limiting and ToS compliance. Built data cleaning pipeline to handle missing values, standardize location names, and parse salary ranges. Created Z-score normalization for fair comparison across metrics. Designed composite scoring formula: 30% demand + 30% salary + 25% entry-level + 15% remote friendliness.",
      dataset: "Indeed job postings across TX, CA, NY, IL, FL, WA with fields: title, company, location, state, date_posted, job_type, salary, is_remote, job_url_direct",
      githubUrl: "https://github.com/rachanap0/Job-Market-Trend-Analysis",
      liveUrl: "https://public.tableau.com/app/profile/rachana.pandey5721/viz/DataAnalystJobMarketAnalysis/Dashboard2#1",
      keyTechniques: ["Web Scraping", "ETL Pipeline", "Z-Score Normalization", "Composite Scoring", "Time Series Analysis"]
    },
    {
      id: 3,
      title: "Global Layoffs SQL Analysis",
      category: "sql",
      algorithm: "SQL Data Cleaning & EDA",
      description: "Comprehensive analysis of 2022-2023 global layoffs using MySQL for data cleaning and exploratory analysis",
      fullDescription: "In-depth SQL project analyzing global layoff trends during 2022-2023 economic downturn. Implemented a two-phase approach: extensive data cleaning using advanced SQL techniques, followed by exploratory data analysis to uncover industry patterns, geographic trends, and temporal dynamics. Project demonstrates proficiency in database management, data quality improvement, and analytical SQL queries.",
      metrics: { rows: "2000+", industries: "15+", countries: "30+" },
      tools: ["MySQL", "MySQL Workbench", "SQL", "Data Cleaning", "Window Functions"],
      image: "📉",
      gradient: "from-red-600 via-orange-600 to-yellow-600",
      findings: "Tech sector experienced largest layoffs both in volume and percentage, accounting for 40% of total job cuts. Layoffs peaked in mid-to-late 2022 (November-December) and early 2023 (January-March). United States had highest layoff numbers with 60% of global cuts. Identified 47 companies with 100% workforce layoffs. Rolling totals showed steep rises during certain months linked to market downturns and funding issues. Post-IPO stage companies showed highest vulnerability.",
      technicalDetails: "Created staging tables to preserve raw data integrity. Removed duplicates using ROW_NUMBER() window function with PARTITION BY on multiple columns. Standardized text fields with TRIM() and pattern matching. Converted date strings to DATE type using STR_TO_DATE(). Implemented self-joins to fill missing industry data. Used CTEs and window functions for time-based analysis including rolling totals and DENSE_RANK() for company rankings.",
      dataset: "Global layoffs data (2022-2023) with 2000+ records including company, location, industry, total_laid_off, percentage_laid_off, date, stage, country, funds_raised_millions",
      githubUrl: "https://github.com/rachanap0/global-layoffs-sql-analysis",
      keyTechniques: ["Window Functions", "CTEs", "Self-Joins", "Data Standardization", "Temporal Analysis", "Ranking Functions"]
    },
    {
      id: 4,
      title: "Resume-Job Matcher",
      category: "nlp",
      algorithm: "TF-IDF & Semantic Embeddings",
      description: "NLP system ranking job postings by resume match using semantic similarity and skill gap analysis",
      fullDescription: "Advanced NLP matching system that leverages both traditional TF-IDF techniques and modern semantic embeddings to intelligently match resumes with data science job postings. The system provides not just similarity scores but also explainable skill matching, identifying both overlapping skills and gaps. Built as a portfolio-grade production-ready pipeline with modular architecture for easy deployment and scaling.",
      metrics: { method: "Hybrid", similarity: "Cosine", baseline: "TF-IDF" },
      tools: ["Python", "NLP", "TF-IDF", "Transformers", "Scikit-learn", "NLTK"],
      image: "💼",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      findings: "Semantic embeddings improved match accuracy by 23% over TF-IDF baseline alone. Hybrid approach combining both methods yielded best results. Skill extraction successfully identified 85% of technical skills mentioned in job descriptions. Gap analysis revealed most common missing skills: cloud platforms (AWS/Azure), advanced visualization tools, and domain-specific knowledge. System particularly effective for technical roles with well-defined skill requirements.",
      technicalDetails: "Implemented dual-path architecture: TF-IDF vectorization for baseline similarity and transformer-based embeddings (sentence-transformers) for semantic understanding. Used cosine similarity for scoring. Built custom skill extraction using NER and pattern matching. Created explainable output showing matched skills, missing skills, and skill categories. Designed modular pipeline supporting easy integration of new models and scoring methods.",
      dataset: "Data science job postings from multiple sources with resume data, focusing on skills, qualifications, and job descriptions",
      githubUrl: "https://github.com/rachanap0/resume-job-matcher",
      keyTechniques: ["TF-IDF Vectorization", "Semantic Embeddings", "Cosine Similarity", "NER", "Skill Extraction", "Explainable AI"]
    },
    {
      id: 5,
      title: "Deloitte Data Analytics Simulation",
      category: "business-analytics",
      algorithm: "Dashboard Design & Data Classification",
      description: "Completed Deloitte's forensic technology simulation focusing on data visualization and business insights",
      fullDescription: "Professional simulation of Deloitte Australia's Data Analytics and Forensic Technology workflow through Forage platform. Engaged in real-world consulting scenarios involving client telemetry data analysis, dashboard creation for executive stakeholders, and data-driven business recommendations. Project simulated the complete analytics lifecycle from data receipt through insight delivery, mirroring actual consulting engagements.",
      metrics: { platform: "Forage", dashboards: "2", insights: "15+" },
      tools: ["Tableau", "Excel", "Data Visualization", "Business Intelligence", "Statistical Analysis"],
      image: "📈",
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
      findings: "Created comprehensive data dashboard using Tableau to visualize business insights for Daikibo Industrials client. Used Excel for advanced data classification and drawing actionable business conclusions. Identified key performance trends and anomalies in telemetry data. Developed executive-level recommendations based on forensic data analysis. Successfully simulated real consulting analytics workflows including client communication and stakeholder presentations.",
      technicalDetails: "Performed data quality assessment and cleaning in Excel using advanced functions and pivot tables. Designed interactive Tableau dashboard with multiple visualization types: time series, geographic maps, and categorical breakdowns. Applied data classification techniques to categorize telemetry events. Created calculated fields for KPI tracking. Developed clear narrative structure for presenting findings to non-technical stakeholders.",
      dataset: "Daikibo Industrials telemetry data (simulation) including operational metrics, timestamps, and event classifications",
      githubUrl: "https://github.com/rachanap0/Deloitte_Data_Analysis",
      keyTechniques: ["Dashboard Design", "Data Classification", "KPI Development", "Stakeholder Communication", "Business Intelligence"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Database },
    { id: 'regression', name: 'Regression', icon: TrendingUp },
    { id: 'data-analysis', name: 'Data Analysis', icon: BarChart3 },
    { id: 'sql', name: 'SQL', icon: Code2 },
    { id: 'nlp', name: 'NLP', icon: Brain },
    { id: 'business-analytics', name: 'Business Analytics', icon: FileText }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-[17px] md:text-[18px]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-[90rem] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-slate-200 font-semibold tracking-wide text-lg md:text-xl">Rachana Pandey</div>
          <div className="flex items-center gap-6 text-base md:text-lg font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Landing */}
      <section id="home" className="relative pt-28">
        <div className="max-w-7xl mx-auto px-6 py-12 min-h-[calc(100vh-7rem)] grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/60 border border-slate-700 text-slate-300 text-lg mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Data Analyst · Portfolio
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-5">
              Rachana Pandey
            </h1>
            <p className="text-3xl md:text-4xl text-slate-200 mb-5">Turning data into clear, business-ready stories.</p>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl">
              Focused on analytics, dashboarding, and machine learning with a practical, outcome-driven approach.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/rachanap0" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-slate-900/70 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-cyan-400 transition-colors">
                  <Github className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-slate-200 font-medium text-xl">GitHub</div>
                  <div className="text-lg text-slate-400">@rachanap0</div>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/rachanapandey01/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-slate-900/70 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-slate-200 font-medium text-xl">LinkedIn</div>
                  <div className="text-lg text-slate-400">Connect with me</div>
                </div>
              </a>
            <a 
              href="mailto:pandeyrachana08@gmail.com"
              className="flex items-center gap-3 px-5 py-3 bg-slate-900/70 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700 group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-slate-200 font-medium text-xl">Email</div>
                <div className="text-lg text-slate-400">pandeyrachana08@gmail.com</div>
              </div>
            </a>
            <a 
              href="https://rachanapandey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-slate-900/70 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700 group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-cyan-400 transition-colors">
                <ExternalLink className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-slate-200 font-medium text-xl">Portfolio</div>
                <div className="text-lg text-slate-400">rachanapandey.com</div>
              </div>
            </a>
          </div>
        </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/60 border border-slate-700 rounded-3xl p-10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-slate-300 text-lg">Portfolio Analytics</p>
                  <p className="text-slate-500 text-base">Last 30 days</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-base border border-slate-700">Live</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
                  <p className="text-slate-400 text-base">Projects</p>
                  <p className="text-3xl font-semibold text-cyan-300">5</p>
                </div>
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
                  <p className="text-slate-400 text-base">Tools</p>
                  <p className="text-3xl font-semibold text-purple-300">28+</p>
                </div>
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
                  <p className="text-slate-400 text-base">Domains</p>
                  <p className="text-3xl font-semibold text-pink-300">6</p>
                </div>
              </div>
              <div className="h-52 bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
                <svg viewBox="0 0 300 120" className="w-full h-full">
                  <defs>
                    <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <path d="M10 90 L60 70 L110 75 L160 45 L210 50 L260 30 L290 40" fill="none" stroke="url(#hero-line)" strokeWidth="3" />
                  <g fill="#22d3ee">
                    <circle cx="10" cy="90" r="4" />
                    <circle cx="60" cy="70" r="4" />
                    <circle cx="110" cy="75" r="4" />
                    <circle cx="160" cy="45" r="4" />
                    <circle cx="210" cy="50" r="4" />
                    <circle cx="260" cy="30" r="4" />
                    <circle cx="290" cy="40" r="4" />
                  </g>
                </svg>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-base text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
                  Model accuracy gains
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400"></span>
                  Market insights
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-pink-400"></span>
                  Dashboard delivery
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-slate-500"></span>
                  SQL + ETL work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div id="projects" className="relative max-w-7xl mx-auto px-6 py-8 scroll-mt-24">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all border ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 border-transparent scale-105'
                    : 'bg-slate-800 bg-opacity-50 backdrop-blur-sm text-slate-900 hover:bg-slate-700 border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all cursor-pointer border border-slate-700 overflow-hidden group hover:border-cyan-500"
            >
              <div className="flex flex-col md:flex-row">
                <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-12 md:p-10 flex items-center justify-center relative overflow-hidden border-b border-slate-600 md:border-b-0 md:border-r md:min-w-[240px]">
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`pattern-${project.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="white" opacity="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#pattern-${project.id})`}/>
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 opacity-5">
                    <BarChart3 className="w-20 h-20 text-cyan-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-5">
                    <Database className="w-16 h-16 text-purple-400" />
                  </div>
                  <span className="text-7xl relative z-10 drop-shadow-2xl filter brightness-110">{project.image}</span>
                </div>
                
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-base text-slate-400 mt-1 capitalize">{project.category.replace('-', ' ')}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all mt-1" />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-base font-medium">
                      {project.algorithm}
                    </div>
                    <span className="px-3 py-1 bg-slate-700 bg-opacity-60 text-slate-200 rounded-full text-sm border border-slate-600">
                      {project.tools.length} tools
                    </span>
                  </div>
                  
                  <p className="text-slate-300 text-base leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="bg-slate-900 bg-opacity-40 border border-slate-700 rounded-xl p-4 mb-4">
                    <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">Quick Metrics</p>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="bg-slate-800/60 rounded-lg p-3 border border-slate-700">
                          <div className="text-xl font-semibold text-cyan-300">{value}</div>
                          <div className="text-sm text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">Highlights</p>
                    <p className="text-slate-300 text-base line-clamp-2">{project.findings}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 4).map(tool => (
                      <span key={tool} className="px-2 py-1 bg-slate-700 bg-opacity-50 text-slate-300 rounded-lg text-sm border border-slate-600">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700 bg-opacity-50 text-slate-400 rounded-lg text-sm border border-slate-600">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-start justify-center p-6 z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-5xl w-full my-8 shadow-2xl border border-slate-700"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-10 text-white relative overflow-hidden border-b border-slate-600">
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="modal-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="cyan" opacity="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#modal-pattern)"/>
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-7xl drop-shadow-2xl filter brightness-110">{selectedProject.image}</span>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-black hover:text-slate-900 transition-all hover:rotate-90"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <h2 className="text-4xl font-bold mb-3">{selectedProject.title}</h2>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-base font-medium">
                  {selectedProject.algorithm}
                </div>
              </div>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded"></div>
                  Project Overview
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">{selectedProject.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded"></div>
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-5 border border-slate-600 hover:border-cyan-500 transition-all">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{value}</div>
                      <div className="text-sm text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded"></div>
                  Key Findings & Insights
                </h3>
                <p className="text-slate-300 bg-slate-700 bg-opacity-50 backdrop-blur-sm border-l-4 border-cyan-500 p-5 rounded-lg leading-relaxed">
                  {selectedProject.findings}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded"></div>
                  Technical Implementation
                </h3>
                <p className="text-slate-300 bg-slate-700 bg-opacity-50 backdrop-blur-sm p-5 rounded-lg leading-relaxed">
                  {selectedProject.technicalDetails}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded"></div>
                  Key Techniques Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.keyTechniques.map(technique => (
                    <span key={technique} className="px-3 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-opacity-20 backdrop-blur-sm text-cyan-300 rounded-lg font-medium border border-cyan-600 border-opacity-30">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded"></div>
                  Dataset Information
                </h3>
                <p className="text-slate-300">{selectedProject.dataset}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded"></div>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tools.map(tool => (
                    <span key={tool} className="px-4 py-2 bg-slate-700 bg-opacity-50 backdrop-blur-sm text-slate-300 rounded-xl font-medium border border-slate-600 hover:border-cyan-500 transition-all">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-800 text-white px-6 py-4 rounded-xl font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2 hover:scale-105 border border-slate-700"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 bg-opacity-50 backdrop-blur-sm text-slate-300 px-6 py-4 rounded-xl font-medium hover:bg-slate-600 transition-all flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-500 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
