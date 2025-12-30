import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Academic Drive\nCambridge, MA 02138",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(123) 456-7890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@prestigeacademy.edu",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon-Fri: 8:00 AM - 5:00 PM",
  },
];

const departments = [
  { name: "General Inquiries", email: "info@prestigeacademy.edu" },
  { name: "Admissions Office", email: "admissions@prestigeacademy.edu" },
  { name: "Academic Affairs", email: "academics@prestigeacademy.edu" },
  { name: "Financial Aid", email: "financialaid@prestigeacademy.edu" },
  { name: "Athletics Department", email: "athletics@prestigeacademy.edu" },
];

// Replace this URL with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

const Contact = () => {

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about Prestige Academy? We're here to help. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Department Contacts
              </h3>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <div key={dept.name} className="p-4 bg-card rounded-lg border border-border">
                    <p className="font-medium text-foreground text-sm">{dept.name}</p>
                    <a 
                      href={`mailto:${dept.email}`} 
                      className="text-accent hover:text-gold-light transition-colors text-sm"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card p-8 md:p-10 rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out our contact form and we'll get back to you within 24-48 hours.
                </p>

                {/* OPTION 1: Button to open Google Form in new tab (Recommended) */}
                <div className="space-y-6">
                  <div className="bg-secondary p-8 rounded-lg text-center">
                    <div className="max-w-md mx-auto">
                      <Mail className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        Contact Form
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Click the button below to fill out our contact form. Your message will be sent directly to our admissions team.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-gold-light shadow-gold font-semibold w-full sm:w-auto"
                      >
                        <a
                          href={GOOGLE_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-5 w-5" /> Open Contact Form
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Alternative contact methods */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Or contact us directly via:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <a
                        href="mailto:info@prestigeacademy.edu"
                        className="flex items-center justify-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                        <span className="text-sm">info@prestigeacademy.edu</span>
                      </a>
                      <a
                        href="tel:+11234567890"
                        className="flex items-center justify-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground"
                      >
                        <Phone className="h-4 w-4 text-accent" />
                        <span className="text-sm">(123) 456-7890</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* OPTION 2: Embedded Google Form (Uncomment to use instead of button)
                <div className="w-full" style={{ minHeight: "800px" }}>
                  <iframe
                    src={GOOGLE_FORM_URL}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg"
                  >
                    Loading…
                  </iframe>
                </div>
                */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Location
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Visit Our Campus
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <div className="aspect-[21/9] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  123 Academic Drive, Cambridge, MA 02138
                </h3>
                <p className="text-muted-foreground mb-6">
                  Located in the heart of Cambridge, just minutes from Harvard Square
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
