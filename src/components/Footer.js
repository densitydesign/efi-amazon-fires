import '../scss/style.scss';
import efi from '../images/footer/efi.png';
import pdl from '../images/footer/pdl.png';
import den from '../images/footer/density.png';

export default function Footer() {
  const logo = [
    {
      src: efi,
      link: 'https://efi.int/ ',
    },
    {
      src: pdl,
      link: 'https://publicdatalab.org/ ',
    },
    { src: den, link: 'http://densitydesign.org/' },
  ];
  return (
    <div className="container-fluid gradient">
      <div className="row py-5">
        <div className="col-6 offset-1">
          <div className="row">

            {
              logo.map(({
                src, link,
              }, index) => (
                <div className="col d-flex justify-content-center" key={index}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {' '}
                    <img src={src} className="img-fluid " style={{ height: '80px' }} alt="..." />
                  </a>
                </div>
              ))
            }

          </div>
        </div>
        <div className="col-4 ">
          <p>This project is part of the “New Ways for Forest Governance: connecting science, policy and society (NEWGO!)”, funded by the German Federal Ministry of Food and Agriculture (BMEL).</p>
        </div>
      </div>
    </div>
  );
}
