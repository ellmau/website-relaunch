export const siteConfig = {
  author: 'Stefan Ellmauthaler',
  title: 'Stefan Ellmauthaler',
  subtitle: 'Personal website.',
  description: 'A Minimal, SEO-friendly portfolio and personal website for Dr. Stefan Ellmauthaler.',
  image: {
    src: '/stefan_ellmauthaler.jpg',
    alt: 'Stefan Ellmauthaler',
  },
  email: 'stefan.ellmauthaler@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/ellmau',
      icon: 'i-simple-icons-github',
      header: 'i-simple-icons-github',
    },
    {
      text: 'Mastodon',
      href: 'https://chaos.social/@ellmau',
      icon: 'i-simple-icons-mastodon',
      header: 'i-simple-icons-mastodon',
      rel: 'me',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/stefan-ellmauthaler',
      icon: 'i-simple-icons-linkedin',
      header: 'i-simple-icons-linkedin',
    },
    {
      text: 'Xing',
      href: 'https://www.xing.com/profile/Stefan_Ellmauthaler3',
      icon: 'i-simple-icons-xing',
      header: 'i-simple-icons-xing',
    },
    {
      text: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Stefan_Ellmauthaler',
      icon: 'i-simple-icons-researchgate',
      header: 'i-simple-icons-researchgate',
    },
    {
      text: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=HbZcv2EAAAAJ&hl=en',
      icon: 'i-simple-icons-googlescholar',
      // header: 'i-simple-icons-googlescholar',
    },
    {
      text: 'E-Mail',
      href: 'mailto:stefan.ellmauthaler@gmail.com',
      icon: 'i-simple-icons-mailgun',
      // header: 'i-simple-icons-mailgun',
    },
  ],
  header: {
    logo: {
      src: '/logo.svg',
      alt: 'Logo',
    },
    navLinks: [
      {
        text: 'Stefan Ellmauthaler',
        href: '/',
        style: 'font-weight:bold',
      },
      {
        text: 'Publications',
        href: '/publications',
      },
      // {
      //   text: 'Blog',
      //   href: '/blog',
      // },
      // {
      //   text: 'Notes',
      //   href: '/blog/notes',
      // },
      {
        text: 'Talks & Courses',
        href: '/blog/talks',
      },
      // {
      //   text: 'Teaching',
      //   href: '/blog/teaching',
      // },
      {
        text: 'Projects',
        href: '/projects',
      },
      {
        text: 'CV',
        href: '/cv',
      },
    ],
  },
  page: {
    blogLinks: [
      // {
      //   text: 'Blog',
      //   href: '/blog',
      // },
      // {
      //   text: 'Notes',
      //   href: '/blog/notes',
      // },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Teaching',
        href: '/blog/teaching',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Terms, Privacy, and Impressum',
        href: '/impressum',
      },
    ],
  },
}

export default siteConfig
