import { Card, CardContent } from "./ui/card";
import { Code, Brain, Server, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Expertise in microservices, APIs, and scalable server architecture"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep learning, neural networks, and intelligent system design"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, data warehousing, and analytics solutions"
    },
    {
      icon: Code,
      title: "DevOps & Cloud",
      description: "CI/CD, containerization, and cloud infrastructure management"
    }
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Backend and AI Engineer with over 5 years of experience building 
              scalable systems and intelligent solutions. My expertise spans from designing 
              robust microservices architectures to implementing cutting-edge machine learning models.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating high-performance backend systems that can handle millions 
              of requests while maintaining reliability and security. My AI work focuses on 
              practical applications that solve real-world problems.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;