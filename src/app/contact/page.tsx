import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32">
      <section className="container-wide section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Let&apos;s Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have a project in mind or just want to say hi? We&apos;d love to hear from you. Fill out the form or reach out through our contact details.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-xl font-medium">hello@kavinstudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-xl font-medium">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Visit Us</p>
                  <p className="text-xl font-medium">123 Creative Street, Design City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
