import '../scss/style.scss';
import { Link } from 'gatsby';

export default function NextPrev({
  next, prev, linkNext, linkPrev,
}) {
  return (
    <div className="container-fluid gradient text-white">
      <div className="row py-4">
        <div className="col-5 offset-1">
          <Link className="text-white" to={linkPrev}>{prev}</Link>
        </div>
        <div className="col-5 text-end">
          <Link className="text-white" to={linkNext}>{next}</Link>
        </div>
      </div>
    </div>

  );
}
