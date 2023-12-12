import about_img from "./Assets/about.png";
import event_img from "./Assets/Event-Highlights.png";
import choose_img from "./Assets/Why-Choose-Us.png";
import lol_img from "./Assets/lol.png";
import register_img from "./Assets/register.png";

import whyChooseUs1 from "./Assets/WhyChooseUs1.png";
import whyChooseUs2 from "./Assets/WhyChooseUs2.png";
import whyChooseUs3 from "./Assets/WhyChooseUs3.png";
import whyChooseUs4 from "./Assets/WhyChooseUs4.png";

import hero1 from "./Assets/hero1.png";
import hero2 from "./Assets/hero2.png";
import hero3 from "./Assets/hero3.png";

export const navLinksLeftSide = [
  {
    id: 1,
    link: "#home",
    text: "Home",
  },
  {
    id: 2,
    link: "#about",
    text: "About us",
  },
  {
    id: 3,
    link: "#event-highlights",
    text: "Event Highlights",
  },
];

export const navLinksRightSide = [
  {
    id: 4,
    link: "#why-choose-us",
    text: "Why Choose Us",
  },
  {
    id: 5,
    link: "#get-ready-to-lol",
    text: "Get Ready to LOL!",
  },
  {
    id: 6,
    link: "#register",
    text: "Register Now!",
  },
];

export const CardLinkInfo = [
  {
    id: 1,
    link: "#about",
    itemClass: "card-link1",
    img: about_img,
    title: "About us",
  },
  {
    id: 2,
    link: "#event-highlights",
    itemClass: "card-link2",
    img: event_img,
    title: "Event Highlights",
  },
  {
    id: 3,
    link: "#why-choose-us",
    itemClass: "card-link3",
    img: choose_img,
    title: "Why Choose Us",
  },
  {
    id: 4,
    link: "#get-ready-to-lol",
    itemClass: "card-link4",
    img: lol_img,
    title: "Get Ready to LOL!",
  },
  {
    id: 5,
    link: "#register",
    itemClass: "card-link5",
    img: register_img,
    title: "Register Now!",
  },
];

export const aboutInfoContent = [
  {
    id: 1,
    title: "🌟 My Story",
    body: "I've spent years honing my skills as a gamer and comedy aficionado. From epic gaming marathons to side-splitting comedy shows, I've experienced it all. The idea for this festival was born out of my love for these two incredible realms of entertainment.",
  },
  {
    id: 2,
    title: "🎤 My Mission",
    body: "I'm on a mission to bring together gamers and comedy lovers from all walks of life. I believe that laughter and gaming are universal languages that can unite people in a way nothing else can. At the \"Level-Up Laugh Fest,\" we're all about leveling up your joy and adventure.",
  },
  {
    id: 3,
    title: "🤝 Join Me",
    body: "Whether you're a dedicated gamer, a comedy enthusiast, or someone looking for a unique and unforgettable experience, I invite you to join me on this incredible journey. Together, we'll explore new levels of fun and laughter.",
  },
  {
    id: 4,
    title: "🎉 Let's Connect",
    body: "I'm not just the organizer; I'm your gaming and comedy companion. Connect with me, share your stories, and be part of our vibrant community. Feel free to reach out, and let's make the \"Level-Up Laugh Fest\" an event to remember.",
  },
];

export const ButtonsInfo = [
  {
    id: 1,
    link: "mailto:adhamxiii10@gmail.com",
    text: "Connect with me",
  },
  {
    id: 2,
    link: "#get-ready-to-lol",
    text: "Get Ready to LOL!",
  },
  {
    id: 3,
    link: "#event-highlights",
    text: "Explore the Event",
  },
];

export const InfoCardInfo = [
  {
    id: 1,
    title: "8,697",
    text: "twitch streams",
    color: "#eeaf14",
  },
  {
    id: 2,
    title: "5,367",
    text: "youtube streams",
    color: "#CA4F3B",
  },
  {
    id: 3,
    title: "480",
    text: "Total games",
    color: "#1FD6DF",
  },
  {
    id: 4,
    title: "249",
    text: "pro teams",
    color: "#A153E8",
  },
];

export const WhyChooseUsInfo = [
  {
    id: 1,
    icon: whyChooseUs1,
    bgColor: "#362F45",
    title: "Expert Speakers",
    titleColor: "#937F70",
    text: "Our event features a lineup of top industry experts and thought leaders. Gain valuable insights and knowledge from the best in the business. Learn from those who have achieved excellence in the gaming world.",
    textColor: "#fff",
  },
  {
    id: 2,
    icon: whyChooseUs2,
    bgColor: "#DB4576",
    title: "Engaging Workshops",
    text: "Participate in hands-on workshops that bring gaming concepts to life. Collaborate with fellow gamers, developers, and enthusiasts. Dive into practical learning experiences that will enhance your skills.",
    textColor: "#000",
  },
  {
    id: 3,
    icon: whyChooseUs3,
    bgColor: "#41A6C4",
    title: "Networking Opportunities",
    text: "Our event offers opportunities for networking, collaborations, partnerships, and friendships within the gaming community, allowing individuals to expand their network and connect with like-minded individuals.",
    textColor: "#333",
  },
  {
    id: 4,
    icon: whyChooseUs4,
    bgColor: "#CA7732",
    title: "Cutting-Edge Insights",
    text: "Stay ahead of the curve with the latest gaming trends and innovations. Our event is a hub for cutting-edge insights and industry updates. Explore emerging technologies and gain a competitive edge.",
    textColor: "#333",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.github.com/Adham-XIII", icon: "fab fa-github" },
  {
    id: 2,
    href: "https://www.linkedin.com/in/adham-nasser-xiii/",
    icon: "fab fa-linkedin",
  },
  { id: 3, href: "mailto:adhamxiii10@gmail.com", icon: "fa fa-envelope" },
];

export const tournaments = [
  {
    image: hero1,
    gameName: "SuperSpeed Sprinters",
    dates: [
      "Day 1: Friday - 5:00 PM to 10:00 PM",
      "Day 2: Saturday - 10:00 AM to 6:00 PM",
      "Day 3: Sunday - 2:00 PM to 8:00 PM",
    ],
    prizes: ["1st Place: $1000", "2nd Place: $500", "3rd Place: $250"],
  },
  {
    image: hero2,
    gameName: "Mythical Mayhem",
    dates: [
      "Day 1: Saturday - 3:00 PM to 8:00 PM",
      "Day 2: Sunday - 2:00 PM to 7:00 PM",
    ],
    prizes: ["1st Place: $1500", "2nd Place: $800", "3rd Place: $400"],
  },
  {
    image: hero3,
    gameName: "AstroRumble",
    dates: [
      "Day 1: Friday - 7:00 PM to 12:00 AM",
      "Day 2: Saturday - 4:00 PM to 9:00 PM",
    ],
    prizes: ["1st Place: $2000", "2nd Place: $1000", "3rd Place: $500"],
  },
];
