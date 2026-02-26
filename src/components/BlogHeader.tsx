const BlogHeader = () => {
  return (
    <header className="panel-retro p-3 mb-2">
      {/* Classic centered title with decorative ASCII */}
      <div className="text-center">
        <p className="font-retro text-sm text-muted-foreground">.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.</p>
        <h1 className="font-pixel text-lg md:text-xl text-primary my-2 leading-relaxed tracking-wide">
          x--Syber Sentral--x
        </h1>
        <p className="font-retro text-lg text-secondary">
          {">>"}  Games * Anime * Tokusatsu * Music  {"<<"}
        </p>
        <p className="font-retro text-sm text-muted-foreground">.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.</p>
      </div>

      <div className="pixel-divider my-2" />

      {/* Marquee - authentic scrolling text */}
      <div className="overflow-hidden panel-inset my-2">
        <p className="font-body text-sm text-accent marquee-scroll whitespace-nowrap py-1">
          +*+ Welcome 2 my site!! +*+ Last updated: 02/25/06 +*+ New tokusatsu review up!! +*+ Currently playing: Kingdom Hearts II +*+ Now watching: Bleach ep 72 +*+ Guestbook is open, plz sign it!! +*+
        </p>
      </div>

      {/* Navigation - styled like era-accurate text links */}
      <nav className="text-center my-2">
        <span className="font-body text-sm text-muted-foreground">[ </span>
        {["Home", "Games", "Anime", "Tokusatsu", "Music", "Links", "Guestbook", "About"].map((item, i) => (
          <span key={item}>
            <a href="#" className="link-retro font-body text-sm font-bold">
              {item}
            </a>
            {i < 7 && <span className="font-body text-sm text-muted-foreground"> | </span>}
          </span>
        ))}
        <span className="font-body text-sm text-muted-foreground"> ]</span>
      </nav>

      <div className="pixel-divider my-2" />

      {/* Status line - very LiveJournal */}
      <div className="text-center font-body text-xs text-muted-foreground">
        <p>Site est. 2004 // Made with Notepad and luv {"<3"} // Best viewed in Firefox 1.5 @ 1024x768</p>
      </div>
    </header>
  );
};

export default BlogHeader;
