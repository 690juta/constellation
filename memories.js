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
           drawn as a faint dashed line. e.g. links: ["stories"]

  Stars noticed within the last 7 days gently pulse, so she can
  spot what's new. Keep the order of the list = the order you noticed things.

  The entries below are placeholders. Replace them with your own.
*/
window.MEMORIES = {
  title: "Things I've noticed about you",
  items: [
    {
      id: "stories",
      label: "Stories she loves",
      text: "She loves stories: the ones she tells, and the ones she's still hoping to find.",
      date: "2026-09-10"
    },
    {
      id: "places",
      label: "Places she wants to see",
      text: "There are places she dreams of seeing. She talks about them like they're already waiting for her.",
      date: "2026-09-12"
    },
    {
      id: "happy",
      label: "What makes her happy",
      text: "The things that make her happy are rarely loud. That's exactly why they're easy to miss, and why I try not to.",
      date: "2026-09-15"
    },
    {
      id: "patience",
      label: "Her patience",
      text: "Her patience shows up in small ways, long before anyone thinks to thank her for it.",
      date: "2026-09-18"
    },
    {
      id: "story-one",
      label: "A story she told me",
      text: "Replace this with a specific story she once told you, and how she looked while telling it.",
      date: "2026-09-24",
      from: "stories"
    },
    {
      id: "place-one",
      label: "A place on her list",
      text: "Replace this with one specific place she mentioned, and why it caught her imagination.",
      date: "2026-09-27",
      from: "places",
      links: ["stories"]
    },
    {
      id: "keeps-going",
      label: "The way she keeps going",
      text: "On days nobody else could see, she kept going anyway. I noticed.",
      date: "2026-10-02",
      from: "patience"
    },
    {
      id: "small-joy",
      label: "A small thing that made her smile",
      text: "Replace this with something small that made her smile this week.",
      date: "2026-10-09",
      from: "happy"
    }
  ]
};
