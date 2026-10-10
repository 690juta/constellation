/*
  HOW TO ADD A NEW MEMORY
  -----------------------
  Add one entry at the END of the "items" list below. Each entry has:

    id     a short unique name, no spaces        e.g. "tea"
    label  2-4 words, shown when she hovers/taps  e.g. "How she takes her tea"
    text   the memory itself, in your own words
    date   the day you noticed it, as YYYY-MM-DD   e.g. "2026-10-21"
    from   (optional) the id of the memory this one grew out of.
           It becomes a new star branching off that one.
           Leave it out to start a brand-new branch of the sky.
           The parent must appear ABOVE it in this list.
    links  (optional) ids of other memories it also connects to,
           drawn as a faint dashed line. e.g. links: ["animals"]

  Stars noticed within the last 7 days gently pulse, so she can
  spot what's new. Keep the order of the list = the order you noticed things.
*/
window.MEMORIES = {
  title: "Things I've noticed about you",
  items: [
    {
      id: "animals",
      label: "She loves animals",
      text: "She absolutely loves animals. All of them.",
      date: "2026-08-14"
    },
    {
      id: "food",
      label: "She'll try almost any food",
      text: "She enjoys almost any food, and she likes exploring new flavors just to see what they're like.",
      date: "2026-08-21"
    },
    {
      id: "drinks",
      label: "Her drink adventures",
      text: "She's a drink explorer. She's tried so many places and flavors, and she always has an order in mind.",
      date: "2026-08-30"
    },
    {
      id: "cats",
      label: "Especially cats",
      text: "Cats are her favorite. Maybe that's why her face looks a little like a cat's, haha.",
      date: "2026-09-03",
      from: "animals"
    },
    {
      id: "croissant",
      label: "Croissants over bread",
      text: "She likes bread, but pastries are what she loves most, especially croissants. Regular bread is too dry for her, she says.",
      date: "2026-09-08",
      from: "food"
    },
    {
      id: "chocolate",
      label: "Chocolate, always",
      text: "Her favorite flavor is chocolate.",
      date: "2026-09-13",
      from: "food",
      links: ["croissant"]
    },
    {
      id: "coffee-orders",
      label: "Her coffee orders",
      text: "Kopi Tuku with less sugar. Kopi Fore Berry Manuka with extra ice. Kopi Kenangan's Spanish latte. Point Coffee. Kopi susu jago, and kopi sobat nako too.",
      date: "2026-09-17",
      from: "drinks"
    },
    {
      id: "seafood",
      label: "Seafood",
      text: "She likes seafood.",
      date: "2026-09-22",
      from: "food"
    },
    {
      id: "mushy",
      label: "Nothing mushy, please",
      text: "The foods she skips: chicken or beef liver, gizzards, eggplant, beef tendon. Basically anything with a mushy texture.",
      date: "2026-09-26",
      from: "food"
    },
    {
      id: "tea-orders",
      label: "Her tea orders",
      text: "Teazzi with less sugar and 30% ice, normal tea. And iced sweet tea whenever we're eating out, haha.",
      date: "2026-10-01",
      from: "drinks"
    },
    {
      id: "matcha",
      label: "Not a matcha person",
      text: "She doesn't like matcha. Wimpy, haha.",
      date: "2026-10-04",
      from: "drinks"
    },
    {
      id: "boost",
      label: "Boost: All Berry Bang",
      text: "When it's Boost, she goes for the All Berry Bang.",
      date: "2026-10-08",
      from: "drinks",
      links: ["tea-orders"]
    },
    {
      id: "fish",
      label: "She really loves fish",
      text: "She really loves fish, haha.",
      date: "2026-10-09",
      from: "animals"
    },
    {
      id: "be-a-fish",
      label: "She wanted to be a fish",
      text: "She once said she wanted to be a fish.",
      date: "2026-10-09",
      from: "fish"
    },
    {
      id: "thrillers",
      label: "Thrillers and survival films",
      text: "She likes thriller and survival movies.",
      date: "2026-10-09"
    },
    {
      id: "kdrama",
      label: "Korean dramas",
      text: "She also enjoys watching Korean dramas.",
      date: "2026-10-09",
      from: "thrillers"
    },
    {
      id: "disney",
      label: "Her Disney favorites",
      text: "The Disney movies she likes are Coco, Aladdin, and Tangled.",
      date: "2026-10-09",
      from: "thrillers"
    },
    {
      id: "music",
      label: "Complex instrumentation",
      text: "She likes music with complex instrumentation.",
      date: "2026-10-09"
    },
    {
      id: "bag-charms",
      label: "Bag charm collector",
      text: "She likes collecting bag charms.",
      date: "2026-10-10"
    },
    {
      id: "colors",
      label: "Pink and green",
      text: "She likes pink and green.",
      date: "2026-10-10"
    },
    {
      id: "fruit",
      label: "Mango and banana",
      text: "The fruits she likes are mango and banana.",
      date: "2026-10-10",
      from: "food"
    },
    {
      id: "dark-sleep",
      label: "Sleeping in the dark",
      text: "She likes to sleep in the dark.",
      date: "2026-10-10"
    }
  ]
};
