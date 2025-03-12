"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "../component/Footer"

export default function ServicesPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Services data with detailed descriptions and images
  const services = [
    {
      title: "Proposal & Protocol Development",
      description:
        "Our team of experts develops comprehensive proposals and protocols for health-related projects and public health research. We ensure methodological rigor, ethical considerations, and alignment with funding requirements. Our proposals are tailored to address specific health challenges while maintaining scientific validity and feasibility.",
    
      image: "/image/proposal.png",
    },
    {
      title: "Data Collection Tools",
      description:
        "We develop sophisticated quantitative and qualitative data collection tools designed for health research. Our tools include structured questionnaires, interview guides, focus group discussion protocols, and observation checklists. We also conduct comprehensive data collection activities with trained personnel to ensure high-quality data capture.",
    
      image: "/image/datacollection.jpg",
    },
    {
      title: "Digital Data Collection Training",
      description:
        "We provide hands-on training on modern digital data collection tools including ODK, SurveyCTO, SurveySolutions, and other mobile data collection platforms. Our training covers form design, deployment strategies, data management, quality control measures, and troubleshooting. We also offer services to digitize your existing data collection tools for efficient field implementation.",
      image: "/image/digitaldata.jpg",
    },
    {
      title: "Data Analysis Training",
      description:
        "Our comprehensive training programs on quantitative data analysis software cover STATA, R, SPSS, and other statistical packages. We offer beginner to advanced level courses that include data cleaning, descriptive statistics, inferential statistics, regression analysis, and advanced modeling techniques. All training is tailored to health research applications with practical exercises.",
      image: "/image/software.jpg",
    },
    {
      title: "Qualitative Analysis Training",
      description:
        "We deliver specialized training on qualitative data analysis software including NVivo, ATLAS.ti, and other CAQDAS tools. Our training covers coding strategies, thematic analysis, framework analysis, and interpretation techniques. Participants learn to organize, analyze and derive meaningful insights from interviews, focus groups, and other qualitative data sources.",
      image: "/image/noiviv.jpg",
    },
    {
      title: "Data Visualization Training",
      description:
        "Our data visualization training focuses on creating impactful visual representations using PowerBI, ArcGIS, Tableau, and other visualization tools. Participants learn to transform complex health data into clear, compelling visuals that communicate key insights effectively. The training covers dashboard creation, geospatial mapping, and interactive report development.",
      image: "/image/visualdata.jpg",
    },
    {
      title: "Professional Development",
      description:
        "We deliver accredited Continuous Professional Development (CPD) training for healthcare professionals. Our CPD programs are designed to enhance clinical skills, research capabilities, and management competencies. All programs are aligned with current health sector requirements and delivered by experienced facilitators with practical industry knowledge.",
      image: "/image/cpd.png",
    },
    {
      title: "Events Organization",
      description:
        "We organize and facilitate high-quality health conferences, workshops, panel discussions, and training sessions. Our comprehensive event management includes agenda development, speaker coordination, venue selection, materials preparation, and post-event evaluation. We ensure that all events achieve their learning objectives and engagement goals.",
      image: "/image/eventorg.jpg",
    },
    {
      title: "Public Health Data Analysis",
      description:
        "Our team performs sophisticated quantitative and qualitative public health data analysis. We employ advanced statistical methods, epidemiological techniques, and mixed-methods approaches to analyze health data. Our analysis includes descriptive statistics, inferential analysis, spatial analysis, and thematic analysis of qualitative data to generate actionable insights.",
      image: "/image/healthdata-analysis.jpg",
    },
    {
      title: "Technical Writing",
      description:
        "We provide specialized training in technical abstract and manuscript writing for health professionals. Our training covers scientific writing principles, structure of research papers, abstract development, journal selection, and submission processes. We also offer review and editing services for technical documents to ensure they meet publication standards.",
      image: "/image/technicalwriting.jpg",
    },
    {
      title: "Health Impact Assessment",
      description:
        "We conduct comprehensive investment health impact assessments (HIA) to evaluate the potential health effects of policies, programs, and projects. Our assessments include screening, scoping, assessment of health impacts, recommendations for health-optimizing measures, and monitoring frameworks to track implementation and outcomes.",
      image: "/image/impact.jpg",
    },
    {
      title: "Health Facility Consultation",
      description:
        "We provide expert consultation services during the planning and construction of health facilities including hospitals, clinics, and health centers. Our consultation covers facility design optimization, workflow efficiency, infection control measures, equipment specification, and compliance with health facility standards and regulations.",
      image: "/image/consult.jpg",
    },
  ]

  

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[485px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/service.jpg')" }}
      >
        {/* Black Overlay for Readability */}
        <div className="absolute inset-0 h-[485px] bg-black bg-opacity-70 flex flex-col items-center justify-center text-white">
          {/* Animated Header */}
          <motion.div
            className="relative inline-block text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold border-b-4 border-blue-500 pb-2">Our Services</h1>
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-center text-lg px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Assist organizations in delivering top-notch services and help people become more adept at research and data
            analysis.
          </motion.p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-blue-800">Our Expertise & Services</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            High-end Health Solutions Consulting PLC offers a comprehensive range of services to meet your health
            research, data analysis, and professional development needs.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Service Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image || "/placeholder.svg?height=400&width=600"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              
              <div className="p-6 flex flex-col flex-grow border-t border-gray-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

  


      {/* Footer */}
      <Footer />
    </div>
  )
}

// 