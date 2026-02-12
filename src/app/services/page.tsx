import { CTA } from "@/components/sections/cta";

const detailedServices = [
  {
    title: "Web Design",
    description: "Our design process is rooted in understanding your brand and your audience. We create visually stunning websites that are not just beautiful, but also functional and high-converting.",
    features: ["Responsive Design", "Brand Identity", "Prototyping", "Design Systems"],
  },
  {
    title: "Web Development",
    description: "We build robust, scalable, and secure web applications using the latest technologies. From e-commerce platforms to complex SaaS products, we've got you covered.",
    features: ["Frontend Development", "Backend Systems", "CMS Integration", "E-commerce Solutions"],
  },
  {
    title: "UI/UX Design",
    description: "User experience is at the heart of everything we do. We design intuitive interfaces that guide users seamlessly through their journey, ensuring maximum engagement.",
    features: ["User Research", "Wireframing", "Usability Testing", "Interaction Design"],
  },
  {
    title: "SEO Optimization",
    description: "Having a great website is only half the battle. We ensure your target audience can find you by optimizing your site for search engines and driving organic traffic.",
    features: ["Technical SEO", "Keyword Research", "Content Strategy", "Performance Optimization"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="container-wide section-padding">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Expertise That <br /> <span className="text-primary">Drives Growth</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We offer specialized digital services to help modern brands excel in an ever-evolving landscape.
          </p>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 gap-12">
            {detailedServices.map((service, index) => (
              <div
                key={service.title}
                id={service.title.toLowerCase().replace(" ", "-")}
                className={`flex flex-col md:flex-row gap-12 p-12 rounded-[2rem] bg-card border border-border ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-muted rounded-2xl aspect-video md:aspect-auto flex items-center justify-center">
                   {/* Placeholder for service image/illustration */}
                   <span className="text-muted-foreground font-medium italic">Service Visual Representation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
