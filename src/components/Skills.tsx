import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: ["Python", "Node.js", "Java", "Go", "C++", "Rust", "TypeScript", "JavaScript"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "LangChain", "NLTK", "Pandas"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra", "InfluxDB", "MySQL", "SQLite"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["FastAPI", "Flask", "Express.js", "Spring Boot", "Django", "Apache Kafka", "RabbitMQ", "Nginx"]
    },
    {
      title: "DevOps & Monitoring",
      skills: ["Prometheus", "Grafana", "ELK Stack", "New Relic", "DataDog", "Ansible", "Chef", "Puppet"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;