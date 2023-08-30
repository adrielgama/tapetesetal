import { Navbar } from './pages/navbar';

import { HomeSection } from '@/app/pages/home';
import { About } from './pages/about';
import { Clients } from './pages/clients';
import { Products } from './pages/products';
import { Footer } from './pages/footer';
import { Contact } from './pages/contact';
import { Dialog } from '@/components/ui/dialog';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/shared/LoadingSpinner';

const LazyMapa = lazy(() => import('@/components/shared/Map'));

export default function Home() {
  return (
    <div>
      <Dialog>
        <Navbar />
        <main className="flex-col items-center justify-between">
          <HomeSection />
          <About id="about" />
          <Clients id="clients" />
          <Products id="product" />
          <Contact id="contact" />
          <Suspense fallback={<LoadingSpinner />}>
            <LazyMapa />
          </Suspense>
        </main>
        <Footer />
      </Dialog>
    </div>
  );
}
