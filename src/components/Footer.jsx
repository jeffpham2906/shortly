const informations = [
  {
    title: "Features",
    subs: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    subs: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    subs: ["About", "Our Team", "Careers", "Contact"],
  },
];

const ListDetailedInformation = informations.map((ele, index) => {
  return (
    <div key={index} className="tablet:text-center tablet:mb-8">
      <h3 className="mb-3">{ele.title}</h3>
      <ul className="text-sm text-nt-gray font-medium flex flex-col gap-1">
        {ele.subs.map((e, i) => (
          <li key={i} className="hover:text-pm-cyan cursor-pointer">
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
});

function Footer() {
  return (
    <footer className="bg-nt-dark-blue">
      <div className="max-w-[1440px] mx-auto px-32 tablet:px-10 mobile:px-4 text-white flex justify-between py-12 tablet:flex-col tablet:items-center">
        <div className="grid grid-cols-5 w-full text-sm tablet:grid-cols-1">
          <h1 className="col-span-2 font-bold text-3xl tablet:col-span-1 tablet:text-center tablet:mb-8 tablet:text-2xl">
            Shortly
          </h1>
          {ListDetailedInformation}
        </div>
        <ul className="flex gap-4 w-fit">
          <li>
            <img
              src="./images/icon-facebook.svg"
              alt="icon facebook"
              className="cursor-pointer hover:opacity-50"
            />
          </li>
          <li>
            <img
              src="./images/icon-twitter.svg"
              alt="icon twitter"
              className="cursor-pointer hover:opacity-50"
            />
          </li>
          <li>
            <img
              src="./images/icon-pinterest.svg"
              alt="icon pinterest"
              className="cursor-pointer hover:opacity-50"
            />
          </li>
          <li>
            <img
              src="./images/icon-instagram.svg"
              alt="icon instagram"
              className="cursor-pointer hover:opacity-50"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
