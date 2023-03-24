import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/collab.png";

const benefitOne = {
  title: "We are the catalysts driving the adoption of AI",
  desc: "OUR UNIQUE APPROACH",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

export { benefitOne };
