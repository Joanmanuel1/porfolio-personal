// Single source of truth for portfolio projects.
// Localized strings live in src/i18n/locales/*.json under projects.items.<slug>.*
// Image filenames follow {id}-{letter}.png in src/assets/img/.

const idBySlug = {
  'goludos': 1,
  'adogtame': 3,
  'pokemon-game': 4,
  'pokedex': 5,
  'nutriamor': 6,
  'invitaciones-digitales': 7,
  'el-villano': 8,
}

function buildGallery(slug, letters) {
  const id = idBySlug[slug]
  return letters.map((l) => ({
    item: `${id}-${l}.png`,
    altKey: `projects.items.${slug}.gallery.${l}`,
  }))
}

function make(slug, partial) {
  const { galleryLetters = [], gallery: manualGallery, ...rest } = partial
  return {
    id: idBySlug[slug],
    slug,
    titleKey: `projects.items.${slug}.title`,
    descriptionKey: `projects.items.${slug}.description`,
    impactKey: `projects.items.${slug}.impact`,
    ...rest,
    gallery: manualGallery ?? buildGallery(slug, galleryLetters),
  }
}

export const productionProjects = [
  make('goludos', {
    technologies: ['Ionic', 'Angular', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.miempresa.fulbo&hl=es_AR',
    demoUrlWeb: 'https://goludos.com/',
    githubUrl: '',
    status: true,
    featured: true,
    frame: 'mobile',
    caseStudy: true,
    gallery: [
      ...'abcdefghijklmnopqrst'.split('').map(l => ({ item: `1-${l}.png`, altKey: `projects.items.goludos.gallery.mobile.${l}` })),
    ],
  }),
  make('nutriamor', {
    technologies: ['Vue 3', 'TensorFlow/AI API', 'Tailwind', 'Firebase'],
    demoUrl: 'https://nutriamor.netlify.app/',
    browserUrl: 'nutriamor.netlify.app',
    githubUrl: '',
    status: true,
    featured: true,
    frame: 'mobile',
    caseStudy: true,
    galleryLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
  }),
  make('invitaciones-digitales', {
    technologies: ['Vue 3', 'Tailwind', 'Firebase', 'Vite'],
    demoUrl: 'https://invitacion-digital-dev.web.app/',
    githubUrl: '',
    status: true,
    featured: true,
    frame: 'mobile',
    videoUrl: '/demo-quince.mp4',
    galleryLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    caseStudy: true,
    stages: [
      {
        titleKey: 'projects.items.invitaciones-digitales.stages.landing.title',
        descriptionKey: 'projects.items.invitaciones-digitales.stages.landing.description',
        images: ['a', 'b', 'c', 'd', 'e', 'f'],
      },
      {
        titleKey: 'projects.items.invitaciones-digitales.stages.editor.title',
        descriptionKey: 'projects.items.invitaciones-digitales.stages.editor.description',
        images: ['g'],
      },
      {
        titleKey: 'projects.items.invitaciones-digitales.stages.invitation.title',
        descriptionKey: 'projects.items.invitaciones-digitales.stages.invitation.description',
        images: ['h'],
        videoUrl: '/demo-quince.mp4',
      },
    ],
  }),
  make('el-villano', {
    technologies: ['Vue 3', 'Ionic', 'Capacitor', 'Vite'],
    demoUrl: '',
    githubUrl: 'https://github.com/Joanmanuel1/impostor-con-superheroes',
    status: false,
    wip: true,
    featured: true,
    frame: 'mobile',
    caseStudy: true,
    galleryLetters: ['a', 'b', 'c', 'd', 'e'],
  }),
]

export const practiceProjects = [
  make('pokemon-game', {
    technologies: ['Vue 3', 'PokeAPI', 'Web Audio API', 'Canvas API'],
    demoUrl: 'https://fanaticopokemon.netlify.app/',
    githubUrl: 'https://github.com/Joanmanuel1/Pokemon-game',
    galleryLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
  }),
]

export const allProjects = [...productionProjects, ...practiceProjects]

export function findProjectBySlug(slug) {
  return allProjects.find((p) => p.slug === slug) || null
}
