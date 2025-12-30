import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Prestige Academy gave my daughter the confidence and skills to pursue her dreams. She's now studying engineering at MIT.",
    author: "Sarah Mitchell",
    role: "Parent, Class of 2022",
  },
  {
    quote: "The teachers here truly care about every student. They pushed me to excel while supporting me through challenges.",
    author: "James Chen",
    role: "Alumni, Class of 2020",
  },
  {
    quote: "The diverse programs helped me discover my passion for the arts. I'll always be grateful for my time here.",
    author: "Emily Rodriguez",
    role: "Alumni, Class of 2021",
  },
];

export function Testimonials() {
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            What Our Community Says
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="h-10 w-10 text-accent/20 absolute top-6 right-6" />
              <p className="text-foreground italic mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
