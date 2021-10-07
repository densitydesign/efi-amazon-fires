import '../scss/style.scss';

export default function Image({ src, classi }) {
  return (
    <img src={src} className={`img-fluid w-100  ${classi}`} alt="..." />
  );
}
