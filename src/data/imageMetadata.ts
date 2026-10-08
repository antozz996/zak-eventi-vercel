export const imageMetadata: Record<string, { width: number; height: number; srcSet: string }> = {
  "/images/events/xtgb2834.webp": {
    "width": 960,
    "height": 1440,
    "srcSet": "/images/events/xtgb2834-720.webp 720w, /images/events/xtgb2834.webp 960w"
  },
  "/images/events/xtgb1140.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb1140-720.webp 720w, /images/events/xtgb1140.webp 1440w"
  },
  "/images/events/xtgb5080.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb5080-720.webp 720w, /images/events/xtgb5080.webp 1440w"
  },
  "/images/events/xtgb5086.webp": {
    "width": 960,
    "height": 1440,
    "srcSet": "/images/events/xtgb5086-720.webp 720w, /images/events/xtgb5086.webp 960w"
  },
  "/images/events/xtgb3357.webp": {
    "width": 1920,
    "height": 1280,
    "srcSet": "/images/events/xtgb3357-720.webp 720w, /images/events/xtgb3357.webp 1920w"
  },
  "/images/events/xtgb2648.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb2648-720.webp 720w, /images/events/xtgb2648.webp 1440w"
  },
  "/images/events/xtgb3320.webp": {
    "width": 960,
    "height": 1440,
    "srcSet": "/images/events/xtgb3320-320.webp 320w, /images/events/xtgb3320-640.webp 640w, /images/events/xtgb3320-720.webp 720w, /images/events/xtgb3320.webp 960w"
  },
  "/images/events/xtgb0557-hero.webp": {
    "width": 1646,
    "height": 1920,
    "srcSet": "/images/events/xtgb0557-hero-720.webp 720w, /images/events/xtgb0557-hero.webp 1646w"
  },
  "/images/events/xtgb3344.webp": {
    "width": 1280,
    "height": 1920,
    "srcSet": "/images/events/xtgb3344-720.webp 720w, /images/events/xtgb3344.webp 1280w"
  },
  "/images/events/xtgb3529.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb3529-720.webp 720w, /images/events/xtgb3529.webp 1440w"
  },
  "/images/events/xtgb6513.webp": {
    "width": 960,
    "height": 1440,
    "srcSet": "/images/events/xtgb6513-720.webp 720w, /images/events/xtgb6513.webp 960w"
  },
  "/images/events/xtgb6585.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb6585-720.webp 720w, /images/events/xtgb6585.webp 1440w"
  },
  "/images/events/xtgb2618.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb2618-720.webp 720w, /images/events/xtgb2618.webp 1440w"
  },
  "/images/events/xtgb0819.webp": {
    "width": 960,
    "height": 1440,
    "srcSet": "/images/events/xtgb0819-320.webp 320w, /images/events/xtgb0819-640.webp 640w, /images/events/xtgb0819-720.webp 720w, /images/events/xtgb0819.webp 960w"
  },
  "/images/events/xtgb6517.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb6517-720.webp 720w, /images/events/xtgb6517.webp 1440w"
  },
  "/images/events/xtgb5807.webp": {
    "width": 960,
    "height": 1440,
    "srcSet": "/images/events/xtgb5807-720.webp 720w, /images/events/xtgb5807.webp 960w"
  },
  "/images/events/xtgb0046.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb0046-720.webp 720w, /images/events/xtgb0046.webp 1440w"
  },
  "/images/events/xtgb9908.webp": {
    "width": 1440,
    "height": 960,
    "srcSet": "/images/events/xtgb9908-720.webp 720w, /images/events/xtgb9908.webp 1440w"
  },
  "/images/events/xtgb3531.webp": {
    "width": 960,
    "height": 1440,
    "srcSet": "/images/events/xtgb3531-720.webp 720w, /images/events/xtgb3531.webp 960w"
  },
  "/images/events/ingresso-abito-blu.webp": {
    "width": 1232,
    "height": 1536,
    "srcSet": "/images/events/ingresso-abito-blu-720.webp 720w, /images/events/ingresso-abito-blu.webp 1232w"
  }
};

export function imageProps(src: string) { return imageMetadata[src] ?? {}; }
