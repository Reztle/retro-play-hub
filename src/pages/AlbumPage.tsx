import { useParams, useNavigate } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import Sidebar from "@/components/Sidebar";
import RetroMusicPlayer from "@/components/RetroMusicPlayer";
import { useState } from "react";
import wreckageCover from "@/assets/wreckage-cover.jpg";
import hurryupCover from "@/assets/hurryup-cover.jpg";

interface AlbumTrack {
  title: string;
  src: string;
}

interface Album {
  slug: string;
  artist: string;
  title: string;
  cover: string;
  tracks: AlbumTrack[];
}

const albums: Album[] = [
  {
    slug: "overseer-wreckage",
    artist: "Overseer",
    title: "Wreckage",
    cover: wreckageCover,
    tracks: [
      { title: "Overseer - 'Doomsday'", src: "/music/Overseer - Doomsday.m4a" },
    ],
  },
  {
    slug: "m83-hurry-up-were-dreaming",
    artist: "M83",
    title: "Hurry Up, We're Dreaming",
    cover: hurryupCover,
    tracks: [
      { title: "M83 - 'Midnight City'", src: "/music/M83 - Midnight City.flac" },
    ],
  },
];

const AlbumPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("");
  const album = albums.find((a) => a.slug === slug);

  if (!album) {
    return (
      <div className="min-h-screen py-4 px-2">
        <div className="container max-w-5xl mx-auto">
          <BlogHeader selectedTab={selectedTab} onTabClick={setSelectedTab} />
          <div className="panel-retro p-4 text-center">
            <p className="font-retro text-lg text-muted-foreground">Album not found!</p>
            <button
              onClick={() => navigate("/music-shelf")}
              className="font-pixel text-[10px] px-3 py-2 mt-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ← Back to Music Shelf
            </button>
          </div>
          <BlogFooter />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab={selectedTab} onTabClick={setSelectedTab} />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            <button
              onClick={() => navigate("/music-shelf")}
              className="font-pixel text-[10px] px-3 py-2 mb-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ← Back to Music Shelf
            </button>
            <div className="panel-retro p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <img
                  src={album.cover}
                  alt={`${album.artist} - ${album.title}`}
                  className="w-48 h-48 object-cover border-2 border-primary shrink-0"
                  style={{ boxShadow: "0 0 12px hsl(180 100% 50% / 0.3)" }}
                />
                <div className="flex flex-col justify-end">
                  <p className="font-retro text-sm text-muted-foreground">{album.artist}</p>
                  <h2 className="font-pixel text-lg text-primary glow-cyan">{album.title}</h2>
                </div>
              </div>
              <div className="pixel-divider mb-4" />
              <h3 className="font-pixel text-[10px] text-secondary glow-magenta mb-3">♪ Tracks from posts ♪</h3>
              <div className="space-y-3">
                {album.tracks.map((track, i) => (
                  <RetroMusicPlayer key={i} title={track.title} src={track.src} />
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

export default AlbumPage;
