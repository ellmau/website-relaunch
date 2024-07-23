import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'TU Dresden',
    projects: [
      {
        text: 'ScaDS.AI',
        description: 'Center for scalable data analytics and artificial intelligence. Located in Leipzig and Dresden it is one of the five new AI centers in Germany funded under the feder goverment\'s AI strategy.',
        image: 'https://scads.ai/wp-content/uploads/cropped-Favicon-192x192.png',
        alt: 'Favicon of scads.ai.',
        href: 'https://scads.ai',
      },
      {
        text: 'InnoSale',
        description: 'InnoSale aims to innovate today’s sales systems and processes for complex and variable industrial equipment, plants and services. The characteristics of these products make this task fundamentally different from the sales of products that can be selected easily in a shop system (e.g., at Amazon, Zalando, eBay).',
        icon: 'i-carbon-campsite',
        // image: 'https://www.innosale.eu/wp-content/uploads/2016/12/Logo_InnoSale.png',
        href: 'https://innosale.eu',
      },
    ],
  },
  {
    title: 'Github',
    projects: [
      {
        text: 'ADF-BDD',
        description: 'This solver-suite allows you to solve Abstract Dialectical Frameworks (ADFs). The ADFs are represented as Binary Decision Diagrams (BDDs).',
        icon: 'i-simple-icons-github',
        href: 'https://github.com/ellmau/adf-obdd',
      },
      {
        text: 'Nemo',
        description: 'Nemo is a datalog-based rule engine for fast and scalable analytic data processing in memory. It is available as a command-line tool nmo, through bindings to other programming languages, and via a browser-based web application.',
        icon: 'i-simple-icons-github',
        href: 'https://github.com/knowsys/nemo',
      },
      {
        text: 'NixOS configurations',
        description: 'A nixos flake to define, maintain, and configure all my linux machines.',
        icon: 'i-simple-icons-nixos',
        href: 'https://github.com/ellmau/nixos',
      },
      {
        text: 'This website',
        description: 'The repository containing the sources of this webiste',
        icon: 'i-simple-icons-astro',
        href: 'https://github.com/ellmau/ellmau.github.io',
      },
    ],
  },
  {
    title: 'Leipzig University',
    projects: [
      {
        text: 'Advanced Tools for Graph-Based Formal Argumentation',
        description: 'This project will investigate novel graph-based methods and tools for formal argumentation. We will transfer theoretical results established in the predecessor project for abstract dialectical frameworks to arbitrary labelled argument graphs. We investigate corresponding algorithms and implement flexible and user friendly tools which we evaluate in two domains, legal reasoning and online debating.',
        href: 'https://gepris.dfg.de/gepris/projekt/226818978?language=en',
        icon: 'i-carbon-hybrid-networking-alt',
      },
      {
        text: 'Hybrid Reasoning For Intelligent Systems',
        description: 'The first project I was funded by during my doctoral studies. The project aimed to combine qualitative and quantitative methods from knowledge representationo and artificial intelligence. The link leads to the DFG project page.',
        href: 'https://gepris-extern.dfg.de/gepris/projekt/167839951?language=en',
        icon: 'i-simple-icons-knowledgebase',
      },
    ],
  },
]
