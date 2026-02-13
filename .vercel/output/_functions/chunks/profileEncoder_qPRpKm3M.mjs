import { e as createComponent, g as addAttribute, n as renderSlot, o as renderHead, r as renderTemplate, h as createAstro } from './astro/server_Bww52DyY.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Valentine's Resume | Share Your Love Story",
    description = "Create a beautiful Valentine's Day resume to share your love story and celebrate your relationship in a unique and romantic way.",
    ogImage = "/og-valentine.svg"
  } = Astro2.props;
  const canonicalUrl = Astro2.url.href;
  const ogImageUrl = new URL(ogImage, Astro2.site || Astro2.url.origin).href;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Valentine Theme Meta --><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#f43f5e"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImageUrl, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:type" content="website"><meta property="og:site_name" content="Valentine's Resume"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImageUrl, "content")}><!-- Additional head content -->${renderSlot($$result, $$slots["head"])}<!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-valentine-warm-white font-body text-gray-800 antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/santosh/valentine-resume/src/layouts/Layout.astro", void 0);

const questions = [
  {
    id: "name",
    text: "What's your name, lovely?",
    options: [],
    category: "personal",
    type: "text"
  },
  {
    id: "hobbies",
    text: "What hobbies make your heart sing?",
    options: [
      { value: "reading", label: "Reading & Writing", emoji: "📚" },
      { value: "music", label: "Music & Dancing", emoji: "🎵" },
      { value: "cooking", label: "Cooking & Baking", emoji: "🍳" },
      { value: "gaming", label: "Gaming & Tech", emoji: "🎮" },
      { value: "fitness", label: "Fitness & Sports", emoji: "🏃" },
      { value: "art", label: "Art & Creativity", emoji: "🎨" }
    ],
    category: "hobbies",
    type: "mcq"
  },
  {
    id: "weekend",
    text: "Your ideal weekend looks like...",
    options: [
      { value: "adventure", label: "Outdoor Adventure", emoji: "🏕️" },
      { value: "cozy", label: "Cozy Day at Home", emoji: "🏠" },
      { value: "social", label: "Party with Friends", emoji: "🎉" },
      { value: "explore", label: "Exploring the City", emoji: "🌆" },
      { value: "relax", label: "Spa & Self-Care", emoji: "💆" },
      { value: "learn", label: "Learning Something New", emoji: "📖" }
    ],
    category: "activities",
    type: "mcq"
  },
  {
    id: "travel",
    text: "Dream destination for a romantic getaway?",
    options: [
      { value: "beach", label: "Tropical Beach Paradise", emoji: "🏝️" },
      { value: "europe", label: "European Cities", emoji: "🗼" },
      { value: "mountains", label: "Mountain Retreat", emoji: "🏔️" },
      { value: "roadtrip", label: "Scenic Road Trip", emoji: "🚗" },
      { value: "cruise", label: "Luxury Cruise", emoji: "🚢" },
      { value: "staycation", label: "Cozy Staycation", emoji: "🏨" }
    ],
    category: "travel",
    type: "mcq"
  },
  {
    id: "love-language",
    text: "What makes you feel most loved?",
    options: [
      { value: "words", label: "Words of Affirmation", emoji: "💬" },
      { value: "time", label: "Quality Time", emoji: "⏰" },
      { value: "gifts", label: "Thoughtful Gifts", emoji: "🎁" },
      { value: "acts", label: "Acts of Service", emoji: "🤝" },
      { value: "touch", label: "Physical Touch", emoji: "🤗" }
    ],
    category: "love-language",
    type: "mcq"
  },
  {
    id: "date-style",
    text: "Your perfect date night would be...",
    options: [
      { value: "dinner", label: "Fancy Dinner Date", emoji: "🍷" },
      { value: "movie", label: "Movie Night In", emoji: "🎬" },
      { value: "outdoors", label: "Stargazing Picnic", emoji: "🌌" },
      { value: "active", label: "Fun Activity Together", emoji: "🎳" },
      { value: "concert", label: "Concert or Show", emoji: "🎭" },
      { value: "spontaneous", label: "Spontaneous Adventure", emoji: "✨" }
    ],
    category: "romantic",
    type: "mcq"
  },
  {
    id: "relationship-value",
    text: "What do you value most in a relationship?",
    options: [
      { value: "trust", label: "Trust & Honesty", emoji: "🔐" },
      { value: "humor", label: "Laughter & Fun", emoji: "😂" },
      { value: "support", label: "Emotional Support", emoji: "💪" },
      { value: "growth", label: "Growing Together", emoji: "🌱" },
      { value: "adventure", label: "Shared Adventures", emoji: "🗺️" },
      { value: "comfort", label: "Comfort & Security", emoji: "🏡" }
    ],
    category: "romantic",
    type: "mcq"
  },
  {
    id: "love-expression",
    text: "How do you show someone you care?",
    options: [
      { value: "compliments", label: "Giving Compliments", emoji: "💕" },
      { value: "surprise", label: "Planning Surprises", emoji: "🎊" },
      { value: "listen", label: "Being a Good Listener", emoji: "👂" },
      { value: "help", label: "Helping with Tasks", emoji: "🛠️" },
      { value: "cook", label: "Cooking Their Favorite Meal", emoji: "👨‍🍳" },
      { value: "presence", label: "Just Being There", emoji: "💑" }
    ],
    category: "romantic",
    type: "mcq"
  }
];

