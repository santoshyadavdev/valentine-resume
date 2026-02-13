import type { Answers } from '../data/questions';

// Profile data structure for sharing
export interface ProfileData {
  name: string;
  answers: Answers;
  valentineTitle: string;
  personality: string[];
  loveLanguage: string;
  compatibilityTraits: string[];
}

// Mapping for generating Valentine titles based on answers
const valentineTitles: Record<string, string[]> = {
  adventure: ['Adventurous Soul', 'Thrill Seeker', 'Explorer Heart'],
  cozy: ['Cozy Companion', 'Comfort Queen', 'Homebody Sweetheart'],
  social: ['Social Butterfly', 'Party Heart', 'Life of the Love Fest'],
  explore: ['Urban Romantic', 'City Explorer', 'Street Wanderer'],
  relax: ['Zen Valentine', 'Self-Care Sweetheart', 'Peaceful Heart'],
  learn: ['Curious Mind', 'Knowledge Lover', 'Bookish Heart'],
};

const personalityTraits: Record<string, string> = {
  // Hobbies
  reading: 'Thoughtful & Imaginative',
  music: 'Passionate & Expressive',
  cooking: 'Nurturing & Creative',
  gaming: 'Playful & Strategic',
  fitness: 'Energetic & Determined',
  art: 'Creative & Sensitive',
  // Weekend preferences
  adventure: 'Bold & Adventurous',
  cozy: 'Warm & Comfortable',
  social: 'Outgoing & Fun-loving',
  explore: 'Curious & Spontaneous',
  relax: 'Calm & Self-aware',
  learn: 'Intellectual & Growth-oriented',
  // Travel
  beach: 'Relaxed & Romantic',
  europe: 'Cultured & Sophisticated',
  mountains: 'Peaceful & Nature-loving',
  roadtrip: 'Free-spirited & Flexible',
  cruise: 'Luxurious & Social',
  staycation: 'Content & Practical',
};

const loveLanguageLabels: Record<string, string> = {
  words: 'Words of Affirmation 💬',
  time: 'Quality Time ⏰',
  gifts: 'Receiving Gifts 🎁',
  acts: 'Acts of Service 🤝',
  touch: 'Physical Touch 🤗',
};

const compatibilityMappings: Record<string, string[]> = {
  // Date styles
  dinner: ['Sophisticated', 'Appreciates Romance'],
  movie: ['Relaxed', 'Enjoys Shared Experiences'],
  outdoors: ['Romantic', 'Nature Lover'],
  active: ['Energetic', 'Fun-loving'],
  concert: ['Culture Enthusiast', 'Social'],
  spontaneous: ['Adventurous', 'Open-minded'],
  // Relationship values
  trust: ['Loyal', 'Honest'],
  humor: ['Joyful', 'Light-hearted'],
  support: ['Caring', 'Empathetic'],
  growth: ['Ambitious', 'Forward-thinking'],
  comfort: ['Stable', 'Reliable'],
  // Love expression
  compliments: ['Affirming', 'Encouraging'],
  surprise: ['Thoughtful', 'Creative'],
  listen: ['Attentive', 'Understanding'],
  help: ['Supportive', 'Action-oriented'],
  cook: ['Nurturing', 'Caring'],
  presence: ['Devoted', 'Reliable'],
};

/**
 * Generate a Valentine title based on answers
 */
function generateValentineTitle(answers: Answers): string {
  const weekend = answers.weekend || '';
  const titles = valentineTitles[weekend] || ['Lovely Valentine'];
  return titles[Math.floor(Math.random() * titles.length)];
}

/**
 * Generate personality traits from answers
 */
function generatePersonality(answers: Answers): string[] {
  const traits: string[] = [];
  
  if (answers.hobbies && personalityTraits[answers.hobbies]) {
    traits.push(personalityTraits[answers.hobbies]);
  }
  if (answers.weekend && personalityTraits[answers.weekend]) {
    traits.push(personalityTraits[answers.weekend]);
  }
  if (answers.travel && personalityTraits[answers.travel]) {
    traits.push(personalityTraits[answers.travel]);
  }
  
  return traits.length > 0 ? traits : ['Unique & Wonderful'];
}

