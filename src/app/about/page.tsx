import { CTA } from "@/components/sections/cta";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="container-wide section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              We Are <span className="text-primary">Kavin Digital Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded in 2020, we started with a simple mission: to bridge the gap between imagination and digital reality. Today, we are a team of dedicated designers and developers who push the boundaries of what&apos;s possible online.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-border">
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-muted-foreground">Industry Awards</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Team working"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do, from the first line of code to the final design pixel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We constantly explore new technologies and design trends to keep our clients ahead." },
              { title: "Quality", desc: "We never compromise on the quality of our work. Excellence is our standard." },
              { title: "Transparency", desc: "We believe in clear communication and honest relationships with our clients." }
            ].map(value => (
              <div key={value.title} className="p-8 rounded-3xl bg-card border border-border">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
