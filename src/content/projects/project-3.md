---
title: "NexLed Store: Design & Implementation"
description: "I redesigned NexLed's online store from scratch and built the design system that makes it ready to grow into a full e-commerce experience."
category: "E-Commerce"
cover:
  src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
  alt: "NexLed Store highlighted project preview"
sections:
  - component: "ProjTextCardLeft"
    props:
      heading: "NexLed Store  Design & Implementation"
      labels:
        - "UI/UX Design"
        - "Frontend Development"
        - "E-Commerce"
      paragraph2: >-
        NexLed had an existing online store, but by the time the rebranding and
        Amazon projects were underway, it was clear the store wasn't keeping
        pace. The design was outdated, the product presentation was weak, and
        it still carried the Tec IT name rather than NexLed  a problem not
        just visually but for SEO and search discoverability. I proposed a full
        redesign and rebuild, and it was approved.
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        The first decision came early and wasn't entirely mine to make. I had
        been building a case for migrating to WooCommerce  a proper e-commerce
        backend that would handle stock, pricing, and order management in a way
        the current stack couldn't. I'd started learning it, saw the long-term
        value, and argued for it. My superior reversed the call: with traffic
        and sales volume still low, the ongoing fees weren't justified yet.
        We'd stay on the existing stack  HTML, JavaScript, PHP, and Tailwind,
        which I had introduced to the project specifically for its token system
        and its compatibility with AI-assisted coding, where a consistent
        utility class structure makes it far easier to generate and replicate
        components accurately.
      paragraph2: >-
        I disagreed with the WooCommerce decision on principle, and I still
        think it's the right move eventually. But staying on the existing stack
        had an unintended upside: it narrowed the scope. I could focus entirely
        on the frontend  what I do best  and leave backend improvements for a
        later phase rather than trying to rebuild everything at once. A clearer
        focus meant a faster, better result.
  - component: "ProjTextCardLeft"
    props:
      heading: ""
      paragraph1: >-
        There was a more interesting constraint underneath that, though. The
        store doesn't support direct purchases  users submit an order request,
        and we respond with a quote that includes shipping costs. This exists
        for legitimate reasons: shipping costs vary and we don't publicly
        display stock levels. But designing a store around that flow, while
        also wanting to grow toward real transactions in the future, created a
        deliberate tension I had to design through. My decision was to build
        for the future state now  using purchase language, buy flows, and
        conversion-oriented page structure  so that when payment functionality
        is eventually added, the experience is already there waiting for it.
        The backend changes; the design doesn't have to.
      paragraph2: ""
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        Before wireframing anything, I researched stores both inside and
        outside the LED industry. What I was looking for was how to serve two
        types of users simultaneously: the technical buyer who wants full
        specifications before committing, and the general consumer who needs
        the key benefits communicated clearly without being buried in data.
        Most stores in the industry choose one or the other. I wanted this one
        to do both  technical depth accessible to those who want it, essential
        information surfaced clearly for everyone else.
      paragraph2: >-
        From that research I defined five core user flows: Purchase, Browse
        Products, Browse Categories, Contact, and About Us. These gave me the
        structure I needed to move into wireframes with purpose rather than
        assumption. The wireframe process moved through three fidelity stages.
        Low fidelity was built on the bones of the existing pages 
        understanding what was already there before replacing it  with new
        pages like About Us and Contact added where they were absent. Mid
        fidelity introduced spacing tokens and consolidated the section logic.
        High fidelity applied the UI component library and surfaced a handful
        of cases where new components were needed that hadn't been anticipated
        in the original system.
  - component: "ProjTextCardLeft"
    props:
      heading: ""
      paragraph1: >-
        The page I spent the most time on was the PDP  the product detail
        page. It's the page that either converts a visitor or loses them, and
        the existing version wasn't doing the work. I wanted it to feel
        considered and capable, more like a control panel than a product
        listing.
      paragraph2: >-
        The layout splits the page into two clear zones. On the right, all
        product variations presented openly  the technical choices the user
        needs to make, visible at once rather than buried in dropdowns. This
        structure also reinforces one of NexLed's core brand values directly in
        the UI: customization. The product isn't a fixed item, it's a
        configurable solution, and the page should feel like that. On the left,
        a large image carousel anchored to the product, with the title,
        highlighted features, and full specifications laid out in a hierarchy
        that rewards both the quick scanner and the detailed reader. The cart
        itself extends this logic  rather than a simple quantity input, it
        gives the user full control over their chosen configuration,
        reinforcing that sense of having made a precise, informed decision.
        Recommended products sit at the bottom, giving the user a natural next
        step even if the current product isn't quite right.
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        The result is a store that finally matches the brand it represents 
        clean, structured, and designed to grow into what the company needs it
        to become.
      paragraph2: ""
  - component: "ProjTextCardLeft"
    props:
      heading: ""
      paragraph1: >-
        Implementation is underway. Even as someone who doesn't consider
        himself a programmer, I want to build this on a solid foundation 
        consistent tokens, reusable components, a structure that someone else
        can pick up and extend without having to reverse-engineer decisions.
        The same system running across the other NexLed projects carries
        through here, keeping everything coherent as design becomes code.
      paragraph2: ""
  - component: "ProjTextCardRight"
    props:
      textStyle: "subtitle"
      paragraph1: "**Tools:** Figma · HTML · CSS · JavaScript · Tailwind · PHP"
      paragraph2: "**Type:** UI/UX Design · Frontend Development · E-Commerce"
