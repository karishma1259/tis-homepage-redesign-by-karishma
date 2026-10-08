/**
 * Official TIS images, loaded from the live school website.
 * To self-host them instead: download the files into /public/images
 * and change BASE to "/images".
 */
const BASE = "/images";

export const asset = (file: string) => `${BASE}/${encodeURIComponent(file)}`;

export const images = {
  logo: asset("schoolLogo.95f6e121.png"),
  footerLogo: asset("footer-logo.230b79ff.png"),
  atTis: asset("AtTIS.59351600.png"),
  virtualTour: asset("360.75b351f1.png"),
  studentPink: asset("ladyInPink.c358aa8f.png"),
  studentFuture: asset("madeForFuture.e96fe7c1.png"),
  studentBlue: asset("manInBlue.46316cbf.png"),
};

export const gallery = {
  studio: { src: asset("Image 2.0c5295c9.webp"), alt: "Students at a TIS event" },
  polo: { src: asset("polo.973ddbae.webp"), alt: "Polo at Tulas International School" },
  karate: { src: asset("karate.4020fba5.webp"), alt: "Karate practice at TIS" },
  swimming: { src: asset("swimming.6fc81e65.webp"), alt: "Swimming at TIS" },
  campusLife: { src: asset("Image 1.0a814859.webp"), alt: "Boarding students on campus" },
  celebration: { src: asset("Image 3.21dc9e69.webp"), alt: "Students celebrating at TIS" },
};
