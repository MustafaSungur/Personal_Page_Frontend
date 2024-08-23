import { FaReact, FaNodeJs, FaDocker, FaLinux, FaPython } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
const Skills = () => {
  const iconSize = 30;
  return (
    <div className="flex flex-wrap  gap-8 md:gap-16 mx-auto mt-5 justify-center md:justify-normal ">
      <div className="flex flex-col gap-5 ">
        <div className="grid grid-flow-col items-center gap-2">
          <FaReact size={iconSize} color="#2980b9" />
          <span>React</span>
        </div>

        <div className="grid grid-flow-col items-center gap-2">
          <SiDotnet fontSize={iconSize} color="#2980b9" />
          <span>.Net Core</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="grid grid-flow-col items-center gap-2">
          <FaNodeJs fontSize={iconSize} color="#27ae60" />
          <span>NodeJs</span>
        </div>
        <div className="grid grid-flow-col items-center gap-2">
          <TbBrandReactNative fontSize={iconSize} color="#2980b9" />
          <span>React Native</span>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-flow-col items-center gap-2">
          <FaLinux fontSize={iconSize} color="#2980b9" />
          <span>Linux</span>
        </div>
        <div className="grid grid-flow-col items-center gap-2">
          <FaDocker fontSize={iconSize} color="#2980b9" />
          <span>Docker</span>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="grid grid-flow-col items-center gap-2">
          <FaPython fontSize={iconSize} color="#FFB300" />
          <span>Python</span>
        </div>
        <div className="grid grid-flow-col items-center gap-2">
          <TbBrandCSharp fontSize={iconSize} color="#3F51B5" />
          <span>C#</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
