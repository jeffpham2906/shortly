import { useState } from "react";
import Button from "./Button";
import AppLayout from "./AppLayout";
function Shorten() {
  const [input, setInput] = useState("");
  const [arrResult, setArrResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ url: input }));
    console.log(import.meta.env.VITE_API_KEY);
    try {
      const res = await fetch("http://www.shrtlnk.dev/api/v2/link", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "api-key": "O90t6UEYCWhTfvJz89b5SXl9GyyNz914snNyCPLQOn6x8",
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${"O90t6UEYCWhTfvJz89b5SXl9GyyNz914snNyCPLQOn6x8"}`,
        },

        body: JSON.stringify({ url: input }),
      });

      console.log(await res.json());
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className="absolute top-0 -translate-y-1/2 left-0 right-0">
        <AppLayout>
          <section className="bg-shorten-desk bg-pm-dark-violet rounded-md">
            <form onSubmit={handleSubmit} className="px-12 py-10 tablet:p-4">
              <div className="flex gap-4 tablet:flex-col">
                <input
                  type="text"
                  name="shorten"
                  id="shorten"
                  className="py-3 px-6 flex-1 rounded-md placeholder:text-sm tablet:mb-4"
                  placeholder="Shorten a link here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
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
          <div className="flex justify-between bg-white rounded-md items-center px-4 py-2 tablet:flex-col mobile:text-sm tablet:items-start">
            <div>https://www.frontendmentor.io</div>
            <div className="w-full h-px bg-pm-dark-violet opacity-50 my-2 hidden tablet:block"></div>
            <div className="flex items-center gap-4 tablet:flex-col tablet:items-start mobile:gap-1 tablet:w-full">
              <p className="text-pm-cyan">https://rel.link/324dczcdsa</p>
              <Button type="primary" width="w-full">
                Coppy
              </Button>
            </div>
          </div>
        </AppLayout>
      </div>
    </>
  );
}

export default Shorten;
