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

- Add a blank line after the question context, then list each part (a), (b), (c), (d) on separate lines with blank lines between them. 
Each part should be a specific mathematical task (e.g., "Find the inverse function", "Calculate the average rate of change", "Determine the amplitude and period", 
"Solve for x using logarithmic properties").

(a) (X points) [Specific mathematical task]
(b) (X points) [Specific mathematical task]
(c) (X points) [Specific mathematical task]
(d) (X points) [Additional mathematical task — include if problem complexity warrants it]

- Make it readable and well-spaced

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

Format the question as follows:
- Start with the problem context paragraph
- Add a blank line
- Then list each part (a), (b), (c), (d) on separate lines with blank lines between them
- Make it readable and well-spaced

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
        "Mass & Metric Units: Grams, Kilograms & Real-World Estimation",
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

For each word in the provided list, write ONE fill-in-the-blank sentence and include its definition and part of speech.

Requirements:
- Sentence is appropriate for 3rd graders (ages 8-10)
- Sentence gives clear context clues so the student understands the word's meaning
- Replace the word with ___
- Include the part of speech (e.g., noun, verb, adjective, adverb, etc.)
- Include a short, simple definition a 3rd grader can understand
- Include a short spelling explanation (e.g., letter breakdown or pattern tip)

Return ONLY valid JSON — no markdown, no extra text:
{
  "questions": [
    {
      "word": "away",
      "question": "The bird flew ___ from the nest when it heard a loud noise.",
      "partOfSpeech": "adverb",
      "definition": "to or at a distance from a place or person",
      "explanation": "AWAY: A-W-A-Y. Think of 'away' as 'a' + 'way' — going on a way (path) from here."
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
    },

    // ── RIDDLES ───────────────────────────────────────────────────────────────
    "Riddles: Kids": {
      label: "RIDDLES",
      noTopics: true,
      noQuestionType: true,
      noDifficulty: true,
      frqInstructions: `You are an expert riddle writer for children ages 6–12.

Generate fun, age-appropriate riddles with a single short definitive answer.

Rules:
- Use wordplay, double meanings, or simple logic
- Keep language simple — no adult themes, no scary content
- Each riddle must have ONE clear correct answer
- The explanation should reveal the trick or wordplay in a fun, encouraging way
- Riddles should be varied: some about animals, objects, nature, food, everyday things
- Do NOT repeat similar riddle structures back-to-back

Each question MUST include: question (the riddle), answer (short, exact answer), explanation (reveal the trick), topic

Return ONLY valid JSON — no markdown, no extra text:
{
  "questions": [
    {
      "question": "I have hands but I cannot clap. What am I?",
      "answer": "A clock",
      "explanation": "A clock has 'hands' — the hour and minute hands that point to the time — but they can't actually clap! It's a play on the word 'hands.'",
      "topic": "Riddles: Kids"
    }
  ]
}`
    },

    "Riddles: Adults": {
      label: "RIDDLES",
      noTopics: true,
      noQuestionType: true,
      noDifficulty: true,
      frqInstructions: `You are an expert riddle writer for teens and adults.

Generate clever, witty riddles that require lateral thinking, wordplay, or abstract reasoning.

Rules:
- Riddles should be genuinely challenging — not solvable with a quick guess
- Use misdirection, metaphor, or unexpected logic
- Each riddle must have ONE clear correct answer
- The explanation should fully unpack the reasoning or wordplay
- Vary the style: some lateral thinking, some wordplay, some logic-based, some philosophical
- Avoid riddles that are well-known clichés (e.g. "I speak without a mouth" — too common)

Each question MUST include: question (the riddle), answer (short, exact answer), explanation (full reveal of the reasoning), topic

Return ONLY valid JSON — no markdown, no extra text:
{
  "questions": [
    {
      "question": "The more you take, the more you leave behind. What am I?",
      "answer": "Footsteps",
      "explanation": "Each step you take leaves a footprint behind you, yet the act of taking more steps means you leave even more footprints. The riddle plays on two meanings of 'take' — taking a step and taking an object.",
      "topic": "Riddles: Adults"
    }
  ]
}`
    },

    // ── MATH PUZZLES ─────────────────────────────────────────────────────────
    "Math Puzzles: Kids": {
      label: "MATH PUZZLES",
      noTopics: true,
      noQuestionType: true,
      noDifficulty: true,
      frqInstructions: `You are an expert math puzzle writer for children ages 6–12.

Generate fun, engaging number and logic puzzles with a single short definitive answer.

Rules:
- Use simple arithmetic, patterns, or basic logic (addition, subtraction, multiplication, simple sequences)
- Keep the numbers and concepts appropriate for ages 6–12
- Each puzzle must have ONE clear correct numerical or short-word answer
- The explanation should walk through the solution step by step in a friendly, encouraging tone
- Vary puzzle types: number riddles, "what number am I?", simple sequences, shape counting, pattern completion
- Make them feel like fun games, not school tests

Each question MUST include: question (the puzzle), answer (short exact answer), explanation (step-by-step friendly solution), topic

Return ONLY valid JSON — no markdown, no extra text:
{
  "questions": [
    {
      "question": "I am a number between 10 and 20. If you add my two digits together, you get 7. What number am I?",
      "answer": "16",
      "explanation": "We need a number between 10 and 20 whose digits add up to 7. Let's check: 1+6 = 7 ✓. So the answer is 16! (We can also check 25, but that's not between 10 and 20.)",
      "topic": "Math Puzzles: Kids"
    }
  ]
}`
    },

    "Math Puzzles: Adults": {
      label: "MATH PUZZLES",
      noTopics: true,
      noQuestionType: true,
      noDifficulty: true,
      frqInstructions: `You are an expert math puzzle writer for teens and adults.

Generate challenging number puzzles, logic problems, and mathematical brain teasers with a single definitive answer.

Rules:
- Puzzles should require multi-step reasoning, pattern recognition, or creative mathematical thinking
- May involve sequences, operations, algebra concepts, geometry intuition, or lateral math thinking
- Each puzzle must have ONE clear correct answer (a number, expression, or short phrase)
- The explanation should give a clear, complete step-by-step solution
- Vary types: number sequences, missing operations, "what am I?" number riddles, logic grids described in text, visual pattern rules described in words
- Avoid trivial arithmetic — puzzles should make the solver think

Each question MUST include: question (the puzzle), answer (exact answer), explanation (rigorous step-by-step solution), topic

Return ONLY valid JSON — no markdown, no extra text:
{
  "questions": [
    {
      "question": "A farmer has 17 sheep. All but 9 run away. How many sheep does the farmer have left?",
      "answer": "9",
      "explanation": "The key is the phrase 'all but 9.' This means all the sheep except 9 ran away. So 9 sheep remain. Many people rush to subtract and say 8, but re-reading carefully reveals the answer is simply 9.",
      "topic": "Math Puzzles: Adults"
    }
  ]
}`
    }

  } // end exams

}; // end BERENA_CONFIG