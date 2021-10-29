import '../scss/style.scss';

export function Heading1({ text, classi }) {
  return (
    <h1 className={`serif fw-bolder ${classi}`}>{text}</h1>
  );
}

export function Heading3({ text, classi }) {
  return (
    <h3 className={`fw-bolder ${classi}`}>{text}</h3>
  );
}

export function Heading4({ text, classi }) {
  return (
    <h4 className={`serif fw-bolder ${classi}`}>{text}</h4>
  );
}

export function Heading5({ text, classi }) {
  return (
    <h5 className={`serif fw-bolder ${classi}`}>{text}</h5>
  );
}

export function Quote({ text, classi }) {
  return (
    <h6 className={`serif fst-italic ${classi}`}>{text}</h6>
  );
}

export function GraphQuote({ emoticon, text, classi }) {
  return (
    <h6 className={`serif  ${classi}`}>
      {emoticon}
      -
      {text}
    </h6>
  );
}
