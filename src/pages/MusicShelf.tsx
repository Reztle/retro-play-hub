import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import Sidebar from "@/components/Sidebar";

const MusicShelf = () => {
  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab="" onTabClick={() => {}} />
        <div className="flex flex-col md:flex-row gap-4">
          <main className="flex-1 min-w-0">
            <div className="panel-retro p-6">
              <h2 className="font-pixel text-lg text-primary glow-cyan mb-4">☆ Music Shelf ☆</h2>
              <p className="font-retro text-lg text-foreground">Music collection coming soon!</p>
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

export default MusicShelf;
