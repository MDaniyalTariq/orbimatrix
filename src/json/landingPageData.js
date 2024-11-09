// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/ai.png";
import web3 from "../assets/images/Services/web3.png";
import smart from "../assets/images/Services/smart.png";
import chatbot from "../assets/images/Services/chatbot.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Vincent from "../assets/images/Testimonials/Vincent.png";
import Jake from "../assets/images/Testimonials/Jake.png";
import Suleman from "../assets/images/Testimonials/Suleman.png";

// TeamMembers
import CEO from "../assets/images/TeamMembers/saqib.png";
import Daniyal from "../assets/images/TeamMembers/daniyal.png";
import Mahnoor from "../assets/images/TeamMembers/mahnoor.png";
import Momin from "../assets/images/TeamMembers/momin.png";

export const Services = [
  {
    title: "Web Development",
    imageUrl: Web,
    animation: "left",
    description:
      "Craft dynamic, responsive websites tailored to your business needs, ensuring an engaging user experience and robust functionality across all platforms.",
  },
  {
    title: "AI Custom Solutions",
    imageUrl: UIUX,
    animation: "right",
    description:
      "Leverage cutting-edge AI technology to build tailored solutions that address specific business challenges, improve decision-making, and optimize workflows.",
  },
  {
    title: "Web3 Games",
    imageUrl: web3,
    animation: "left",
    description:
      "Develop immersive Web3 games that integrate blockchain technology, offering unique in-game assets, decentralized economies, and player-owned experiences.",
  },
  {
    title: "Smart Contracts & Auditing",
    imageUrl: smart,
    animation: "up",
    description:
      "Build secure and efficient smart contracts that automate transactions, streamline processes, and enhance trust in blockchain environments.",
  },

  {
    title: "Chatbots Making",
    imageUrl: chatbot,
    animation: "up",
    description:
      "Create intelligent chatbots designed to enhance customer interactions, automate responses, and provide real-time support across various platforms.",
  },

  {
    title: "Mobile Development",
    imageUrl: Mobile,
    animation: "right",
    description:
      "Leverage cutting-edge AI technology to build tailored solutions that address specific business challenges, improve decision-making, and optimize workflows.",
  },
];

export const Portfolios = [
  {
    id: "asd1293uasdads1",
    title: "Recruiting App",
    imageUrl: Recruiting,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15164950-Recruiting-app",
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Stream+",
    imageUrl: Stream,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15276430-Stream",
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Freelance",
    imageUrl: Freelance,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
  },
  {
    id: "asd1293ufgdfgs4",
    title: "Aura",
    imageUrl: Aura,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
  },
  {
    id: "asd1293ulskmnb5",
    title: "Surtido Rico",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15173118-Surtido-Rico",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Courses Management",
    imageUrl: ManagementApp,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit:
      "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We keep you informed at every stage, ensuring clarity and transparency.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "Effective project management that drives timely, successful outcomes.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative",
      description:
        "Our team collaborates seamlessly to achieve exceptional results.",
      imageUrl: Collaborative,
    },
    {
      title: "Client-Favorite",
      description:
        "Trusted by clients for consistently delivering outstanding work.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "Jake harmer",
    company: "CEO, familyhistorystorybooks",
    testimoni:
      "Excellent to work with the creator. He knows what he's doing and was able to match what I needed.",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Aman Kumar",
    company: "Developer",
    testimoni:
      "I loved the quick turnaround time and delivered exactly what I needed. will definitely work again.",
    imageUrl: Jake,
  },
  {
    id: 3,
    name: "Thomas",
    company: "Smart Contract Developer",
    testimoni: "Found a solution quickly.",
    imageUrl: Reiner,
  },
  {
    id: 4,
    name: "Muhammad Suleman",
    company: "Video Editor",
    testimoni:
      "Professional, reliable, and always on point—this team delivers every time.",
    imageUrl: Suleman,
  },
  {
    id: 5,
    name: "Vincent Companaro",
    company: "Founder and President, CHURN",
    testimoni:
      "Saqib is an exceptional engineer with a proactive approach, consistently exceeding expectations and taking initiative to tackle challenges effectively.",
    imageUrl: Vincent,
  },
];

export const TeamMembers = [
  {
    name: "Saqib Iqbal",
    position: "Founder",
    imageUrl: CEO,
  },
  {
    name: "Daniyal Tariq",
    position: "CTO",
    imageUrl: Daniyal,
  },
  {
    name: "Momin Minhas",
    position: "Co-Founder",
    imageUrl: Momin,
  },
  {
    name: "Mahnoor Farooq",
    position: "Frontend Engineer",
    imageUrl: Mahnoor,
  },
  {
    name: "Maram Guidah",
    position: "Social Media Marketer",
    imageUrl: Mahnoor,
  },
];
