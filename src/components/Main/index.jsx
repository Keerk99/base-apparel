import logo from "../../assets/img/logo.svg";
import bgmobile from "../../assets/img/hero-mobile.jpg";
import Form from "../Form";

export default function Main() {
  return (
    <main className="flex-grow flex justify-between">
      <div className="bg-background-pattern bg-cover bg-no-repeat max-w-[57%] font-josefin pt-16 pb-20 px-40 grid grid-cols-1 max-xl:px-20 max-lg:px-14 max-md:px-12 max-sm:max-w-none max-sm:px-0 max-sm:py-9 max-sm:flex max-sm:flex-col max-sm:gap-9 max-xm:py-5 max-xm:gap-5">
        <img
          src={logo}
          alt="Base Apparel"
          className="w-fit row-span-5 max-sm:w-28 max-sm:mx-9 max-xm:mx-7"
        />
        <div className="sm:hidden">
          <img src={bgmobile} alt="Base Apparel" className="max-sm:w-full" />
        </div>
        <div className="row-span-1 max-sm:mx-9 max-sm:text-center max-sm:mt-9 max-xm:mt-5 max-xm:mx-7">
          <h2 className="text-7xl font-light text-desaturated-red tracking-[1.25rem] max-xl:text-6xl max-xl:tracking-[1rem] max-lg:text-5xl max-lg:tracking-[.7rem] max-md:text-[2.7rem] max-md:tracking-[.6rem] max-xm:text-3xl">
            WE'RE
          </h2>
          <h3 className="text-7xl font-semibold tracking-[1.25rem] max-xl:text-6xl max-xl:tracking-[1rem] max-lg:text-5xl max-lg:tracking-[.7rem] max-md:text-[2.7rem] max-md:tracking-[.6rem] max-xm:text-3xl">
            COMING SOON
          </h3>
        </div>
        <p className="text-lg font-medium text-desaturated-red row-span-1 max-xl:text-base max-md:text-sm max-sm:mx-9 max-sm:text-center max-xm:text-xs max-xm:mx-7">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <Form />
      </div>
      <aside className="w-[43%] bg-background-desktop bg-cover bg-center bg-no-repeat max-sm:hidden"></aside>
    </main>
  );
}
