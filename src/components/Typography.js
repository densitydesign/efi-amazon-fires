import '../scss/style.scss';

export function Heading1({ text }) {
  return (
    <h1 className="serif fw-bolder">{text}</h1>
  );
}
export function Heading4({ text }) {
  return (
    <h4 className="serif fw-bolder">{text}</h4>
  );
}
