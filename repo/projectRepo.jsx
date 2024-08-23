import smartEDU from "/src/assets/smartEDU.png";
import Pcat from "/src/assets/Pcat.png";
import cleanBlog from "/src/assets/cleanBlog.png";
import ShoppingWeb from "/src/assets/shopping.png";
import userInfo from "/src/assets/userInfo.png";
import rickandmorty from "/src/assets/rickandmorty.png";
import library from "/src/assets/library.png";
import blogapi from "/src/assets/blogapi.png";
import pentest from "/src/assets/pentest.jpeg";

export const projectRepo = [
  {
    name: "AI-Powered Penetration Testing Analysis Application (Capstone Project)",
    description:
      "This project utilizes artificial intelligence technologies to perform advanced penetration testing analysis aimed at identifying security vulnerabilities and safeguarding web applications against security threats. The application integrates various Open Source Intelligence (OSINT) tools and network scanning techniques.\n",
    category: "NodeJs, React",
    url: "https://github.com/MustafaSungur/CAPSTONE_PROJECT--AI_Powered_Penetration_Testing_Analysis--?tab=readme-ov-file",

    imgURL: pentest,
  },
  {
    name: "Library API",
    description:
      "The LibraryAPI project is a RESTful API developed using ASP.NET Core. It offers endpoints for managing various library resources, including books, authors, categories, and members. The project also supports functionalities for handling loans, calculating penalties, and managing user roles and authentication.\n The API is designed to cater to different roles—librarians, employees, and members—each with specific permissions and capabilities.",
    category: ".Net Core",
    url: "https://github.com/MustafaSungur/Library_API",

    imgURL: library,
  },
  {
    name: "Blog API",
    description:
      "The BlogAPI project is a RESTful API built using ASP.NET Core. It provides endpoints for managing blog resources such as posts, comments, tags, authors, and categories. The project also includes features for handling likes, bookmarks, and user roles and authentication. The API is designed to be used by different roles such as authors and administrators, each with specific permissions and capabilities.",
    category: ".Net Core",
    url: "https://github.com/MustafaSungur/Blog_Api",

    imgURL: blogapi,
  },
  {
    name: "Smart Education",
    description:
      "The Education Application operates with three different roles: teachers, students, and administrators. Teachers can create and delete courses. Students can select the courses they want to take. Administrators can edit categories and users. \n Other features of the application include user creation, course creation by those in the teacher role, authentication, CRUD operations, file upload, and email sending. \n The application is developed using various packages such as bcrypt, connect-flash, ejs, express, express-fileupload, express-session, express-validation, express-validator, method-override, mongoose, nodemailer, and slugify.",
    category: "NodeJs",
    url: "https://github.com/MustafaSungur/Smart_Education",

    imgURL: smartEDU,
  },
  {
    name: "Rick And Morty Characters ",
    description:
      "This project is a React-based application that displays a list of characters in a table format. The application includes features for filtering, sorting, and paginating the character data. It uses react-table for table functionalities and framer-motion for animations.",
    category: "React",
    liveDemoURL: "https://rickandmortycharacters-omega.vercel.app/",
    url: "https://github.com/MustafaSungur/Rick_And_Morty_Characters",

    imgURL: rickandmorty,
  },
  {
    name: "Pcat",
    description:
      "Pcat is a photo sharing application developed with NodeJS. Users can upload, view and manage photos. Furthermore, the app allows users to display a certain number of photos on a page. These features make Pcat an ideal project for sharing and managing your photos.",
    category: "NodeJs",
    url: "https://github.com/MustafaSungur/Pcat",

    imgURL: Pcat,
  },
  {
    name: "Clean Blog",
    description:
      "Clean Blog is a blog site developed with NodeJS. Users can create, edit, delete, and view blog posts. In addition, all blog posts can be viewed in a paginated manner. These features make Clean Blog a user-friendly and effective blog platform.",
    category: "NodeJs",
    url: "https://github.com/MustafaSungur/Clean_Blog",

    imgURL: cleanBlog,
  },
  {
    name: "Shopping Website",
    description:
      "The shopping website developed with Angular offers features such as filtering products by categories to users and adding products, adding categories, and authentication to the Administrator. \n This website is powered by database and authentication services provided by Firebase. This allows users to log in and shop securely.",
    category: "Angular",
    url: "https://github.com/MustafaSungur/Shopping_Website",

    imgURL: ShoppingWeb,
  },
  {
    name: "User Registration System",
    description:
      "This is a type of user tracking application developed with Angular. Firebase was used on the backend side. It saves the name, email, phone number, and password of the users on the registration page and lists all users on the ‘Users’ page.",
    category: "Angular",
    url: "https://github.com/MustafaSungur/Users_info_Angular",

    imgURL: userInfo,
  },
];
