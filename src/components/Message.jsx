import { motion } from "framer-motion";
import { useState } from "react";
const Message = () => {
  const [message, setMessage] = useState(false);
  const handleMs = () => {
    setMessage(!message);
  };
  return (
    <div className="fixed z-20 right-2 bottom-2 ">
      {/* form  */}
      <div
        className={
          !message
            ? "w-76 h-0 bg-blue rounded-md overflow-hidden -translate-x-10 shadow duration-500 ease-out "
            : "w-76 h-80 bg-blue rounded-md overflow-hidden -translate-x-10 shadow  duration-500 ease-out"
        }
      >
        <div className="flex items-center gap-1 p-1 bg-main">
          <p className="flex text-xl text-white">
            <ion-icon name="chatbubble-ellipses"></ion-icon>
          </p>
          <p className="text-white">We are excited to know you!</p>
        </div>
        <form className="p-4">
          <div>
            <label htmlFor="name" className="text-white">
              Name *
            </label>
            <input
              type="text"
              name="name"
              className="rounded w-full outline-none bg-transparent border-2 border-gray-300 focus:border-main px-1 py-px text-gray-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white">
              Email *
            </label>
            <input
              type="text"
              name="email"
              className="rounded w-full outline-none bg-transparent border-2 border-gray-300 focus:border-main px-1 py-px text-gray-200"
            />
          </div>
          <div>
            <label htmlFor="tel" className="text-white">
              Phone *
            </label>
            <input
              type="tel"
              name="name"
              className="rounded w-full outline-none bg-transparent border-2 border-gray-300 focus:border-main px-1 py-px text-gray-200"
            />
          </div>
          <div className="w-full flex py-4 my-4">
            <button
              type="submit"
              className="flex gap-1 items-center bg-main rounded-full px-5 hover:px-7 py-1 mx-auto duration-300"
            >
              <p className="text-white">{"Let's Chart"}</p>
              <span className="text-white">
                <ion-icon name="paper-plane"></ion-icon>
              </span>
            </button>
          </div>
        </form>
      </div>
      {/* icon message  */}
      <motion.button
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onClick={handleMs}
        className="bg-blue p-4 text-4xl flex items-center justify-center text-white rounded-full h-14 w-14 float-right"
      >
        {!message ? (
          <ion-icon name="chatbubble"></ion-icon>
        ) : (
          <ion-icon name="close-outline"></ion-icon>
        )}
      </motion.button>
    </div>
  );
};

export default Message;
