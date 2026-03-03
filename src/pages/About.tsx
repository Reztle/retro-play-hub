import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";

const About = () => {
  return (
    <div className="min-h-screen py-4 px-2">
      <div className="container max-w-5xl mx-auto">
        <BlogHeader selectedTab="" onTabClick={() => {}} />
        <div className="panel-retro p-6">
          <h2 className="font-pixel text-lg text-primary glow-cyan mb-4">☆ About ☆</h2>
          <p className="font-retro text-lg text-foreground">More about me coming soon!</p>
        </div>
        <BlogFooter />
      </div>
    </div>
  );
};

export default About;
