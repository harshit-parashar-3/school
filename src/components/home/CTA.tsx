import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Begin Your Journey at S.D. Convent High School
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Join a community of scholars, athletes, and artists. Applications for 
            the 2025-26 academic year are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light shadow-gold font-semibold">
              <Link to="/admissions">
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 bg-primary-foreground/10">
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" /> Schedule a Visit
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
