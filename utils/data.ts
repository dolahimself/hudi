import { Colors } from "./colors";

export type Routes = {
  index: undefined;
  "first.step": undefined;
  habits: undefined;
};

export const getHabitCardBackgroundColor = (habit: string) => {
  switch (habit) {
    case "fajr":
      return Colors.purpleHabitCardBackground;
    case "kursi":
      return Colors.greenHabitCardBackground;
    case "jannah":
      return Colors.pinkHabitCardBackground;
    default:
      break;
  }
};

export const habitsData = [
  {
    id: 1,
    name: "fajr",
    header: "Wake up early",
    title:
      "Wake up early by shifting your sleep and wake-up times gradually, getting light first thing, and avoiding light, caffeine, and meals too",
    image: require("../assets/images/fajr3x.png"),
  },
  {
    id: 2,
    name: "kursi",
    header: "Journal about your hopes and dreams",
    title:
      "Simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or",
    image: require("../assets/images/Kursi3x.png"),
  },
  {
    id: 3,
    name: "jannah",
    header: "Give gratitide",
    title:
      "Gratitude is a way for you to appreciate what you have, instead of always reaching for something new in the hope it will make you",
    image: require("../assets/images/Jannah3x.png"),
  },
];
