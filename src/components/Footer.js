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
                <div className="col " key={index}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {' '}
                    <img src={src} className="img-fluid " style={{ height: '80px' }} alt="..." />
                  </a>
                </div>
              ))
            }

          </div>
        </div>
        <div className="col-3 ">
          <p>e standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de </p>
        </div>
      </div>
    </div>
  );
}