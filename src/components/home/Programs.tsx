import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import scienceLab from "@/assets/science-lab.jpg";
import sportsField from "@/assets/sports-field.jpg";
import artClassroom from "@/assets/art-classroom.jpg";

const programs = [
  {
    image: scienceLab,
    title: "STEM & Innovation",
    description: "Cutting-edge labs, robotics, and research programs preparing students for careers in science and technology.",
    link: "/academics",
  },
  {
    image: sportsField,
    title: "Athletics & Wellness",
    description: "Competitive sports programs and wellness initiatives that build teamwork, discipline, and healthy habits.",
    link: "/academics",
  },
  {
    image: artClassroom,
    title: "Arts & Humanities",
    description: "Comprehensive arts education including visual arts, performing arts, music, and creative writing.",
    link: "/academics",
  },
];

export function Programs() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Discover Your Passion
          </h2>
          <p className="text-muted-foreground text-lg">
            Our diverse programs cater to every interest, helping students discover 
            their strengths and pursue their passions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <Link
                  to={program.link}
                  className="inline-flex items-center text-accent font-medium hover:text-gold-light transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light">
            <Link to="/academics">
              View All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
