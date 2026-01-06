import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield, Eye, Lock, UserCheck, Database, Globe } from "lucide-react";

const Privacy = () => {
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
            <Shield className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Your privacy is important to us. This policy outlines how we collect,
              use, and protect your personal information.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                At S.D. Convent High School, we are committed to protecting the privacy and security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or engage with our services.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Database className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Information We Collect
                </h2>
              </div>

              <div className="space-y-4 ml-0 sm:ml-14">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Submit an admissions application or inquiry</li>
                    <li>Register for campus tours or events</li>
                    <li>Contact us through our website or email</li>
                    <li>Subscribe to our newsletters or communications</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    This information may include: name, email address, phone number, mailing address,
                    student information, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automatic Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we may automatically collect certain information about
                    your device, including information about your web browser, IP address, time zone,
                    and some of the cookies installed on your device.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  How We Use Your Information
                </h2>
              </div>

              <div className="ml-0 sm:ml-14">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Process admissions applications and inquiries</li>
                  <li>Communicate with prospective and current families</li>
                  <li>Schedule campus tours and events</li>
                  <li>Send newsletters and important updates</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Lock className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Data Security
                </h2>
              </div>

              <div className="ml-0 sm:ml-14">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We implement appropriate technical and organizational security measures to protect
                  your personal information against unauthorized access, alteration, disclosure, or
                  destruction. These measures include:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Restricted access to personal information</li>
                  <li>Staff training on data protection practices</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  However, please note that no method of transmission over the Internet or electronic
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </motion.div>

            {/* Sharing Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Sharing Your Information
                </h2>
              </div>

              <div className="ml-0 sm:ml-14">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information only in the following circumstances:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>With service providers who assist us in operating our website and services</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>With your consent or at your direction</li>
                  <li>In connection with accreditation or regulatory requirements</li>
                </ul>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <UserCheck className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Your Rights and Choices
                </h2>
              </div>

              <div className="ml-0 sm:ml-14">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@sdconvent.edu
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our
                website. You can control cookies through your browser settings. However, disabling
                cookies may limit your ability to use certain features of our website.
              </p>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting the privacy of children. Our website is not directed
                to children under 13, and we do not knowingly collect personal information from
                children under 13 without parental consent. For students under 18, we collect
                information only with parental consent and in accordance with applicable laws.
              </p>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last Updated"
                date. We encourage you to review this Privacy Policy periodically.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-xl"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> privacy@sdconvent.edu</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Mail:</strong> S.D. Convent High School, Rajpoot Colony Harpalpur, District Chhatarpur, M.P. 471111</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
