import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Inquiry about admissions"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light shadow-gold font-semibold w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
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
