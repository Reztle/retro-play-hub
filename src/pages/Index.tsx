import { useState } from "react";
import { Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";
import Sidebar from "@/components/Sidebar";
import BlogFooter from "@/components/BlogFooter";
import posts from "@/data/posts";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const filteredPosts = selectedTab === "Home"
    ? posts
    : posts.filter(post =>
        post.tags?.some(tag => tag.toLowerCase() === selectedTab.toLowerCase())
      );

  const displayedPosts = filteredPosts.slice(0, 5);

  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab={selectedTab} onTabClick={setSelectedTab} />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            {displayedPosts.length > 0 ? (
              displayedPosts.map((post, i) => (
                <Link key={i} to={`/post/${post.slug}`} className="block no-underline text-inherit">
                  <BlogPost {...post} selectedTag={selectedTab} />
                </Link>
              ))
            ) : (
              <div className="panel-retro p-4 text-center">
                <p className="font-retro text-lg text-muted-foreground">No posts yet for this tag!</p>
              </div>
            )}
            {filteredPosts.length > 5 && (
              <p className="font-pixel text-[10px] text-center text-muted-foreground mt-2">
                Showing 5 of {filteredPosts.length} posts
              </p>
            )}
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

export default Index;
