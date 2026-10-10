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
    }
  ]
};
