import Router, { useRouter } from "next/router";
export default function nopage() {
  const router = useRouter();
  const homeback = () => {
    router.push(`Home`);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-[40px] w-[642px] h-[208px] justify-center items-center">
        <h1 className="text-5xl text-bold text-sans">404</h1>
        <hr></hr>
        <div className="flex flex-col justify-end items-start gap-[20px] py-8 px-0">
          <h1 className="text-3xl text-bold text-sans">Page Not Found</h1>
          <p className="text-gray-400">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button
            className="bg-blue-500 text-sm w-[130px] h-[40px] rounded-lg text-white"
            onClick={homeback}
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}
