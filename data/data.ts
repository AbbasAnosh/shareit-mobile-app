import { AnimationObject } from "lottie-react-native";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  paragraph?: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  // {
  //   id: 1,
  //   animation: require("../assets/animations/Lottie1.json"),
  //   text: "Lorem Ipsum dolor sit amet",
  //   paragraph: "Sell or Recycle Your Old Books and Music Instrument with Us",
  //   textColor: "#005b4f",
  //   backgroundColor: "#ffa3ce",
  // },
  {
    id: 1,
    animation: require("../assets//animations/Lottie2.json"),
    text: "Find what you are looking for",
    paragraph: "Sell or Recycle Your Old Books and Music Instrument with Us",
    textColor: "#4838D1",
    backgroundColor: "white",
  },
  {
    id: 2,
    animation: require("../assets//animations/Lottie3.json"),
    text: "Share your interest with people",
    paragraph: "Sell or Recycle Your Old Books and Music Instrument with Us",
    textColor: "#4838D1",
    backgroundColor: "white",
  },
];

export default data;
