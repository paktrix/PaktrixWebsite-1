import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Network, Compass } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';
import { useState, useEffect } from 'react';
import { fetchProducts, Product } from '../lib/products';
import { supabase } from '../lib/supabase';
import ProcessCycle from '../components/ProcessCycle';
import FAQItem from '../components/FAQItem';
import ClientLogos from '../components/ClientLogos';
import heroFallback from '../assets/heroImage.png';

interface HeroSection {
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
  background_image: string;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [heroSection, setHeroSection] = useState<HeroSection>({
    title: 'Your Single-Window Partner for Paper-Based & Flexible Packaging',
    subtitle: 'PAKTRIX helps brands source, develop and manage packaging through a network of established manufacturing partners. From paper-based cartons and boxes to flexible pouches, we bring multiple packaging capabilities together through one point of contact. We also guide startups and growing businesses in selecting the right packaging material, structure and specifications — helping them make informed decisions before moving into production.',
    cta_text: 'Explore Packaging Solutions',
    cta_link: '/products',
    background_image: heroFallback
  });

  useEffect(() => {
    loadFeaturedProducts();
    loadHeroSection();
  }, []);

  const loadFeaturedProducts = async () => {
    const products = await fetchProducts();
    setFeaturedProducts(products.slice(0, 3));
  };

  const loadHeroSection = async () => {
    const { data } = await supabase
      .from('hero_sections')
      .select('*')
      .eq('page', 'home')
      .eq('is_active', true)
      .maybeSingle();

    if (data) {
      setHeroSection({
        title: data.title,
        subtitle: data.subtitle,
        cta_text: data.cta_text,
        cta_link: data.cta_link,
        background_image: data.background_image
      });
    }
  };

