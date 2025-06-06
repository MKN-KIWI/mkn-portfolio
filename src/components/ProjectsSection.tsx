
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Weblysi.in - Tech Startup",
    description: "My tech startup providing web development and digital solutions. A comprehensive platform offering various web services and solutions for businesses.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    technologies: ["Python", "Django", "React", "MongoDB"],
    liveUrl: "https://weblysi.in",
    githubUrl: "#"
  },
  {
    title: "Clinic Management System",
    description: "A comprehensive clinic management system built with Django. Features patient management, appointment scheduling, and medical records.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    technologies: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN"
  },
  {
    title: "Telegram Bot Framework",
    description: "Advanced Telegram bot development framework with API integration. Used for creating various automation and utility bots.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    technologies: ["Python", "Telegram API", "MongoDB", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN"
  },
  {
    title: "Student Mentoring Platform",
    description: "A platform for mentoring college students with project guidance and resources. Built with PHP and Python integration.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    technologies: ["PHP", "Laravel", "Python", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN"
  },
  {
    title: "Python Libraries Collection",
    description: "Collection of useful Python libraries and tools for various development tasks. Open source contributions to the Python community.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    technologies: ["Python", "PyPI", "Documentation", "Testing"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN"
  },
  {
    title: "Portfolio & Static Sites",
    description: "Collection of beautiful static websites and portfolios created for various clients and personal projects.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://mr-mkn.in",
    githubUrl: "https://github.com/MrMKN"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-muted/30 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Featured Projects</h2>
        
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg leading-tight">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  {project.liveUrl !== "#" && (
                    <Button size="sm" className="flex-1 text-xs sm:text-sm">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <a 
              href="https://github.com/MrMKN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
