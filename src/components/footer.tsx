import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              KAVIN<span className="text-primary">.</span>STUDIO
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              We design and build premium digital experiences for brands that want to stand out in the digital age.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Agency</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Web Design</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kavin Digital Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
