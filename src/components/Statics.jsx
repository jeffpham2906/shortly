import Shorten from "./Shorten";
import AppLayout from "./AppLayout";

function Statics() {
  return (
    <section className="mt-32 bg-[hsl(255,33%,95%)] pb-44 relative">
      <Shorten />

      <AppLayout>
        <div className="text-center mb-24 w-1/2 mx-auto tablet:w-3/4 mobile:w-full">
          <h1 className="text-3xl font-bold mb-4 mobile:text-2xl">
            Advanced Statistics
          </h1>
          <p className="text-nt-grayish-violet mobile:text-sm">
            Track how your links are performing across the web with our advanced
            statistics dashbroad.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 relative tablet:grid-cols-1">
          <div className="h-2 bg-[hsl(181,67%,49%)] absolute left-0 right-0 top-1/2 tablet:h-full tablet:w-2 tablet:top-0 tablet:left-1/2 tablet:-translate-x-1/2"></div>
          <div className="bg-white p-6 z-10 relative rounded-md tablet:text-center">
            <div className="absolute bg-pm-dark-violet p-4 rounded-full top-0 -translate-y-1/2 tablet:left-1/2 tablet:-translate-x-1/2">
              <img
                src="public\images\icon-brand-recognition.svg"
                alt=""
                className="h-6 w-6"
              />
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">Brand Recognition</h3>
            <p className="text-nt-grayish-violet mobile:text-sm">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="bg-white p-6 z-10 relative translate-y-8 rounded-md tablet:text-center">
            <div className="absolute bg-pm-dark-violet p-4 rounded-full top-0 -translate-y-1/2 tablet:left-1/2 tablet:-translate-x-1/2">
              <img
                src="public\images\icon-detailed-records.svg"
                alt=""
                className="h-6 w-6"
              />
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">Detailed Records</h3>
            <p className="text-nt-grayish-violet mobile:text-sm">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              descision.
            </p>
          </div>
          <div className="bg-white p-6 z-10 relative  translate-y-16 rounded-md tablet:text-center">
            <div className="absolute bg-pm-dark-violet p-4 rounded-full top-0 -translate-y-1/2 tablet:left-1/2 tablet:-translate-x-1/2">
              <img
                src="public\images\icon-fully-customizable.svg"
                alt=""
                className="h-6 w-6"
              />
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">Fully Customizable</h3>
            <p className="text-nt-grayish-violet mobile:text-sm">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </AppLayout>
    </section>
  );
}

export default Statics;
