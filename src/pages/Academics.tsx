import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BookOpen, GraduationCap, Award, Clock, Users, CheckCircle } from "lucide-react";
import scienceLab from "@/assets/science-lab.jpg";
import artClassroom from "@/assets/art-classroom.jpg";

const programs = [
  {
    level: "Elementary School",
    grades: "K-5",
    description: "A foundation of curiosity and discovery where young learners develop core skills through hands-on exploration.",
    features: ["Project-Based Learning", "STEM Integration", "Arts & Music", "World Languages"],
  },
  {
    level: "Middle School",
    grades: "6-8",
    description: "A transitional program that challenges students while supporting their social and emotional development.",
    features: ["Advisory Program", "Elective Courses", "Leadership Opportunities", "Athletic Programs"],
  },
  {
    level: "High School",
    grades: "9-12",
    description: "A rigorous college-preparatory curriculum with extensive AP offerings and specialized tracks.",
    features: ["20+ AP Courses", "Honors Programs", "Research Opportunities", "College Counseling"],
  },
];

const curriculum = [
  {
    subject: "Mathematics",
    description: "From foundational concepts to advanced calculus and statistics.",
    icon: "📐",
  },
  {
    subject: "Sciences",
    description: "Biology, Chemistry, Physics with hands-on lab experiences.",
    icon: "🔬",
  },
  {
    subject: "Humanities",
    description: "Literature, History, Philosophy, and Social Sciences.",
    icon: "📚",
  },
  {
    subject: "World Languages",
    description: "Spanish, French, Mandarin, and Latin offerings.",
    icon: "🌍",
  },
  {
    subject: "Fine Arts",
    description: "Visual arts, music, theater, and digital media.",
    icon: "🎨",
  },
  {
    subject: "Technology",
    description: "Computer science, robotics, and digital literacy.",
    icon: "💻",
  },
];

const Academics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Academics
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              A World-Class Education
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our rigorous curriculum, expert faculty, and innovative teaching methods 
              prepare students for success at top universities and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: BookOpen, value: "20+", label: "AP Courses" },
              { icon: GraduationCap, value: "98%", label: "College Acceptance" },
              { icon: Award, value: "15:1", label: "Student-Teacher Ratio" },
              { icon: Clock, value: "7", label: "Periods Per Day" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
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
              Programs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Education for Every Stage
            </h2>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border p-8 md:p-10"
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                      Grades {program.grades}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {program.level}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-foreground mb-4">Program Highlights</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
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
              Curriculum
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Comprehensive Subject Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((subject, index) => (
              <motion.div
                key={subject.subject}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-colors"
              >
                <span className="text-4xl mb-4 block">{subject.icon}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {subject.subject}
                </h3>
                <p className="text-muted-foreground">{subject.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
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
              Facilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              State-of-the-Art Learning Spaces
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={scienceLab}
                alt="Science Laboratory"
                loading="lazy"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  Science Laboratories
                </h3>
                <p className="text-primary-foreground/80">
                  Advanced labs for biology, chemistry, and physics
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={artClassroom}
                alt="Art Studios"
                loading="lazy"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  Art Studios
                </h3>
                <p className="text-primary-foreground/80">
                  Creative spaces for visual arts and design
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
