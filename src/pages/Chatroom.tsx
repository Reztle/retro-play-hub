import { useState } from "react";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import Sidebar from "@/components/Sidebar";

const CHATROOM_URL = "http://localhost:5000";

const Chatroom = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<{ username: string; message: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${CHATROOM_URL}/chatroom/api`);
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error("Failed to fetch chatroom posts:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !message.trim()) return;
    setLoading(true);
    try {
      await fetch(`${CHATROOM_URL}/chatroom/post`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, message }),
      });
      setMessage("");
      await fetchPosts();
    } catch (err) {
      console.error("Failed to post message:", err);
    }
    setLoading(false);
  };

  useState(() => { fetchPosts(); });

  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab="" onTabClick={() => {}} />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            <div className="panel-retro p-6">
              <h2 className="font-pixel text-lg text-primary glow-cyan mb-4">☆ Chatroom ☆</h2>
              <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="Your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full font-retro text-lg bg-muted border-2 border-border text-foreground p-2 focus:outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Write something..."
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full font-retro text-lg bg-muted border-2 border-border text-foreground p-2 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="font-pixel text-[10px] px-4 py-2 border-2 border-border bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                >
                  {loading ? "Posting..." : "Post"}
                </button>
              </form>
              <div className="pixel-divider mb-4" />
              {posts.length > 0 ? (
                <div className="space-y-3">
                  {posts.map((post, i) => (
                    <div key={i} className="border-t-2 border-border pt-3">
                      <p className="font-pixel text-[10px] text-accent glow-yellow">{post.username}</p>
                      <p className="font-retro text-lg text-foreground mt-1">{post.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-retro text-lg text-muted-foreground">No posts yet. Be the first to say something.</p>
              )}
            </div>
          </main>
          <div className="w-full md:w-64 shrink-0">
            <Sidebar />
          </div>
        </div>
        <BlogFooter />
      </div>
    </div>
  );
};

export default Chatroom;
