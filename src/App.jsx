import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';
import Layout from './components/Layout';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Layout>
        <main>
          <Hero />
          <About />
          <Contact />
          <Donation />
        </main>
      </Layout>
      <Footer />
    </div>
  );
}