---
title: "NexLed Support Platform"
description: "I designed and built a dedicated support platform for NexLed, solving an EU compliance requirement while creating a better experience for every customer that needs help."
category: "Design"
cover:
  src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
  alt: "NexLed Support Platform highlighted project preview"
sections:
  - component: "ProjTextCardLeft"
    props:
      heading: "NexLed Support Platform"
      labels:
        - "UI/UX Design"
        - "Frontend Development"
        - "Compliance"
      paragraph2: >-
        EU regulations coming into effect at the end of 2024 require companies
        selling consumer products to publicly provide repair instructions 
        both for professional servicing and end-user self-repair  with clear,
        accessible step-by-step guidance. With NexLed's B2C expansion underway,
        compliance wasn't optional.
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        I researched what form that compliance needed to take. The EU is
        planning a dedicated digital platform for this data  similar in
        concept to EPREL  but it was still in the planning phase when the
        deadline hit. Crucially, the current rules are deliberately open: the
        information just needs to be publicly accessible, whether through a
        dedicated page, existing product pages, or downloadable documents.
        That flexibility was the opening I needed.
      paragraph2: >-
        Rather than doing the minimum  a PDF tucked into a product page  I
        proposed solving two problems at once. First, build something that
        genuinely complies and stays future-proof as the regulations evolve.
        Second, build a proper support platform that NexLed didn't have at all.
        Until now, users needing help had to send an email or navigate clunky
        contact forms buried in the main site. With B2C sales growing, that
        wasn't sustainable  and mixing support content into store or product
        pages creates an SEO mess where users land in the wrong place entirely.
        A dedicated support platform fixes both. The proposal was approved.
  - component: "ProjTextCardLeft"
    props:
      heading: ""
      paragraph1: >-
        Before the design phase I worked on the images and content. The repair
        and installation guides needed clear, precise step-by-step visuals 
        and with no budget for a proper photoshoot, I used the same
        AI-assisted workflow from the Amazon project: real product photos taken
        on my phone, refined in Photoshop, then guided through an AI generation
        process to achieve clean instructional-style imagery. Every image still
        required a manual pass for accuracy and detail.
      paragraph2: >-
        One decision I'm glad I made early was storing all page content in JSON
        files rather than hardcoding it into the templates. It means the text,
        links, and document references can be updated without touching the
        design or the structure  particularly useful for a compliance page
        where the content will need to change as regulations develop and
        products are added.
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        With the content and images in place, I moved to design. The support
        platform has three core user flows: finding a repair guide,
        downloading documents, and contacting support. These flows needed to be
        frictionless  not because they're technically complex, but because the
        context in which someone uses a support page matters. A user arriving
        there already has a problem. Every unnecessary step erodes both their
        patience and their trust in the brand. Getting to the right information
        quickly is the entire point.
      paragraph2: >-
        That principle drove the structural decisions. I kept the platform to
        five page layouts with shared components, adapting slightly between
        pages rather than designing from scratch each time. It was a deliberate
        constraint  fewer unique layouts means faster implementation, easier
        maintenance, and a more coherent experience. The index page does the
        heaviest lifting: three clear entry points for the main flows, with FAQ
        and warranty information surfaced directly on the page so users don't
        have to navigate somewhere else for common questions. The repair guides
        and document download pages share the same list and card structure,
        keeping the experience consistent and the component library lean.
  - component: "ProjTextCardLeft"
    props:
      heading: ""
      paragraph1: >-
        The wireframes are complete across all three fidelity stages.
        Implementation is underway, with the same token and component
        foundation used across the other NexLed projects keeping everything
        consistent as it moves to code.
      paragraph2: ""
  - component: "ProjTextCardRight"
    props:
      textStyle: "subtitle"
      paragraph1: "**Tools:** Figma · HTML · CSS · JavaScript · PHP · Photoshop · Google Nano Banana"
      paragraph2: "**Type:** UI/UX Design · Frontend Development · Regulatory Compliance"
---

