import { CTA } from "@/components/sections/cta";
import Image from "next/image";

const allProjects = [
  {
    title: "Eco-Friendly E-commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    year: "2024"
  },
  {
    title: "AI SaaS Platform",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    year: "2023"
  },
  {
    title: "Luxury Watch Brand",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
    year: "2024"
  },
  {
    title: "FinTech Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    year: "2023"
  },
  {
    title: "Travel App Mobile UI",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    year: "2022"
  },
  {
    title: "Real Estate Portal",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    year: "2024"
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-32">
      <section className="container-wide section-padding">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Selected <span className="text-primary">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of our most recent and impactful projects. We take pride in delivering excellence for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-primary font-medium mb-1 uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <span className="text-muted-foreground font-mono">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
