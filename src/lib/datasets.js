const letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
]

const words = [
    "the",
    "of",
    "to",
    "and",
    "a",
    "in",
    "is",
    "it",
    "you",
    "that",
    "he",
    "was",
    "for",
    "on",
    "are",
    "with",
    "as",
    "I",
    "his",
    "they",
    "be",
    "at",
    "one",
    "have",
    "this",
    "from",
    "or",
    "had",
    "by",
    "word",
    "but",
    "what",
    "some",
    "we",
    "can",
    "out",
    "other",
    "were",
    "all",
    "there",
    "when",
    "up",
    "use",
    "your",
    "how",
    "said",
    "an",
    "each",
    "she",
    "which",
    "do",
    "their",
    "time",
    "if",
    "will",
    "way",
    "about",
    "many",
    "then",
    "them",
    "write",
    "would",
    "like",
    "so",
    "these",
    "her",
    "long",
    "make",
    "thing",
    "see",
    "him",
    "two",
    "has",
    "look",
    "more",
    "day",
    "could",
    "go",
    "come",
    "did",
    "number",
    "sound",
    "no",
    "most",
    "people",
    "my",
    "over",
    "know",
    "water",
    "than",
    "call",
    "first",
    "who",
    "may",
    "down",
    "side",
    "been",
    "now",
    "find",
    "any",
    "new",
    "work",
    "part",
    "take",
    "get",
    "place",
    "made",
    "live",
    "where",
    "after",
    "back",
    "little",
    "only",
    "round",
    "man",
    "year",
    "came",
    "show",
    "every",
    "good",
    "me",
    "give",
    "our",
    "under",
    "name",
    "very",
    "through",
    "just",
    "form",
    "sentence",
    "great",
    "think",
    "say",
    "help",
    "low",
    "line",
    "differ",
    "turn",
    "cause",
    "much",
    "mean",
    "before",
    "move",
    "right",
    "boy",
    "old",
    "too",
    "same",
    "tell",
    "does",
    "set",
    "three",
    "want",
    "air",
    "well",
    "also",
    "play",
    "small",
    "end",
    "put",
    "home",
    "read",
    "hand",
    "port",
    "large",
    "spell",
    "add",
    "even",
    "land",
    "here",
    "must",
    "big",
    "high",
    "such",
    "follow",
    "act",
    "why",
    "ask",
    "men",
    "change",
    "went",
    "light",
    "kind",
    "off",
    "need",
    "house",
    "picture",
    "try",
    "us",
    "again",
    "animal",
    "point",
    "mother",
    "world",
    "near",
    "build",
    "self",
    "earth",
    "father",
    "head",
    "stand",
    "own",
    "page",
    "should",
    "country",
    "found",
    "answer",
    "school",
    "grow",
    "study",
    "still",
    "learn",
    "plant",
    "cover",
    "food",
    "sun",
    "four",
    "between",
    "state",
    "keep",
    "eye",
    "never",
    "last",
    "let",
    "thought",
    "city",
    "tree",
    "cross",
    "farm",
    "hard",
    "start",
    "might",
    "story",
    "saw",
    "far",
    "sea",
    "draw",
    "left",
    "late",
    "run",
    "don't",
    "while",
    "press",
    "close",
    "night",
    "real",
    "life",
    "few",
    "north",
    "open",
    "seem",
    "together",
    "next",
    "white",
    "children",
    "begin",
    "got",
    "walk",
    "example",
    "ease",
    "paper",
    "group",
    "always",
    "music",
    "those",
    "both",
    "mark",
    "often",
    "letter",
    "until",
    "mile",
    "river",
    "car",
    "feet",
    "care",
    "second",
    "book",
    "carry",
    "took",
    "science",
    "eat",
    "room",
    "friend",
    "began",
    "idea",
    "fish",
    "mountain",
    "stop",
    "once",
    "base",
    "hear",
    "horse",
    "cut",
    "sure",
    "watch",
    "color",
    "face",
    "wood",
    "main",
    "enough",
    "plain",
    "girl",
    "usual",
    "young",
    "ready",
    "above",
    "ever",
    "red",
    "list",
    "though",
    "feel",
    "talk",
    "bird",
    "soon",
    "body",
    "dog",
    "family",
    "direct",
    "pose",
    "leave",
    "song",
    "measure",
    "door",
    "product",
    "black",
    "short",
    "numeral",
    "class",
    "wind",
    "question",
    "happen",
    "complete",
    "ship",
    "area",
    "half",
    "rock",
    "order",
    "fire",
    "south",
    "problem",
    "piece",
    "told",
    "knew",
    "pass",
    "since",
    "top",
    "whole",
    "king",
    "space",
    "heard",
    "best",
    "hour",
    "better",
    "true .",
    "during",
    "hundred",
    "five",
    "remember",
    "step",
    "early",
    "hold",
    "west",
    "ground",
    "interest",
    "reach",
    "fast",
    "verb",
    "sing",
    "listen",
    "six",
    "table",
    "travel",
    "less",
    "morning",
    "ten",
    "simple",
    "several",
    "vowel",
    "toward",
    "war",
    "lay",
    "against",
    "pattern",
    "slow",
    "center",
    "love",
    "person",
    "money",
    "serve",
    "appear",
    "road",
    "map",
    "rain",
    "rule",
    "govern",
    "pull",
    "cold",
    "notice",
    "voice",
    "unit",
    "power",
    "town",
    "fine",
    "certain",
    "fly",
    "fall",
    "lead",
    "cry",
    "dark",
    "machine",
    "note",
    "wait",
    "plan",
    "figure",
    "star",
    "box",
    "noun",
    "field",
    "rest",
    "correct",
    "able",
    "pound",
    "done",
    "beauty",
    "drive",
    "stood",
    "contain",
    "front",
    "teach",
    "week",
    "final",
    "gave",
    "green",
    "oh",
    "quick",
    "develop",
    "ocean",
    "warm",
    "free",
    "minute",
    "strong",
    "special",
    "mind",
    "behind",
    "clear",
    "tail",
    "produce",
    "fact",
    "street",
    "inch",
    "multiply",
    "nothing",
    "course",
    "stay",
    "wheel",
    "full",
    "force",
    "blue",
    "object",
    "decide",
    "surface",
    "deep",
    "moon",
    "island",
    "foot",
    "system",
    "busy",
    "test",
    "record",
    "boat",
    "common",
    "gold",
    "possible",
    "plane",
    "stead",
    "dry",
    "wonder",
    "laugh",
    "thousand",
    "ago",
    "ran",
    "check",
    "game",
    "shape",
    "equate",
    "hot",
    "miss",
    "brought",
    "heat",
    "snow",
    "tire",
    "bring",
    "yes",
    "distant",
    "fill",
    "east",
    "paint",
    "language",
    "among",
    "grand",
    "ball",
    "yet",
    "wave",
    "drop",
    "heart",
    "am",
    "present",
    "heavy",
    "dance",
    "engine",
    "position",
    "arm",
    "wide",
    "sail",
    "material",
    "size",
    "vary",
    "settle",
    "speak",
    "weight",
    "general",
    "ice",
    "matter",
    "circle",
    "pair",
    "include",
    "divide",
    "syllable",
    "felt",
    "perhaps",
    "pick",
    "sudden",
    "count",
    "square",
    "reason",
    "length",
    "represent",
    "art",
    "subject",
    "region",
    "energy",
    "hunt",
    "probable",
    "bed",
    "brother",
    "egg",
    "ride",
    "cell",
    "believe",
    "fraction",
    "forest",
    "sit",
    "race",
    "window",
    "store",
    "summer",
    "train",
    "sleep",
    "prove",
    "lone",
    "leg",
    "exercise",
    "wall",
    "catch",
    "mount",
    "wish",
    "sky",
    "board",
    "joy",
    "winter",
    "sat",
    "written",
    "wild",
    "instrument",
    "kept",
    "glass",
    "grass",
    "cow",
    "job",
    "edge",
    "sign",
    "visit",
    "past",
    "soft",
    "fun",
    "bright",
    "gas",
    "weather",
    "month",
    "million",
    "bear",
    "finish",
    "happy",
    "hope",
    "flower",
    "clothe",
    "strange",
    "gone",
    "jump",
    "baby",
    "eight",
    "village",
    "meet",
    "root",
    "buy",
    "raise",
    "solve",
    "metal",
    "whether",
    "push",
    "seven",
    "paragraph",
    "third",
    "shall",
    "held",
    "hair",
    "describe",
    "cook",
    "floor",
    "either",
    "result",
    "burn",
    "hill",
    "safe",
    "cat",
    "century",
    "consider",
    "type",
    "law",
    "bit",
    "coast",
    "copy",
    "phrase",
    "silent",
    "tall",
    "sand",
    "soil",
    "roll",
    "temperature",
    "finger",
    "industry",
    "value",
    "fight",
    "lie",
    "beat",
    "excite",
    "natural",
    "view",
    "sense",
    "ear",
    "else",
    "quite",
    "broke",
    "case",
    "middle",
    "kill",
    "son",
    "lake",
    "moment",
    "scale",
    "loud",
    "spring",
    "observe",
    "child",
    "straight",
    "consonant",
    "nation",
    "dictionary",
    "milk",
    "speed",
    "method",
    "organ",
    "pay",
    "age",
    "section",
    "dress",
    "cloud",
    "surprise",
    "quiet",
    "stone",
    "tiny",
    "climb",
    "cool",
    "design",
    "poor",
    "lot",
    "experiment",
    "bottom",
    "key",
    "iron",
    "single",
    "stick",
    "flat",
    "twenty",
    "skin",
    "smile",
    "crease",
    "hole",
    "trade",
    "melody",
    "trip",
    "office",
    "receive",
    "row",
    "mouth",
    "exact",
    "symbol",
    "die",
    "least",
    "trouble",
    "shout",
    "except",
    "wrote",
    "seed",
    "tone",
    "join",
    "suggest",
    "clean",
    "break",
    "lady",
    "yard",
    "rise",
    "bad",
    "blow",
    "oil",
    "blood",
    "touch",
    "grew",
    "cent",
    "mix",
    "team",
    "wire",
    "cost",
    "lost",
    "brown",
    "wear",
    "garden",
    "equal",
    "sent",
    "choose",
    "fell",
    "fit",
    "flow",
    "fair",
    "bank",
    "collect",
    "save",
    "control",
    "decimal",
    "gentle",
    "woman",
    "captain",
    "practice",
    "separate",
    "difficult",
    "doctor",
    "please",
    "protect",
    "noon",
    "whose",
    "locate",
    "ring",
    "character",
    "insect",
    "caught",
    "period",
    "indicate",
    "radio",
    "spoke",
    "atom",
    "human",
    "history",
    "effect",
    "electric",
    "expect",
    "crop",
    "modern",
    "element",
    "hit",
    "student",
    "corner",
    "party",
    "supply",
    "bone",
    "rail",
    "imagine",
    "provide",
    "agree",
    "thus",
    "capital",
    "won't",
    "chair",
    "danger",
    "fruit",
    "rich",
    "thick",
    "soldier",
    "process",
    "operate",
    "guess",
    "necessary",
    "sharp",
    "wing",
    "create",
    "neighbor",
    "wash",
    "bat",
    "rather",
    "crowd",
    "corn",
    "compare",
    "poem",
    "string",
    "bell",
    "depend",
    "meat",
    "rub",
    "tube",
    "famous",
    "dollar",
    "stream",
    "fear",
    "sight",
    "thin",
    "triangle",
    "planet",
    "hurry",
    "chief",
    "colony",
    "clock",
    "mine",
    "tie",
    "enter",
    "major",
    "fresh",
    "search",
    "send",
    "yellow",
    "gun",
    "allow",
    "print",
    "dead",
    "spot",
    "desert",
    "suit",
    "current",
    "lift",
    "rose",
    "continue",
    "block",
    "chart",
    "hat",
    "sell",
    "success",
    "company",
    "subtract",
    "event",
    "particular",
    "deal",
    "swim",
    "term",
    "opposite",
    "wife",
    "shoe",
    "shoulder",
    "spread",
    "arrange",
    "camp",
    "invent",
    "cotton",
    "born",
    "determine",
    "quart",
    "nine",
    "truck",
    "noise",
    "level",
    "chance",
    "gather",
    "shop",
    "stretch",
    "throw",
    "shine",
    "property",
    "column",
    "molecule",
    "select",
    "wrong",
    "gray",
    "repeat",
    "require",
    "broad",
    "prepare",
    "salt",
    "nose",
    "plural",
    "anger",
    "claim",
    "continent",
    "oxygen",
    "sugar",
    "death",
    "pretty",
    "skill",
    "women",
    "season",
    "solution",
    "magnet",
    "silver",
    "thank",
    "branch",
    "match",
    "suffix",
    "especially",
    "fig",
    "afraid",
    "huge",
    "sister",
    "steel",
    "discuss",
    "forward",
    "similar",
    "guide",
    "experience",
    "score",
    "apple",
    "bought",
    "led",
    "pitch",
    "coat",
    "mass",
    "card",
    "band",
    "rope",
    "slip",
    "win",
    "dream",
    "evening",
    "condition",
    "feed",
    "tool",
    "total",
    "basic",
    "smell",
    "valley",
    "nor",
    "double",
    "seat",
    "arrive",
    "master",
    "track",
    "parent",
    "shore",
    "division",
    "sheet",
    "substance",
    "favor",
    "connect",
    "post",
    "spend",
    "chord",
    "fat",
    "glad",
    "original",
    "share",
    "station",
    "dad",
    "bread",
    "charge",
    "proper",
    "bar",
    "offer",
    "segment",
    "slave",
    "duck",
    "instant",
    "market",
    "degree",
    "populate",
    "chick",
    "dear",
    "enemy",
    "reply",
    "drink",
    "occur",
    "support",
    "speech",
    "nature",
    "range",
    "steam",
    "motion",
    "path",
    "liquid",
    "log",
    "meant",
    "quotient",
    "teeth",
    "shell",
    "neck"
]

