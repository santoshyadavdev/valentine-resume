export interface QuestionOption {
  value: string;
  label: string;
  emoji?: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
  category: 'personal' | 'hobbies' | 'activities' | 'travel' | 'love-language' | 'romantic';
  type: 'mcq' | 'text';
}

export const questions: Question[] = [
  {
    id: 'name',
    text: "What's your name, lovely?",
    options: [],
    category: 'personal',
    type: 'text',
  },
  {
    id: 'hobbies',
    text: 'What hobbies make your heart sing?',
    options: [
      { value: 'reading', label: 'Reading & Writing', emoji: '📚' },
      { value: 'music', label: 'Music & Dancing', emoji: '🎵' },
      { value: 'cooking', label: 'Cooking & Baking', emoji: '🍳' },
      { value: 'gaming', label: 'Gaming & Tech', emoji: '🎮' },
      { value: 'fitness', label: 'Fitness & Sports', emoji: '🏃' },
      { value: 'art', label: 'Art & Creativity', emoji: '🎨' },
    ],
    category: 'hobbies',
    type: 'mcq',
  },
  {
    id: 'weekend',
    text: 'Your ideal weekend looks like...',
    options: [
      { value: 'adventure', label: 'Outdoor Adventure', emoji: '🏕️' },
      { value: 'cozy', label: 'Cozy Day at Home', emoji: '🏠' },
      { value: 'social', label: 'Party with Friends', emoji: '🎉' },
      { value: 'explore', label: 'Exploring the City', emoji: '🌆' },
      { value: 'relax', label: 'Spa & Self-Care', emoji: '💆' },
      { value: 'learn', label: 'Learning Something New', emoji: '📖' },
    ],
    category: 'activities',
    type: 'mcq',
  },
  {
    id: 'travel',
    text: 'Dream destination for a romantic getaway?',
    options: [
      { value: 'beach', label: 'Tropical Beach Paradise', emoji: '🏝️' },
      { value: 'europe', label: 'European Cities', emoji: '🗼' },
      { value: 'mountains', label: 'Mountain Retreat', emoji: '🏔️' },
      { value: 'roadtrip', label: 'Scenic Road Trip', emoji: '🚗' },
      { value: 'cruise', label: 'Luxury Cruise', emoji: '🚢' },
      { value: 'staycation', label: 'Cozy Staycation', emoji: '🏨' },
    ],
    category: 'travel',
    type: 'mcq',
  },
  {
    id: 'love-language',
    text: 'What makes you feel most loved?',
    options: [
      { value: 'words', label: 'Words of Affirmation', emoji: '💬' },
      { value: 'time', label: 'Quality Time', emoji: '⏰' },
      { value: 'gifts', label: 'Thoughtful Gifts', emoji: '🎁' },
      { value: 'acts', label: 'Acts of Service', emoji: '🤝' },
      { value: 'touch', label: 'Physical Touch', emoji: '🤗' },
    ],
    category: 'love-language',
    type: 'mcq',
  },
  {
    id: 'date-style',
    text: 'Your perfect date night would be...',
    options: [
      { value: 'dinner', label: 'Fancy Dinner Date', emoji: '🍷' },
      { value: 'movie', label: 'Movie Night In', emoji: '🎬' },
      { value: 'outdoors', label: 'Stargazing Picnic', emoji: '🌌' },
      { value: 'active', label: 'Fun Activity Together', emoji: '🎳' },
      { value: 'concert', label: 'Concert or Show', emoji: '🎭' },
      { value: 'spontaneous', label: 'Spontaneous Adventure', emoji: '✨' },
    ],
    category: 'romantic',
    type: 'mcq',
  },
  {
    id: 'relationship-value',
    text: 'What do you value most in a relationship?',
    options: [
      { value: 'trust', label: 'Trust & Honesty', emoji: '🔐' },
      { value: 'humor', label: 'Laughter & Fun', emoji: '😂' },
      { value: 'support', label: 'Emotional Support', emoji: '💪' },
      { value: 'growth', label: 'Growing Together', emoji: '🌱' },
      { value: 'adventure', label: 'Shared Adventures', emoji: '🗺️' },
      { value: 'comfort', label: 'Comfort & Security', emoji: '🏡' },
    ],
    category: 'romantic',
    type: 'mcq',
  },
  {
    id: 'love-expression',
    text: 'How do you show someone you care?',
    options: [
      { value: 'compliments', label: 'Giving Compliments', emoji: '💕' },
      { value: 'surprise', label: 'Planning Surprises', emoji: '🎊' },
      { value: 'listen', label: 'Being a Good Listener', emoji: '👂' },
      { value: 'help', label: 'Helping with Tasks', emoji: '🛠️' },
      { value: 'cook', label: 'Cooking Their Favorite Meal', emoji: '👨‍🍳' },
      { value: 'presence', label: 'Just Being There', emoji: '💑' },
    ],
    category: 'romantic',
    type: 'mcq',
  },
];

export type Answers = Record<string, string>;
