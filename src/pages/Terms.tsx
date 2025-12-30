import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FileText, AlertCircle, Scale, BookOpen, UserX, RefreshCw } from "lucide-react";

const Terms = () => {
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
            <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Please read these terms carefully before using our website and services.
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
                Welcome to Prestige Academy. These Terms of Service govern your use of our website
                and services. By accessing or using our website, you agree to be bound by these terms.
                If you do not agree to these terms, please do not use our website.
              </p>
            </motion.div>

            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Acceptance of Terms
                </h2>
              </div>

              <div className="ml-0 sm:ml-14 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms
                  and provision of this agreement. Additionally, when using our services, you shall be
                  subject to any posted guidelines or rules applicable to such services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Your continued use of the
                  website following any changes indicates your acceptance of the new terms.
                </p>
              </div>
            </motion.div>

            {/* Use of Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Use of Website
                </h2>
              </div>

              <div className="ml-0 sm:ml-14">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree to use our website only for lawful purposes and in a way that does not
                  infringe the rights of others. You must not:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Use the website in any way that violates any applicable local, national, or international law</li>
                  <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                  <li>Attempt to gain unauthorized access to any portion of the website or any systems or networks</li>
                  <li>Interfere with or disrupt the website or servers or networks connected to the website</li>
                  <li>Use any robot, spider, or other automatic device to monitor or copy our website</li>
                  <li>Introduce any viruses, trojan horses, worms, or other malicious or harmful material</li>
                </ul>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The content, organization, graphics, design, compilation, and other matters related
                  to our website are protected under applicable copyrights, trademarks, and other
                  proprietary rights. The copying, redistribution, use, or publication of any such
                  content is strictly prohibited without our express written permission.
                </p>
                <p>
                  All trademarks, service marks, and trade names are proprietary to Prestige Academy
                  or other respective owners that have granted us the right and license to use such marks.
                </p>
              </div>
            </motion.div>

            {/* Application and Admissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Application and Admissions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By submitting an application through our website, you certify that all information
                  provided is true, accurate, and complete. Any false or misleading information may
                  result in rejection of the application or dismissal if discovered after enrollment.
                </p>
                <p>
                  Submission of an application does not guarantee admission. All admissions decisions
                  are at the sole discretion of Prestige Academy and are based on multiple factors
                  including but not limited to academic performance, recommendations, and available capacity.
                </p>
                <p>
                  Application fees, if any, are non-refundable unless otherwise stated in our admissions policy.
                </p>
              </div>
            </motion.div>

            {/* User Accounts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <UserX className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  User Accounts and Security
                </h2>
              </div>

              <div className="ml-0 sm:ml-14 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you create an account on our website, you are responsible for maintaining the
                  confidentiality of your account credentials and for all activities that occur under
                  your account.
                </p>
                <p>
                  You must immediately notify us of any unauthorized use of your account or any other
                  breach of security. We will not be liable for any loss or damage arising from your
                  failure to protect your account information.
                </p>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <AlertCircle className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Disclaimer of Warranties
                </h2>
              </div>

              <div className="ml-14">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  THIS WEBSITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES INCLUDED ON OR
                  OTHERWISE MADE AVAILABLE TO YOU THROUGH THIS WEBSITE ARE PROVIDED "AS IS" AND "AS
                  AVAILABLE" WITHOUT WARRANTY OF ANY KIND.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We do not warrant that the website will be uninterrupted, timely, secure, or error-free.
                  We make no warranty that the results obtained from use of the website will be accurate
                  or reliable.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To the fullest extent permitted by law, Prestige Academy shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, or any loss of
                  profits or revenues, whether incurred directly or indirectly, or any loss of data,
                  use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Your access to or use of or inability to access or use the website</li>
                  <li>Any conduct or content of any third party on the website</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
              </div>
            </motion.div>

            {/* Links to Third-Party Websites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Links to Third-Party Websites
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites that are not owned or controlled
                by Prestige Academy. We have no control over, and assume no responsibility for, the
                content, privacy policies, or practices of any third-party websites. You acknowledge
                and agree that we shall not be responsible or liable for any damage or loss caused by
                use of or reliance on any such content available on or through any such websites.
              </p>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our website immediately, without prior notice
                or liability, for any reason whatsoever, including without limitation if you breach these
                Terms of Service. Upon termination, your right to use the website will immediately cease.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the State
                of Massachusetts, United States, without regard to its conflict of law provisions. Any
                legal action or proceeding arising under these Terms will be brought exclusively in the
                courts located in Cambridge, Massachusetts.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <RefreshCw className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Changes to Terms
                </h2>
              </div>

              <div className="ml-0 sm:ml-14">
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at
                  any time. If a revision is material, we will provide at least 30 days' notice prior
                  to any new terms taking effect. What constitutes a material change will be determined
                  at our sole discretion.
                </p>
              </div>
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
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> legal@prestigeacademy.edu</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Mail:</strong> Prestige Academy, 123 Academic Drive, Cambridge, MA 02138</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
