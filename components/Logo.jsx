import { Link } from '.';

const Logo = ({ href = '/' }) => {
  return (
    <Link href={href} className="inline-block">
      <div className="logo flex items-start cursor-pointer">
        <div className="flex items-center gap-2 font-serif">
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
          <h1 className="text-white font-semibold break-keep text-lg">PsyChat</h1>
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
