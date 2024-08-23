import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
function SocialIcons() {
  const iconSize = 23; // İkon boyutu

  return (
    <div className="flex items-end gap-2 md:gap-0 flex-col md:flex-row">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/mustafa-sungur-ozturk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full p-2 bg-gray-500   iconhover">
          <FaLinkedin size={iconSize} color="#fff" />

          <span className="tooltip">Linkendin</span>
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/MustafaSungur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full p-2 bg-gray-500  ml-4 iconhover">
          <FaGithub size={iconSize} color="#fff" />

          <span className="tooltip">Github</span>
        </div>
      </a>

      {/* Twitter */}
      <a
        href="https://medium.com/@mustafasungur.ozturkk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full p-2 bg-gray-500  ml-4 iconhover">
          <FaMedium size={iconSize} color="#fff" />

          <span className="tooltip">Medium</span>
        </div>
      </a>

      {/* CV */}
      <a
        href="https://drive.google.com/file/d/1kbJTks4QSGnuWXESpyx1SabB9wumIlzO/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full p-2 bg-gray-500  ml-4 iconhover">
          <CiLink size={iconSize} color="#fff" />

          <span className="tooltip">CV</span>
        </div>
      </a>
    </div>
  );
}

export default SocialIcons;
