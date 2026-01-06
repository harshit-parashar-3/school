import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FileText, Calendar, Users, CheckCircle, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Inquiry & Campus Visit",
    description: "Begin by submitting an inquiry form and scheduling a campus tour to experience our community firsthand.",
  },
  {
    number: "02",
    title: "Application Submission",
    description: "Complete our online application, including student essays, teacher recommendations, and academic records.",
  },
  {
    number: "03",
    title: "Interview & Assessment",
    description: "Participate in a student interview and age-appropriate assessment to help us understand your child's needs.",
  },
  {
    number: "04",
    title: "Decision & Enrollment",
    description: "Receive your admission decision and complete enrollment to officially join the S.D. Convent High School family.",
  },
];

const requirements = [
  { grade: "Elementary (K-5)", items: ["Application Form", "Birth Certificate", "Previous Report Cards", "Teacher Recommendation"] },
  { grade: "Middle School (6-8)", items: ["Application Form", "Transcripts", "Teacher Recommendations (2)", "Student Essay", "Assessment"] },
  { grade: "High School (9-12)", items: ["Application Form", "Transcripts", "Teacher Recommendations (2)", "Student Essay", "Interview", "Standardized Test Scores"] },
];

// Calculate current academic year dynamically
const getCurrentAcademicYear = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // Academic year runs Sept-Aug, so if we're in Sept-Dec, use current year
  // If Jan-Aug, we're in the second half of the academic year
  return currentMonth >= 8 ? currentYear : currentYear - 1;
};

const academicYear = getCurrentAcademicYear();
const nextYear = academicYear + 1;

const dates = [
  { event: "Applications Open", date: `September 1, ${academicYear}` },
  { event: "Early Decision Deadline", date: `November 15, ${academicYear}` },
  { event: "Regular Decision Deadline", date: `January 15, ${nextYear}` },
  { event: "Financial Aid Deadline", date: `February 1, ${nextYear}` },
  { event: "Admission Decisions", date: `March 15, ${nextYear}` },
  { event: "Enrollment Deposit Due", date: `April 15, ${nextYear}` },
];

const Admissions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Admissions 2025-26
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              We welcome students who are curious, motivated, and ready to embrace
              the challenges and opportunities of a S.D. Convent High School education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light shadow-gold font-semibold">
                Start Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 bg-primary-foreground/10">
                <Download className="mr-2 h-5 w-5" /> Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: FileText, value: "850+", label: "Applications/Year" },
              { icon: Calendar, value: "15%", label: "Acceptance Rate" },
              { icon: Users, value: "30%", label: "Receive Financial Aid" },
              { icon: CheckCircle, value: "$52K", label: "Avg. Aid Package" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Application Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Your Journey Starts Here
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-display font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
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
              Requirements
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              What You'll Need
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.grade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl border border-border"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  {req.grade}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
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
              Important Dates
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Admission Timeline
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {dates.map((date, index) => (
              <motion.div
                key={date.event}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 py-4 border-b border-border last:border-0"
              >
                <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{date.event}</p>
                </div>
                <div className="text-muted-foreground font-medium">
                  {date.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our admissions team is here to help you through every step of the process. 
              Schedule a call or visit our campus.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light shadow-gold font-semibold">
                <Link to="/contact">
                  Contact Admissions
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 bg-primary-foreground/10">
                <Calendar className="mr-2 h-5 w-5" /> Schedule a Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
