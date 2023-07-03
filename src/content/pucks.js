const pucks = [
  {
    title: 'HIGHLIGHT ONE',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-1',
    slug: 'puck-1',
    tier: 3,
    video: '/textures/packopeningtestlarge.mp4',
    tierName: 'CORE LE',
    puckMaterial: '/models/puck/silver/Puck_Silver.glb',
    ringMaterial: '/models/puck/silver/LRing_Silver.glb',
    story: {
      title: 'Story puck 1',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 2',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-2',
    slug: 'puck-2',
    tier: 3,
    video: '/textures/puckopeningtest.mp4',
    tierName: 'CORE LE',
    puckMaterial: '/models/puck/silver/Puck_Silver.glb',
    ringMaterial: '/models/puck/silver/LRing_Silver.glb',
    story: {
      title: 'Story puck 2',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
    badges: [
      {
        name: 'Breakaway Debut',
        image: 'https://collectible.playground.sweet.io/nhl_collectible_icon/original/406f1590-e3f1-45cf-8859-e8608de3baee.jpeg'
      },
      {
        name: 'Series Debut',
        image: 'https://collectible.playground.sweet.io/nhl_collectible_icon/original/ebe2858b-4f4c-490b-b141-85a2925f1594.jpeg'
      },
    ]
  },
  {
    title: 'Puck 3',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-3',
    slug: 'puck-3',
    tier: 3,
    video: '/textures/puckopeningtest.mp4',
    tierName: 'CORE LE',
    puckMaterial: '/models/puck/silver/Puck_Silver.glb',
    ringMaterial: '/models/puck/silver/LRing_Silver.glb',
    story: {
      title: 'Story puck 3',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 4',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-4',
    slug: 'puck-4',
    tierName: 'CORE LE',
    tier: 3,
    video: '/textures/puckopeningtest.mp4',
    puckMaterial: '/models/puck/silver/Puck_Silver.glb',
    ringMaterial: '/models/puck/silver/LRing_Silver.glb',
    story: {
      title: 'Story puck 4',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 5',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-5',
    slug: 'puck-5',
    tier: 3,
    video: '/textures/puckopeningtest.mp4',
    tierName: 'CORE LE',
    puckMaterial: '/models/puck/silver/Puck_Silver.glb',
    ringMaterial: '/models/puck/silver/LRing_Silver.glb',
    story: {
      title: 'Story puck 5',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 6',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-6',
    slug: 'puck-6',
    tier: 2,
    video: '/textures/puckopeningtest.mp4',
    puckMaterial: '/models/puck/blue/Puck_Blue.glb',
    ringMaterial: '/models/puck/blue/LRing_Blue.glb',
    tierName: 'RARE',
    story: {
      title: 'Story puck 6',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 7',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-7',
    slug: 'puck-7',
    tier: 2,
    puckMaterial: '/models/puck/blue/Puck_Blue.glb',
    ringMaterial: '/models/puck/blue/LRing_Blue.glb',
    video: '/textures/puckopeningtest.mp4',
    tierName: 'RARE',
    story: {
      title: 'Story puck 7',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 8',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-8',
    slug: 'puck-8',
    tier: 2,
    puckMaterial: '/models/puck/blue/Puck_Blue.glb',
    ringMaterial: '/models/puck/blue/LRing_Blue.glb',
    video: '/textures/puckopeningtest.mp4',
    tierName: 'RARE',
    story: {
      title: 'Story puck 8',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 9',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-9',
    slug: 'puck-9',
    tier: 1,
    video: '/textures/puckopeningtest.mp4',
    tierName: 'LEGENDARY',
    puckMaterial: '/models/puck/gold/Puck_Gold.glb',
    ringMaterial: '/models/puck/gold/LRing_Gold.glb',
    story: {
      title: 'Story puck 8',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
  {
    title: 'Puck 10',
    file: '/example/scene.glb',
    model: 'Puck',
    path: '/puck-10',
    slug: 'puck-10',
    tier: 1,
    video: '/textures/puckopeningtest.mp4',
    tierName: 'LEGENDARY',
    puckMaterial: '/models/puck/gold/Puck_Gold.glb',
    ringMaterial: '/models/puck/gold/LRing_Gold.glb',
    story: {
      title: 'Story puck 8',
      text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t</p>',
    },
  },
]

export default pucks