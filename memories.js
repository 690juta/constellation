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

  The "intro" block is the cover page she sees first. "speed" is how fast the credits
  scroll, in pixels per second. Smaller = slower (try 20-35). Adding a "duration"
  line (in seconds) would instead make the page choose the speed itself. Reword it freely; delete
  the whole block if you ever want the sky to open straight away.

  On phones, each group of stars folds into its first star (with a +number badge).
  Tap it to open the group, tap it again, or tap "Collapse group", to fold it back.
  Add  collapse: false,  next to "title" below to turn this off, or  collapse: true,
  to also use it on bigger screens.

  The small line under the title is the "subtitle" below. {n} is replaced
  by the number of stars, so you can reword it however you like.

  Every star with the NEWEST date in the list gets a golden halo, and the rest of
  its family glows brighter too. Stars from the last 4 days glow warmer, fading as
  they age. So give each batch of new stars the same date (today's).

  Stars noticed within the last 7 days gently pulse, so she can
  spot what's new. Keep the order of the list = the order you noticed things.
*/
window.MEMORIES = {
  title: "A Constellation of You",
  subtitle: "{n} stars, and counting",
  intro: {
    kicker: "Something I made for you",
    heading: "A Constellation of You",
    paragraphs: [
      "Everything in this sky is something I remember about you. Some of it is big, a lot of it is small, and all of it stayed with me.",
      "Along the way you'll find the things you love: the foods and drinks you always come back to, the animals you adore, the shows and music you keep close.",
      "You'll find little pieces of how you look and sound to me: your smile, your laugh, your voice, the way you smell, the calm you carry.",
      "You'll find the people who matter to you, and a few memories from when you were little.",
      "And you'll find the hard days too. I remember them, and I remember that you kept walking.",
      "People have been drawing constellations for thousands of years. Today there are 88 official ones, but the lines between the stars are imaginary. We simply agreed to see a shape.",
      "The stars in a real constellation usually have nothing to do with each other. They only look close because of where we stand on Earth. Mine are different. Every line in this sky is a real connection.",
      "The brightest star in the night sky, Sirius, is about 8.6 light-years away, so the light you see from it tonight left more than eight years ago. Looking at a star is always looking a little into the past, a bit like remembering.",
      "Stars aren't all white. The hottest glow blue-white, and the cooler ones look orange or red. That's why each family of memories here has a color of its own.",
      "In Java, people have long read the sky to know when to plant, and the three stars of Orion's Belt were known as the plow. People have always looked up to find their way.",
      "The carbon in your body, the oxygen you breathe, and the iron in your blood were all made inside stars. So in a quiet way, you really are made of stars.",
      "Even constellations change. The stars slowly drift, and over tens of thousands of years the shapes we know will stretch into new ones. I think that's why this sky is allowed to keep changing too.",
      "Each star is one memory. Tap a star to read it. A line shows where one memory grew out of another, and each color is a little family of stars that belong together.",
      "It isn't finished. Whenever I notice something new, a new star will appear, and for a week it will glow so you can find it.",
      "Take your time. If you'd like a song to wander with, tap Music in the corner."
    ],
    speed: 25,
    button: "Next"
  },
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
    },
    {
      id: "unhurried",
      label: "Comfortable and unhurried",
      text: "She likes an environment that is comfortable and unhurried.",
      date: "2026-10-10"
    },
    {
      id: "italy",
      label: "Her dream country: Italy",
      text: "That's why her dream country is Italy.",
      date: "2026-10-10",
      from: "unhurried"
    },
    {
      id: "beach",
      label: "She likes the beach",
      text: "She likes the beach.",
      date: "2026-10-10",
      from: "unhurried"
    },
    {
      id: "listening",
      label: "She likes listening",
      text: "She likes listening.",
      date: "2026-10-10"
    },
    {
      id: "advice",
      label: "Being asked for advice",
      text: "I think she would also appreciate being asked for advice.",
      date: "2026-10-10",
      from: "listening"
    },
    {
      id: "love-languages",
      label: "Her love languages",
      text: "Her love languages are quality time and receiving gifts.",
      date: "2026-10-10"
    },
    {
      id: "childhood",
      label: "When she was little",
      text: "Little her has a corner of the sky too.",
      date: "2026-10-10"
    },
    {
      id: "bumper-cars",
      label: "Bumper cars",
      text: "When she was little, she loved going to a certain shopping spot to ride the bumper cars, haha.",
      date: "2026-10-10",
      from: "childhood"
    },
    {
      id: "teh-botol",
      label: "Teh Botol on the road",
      text: "When she was little and got tired riding the motorcycle with her mom and dad, she would often be given a Teh Botol along the way.",
      date: "2026-10-10",
      from: "childhood"
    },
    {
      id: "monkey-doll",
      label: "Her monkey doll",
      text: "She has had a beloved monkey doll for a long time.",
      date: "2026-10-10",
      links: ["childhood"]
    },
    {
      id: "tender",
      label: "Her tender feelings",
      text: "Her feelings are very tender.",
      date: "2026-10-10"
    },
    {
      id: "sadness",
      label: "The sadness I've seen",
      text: "Sometimes I see sadness in her heart.",
      date: "2026-10-10",
      from: "tender"
    },
    {
      id: "big-heart",
      label: "She has a big heart",
      text: "But she has a big heart.",
      date: "2026-10-10",
      from: "tender"
    },
    {
      id: "brave",
      label: "She is very brave",
      text: "She is also very brave.",
      date: "2026-10-10",
      from: "big-heart"
    },
    {
      id: "hard-times",
      label: "When it was hard",
      text: "I remember how disappointed, angry, and sad she was.",
      date: "2026-10-10"
    },
    {
      id: "kept-walking",
      label: "But she kept walking",
      text: "But she kept walking.",
      date: "2026-10-10",
      from: "hard-times"
    },
    {
      id: "walking-clearly",
      label: "I remember it clearly",
      text: "I remember clearly how she kept walking, even though it may have been difficult for her.",
      date: "2026-10-10",
      from: "kept-walking"
    },
    {
      id: "hurt",
      label: "How it hurt her",
      text: "I always remember how it hurt her.",
      date: "2026-10-10",
      from: "hard-times"
    },
    {
      id: "and-yet",
      label: "And yet, she kept walking",
      text: "And yet, she kept walking.",
      date: "2026-10-10",
      from: "hurt",
      links: ["kept-walking"]
    },
    {
      id: "saltbread",
      label: "Salt bread too",
      text: "She also likes salt bread.",
      date: "2026-10-10",
      from: "food",
      links: ["croissant"]
    },
    {
      id: "trying-new",
      label: "Trying new things",
      text: "She likes trying new things.",
      date: "2026-10-10"
    },
    {
      id: "orchestra",
      label: "An orchestra someday",
      text: "She wants to go to the orchestra.",
      date: "2026-10-10",
      from: "music"
    },
    {
      id: "looks",
      label: "How she looks to me",
      text: "Little details of her that I notice.",
      date: "2026-10-10"
    },
    {
      id: "hijab",
      label: "Her hijab",
      text: "She wears a hijab, and it looks absolutely beautiful.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "long-hair",
      label: "Her long hair",
      text: "She has long hair.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "eyes",
      label: "Her eyes",
      text: "Her eyes are black and slightly brown.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "smile",
      label: "Her smile",
      text: "The shape of her smile is incredibly cute.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "cheeks",
      label: "Her cheeks",
      text: "She has slightly chubby cheeks, hahaha.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "lips",
      label: "Her lips",
      text: "She has slightly full lips.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "nose",
      label: "Her nose",
      text: "She has a sharp, high-bridged nose.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "height",
      label: "How tall she is",
      text: "She's 157 cm tall.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "fingers",
      label: "Her fingers",
      text: "Her fingers are slender and graceful.",
      date: "2026-10-10",
      from: "looks"
    },
    {
      id: "toes",
      label: "Her toes",
      text: "The shape of her toes is also beautiful and perfect.",
      date: "2026-10-10",
      from: "fingers"
    },
    {
      id: "shoe-size",
      label: "Her shoe size",
      text: "Her shoe size is 40.",
      date: "2026-10-10",
      from: "toes"
    },
    {
      id: "voice",
      label: "Her voice",
      text: "Her voice!!! She has a soft, deep voice. It has become one of my favorites, haha.",
      date: "2026-10-10"
    },
    {
      id: "sing",
      label: "She can sing",
      text: "Because of her good voice, she can sing.",
      date: "2026-10-10",
      from: "voice"
    },
    {
      id: "smart",
      label: "What's in her head",
      text: "And what's in her head! She's smart. She knows so many things.",
      date: "2026-10-10"
    },
    {
      id: "hanbin",
      label: "Her favorite Korean actor",
      text: "Her favorite Korean actor is Hanbin B.I.",
      date: "2026-10-10",
      from: "kdrama"
    },
    {
      id: "theo",
      label: "Her favorite Western actor",
      text: "Her favorite Western actor is Theo James.",
      date: "2026-10-10",
      from: "thrillers"
    },
    {
      id: "friends",
      label: "Her close friends",
      text: "She has a few close friends.",
      date: "2026-10-10"
    },
    {
      id: "hs-friends",
      label: "Her high school friends",
      text: "Her high school friends were mostly male, with only three girls, herself included.",
      date: "2026-10-10",
      from: "friends"
    },
    {
      id: "childhood-friends",
      label: "Her childhood friends",
      text: "She has three childhood friends: Nida, Aslla, and Shenny.",
      date: "2026-10-10",
      from: "friends"
    },
    {
      id: "college-friends",
      label: "Her college friends",
      text: "She had about three or four college friends, and the one I remember most is Cahya.",
      date: "2026-10-10",
      from: "friends"
    },
    {
      id: "stickers",
      label: "Her WhatsApp stickers",
      text: "She collects a few annoying WhatsApp stickers.",
      date: "2026-10-10"
    },
    {
      id: "laugh",
      label: "Her laugh",
      text: "I love seeing her laugh, because it really lifts my mood, haha.",
      date: "2026-10-10"
    },
    {
      id: "wakes-dawn",
      label: "She wakes at dawn",
      text: "She wakes up at dawn, around 4:00 or 5:00 AM, and then again between 7:00 and 7:30.",
      date: "2026-10-10"
    },
    {
      id: "long-bath",
      label: "Long baths",
      text: "She takes a long time to bathe.",
      date: "2026-10-10",
      from: "wakes-dawn"
    },
    {
      id: "birthday",
      label: "Her birthday at BXSea",
      text: "An unforgettable moment: celebrating her birthday at BXSea.",
      date: "2026-10-10"
    },
    {
      id: "tag-along",
      label: "Her offer to tag along",
      text: "The last thing she did that made me smile was her offer to tag along whenever I need company for the little things.",
      date: "2026-10-10"
    },
    {
      id: "calm",
      label: "She brings calm",
      text: "She always brings a sense of calm to the middle of my non-stop life.",
      date: "2026-10-10"
    },
    {
      id: "scent",
      label: "Her scent",
      text: "She smells so good, hahaha, and I absolutely love the scent.",
      date: "2026-10-10"
    },
    {
      id: "tomato-keychain",
      label: "Her tomato keychain",
      text: "She has a cute tomato-shaped keychain.",
      date: "2026-10-10",
      from: "bag-charms"
    },
    {
      id: "sleep-longer",
      label: "When she's tired",
      text: "When she's tired, she usually needs to sleep longer.",
      date: "2026-10-10",
      from: "dark-sleep"
    },
    {
      id: "cares",
      label: "She cares about everyone",
      text: "She truly cares about the people around her: her family, her friends, and even someone she may never have met.",
      date: "2026-10-10",
      from: "big-heart"
    },
    {
      id: "confidence",
      label: "Her self-confidence",
      text: "Sometimes she feels a lack of self-confidence.",
      date: "2026-10-10",
      from: "tender"
    },
    {
      id: "introvert",
      label: "She's an introvert",
      text: "She is also an introvert.",
      date: "2026-10-10"
    },
    {
      id: "blood-type",
      label: "Blood type O",
      text: "Her blood type is O.",
      date: "2026-10-10"
    },
    {
      id: "into-me",
      label: "Totally into me",
      text: "She's totally into me, hahaha.",
      date: "2026-10-10"
    },
    {
      id: "avocado-juice",
      label: "Avocado juice",
      text: "She likes drinking avocado juice.",
      date: "2026-10-11",
      from: "drinks"
    },
    {
      id: "pony",
      label: "The pastry called Pony",
      text: "The pastry she likes in Blok M is called Pony.",
      date: "2026-10-11",
      from: "croissant"
    },
    {
      id: "corn-matcha",
      label: "Corn milk matcha",
      text: "We once tried drinking matcha together, and she liked the corn milk matcha variant.",
      date: "2026-10-11",
      from: "matcha"
    },
    {
      id: "english",
      label: "Good at English",
      text: "She is good at English.",
      date: "2026-10-11",
      from: "smart"
    },
    {
      id: "stunning",
      label: "Absolutely stunning",
      text: "She is absolutely stunning.",
      date: "2026-10-11",
      from: "looks"
    },
    {
      id: "meticulous",
      label: "Very meticulous",
      text: "She is very meticulous.",
      date: "2026-10-11",
      from: "smart"
    },
    {
      id: "flirting",
      label: "When she's flirting",
      text: "She is very beautiful and funny when she is flirting.",
      date: "2026-10-11"
    },
    {
      id: "going-out",
      label: "Happiest going out",
      text: "She is happiest when she's going out, especially to a place she wants to visit.",
      date: "2026-10-11",
      from: "trying-new"
    },
    {
      id: "birthday-date",
      label: "Her birthday",
      text: "Her birthday is on the 29th of September.",
      date: "2026-10-11",
      from: "birthday"
    },
    {
      id: "libra",
      label: "She's a Libra",
      text: "Her zodiac sign is Libra.",
      date: "2026-10-11",
      from: "birthday-date"
    },
    {
      id: "aster",
      label: "Her birth flower",
      text: "Her birth flower is the aster, and another name for aster is 'star,' hahaha.",
      date: "2026-10-11",
      from: "birthday-date"
    },
    {
      id: "firstborn",
      label: "The firstborn",
      text: "She is the firstborn child.",
      date: "2026-10-11"
    },
    {
      id: "brother",
      label: "Her younger brother",
      text: "She has a younger brother.",
      date: "2026-10-11",
      from: "firstborn"
    },
    {
      id: "encing",
      label: "Bude is Encing",
      text: "She just told me that in her Betawi family, what Javanese call 'Bude' is 'Encing,' hahaha.",
      date: "2026-10-11",
      from: "firstborn"
    },
    {
      id: "eye-on-her",
      label: "Long before now",
      text: "Right from the start, I had my eye on her. I'd noticed her a few times long before now.",
      date: "2026-10-11"
    },
    {
      id: "pop-ice",
      label: "A Pop Ice, long ago",
      text: "I remember buying her a Pop Ice when we were little. She has definitely forgotten it, though. It was back in elementary school, if I recall correctly, haha.",
      date: "2026-10-11",
      from: "eye-on-her"
    },
    {
      id: "junior-high",
      label: "Junior high, by the field",
      text: "I remember her clique in junior high, mostly popular people. Her classroom was right at the front near the field, and she often sat just outside it.",
      date: "2026-10-11",
      from: "eye-on-her"
    },
    {
      id: "first-message",
      label: "Her first message",
      text: "I remember the first time she reached out to me as an adult. She wanted to join the same workplace as me, and she sent me a DM on Instagram, haha.",
      date: "2026-10-11",
      from: "eye-on-her"
    },
    {
      id: "work-friends",
      label: "Friends from work",
      text: "She has close friends from the same workplace as me: Nida, Syifa, and Wullan, and me too. They are all kind to her.",
      date: "2026-10-11",
      from: "friends"
    },
    {
      id: "nice-friends",
      label: "Her friends are kind",
      text: "All of her friends are very nice.",
      date: "2026-10-11",
      from: "friends"
    },
    {
      id: "poker-face",
      label: "Poker face pro",
      text: "She's a pro at the poker face, haha.",
      date: "2026-10-12"
    },
    {
      id: "shy",
      label: "Cute when she's shy",
      text: "But she is really cute when she's being shy.",
      date: "2026-10-12",
      from: "poker-face"
    },
    {
      id: "fish-outfit",
      label: "Her fish outfit",
      text: "She wore a fish outfit when we went to BXSea, and it was so cute.",
      date: "2026-10-12",
      from: "birthday",
      links: ["be-a-fish"]
    },
    {
      id: "bxsea-beautiful",
      label: "Beautiful at BXSea",
      text: "She was really beautiful when we went to BXSea together.",
      date: "2026-10-12",
      from: "birthday"
    },
    {
      id: "bxsea-happy",
      label: "Her face walking in",
      text: "She was so happy to be taken to BXSea, hahaha. You could tell just by looking at her face when she first walked in.",
      date: "2026-10-12",
      from: "birthday"
    },
    {
      id: "bxsea-friends",
      label: "Her friends asked about it",
      text: "She said a lot of her friends were asking about BXSea.",
      date: "2026-10-12",
      from: "birthday"
    },
    {
      id: "same-place",
      label: "Same place, different days",
      text: "She said that she and her friends often go to the same place, but on different days. Cool.",
      date: "2026-10-12",
      from: "friends"
    },
    {
      id: "polka-dots",
      label: "Polka dots at the wedding",
      text: "When we went to a wedding together, she wore a polka dot dress and looked really pretty, hahaha.",
      date: "2026-10-12"
    },
    {
      id: "rough-days",
      label: "When she pulled back",
      text: "I remember there were times when one of us, or maybe just her, had a rough day at the office, and she would choose to distance herself from me a little.",
      date: "2026-10-12"
    },
    {
      id: "asked-around",
      label: "Asking through her people",
      text: "So I always asked about her through the people close to her.",
      date: "2026-10-12",
      from: "rough-days"
    },
    {
      id: "fish-keychain",
      label: "The fish keychain",
      text: "I remember the first time she gave me a gift after the 'cold war'. It was a fish keychain, hahaha. I was honestly so happy.",
      date: "2026-10-12",
      from: "rough-days",
      links: ["fish"]
    },
    {
      id: "oct-12",
      label: "October 12th",
      text: "October 12th was the day she discovered the existence of these stars.",
      date: "2026-10-12"
    },
    {
      id: "nervous",
      label: "How nervous I was",
      text: "I remember being very nervous at that time.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "funny-then",
      label: "How funny she was",
      text: "I remember how funny she was back then.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "introduced",
      label: "The person I am now",
      text: "She was the first person I introduced to the person I am now, someone much better.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "different-person",
      label: "Someone I never expected",
      text: "At that moment, I let myself become a different person, someone I never expected to be, in front of her.",
      date: "2026-10-12",
      from: "introduced"
    },
    {
      id: "close-to-her",
      label: "Close to her",
      text: "I remember what it felt like to be close to her when I told her this: her smile, her touch, and how beautiful she looked in that moment.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "great-calm",
      label: "A great sense of calm",
      text: "She brings a great sense of calm.",
      date: "2026-10-12",
      from: "calm"
    },
    {
      id: "no-worry",
      label: "No more worry",
      text: "I no longer worry when I'm near her.",
      date: "2026-10-12",
      from: "calm"
    },
    {
      id: "no-fear",
      label: "No more fear",
      text: "I no longer feel afraid when I'm with her.",
      date: "2026-10-12",
      from: "calm"
    },
    {
      id: "open-up",
      label: "Talking about myself",
      text: "I am not afraid when I talk about myself while I am with her.",
      date: "2026-10-12",
      from: "no-fear"
    },
    {
      id: "happy-day",
      label: "A day that made me happy",
      text: "I will always remember this day, October 12th, as one of the days that made me very happy, because of her.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "remember-again",
      label: "I will keep remembering",
      text: "Once again, I will keep remembering this day, October 12th.",
      date: "2026-10-12",
      from: "happy-day"
    },
    {
      id: "loving",
      label: "A loving person",
      text: "She is a loving person, hahaha.",
      date: "2026-10-12",
      from: "big-heart"
    },
    {
      id: "beautiful-night",
      label: "Beautiful that night",
      text: "She was very beautiful that night.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "loved-respected",
      label: "Loved and respected",
      text: "That night, October 12th, I really wanted her to know that she was loved and respected.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "keep-loving",
      label: "I will keep loving her",
      text: "So I will keep loving her, and never tire of doing so, and keep showing just how precious she is.",
      date: "2026-10-12",
      from: "loved-respected"
    },
    {
      id: "looking-after",
      label: "Looking after her",
      text: "I will also keep looking after her, in my own way and to the best of my ability. I will protect her.",
      date: "2026-10-12",
      from: "loved-respected"
    },
    {
      id: "unconditional",
      label: "Unconditionally",
      text: "I will always love her unconditionally, and never tire of doing so.",
      date: "2026-10-12",
      from: "keep-loving"
    },
    {
      id: "promise",
      label: "A promise to myself",
      text: "That night, I promised myself I would always try to be better, for myself and for her. I would keep learning her language.",
      date: "2026-10-12",
      from: "oct-12"
    },
    {
      id: "fried-egg",
      label: "Her fried egg",
      text: "The egg dish she likes to make is a fried egg with soy sauce, chili powder, and rice.",
      date: "2026-10-13",
      from: "food"
    },
    {
      id: "omelet",
      label: "Her omelet",
      text: "She said she also likes omelets mixed with onions, chili, and soy sauce, so the eggs turn a bit black.",
      date: "2026-10-13",
      from: "fried-egg"
    },
    {
      id: "zookeeper",
      label: "Her dream job: zookeeper",
      text: "She once said that if money didn't matter, her dream job would be to become a zookeeper.",
      date: "2026-10-13",
      from: "animals"
    },
    {
      id: "tutor",
      label: "Or a private tutor",
      text: "Or a private tutor. She once said she wanted to be one, and that's why I bought her a book about school kids back then.",
      date: "2026-10-13",
      from: "zookeeper"
    },
    {
      id: "love-her-talking",
      label: "When she speaks",
      text: "A little thing that makes me smile is when she speaks. I don't know why, but I really love hearing her talk.",
      date: "2026-10-13",
      from: "voice"
    },
    {
      id: "far-away",
      label: "When she's far away",
      text: "When she's far away, what I remember most vividly are her gaze and her voice, hahaha. Then again, I probably just really love her voice and the way she speaks.",
      date: "2026-10-13",
      from: "voice"
    },
    {
      id: "changed-me",
      label: "How she changed me",
      text: "Something that made me change for the better is her perspective and the way she feels things.",
      date: "2026-10-13",
      from: "tender"
    },
    {
      id: "proud",
      label: "What makes me proud",
      text: "What makes me proud is when she does what she loves.",
      date: "2026-10-13"
    },
    {
      id: "hope",
      label: "What I hope for her",
      text: "I hope she gets a better life, better friends, and a better job, so she can buy everything she wants, go wherever she likes, and be free to do whatever she enjoys.",
      date: "2026-10-13"
    },
    {
      id: "comforts-others",
      label: "She shows up for others",
      text: "When others are feeling sad, she always strives to be there and is willing to make time to comfort them.",
      date: "2026-10-13",
      from: "cares"
    },
    {
      id: "polka-gifts",
      label: "Polka dot gifts",
      text: "Her friends gave her gifts that were all polka-dotted, a bag and an outfit, hahaha. I'm sure she's going to look absolutely stunning in them.",
      date: "2026-10-12",
      from: "polka-dots"
    },
    {
      id: "puncak",
      label: "Overnight in Puncak",
      text: "I remember the time the five of us went to Puncak and stayed overnight: Wullan, Alvi, Yossy, her, and me.",
      date: "2026-10-13",
      from: "work-friends"
    },
    {
      id: "flowers",
      label: "The first flowers",
      text: "I remember the first time I gave her flowers, and it turned out she liked them, hahaha.",
      date: "2026-10-13"
    },
    {
      id: "rawa-belong",
      label: "Rawa Belong, someday",
      text: "We have a plan to go to Rawa Belong that we haven't done yet.",
      date: "2026-10-13",
      from: "flowers",
      links: ["going-out"]
    },
    {
      id: "explaining",
      label: "Watching her explain",
      text: "I love watching her explain something she knows inside out to other people. I also feel proud, because to me she's just so cool, hahaha.",
      date: "2026-10-13",
      from: "smart",
      links: ["tutor"]
    },
    {
      id: "hope-people",
      label: "The people she meets",
      text: "I hope that wherever she goes, she always meets people who appreciate, respect, cherish, and protect her.",
      date: "2026-10-13",
      from: "hope"
    },
    {
      id: "first-prayer",
      label: "The first time I prayed",
      text: "I remember the first time I prayed for her. I hoped she would be granted the happiness she had always wanted.",
      date: "2026-10-13",
      from: "hope"
    },
    {
      id: "changed-life",
      label: "When she changed my life",
      text: "I remember what it felt like when she first changed my life.",
      date: "2026-10-13",
      from: "changed-me"
    },
    {
      id: "new-keychain",
      label: "Another new key chain",
      text: "She also gave me a new key chain, hahaha.",
      date: "2026-10-13",
      from: "fish-keychain"
    },
    {
      id: "red-flats",
      label: "Her red flats",
      text: "The first gift I gave her for her birthday was a pair of red flats, hahaha, because I knew from her friend that she wanted them.",
      date: "2026-10-13",
      from: "birthday-date"
    },
    {
      id: "jogja",
      label: "Our first trip to Jogja",
      text: "Our first trip to Jogja, with the other friends.",
      date: "2026-10-14"
    },
    {
      id: "jogja-rocks",
      label: "Photos by the rocks",
      text: "There was a moment the two of us shared, looking for a photo spot near the rocks. I took a few pictures of her, and she looked absolutely beautiful then.",
      date: "2026-10-14",
      from: "jogja"
    },
    {
      id: "jogja-beach",
      label: "The beach that night",
      text: "That night, out of curiosity, we also went to the beach with some other friends and took photos together.",
      date: "2026-10-14",
      from: "jogja"
    },
    {
      id: "miss-her",
      label: "I miss her",
      text: "I miss her a little bit now.",
      date: "2026-10-14"
    },
    {
      id: "first-move",
      label: "She waits for the first move",
      text: "She's the type of person who needs the other person to make the first move, like starting a chat, but her response is quite good.",
      date: "2026-10-14",
      from: "introvert"
    },
    {
      id: "angry-cute",
      label: "Cuter when she's angry",
      text: "When she gets angry, she actually becomes even cuter.",
      date: "2026-10-14",
      from: "shy"
    },
    {
      id: "hard-to-get",
      label: "Hard to get, again",
      text: "Apparently, she's planning to play hard to get with me again.",
      date: "2026-10-14",
      from: "flirting"
    },
    {
      id: "nice-eyes",
      label: "Her nice eyes",
      text: "She also has nice eyes.",
      date: "2026-10-14",
      from: "eyes"
    },
    {
      id: "responding",
      label: "How she responds",
      text: "She is really good at responding to others. She knows exactly how to carry herself and what to say.",
      date: "2026-10-14",
      from: "smart"
    },
    {
      id: "lake-toba",
      label: "Lake Toba",
      text: "She wants to go to Lake Toba. She just mentioned it, haha.",
      date: "2026-10-14",
      from: "going-out"
    },
    {
      id: "straightforward",
      label: "She's straightforward",
      text: "I also like her because she's straightforward. If she wants something, she says so, and if she doesn't, she says so.",
      date: "2026-10-14"
    },
    {
      id: "mbok-darmi",
      label: "Mbok Darmi chocolate oat milk",
      text: "She likes Mbok Darmi's chocolate oat milk.",
      date: "2026-10-14",
      from: "drinks",
      links: ["chocolate"]
    },
    {
      id: "hophop",
      label: "SilverQueen HopHop",
      text: "She likes the SilverQueen-flavored HopHop.",
      date: "2026-10-14",
      from: "drinks",
      links: ["chocolate"]
    },
    {
      id: "cola",
      label: "Coca-Cola",
      text: "For soda drinks, she likes Coca-Cola.",
      date: "2026-10-14",
      from: "drinks"
    },
    {
      id: "koi-wintermelon",
      label: "Wintermelon at KOI",
      text: "She wants to try the wintermelon milk tea from KOI.",
      date: "2026-10-14",
      from: "tea-orders"
    },
    {
      id: "sushi",
      label: "Sushi, mostly salmon",
      text: "She likes eating sushi. She enjoys almost all kinds, but she goes for salmon most often.",
      date: "2026-10-14",
      from: "seafood"
    },
    {
      id: "sushi-tei-salad",
      label: "The salad at Sushi Tei",
      text: "She also really likes the salad at Sushi Tei.",
      date: "2026-10-14",
      from: "sushi"
    },
    {
      id: "ribs",
      label: "Grilled ribs",
      text: "We went to eat grilled ribs together.",
      date: "2026-10-15"
    },
    {
      id: "keychain-events",
      label: "Keychain creator events",
      text: "She mentioned that she loves going to events for local keychain creators, because for her it's like paradise, hahaha.",
      date: "2026-10-16",
      from: "bag-charms"
    },
    {
      id: "keychain-cahya",
      label: "Cute finds with Cahya",
      text: "She went to that keychain event with her friend Cahya and spent money on buying cute items.",
      date: "2026-10-16",
      from: "keychain-events",
      links: ["college-friends"]
    },
    {
      id: "keychain-millions",
      label: "Spending millions, hahaha",
      text: "She also mentioned that people who attend the event can end up spending millions just to buy those cute items, hahaha.",
      date: "2026-10-16",
      from: "keychain-events"
    },
    {
      id: "pouch",
      label: "She'd pick a pouch",
      text: "Compared to a keychain, she would prefer something like a pouch, because it is more practical.",
      date: "2026-10-16",
      from: "keychain-events"
    },
    {
      id: "dark-colors",
      label: "A pop of color",
      text: "She said I'm better suited to dark colors, but she also thinks it would be even more of a statement if there were one element that gave a pop of color.",
      date: "2026-10-16",
      from: "colors"
    },
    {
      id: "love-her-stories",
      label: "Her stories",
      text: "I will always remember, and never get tired of saying, that I absolutely love it when she shares things about herself: where she's been, what she's seen, and everything from what makes her happy to what makes her sad. I just really love listening to her stories.",
      date: "2026-10-16",
      from: "love-her-talking"
    },
    {
      id: "oct-17",
      label: "Dinner on October 17th",
      text: "On October 17th, 2026, we went out to eat together.",
      date: "2026-10-17"
    },
    {
      id: "oct-17-outfit",
      label: "What she wore",
      text: "She wore a white shirt, a black veil, and a super cute polka-dot bag.",
      date: "2026-10-17",
      from: "oct-17",
      links: ["polka-dots"]
    },
    {
      id: "oct-17-beautiful",
      label: "Really beautiful",
      text: "She was really beautiful.",
      date: "2026-10-17",
      from: "oct-17"
    },
    {
      id: "first-sushi",
      label: "Our first sushi",
      text: "We ate sushi for the first time, and I really loved that moment.",
      date: "2026-10-17",
      from: "oct-17",
      links: ["sushi"]
    },
    {
      id: "mint-choco",
      label: "Mint chocolate ice cream",
      text: "We also bought some snacks before going home, and she likes mint chocolate! She bought choco mint ice cream, and in my opinion it tastes like Pepsodent, hahaha.",
      date: "2026-10-17",
      from: "oct-17",
      links: ["chocolate"]
    },
    {
      id: "walking-together",
      label: "Walking together",
      text: "We also walked from one place to another, and it was fun and comfortable.",
      date: "2026-10-17",
      from: "oct-17"
    },
    {
      id: "so-happy",
      label: "She said she was so happy",
      text: "She said she was so happy, hahah.",
      date: "2026-10-17",
      from: "oct-17"
    },
    {
      id: "our-time",
      label: "Our time",
      text: "I used to really like me time, but this time I think 'our time' is much better, hahahaha.",
      date: "2026-10-17",
      from: "changed-me",
      links: ["oct-17"]
    },
    {
      id: "slowly-selflessly",
      label: "Slowly, not in a hurry",
      text: "I am grateful, and I will always remember getting to know her, or each other, slowly, not in a hurry, and selflessly.",
      date: "2026-10-17",
      from: "oct-17",
      links: ["unhurried"]
    },
    {
      id: "choosing-her",
      label: "When a choice involves her",
      text: "I like it when something I'm about to choose involves her.",
      date: "2026-10-18"
    },
    {
      id: "no-cheating",
      label: "No cheating, of any kind",
      text: "She once said that she couldn't tolerate any form of cheating, whether 'micro' or 'macro.'",
      date: "2026-10-18",
      from: "straightforward"
    },
    {
      id: "spoil-her",
      label: "I love to spoil her",
      text: "I forgot the first time, but I love being able to spoil her.",
      date: "2026-10-18",
      from: "love-languages"
    },
    {
      id: "tomato-careful",
      label: "Her tomato keychain",
      text: "She said her tomato keychain almost fell off once, so she's being careful.",
      date: "2026-10-18",
      from: "tomato-keychain"
    },
    {
      id: "second-choice",
      label: "Never a second choice",
      text: "She doesn't like being used as a second choice.",
      date: "2026-10-20",
      from: "no-cheating"
    },
    {
      id: "dislikes",
      label: "What she can't stand",
      text: "She also dislikes liars, people who are tone-deaf, people who take things too lightly, and being excluded.",
      date: "2026-10-20",
      from: "straightforward"
    },
    {
      id: "diehard",
      label: "A die-hard lover of me",
      text: "She's a die-hard lover of me, hahaha.",
      date: "2026-10-20",
      from: "into-me"
    },
    {
      id: "date-all-day",
      label: "Her date partner",
      text: "If she could date someone all day, she would definitely choose me as her date partner, because of my super cool charm, hahaha.",
      date: "2026-10-20",
      from: "into-me"
    },
    {
      id: "cranberry",
      label: "The diamond cranberry",
      text: "She very rarely asks me for anything. Tonight (October 19th) she asked me to buy her something, and it turned out to be a bit hard to find, even though it was just a diamond cranberry, haha.",
      date: "2026-10-19",
      from: "spoil-her"
    },
    {
      id: "relies-on-me",
      label: "When she relies on me",
      text: "I like it when she relies on me, even for the smallest things, or asks me for something.",
      date: "2026-10-20",
      from: "cranberry"
    },
    {
      id: "speaks-up",
      label: "First to speak up",
      text: "She is often the first to speak up when something isn't right.",
      date: "2026-10-21",
      from: "straightforward"
    },
    {
      id: "no-spotlight",
      label: "Not for the spotlight",
      text: "She may not seek the spotlight, but she never shies away from speaking up.",
      date: "2026-10-21",
      from: "speaks-up"
    },
    {
      id: "proud-speaks",
      label: "Proud of her like that",
      text: "And I'm really proud of her like that.",
      date: "2026-10-21",
      from: "no-spotlight",
      links: ["proud"]
    },
    {
      id: "gentle-to-me",
      label: "Gentle with me",
      text: "She is sometimes gentle when she talks to me.",
      date: "2026-10-21",
      from: "tender"
    },
    {
      id: "her-thoughts",
      label: "Her thoughts",
      text: "I really like her thoughts, and the way she looks at the people around her.",
      date: "2026-10-21",
      from: "smart"
    },
    {
      id: "cool-head",
      label: "The cool inside her head",
      text: "Maybe without her realizing it, or needing any effort, just by talking a little she already shows how cool the contents of her head are.",
      date: "2026-10-21",
      from: "her-thoughts"
    },
    {
      id: "fun-together",
      label: "Fun to play with",
      text: "She's also really fun when we play together.",
      date: "2026-10-21"
    },
    {
      id: "kecelakaan-kecil",
      label: "Kecelakaan kecil di motor",
      text: "Pertama kali ada 'kecelakaan kecil' waktu kita berdua pulang dari kantor: kaki dia nyenggol orang karena gua terlalu mepet ke kiri waktu bawa motor. Gua belum sempat nanyain keadaan kakinya sampai sekarang, kayaknya. Karena udah kehilangan momen buat nanya, besoknya setiap kali motor mepet sama orang atau apa pun, gua cek dulu kakinya apakah terlalu mepet atau engga, supaya dia gak kena lagi.",
      date: "2026-10-21",
      links: ["looking-after"]
    },
    {
      id: "kepleset",
      label: "Kepleset di depan rumah",
      text: "Kejadian lagi waktu pulang kerja: dia turun dari motor, terus tiba-tiba kepleset, untung aja gak jatuh. Itu terjadi 2 kali di tempat yang sama, di depan rumahnya. Pas gua liat, tempat itu emang kayaknya agak licin karena sering ada aliran air, jadi wajar kalau dia kepleset. Oh, yang kedua kali kayaknya karena kakinya keserimpet, kalau gak salah. Besoknya gua majuin lagi posisi motor dan berhentinya pas waktu jemput dan anter dia pulang, supaya dia gak kepleset lagi.",
      date: "2026-10-21",
      from: "kecelakaan-kecil"
    },
    {
      id: "indecisive",
      label: "Dia indecisive",
      text: "Dia tuh bener-bener indecisive. Pertama kali dia ngakuin itu waktu pertama kali kita ke AEON berdua: dia bilang dia indecisive, jadi ngikut aja ke mana. Tapi kalau dia gak mau, ya dia bilang gak mau, dan dari situ gua masih percaya sedikit. Ternyata hal-hal kecil pun dia indecisive juga, tapi lucu-lucu aja sih.",
      date: "2026-10-21",
      from: "straightforward"
    },
    {
      id: "martabak",
      label: "Martabak coklat",
      text: "Dia suka martabak coklat.",
      date: "2026-10-25",
      from: "chocolate"
    },
    {
      id: "choco-mint-eskrim",
      label: "Choco mint paling enak di eskrim",
      text: "Dia juga suka rasa choco mint, tapi katanya yang paling enak itu di eskrim.",
      date: "2026-10-25",
      from: "mint-choco"
    },
    {
      id: "nasi-goreng-malam",
      label: "Nasi goreng tengah malam",
      text: "Gua pernah nyamperin dia malem-malem buat makan nasi goreng, cuma karena laper... dan kangen berat, hahaha. Gak usah geer lu.",
      date: "2026-10-25",
      from: "miss-her"
    },
    {
      id: "green-forest",
      label: "Green forest",
      text: "Dia bilang gua itu green forest, tapi apalah forest kalau gak ada beautiful flowers-nya (dia).",
      date: "2026-10-25",
      from: "colors"
    },
    {
      id: "ngomong-kayak-marah",
      label: "Cara dia ngomong",
      text: "Cara dia ngomong kadang kayak orang marah-marah. Nyebelin dikit, tapi lucu sih.",
      date: "2026-10-25",
      from: "angry-cute"
    },
    {
      id: "cantik-banget",
      label: "Cantik banget",
      text: "Beberapa hari terakhir dia cantik banget banget banget, mungkin karena deket sama gua kali.",
      date: "2026-10-25",
      from: "stunning"
    },
    {
      id: "bete-libur",
      label: "Jadwal libur November",
      text: "Dia bete karena jadwal libur Novembernya busuk, hahaha.",
      date: "2026-10-25"
    },
    {
      id: "staycation",
      label: "Staycation pertama",
      text: "Pertama kali tau sedikit tentang dia itu waktu staycation pertama kali. Waktu itu belum terlalu deket, tapi mulai tertarik sedikit. Tapi agak sedih... karena lagi sesi tanya-tanya, terus bagian dia yang jawab, dia bilang 'belum dirayakan'. Gua gak langsung berusaha mengartikan itu, tapi gua inget-inget terus beberapa hari kemudian.",
      date: "2026-10-27",
      from: "eye-on-her",
      links: ["birthday"]
    },
    {
      id: "pengen-deket",
      label: "Pengen deket dari dulu",
      text: "Dari dulu tuh sebenernya gua pengen deket, cuma emang lebih hati-hati karena dia susah banget ditebak, dan sebenernya gua tuh respect aja.",
      date: "2026-10-27",
      from: "staycation"
    },
    {
      id: "kenapa-gap",
      label: "Kenapa ya, ada gap",
      text: "Dulu mikirnya 'kenapa ya', kenapa kayak ada gap kalau ke gua. Cuma sekarang gua berterima kasih karena itu yang bikin gua penasaran, hahaha.",
      date: "2026-10-27",
      from: "pengen-deket"
    },
    {
      id: "lembut",
      label: "Lembut banget",
      text: "Dia lembut banget orangnya, dan hatinya.",
      date: "2026-10-27",
      from: "tender"
    },
    {
      id: "sederhana",
      label: "Sederhana banget",
      text: "Dia juga sederhana banget, dalam hal apa pun.",
      date: "2026-10-27",
      from: "tender"
    },
    {
      id: "bangga",
      label: "Bangga banget sama dia",
      text: "Gua tuh bangga banget sama dia, meskipun pasti dia sekarang mikir apa yang dibanggain. Dari dulu, sekarang, dan selamanya.",
      date: "2026-10-27",
      from: "proud"
    },
    {
      id: "penyayang",
      label: "Penyayang banget",
      text: "Dan dia itu penyayang banget, hehehe.",
      date: "2026-10-27",
      from: "big-heart"
    },
    {
      id: "manja",
      label: "Ternyata dia manja",
      text: "Tapi ternyata dia juga manja, hahaha, dan gua suka banget.",
      date: "2026-10-27",
      from: "penyayang"
    },
    {
      id: "jatuh-olahraga",
      label: "Jatuh waktu olahraga",
      text: "Dia pernah jatuh waktu olahraga di rumah sampai gak masuk kerja.",
      date: "2026-10-27",
      from: "kepleset"
    },
    {
      id: "dunia-runtuh",
      label: "Kalau dunianya runtuh",
      text: "Dan gua pengen dia tau, even if her world falls apart, or whatever happens, gua akan bikin dia merasa layak buat dicintai dan dapetin semua kebaikan yang ada di dunia ini.",
      date: "2026-10-27",
      from: "unconditional"
    }
  ]
};
