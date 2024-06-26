import { motion } from "framer-motion";
const Message = () => {
  return (
    <div className="fixed z-20 right-2 bottom-2 ">
      <motion.button
      drag
      dragConstraints={{ left: 0, right: 0, top:0, bottom: 0 }}
      className="bg-blue p-4 text-4xl flex items-center justify-center text-white rounded-full h-14 w-14">
        <ion-icon name="chatbubble"></ion-icon>
      </motion.button>
    </div>
  );
};

export default Message;
