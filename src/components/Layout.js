import '../scss/style.scss';
import Seo from './Seo';

export default function Layout({ children, section }) {
  return (
    <div>
      <Seo section={section} />
      {children}
    </div>
  );
}
