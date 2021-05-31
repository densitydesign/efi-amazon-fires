import '../scss/style.scss';
import Header from './Header';
import Seo from './Seo';

export default function Layout({ children, section }) {
  return (
    <div>
      <Seo section={section} />
      <Header section={section} />
      {children}

    </div>
  );
}
