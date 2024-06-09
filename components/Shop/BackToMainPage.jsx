import { Link } from '..';

const BackToMainPage = () => {
  return (
    <>
      <Link href="/">
        <span className="button full primary">
          <span className="font-bold font-universe">Înapoi la pagina principală</span>
        </span>
      </Link>
    </>
  );
};

export default BackToMainPage;
