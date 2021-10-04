import '../scss/style.scss';
import img1 from '../images/first-issue/img-1.png';

export default function Image({ src, classi }) {
  return (
    <img src={src} className={`img-fluid w-100  ${classi}`} alt="..." />
  );
}
