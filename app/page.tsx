import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { Features } from "@/components/landing/Features";
import { WhyCamp } from "@/components/landing/WhyCamp";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  // IMPORTANT: there is a bug if someone manually deletes the cookie then have to invalidate the cache, of tanstack query - so that user cant access protected pages

  // TODO: further redirect the user to their chat page rather than /discover
  const res = await fetch("http://localhost:8080/api/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",  // not caching the response because different users have different cookies - if cached then another user could be redirected to /discover even if they are not logged in
  });

  if (res.ok) {
    redirect("/discover");
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <WhyCamp />
        <ProductPreview />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
