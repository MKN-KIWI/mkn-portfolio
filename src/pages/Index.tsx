
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Linkedin, ExternalLink, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            MKN
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-primary transition-colors text-sm">About</a>
            <a href="#skills" className="hover:text-primary transition-colors text-sm">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors text-sm">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors text-sm">Contact</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>About</a>
              <a href="#skills" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 sm:p-8 shadow-sm border">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base">Born: March 10, 2004</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base">Kannur, Kerala, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base">Pre Degree (+2) & ITI E-Mech</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Professional Focus</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    I'm a passionate full-stack developer with expertise in Python, web technologies, 
                    and Telegram API development. I've created clinic management systems, mentored 
                    college students, and built numerous static websites and Telegram bots. 
                    I'm also the founder of Weblysi.in startup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-muted py-6 sm:py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 sm:gap-6 mb-4">
            <a
              href="https://github.com/MrMKN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-kn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://mr-mkn.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2024 Muhammed KN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