  return (
    <div>
      <section className="relative bg-gradient-to-b from-brand-green to-brand-teal text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {heroSection.title}
              </h1>
              <p className="text-md mb-8 text-green-50 leading-relaxed">
                {heroSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={heroSection.cta_link}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-green rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  {heroSection.cta_text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-brand-green transition-colors"
                >
                  Get Packaging Guidance
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img style={{"height":"29rem","maxWidth":"40rem"}}
                src={heroSection.background_image}
                alt=""
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroFallback; }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              One Partner. Three Ways We Help.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              PAKTRIX brings multiple packaging capabilities together through a single point of contact — so you can source, plan and scale packaging without juggling multiple vendors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-8 border-2 border-transparent hover:border-brand-green hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-brand-green text-white flex items-center justify-center mb-6">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                Multiple Packaging Categories
              </h3>
              <p className="text-gray-600">
                Paper-based cartons and boxes plus flexible packaging (MDO/PE pouches), coordinated through one point of contact across food, cosmetics, pharma, textiles and gifting.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8 border-2 border-transparent hover:border-brand-green hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-brand-green text-white flex items-center justify-center mb-6">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                Manufacturing Partner Network
              </h3>
              <p className="text-gray-600">
                With manufacturing plants spread across the country, we specialize in a wide variety of packaging solutions under one roof — giving you access to diverse materials, formats, and finishes without the complexity of coordinating multiple vendors.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8 border-2 border-transparent hover:border-brand-green hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-brand-green text-white flex items-center justify-center mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                Packaging Advisory for Startups
              </h3>
              <p className="text-gray-600">
                We help startups and growing businesses choose the right packaging material, structure and specifications — so you make informed decisions before moving into production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Packaging Solutions Across Two Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From paper-based cartons and boxes to flexible pouches, we coordinate multiple packaging formats through one point of contact — tailored to your product, industry and scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-lg p-6 border-2 border-brand-green/20">
              <h3 className="text-lg font-semibold text-brand-green mb-2">Paper-Based Packaging</h3>
              <p className="text-gray-600 text-sm">
                Cartons and boxes for food, cosmetics, pharma, textiles and gifting — coordinated through our manufacturing partner network.
              </p>
            </div>
            {/* DRAFT: Flexible packaging card — placeholder copy and image until real MDO/PE pouch assets are supplied */}
            <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300 opacity-60">
              <h3 className="text-lg font-semibold text-gray-500 mb-2">Flexible Packaging (Coming Soon)</h3>
              <p className="text-gray-400 text-sm">
                MDO/PE pouches and flexible packaging formats — managed through the same single point of contact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 border-2 border-transparent hover:border-brand-green transition-all duration-500 group"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-green duration-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-brand-green font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-brand-green text-white rounded-lg font-semibold hover:bg-brand-teal transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Sets Our Packaging Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From custom branding to sustainable materials and advanced manufacturing, every part of our process is built to help your products stand out.
            </p>
          </div>

          <div className="space-y-8">
            {/* Custom Branding */}
            <div className="bg-white rounded-lg shadow-md p-8 lg:p-10 border-2 border-transparent hover:border-brand-green hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                Custom Branding & Printing, Coordinated End to End
              </h3>
              <p className="text-gray-600 mb-8 max-w-4xl">
                Packaging plays a major role in building brand identity. We work with you and our manufacturing partners to coordinate design and printing that increases shelf appeal and customer engagement — managed through a single point of contact.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  'Offset Printing',
                  'Digital Printing',
                  'Flexographic Printing',
                  'UV Printing',
                  'Foil Stamping',
                  'Embossing & Debossing',
                  'Matte & Gloss Lamination',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                We ensure every packaging order reflects professionalism and quality — with printing and finishing coordinated across our manufacturing partner network.
              </p>
            </div>

            {/* Eco-Friendly */}
            <div className="bg-white rounded-lg shadow-md p-8 lg:p-10 border-2 border-transparent hover:border-brand-green hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                Sustainable & Eco-Friendly Packaging Solutions
              </h3>
              <p className="text-gray-600 mb-8 max-w-4xl">
                Modern businesses are shifting towards environmentally responsible packaging. We offer sustainable packaging solutions made with recyclable and eco-friendly materials, helping brands reduce environmental impact while maintaining premium quality.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Recyclable materials',
                  'Minimal waste production',
                  'Sustainable printing methods',
                  'Biodegradable packaging options',
                  'Reusable packaging designs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manufacturing */}
            <div className="bg-white rounded-lg shadow-md p-8 lg:p-10 border-2 border-transparent hover:border-brand-green hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                Coordinated Manufacturing & Quality Control
              </h3>
              <p className="text-gray-600 mb-8 max-w-4xl">
                We coordinate production across established manufacturing partners using strict quality standards, so every packaging order is consistent and reliable. We manage specifications, sampling and inspection so you don't have to deal with multiple factories directly.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Large-scale production capacity',
                  'Precision die-cutting',
                  'Automated printing systems',
                  'Custom box prototyping',
                  'Quality inspection at every stage',
                  'Secure packaging and delivery',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ProcessCycle />

      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold mb-4">
                For Startups & Growing Businesses
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Collaborating with Startups in Their Growth Phase
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We partner with startups and growing businesses through a collaborative model designed for the growth phase — supporting your packaging needs as you scale, with flexibility and a long-term relationship in mind.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Collaborative partnership approach',
                  'Flexible packaging solutions that scale with you',
                  'Support across your growth journey',
                  'Diverse formats through our multi-plant network',
                  'Priority attention for growing brands',
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-brand-green mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-brand-green text-white rounded-lg font-semibold hover:bg-brand-teal transition-colors"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Compass className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">A Partnership, Not a Transaction</h4>
                    <p className="text-sm text-gray-600">We work alongside startups as a long-term packaging partner — invested in your growth, not just a one-off order.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Layers className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Solutions That Scale With You</h4>
                    <p className="text-sm text-gray-600">Our multi-plant network adapts to your changing volumes and formats as your brand grows from launch to scale.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Network className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Priority Attention for Growing Brands</h4>
                    <p className="text-sm text-gray-600">Startups in our collaboration get hands-on support and responsive communication throughout the engagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs
        title="Why Choose Our Packaging Solutions?"
        subtitle="Businesses today require packaging that is functional, attractive, and cost-effective. We coordinate packaging solutions tailored to your industry requirements and branding goals — managed through one point of contact."
      />

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">15+</div>
              <div className="text-gray-600">Years in Packaging</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">100+</div>
              <div className="text-gray-600">Brands Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">50M+</div>
              <div className="text-gray-600">Units Coordinated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about how PAKTRIX works as your single-window packaging partner.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: 'What does a single-window packaging partner do?',
                answer: 'PAKTRIX brings multiple packaging capabilities together through one point of contact. Instead of dealing with several factories yourself, we coordinate specifications, samples, production and delivery across our manufacturing partner network — for both paper-based and flexible packaging.',
              },
              {
                question: 'Do you manufacture packaging yourselves or work with partners?',
                answer: 'We coordinate production through a network of established manufacturing partners. We manage the requirement end to end — specifications, sampling, quality checks and dispatch — so you get the benefit of multiple manufacturing capabilities without managing multiple vendors.',
              },
              {
                question: 'Can you help startups choose the right packaging?',
                answer: 'Yes. We collaborate with startups and growing businesses as a packaging partner during their growth phase — offering flexible solutions, priority attention, and a relationship designed to scale alongside your brand.'
              },
              {
                question: 'What packaging formats do you coordinate?',
                answer: 'We handle two main families: paper-based packaging (cartons and boxes for food, cosmetics, pharma, textiles and gifting) and flexible packaging (MDO/PE pouches). Both are managed through a single point of contact.',
              },
              {
                question: 'Are eco-friendly packaging solutions available?',
                answer: 'Yes. We coordinate sustainable packaging options made from recyclable and eco-friendly materials through our manufacturing partner network, helping brands reduce environmental impact while maintaining premium quality.',
              },
              {
                question: 'How do I get started with PAKTRIX?',
                answer: 'Reach out through our contact page with your product, industry and packaging requirement. We will assess your needs, recommend the right format and material, coordinate samples and quoting, and manage production through to delivery — all through one point of contact.',
              },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-brand-green to-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            One Packaging Partner. Multiple Manufacturing Capabilities. Expert Guidance from Planning to Production.
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Tell us about your product and packaging requirement — we will recommend the right format, coordinate samples and quoting, and manage production through to delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-brand-green rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
