---
title: "EPREL Internal Tool"
description: "I designed and built an internal tool that automates EU compliance uploads, replacing a slow manual process with something the whole team can use."
category: "Internal Tooling"
cover:
  src: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
  alt: "EPREL Internal Tool highlighted project preview"
sections:
  - component: "ProjTextCardLeft"
    props:
      heading: "NexLed EPREL Internal Tool"
      labels:
        - "UI/UX Design"
        - "Web Development"
        - "Internal Tooling"
      paragraph2: >-
        When NexLed decided to expand into B2C markets  through Amazon and their
        own online store  a compliance requirement surfaced that nobody had a
        clean answer for. Every product intended for consumer sale in the EU
        needs to be registered in the EPREL database and carry an official
        Energy Label. Without it, the product simply can't be sold legally. I
        was tasked with figuring out how to handle this at scale.
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        The EPREL system does offer an upload method beyond its slow,
        one-product-at-a-time web form: an XML and ZIP-based submission that, if
        structured correctly according to EU specifications, gets a product
        published directly upon approval. The moment I understood this, the
        direction became clear  we needed an internal tool that automated or at
        least simplified the creation of those files, so the team could
        register products without fighting the official interface every time.
      paragraph2: >-
        My initial proposal was to connect the tool directly to our company
        database, fetch the product data automatically, and map it into the
        required XML format. My superior approved the idea and I started
        designing around it. But after digging into the database itself, I
        quickly realized this wasn't feasible in the timeframe we needed  the
        internal data was too disorganized and inconsistently structured to
        build reliably on top of. I raised this with the team and suggested
        that reorganizing the database should happen in parallel. At the time
        they pushed back on it. They came around to it later, and that
        restructuring is now underway  but it meant the automatic approach had
        to wait.
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        So I adapted. Instead of pulling data automatically, I built a manual
        input form where a user enters the product values themselves, and the
        tool generates the correct ZIP file ready for EPREL upload. It sounds
        simple, but compared to the official system it's a meaningful
        improvement: where EPREL limits you to one product per submission, this
        tool lets you create unlimited files in a single export. I also added a
        built-in viewer for the EPREL database  so users can check existing
        product specs, labels, and fiches without leaving the tool.
      paragraph2: ""
  - component: "ProjTextCardLeft"
    props:
      heading: "A decision I want to explain: why I coded before I designed."
      paragraph1: >-
        At this point the tool was functional but visually rough. I made a
        deliberate choice to leave the design phase for later, for two reasons.
        First, NexLed had no defined visual identity yet  no brand book, no UI
        components  and designing a product without that foundation would mean
        rebuilding it anyway once the brand was established. Second, and more
        personally: I find it difficult to design interfaces for something I
        haven't yet built. The real user flows, the edge cases, the moments
        where the form needs to be more forgiving  those only become visible
        when the thing actually exists. Designing on top of a working product,
        even a rough one, leads to better decisions than designing into the
        abstract.
      paragraph2: >-
        So I let the project sit while I worked on the NexLed rebranding and UI
        component library. Then I came back.
  - component: "ProjTextCardWideImage"
    props:
      heading: ""
      paragraph1: >-
        With a component library in place and a clearer picture of how the tool
        actually behaved, I mapped out three core user flows I wanted to get
        right: uploading a new product, browsing and downloading existing
        labels and fiches from the company folder, and searching the EPREL
        database directly. Each one needed to be self-evident  no training
        required, no ambiguous steps.
      paragraph2: >-
        The layout decision followed from that. Rather than matching the
        structure of the other NexLed pages, I went with a dashboard approach:
        a persistent sidebar with clear navigation, the main action always
        centered on the page, and a secondary card on the right for quick
        contextual actions. The idea was that wherever you are in the tool,
        your next move is never more than one click away.
      wideImageSrc: "/images/projects/project-6/storm_shots/storm_shots (1).webp"
      wideImageAlt: "EPREL tool wide preview"
  - component: "ProjTextCardRight"
    props:
      paragraph1: >-
        The implementation is currently underway. The design is translated and
        the component logic is being aligned between the Figma files and the
        live codebase. This one took longer than expected to get back to  but
        it's also become a much more considered piece of work for it.
      paragraph2: ""
  - component: "ProjTextCardRight"
    props:
      textStyle: "subtitle"
      paragraph1: "**Tools:** Figma · PHP · HTML · CSS · JavaScript · Generative AI (code assistance)"
      paragraph2: "**Type:** Internal Tool · UI/UX Design · Frontend Development"
