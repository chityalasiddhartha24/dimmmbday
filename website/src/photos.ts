export type Photo = {
  src: string;
  alt: string;
  shape: "wide" | "tall" | "square";
};

export const photos: Photo[] = [
  {
    src: "/images/photo-01.jpeg",
    alt: "A person looking out over a shoreline at sunset",
    shape: "wide",
  },
  {
    src: "/images/photo-03.jpeg",
    alt: "A seated portrait in a bright yellow outfit against a colorful backdrop",
    shape: "tall",
  },
  {
    src: "/images/photo-04.jpeg",
    alt: "A portrait in festive traditional attire beside a palm tree",
    shape: "tall",
  },
  {
    src: "/images/photo-05.jpeg",
    alt: "A smiling person at a table with a candle-lit cake",
    shape: "wide",
  },
  {
    src: "/images/photo-06.jpeg",
    alt: "A childhood portrait in a colorful traditional outfit",
    shape: "tall",
  },
  {
    src: "/images/photo-07.jpeg",
    alt: "A portrait in a red festive outfit with a hand raised",
    shape: "square",
  },
  {
    src: "/images/photo-08.jpeg",
    alt: "A person pointing toward a decorated birthday cake",
    shape: "tall",
  },
  {
    src: "/images/photo-09.jpeg",
    alt: "A seated portrait in maroon and pale green traditional attire",
    shape: "tall",
  },
  {
    src: "/images/photo-10.jpeg",
    alt: "A portrait outdoors at night, with a garden and paved path",
    shape: "tall",
  },
  {
    src: "/images/photo-11.jpeg",
    alt: "A full-length portrait against a pale wall",
    shape: "tall",
  },
  {
    src: "/images/photo-12.jpeg",
    alt: "A mirror selfie in traditional attire",
    shape: "tall",
  },
];
