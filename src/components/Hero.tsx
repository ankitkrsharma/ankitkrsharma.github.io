import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Photo Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
              {/* Replace this div with your actual photo */}
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">JD</span>
              </div>
              {/* Uncomment and use this img tag when you have your photo */}
              {/* <img 
                src="/path-to-your-photo.jpg" 
                alt="John Doe Profile Picture"
                className="w-full h-full object-cover"
              /> */}
            </div>
            {/* Optional: Animated border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-glow"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Backend & AI Engineer
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable backend systems and intelligent AI solutions. 
            Experienced in microservices, machine learning, and cloud infrastructure.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:scale-110 transition-all">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:scale-110 transition-all">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:scale-110 transition-all">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;