
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
            MKN
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Muhammed KN
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & Tech Entrepreneur
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with Python, Web Technologies, and innovative solutions. 
            Founder of Weblysi.in and passionate about building impactful applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/MrMKN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-kn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://mr-mkn.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
