"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Eco-Friendly E-commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI SaaS Platform",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Luxury Watch Brand",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
  },
];

export function FeaturedProjects() {
  return (
    <section>
      <div className="container-wide section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into some of the digital experiences we&apos;ve crafted recently. Each project is a unique blend of strategy and creativity.
            </p>
          </div>
          <Link href="/portfolio" className="text-primary font-medium flex items-center gap-1 group">
            View All Projects <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-black p-4 rounded-full">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-primary font-medium mb-2 uppercase tracking-widest">{project.category}</p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
