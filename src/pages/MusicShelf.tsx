import { useNavigate } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import Sidebar from "@/components/Sidebar";
import wreckageCover from "@/assets/wreckage-cover.jpg";
import hurryupCover from "@/assets/hurryup-cover.jpg";

const albums = [
  { slug: "overseer-wreckage", artist: "Overseer", title: "Wreckage", cover: wreckageCover },
  { slug: "m83-hurry-up-were-dreaming", artist: "M83", title: "Hurry Up, We're Dreaming", cover: hurryupCover },
];

const MusicShelf = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab="" onTabClick={() => {}} />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            <div className="panel-retro p-6">
              <h2 className="font-pixel text-lg text-primary glow-cyan mb-4">☆ Music Shelf ☆</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {albums.map((album) => (
                  <button
                    key={album.slug}
                    onClick={() => navigate(`/album/${album.slug}`)}
                    className="group text-left"
                  >
                    <div className="border-2 border-primary/40 group-hover:border-primary overflow-hidden transition-colors"
                      style={{ boxShadow: "0 0 8px hsl(180 100% 50% / 0.15)" }}
                    >
                      <img
                        src={album.cover}
                        alt={`${album.artist} - ${album.title}`}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="font-pixel text-[8px] text-primary glow-cyan mt-2 truncate">{album.artist}</p>
                    <p className="font-retro text-sm text-foreground truncate">{album.title}</p>
                  </button>
                ))}
              </div>
            </div>
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

export default MusicShelf;
