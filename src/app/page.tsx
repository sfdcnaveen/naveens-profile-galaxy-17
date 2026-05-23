import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BentoGrid from '@/components/BentoGrid';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <BentoGrid />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </>
    );
}
