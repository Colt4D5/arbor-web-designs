export const navItems = [
  {
    page: 'Home',
    link: '/',
    active: '$page.url.pathname === "/" && $page.url.hash !== "#about-me"',
  },
  {
    page: 'About',
    link: '/#about',
    active: "$page.url.hash == '#about-me'",
  },
  {
    page: 'Contact',
    link: '/contact',
    active: "$page.url.pathname == '/contact'",
  },
]