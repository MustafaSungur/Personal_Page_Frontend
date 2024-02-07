import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
function SocialIcons() {
  const iconSize = 20; // İkon boyutu

  return (
    <div className="flex items-end gap-2 md:gap-0 flex-col md:flex-row">
      {/* LinkedIn */}
      <div className="rounded-full p-2 bg-gray-500   iconhover">
        <a
          href="https://www.linkedin.com/in/mustafa-sungur-ozturk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={iconSize} color="#fff" />
        </a>
        <span className="tooltip">Linkendin</span>
      </div>

      {/* GitHub */}
      <div className="rounded-full p-2 bg-gray-500  ml-4 iconhover">
        <a
          href="https://github.com/MustafaSungur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={iconSize} color="#fff" />
        </a>
        <span className="tooltip">Github</span>
      </div>

      {/* Twitter */}
      <div className="rounded-full p-2 bg-gray-500  ml-4 iconhover">
        <a
          href="https://twitter.com/sunguroztrk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={iconSize} color="#fff" />
        </a>
        <span className="tooltip">Twitter</span>
      </div>

      <div className="rounded-full p-2 bg-gray-500  ml-4 iconhover">
        <a
          href="https://drive.google.com/file/d/18EeAr5Lsg8hdSApk8pdsKHZnWiduBj9I/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLink size={iconSize} color="#fff" />
        </a>
        <span className="tooltip">CV</span>
      </div>
    </div>
  );
}

export default SocialIcons;
