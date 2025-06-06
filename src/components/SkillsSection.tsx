
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Programming Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Technologies & Tools */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-sm py-2 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Specializations */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Specializations</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className="text-sm text-muted-foreground">
                Full-stack web applications using modern technologies and frameworks
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Telegram API</h4>
              <p className="text-sm text-muted-foreground">
                Advanced Telegram bot development and API integration
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">System Development</h4>
              <p className="text-sm text-muted-foreground">
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
