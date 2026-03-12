import { useState } from "react";
import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";
import Sidebar from "@/components/Sidebar";
import BlogFooter from "@/components/BlogFooter";
import jacket1 from "@/assets/jacket1.jpg";
import jacket2 from "@/assets/jacket2.jpg";

const posts = [
   {
    title: "I'm about to own a synthesizer!",
    date: "Feb 28, 2026",
    tags: ["Music"],
    content: `My sister's been nagging me to buy her old synth for a while, but with me recntly getting more into Chillwave and Big Beat I actually bvecame kinda interested, it would be really cool to learn to make my own music in my favourite genres. Hmu if you've got any tips.`,
    mood: "Excited to make beats 🎹",
    music: "M83 - 'Midnight City'",
    audio: "/music/M83 - Midnight City.flac",
  },
  {
    title: "Free Big Beat on Bandcamp!!",
    date: "Feb 27, 2026",
    tags: ["Music"],
    content: `So recently, when I was browsing the Big Beat tag on bandcamp in search of new beats for my playlist, when I discovered that Overseer, the creator of my current favourite song, Doomsday has put out a whole album for free on there!! Here's the link, go grab it: https://overseerbeats.bandcamp.com/album/macrowaves`,
    mood: "Pumped for beats 🎧",
    music: "Overseer - 'Doomsday'",
    audio: "/music/Overseer - Doomsday.m4a",
  },

  {
    title: "Japan Cool Jacket Haul",
    date: "Feb 27, 2026",
    tags: ["Fashion", "Travel"],
    content: `On my recent trip to Japan, I stumbled across a thrift store while waiting in a virtual queue at Ichiran Ramen. It was my first time thrifting ever, but I immediately locked on to these two jackets, I needed a winter jacket for the weather in Poland right now, and this one has such cool retro colors! The other one is nice too, I've been looking for this type of jacket and buying it used was way cheaper, than whatever a new one would've cost.`,
    mood: "Ecstatic 🧥",
    images: [jacket1, jacket2],
  },
];

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const filteredPosts = selectedTab === "Home"
    ? posts
    : posts.filter(post =>
        post.tags?.some(tag => tag.toLowerCase() === selectedTab.toLowerCase())
      );

  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab={selectedTab} onTabClick={setSelectedTab} />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <BlogPost key={i} {...post} selectedTag={selectedTab} />
              ))
            ) : (
              <div className="panel-retro p-4 text-center">
                <p className="font-retro text-lg text-muted-foreground">No posts yet for this tag!</p>
              </div>
            )}
          </main>
          <div className="w-full md:w-64 shrink-0">
            <Sidebar />
          </div>
        </div>
        <BlogFooter />
      </div>
    </div>
  );
};

export default Index;
