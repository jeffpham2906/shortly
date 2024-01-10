import { useRef, useState } from "react";
import Button from "./Button";
import AppLayout from "./AppLayout";
import Result from "./Result";
function Shorten() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const inputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    if (input === "") {
      setError(true);
      inputRef.current.focus();
    } else setError(false);
  };
  return (
    <>
      <div className="absolute top-0 -translate-y-1/2 left-0 right-0">
        <AppLayout>
          <section className="bg-shorten-desk bg-pm-dark-violet rounded-md">
            <form onSubmit={handleSubmit} className="px-12 py-10 tablet:p-4">
              <div className="flex gap-4 tablet:flex-col relative">
                <input
                  type="text"
                  name="shorten"
                  id="shorten"
                  className={`${
                    error
                      ? "outline-sc-red outline-2 outline placeholder:text-sc-red placeholder:opacity-50"
                      : ""
                  } py-3 px-6 flex-1 rounded-md placeholder:text-sm tablet:mb-4 `}
                  placeholder="Shorten a link here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  ref={inputRef}
                />
                {error && (
                  <div className="absolute text-sc-red -bottom-7 text-sm left-0 italic">
                    Please add a link
                  </div>
                )}
                <Button type="primary" size="large">
                  <span className="text-base font-semibold">Shorten It!</span>
                </Button>
              </div>
            </form>
          </section>
        </AppLayout>
      </div>
      <div className="pt-20 mb-16 tablet:pt-32">
        <AppLayout>
          <Result
            originUrl="https://www.frontendmentor.io"
            newUrl="https://rel.link/324dczcdsa"
          />
          <Result
            originUrl="https://twitter.com/frontendmentor"
            newUrl="https://rel.ink/goasokd"
          />
        </AppLayout>
      </div>
    </>
  );
}

export default Shorten;
