import '../scss/style.scss';
import Seo from './Seo';
import '@fontsource/gentium-book-basic';
import '@fontsource/open-sans';

export default function Layout({ children, section }) {
  return (
    <div>
      <Seo section={section} />
      {children}
    </div>
  );
}
