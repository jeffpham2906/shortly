import { useState } from "react";
import Button from "./Button";
function MobileNav() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show) {
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }
    setShow((pre) => !pre);
  };
  return (
    <div className="hidden tablet:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
        onClick={handleShow}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {show && (
        <div className="fixed z-10 top-0 left-0 right-0 bottom-0">
          <div
            onClick={handleShow}
            className="absolute top-0 right-0 bottom-0 left-0 z-20"
          ></div>
          <div className="absolute z-30 hidden tablet:block right-5 top-20 left-4 bg-pm-dark-violet text-white p-6 rounded-md overflow-hidden">
            <nav>
              <ul className="flex flex-col items-center gap-4">
                <li className="hover:text-pm-cyan cursor-pointer">Features</li>
                <li className="hover:text-pm-cyan cursor-pointer">Pricing</li>
                <li className="hover:text-pm-cyan cursor-pointer">Resources</li>
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
      )}
    </div>
  );
}

export default MobileNav;
