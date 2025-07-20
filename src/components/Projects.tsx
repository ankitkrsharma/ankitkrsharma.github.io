import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recommendation Engine",
      description: "Built a scalable recommendation system using collaborative filtering and deep learning that serves 10M+ users with sub-100ms latency.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Microservices Architecture Platform",
      description: "Designed and implemented a cloud-native microservices platform with auto-scaling, service mesh, and comprehensive monitoring.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&h=600&fit=crop",
      technologies: ["Go", "Kubernetes", "Istio", "Prometheus", "Grafana", "gRPC"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Real-time Analytics API",
      description: "Developed a high-throughput analytics API processing 1M+ events/second with real-time dashboard and alerting system.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&h=600&fit=crop",
      technologies: ["Node.js", "Apache Kafka", "ClickHouse", "React", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Natural Language Processing Pipeline",
      description: "Created an end-to-end NLP pipeline for sentiment analysis and text classification with 95% accuracy on production data.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1000&h=600&fit=crop",
      technologies: ["Python", "PyTorch", "Hugging Face", "FastAPI", "MLflow"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Distributed Data Processing System",
      description: "Built a fault-tolerant distributed system for processing terabytes of data daily with automatic recovery and load balancing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&h=600&fit=crop",
      technologies: ["Java", "Apache Spark", "Cassandra", "RabbitMQ", "Terraform"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Computer Vision API Service",
      description: "Developed a RESTful API for object detection and image classification using state-of-the-art computer vision models.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&h=600&fit=crop",
      technologies: ["Python", "OpenCV", "YOLO", "FastAPI", "AWS", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in backend development and AI engineering
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge className="bg-primary/20 text-primary">Featured</Badge>
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="group bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
