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
    <aside className="space-y-3">
      {/* About Me - very 2000s personal info dump */}
      <div className="panel-retro p-2">
        <div className="panel-inset p-1 mb-2">
          <p className="font-pixel text-[8px] text-primary text-center">About Me</p>
        </div>
        <div className="font-body text-xs text-foreground space-y-0.5">
          <p><b>Name:</b> Neo</p>
          <p><b>Age:</b> 17</p>
          <p><b>Location:</b> somewhere in cyberspace~</p>
          <p><b>Likes:</b> jpop, kamen rider, rpgs, drawing, html</p>
          <p><b>Dislikes:</b> school, lag, spoilers {">_<"}</p>
          <p className="pt-1"><b>AIM:</b> <span className="text-primary">xNeoOtaku04x</span></p>
          <p><b>MSN:</b> <span className="text-primary">neo_sentral@hotmail.com</span></p>
        </div>
      </div>

      {/* Updates */}
      <div className="panel-retro p-2">
        <div className="panel-inset p-1 mb-2">
          <p className="font-pixel text-[8px] text-accent text-center">Updates</p>
        </div>
        <ul className="font-body text-xs text-foreground space-y-0.5">
          <li>02/25 - New toku review up!!</li>
          <li>02/20 - Fixed links page {"^_^"}</li>
          <li>02/15 - Site redesign v3.0 omg</li>
          <li>02/10 - Guestbook is back!</li>
          <li>02/01 - Added new blinkies lol</li>
        </ul>
      </div>

      {/* Currently */}
      <div className="panel-retro p-2">
        <div className="panel-inset p-1 mb-2">
          <p className="font-pixel text-[8px] text-secondary text-center">Currently~</p>
        </div>
        <div className="font-body text-xs text-foreground space-y-0.5">
          <p><b>Playing:</b> Kingdom Hearts II</p>
          <p><b>Watching:</b> Bleach, Kamen Rider Kabuto</p>
          <p><b>Listening:</b> L'Arc~en~Ciel - READY STEADY GO</p>
          <p><b>Reading:</b> Naruto ch. 298</p>
          <p><b>Mood:</b> hyper!! {"=D"}</p>
        </div>
      </div>

      {/* Links */}
      <div className="panel-retro p-2">
        <div className="panel-inset p-1 mb-2">
          <p className="font-pixel text-[8px] text-primary text-center">Cool Links</p>
        </div>
        <ul className="font-body text-xs space-y-0.5">
          {[
            "GameFAQs",
            "MyAnimeList",
            "Henshin Justice Unlimited",
            "Gaia Online",
            "Newgrounds",
            "deviantART",
            "AnimeSuki",
            "TokyoPop",
          ].map((link) => (
            <li key={link}>
              <a href="#" className="link-retro">{"> "}{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Fanlistings */}
      <div className="panel-retro p-2">
        <div className="panel-inset p-1 mb-2">
          <p className="font-pixel text-[8px] text-secondary text-center">Fanlistings</p>
        </div>
        <div className="font-body text-xs text-foreground space-y-0.5">
          <p><a href="#" className="link-retro">+ Final Fantasy VII</a></p>
          <p><a href="#" className="link-retro">+ Neon Genesis Evangelion</a></p>
          <p><a href="#" className="link-retro">+ Kamen Rider</a></p>
          <p><a href="#" className="link-retro">+ Asian Kung-Fu Generation</a></p>
          <p><a href="#" className="link-retro">+ Rurouni Kenshin</a></p>
        </div>
      </div>

      {/* Hit Counter */}
      <div className="panel-retro p-2 text-center">
        <p className="font-body text-xs text-muted-foreground mb-1">~*Visitors*~</p>
        <div className="panel-inset inline-block px-3 py-1">
          <p className="font-retro text-lg text-accent">{count.toLocaleString()}</p>
        </div>
        <p className="font-body text-[10px] text-muted-foreground mt-1 blink-slow">
          You are visitor #{count.toLocaleString()}!!
        </p>
      </div>

      {/* 88x31 Badges area */}
      <div className="panel-retro p-2 text-center">
        <div className="panel-inset p-1 mb-2">
          <p className="font-pixel text-[8px] text-primary text-center">Badges</p>
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          {["FIREFOX", "XHTML", "CSS", "NO IE", "ANIME FAN", "GAMER"].map((badge) => (
            <span key={badge} className="badge-88x31 text-primary">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Site info */}
      <div className="panel-retro p-2 text-center font-body text-[10px] text-muted-foreground space-y-0.5">
        <p>Est. 2004</p>
        <p>Best viewed in Firefox</p>
        <p>Screen res: 1024x768</p>
        <p>Made with Notepad {"<3"}</p>
        <p className="text-primary">Steal my layout and DIE {">"}_{"<"}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
