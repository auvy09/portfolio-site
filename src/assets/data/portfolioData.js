import portfolioImg01 from "../images/Capture1.JPG";
import portfolioImg02 from "../images/Capture2.JPG";
import portfolioImg03 from "../images/Capture3.JPG";
import portfolioImg04 from "../images/Capture4.JPG";
import portfolioImg05 from "../images/Capture5.JPG";
import portfolioImg06 from "../images/Capture6.JPG";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "E-commerce site",
    description:
      "It is a e-commerce site using an api .",
    technologies: ["React", "React-Router", "React-Bootstrap", "Firebase"],
    siteUrl: "https://react-ecom-59ebf.web.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "DigitalWallet",
    description:
      "It is a digital wallet where you can add money or withdraw money",
    technologies: ["JavaScript", "Tailwind css", "HTML"],
    siteUrl: "https://auvy09.github.io/DigutalWallet_v2/",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "pinMatcher",
    description:
      'It randomly Generates a pin and matches it with that pin.',
    technologies: ["JavaScript", "HTML", "Bootstrap"],
    siteUrl: "https://auvy09.github.io/pinMatcher/",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "WeatherApp",
    description:
      "It tells you the weather of a city using an API ",
    technologies: ["JavaScript", "HTML", "Bootstrap"],
    siteUrl: "https://auvy09.github.io/WeatherAppWithApi/",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Bootstrap-e-com ",
    description:
      "Its e-com design with bootstrap",
    technologies: ["HTML", "Bootstrap"],
    siteUrl: "https://auvy09.github.io/Bootstrap-e-com/",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "Tailwind-e-com",
    description:
      "Its e-com design with Tailwind CSS",
    technologies: ["HTML", "Tailwind css"],
    siteUrl: "https://auvy09.github.io/tailwind-e-com/",
  },

];

export default portfolios;
