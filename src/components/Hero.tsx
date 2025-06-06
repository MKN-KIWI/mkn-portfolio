
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950 px-4 pt-16 sm:pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold shadow-lg">
            MKN
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 px-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Muhammed KN
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 md:mb-4 px-2">
            Full Stack Developer & Tech Entrepreneur
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
            Crafting digital experiences with Python, Web Technologies, and innovative solutions. 
            Founder of Weblysi.in and passionate about building impactful applications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-12 px-2">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto text-sm sm:text-base">
              <a href="#projects" className="flex items-center justify-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <a href="#contact" className="flex items-center justify-center gap-2">
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
            <a
              href="https://github.com/MrMKN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-kn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://mr-mkn.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
