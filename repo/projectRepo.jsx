import smartEDU from "/src/assets/smartEDU.png";
import dukkan from "/src/assets/dukkan.png";
import Pcat from "/src/assets/Pcat.png";
import NewsApp from "/src/assets/NewsApp.png";
import ProductList from "/src/assets/ProductList.png";
import cleanBlog from "/src/assets/cleanBlog.png";
import ShoppingWeb from "/src/assets/shopping.png";
import userInfo from "/src/assets/userInfo.png";
import todo from "/src/assets/Todo.png";
export const projectRepo = [
  {
    name: "Smart Education",
    description:
      "The Education Application operates with three different roles: teachers, students, and administrators. Teachers can create and delete courses. Students can select the courses they want to take. Administrators can edit categories and users. \n Other features of the application include user creation, course creation by those in the teacher role, authentication, CRUD operations, file upload, and email sending. \n The application is developed using various packages such as bcrypt, connect-flash, connect-mongo, dotenv, ejs, express, express-fileupload, express-session, express-validation, express-validator, method-override, mongoose, nodemailer, and slugify.",
    category: "NodeJs",
    url: "https://github.com/MustafaSungur/Smart_Education",

    imgURL: smartEDU,
  },
  {
    name: "Dukkan",
    description:
      "“Dukkan is a prototype commerce application developed with React Native. The application presents various products to its users in a visual and detailed manner. Products are obtained through an API and listed on the ‘Products’ page. Users can filter and sort products on this page. When a user clicks on any product, they can access the details of the product. \n Various packages have been used in the development of the application. Among these, ‘axios’ is used for data exchange, ‘lottie-react-native’ for animations, and ‘react-native-screens’ for screen and navigation management.”",
    category: "React Native",
    url: "https://github.com/MustafaSungur/Dukkan",

    imgURL: dukkan,
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
    name: "News App",
    description:
      "I made the homepage of a mobile news application with React Native. I obtained the data through an API.",
    category: "React Native",
    url: "https://github.com/MustafaSungur/NewsApp",

    imgURL: NewsApp,
  },
  {
    name: "Product List Page",
    description:
      "I made a mobile shopping application with React Native. Like in other mobile applications, I obtained the data from an API.",
    category: "React Native",
    url: "https://github.com/MustafaSungur/Product_list_page",

    imgURL: ProductList,
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
  {
    name: "Todo App :)",
    description:
      "My first project with React. You can add, update, delete and mark your tasks as completed.",
    category: "React",
    url: "https://github.com/MustafaSungur/TodoApp_React",
    imgURL: todo,
  },
];
