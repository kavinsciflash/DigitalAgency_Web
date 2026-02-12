"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kavin Digital Studio transformed our online presence completely. Their attention to detail and creative approach are unmatched.",
    author: "Sarah Johnson",
    role: "CEO at TechFlow",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "The team delivered a high-performing website that exceeded our expectations. Our conversion rate has increased by 40% since launch.",
    author: "Mark Davis",
    role: "Marketing Director at NexGen",
    avatar: "https://i.pravatar.cc/150?u=mark",
  },
  {
    quote: "Working with them was a breeze. They understood our vision perfectly and brought it to life with stunning design and code.",
    author: "Elena Rodriguez",
    role: "Founder of Bloom Agency",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

export function Testimonials() {
  return (
    <section className="bg-muted/30">
      <div className="container-wide section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what some of our amazing clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border flex flex-col h-full"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              <p className="text-lg mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