---

**NexLed Store  Design & Implementation***UI/UX Design · Frontend Development · E-Commerce*

---

NexLed had an existing online store, but by the time the rebranding and Amazon projects were underway, it was clear the store wasn't keeping pace. The design was outdated, the product presentation was weak, and it still carried the Tec IT name rather than NexLed  a problem not just visually but for SEO and search discoverability. I proposed a full redesign and rebuild, and it was approved.

The first decision came early and wasn't entirely mine to make. I had been building a case for migrating to WooCommerce  a proper e-commerce backend that would handle stock, pricing, and order management in a way the current stack couldn't. I'd started learning it, saw the long-term value, and argued for it. My superior reversed the call: with traffic and sales volume still low, the ongoing fees weren't justified yet. We'd stay on the existing stack  HTML, JavaScript, PHP, and Tailwind, which I had introduced to the project specifically for its token system and its compatibility with AI-assisted coding, where a consistent utility class structure makes it far easier to generate and replicate components accurately.

I disagreed with the WooCommerce decision on principle, and I still think it's the right move eventually. But staying on the existing stack had an unintended upside: it narrowed the scope. I could focus entirely on the frontend  what I do best  and leave backend improvements for a later phase rather than trying to rebuild everything at once. A clearer focus meant a faster, better result.

There was a more interesting constraint underneath that, though. The store doesn't support direct purchases  users submit an order request, and we respond with a quote that includes shipping costs. This exists for legitimate reasons: shipping costs vary and we don't publicly display stock levels. But designing a store around that flow, while also wanting to grow toward real transactions in the future, created a deliberate tension I had to design through. My decision was to build for the future state now  using purchase language, buy flows, and conversion-oriented page structure  so that when payment functionality is eventually added, the experience is already there waiting for it. The backend changes; the design doesn't have to.

---

Before wireframing anything, I researched stores both inside and outside the LED industry. What I was looking for was how to serve two types of users simultaneously: the technical buyer who wants full specifications before committing, and the general consumer who needs the key benefits communicated clearly without being buried in data. Most stores in the industry choose one or the other. I wanted this one to do both  technical depth accessible to those who want it, essential information surfaced clearly for everyone else.

From that research I defined five core user flows: Purchase, Browse Products, Browse Categories, Contact, and About Us. These gave me the structure I needed to move into wireframes with purpose rather than assumption.

The wireframe process moved through three fidelity stages. Low fidelity was built on the bones of the existing pages  understanding what was already there before replacing it  with new pages like About Us and Contact added where they were absent. Mid fidelity introduced spacing tokens and consolidated the section logic. High fidelity applied the UI component library and surfaced a handful of cases where new components were needed that hadn't been anticipated in the original system. *[Images]*

The hardest part of the wireframing stage wasn't the layout  it was the content decisions. It's tempting to fill space with images and explanatory text everywhere, to over-explain and over-present. The discipline was deciding what to cut: keeping only what genuinely helped the user and trusting that a clean, uncluttered page communicates confidence better than a full one.

---

The page I spent the most time on was the PDP  the product detail page. It's the page that either converts a visitor or loses them, and the existing version wasn't doing the work. I wanted it to feel considered and capable, more like a control panel than a product listing.

The layout splits the page into two clear zones. On the right, all product variations presented openly  the technical choices the user needs to make, visible at once rather than buried in dropdowns. This structure also reinforces one of NexLed's core brand values directly in the UI: customization. The product isn't a fixed item, it's a configurable solution, and the page should feel like that. On the left, a large image carousel anchored to the product, with the title, highlighted features, and full specifications laid out in a hierarchy that rewards both the quick scanner and the detailed reader. The cart itself extends this logic  rather than a simple quantity input, it gives the user full control over their chosen configuration, reinforcing that sense of having made a precise, informed decision. Recommended products sit at the bottom, giving the user a natural next step even if the current product isn't quite right. *[Images]*

The result is a store that finally matches the brand it represents  clean, structured, and designed to grow into what the company needs it to become.

---

Implementation is underway. Even as someone who doesn't consider himself a programmer, I want to build this on a solid foundation  consistent tokens, reusable components, a structure that someone else can pick up and extend without having to reverse-engineer decisions. The same system running across the other NexLed projects carries through here, keeping everything coherent as design becomes code.

---

**Tools:** Figma · HTML · CSS · JavaScript · Tailwind · PHP
**Type:** UI/UX Design · Frontend Development · E-Commerce
