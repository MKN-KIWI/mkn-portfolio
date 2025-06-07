
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const Hero = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950 dark:via-blue-950 dark:to-pink-950 px-2 sm:px-4 pt-16 sm:pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Lazy Loading */}
          <div className="relative w-32 h-32 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-4 sm:mb-6 md:mb-8">
            {!logoLoaded && (
              <img
                src="/logo.png"
                alt="Loading Logo Frame"
                className="w-full h-full rounded-full object-cover border-2 border-purple-300 dark:border-purple-700"
              />
              // <Skeleton className="w-full h-full rounded-full bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800" />
            )}
            <div 
              className={`${logoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 w-full h-full rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 flex items-center justify-center text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-gradient bg-[length:200%_200%]`}
              onLoad={() => setLogoLoaded(true)}
            >
              <span className="drop-shadow-lg">MKN</span>
            </div>
          </div>
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] drop-shadow-sm">
              Mohammed KN
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 font-medium">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Full Stack Developer & Tech Entrepreneur
            </span>
          </p>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-1 sm:px-2 leading-relaxed">
            Crafting digital experiences with <span className="text-yellow-600 font-semibold">Python</span>, 
            <span className="text-blue-600 font-semibold"> Web Technologies</span>, and innovative solutions. 
            Founder of <span className="text-purple-600 font-semibold">Weblysi.in</span> and passionate about building impactful applications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 px-1 sm:px-2">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 hover:from-purple-700 hover:via-blue-700 hover:to-pink-700 w-full sm:w-auto text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="#projects" className="flex items-center justify-center gap-2">
                View My Work
                <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 animate-bounce" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 transition-all duration-300 hover:scale-105">
              <a href="#contact" className="flex items-center justify-center gap-2">
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            <a
              href="https://github.com/MrMKN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900 dark:hover:to-pink-900"
            >
              <Github className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-kn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-blue-200 hover:to-blue-300 dark:hover:from-blue-800 dark:hover:to-blue-700"
            >
              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="https://mr-mkn.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-green-200 hover:to-emerald-300 dark:hover:from-green-800 dark:hover:to-emerald-700"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
