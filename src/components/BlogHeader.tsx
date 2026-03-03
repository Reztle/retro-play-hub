import { useNavigate, useLocation } from "react-router-dom";

interface BlogHeaderProps {
  selectedTab: string;
  onTabClick: (tab: string) => void;
}

const BlogHeader = ({ selectedTab, onTabClick }: BlogHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = ["Home", "Games", "Manga", "Anime", "Tokusatsu", "Music", "Art", "Fashion", "Travel"];
  const pages = [
    { label: "Links", path: "/links" },
    { label: "About", path: "/about" },
    { label: "Art Gallery", path: "/art-gallery" },
    { label: "Music Shelf", path: "/music-shelf" },
    { label: "Chatroom", path: "/chatroom" },
  ];

  return (
    <header className="panel-retro p-4 mb-4">
      <h1 className="font-pixel text-xl md:text-2xl text-primary glow-cyan text-center leading-relaxed">
        ★ Syber Sentral ★
      </h1>
      <p className="font-retro text-xl text-secondary text-center mt-2 glow-magenta">
        ~ Games • Anime • Tokusatsu • Music • Fashion ~
      </p>
      <div className="pixel-divider mt-3" />
      <div className="overflow-hidden mt-2">
        <p className="font-retro text-lg text-accent marquee-scroll whitespace-nowrap">
          ☆ Welcome to my corner of the internet!! ☆ Latest post: I'm about to own a synthesizer! ☆ Currently playing: Crysis 3 ☆ Now watching: Ergo Proxy ☆
        </p>
      </div>
      <nav className="flex flex-wrap justify-center gap-2 mt-3">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => { if (location.pathname !== "/") navigate("/"); onTabClick(item); }}
            className={`font-pixel text-[10px] px-3 py-2 border-2 border-border transition-colors ${
              selectedTab === item
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
      <nav className="flex flex-wrap justify-center gap-2 mt-2">
        {pages.map((page) => (
          <button
            key={page.label}
            onClick={() => navigate(page.path)}
            className={`font-pixel text-[10px] px-3 py-2 border-2 transition-colors ${
              location.pathname === page.path
                ? "border-nav-page bg-nav-page text-nav-page-foreground"
                : "border-nav-page/40 bg-muted text-nav-page hover:bg-nav-page hover:text-nav-page-foreground"
            }`}
          >
            {page.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default BlogHeader;
