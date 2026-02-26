interface BlogPostProps {
  title: string;
  date: string;
  category: "games" | "anime" | "tokusatsu" | "music";
  content: string;
  mood?: string;
  music?: string;
}

const categoryLabels: Record<string, string> = {
  games: "[games]",
  anime: "[anime]",
  tokusatsu: "[toku]",
  music: "[music]",
};

const categoryClasses: Record<string, string> = {
  games: "text-games",
  anime: "text-anime",
  tokusatsu: "text-tokusatsu",
  music: "text-music",
};

const BlogPost = ({ title, date, category, content, mood, music }: BlogPostProps) => {
  return (
    <article className="panel-retro p-3 mb-3">
      {/* Header row - date + category like a LiveJournal entry */}
      <div className="flex items-center gap-2 mb-1 font-body text-xs">
        <span className="text-muted-foreground">{date}</span>
        <span className={`font-bold ${categoryClasses[category]}`}>
          {categoryLabels[category]}
        </span>
      </div>

      {/* Title - underlined link style */}
      <h2 className="font-body text-base font-bold text-primary mb-1">
        <a href="#" className="link-retro">{title}</a>
      </h2>

      <div className="pixel-divider mb-2" />

      {/* Body text */}
      <div className="font-body text-sm text-foreground leading-relaxed whitespace-pre-line">
        {content}
      </div>

      {/* Mood & Music - LiveJournal style */}
      {(mood || music) && (
        <div className="mt-2 pt-2 border-t border-border font-body text-xs">
          {mood && (
            <p className="text-muted-foreground">
              <span className="font-bold text-secondary">Current Mood:</span> {mood}
            </p>
          )}
          {music && (
            <p className="text-muted-foreground">
              <span className="font-bold text-accent">Current Music:</span> {music}
            </p>
          )}
        </div>
      )}

      {/* Action links - era accurate */}
      <div className="mt-2 font-body text-xs text-muted-foreground">
        <a href="#" className="link-retro">3 comments</a>
        {" | "}
        <a href="#" className="link-retro">leave a comment</a>
        {" | "}
        <a href="#" className="link-retro">add to memories</a>
      </div>
    </article>
  );
};

export default BlogPost;
