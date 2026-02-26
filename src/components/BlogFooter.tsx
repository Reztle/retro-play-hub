const BlogFooter = () => {
  return (
    <footer className="panel-retro p-3 mt-3 text-center">
      <div className="pixel-divider mb-2" />

      {/* Webring navigation - very era accurate */}
      <div className="panel-inset inline-block px-4 py-2 mb-2">
        <p className="font-pixel text-[8px] text-secondary mb-1">~ Otaku Webring ~</p>
        <div className="font-body text-xs space-x-2">
          <a href="#" className="link-retro">{"<< prev"}</a>
          <span className="text-muted-foreground">|</span>
          <a href="#" className="link-retro">random</a>
          <span className="text-muted-foreground">|</span>
          <a href="#" className="link-retro">{"next >>"}</a>
        </div>
      </div>

      <div className="pixel-divider mb-2" />

      <p className="font-body text-xs text-muted-foreground">
        &copy; 2004-2006 Syber Sentral // All Rights Reserved
      </p>
      <p className="font-body text-[10px] text-muted-foreground mt-1">
        Layout v3.0 // Hand-coded in Notepad // Do NOT steal!!
      </p>
      <p className="font-body text-[10px] text-muted-foreground mt-0.5">
        Hosted on Geocities {"<3"} // Powered by pure HTML spirit
      </p>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {["Valid XHTML!", "Valid CSS!", "Get Firefox!", "Notepad", "Anti-IE"].map((badge) => (
          <span key={badge} className="badge-88x31 text-primary">
            {badge}
          </span>
        ))}
      </div>

      <p className="font-body text-[10px] text-muted-foreground mt-2">
        Disclaimer: I don't own any of the anime/games/shows mentioned here.
        <br />
        All trademarks belong to their respective owners. Don't sue me plz {"^_^;"}
      </p>
    </footer>
  );
};

export default BlogFooter;
