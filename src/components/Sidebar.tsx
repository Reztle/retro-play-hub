import { useEffect, useState } from "react";

export default function Sidebar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/hit")
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error("Hit counter error:", err));
  }, []);

  const links = [
    { label: "Chatroom", url: "http://localhost:5000/chatroom" },
    { label: "Henshin Justice", url: "#" },
    { label: "Neon Hacking", url: "#" },
    { label: "Cool Links", url: "#" },
  ];

  return (
    <div className="sidebar">

      {/* Cool Links */}
      <div className="panel-retro p-3">
        <h3 className="font-pixel text-[10px] text-accent glow-yellow mb-2">Menu</h3>
        <div className="pixel-divider mb-2" />
        <ul className="font-retro text-base text-foreground space-y-1">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.url} className="hover:underline">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hit Counter */}
      <div className="panel-retro p-3 text-center">
        <p className="font-pixel text-[16px] text-accent glow-yellow">Visitor no.</p>
        <p className="font-retro text-[60px] text-accent glow-yellow">
          {count.toLocaleString()}
        </p>
        <p className="font-pixel text-[10px] text-magenta mt-1 blink-slow">
          ↖(￣▽￣) Welcome!
        </p>
      </div>

      {/* Updates */}
      <div className="panel-retro p-3">
        <h3 className="font-pixel text-[10px] text-accent glow-yellow mb-2">Updates</h3>
        <div className="pixel-divider mb-2" />
        <ul className="font-retro text-base text-foreground space-y-1">
          <li>03.03.2026 - Custom music player</li>
          <li>03.03.2026 - Navbar updated</li>
          <li>03.03.2026 - Chatroom Broken Again</li>
          <li>28.02.2026 - Chatroom Works!</li>
          <li>28.02.2026 - Hit Counter added</li>
          <li>26.02.2026 - Site created</li>
        </ul>
      </div>

      {/* Mini Calendar */}
      <div className="panel-retro p-3 text-center">
        <p className="font-pixel text-[8px] text-muted-foreground mb-1">Est. 2026</p>
        <p className="font-pixel text-[7px] text-muted-foreground">Made with Lovable and Visual Studio, all art used was created by me.</p>
      </div>
    </div>
  );
}
