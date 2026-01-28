import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />

      {/* Footer Section */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-brand-primary font-bold text-lg tracking-tighter">PP<span className="text-white">.</span></p>
          <p className="text-text-muted text-sm">© {new Date().getFullYear()} Pallavi Pandey. Built with React & Next.js.</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="https://github.com/Pallavi-Pandey" target="_blank" className="text-xs text-text-muted hover:text-brand-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/pallavi181/" target="_blank" className="text-xs text-text-muted hover:text-brand-primary transition-colors">LinkedIn</a>
            <a href="mailto:pallavipandey181@gmail.com" className="text-xs text-text-muted hover:text-brand-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