---

NEW CONTENT 
"**NexLed EPREL Internal Tool** *UI/UX Design · Web Development · Internal Tooling*

---

When NexLed decided to expand into B2C markets  through Amazon and their own online store  a compliance requirement surfaced that nobody had a clean answer for. Every product intended for consumer sale in the EU needs to be registered in the EPREL database and carry an official Energy Label. Without it, the product simply can't be sold legally. I was tasked with figuring out how to handle this at scale.

The EPREL system does offer an upload method beyond its slow, one-product-at-a-time web form: an XML and ZIP-based submission that, if structured correctly according to EU specifications, gets a product published directly upon approval. The moment I understood this, the direction became clear  we needed an internal tool that automated or at least simplified the creation of those files, so the team could register products without fighting the official interface every time.

My initial proposal was to connect the tool directly to our company database, fetch the product data automatically, and map it into the required XML format. My superior approved the idea and I started designing around it. But after digging into the database itself, I quickly realized this wasn't feasible in the timeframe we needed  the internal data was too disorganized and inconsistently structured to build reliably on top of. I raised this with the team and suggested that reorganizing the database should happen in parallel. At the time they pushed back on it. They came around to it later, and that restructuring is now underway  but it meant the automatic approach had to wait.

So I adapted. Instead of pulling data automatically, I built a manual input form where a user enters the product values themselves, and the tool generates the correct ZIP file ready for EPREL upload. It sounds simple, but compared to the official system it's a meaningful improvement: where EPREL limits you to one product per submission, this tool lets you create unlimited files in a single export. I also added a built-in viewer for the EPREL database  so users can check existing product specs, labels, and fiches without leaving the tool.

---

**A decision I want to explain: why I coded before I designed.**

At this point the tool was functional but visually rough. I made a deliberate choice to leave the design phase for later, for two reasons. First, NexLed had no defined visual identity yet  no brand book, no UI components  and designing a product without that foundation would mean rebuilding it anyway once the brand was established. Second, and more personally: I find it difficult to design interfaces for something I haven't yet built. The real user flows, the edge cases, the moments where the form needs to be more forgiving  those only become visible when the thing actually exists. Designing on top of a working product, even a rough one, leads to better decisions than designing into the abstract.

So I let the project sit while I worked on the NexLed rebranding and UI component library. Then I came back.

---

With a component library in place and a clearer picture of how the tool actually behaved, I mapped out three core user flows I wanted to get right: uploading a new product, browsing and downloading existing labels and fiches from the company folder, and searching the EPREL database directly. Each one needed to be self-evident  no training required, no ambiguous steps.

The layout decision followed from that. Rather than matching the structure of the other NexLed pages, I went with a dashboard approach: a persistent sidebar with clear navigation, the main action always centered on the page, and a secondary card on the right for quick contextual actions. The idea was that wherever you are in the tool, your next move is never more than one click away.

[*wireframe progression images*]

The implementation is currently underway. The design is translated and the component logic is being aligned between the Figma files and the live codebase. This one took longer than expected to get back to  but it's also become a much more considered piece of work for it.

---

**Tools:** Figma · PHP · HTML · CSS · JavaScript · Generative AI (code assistance)
**Type:** Internal Tool · UI/UX Design · Frontend Development"

NEW CONTENT 
