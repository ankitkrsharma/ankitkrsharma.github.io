import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend & AI Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading the development of AI-powered microservices architecture serving 50M+ users. Designed and implemented machine learning pipelines for real-time recommendation systems.",
      achievements: [
        "Reduced API response time by 70% through optimization",
        "Led team of 6 engineers in migrating monolith to microservices",
        "Implemented ML model serving platform with 99.9% uptime"
      ],
      technologies: ["Python", "Go", "Kubernetes", "TensorFlow", "AWS", "PostgreSQL"]
    },
    {
      title: "Backend Engineer",
      company: "DataFlow Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed scalable data processing systems and RESTful APIs. Built real-time analytics platform processing 10M+ events daily.",
      achievements: [
        "Architected event-driven system handling 1M requests/hour",
        "Improved data pipeline efficiency by 60%",
        "Mentored 3 junior developers"
      ],
      technologies: ["Node.js", "Apache Kafka", "MongoDB", "Redis", "Docker", "Jenkins"]
    },
    {
      title: "Software Engineer",
      company: "StartupXY",
      location: "Remote",
      period: "2019 - 2020",
      description: "Full-stack development with focus on backend services. Worked on MVP development and scaling infrastructure from 0 to 100k users.",
      achievements: [
        "Built MVP backend serving 100k+ users",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
        "Optimized database queries improving performance by 50%"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "React", "AWS", "Terraform"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable systems and intelligent solutions across different industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary mb-2">{exp.company}</div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;