import '../scss/style.scss';

export function Heading1({ text, classi }) {
  return (
    <h1 className={`serif fw-bolder ${classi}`}>{text}</h1>
  );
}
export function Heading4({ text, classi }) {
  return (
    <h4 className={`serif fw-bolder ${classi}`}>{text}</h4>
  );
}

export function Quote({ text, classi }) {
  return (
    <h6 className={`serif fst-italic ${classi}`}>{text}</h6>
  );
}
