import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Links from "./pages/Links";
import About from "./pages/About";
import ArtGallery from "./pages/ArtGallery";
import MusicShelf from "./pages/MusicShelf";
import Chatroom from "./pages/Chatroom";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/links" element={<Links />} />
          <Route path="/about" element={<About />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/music-shelf" element={<MusicShelf />} />
          <Route path="/chatroom" element={<Chatroom />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
