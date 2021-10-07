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
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
