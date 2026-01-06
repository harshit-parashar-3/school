import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Camera } from "lucide-react";

// Placeholder images - replace these with actual school photos
const galleryImages = [
  {
    id: 1,
    title: "Annual Sports Day",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&q=80",
  },
  {
    id: 2,
    title: "Science Exhibition",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    id: 3,
    title: "Cultural Festival",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    id: 4,
    title: "Classroom Activities",
    category: "Daily Life",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    id: 5,
    title: "Library Reading Session",
    category: "Daily Life",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
  },
  {
    id: 6,
    title: "Annual Day Celebration",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  },
  {
    id: 7,
    title: "Computer Lab",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    id: 8,
    title: "Art & Craft Workshop",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  },
  {
    id: 9,
    title: "Morning Assembly",
    category: "Daily Life",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
  },
];

const Album = () => {
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
              Photo Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              School Album
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the vibrant moments and memories from S.D. Convent High School.
              From academic achievements to cultural celebrations, witness our journey together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="h-4 w-4 text-accent" />
                      <span className="text-accent text-sm font-medium">{image.category}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-secondary rounded-xl"
          >
            <Camera className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              More Memories Coming Soon
            </h3>
            <p className="text-muted-foreground">
              We're constantly updating our gallery with new photos from school events and activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Photos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Events</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-primary-foreground/80">Activities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80">Years</div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Album;
