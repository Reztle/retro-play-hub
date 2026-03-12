import RetroMusicPlayer from "./RetroMusicPlayer";

interface BlogPostProps {
  title: string;
  date: string;
  tags?: string[];
  selectedTag?: string;
  content: string;
  mood?: string;
  music?: string;
  audio?: string;
  images?: string[];
}

// tags render below; category-specific styling has been removed
const BlogPost = ({ title, date, tags = [], selectedTag, content, mood, music, audio, images = [] }: BlogPostProps) => {
  return (
    <article className="panel-retro p-4 mb-4">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="font-retro text-base text-muted-foreground">{date}</span>
      </div>

      {/* render additional tags if provided */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag) => {
            const isActive =
              selectedTag && tag.toLowerCase() === selectedTag.toLowerCase();
            return (
              <span
                key={tag}
                className={`font-pixel text-[8px] px-2 py-1 border border-border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}

      <h2 className="font-retro text-2xl text-primary glow-cyan mb-2">{title}</h2>
      <div className="pixel-divider mb-3" />
      <div className="font-body text-base text-foreground leading-relaxed whitespace-pre-line">
        {content}
      </div>
      {(mood) && (
        <div className="mt-3 pt-2 border-t-2 border-border font-retro text-base">
          {mood && <p className="text-secondary">Current Mood: {mood}</p>}
        </div>
      )}
      {audio && music && (
        <RetroMusicPlayer title={music} src={audio} />
      )}
      {audio && !music && (
        <RetroMusicPlayer title="Unknown Track" src={audio} />
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
