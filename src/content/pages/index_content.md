---
title: "Figma Sandbox"
sections:
  - component: "HeaderSection"
    props:
      heading: "Gonçalo Mendonça"
      cardProps:
        primary: "Designer merging visual creativity and problem solving into impactful digital solutions."
        secondary: "Based in Porto, Portugal · Currently open to new roles · The website is a work in progress "
        btn1Label: "Download CV (PDF)"
        btn1Href: "/files/CV_Gonçalo_Mendonça.pdf"
        btn2Label: "Get in Touch"
        btn2Href: "#contact"
        btn3Label: "Explore My Work"
        btn3Href: "#highlighted-projects"
      imageBlockProps:
        src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
        alt: "Portrait of Gonçalo"

  - component: "AboutSection"
    props:
      heading: "About Me"
      cardProps:
        paragraph1: "I’m a designer driven by curiosity and intention. I’m naturally drawn to understanding how things work and how they can improved. I’m constantly exploring, learning and refining the way I think and create, always aiming to elevate the quality of what I put into the world."
        paragraph2: "I don’t approach projects passively. I need to understand the bigger picture. why something exists, what problem it solves, where it fits and what it’s meant to achieve. Whether the goal is growth, clarity or simply adding value, I believe every decision should have a reason behind it. I bring focus, critical thinking and a collaborative mindset, questioning ideas when needed to make sure the work is thoughtful, purposeful and meaningful."
        imageSrc: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
        imageAlt: "Gonçalo Mendonça Profile Picture"
      imageBlockProps:
        src: "/images/Photo.png"
        alt: "Portrait of Gonçalo"

  - component: "HighlightedProjectsSection"
    props:
      heading: "Highlighted Projects"
      projectList:
        - title: "Rebranding Nexled + UI System"
          description: "I redesigned NexLed's visual identity from scratch and built the UI system that puts it into practice across web and digital."
          imageSrc: "/images/projects/project-1/project_1.webp"
          imageAlt: "Highlighted Project"
          labels: ["Design", "UX/UI", "Design"]
          projectSlug: "project-1"
          alignRight: false
        - title: "Amazon Store: Creation, Design & Management"
          description: "I built NexLed's Amazon store from the ground up and designed the full content system that presents the brand and converts the buyer."
          imageSrc: "/images/projects/project-2/project_2.webp"
          imageAlt: "Highlighted Project Right"
          labels: ["E-Commerce", "Content Design", "Brand Compliance"]
          projectSlug: "project-2"
          alignRight: true
        - title: "NexLed Store: Design & Implementation"
          description: "I redesigned NexLed's online store from scratch and built the design system that makes it ready to grow into a full e-commerce experience."
          imageSrc: "/images/projects/project-3/project_3.webp"
          imageAlt: "Highlighted Project Left"
          labels: ["E-Commerce", "UX/UI", "Frontend"]
          projectSlug: "project-3"
          alignRight: false
        - title: "NexLed Support Platform"
          description: "I designed and built a dedicated support platform for NexLed, solving an EU compliance requirement while creating a better experience for every customer that needs help."
          imageSrc: "/images/projects/project-4/project_4.webp"
          imageAlt: "Highlighted Project Right"
          labels: ["Design", "Design", "Design"]
          projectSlug: "project-4"
          alignRight: true
        - title: "EPREL Internal Tool"
          description: "I designed and built an internal tool that automates EU compliance uploads, replacing a slow manual process with something the whole team can use."
          imageSrc: "/images/projects/project-5/project_5.webp"
          imageAlt: "Highlighted Project Left"
          labels: ["Internal Tooling", "UX/UI", "Frontend"]
          projectSlug: "project-5"
          alignRight: false
        - title: "Project Storm"
          description: "I led the artistic direction of Project Storm, producing 3D models, textures, and in-game visual effects while keeping the entire team's output visually consistent."
          imageSrc: "/images/projects/project-6/project_6.webp"
          imageAlt: "Highlighted Project Right"
          labels: ["3D Art", "VFX", "Art Direction"]
          projectSlug: "project-6"
          alignRight: true

  - component: "MoreProjectsSection"
    props:
      heading: "More Projects"
      cardProps:
        filters: ["Design", "UX/UI", "3D", "Motion", "Design", "Design"]
        activeFilter: 0
        projects:
          - src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
            alt: "Project thumbnail"
            caption: "Visual & 3D Production "
            projectSlug: "project-7"
          - src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
            alt: "Project thumbnail"
            caption: "Reset The Sun"
            projectSlug: "project-8"
          - src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
            alt: "Project thumbnail"
            caption: "Better Call Saul"
            projectSlug: "project-9"
          - src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
            alt: "Project thumbnail"
            caption: "Gravity Generator"
            projectSlug: "project-10"
          - src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
            alt: "Project thumbnail"
            caption: "Complience tool for Lorem Inpluns"
          - src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
            alt: "Project thumbnail"
            caption: "Complience tool for Lorem Inpluns"

  - component: "WorkSkillsSection"
    props:
      workHeading: "Work Experience"
      skillsHeading: "All Skills"
      workProps:
        experiences:
          - title: "Web Designer & E-Commerce Manager"
            company: "Tec IT"
            date: "09/2025 – Present"
            description: "I work across web and digital design, taking direct ownership of UI/UX, e-commerce, and visual execution to deliver cohesive and reliable solutions. My role combines hands-on design with system thinking, structured workflows, and cross-platform consistency."
            labels: ["Design", "Design", "Design"]
          - title: "Logistics Operator"
            company: "Carl Zeiss Vision Portugal"
            date: "06/2024 – 06/2025"
            description: "As part of a team, I managed the storage, organization, and shipment of lenses, ensuring accuracy and efficiency in logistics workflow. This role strengthened my attention to detail, time management, and ability to operate effectively under structured requirements."
            labels: ["Logistics", "Logistics", "Logistics"]
          - title: "Art Lead – 3D Modeler, Texture Artist & In-Game VFX Artist"
            company: "Optimizer"
            date: "03/2023 – 06/2023"
            description: "I defined and led the artistic direction of Project Storm, ensuring visual consistency while actively producing 3D models, textures, and in-game visual effects. This role reinforced my leadership and structured approach to creative direction.s"
            labels: ["Design", "Design", "Design"]
      skillsProps:
        categories:
          - title: "Design Tools"
            labels: ["Figma", "Framer", "Photoshop", "Illustrator", "After Effects", "Blender", "Procreate", "Webflow", "WordPress"]
          - title: "Design Tools"
            labels: ["Figma", "Framer", "Photoshop", "Illustrator", "After Effects", "Blender", "Procreate", "Webflow", "WordPress"]
          - title: "Programming Languages"
            labels: ["HTML", "CSS", "JavaScript","SQL", "PHP"]

  - component: "EducationLangSection"
    props:
      heading: "Education & Languages"
      cardProps:
        rows:
          - leftTitle: "Degree in Videogames and Multimedia Design"
            leftSubtitle: "Universidade Lusófona do Porto"
            leftDate: "2020 – 2024"
            rightTitle: "Portuguese"
            rightSubtitle: "Native"
          - leftTitle: "Learn an Introduction to Ecommerce Marketing"
            leftSubtitle: "HubSpot"
            leftDate: "2025"
            rightTitle: "English"
            rightSubtitle: "C1 · Fluent"
          - leftTitle: "Fundamentals of Digital Marketing"
            leftSubtitle: "Google"
            leftDate: "2026"
            rightTitle: "German"
            rightSubtitle: "A1 · Basic"

  - component: "CTASection"
    props:
      cardProps:
        paragraph1: "Thanks for making it this far. This page is a reflection of how I work always building, always refining, never quite finished. It'll keep growing as I do, so feel free to come back. If something caught your eye or you just want to talk, my contacts are right here. I'd love to hear from you."
        paragraph2: ""
  - component: "ContactSection"
    props:
      heading: "Contact's"
      cardProps:
        text: "If anything resonated, don't hesitate to reach out. I'd genuinely love to hear from you."
        btn1Label: "Email"
        btn1Href: "mailto:ggm.work22@gmail.com"
        btn2Label: "LinkedIn"
        btn2Href: "https://www.linkedin.com/in/ggmwork/"
---
