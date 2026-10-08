import { asset } from "./assets";

export interface Review {
  name: string;
  relation: string;
  text: string;
  src: string;
}

export const reviews: Review[] = [
  {
    name: "Tashi Tsering",
    relation: "F/O Jigmet Skaldon",
    text: "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.",
    src: asset("tashi.3807cb3c.png"),
  },
  {
    name: "Namita Agarwal",
    relation: "M/O Krishna Agarwal",
    text: "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
    src: asset("namita.86a0f799.png"),
  },
  {
    name: "Sandeep Kumar",
    relation: "F/O Aryan",
    text: "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
    src: asset("sandeep.1b22b59e.png"),
  },
  {
    name: "Pinky Sharma",
    relation: "M/O Swastik Sharma",
    text: "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.",
    src: asset("pinky.8d7145b0.png"),
  },
  {
    name: "Suresh Kumar",
    relation: "F/O Aditya Kumar",
    text: "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.",
    src: asset("suresh.80d60e49.png"),
  },
  {
    name: "Mrs Urja Bhayani",
    relation: "M/O Shikha & Samarth Bhayani",
    text: "Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.",
    src: asset("urja.03e3c3f3.png"),
  },
  {
    name: "Amit Agrawal",
    relation: "F/O Samruddhi Agrawal",
    text: "Being a parent it's a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.",
    src: asset("amit.c7b6247e.png"),
  },
  {
    name: "Ashu Arora",
    relation: "M/O Manisha Changrani",
    text: "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.",
    src: asset("ashu.9d447126.png"),
  },
  {
    name: "Gulabdas Gupta",
    relation: "F/O Annika Gulabdas Gupta",
    text: "We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.",
    src: asset("gulabdas.63ce81d8.png"),
  },
  {
    name: "Selendra K. Ajmera",
    relation: "F/O Aman Ajmera",
    text: "Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.",
    src: asset("salendra.42b32ea1.png"),
  },
];
