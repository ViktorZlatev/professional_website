import { motion } from "framer-motion";

import { styles } from "../styles";

import { construction } from "../assets";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-[#AAF0D1]`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#368BC1]`}>
            Ние сме <span className='text-[#0000FF]'>СимоНик</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#191970] -100 `}>
          Building a better world,<br className='sm:block hidden' />
             one brick at a time.
          </p>
        </div>
      </div>

    <div className="flex justify-center items-center ">
    <img
      src={construction}
      alt="pic"
      className="w-[150vh] h-[42vh] mt-80 object-contain"
    />
    </div>

      <div className='absolute xs:bottom-5 bottom-13 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div> 
        </a>
      </div>
    </section>
  );
};

export default Hero;
