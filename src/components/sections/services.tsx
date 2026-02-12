"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Layout, Search, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Design",
    description: "Crafting beautiful, high-converting websites that capture your brand's essence.",
    icon: <Layout className="h-8 w-8" />,
    color: "text-blue-500",
  },
  {
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications using modern technologies.",
    icon: <Code className="h-8 w-8" />,
    color: "text-emerald-500",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive user experiences and stunning interfaces that delight users.",
    icon: <Monitor className="h-8 w-8" />,
    color: "text-purple-500",
  },
  {
    title: "SEO Optimization",
    description: "Boosting your online visibility and driving organic traffic to your business.",
    icon: <Search className="h-8 w-8" />,
    color: "text-orange-500",
  },
];

export function Services() {
  return (
    <section className="bg-muted/30">
      <div className="container-wide section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Our Specialized <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive suite of digital services designed to help your business grow and thrive in a competitive market.
            </p>
          </div>
          <Link href="/services" className="text-primary font-medium flex items-center gap-1 group">
            View All Services <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className={`mb-6 ${service.color}`}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8">
                {service.description}
              </p>
              <Link href={`/services#${service.title.toLowerCase().replace(" ", "-")}`} className="inline-flex items-center gap-2 text-sm font-bold group/link">
                Learn More <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