const valentineTitles = {
  adventure: ["Adventurous Soul", "Thrill Seeker", "Explorer Heart"],
  cozy: ["Cozy Companion", "Comfort Queen", "Homebody Sweetheart"],
  social: ["Social Butterfly", "Party Heart", "Life of the Love Fest"],
  explore: ["Urban Romantic", "City Explorer", "Street Wanderer"],
  relax: ["Zen Valentine", "Self-Care Sweetheart", "Peaceful Heart"],
  learn: ["Curious Mind", "Knowledge Lover", "Bookish Heart"]
};
const personalityTraits = {
  // Hobbies
  reading: "Thoughtful & Imaginative",
  music: "Passionate & Expressive",
  cooking: "Nurturing & Creative",
  gaming: "Playful & Strategic",
  fitness: "Energetic & Determined",
  art: "Creative & Sensitive",
  // Weekend preferences
  adventure: "Bold & Adventurous",
  cozy: "Warm & Comfortable",
  social: "Outgoing & Fun-loving",
  explore: "Curious & Spontaneous",
  relax: "Calm & Self-aware",
  learn: "Intellectual & Growth-oriented",
  // Travel
  beach: "Relaxed & Romantic",
  europe: "Cultured & Sophisticated",
  mountains: "Peaceful & Nature-loving",
  roadtrip: "Free-spirited & Flexible",
  cruise: "Luxurious & Social",
  staycation: "Content & Practical"
};
const loveLanguageLabels = {
  words: "Words of Affirmation 💬",
  time: "Quality Time ⏰",
  gifts: "Receiving Gifts 🎁",
  acts: "Acts of Service 🤝",
  touch: "Physical Touch 🤗"
};
const compatibilityMappings = {
  // Date styles
  dinner: ["Sophisticated", "Appreciates Romance"],
  movie: ["Relaxed", "Enjoys Shared Experiences"],
  outdoors: ["Romantic", "Nature Lover"],
  active: ["Energetic", "Fun-loving"],
  concert: ["Culture Enthusiast", "Social"],
  spontaneous: ["Adventurous", "Open-minded"],
  // Relationship values
  trust: ["Loyal", "Honest"],
  humor: ["Joyful", "Light-hearted"],
  support: ["Caring", "Empathetic"],
  growth: ["Ambitious", "Forward-thinking"],
  comfort: ["Stable", "Reliable"],
  // Love expression
  compliments: ["Affirming", "Encouraging"],
  surprise: ["Thoughtful", "Creative"],
  listen: ["Attentive", "Understanding"],
  help: ["Supportive", "Action-oriented"],
  cook: ["Nurturing", "Caring"],
  presence: ["Devoted", "Reliable"]
};
function generateValentineTitle(answers) {
  const weekend = answers.weekend || "";
  const titles = valentineTitles[weekend] || ["Lovely Valentine"];
  return titles[Math.floor(Math.random() * titles.length)];
}
function generatePersonality(answers) {
  const traits = [];
  if (answers.hobbies && personalityTraits[answers.hobbies]) {
    traits.push(personalityTraits[answers.hobbies]);
  }
  if (answers.weekend && personalityTraits[answers.weekend]) {
    traits.push(personalityTraits[answers.weekend]);
  }
  if (answers.travel && personalityTraits[answers.travel]) {
    traits.push(personalityTraits[answers.travel]);
  }
  return traits.length > 0 ? traits : ["Unique & Wonderful"];
}
function getLoveLanguage(answers) {
  const lang = answers["love-language"] || "";
  return loveLanguageLabels[lang] || "All the Love Languages 💕";
}
function generateCompatibilityTraits(answers) {
  const traits = [];
  const keys = ["date-style", "relationship-value", "love-expression"];
  keys.forEach((key) => {
    const value = answers[key];
    if (value && compatibilityMappings[value]) {
      traits.push(...compatibilityMappings[value]);
    }
  });
  return [...new Set(traits)].slice(0, 6);
}
function buildProfileData(answers) {
  return {
    name: answers.name || "Valentine",
    answers,
    valentineTitle: generateValentineTitle(answers),
    personality: generatePersonality(answers),
    loveLanguage: getLoveLanguage(answers),
    compatibilityTraits: generateCompatibilityTraits(answers)
  };
}
function encodeProfile(answers) {
  try {
    const compactAnswers = {
      n: answers.name || "",
      h: answers.hobbies || "",
      w: answers.weekend || "",
      t: answers.travel || "",
      l: answers["love-language"] || "",
      d: answers["date-style"] || "",
      r: answers["relationship-value"] || "",
      e: answers["love-expression"] || ""
    };
    const jsonStr = JSON.stringify(compactAnswers);
    const base64 = btoa(encodeURIComponent(jsonStr));
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  } catch (error) {
    console.error("Error encoding profile:", error);
    return "";
  }
}
function decodeProfile(encodedData) {
  try {
    if (!encodedData || typeof encodedData !== "string") {
      return null;
    }
    let base64 = encodedData.replace(/-/g, "+").replace(/_/g, "/");
    const padding = base64.length % 4;
    if (padding) {
      base64 += "=".repeat(4 - padding);
    }
    const jsonStr = decodeURIComponent(atob(base64));
    const compactAnswers = JSON.parse(jsonStr);
    if (typeof compactAnswers !== "object") {
      return null;
    }
    const answers = {
      name: compactAnswers.n || "",
      hobbies: compactAnswers.h || "",
      weekend: compactAnswers.w || "",
      travel: compactAnswers.t || "",
      "love-language": compactAnswers.l || "",
      "date-style": compactAnswers.d || "",
      "relationship-value": compactAnswers.r || "",
      "love-expression": compactAnswers.e || ""
    };
    if (!answers.name) {
      return null;
    }
    return answers;
  } catch (error) {
    console.error("Error decoding profile:", error);
    return null;
  }
}

export { $$Layout as $, buildProfileData as b, decodeProfile as d, encodeProfile as e, questions as q };
