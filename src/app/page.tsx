
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import ScrollMessageCarousel from '@/components/ScrollMessageCarousel'
import Sponsors from '@/components/Sponsors'
import WhyLina from '@/components/WhyLina'
import CTA from '@/components/CTA'


export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollMessageCarousel />
      <HowItWorks />
      <Sponsors />
      <WhyLina />
      <CTA />
      
    </main>
  )
}
