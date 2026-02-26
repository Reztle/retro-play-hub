interface BlogPostProps {
  title: string;
  date: string;
  category: "games" | "anime" | "tokusatsu";
  content: string;
  mood?: string;
  music?: string;
}

const categoryColors = {
  games: "bg-games text-primary-foreground",
  anime: "bg-anime text-secondary-foreground",
  tokusatsu: "bg-tokusatsu text-primary-foreground",
};

const categoryEmoji = {
  games: "🎮",
  anime: "📺",
  tokusatsu: "⚡",
};

const BlogPost = ({ title, date, category, content, mood, music }: BlogPostProps) => {
  return (
    <article className="panel-retro p-4 mb-4">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className={`font-pixel text-[8px] px-2 py-1 ${categoryColors[category]}`}>
          {categoryEmoji[category]} {category.toUpperCase()}
        </span>
        <span className="font-retro text-base text-muted-foreground">{date}</span>
      </div>
      <h2 className="font-retro text-2xl text-primary glow-cyan mb-2">{title}</h2>
      <div className="pixel-divider mb-3" />
      <div className="font-body text-base text-foreground leading-relaxed whitespace-pre-line">
        {content}
      </div>
      {(mood || music) && (
        <div className="mt-3 pt-2 border-t-2 border-border font-retro text-base">
          {mood && <p className="text-secondary">Current Mood: {mood}</p>}
          {music && <p className="text-accent">Now Playing: {music} ♪</p>}
        </div>
      )}
      <div className="flex gap-2 mt-3">
        <button className="font-pixel text-[8px] px-2 py-1 border border-border text-muted-foreground hover:text-primary transition-colors">
          ✉ 3 Comments
        </button>
        <button className="font-pixel text-[8px] px-2 py-1 border border-border text-muted-foreground hover:text-secondary transition-colors">
          ♥ Bookmark
        </button>
      </div>
    </article>
  );
};

export default BlogPost;
