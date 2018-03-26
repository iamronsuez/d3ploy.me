const HeroComponent = {
  name: 'hero',
  title: '',
  subtitle: 'Automate your builds',
  logo: 'logo.svg',
  classes: {
    title: ['title'],
    subtitle: ['subtitle']
  }
}

const NavComponent = (title, url) => ({
  title: 'nav',
  url: '/nav'
})

const VideoComponent = () => ({
  name: 'video',
  title: 'video',
  src: 'https://asciinema.org/a/aGqOCbq8qxT5M5cbTBgwnuHTV'
})

const HeaderComponent = {
  name: 'header',
  title: 'd3pl0y.me',
  subtitle: 'Automate your builds (something like heroku)',
  logo: 'logo.svg',
  navigation: [
    NavComponent('home', '/h'),
    NavComponent('about', '/about'),
    NavComponent('contact', '/contact'),
  ],
  classes: {
    title: ['title'],
    subtitle: ['subtitle']
  }
}

const sitemap = {
  title: 'D3pl0y.me',
  pages: [{
    route: 'h',
    title: 'home',
    components: [HeaderComponent]
  }]
}

export default sitemap;