const BlogFooter = () => {
  return (
    <footer className="panel-retro p-3 mt-4 text-center">
      <div className="pixel-divider mb-2" />
      <p className="font-retro text-lg text-muted-foreground">
        © 2004-2026 NeoOtaku Zone | All Rights Reserved
      </p>
      <p className="font-retro text-base text-muted-foreground mt-1">
        Powered by pure HTML spirit ★ No AI was harmed in the making of this site
      </p>
      <div className="flex justify-center gap-3 mt-2">
        {["Valid HTML!", "Valid CSS!", "Powered by ♥"].map((badge) => (
          <span
            key={badge}
            className="font-pixel text-[7px] px-2 py-1 border border-border text-primary"
          >
            {badge}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default BlogFooter;
