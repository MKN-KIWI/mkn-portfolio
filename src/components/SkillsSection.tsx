
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Python", level: 100, color: "bg-yellow-500", gradient: "from-yellow-400 to-orange-500" },
  { name: "HTML/CSS/JS", level: 95, color: "bg-orange-500", gradient: "from-orange-400 to-red-500" },
  { name: "PHP Laravel", level: 75, color: "bg-red-500", gradient: "from-red-400 to-pink-500" },
  { name: "React", level: 50, color: "bg-blue-500", gradient: "from-blue-400 to-cyan-500" },
  { name: "Go", level: 40, color: "bg-cyan-500", gradient: "from-cyan-400 to-teal-500" },
];

const technologies = [
  { name: "Python", color: "from-yellow-500 to-teal-500" },
  { name: "Django", color: "from-green-500 to-emerald-500" },
  { name: "Telegram API", color: "from-blue-500 to-cyan-500" },
  { name: "Git", color: "from-orange-500 to-red-500" },
  { name: "MongoDB", color: "from-green-500 to-teal-500" },
  { name: "Shell Script", color: "from-gray-500 to-slate-500" },
  { name: "Python Libraries", color: "from-yellow-500 to-orange-500" },
  { name: "Static Sites", color: "from-purple-500 to-pink-500" },
  { name: "PHP Laravel", color: "from-orange-500 to-red-500" },
  { name: "Telegram Bots", color: "from-indigo-500 to-purple-500" },
  { name: "Full Stack Development", color: "from-pink-500 to-rose-500" }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Programming Skills */}
          <Card className="border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                🚀 Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm sm:text-base flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.gradient}`}></div>
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={skill.level} className="h-3 bg-gray-200 dark:bg-gray-700" />
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Technologies & Tools */}
          <Card className="border-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="text-lg sm:text-xl">
                🛠️ Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech.name} 
                    variant="secondary" 
                    className={`text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r ${tech.color} text-white border-0 hover:scale-110 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Specializations */}
        <div className="mt-8 sm:mt-12 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ⭐ Specializations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-green-700 dark:text-green-300">
                Web Development
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Full-stack web applications using modern technologies and frameworks
              </p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-blue-700 dark:text-blue-300">
                Telegram API
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Advanced Telegram bot development and API integration
              </p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 md:col-span-1 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-purple-700 dark:text-purple-300">
                System Development
              </h4>
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
