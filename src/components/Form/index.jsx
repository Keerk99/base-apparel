import error from "../../assets/img/icon-error.svg";
import arrow from "../../assets/img/icon-arrow.svg";
import { useState, useEffect } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmpty(false);
    setIsSubmitted(false);
    setMessage("");
  };

  useEffect(() => {
    if (isSubmitted && isValid && !isEmpty) {
      setMessage(`Thanks, we'll send an email to ${email}`);
      setEmail("");
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid, isEmpty, isSubmitted]);

  const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEmpty(email.trim() === "");
    setIsValid(validateEmail(email));
    setIsSubmitted(true);
  };

  return (
    <form
      className="flex flex-col gap-2 row-span-3 max-sm:mx-9 max-xm:mx-7"
      onSubmit={handleSubmit}
    >
      <div className="flex relative">
        <div
          className={`border-solid rounded-full flex w-full py-4 px-8 justify-between gap-4 ${
            isValid
              ? "border-[1px] border-gray-200"
              : "border-[2px] border-soft-red"
          } max-md:py-3  max-md:px-6 max-xm:py-[0.6rem] max-xm:px-4`}
        >
          <input
            type="text"
            className="text-lg w-4/6 bg-transparent outline-none placeholder:text-desaturated-red placeholder:opacity-50 max-xl:text-base max-md:text-sm max-xm:text-xs"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValid ? (
            <span className="mr-24 max-md:mr-[3.1rem]">
              <img src={error} alt="error" className="w-7 max-sm:w-6" />
            </span>
          ) : null}
        </div>
        <button className="h-full px-12 rounded-full absolute bg-button shadow-s-button right-0 hover:bg-button2 hover:shadow-s-button-hover max-md:px-7 max-xm:px-[1.3rem]">
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      {isEmpty || !isValid ? (
        <span className="ml-6 text-[.9rem] text-soft-red max-xl:text-sm max-md:text-xs max-xm:text-[0.7rem]">
          Please provide a valid email
        </span>
      ) : (
        <span className="ml-6 text-[.9rem] text-desaturated-red max-xl:text-sm max-md:text-xs max-xm:text-[0.7rem]">
          {message}
        </span>
      )}
    </form>
  );
}
