import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Palette, Globe, Microscope } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Rigorous Academics",
    description: "Challenging curriculum with AP courses and honors programs that prepare students for top universities.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Average class size of 15 students ensures personalized attention and meaningful connections.",
  },
  {
    icon: Trophy,
    title: "Championship Athletics",
    description: "Over 20 varsity sports with state championships and college recruitment opportunities.",
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description: "Award-winning visual arts, theater, and music programs that nurture creative expression.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International exchange programs and diverse student body representing 30+ countries.",
  },
  {
    icon: Microscope,
    title: "STEM Excellence",
    description: "State-of-the-art labs and research opportunities in partnership with leading universities.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            A Complete Education for Tomorrow's Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            At S.D. Convent High School, we believe in developing the whole student through
            academics, athletics, arts, and character education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
