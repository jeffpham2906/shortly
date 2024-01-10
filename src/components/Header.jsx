import Button from "./Button";
import ImageMemo from "./Image";
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
        <div className="hidden tablet:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="fixed tablet:hidden right-5 top-20 left-4 bg-pm-dark-violet text-white p-6 rounded-md overflow-hidden">
            <nav>
              <ul className="flex flex-col items-center gap-4">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </nav>
            <hr className="opacity-25 mt-6" />

            <div className="flex flex-col py-6 gap-4">
              <Button>Login</Button>
              <Button type="primary" rounded>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
