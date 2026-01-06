import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Award, Target, Eye, Heart } from "lucide-react";
import studentsLibrary from "@/assets/students-library.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in academics, athletics, and character.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "We act with honesty, responsibility, and respect in all that we do.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We embrace creative thinking and adapt to prepare students for the future.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We foster a supportive environment where everyone belongs and thrives.",
  },
];

const principal = {
  name: "Mrs. Sunita Sharma",
  role: "Principal",
  qualifications: "M.A., B.Ed.",
  experience: "25+ years in educational leadership",
  message: "At S.D. Convent High School, we believe in nurturing not just academic excellence but also character, creativity, and compassion. Our mission is to provide a holistic education that prepares students to face the challenges of tomorrow with confidence and integrity. We are committed to creating a safe, inclusive, and inspiring environment where every child can discover their potential and achieve their dreams.",
};

const leadership = [
  {
    name: "Mr. Rajesh Kumar",
    role: "Vice Principal",
    description: "With 20 years of experience, Mr. Kumar oversees academic programs and curriculum development.",
  },
  {
    name: "Mrs. Priya Verma",
    role: "Head of Academics",
    description: "Mrs. Verma leads our academic initiatives and ensures excellence in teaching methodology.",
  },
  {
    name: "Mr. Amit Singh",
    role: "Director of Activities",
    description: "Mr. Singh manages extracurricular programs and student development activities.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              A Legacy of Academic Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              S.D. Convent High School has been at the forefront of educational innovation,
              preparing students for success in an ever-changing world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Shaping Future Leaders
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  S.D. Convent High School has grown into one of the region's most respected
                  educational institutions. Our founders believed that every child deserves
                  access to exceptional education, and that belief continues to guide us today.
                </p>
                <p>
                  Over the years, we've expanded our campus, added new programs, and
                  welcomed students from across the district. Our core mission remains
                  unchanged: to nurture curious minds and develop well-rounded individuals
                  ready to make a positive impact on society.
                </p>
                <p>
                  Today, our alumni include leaders in business, science, arts, and public
                  service. They carry with them the values and knowledge instilled during
                  their time at S.D. Convent High School.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={studentsLibrary}
                alt="Students collaborating in library"
                loading="lazy"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-accent p-4 sm:p-6 rounded-xl shadow-lg">
                <p className="font-display text-2xl sm:text-3xl font-bold text-accent-foreground">Excellence</p>
                <p className="text-sm sm:text-base text-accent-foreground/80">In Education</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                To provide an exceptional educational experience that challenges students 
                intellectually, nurtures their creativity, builds their character, and 
                prepares them to be thoughtful, engaged citizens of the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                To be recognized as a leading educational institution that produces 
                graduates who are not only academically accomplished but also ethically 
                grounded, culturally aware, and prepared to lead in an interconnected world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              The Principles That Guide Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
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
              Principal's Message
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              A Message from Our Principal
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-4xl text-primary-foreground font-bold">
                    {principal.name.split(" ").slice(-1)[0][0]}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {principal.name}
                  </h3>
                  <p className="text-accent font-semibold text-lg mb-1">{principal.role}</p>
                  <p className="text-muted-foreground text-sm">{principal.qualifications}</p>
                  <p className="text-muted-foreground text-sm">{principal.experience}</p>
                </div>
              </div>
              <div className="relative pl-6 border-l-4 border-accent">
                <p className="text-muted-foreground leading-relaxed text-lg italic">
                  "{principal.message}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Meet Our Leadership Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl border border-border text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl text-primary-foreground font-bold">
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-accent font-medium mb-4">{leader.role}</p>
                <p className="text-muted-foreground">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
