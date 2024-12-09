import {
  organs,
  archi,
  ses,
  aep,
  bioprint,
  metal,
  sla,
  multimaterial,
  fdm,
  braincomputing,
  hexagon,
  aeroponic,
  desaline,
  exoskeleton,
  solarpanel,
  healing,
  levitation,
    mobile,
    backend,
    creator,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Bio-Integrated Brain-Computer Interface Enclosures",
      icon: braincomputing,
    },
    {
      title: "Modular Hexagonal Wind Turbines",
      icon: hexagon,
    },
    {
      title: "Self-Sustaining Aeroponic Agriculture Pods",
      icon: aeroponic,
    },
    {
      title: "Printable Water Filtration and Desalination Systems",
      icon: desaline,
    },
    {
      title: "Lightweight Exoskeletons for Labor Assistance",
      icon: exoskeleton,
    },
    {
      title: "Solar Panel Printing for Decentralized Energy",
      icon: solarpanel,
    },
    {
      title: "3D-Printed Electromagnetic Therapy Modules",
      icon: healing,
    },
    {
      title: "Magnetic Levitation Energy Systems",
      icon: levitation,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "The Humble Beginning",
      icon: fdm,
      technology: "Entry-Level FDM (Fused Deposition Modeling) Printer",
      iconBg: "#f13E56",
      date: "2024",
      points: [
        "Affordable and accessible, these printers use biodegradable PLA filament to create simple, durable designs",
        "Custom guitar knobs for musicians, showcasing individuality.",
        "Quirky keychains, mini sculptures, and desk organizers.",
        "Personalized home decor items like coasters and photo frames.",
      ],
    },
    {
      title: "Pushing Boundaries with Multi-Material Printing",
      technology: "Dual-Extruder 3D Printer",

      icon: multimaterial,
      iconBg: "#E6DEDD",
      date: "2025",
      points: [
        "Enables printing with multiple materials, including flexible and rigid filaments in a single print.",
        "Customizable ergonomic grips for tools and gadgets.",
        "Hybrid fashion accessories (e.g., sunglasses with flexible frames).",
        "Sustainable multi-material toys for children, free of toxic chemicals.",
      ],
    },
    {
      title: "Mastering Precision with SLA and Resin Printing",
      technology: "Stereolithography (SLA) Printer",
      icon: sla,
      iconBg: "#383E56",
      date: "2027",
      points: [
        "Achieves unparalleled precision and smooth finishes using photopolymer resin cured by UV light",
        "High-detail medical models for education and diagnosis",
        "Jewelry with intricate designs, promoting personalized luxury.",
        "Replacement parts for small appliances to extend product life.",
      ],
    },
    {
      title: "Building with Strength—Metal and Composite Printing",
      technology: "Metal Sintering (DMLS) and Carbon Fiber Printers",
      icon: metal,
      iconBg: "#E6DEDD",
      date: "2029",
      points: [
        "Prints lightweight but strong parts using metal powders or composite materials like carbon fiber.",
        "Custom bicycle frames and automotive components for enthusiasts.",
        "Durable tools and hardware for local repair businesses.",
        "Modular furniture pieces designed for longevity and adaptability.",
      ],
    },
    {
      title: "Bioprinting and Healthcare Integration",
      technology: "Bio-Compatible Material Printers",
      icon: bioprint,
      iconBg: "#E6DEDD",
      date: "2032",
      points: [
        "Prints biocompatible scaffolds and implants, enabling medical advancements.",
        "Custom prosthetics tailored to individual needs.",
        "Dental implants and orthodontic solutions made to order.",
        "Medical-grade wearables that monitor health metrics.",
      ],
    },
    {
      title: "Advanced Electronics Printing",
      technology: "Conductive Ink and Circuit Printing",
      icon: aep,
      iconBg: "#E6DEDD",
      date: "2035",
      points: [
        "Allows embedding functional electronic circuits within 3D-printed objects.",
        "Custom-built smart devices and IoT components for home automation.",
        "Wearable technology like fitness bands or augmented reality glasses.",
        "Repairable consumer electronics, reducing e-waste.",
      ],
    },
    {
      title: "Sustainable Energy Solutions",
      technology: "Large-Scale Additive Manufacturing for Renewable Systems",
      icon: ses,
      iconBg: "#E6DEDD",
      date: "2038",
      points: [
        "Prints entire energy solutions like wind turbines and solar panel frames using recyclable materials.",
        "Modular hexagonal wind turbines for household energy generation.",
        "Printable solar concentrators for decentralized power systems.",
        "Compact hydropower turbines for small-scale water energy harvesting.",
      ],
    },
    {
      title: "Architectural Revolution",
      technology: "Construction-Grade 3D Printing",
      icon: archi,
      iconBg: "#E6DEDD",
      date: "2042",
      points: [
        "Uses concrete and sustainable materials to print entire buildings.",
        "Modular housing that adapts to changing family sizes.",
        "Sustainable urban infrastructure, such as pedestrian bridges and park installations.",
        "Emergency shelters for disaster relief, printed in hours.",
      ],
    },
    {
      title: "Creating the Future—Functional Organs and Beyond",
      technology: "Bioprinting Functional Tissues and Organs",
      icon: organs,
      iconBg: "#E6DEDD",
      date: "2045",
      points: [
        "Prints living tissues with cellular compatibility, reducing organ shortages.",
        "Personalized organ transplants, eliminating waiting lists.",
        "On-demand tissue for research, reducing reliance on animal testing.",
        "Implants for neurological enhancements, bridging the human-technology gap.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };