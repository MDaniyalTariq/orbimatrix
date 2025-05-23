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
import Maram from "../assets/images/TeamMembers/maram.png";
import suleman from "../assets/images/TeamMembers/suleman.png";

export const Services = [
  {
    title: "Web Development",
    imageUrl: Web,
    animation: "left",
    icon: "💻",
    description:
      "Crafting responsive, SEO-friendly websites and web apps with React, Next.js, and scalable back-end APIs to deliver seamless user experiences across devices.",
    features: [
      "Modern React & Next.js applications",
      "Responsive design for all devices",
      "SEO optimization & performance",
      "Scalable API architecture",
      "Progressive Web Apps (PWAs)"
    ]
  },
  {
    title: "Smart Contracts",
    imageUrl: smart,
    animation: "right",
    icon: "🔗",
    description:
      "Designing, auditing, and deploying secure on-chain logic on Solana and EVM-compatible chains—covering token standards, DeFi primitives, and gas-efficient contract patterns.",
    features: [
      "ERC/SPL token development",
      "DeFi protocol engineering",
      "Security audits & optimization",
      "Cross-chain compatibility",
      "Gas-efficient patterns"
    ]
  },
  {
    title: "Web3 Gaming",
    imageUrl: web3,
    animation: "left",
    icon: "🎮",
    description:
      "Building fully on-chain play-to-earn games with integrated NFT minting, tokenomics design, and gas abstraction for frictionless user onboarding.",
    features: [
      "On-chain game mechanics",
      "NFT integration & marketplaces",
      "Play-to-earn tokenomics",
      "Gas abstraction layers",
      "Cross-platform compatibility"
    ]
  },
  {
    title: "Mobile App Development",
    imageUrl: Mobile,
    animation: "up",
    icon: "📱",
    description:
      "Developing native and cross-platform apps (iOS, Android, React Native, Flutter) with in-app wallets, secure key management, and App Store/Play Store publishing.",
    features: [
      "Native iOS & Android apps",
      "React Native & Flutter expertise",
      "Crypto wallet integration",
      "Secure biometric authentication",
      "App store optimization"
    ]
  },
  {
    title: "Agentic AI",
    imageUrl: UIUX,
    animation: "up",
    icon: "🤖",
    description:
      "Implementing autonomous AI agents for intelligent automation, custom LLM fine-tuning, and seamless orchestration across your business workflows.",
    features: [
      "Custom LLM fine-tuning",
      "Multi-agent systems",
      "Business process automation",
      "Knowledge retrieval systems",
      "AI-powered analytics"
    ]
  },
  {
    title: "AR/VR Experiences",
    imageUrl: chatbot,
    animation: "right",
    icon: "🥽",
    description:
      "Creating immersive augmented and virtual reality experiences for training, entertainment, and marketing with WebXR, Unity, and Unreal Engine integration.",
    features: [
      "WebXR applications",
      "Unity & Unreal development",
      "3D modeling & animation",
      "Spatial computing",
      "Cross-platform deployment"
    ]
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
    description: "Founder and visionary, leading the company towards success.",
    socialLinks: {
      instagram: "https://instagram.com/saqib",
      x: "https://x.com/saqib",
      github: "https://github.com/saqib",
      linkedin: "https://linkedin.com/in/saqib",
    },
  },
  {
    name: "Momin Minhas",
    position: "Co-Founder",
    imageUrl: Momin,
    description:
      "Co-Founder, helping shape the vision and growth of the company.",
    socialLinks: {
      instagram: "https://instagram.com/momin",
      x: "https://x.com/momin",
      github: "https://github.com/momin",
      linkedin: "https://linkedin.com/in/momin",
    },
  },
  {
    name: "Daniyal Tariq",
    position: "CTO",
    imageUrl: Daniyal,
    description:
      "Chief Technology Officer, overseeing the tech strategy and development.",
    socialLinks: {
      instagram: "https://instagram.com/daniyal",
      x: "https://x.com/daniyal",
      github: "https://github.com/daniyal",
      linkedin: "https://linkedin.com/in/daniyal",
    },
  },

  {
    name: "Mahnoor Farooq",
    position: "Frontend Engineer",
    imageUrl: Mahnoor,
    description:
      "Frontend Engineer, focusing on creating seamless user experiences.",
    socialLinks: {
      instagram: "https://instagram.com/mahnnoor",
      x: "https://x.com/mahnnoor",
      github: "https://github.com/Mahanoorfarooq",
      linkedin: "https://www.linkedin.com/in/mahnoor-farooq-649690239/", // updated to linkedin
    },
  },
  {
    name: "Maram Guidah",
    position: "Social Media Marketer",
    imageUrl: Maram,
    description:
      "Social Media Marketer, crafting strategies for growing brand presence.",
    socialLinks: {
      instagram: "https://instagram.com/maram",
      x: "https://x.com/maram",
      github: "https://github.com/maram",
      linkedin: "https://www.linkedin.com/in/maram-gouider-b27634337/", // updated to linkedin
    },
  },
  {
    name: "M. Suleman",
    position: "Graphic Designer and video editor",
    imageUrl: suleman,
    description: "Graphic Designer and video editor,brand and presence.",
    socialLinks: {
      instagram: "https://instagram.com/maram",
      x: "https://x.com/maram",
      github: "https://github.com/maram",
      linkedin: "https://www.linkedin.com/in/muhammad-suleman-34b005323", // updated to linkedin
    },
  },
];
