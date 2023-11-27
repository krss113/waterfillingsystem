import Link from "next/link";
import HomeForm from "../HomeForm";
import Menu from './Menu'

const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="flex items-center justify-between gap-3 md:gap-0">
        <div className="flex items-center gap-8 md:gap-12">
          <span>
            <Menu/>
          </span>
          <span>
            <Link href='/'>
              Filling system
            </Link>
          </span>

        </div>
      </div>
    </div>
  );
};

export default Header;