import Image from "next/image";
import LocationIcon from "../../public/images/location.png";
import MaleBuddyImage from "../../public/images/male-buddy.jpg";
import FemaleBuddyImage from "../../public/images/female-buddy.jpg";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-row items-center gap-1 w-full max-w-screen-sm">
        <Image src={LocationIcon} alt="location" className="w-5 h-5 my-5" />
        <h1>Share your interest</h1>
      </div>
      <div className="flex flex-row gap-2">
        <select name="interests">
          <option value="movie">Movie</option>
          <option value="eat-out">Eat Out</option>
          <option value="workout">Work Out</option>
        </select>
        <input type="text" placeholder="Comments" className="border-2" />
        <button className="border-2">Share</button>
      </div>
      <div className="flex flex-row items-center gap-1 w-full max-w-screen-sm">
        <Image src={LocationIcon} alt="location" className="w-5 h-5 my-5" />
        <h1>Explore neighbuddies near you</h1>
      </div>
      <div className="flex flex-row gap-3 my-5">
        <input type="text" className="border-2" />
        <button className="border-2">Find</button>
      </div>
      {/* <Image src={MaleBuddyImage} alt="male-buddy" className="w-full h-108" />
      <Image src={FemaleBuddyImage} alt="female-buddy" className="w-full h-108" /> */}
    </>
  );
}
