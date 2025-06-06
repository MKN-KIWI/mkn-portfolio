
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Python", level: 100, color: "bg-yellow-500" },
  { name: "HTML/CSS/JS", level: 95, color: "bg-orange-500" },
  { name: "PHP Laravel", level: 75, color: "bg-red-500" },
  { name: "React", level: 50, color: "bg-blue-500" },
  { name: "Go", level: 40, color: "bg-cyan-500" },
];

const technologies = [
  "Django", "Telegram API", "Git", "MongoDB", "Shell Script", 
  "Python Libraries", "Static Sites", "Telegram Bots", "Full Stack Development"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Skills & Technologies</h2>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Programming Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Technologies & Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Specializations */}
        <div className="mt-8 sm:mt-12 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Specializations</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Web Development</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Full-stack web applications using modern technologies and frameworks
              </p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Telegram API</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Advanced Telegram bot development and API integration
              </p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">System Development</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Management systems and enterprise applications
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
