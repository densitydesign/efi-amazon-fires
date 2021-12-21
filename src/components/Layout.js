import '../scss/style.scss';
import Seo from './Seo';
import '@fontsource/gentium-book-basic';
import '@fontsource/open-sans';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, section }) {
  return (
    <div>
      <Seo section={section} />
      <div className="mobile text-white d-flex d-lg-none d-md-none d-sm-none justify-content-center align-items-center">
        <div className="px-2">
          <p className="text-center">Oops</p>
          <p className="text-center">For a Better use of this website we recommend to use a pc or a tablet.</p>
        </div>
      </div>
      <Navbar />
      {children}
      <Footer />

    </div>
  );
}
