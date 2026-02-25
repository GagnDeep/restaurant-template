import { HydrateClient } from "@/trpc/server";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { SocialProof } from "@/components/sections/social-proof";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureDeepDive } from "@/components/sections/feature-deep-dive";
import { Timeline } from "@/components/sections/timeline";
import { Benefits } from "@/components/sections/benefits";
import { ProductPreview } from "@/components/sections/product-preview";
import { CreatorPreview } from "@/components/sections/creator-preview";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { UseCases } from "@/components/sections/use-cases";
import { Comparison } from "@/components/sections/comparison";
import { Integrations } from "@/components/sections/integrations";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { FaqPreview } from "@/components/sections/faq-preview";
import { CTA } from "@/components/sections/cta";
import { Newsletter } from "@/components/sections/newsletter";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="flex min-h-screen flex-col bg-background relative z-10 mb-[600px] shadow-2xl pb-12">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Logos />
          <SocialProof />
          <FeatureGrid />
          <FeatureDeepDive />
          <Timeline />
          <Benefits />
          <ProductPreview />
          <CreatorPreview />
          <TestimonialsCarousel />
          <UseCases />
          <Comparison />
          <Integrations />
          <PricingPreview />
          <FaqPreview />
          <CTA />
          <Newsletter />
        </main>
      </div>
      <Footer />
    </HydrateClient>
  );
}
