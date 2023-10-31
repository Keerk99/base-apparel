export default function Footer() {
  return (
    <footer className="absolute left-0 bottom-0 flex w-full gap-6 justify-start px-40 pb-8 items-center max-xl:px-20 max-lg:px-14 max-md:px-12 max-md:pb-4 max-md:gap-5 max-sm:px-9 max-xm:px-7">
      <a
        href="https://www.linkedin.com/in/keerk99/?locale=en_US"
        target="_blank"
        rel="noreferrer"
        className="text-center text-desaturated-red text-2xl no-underline transition-transform ease-in duration-500 hover:scale-110 max-md:text-lg"
      >
        <i className="fa-brands fa-linkedin" />
      </a>
      <a
        href="https://github.com/Keerk99"
        target="_blank"
        rel="noreferrer"
        className="text-center text-desaturated-red text-2xl no-underline transition-transform ease-in duration-500 hover:scale-110 max-md:text-lg"
      >
        <i className="fa-brands fa-github" />
      </a>
    </footer>
  );
}
