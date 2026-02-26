import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";
import Sidebar from "@/components/Sidebar";
import BlogFooter from "@/components/BlogFooter";

const posts = [
  {
    title: "Kamen Rider Kabuto is SO GOOD you guys",
    date: "Feb 25, 2006",
    category: "tokusatsu" as const,
    content: `OK so I just marathoned the first 8 episodes and I have SO MANY THOUGHTS omg. The Clock Up sequences are insane, Tendou is the coolest rider ever (dont @ me lol) and the Worm designs are actually creepy??\n\nThe henshin sequence where he goes from Masked Form to Rider Form... *chef's kiss* Cast Off is the best gimmick since Faiz's phone thing.\n\nSeriously if ur not watching this ur missing out!! Go download it from TV-Nihon NOW.\n\nRating: ***** (5/5, no question)`,
    mood: "HYPED =D",
    music: "Kamen Rider Kabuto OP - 'NEXT LEVEL' by YU-KI",
  },
  {
    title: "Kingdom Hearts II - 60 hours in and still going o_o",
    date: "Feb 20, 2006",
    category: "games" as const,
    content: `I finally got KH2 and WOW... Squaresoft (yes i still call them that lol) really outdid themselves. The combat is sooo much smoother than KH1, Drive Forms are addicting, and the MUSIC omg Yoko Shimomura is a goddess.\n\nCurrently stuck on Sephiroth. He keeps one-shotting me with that stupid move. If anyone has tips plz leave a comment >_<\n\nAlso the Timeless River world is everything. Playing as retro Mickey Mouse Sora?? Too good haha.\n\nSpace Paranoids is awesome too, the Tron world looks so cool in the KH style ^_^`,
    mood: "Determined >:3",
    music: "Utada Hikaru - Passion ~After the Battle~",
  },
  {
    title: "Bleach is getting REALLY good rn *__*",
    date: "Feb 15, 2006",
    category: "anime" as const,
    content: `OK the Soul Society arc just ended and HOLY CRAP that was peak shounen. Studio Pierrot actually put effort into the animation for once lol. Byakuya vs Ichigo is one of the best fights ive ever seen in anime.\n\nThe Bankai reveals had me screaming. And the plot twist with Aizen... I did NOT see that coming. If u got spoiled on that im sorry for ur loss ;_;\n\nNow its going into some filler arc tho... hope it doesnt last too long. I just wanna see the Arrancar stuff from the manga!!\n\nIf ur not watching this, what r u even doing?? Go to AnimeSuki and grab it XD`,
    mood: "Excited ^o^",
    music: "Bleach OP3 - 'Ichirin no Hana' by HIGH and MIGHTY COLOR",
  },
  {
    title: "My Top 10 Super Sentai Series (fight me lol)",
    date: "Feb 10, 2006",
    category: "tokusatsu" as const,
    content: `Been rewatching a bunch of Sentai with my friend on AIM so heres my definitive ranking:\n\n1. Dekaranger (obviously)\n2. Jetman\n3. Dairanger\n4. Timeranger\n5. Abaranger\n6. Megaranger\n7. Hurricaneger\n8. Gaoranger\n9. Magiranger\n10. Boukenger (its only just started but its alrdy so good!!)\n\nI KNOW some of these r controversial picks. Leave a comment and tell me ur list!! No wrong answers (except if u dont have Dekaranger in top 3, then we cant be friends lol)\n\np.s. - does anyone have the Boukenger OP mp3?? my kazaa is being weird >_>`,
    mood: "Nostalgic ^_^",
  },
  {
    title: "New L'Arc~en~Ciel album is FIRE",
    date: "Feb 05, 2006",
    category: "music" as const,
    content: `AWAKE dropped and its incredible omg. Hyde's vocals r on another level as always. My fav tracks so far:\n\n1. New World (this song makes me wanna cry T_T)\n2. Killing Me\n3. Twinkle Twinkle\n4. My Dear\n\nAlso been listening to a lot of Asian Kung-Fu Generation and FLOW lately. Rewrite is stuck in my head 24/7 thanks to FMA lol.\n\nDoes anyone know any good jpop/jrock download sites?? My usual one got taken down ;_; I tried Limewire but everything is mislabeled ugh\n\nLeave ur fav jrock bands in the comments!! I need new stuff to listen to =D`,
    mood: "musical~ d(^_^)b",
    music: "L'Arc~en~Ciel - New World",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen py-3 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader />
        <div className="flex flex-col md:flex-row gap-3">
          <main className="flex-1 min-w-0">
            {posts.map((post, i) => (
              <BlogPost key={i} {...post} />
            ))}
          </main>
          <div className="w-full md:w-56 shrink-0">
            <Sidebar />
          </div>
        </div>
        <BlogFooter />
      </div>
    </div>
  );
};

export default Index;
