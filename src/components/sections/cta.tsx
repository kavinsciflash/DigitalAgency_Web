"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section>
      <div className="container-wide section-padding">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-12 md:p-24 text-center">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Ready to start your <br /> next digital project?
            </h2>
            <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Let&apos;s collaborate to build something extraordinary. Our team is ready to help you bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group"
              >
                Let&apos;s Talk
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-full font-bold border border-background/20 hover:bg-background/10 transition-all"
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
