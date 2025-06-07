
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "weblysi.in - Tech Startup",
    description: "My tech startup providing web development and digital solutions. A comprehensive platform offering various web services and solutions for businesses.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    technologies: [],
    liveUrl: "https://weblysi.in",
    githubUrl: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Clinic Management Software",
    description: "A comprehensive clinic management software built with Django. Features patient management, appointment scheduling, and medical records.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    technologies: ["Django", "Python", "SQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Telegram Bot",
    description: "Advanced Telegram bot development with API integration. Used for creating various automation and utility bots.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    technologies: ["Python", "Telegram API", "MongoDB", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Student Mentoring",
    description: "Mentoring college students in web development and Python & PHP programming. Providing guidance and resources for aspiring developers.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    technologies: ["Laravel", "Django", "MySQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Fast2SMS Python Library",
    description: "A Python library for Fast2SMS API integration. Simplifies sending SMS messages using Fast2SMS service.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    technologies: ["Python", "PyPI", "API"],
    liveUrl: "#",
    githubUrl: "https://github.com/MrMKN",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Portfolio & Static Sites",
    description: "About me and my work. A collection of static websites showcasing my projects, skills, and experiences.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    technologies: ["HTML", "CSS", "TypeScript", "React"],
    liveUrl: "https://mr-mkn.in",
    githubUrl: "https://github.com/MrMKN",
    gradient: "from-pink-500 to-rose-500"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:scale-105">
      <div className="relative overflow-hidden">
        {!imageLoaded && (
          <Skeleton className="w-full h-40 sm:h-48" />
        )}
        <img 
          src={project.image} 
          alt={project.title}
          className={`${imageLoaded ? 'opacity-100' : 'opacity-0'} w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-all duration-500`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        <div className="absolute top-2 right-2">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
        </div>
      </div>
      
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech: string, techIndex: number) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className={`text-xs px-2 py-1 border-0 bg-gradient-to-r ${
                techIndex % 4 === 0 ? 'from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300' :
                techIndex % 4 === 1 ? 'from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-700 dark:text-blue-300' :
                techIndex % 4 === 2 ? 'from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-700 dark:text-green-300' :
                'from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 text-orange-700 dark:text-orange-300'
              } hover:scale-105 transition-transform duration-200`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          {project.liveUrl !== "#" && (
            <Button size="sm" className={`flex-1 text-xs sm:text-sm bg-gradient-to-r ${project.gradient} hover:scale-105 transition-transform duration-200 shadow-lg`}>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                Open Site
              </a>
            </Button>
          )}
          
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50 dark:from-purple-950/50 dark:via-blue-950/50 dark:to-pink-950/50 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-purple-300 hover:border-purple-500 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">
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
