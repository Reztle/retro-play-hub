import jacket1 from "@/assets/jacket1.jpg";
import jacket2 from "@/assets/jacket2.jpg";

export interface Post {
  slug: string;
  author: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  mood?: string;
  music?: string;
  audio?: string;
  images?: string[];
}

const posts: Post[] = [
  {
    slug: "im-about-to-own-a-synthesizer",
    author: "Syber Sen",
    title: "I'm about to own a synthesizer!",
    date: "Feb 28, 2026",
    tags: ["Music"],
    content: `My sister's been nagging me to buy her old synth for a while, but with me recntly getting more into Chillwave and Big Beat I actually bvecame kinda interested, it would be really cool to learn to make my own music in my favourite genres. Hmu if you've got any tips.`,
    mood: "Excited to make beats 🎹",
    music: "M83 - 'Midnight City'",
    audio: "/music/M83 - Midnight City.flac",
  },
  {
    slug: "free-big-beat-on-bandcamp",
    author: "Syber Sen",
    title: "Free Big Beat on Bandcamp!!",
    date: "Feb 27, 2026",
    tags: ["Music"],
    content: `So recently, when I was browsing the Big Beat tag on bandcamp in search of new beats for my playlist, when I discovered that Overseer, the creator of my current favourite song, Doomsday has put out a whole album for free on there!! Here's the link, go grab it: https://overseerbeats.bandcamp.com/album/macrowaves`,
    mood: "Pumped for beats 🎧",
    music: "Overseer - 'Doomsday'",
    audio: "/music/Overseer - Doomsday.m4a",
  },
  {
    slug: "japan-cool-jacket-haul",
    author: "Syber Sen",
    title: "Japan Cool Jacket Haul",
    date: "Feb 27, 2026",
    tags: ["Fashion", "Travel"],
    content: `On my recent trip to Japan, I stumbled across a thrift store while waiting in a virtual queue at Ichiran Ramen. It was my first time thrifting ever, but I immediately locked on to these two jackets, I needed a winter jacket for the weather in Poland right now, and this one has such cool retro colors! The other one is nice too, I've been looking for this type of jacket and buying it used was way cheaper, than whatever a new one would've cost.`,
    mood: "Ecstatic 🧥",
    images: [jacket1, jacket2],
  },
];

export default posts;
