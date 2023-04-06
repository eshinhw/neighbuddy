import React from "react";
import SigninIcon from "../../public/images/sign-in.png";
import SignupIcon from "../../public/images/sign-up.png";
import FriendIcon from "../../public/images/friend.png";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row items-center justify-between px-auto w-full bg-green-700">
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-2 ml-5">
            <Image src={FriendIcon} alt="friend" width={50} height={50} />
            <h1 className="text-2xl text-bold cursor-pointer">Neighbuddy</h1>
          </div>
          <div className="flex flex-row gap-4 text-white">
            <h3 className="cursor-pointer">Products</h3>
            <h3 className="cursor-pointer">Learn</h3>
            <h3 className="cursor-pointer">Safety</h3>
            <h3 className="cursor-pointer">Support</h3>
            <h3 className="cursor-pointer">Download</h3>
          </div>
        </div>
        {/* Mobile */}
        <nav className="flex flex-row gap-3 mr-5 lg:hidden">
          <Image src={SigninIcon} alt="sign-in" width={50} height={50} />
          <Image src={SignupIcon} alt="sign-up" width={50} height={50} />
        </nav>
        {/* Desktop */}
        <nav className="hidden lg:mr-5 lg:flex flex-row gap-4">
          <div className="cursor-pointer rounded-lg p-2 w-20 text-center bg-white my-2">Log In</div>
          <div className="cursor-pointer rounded-lg p-2 w-20 text-center bg-white my-2">
            Sign Up
          </div>
        </nav>
      </div>
    </header>
  );
}
