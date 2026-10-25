// ONE place to map sections to image files in /public/images.
// To replace a photo: drop your file in public/images with the same name.
// If you use PNG/WebP, change the extension here, e.g. p(1, "png").
const p = (n: number, ext = "JPG") => `/images/Photo_${n}.${ext}`;

export const photos = {
  homeHeroLeft: p(1), homeHeroCenter: p(2), homeHeroRight: p(3),
  homeProject1: p(4), homeProject1b: p(31), homeProject2: p(5), homeProject3: p(6),
  homeProject4: p(7), homeProject5: p(8), homeProject6: p(9),

  experienceVideoPoster: p(10), experienceFashionImage: p(11), experienceStylingImage: p(12),
  educationLCI: p(13), educationCracow: p(14),
  contactLeft: p(15), contactRight: p(16),

  exhaleHero: p(17),
  exhaleGallery: [p(18), p(19), p(20), p(21), p(22)],
  exhaleStat1: p(32), exhaleStat2: p(33),
  exhaleCarousel: [p(34), p(35), p(36), p(37), p(38)],

  renaissanceHero: p(23),
  renaissanceComp: [p(24), p(25), p(26)],
  renaissanceCarousel: [p(27), p(39), p(40), p(41)],

  fashionEvents: p(28),
};
