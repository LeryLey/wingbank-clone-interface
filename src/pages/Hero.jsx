import { useState } from "react";
import { slideShow } from "../constants";
import ContentInformation from "../components/ContentInformation";
import { contentInformation } from "../constants";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // btn prev
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? slideShow.length - 1 : currentIndex - 1
    );
  };
  // btn next
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === slideShow.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div className="min-h-screen h-auto flex flex-col pt-36 pb-10">
      <div className="w-full h-[500px] group">
        {/* btn prev  */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-2 text-2xl text-white bg-black/30 active:bg-black/30 hover:bg-black/10 flex items-center rounded-full w-10 h-10 justify-center opacity-0 group-hover:opacity-100 duration-300 "
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div
          className={`w-full h-full duration-500 bg-cover `}
          style={{ background: `url(${slideShow[currentIndex].image})` }}
        ></div>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-2 text-2xl text-white bg-black/30 hover:bg-black/10 active:bg-black/30 flex items-center rounded-full w-10 h-10 justify-center opacity-0 group-hover:opacity-100 duration-300 "
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <main className="my-2 flex justify-center w-full p-7 ">
        <div className=" grid grid-cols-4 gap-10">
          {contentInformation.map((element, index) => (
            <ContentInformation key={index} {...element} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Hero;
