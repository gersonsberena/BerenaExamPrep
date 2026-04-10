/**
 * Berena Exam Prep — App Configuration
 *
 * Edit this file to:
 *   - Add or change exams and their topics
 *   - Update spelling word list
 *   - Change loading messages
 *   - Adjust FRQ instructions or prompt hints per exam
 *
 * DO NOT edit index.html for content changes — only edit this file.
 */
window.BERENA_CONFIG = {

  loadingMessages: [
    "Cooking up some brain-boosting questions just for YOU 🧠✨...",
    "Sneaking in a few trick questions… don't fall for it 😏...",
    "Double-checking to make sure this isn't too easy for you 😄...",
    "Almost ready… get your thinking cap on 🎓🔥!"
  ],

  spelling: {
    recentWordsKey: "spelling_used_words",
    trackCount: 80,
    // ── ADD / REMOVE WORDS HERE ───────────────────────────────────────────────
    wordList: [
      "away","rock","paper","theme","charm","flute","jet","some","more","many",
      "other","drop","wig","off","red","she","floor","cook","trick","can","tell",
      "got","face","hand","leg","nap","far","end","ball","see","just","cup",
      "went","lid","left","pants","coat","steep","last","stopped","spin","glad",
      "play","bike","drum","dock","under","ace","tact","wasp","spoil","cloudy",
      "duty","clear","clever","fasting","treat","report","foster","dashing",
      "lifetime","prove","landmark","peach","notebook","hare","scorn","point",
      "simple","flaming","stable","slipper","spare","desktop","running","camping",
      "mice","cloth","wrap","join","hour","pair","catch","seven","quick","fruit",
      "city","edge","two","itself","handle","skirt","funny","brown","party","very",
      "after","smudge","otherwise","terror","totally","garbage","potatoes",
      "whiplash","control","recess","student","invest","polling","underneath",
      "dire","disobey","bonfire","nitpick","scheme","circus","product","contents",
      "superstar","loophole","manual","clutter","costume","understand","caption",
      "family","honest","camera","without","between","useful","house","thousand",
      "happen","every","barefoot","summer","know","bridge","playground","jeans",
      "paint","might","farewell","contract","soul","subject","young","anteater",
      "teaspoon","banana","dishes","supplies","pouring","balance","frown","partly",
      "beginning","lantern","knitting","temper","forward","vacation","merely",
      "burst","strange","skateboard","portable","furnish","hungry","poem","twine",
      "passage","riddle","rather","estate","porch","lotion","umbrella","silver",
      "sign","timidly","nonsense","untidy","smirk","observe","mansion","curved",
      "married","destiny","trance","laundry","leaky","chamber","monkeys","elderly",
      "available","interact","flicker","studio","liquid","lodging","sturdy",
      "onion","nifty","deadline","chatter","arcade","janitor","country","gallant",
      "bakery","pottery","flexible","pounce","wonderful","promote","mountain",
      "feast","shrill","square","massive","whistling","mayor","belief","bronze",
      "voyage","gusto","marlin","upshot","barter","hefty","glimmer","jackpot",
      "warning","across","against","answer","appear","begin","better","birds",
      "black","blue","boat","body","book","box","boy","bring","brought","build",
      "built","busy","certain","chance","children","class","common","complete",
      "contain","correct","course","cover","cross","dark","decide","deep",
      "direction","distance","divide","doctor","does","dollar","done","draw",
      "dress","drive","early","easy","either","else","enjoy","enough","visit",
      "blink","campus","power","indigo","zipper","along","inhale","solid",
      "timber","dentist","trendy","daydream","protect","heavy","paddle","gather",
      "force","carrot","tantrum","lobster","eleven","comb","haunt","window",
      "parlor","seaweed","danger","uncle","growl","talent","middle","together",
      "hedge","value","circle","judge","raisin","famous","dodge","spaceship",
      "island","patio","watermelon","valley","coach","tulip","burden","activity",
      "trumpet","salsa","abandon","groundhog","peanut","trivia","goblet","await",
      "blouse","stampede","puffin","doubt","minnow","private","melody","rescue",
      "ballad","multiple","toddler","guess","iceberg","daughter","lettuce",
      "dandelion","apologize","freeze","bucket","prefix","retire","award","bumpy",
      "lesson","glitter","actress","urban","pluck","eggplant","barge","comma",
      "honor","member","cursive","foray","empower","mortal","owner","nineteen",
      "arrow","detective","publish","infant","flung","dictate","payment",
      "composer","divine","confess","insight","fuel","another","shrimp","predict",
      "theater","chimney","scorpion","motion","property","lumberjack","million",
      "gradual","ledge","possible","hollow","knock","piracy","alpha","Tuesday"
    ]
  },

  questionVariety: {
    recentSeedsKeyPrefix: "recent_q_",
    maxSeedsPerExam: 30,
    seedsIncludedInPrompt: 10
  },

  exams: {

    "AP Precalculus": {
      label: "AP",
      topics: [
        "Polynomial and Rational Functions",
        "Trigonometric Functions",
        "Exponential and Logarithmic Functions",
        "Functions: Domain, Range & Transformations",
        "Rates of Change and Modeling",
        "Sinusoidal Functions & Modeling",
        "Inverse Functions",
        "Polar Coordinates & Complex Numbers",
        "Matrices and Systems",
        "Sequences and Series"
      ],
      promptHints: [
        "Reflect the 2023-2024 curriculum focus on functions, modeling, and rates of change."
      ],
      frqInstructions: `Each AP Precalculus FRQ MUST follow the official College Board format with labeled parts and rubric-style scoring.

QUESTION field required structure:
Start with a clear function definition or real-world context (1-2 sentences). For modeling or table-based questions, provide specific numerical data values.

(a) (X points) [Specific mathematical task]
(b) (X points) [Specific mathematical task]
(c) (X points) [Specific mathematical task]
(d) (X points) [Additional mathematical task — include if problem complexity warrants it]

ANSWER field required structure — write as an AP-style RUBRIC SCORING GUIDE:
SCORING GUIDE (Total: [X] points)

(a) (X points):
• (1 point): [Method/setup criterion]
• (1 point): [Final answer criterion] ACCEPT: [specific value]
Note: Award full credit for correct answer without shown work for 1-point parts.

(b)-(d): [Same pattern — criterion then ACCEPT line]

Note: Apply consequential error policy — award method credit if setup is correct despite arithmetic error.

EXPLANATION field: Identify the AP Precalculus Units and Mathematical Practices assessed.`
    },

    "AP Biology": {
      label: "AP",
      topics: [
        "Unit 1: Chemistry of Life (Water Properties, Carbon Chemistry, Macromolecules, Proteins)",
        "Unit 2: Cells (Cell Structure & Organelles, Membrane Transport, Cell Size & Surface Area)",
        "Unit 3: Cellular Energetics (Enzymes & Inhibition, Photosynthesis, Cellular Respiration & Fermentation)",
        "Unit 4: Cell Communication & Cell Cycle (Signal Transduction, Feedback Mechanisms, Mitosis & Regulation)",
        "Unit 5: Heredity (Meiosis & Genetic Diversity, Mendelian Genetics, Non-Mendelian Genetics)",
        "Unit 6: Gene Expression & Regulation (DNA Replication, Transcription & RNA Processing, Translation, Mutations, Gene Regulation, Biotechnology)",
        "Unit 7: Natural Selection (Evolution Mechanisms, Population Genetics, Hardy-Weinberg Equilibrium, Phylogeny & Speciation, Origins of Life)",
        "Unit 8: Ecology (Behavioral & Physiological Responses, Energy Flow & Biogeochemical Cycles, Population & Community Ecology, Biodiversity, Disruptions)"
      ],
      promptHints: [
        "Include stimulus material (data tables, graphs, experimental scenarios) where appropriate."
      ],
      frqInstructions: `Each AP Biology FRQ MUST follow the official College Board format with multi-part structure and rubric-style scoring.

QUESTION field required structure:
Begin with a 2-3 sentence experimental or biological scenario that includes specific quantitative data.

For LONG FRQ (9 points total):
Part A (1 point): [Describe / Identify / Explain task]
Part B (3 points): i. [Task] ii. [Task] iii. [Justify/Explain task]
Part C (3 points): i. [Data analysis] ii. [Comparison] iii. [Calculation]
Part D (2 points): i. Predict [what happens if X changes]. ii. Justify using biological reasoning.

For SHORT FRQ (4 points total):
Part A-D (1 point each): [One brief task per part]

Generate a mix of long (9-pt) and short (4-pt) types.

ANSWER field — write as AP-style RUBRIC SCORING GUIDE with ACCEPT criteria for each part.

EXPLANATION field: State AP Biology Units and Science Practices assessed (e.g., Unit 3, SP 4.B).`
    },

    "AICE International History": {
      label: "AICE",
      display: "International History",
      topics: [
        "Empire & World Powers: Economic/Political Motives for New Imperialism, 1870-1900",
        "Empire & World Powers: Scramble for Africa and Berlin Conference (1884-85)",
        "Empire & World Powers: Imperial Tensions (Boxer Rebellion, Anglo-German Rivalry over S. Africa)",
        "Empire & World Powers: Japan as World Power (Sino-Japanese 1894-95, Russo-Japanese 1905, Anglo-Japanese Alliance)",
        "Empire & World Powers: USA as World Power (Spanish-American War 1898, WWI Entry)",
        "League 1920s: Peace Settlements 1919-20 (Versailles, Trianon, Neuilly, Saint Germain, Sèvres, Reparations)",
        "League 1920s: International Tensions 1920-23 (Ruhr Crisis, Corfu Incident, Hyperinflation)",
        "League 1920s: Improved Relations 1924-29 (Dawes Plan, Locarno Treaties, Kellogg-Briand, Young Plan)",
        "League 1920s: League Aims, Structure, Agency Successes, and Structural Weaknesses",
        "League 1930s: Rise of Extremism and Impact on International Relations",
        "League 1930s: League Failures in the 1930s (Manchuria 1931, Abyssinia 1935-36)",
        "League 1930s: Appeasement by Britain and France (Rhineland, Anschluss, Munich Crisis 1938)",
        "League 1930s: Outbreak of War 1939 (Nazi-Soviet Pact, Invasion of Poland)",
        "China & Japan: Warlord Era 1916-27 (Yuan Shih-kai, May 4th Movement, Kuomintang, Sun Yat-sen, Northern Expedition)",
        "China & Japan: Chiang Kai-shek vs Communists 1927-36 (Shanghai Massacre, Long March, Xi'an Incident)",
        "China & Japan: Rise of CCP and Mao Zedong 1936-45 (Yan'an Soviet, War with Japan, Rectification Campaign)",
        "China & Japan: Japan's Military Dictatorship in the 1930s and Road to WWII"
      ],
      promptHints: [
        "AICE exams are Cambridge-style with British academic conventions and evaluative thinking.",
        "CRITICAL: AICE International History covers Cambridge 9489 (1870-1945). Questions must relate to one of four topics: (1) Empire and World Powers 1870-1919, (2) League of Nations in the 1920s, (3) League of Nations in the 1930s, (4) China and Japan 1912-45. FRQ uses Cambridge essay stems: 'Why did...', 'How far/successful...', 'To what extent...', 'Account for...'. Answers should evaluate causes and relative importance of factors."
      ],
      frqInstructions: `Each AICE International History FRQ must follow the Cambridge AS Level essay format.

QUESTION field — use Cambridge-style essay question stems:
- "Why did [X] happen?" (causation)
- "How far/successful was [Y]?" (evaluation)
- "To what extent did [Z] cause/change [W]?" (evaluation)
- "Account for [event]" (explanation of causes/factors)

ANSWER field — write as a structured Cambridge essay guide:
ESSAY GUIDE (Cambridge AS Level Standard)
[Introduction]: State a clear thesis directly addressing the question.
[Factor 1]: Key cause/factor — explain and cite specific evidence.
[Factor 2]: Second key factor — explain its role and cite evidence.
[Factor 3/Counterargument]: Third factor or opposing view.
[Evaluative conclusion]: Weigh relative importance, identify most significant factor.
Key factual points for a strong answer: [3-4 specific facts]

EXPLANATION field: Identify Cambridge historical concepts assessed (cause/consequence, change/continuity, significance).`
    },

    "AICE Psychology": {
      label: "AICE",
      topics: [
        "Core Study: Dement & Kleitman (1957) — REM Sleep & Dreaming",
        "Core Study: Hassett et al. (2008) — Sex Differences in Toy Preferences",
        "Core Study: Hölzel et al. (2011) — Mindfulness & Stress Reduction (MRI)",
        "Core Study: Andrade (2010) — Doodling & Memory Retention",
        "Core Study: Baron-Cohen et al. (1997) — Theory of Mind & Autism (Faux Pas Test)",
        "Core Study: Pozzulo et al. (2010) — Children as Eyewitnesses",
        "Core Study: Bandura et al. (1961) — Social Learning & Aggression (Bobo Doll)",
        "Core Study: Fagen et al. (2002) — Operant Conditioning in Elephants",
        "Core Study: Saavedra & Silverman (2002) — Treating Cockroach Phobia (CBT)",
        "Core Study: Milgram (1963) — Obedience to Authority",
        "Core Study: Perry et al. (2012) — Replication of Milgram's Obedience Study",
        "Core Study: Piliavin et al. (1969) — Bystander Effect (Subway Samaritan)",
        "Research Methods: Experiments (IV, DV, controls, demand characteristics)",
        "Research Methods: Self-Reports (questionnaires, interviews, social desirability bias)",
        "Research Methods: Observations & Case Studies",
        "Research Methods: Correlations & Longitudinal Studies",
        "Research Methods: Sampling, Validity, Reliability & Ethics",
        "Research Methods: Data Analysis (descriptive & inferential statistics)",
        "Issues & Debates AS: Nature vs. Nurture",
        "Issues & Debates AS: Ethnocentrism & Cultural Bias in Research",
        "Issues & Debates AS: Ecological Validity & Generalizability",
        "Issues & Debates AS: Usefulness of Psychological Research",
        "Issues & Debates AS: Ethics in Psychological Research",
        "A Level Clinical Psychology: Schizophrenia, Depression & Phobias (DSM/ICD)",
        "A Level Consumer Psychology: Advertising, Persuasion & Decision-Making",
        "A Level Health Psychology: Health Behaviours, Stress Models & Interventions",
        "A Level Organisational Psychology: Motivation, Leadership & Workplace Stress",
        "Issues & Debates A Level: Cultural Differences in Psychology",
        "Issues & Debates A Level: Reductionism vs. Holism",
        "Issues & Debates A Level: Determinism vs. Free Will",
        "Issues & Debates A Level: Idiographic vs. Nomothetic Approaches"
      ],
      promptHints: [
        "AICE exams are Cambridge-style with British academic conventions and evaluative thinking.",
        "CRITICAL: Questions MUST reference the Cambridge 9990 core studies by author name and year (e.g., Milgram 1963, Bandura et al. 1961). Align strictly with the Cambridge AS & A Level Psychology 9990 syllabus. Do NOT invent studies."
      ],
      frqInstructions: "Each question MUST include: question, answer (complete model answer), explanation, topic\nRules: complete precise answers, step-by-step rubric-style explanation."
    },

    "SAT": {
      label: "SAT",
      display: "SAT (Math + Reading)",
      topics: [
        "Reading: Informational & Literary Texts",
        "Reading: Evidence-Based Questions",
        "Reading: Vocabulary in Context",
        "Writing: Grammar & Usage",
        "Writing: Sentence Structure & Punctuation",
        "Writing: Rhetoric & Purpose",
        "Math: Algebra & Linear Equations",
        "Math: Advanced Algebra & Functions",
        "Math: Problem Solving & Data Analysis",
        "Math: Geometry & Trigonometry",
        "Math: Calculator vs No-Calculator Strategies"
      ],
      promptHints: [
        "SAT Math has calculator/no-calculator sections. SAT Reading/Writing questions are passage-based."
      ],
      frqInstructions: "Each question MUST include: question, answer (complete model answer), explanation, topic\nRules: complete precise answers, step-by-step rubric-style explanation."
    },

    "3rd Grade Math": {
      label: "GRADE 3",
      topics: [
        "Addition & Subtraction (up to 1000)",
        "Multiplication Concepts & Facts (0–10)",
        "Division Concepts & Fact Families",
        "Fractions: Halves, Thirds & Fourths",
        "Place Value & Rounding",
        "Telling Time & Elapsed Time",
        "Money: Counting & Making Change",
        "Measurement: Length, Weight & Volume",
        "Perimeter & Area of Shapes",
        "Graphs: Bar Graphs & Pictographs",
        "Patterns & Number Sequences",
        "Word Problems & Problem Solving"
      ],
      promptHints: [
        "Use simple vocabulary and concepts appropriate for 8-10 year olds. Keep questions encouraging and age-appropriate."
      ],
      frqInstructions: "Each question MUST include: question, answer (complete model answer), explanation, topic\nRules: complete precise answers, step-by-step rubric-style explanation."
    },

    "3rd Grade Science": {
      label: "GRADE 3",
      topics: [
        "Living vs. Non-Living Things",
        "Plants: Parts, Needs & Life Cycles",
        "Animals: Habitats & Adaptations",
        "Food Chains & Ecosystems",
        "Weather & Seasons",
        "States of Matter (Solid, Liquid, Gas)",
        "Forces & Motion (Push, Pull, Magnets)",
        "Light & Sound",
        "Earth's Resources (Soil, Water, Air)",
        "Rocks, Minerals & the Rock Cycle",
        "The Solar System & Earth's Moon",
        "Simple Machines & Engineering"
      ],
      promptHints: [
        "Use simple vocabulary and concepts appropriate for 8-10 year olds. Keep questions encouraging and age-appropriate."
      ],
      frqInstructions: "Each question MUST include: question, answer (complete model answer), explanation, topic\nRules: complete precise answers, step-by-step rubric-style explanation."
    },

    "3rd Grade Vocabulary": {
      label: "GRADE 3",
      topics: [
        "Context Clues & Word Meaning",
        "Synonyms & Antonyms",
        "Prefixes & Suffixes (un-, re-, -ful, -less)",
        "Compound Words",
        "Multiple-Meaning Words (Homonyms)",
        "Figurative Language (Similes, Metaphors)",
        "Content Words: Science & Social Studies",
        "Transition Words & Signal Words",
        "Shades of Meaning (big → huge → enormous)",
        "Academic Vocabulary (describe, explain, compare)"
      ],
      promptHints: [
        "Use simple vocabulary and concepts appropriate for 8-10 year olds. Keep questions encouraging and age-appropriate."
      ],
      frqInstructions: "Each question MUST include: question, answer (complete model answer), explanation, topic\nRules: complete precise answers, step-by-step rubric-style explanation."
    },

    "3rd Grade Spelling": {
      label: "GRADE 3",
      noTopics: true,
      noQuestionType: true,
      // Word list is embedded in the top-level "spelling.wordList" above.
      // The spellingPromptInstructions below is sent to Claude for sentence generation.
      spellingPromptInstructions: `You are an expert 3rd grade spelling teacher.

For each word in the provided list, write ONE fill-in-the-blank sentence that:
- Is appropriate for 3rd graders (ages 8-10)
- Gives clear context clues so the student understands the word's meaning
- Replaces the word with ___
- Also includes a short spelling explanation (e.g., letter breakdown or pattern tip)

Return ONLY valid JSON — no markdown, no extra text:
{
  "questions": [
    {
      "word": "away",
      "question": "The bird flew ___ from the nest when it heard a loud noise.",
      "explanation": "AWAY: A-W-A-Y. 'Away' means to move to a different place."
    }
  ]
}`
    },

    "3rd Grade Reading Comprehension": {
      label: "GRADE 3",
      topics: [
        "Main Idea & Key Details",
        "Story Elements (Character, Setting, Plot)",
        "Sequencing Events",
        "Making Inferences",
        "Author's Purpose (Inform, Entertain, Persuade)",
        "Compare & Contrast",
        "Cause & Effect",
        "Fact vs. Opinion",
        "Text Features (Headings, Captions, Diagrams)",
        "Summarizing & Retelling"
      ],
      promptHints: [
        "Use simple vocabulary and concepts appropriate for 8-10 year olds. Keep questions encouraging and age-appropriate.",
        "IMPORTANT: Each question MUST start with a short reading passage (3-6 age-appropriate sentences), followed by a comprehension question about it. Include the full passage in the question field before the question."
      ],
      frqInstructions: "Each question MUST include: question, answer (complete model answer), explanation, topic\nRules: complete precise answers, step-by-step rubric-style explanation."
    },

    "AMC8 (American Math Competition 8)": {
      label: "AMC8",
      topics: [
        "AMC8"
      ],
      frqInstructions: "Each question MUST include: question, answer (complete model answer), explanation, topic\nRules: complete precise answers, step-by-step rubric-style explanation."
    }

  } // end exams

}; // end BERENA_CONFIG