/**
 * Get love language label
 */
function getLoveLanguage(answers: Answers): string {
  const lang = answers['love-language'] || '';
  return loveLanguageLabels[lang] || 'All the Love Languages 💕';
}

/**
 * Generate compatibility traits from answers
 */
function generateCompatibilityTraits(answers: Answers): string[] {
  const traits: string[] = [];
  
  const keys = ['date-style', 'relationship-value', 'love-expression'];
  keys.forEach(key => {
    const value = answers[key];
    if (value && compatibilityMappings[value]) {
      traits.push(...compatibilityMappings[value]);
    }
  });
  
  // Remove duplicates and limit to 6 traits
  return [...new Set(traits)].slice(0, 6);
}

/**
 * Build complete profile data from answers
 */
export function buildProfileData(answers: Answers): ProfileData {
  return {
    name: answers.name || 'Valentine',
    answers,
    valentineTitle: generateValentineTitle(answers),
    personality: generatePersonality(answers),
    loveLanguage: getLoveLanguage(answers),
    compatibilityTraits: generateCompatibilityTraits(answers),
  };
}

/**
 * Encode profile data to URL-safe string
 * Uses Buffer for Node.js compatibility
 */
export function encodeProfile(answers: Answers): string {
  try {
    // Create a compact version of answers for URL encoding
    const compactAnswers = {
      n: answers.name || '',
      h: answers.hobbies || '',
      w: answers.weekend || '',
      t: answers.travel || '',
      l: answers['love-language'] || '',
      d: answers['date-style'] || '',
      r: answers['relationship-value'] || '',
      e: answers['love-expression'] || '',
    };
    
    // Convert to JSON and then base64
    const jsonStr = JSON.stringify(compactAnswers);
    
    // Use Buffer for Node.js, fallback to btoa for browser
    let base64: string;
    if (typeof Buffer !== 'undefined') {
      base64 = Buffer.from(jsonStr, 'utf-8').toString('base64');
    } else {
      base64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
    }
    
    // Make URL-safe by replacing special characters
    return base64
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  } catch (error) {
    console.error('Error encoding profile:', error);
    return '';
  }
}

/**
 * Decode profile data from URL parameter
 * Uses Buffer for Node.js compatibility
 */
export function decodeProfile(encodedData: string): Answers | null {
  try {
    if (!encodedData || typeof encodedData !== 'string') {
      return null;
    }
    
    // Restore base64 padding and special characters
    let base64 = encodedData
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    
    // Add padding if needed
    const padding = base64.length % 4;
    if (padding) {
      base64 += '='.repeat(4 - padding);
    }
    
    // Use Buffer for Node.js, fallback to atob for browser
    let jsonStr: string;
    if (typeof Buffer !== 'undefined') {
      jsonStr = Buffer.from(base64, 'base64').toString('utf-8');
    } else {
      jsonStr = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
    }
    
    const compactAnswers = JSON.parse(jsonStr);
    
    // Validate the structure
    if (typeof compactAnswers !== 'object') {
      return null;
    }
    
    // Expand back to full answers format
    const answers: Answers = {
      name: compactAnswers.n || '',
      hobbies: compactAnswers.h || '',
      weekend: compactAnswers.w || '',
      travel: compactAnswers.t || '',
      'love-language': compactAnswers.l || '',
      'date-style': compactAnswers.d || '',
      'relationship-value': compactAnswers.r || '',
      'love-expression': compactAnswers.e || '',
    };
    
    // Basic validation - at least name should exist
    if (!answers.name) {
      return null;
    }
    
    return answers;
  } catch (error) {
    console.error('Error decoding profile:', error);
    return null;
  }
}

/**
 * Validate if encoded data is valid
 */
export function isValidProfileData(encodedData: string): boolean {
  const decoded = decodeProfile(encodedData);
  return decoded !== null && !!decoded.name;
}

/**
 * Generate shareable URL
 */
export function generateProfileUrl(answers: Answers, baseUrl: string = ''): string {
  const encoded = encodeProfile(answers);
  if (!encoded) return '';
  return `${baseUrl}/profile/${encoded}`;
}
