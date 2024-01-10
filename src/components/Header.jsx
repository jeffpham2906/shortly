import Button from "./Button";
import ImageMemo from "./Image";
import MobileNav from "./MobileNav";
function Header() {
  return (
    <>
      <header className="flex items-center justify-between gap-10 py-6">
        <div className="flex items-center gap-10">
          <ImageMemo src="./images/logo.svg" alt="logo" />
          <nav className="tablet:hidden">
            <ul className="flex gap-6 text-sm text-nt-grayish-violet font-bold">
              <li className="hover:text-pm-dark-violet cursor-pointer">
                Features
              </li>
              <li className="hover:text-pm-dark-violet cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-pm-dark-violet cursor-pointer">
                Resources
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4 tablet:hidden">
          <Button rounded type="secondary">
            Login
          </Button>
          <Button rounded type="primary">
            Sign Up
          </Button>
        </div>
        <MobileNav />
      </header>
    </>
  );
}

export default Header;
