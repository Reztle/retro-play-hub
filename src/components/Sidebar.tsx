import { useState, useEffect } from "react";

const Sidebar = () => {
  const [count, setCount] = useState(48721);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="space-y-4">
      {/* About Me */}
      <div className="panel-retro p-3">
        <h3 className="font-pixel text-[10px] text-secondary glow-magenta mb-2">About Me</h3>
        <div className="pixel-divider mb-2" />
        <div className="font-retro text-lg text-foreground space-y-1">
          <p>Name: Sen</p>
          <p>Age: 19</p>
          <p>Fav Game: Section 8: Prejudice</p>
          <p>Fav Anime: Evangelion</p>
          <p>Fav Rider: Kamen Rider Zero-One</p>
        </div>
      </div>

      {/* Updates */}
      <div className="panel-retro p-3">
        <h3 className="font-pixel text-[10px] text-accent glow-yellow mb-2">Updates</h3>
        <div className="pixel-divider mb-2" />
        <ul className="font-retro text-base text-foreground space-y-1">
          <li>02/25 - New tokusatsu review!</li>
          <li>02/20 - Updated links page</li>
          <li>02/15 - Site redesign v3.0!</li>
          <li>02/10 - Added guestbook</li>
        </ul>
      </div>

      {/* Links */}
      <div className="panel-retro p-3">
        <h3 className="font-pixel text-[10px] text-primary glow-cyan mb-2">Cool Links</h3>
        <div className="pixel-divider mb-2" />
        <ul className="font-retro text-lg space-y-1">
          {[
            "GameFAQs",
            "MyAnimeList",
            "Henshin Justice",
            "ROM Hacking",
            "Newgrounds",
          ].map((link) => (
            <li key={link}>
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                → {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hit Counter */}
      <div className="panel-retro p-3 text-center">
        <p className="font-pixel text-[8px] text-muted-foreground mb-1">Visitors</p>
        <p className="font-retro text-2xl text-accent glow-yellow">{count.toLocaleString()}</p>
        <p className="font-pixel text-[7px] text-muted-foreground mt-1 blink-slow">
          ● Online Now
        </p>
      </div>

      {/* Mini Calendar */}
      <div className="panel-retro p-3 text-center">
        <p className="font-pixel text-[8px] text-secondary mb-1">Est. 2026</p>
        <p className="font-retro text-base text-muted-foreground">
          Best viewed in 1024x768
        </p>
        <p className="font-retro text-base text-muted-foreground">
          Made with ♥ and HTML
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
