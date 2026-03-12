import { useParams, useNavigate } from "react-router-dom";
import posts from "@/data/posts";
import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";
import BlogFooter from "@/components/BlogFooter";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Home");
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen py-4 px-2">
        <div className="container max-w-5xl mx-auto">
          <BlogHeader selectedTab={selectedTab} onTabClick={setSelectedTab} />
          <div className="panel-retro p-4 text-center">
            <p className="font-retro text-lg text-muted-foreground">Post not found!</p>
            <button
              onClick={() => navigate("/")}
              className="font-pixel text-[10px] px-3 py-2 mt-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ← Back to Home
            </button>
          </div>
          <BlogFooter />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab={selectedTab} onTabClick={setSelectedTab} />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            <button
              onClick={() => navigate("/")}
              className="font-pixel text-[10px] px-3 py-2 mb-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ← Back
            </button>
            <BlogPost {...post} />
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

export default PostPage;
