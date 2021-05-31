import '../scss/style.scss';
import { Helmet } from 'react-helmet';
import Header from './Header';

export default function Layout({ children, section }) {
  return (
    <div>

      <Helmet />
      <Header section={section} />
      {children}
    </div>
  );
}
