import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";
import Sidebar from "@/components/Sidebar";
import BlogFooter from "@/components/BlogFooter";

const posts = [
  {
    title: "Kamen Rider Gavv is PEAK tokusatsu!!",
    date: "Feb 25, 2026",
    category: "tokusatsu" as const,
    content: `OK so I just finished watching the latest arc and I have SO MANY THOUGHTS. The transformation sequences are absolutely gorgeous, the suit design is chef's kiss, and the story is actually making me emotional??\n\nThe villain reveal in ep 20 caught me completely off guard. I won't spoil it but if you know, you know. Also the crossover teaser at the end... HYPE!!\n\nRating: ★★★★★ (5/5 stars, no question)`,
    mood: "HYPED ⚡",
    music: "Kamen Rider Gavv OP - 'CHEMY×STORY'",
  },
  {
    title: "Final Fantasy VII Rebirth - 100 Hours In",
    date: "Feb 20, 2026",
    category: "games" as const,
    content: `I finally got around to playing FFVII Rebirth and wow... Square really outdid themselves. The open world is massive, the combat system is even better than Remake, and the music??? Nobuo Uematsu is a god.\n\nCurrently stuck on this optional boss that keeps one-shotting my party. If anyone has tips please leave a comment lol.\n\nAlso the Gold Saucer is everything I dreamed it would be. I spent like 10 hours just doing mini-games haha.`,
    mood: "Determined 🎮",
    music: "FFVII Rebirth OST - 'Those Who Fight Further'",
  },
  {
    title: "Dandadan might be anime of the year",
    date: "Feb 15, 2026",
    category: "anime" as const,
    content: `Science SARU really went all out with the animation quality on this one. Every episode looks like a movie. The humor is perfect, the action scenes are insane, and Momo & Okarun have the best dynamic in anime right now.\n\nThe turbo granny arc had me rolling on the floor laughing. This is the kind of anime that reminds me why I fell in love with the medium in the first place.\n\nIf you're not watching this, what are you even doing??`,
    mood: "Excited ✨",
    music: "Dandadan OP - 'Otonoke'",
  },
  {
    title: "My Top 10 Super Sentai Series (fight me)",
    date: "Feb 10, 2026",
    category: "tokusatsu" as const,
    content: `Been rewatching a bunch of Sentai lately so here's my definitive ranking:\n\n1. Gokaiger (obviously)\n2. Shinkenger\n3. Dekaranger\n4. Timeranger\n5. Gekiranger\n6. Jetman\n7. Dairanger\n8. Go-Busters\n9. ToQger\n10. Lupinranger vs Patranger\n\nI KNOW some of these are controversial picks. Leave a comment and tell me your list!! No wrong answers (except if you don't have Gokaiger in top 3, then we can't be friends lol)`,
    mood: "Nostalgic 🌟",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            {posts.map((post, i) => (
              <BlogPost key={i} {...post} />
            ))}
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
