import photo from "../assets/avatar.jpg";
import About from "../components/About";
import Skills from "../components/Skills";
import SocialIcons from "../components/SocialIcons";
import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          scope.current, // Animasyonun uygulanacağı element
          {
            opacity: [0, 1],
          }, // Animasyon özellikleri// Çıkış animasyon özellikleri
          { duration: 0.5, delay: 0.1 } // Çıkış animasyonunun süresi ve gecikmesi
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current, // Animasyonun uygulanacağı element
          {
            opacity: [1, 0],
          }, // Çıkış animasyon özellikleri
          { duration: 0.5, delay: 0.1 } // Çıkış animasyonunun süresi ve gecikmesi
        );
        safeToRemove();
      };
      exitAnimation();
    }
  });

  return (
    <div
      ref={scope}
      className="max-w-2xl mx-auto font-sans tracking-wide h-screen"
    >
      <div className=" text-gray-700 flex justify-center">
        <div className="flex flex-col mx-auto">
          <div className="flex">
            <div className="flex gap-5 p-5  ">
              <div className="h-32 w-32 rounded-full overflow-hidden">
                <img
                  src={photo}
                  alt="photo"
                  className="object-cover w-full h-full rounded-full "
                />
              </div>

              <div className="text-zinc-500 ">
                <h1 className="text-2xl ">Mustafa Sungur Öztürk</h1>
                <h2 className="text-xl">Full Stack Developer</h2>
              </div>
            </div>
            <SocialIcons />
          </div>
          <About />

          <div className="mt-12">
            <h2 className="text-xl text-zinc-500">
              Technologies I experienced
            </h2>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
