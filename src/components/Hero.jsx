import Button from "./Button";
import ImageMemo from "./Image";
function Hero() {
  return (
    <section className="grid grid-cols-[1fr,1fr] my-20 items-center tablet:grid-cols-1 tablet:gap-6 mobile:mt-10 tablet:mb-52 mobile:mb-40">
      <div className="tablet:text-center">
        <h1 className="font-bold text-7xl leading-[1.2] tracking-tighter mobile:text-4xl mobile:mb-3 tablet:text-5xl tablet:mb-4">
          More than just shorter links
        </h1>
        <p className="text-base text-nt-grayish-violet leading-relaxed mb-8 mobile:mb-4">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button type="primary" rounded size="large">
          Get Started
        </Button>
      </div>
      <div className="translate-x-20 tablet:row-start-1 tablet:translate-x-0 mobile:mb-6">
        <ImageMemo src="./images/illustration-working.svg" alt="illustration" />
      </div>
    </section>
  );
}

export default Hero;