const sentences = [
    "The old clock ticked with a rhythmic slowness.",
    "A fluffy white cloud drifted lazily across the azure sky.",
    "She hummed a cheerful tune as she walked down the street.",
    "The smell of freshly baked bread filled the air.",
    "He carefully arranged the colorful flowers in the vase.",
    "A gentle breeze rustled the leaves of the tall oak tree.",
    "The cat purred contentedly as it curled up in its favorite spot.",
    "They laughed and chatted for hours, enjoying each other's company.",
    "The sun began to set, painting the sky with vibrant colors.",
    "She gazed out the window, lost in thought.",
    "He scribbled notes in his worn leather notebook.",
    "The rain pattered against the windowpane, creating a soothing sound.",
    "She sipped her hot chocolate, savoring the warmth.",
    "He told a funny story, and everyone burst into laughter.",
    "The children played in the park, full of energy and joy.",
    "She sang a beautiful melody, her voice clear and strong.",
    "He painted a landscape, capturing the beauty of the countryside.",
    "The dog wagged its tail excitedly, eager for a walk.",
    "She read a book, completely engrossed in the story.",
    "He watched the birds soaring high above the trees.",
    "The wind howled fiercely, shaking the windows.",
    "She wrapped herself in a warm blanket, feeling cozy and comfortable.",
    "He played a lively tune on his guitar, tapping his foot to the beat.",
    "The stars twinkled brightly in the night sky.",
    "She whispered a secret to her best friend.",
    "He built a sandcastle on the beach, carefully adding the finishing touches.",
    "The waves crashed against the shore, creating a powerful roar.",
    "She collected seashells, admiring their intricate patterns.",
    "He swam in the ocean, feeling refreshed and invigorated.",
    "The sun shone brightly, warming the sand.",
    "She relaxed in a deck chair, enjoying the sunshine.",
    "He built a bonfire, as the flames danced and flickered.",
    "The smell of roasting marshmallows filled the air.",
    "She told stories around the campfire, creating a sense of community.",
    "He played a game of charades, laughing at the silly antics.",
    "The night was filled with the sounds of crickets chirping.",
    "She fell asleep under a blanket of stars, feeling peaceful and content.",
    "He woke up to the sound of birds singing.",
    "The morning dew glistened on the grass.",
    "She brewed a pot of coffee, enjoying the aroma.",
    "He ate a hearty breakfast, ready for the day ahead.",
    "The city streets buzzed with activity.",
    "She walked to work, listening to music on her headphones.",
    "He worked at his desk, focused on his tasks.",
    "The office was filled with the sound of typing.",
    "She attended a meeting, sharing her ideas.",
    "He collaborated with his colleagues, working towards a common goal.",
    "The lunch break provided a welcome respite.",
    "She ate a sandwich at her desk, catching up on the news.",
    "He went for a walk in the park, enjoying the fresh air.",
    "The afternoon passed quickly, filled with work and meetings.",
    "She finished her tasks, feeling a sense of accomplishment.",
    "He left the office, eager to go home.",
    "The traffic was heavy, and the commute was long.",
    "She listened to the radio, trying to distract herself.",
    "He finally arrived home, feeling tired but relieved.",
    "The smell of dinner cooking filled the house.",
    "She greeted her family, happy to see them.",
    "He ate dinner with his loved ones, enjoying their company.",
    "The evening was spent relaxing and unwinding.",
    "She watched television, catching up on her favorite shows.",
    "He read a book, escaping into another world.",
    "The night drew to a close, and it was time for bed.",
    "She brushed her teeth, preparing for sleep.",
    "He climbed into bed, feeling comfortable and cozy.",
    "The lights were turned off, and the room was plunged into darkness.",
    "She closed her eyes, ready to drift off to sleep.",
    "He fell asleep quickly, dreaming of adventures to come.",
    "The alarm clock rang, signaling the start of a new day.",
    "She hit the snooze button, wanting just a few more minutes of sleep.",
    "He finally got out of bed, feeling groggy and tired.",
    "The morning routine began, a familiar sequence of events.",
    "She got dressed, choosing her outfit for the day.",
    "He ate breakfast, trying to wake himself up.",
    "The day stretched ahead, full of possibilities.",
    "She faced the challenges with courage and determination.",
    "He embraced the opportunities with enthusiasm and excitement.",
    "The journey of life continued, filled with twists and turns.",
    "She learned from her mistakes, growing stronger and wiser.",
    "He celebrated his successes, feeling proud and accomplished.",
    "The tapestry of life unfolded, rich and complex.",
    "She cherished the moments of joy and happiness.",
    "He found strength in the face of adversity.",
    "The human spirit endured, resilient and unwavering.",
    "She embraced the beauty of the world around her.",
    "He found meaning in the simple things.",
    "The cycle of life continued, an endless rhythm of beginnings and endings.",
    "She lived each day to the fullest, making the most of every moment.",
    "He found peace in the present, appreciating the here and now.",
    "The legacy of life echoed through time, a testament to the human experience.",
    "She left her mark on the world, making a difference in her own way.",
    "He lived a life of purpose, leaving behind a positive impact.",
    "The story of life continued, written in the hearts and minds of those who remained.",
    "The sun peeked over the horizon, casting long shadows across the land.",
    "A lone wolf howled in the distance, its voice echoing through the stillness.",
    "The river flowed gently, carrying leaves and twigs along its current.",
    "A spider spun its web, patiently waiting for its next meal.",
    "The wind whispered through the tall grass, creating a soothing melody.",
    "A butterfly fluttered by, its wings painted with vibrant colors.",
    "A squirrel scampered up a tree trunk, gathering nuts for the winter.",
    "A robin perched on a branch, singing a cheerful song.",
    "The forest was alive with the sounds of nature.",
    "A deer grazed peacefully in a clearing, unaware of the approaching danger.",
    "A hawk circled overhead, its keen eyes searching for prey.",
    "The hunter stalked through the woods, his senses on high alert.",
    "A rabbit darted across the path, escaping the hunter's notice.",
    "The air was filled with the scent of pine needles and damp earth.",
    "A mushroom sprouted from the forest floor, its cap a vibrant red.",
    "A ladybug crawled across a leaf, its tiny body a splash of color.",
    "The sun climbed higher in the sky, warming the earth below.",
    "A bee buzzed around a flower, collecting nectar and pollen.",
    "A hummingbird hovered in mid-air, its wings a blur of motion.",
    "The flowers bloomed in a riot of colors, attracting bees and butterflies.",
    "The trees provided shade from the midday sun, offering a cool respite.",
    "A family of bears wandered through the forest, searching for food.",
    "A raccoon rummaged through a trash can, hoping to find a tasty treat.",
    "A skunk sprayed its pungent scent, warning off potential predators.",
    "The night descended upon the forest, bringing with it a sense of mystery.",
    "The moon shone brightly, illuminating the forest floor.",
    "The stars twinkled in the night sky, creating a breathtaking spectacle.",
    "An owl hooted in the darkness, its voice a haunting sound.",
    "A bat flew silently through the air, catching insects on the wing.",
    "The forest was quiet and still, save for the occasional rustle of leaves.",
    "A firefly blinked its light, signaling its presence to potential mates.",
    "The sounds of the night filled the air, a symphony of crickets and frogs.",
    "A coyote howled in the distance, its voice a mournful cry.",
    "The forest was a place of both beauty and danger, a world of its own.",
    "The cycle of life continued, played out in the shadows and sunlight.",
    "The forest was a reminder of the power and resilience of nature.",
    "The interconnectedness of all living things was evident in every detail.",
    "The balance of nature was delicate and fragile, easily disrupted.",
    "The forest was a treasure to be cherished and protected.",
    "The future of the forest depended on the actions of humans.",
    "The responsibility to preserve this natural wonder rested on our shoulders.",
    "The beauty of the forest was a gift to be enjoyed by all.",
    "The peace and tranquility of the forest offered a refuge from the stresses of modern life.",
    "The forest was a place to reconnect with nature and find solace in its embrace.",
    "The sounds of the forest had a calming effect, soothing the mind and body.",
    "The fresh air and natural beauty of the forest were invigorating and rejuvenating.",
    "The forest was a place to escape the noise and pollution of the city.",
    "The opportunity to experience the wonders of the forest was a privilege.",
    "The memories of time spent in the forest would last a lifetime.",
    "The forest was a place of wonder and inspiration, a source of endless fascination.",
    "The mysteries of the forest beckoned, inviting exploration and discovery.",
    "The secrets of the forest were waiting to be unveiled, one by one.",
    "The journey into the heart of the forest was an adventure in itself.",
    "The rewards of exploring the forest were immeasurable.",
    "The knowledge gained from observing the forest was invaluable.",
    "The respect for nature grew with each encounter in the forest.",
    "The love for the forest deepened with every visit.",
    "The forest was a part of us, and we were a part of it.",
    "The connection to the forest was a bond that could never be broken.",
    "The forest was our home, and we were its caretakers.",
    "The sun set behind the mountains, casting a golden glow over the valley.",
    "A gentle breeze rustled the leaves of the ancient oak tree.",
    "She carefully folded the letter and placed it in the envelope.",
    "The sound of laughter echoed through the empty hallway.",
    "He stared at the stars, wondering if anyone was looking back.",
    "The old clock on the wall ticked steadily, marking the passage of time.",
    "A cat darted across the street, disappearing into the shadows.",
    "The smell of freshly baked bread filled the air.",
    "She picked up the seashell and held it to her ear, listening to the ocean.",
    "The train rattled as it sped down the tracks.",
    "Raindrops tapped lightly against the windowpane.",
    "He opened the book and began to read the first page.",
    "The crowd cheered as the team scored the winning goal.",
    "A butterfly landed softly on the flower, its wings shimmering in the sunlight.",
    "The waves crashed against the rocks, sending spray into the air.",
    "She tied her shoelaces and prepared for her morning run.",
    "The fire crackled and popped, warming the small cabin.",
    "He adjusted his tie and took a deep breath before entering the room.",
    "The scent of pine trees filled the forest.",
    "A dog barked in the distance, breaking the silence of the night.",
    "She smiled as she watched the children play in the park.",
    "The moon hung low in the sky, casting a silver light over the landscape.",
    "He scribbled a note on a piece of paper and left it on the table.",
    "The wind howled outside, rattling the windows.",
    "She stirred the soup slowly, savoring the aroma.",
    "The sound of a guitar drifted through the open window.",
    "He wiped the sweat from his brow and continued working.",
    "The road stretched out before them, endless and uncharted.",
    "A bird chirped merrily from its perch on the branch.",
    "She tucked a strand of hair behind her ear and continued reading.",
    "The clock struck midnight, signaling the start of a new day.",
    "He leaned against the fence and watched the horses graze.",
    "The city lights twinkled like stars in the night sky.",
    "She dipped her brush into the paint and began to create.",
    "The sound of footsteps echoed in the empty corridor.",
    "He unfolded the map and studied it carefully.",
    "The river flowed gently, reflecting the blue sky above.",
    "A child’s laughter rang out, pure and joyful.",
    "She wrapped the scarf tightly around her neck to ward off the cold.",
    "The smell of coffee wafted through the kitchen.",
    "He climbed the hill, eager to see the view from the top.",
    "The leaves crunched underfoot as they walked through the forest.",
    "She closed her eyes and listened to the sound of the rain.",
    "The sun rose slowly, painting the sky in hues of pink and orange.",
    "He tightened the screws on the wooden bench.",
    "The sound of a distant thunderstorm rolled across the plains.",
    "She carefully arranged the flowers in the vase.",
    "The old bridge creaked as they crossed it.",
    "He flipped through the pages of the magazine, not really reading.",
    "The smell of saltwater filled the air as they approached the beach.",
    "She tied the ribbon around the gift box and smiled.",
    "The sound of a violin filled the concert hall.",
    "He adjusted the telescope to get a better view of the stars.",
    "The snow fell softly, blanketing the ground in white.",
    "She hummed a tune as she washed the dishes.",
    "The sound of a car engine broke the silence of the countryside.",
    "He picked up the phone and dialed the number.",
    "The wind carried the scent of blooming flowers.",
    "She opened the door and stepped into the sunlight.",
    "The sound of waves lapping against the shore was soothing.",
    "He scratched his head, trying to remember where he had put the keys.",
    "The smell of freshly cut grass filled the backyard.",
    "She folded the laundry and placed it neatly in the drawer.",
    "The sound of a distant train whistle echoed through the valley.",
    "He tapped his fingers on the table, lost in thought.",
    "The sun reflected off the surface of the lake, creating a dazzling display.",
    "She tied her hair back and began to chop the vegetables.",
    "The sound of a clock ticking filled the quiet room.",
    "He leaned back in his chair and closed his eyes.",
    "The smell of rain hung in the air, promising a storm.",
    "She picked up the pen and began to write.",
    "The sound of a dog barking broke the early morning silence.",
    "He tightened the straps on his backpack and set off.",
    "The stars twinkled brightly in the clear night sky.",
    "She brushed the dust off the old photograph.",
    "The sound of a door creaking open made her turn around.",
    "He adjusted the rearview mirror and started the car.",
    "The smell of wood smoke filled the air.",
    "She carefully placed the teacup on the saucer.",
    "The sound of a baby’s cry echoed through the house.",
    "He picked up the hammer and began to fix the fence.",
    "The wind carried the sound of distant church bells.",
    "She opened the window and let the fresh air in.",
    "The sound of a piano playing softly filled the room.",
    "He tied the rope securely around the package.",
    "The smell of cinnamon and apples filled the kitchen.",
    "She picked up the phone and dialed her friend’s number.",
    "The sound of a bird singing greeted the morning.",
    "He adjusted the focus on the camera and took the shot.",
    "The sun dipped below the horizon, leaving the sky in twilight.",
    "She folded the blanket and placed it on the couch.",
    "The sound of a car horn blared in the distance.",
    "He picked up the newspaper and began to read.",
    "The smell of freshly brewed tea filled the room.",
    "She tied the apron around her waist and began to cook.",
    "The sound of a clock chiming signaled the hour.",
    "He leaned against the wall and watched the people pass by.",
    "The wind rustled the pages of the open book.",
    "She picked up the glass and took a sip of water.",
    "The sound of a door slamming shut echoed through the house.",
    "He adjusted the settings on the computer and continued working.",
    "The smell of lavender filled the garden.",
    "She tied the laces of her running shoes and headed out.",
    "The sound of a train whistle broke the silence of the night.",
    "He picked up the guitar and began to strum a tune.",
    "The sun shone brightly, warming the earth.",
    "She folded the letter and placed it in the drawer.",
    "The sound of a dog’s tail wagging against the floor made her smile.",
    "He adjusted the collar of his shirt and straightened his tie.",
    "The smell of freshly baked cookies filled the house.",
    "She picked up the phone and listened to the voicemail.",
    "The sound of a child’s laughter filled the playground.",
    "He tightened the lid on the jar and placed it in the cupboard.",
    "The wind carried the sound of distant music.",
    "She opened the book and began to read.",
    "The sound of a car engine revving broke the silence.",
    "The magic mirror reflected distant worlds.",
    "Windchimes sang songs to passing breezes.",
    "The haunted mansion creaked at midnight.",
    "Jellyfish glowed in the deep ocean.",
    "The secret garden bloomed year-round.",
    "Ancient scrolls revealed forgotten languages.",
    "The blacksmith forged legendary swords.",
    "Pegasus soared above cotton clouds.",
    "The lighthouse guided lost ships home.",
    "Crystal caves sparkled with rainbow light.",
    "The phoenix rose from golden ashes.",
    "Bamboo forests whispered eastern secrets.",
    "The mechanical bird sang digital melodies.",
    "Merlin's beard grew longer each century.",
    "The quantum computer solved impossible riddles.",
    "Dragons hoarded chocolate instead of gold.",
    "The enchanted forest never slept.",
    "Circus acrobats defied gravity daily.",
    "The paper airplane flew to Paris.",
    "Northern lights danced across arctic skies.",
    "The talking tree shared wisdom freely.",
    "Shooting stars granted midnight wishes.",
    "The underground city thrived in darkness.",
    "Moonflowers bloomed in silver light.",
    "The royal chef seasoned dreams.",
    "Atlantis rose from turbulent waters.",
    "The steampunk airship crossed dimensions.",
    "Unicorns left rainbow hoofprints.",
    "The time traveler collected memories.",
    "Desert nomads followed star maps.",
    "The ghost pianist played at dawn.",
    "Mountain giants carved new valleys.",
    "The dream catcher wove starlight.",
    "Pirates traded in precious stories.",
    "The cosmic turtle carried worlds.",
    "Dimensional portals opened randomly.",
    "The crystal ball predicted nonsense.",
    "Fairy dust sparkled in morning dew.",
    "The clockwork sun never set.",
    "Living statues danced at twilight.",
    "The brass compass pointed to adventure.",
    "Clouds shaped themselves into creatures.",
    "The digital forest grew binary trees.",
    "Mermaids collected human artifacts.",
    "The quantum cat existed everywhere.",
    "Space whales sang gravitational songs.",
    "The pocket universe expanded daily.",
    "The old clock on the wall ticked relentlessly.",
    "Sunflowers stretched toward the azure sky.",
    "She collected vintage teacups from around the world.",
    "The rusty bicycle leaned against the garden fence.",
    "Dragons soared through purple clouds at twilight.",
    "My grandmother's recipe box held forgotten memories.",
    "The library books whispered ancient secrets.",
    "Raindrops performed a symphony on the tin roof.",
    "The cat chased moonbeams across the wooden floor.",
    "Fresh bread scented the entire neighborhood.",
    "Children built sandcastles by the emerald sea.",
    "The painter mixed colors with practiced precision.",
    "Autumn leaves danced in the crisp morning breeze.",
    "The telescope revealed distant galaxies.",
    "Steam rose from the coffee cup in spirals.",
    "The old violin played melancholic tunes.",
    "Butterflies gathered nectar from wild roses.",
    "The mountain path wound through dense fog.",
    "Seashells sparkled in the morning light.",
    "The robot learned to write poetry.",
    "Fireflies illuminated the summer evening.",
    "The ancient map crumbled at the edges.",
    "Snowflakes fell silently in the forest.",
    "The spell book contained forbidden knowledge.",
    "Pirates searched for buried treasure.",
    "The carousel spun with magical music.",
    "Stars winked at the midnight travelers.",
    "The chef created culinary masterpieces.",
    "Ocean waves crashed against rocky cliffs.",
    "The time machine sparked with energy.",
    "Dinosaur fossils lay hidden in stone.",
    "The circus tent glowed with colored lights.",
    "Mermaids sang haunting melodies.",
    "The train whistle echoed through valleys.",
    "Lightning split the stormy sky.",
    "The garden gnome guarded precious flowers.",
    "Crystal chandeliers sparkled overhead.",
    "The fortune teller shuffled worn cards.",
    "Wolves howled at the harvest moon.",
    "The grandfather clock struck midnight.",
    "Fairies danced in mushroom circles.",
    "The astronaut floated through space.",
    "Rainbow bubbles floated on the breeze.",
    "The wizard's staff glowed with power.",
    "Desert sand shifted into new dunes.",
    "The ice cream truck played cheerful tunes.",
    "Knights jousted on the tournament field.",
    "The origami crane took flight.",
    "Chocolate chip cookies baked golden brown.",
    "The submarine explored ocean depths."
]

const WORDBANKS = {
    letters,
    words,
    sentences
}

export { WORDBANKS }