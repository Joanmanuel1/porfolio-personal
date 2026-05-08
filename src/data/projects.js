// Single source of truth for portfolio projects.
// Localized strings live in src/i18n/locales/*.json under projects.items.<slug>.*
// Image filenames follow {id}-{letter}.png in src/assets/img/.

const idBySlug = {
  'goludos-mobile': 1,
  'goludos-web': 2,
  'adogtame': 3,
  'pokemon-game': 4,
  'pokedex': 5,
  'nutriamor': 6,
  'invitaciones-digitales': 7,
}

function buildGallery(slug, letters) {
  const id = idBySlug[slug]
  return letters.map((l) => ({
    item: `${id}-${l}.png`,
    altKey: `projects.items.${slug}.gallery.${l}`,
  }))
}

function make(slug, partial) {
  const { galleryLetters = [], ...rest } = partial
  return {
    id: idBySlug[slug],
    slug,
    titleKey: `projects.items.${slug}.title`,
    descriptionKey: `projects.items.${slug}.description`,
    impactKey: `projects.items.${slug}.impact`,
    ...rest,
    gallery: buildGallery(slug, galleryLetters),
  }
}

export const productionProjects = [
  make('goludos-mobile', {
    technologies: ['Ionic', 'Angular', 'Node.js', 'PostgreSQL'],
    demoUrl:
      'https://play.google.com/store/apps/details?id=com.miempresa.fulbo&hl=es_AR',
    githubUrl: '',
    status: true,
    featured: true,
    frame: 'mobile',
    galleryLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
  }),
  make('goludos-web', {
    technologies: ['Angular', 'Bootstrap', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://goludos.netlify.app/',
    githubUrl: '',
    status: false,
    featured: true,
    frame: 'browser',
    galleryLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  }),
  make('nutriamor', {
    technologies: ['Vue 3', 'TensorFlow/AI API', 'Tailwind', 'Firebase'],
    demoUrl: '',
    githubUrl: '',
    status: false,
    featured: true,
    frame: 'browser',
    galleryLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
  }),
  // TODO: replace placeholders once content is finalized.
  // - Add demoUrl (production deployment of digital invitations app)
  // - Drop screenshots in src/assets/img/ as 7-a.png, 7-b.png, ...
  // - Adjust technologies array if stack differs
  make('invitaciones-digitales', {
    technologies: ['Vue 3', 'Tailwind', 'Firebase', 'Vite'],
    demoUrl: '',
    githubUrl: '',
    status: false,
    featured: true,
    frame: 'browser',
    galleryLetters: ['a', 'b', 'c', 'd'],
  }),
]

export const practiceProjects = [
  make('adogtame', {
    technologies: ['Angular', 'Firebase'],
    demoUrl: '',
    githubUrl: 'https://github.com/Joanmanuel1/Adogtame-frontend',
    galleryLetters: ['a', 'b'],
  }),
  make('pokemon-game', {
    technologies: ['Vue 3', 'PokeAPI'],
    demoUrl: 'https://juego-de-pokemon-vue-js.netlify.app/',
    githubUrl: 'https://github.com/Joanmanuel1/Pokemon-game',
    galleryLetters: ['a', 'b', 'c'],
  }),
  make('pokedex', {
    technologies: ['Vue 3', 'REST API'],
    demoUrl: 'https://pokemon-vue-global66.netlify.app/',
    githubUrl: 'https://github.com/Joanmanuel1/pokemon-vue',
    galleryLetters: ['a', 'b', 'c'],
  }),
]

export const allProjects = [...productionProjects, ...practiceProjects]

export function findProjectBySlug(slug) {
  return allProjects.find((p) => p.slug === slug) || null
}
