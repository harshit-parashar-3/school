import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Features } from "@/components/home/Features";
import { Programs } from "@/components/home/Programs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Features />
      <Programs />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
