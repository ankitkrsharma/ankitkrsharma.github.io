import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Trophy, Star, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Professional level certification demonstrating expertise in designing distributed systems on AWS.",
      category: "Certification"
    },
    {
      icon: Award,
      title: "Best Innovation Award",
      organization: "TechCorp Solutions",
      date: "2023",
      description: "Recognized for developing an AI-powered recommendation system that increased user engagement by 40%.",
      category: "Award"
    },
    {
      icon: Star,
      title: "Google Cloud Professional ML Engineer",
      organization: "Google Cloud Platform",
      date: "2022",
      description: "Certified in designing and implementing machine learning solutions on Google Cloud Platform.",
      category: "Certification"
    },
    {
      icon: Zap,
      title: "Tech Excellence Award",
      organization: "DataFlow Inc",
      date: "2021",
      description: "Awarded for exceptional performance in building scalable data processing systems.",
      category: "Award"
    },
    {
      icon: Award,
      title: "Certified Kubernetes Administrator",
      organization: "CNCF",
      date: "2021",
      description: "Demonstrates skills in administration and management of Kubernetes clusters.",
      category: "Certification"
    },
    {
      icon: Trophy,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2020-Present",
      description: "Active contributor to various open source projects with 500+ contributions and 2k+ GitHub stars.",
      category: "Recognition"
    }
  ];

  const categoryColors = {
    "Certification": "bg-blue-500/10 text-blue-400",
    "Award": "bg-amber-500/10 text-amber-400",
    "Recognition": "bg-green-500/10 text-green-400"
  };

  return (
    <section className="py-20 px-4" id="achievements">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition of expertise and continuous learning in backend development and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className={categoryColors[achievement.category as keyof typeof categoryColors]}>
                    {achievement.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                <div className="text-sm text-primary font-medium">{achievement.organization}</div>
                <div className="text-sm text-muted-foreground">{achievement.date}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground">Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">OSS Contributions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2k+</div>
            <div className="text-sm text-muted-foreground">GitHub Stars</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;