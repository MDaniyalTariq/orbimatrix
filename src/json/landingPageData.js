// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/ai.png";
import web3 from "../assets/images/Services/web3.png";
import smart from "../assets/images/Services/smart.png";
import chatbot from "../assets/images/Services/chatbot.png";

// Portfolio Img Imports

import Web3 from "../assets/images/Portfolio/2.png";
import Wellet from "../assets/images/Portfolio/6.png";
import Farmer from "../assets/images/Portfolio/9.png";

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
    title: "Orbix-Trivia",
    imageUrl: Web3,
    type: "Web3 Game",
    responsibility: ["Website Development", "AI Custom Solutions"],
    credit: "https://www.web3trivia.com/",
    description:
      "OrbiX-Trivia, the ultimate solo trivia game powered byWeb3, where every correct answer brings you closer to earning valuable tokens. Choose from multiple categories and tackle a 10 question challenge with just 20 seconds per question. With a starting set of 105 lives, test your skills and see how far you can go! Need more chances? Purchase 105 extra lives for only $5, or unlock unlimited lives with our exclusive $10 subscription. Join the fun, sharpen your mind, and start earning with OrbiX Trivia today— because in this game, knowledge truly pays.",
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Wishing Wellet",
    imageUrl: Wellet,
    type: "Web3 Wishing Web-App",
    responsibility: [
      "Website Development",
      "AI Custom Solutions",
      "Smart Contracts",
    ],
    credit: "https://farmer-tycon.mystrikingly.com",
    description:
      "Experience WishingWellet, the digital wishing well on the Solana blockchain. Toss a coin and make your wish! Every three days, three lucky participants will share in the collected Solana tokens. Join us and make your dreams come true! A decentralised wishing wallet built on the Solana blockchain, allowing users to send wishes and sol tokens. Users can send wishes by transferring SOL tokens to the wishing wallet address. After 3 days, 3 random users who send wishes with tokens will receive tokens transferred to their wallet. Users must send SOL tokens to the wallet within the 3-day timeframe to be eligible for token distribution.",
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Farmer Tycon",
    imageUrl: Farmer,
    type: "Web3 Staking",
    responsibility: ["Website Development", "Smart Contracts"],
    credit: "https://farmer-tycon.mystrikingly.com",
    description:
      "Farmer Tycoon is a NFT-staking game where you can equip farmer NFTs with tools, machinery, and seeds provided by the game. Your NFT farmers work tirelessly. After staking your NFTs for a set period, you'll receive carrot tokens as rewards. The longer you stake, the bigger your harvest! Use your carrot tokens to buy better tools, expand your farm, and unlock new NFT characters with unique abilities. The more you grow, the more you earn!",
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
    name: "Jake Harmer",
    company: "CEO, familyhistorystorybooks",
    testimoni:
      "Orbimatrix was excellent to work with. They know what they're doing and were able to match exactly what I needed.",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Aman Kumar",
    company: "Developer",
    testimoni:
      "I loved the quick turnaround time from Orbimatrix. They delivered exactly what I needed and exceeded my expectations.",
    imageUrl: Jake,
  },
  {
    id: 3,
    name: "Thomas",
    company: "Smart Contract Developer",
    testimoni: "Orbimatrix found a solution quickly and efficiently.",
    imageUrl: Reiner,
  },
  {
    id: 4,
    name: "Muhammad Suleman",
    company: "Video Editor",
    testimoni:
      "Professional, reliable, and always on point—Orbimatrix delivers every time.",
    imageUrl: Suleman,
  },
  {
    id: 5,
    name: "Vincent Companaro",
    company: "Founder and President, CHURN",
    testimoni:
      "Orbimatrix's team is exceptional, with a proactive approach, consistently exceeding expectations and tackling challenges effectively.",
    imageUrl: Vincent,
  },
];

export const TeamMembers = [
  {
    name: "Saqib Iqbal",
    position: "Founder",
    imageUrl: CEO,
    description: "",
    instagram: "",
    x: "",
    github: "",
    portfolio: "",
  },
  {
    name: "Daniyal Tariq",
    position: "CTO",
    imageUrl: Daniyal,
    description: "",
    instagram: "",
    x: "",
    github: "",
    portfolio: "",
  },
  {
    name: "Momin Minhas",
    position: "Co-Founder",
    imageUrl: Momin,
    description: "",
    instagram: "",
    x: "",
    github: "",
    portfolio: "",
  },
  {
    name: "Mahnoor Farooq",
    position: "Frontend Engineer",
    imageUrl: Mahnoor,
    description: "",
    instagram: "",
    x: "",
    github: "",
    portfolio: "",
  },
  {
    name: "Maram Guidah",
    position: "Social Media Marketer",
    imageUrl: Mahnoor,
    description: "",
    instagram: "",
    x: "",
    github: "",
    portfolio: "",
  },
];

