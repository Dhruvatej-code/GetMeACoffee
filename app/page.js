import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className=" font-bold font-sans flex  gap-2 items-center justify-center text-3xl md:text-5xl ">Buy Me a Coffee <span><img width={88} src="./coffee.gif" alt="teagif" /></span></div>
        <p>A crowdfunding platform for creators to fund their projects.</p>
        <div className=" flex gap-4">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Start here</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Read more</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">

      </div>

      <div className="text-white container mx-auto py-16 px-10">
        <h1 className="text-3xl font-bold text-center mb-14">Your Fans can Buy You a Coffee</h1>
        <div className="flex gap-5 justify-around container">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="./man.gif" alt="Man Gif" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className=" text-center text-sm">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="./coin.gif" alt="coin Gif" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="./group.gif" alt="group Gif" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">

      </div>

      <div className="text-white container mx-auto py-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">Learn about us</h1>
        <iframe src="https://www.youtube.com/embed/AB3J8ufDYHQ?si=n-EHnbERvJV23keH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}

export const metadata = {
  title: "Home - Get Me A Chai",
}