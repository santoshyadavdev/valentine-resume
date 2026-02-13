/* empty css                                    */
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro, k as defineScriptVars, l as renderComponent, g as addAttribute } from '../../chunks/astro/server_Bww52DyY.mjs';
import 'piccolore';
import { q as questions, d as decodeProfile, b as buildProfileData, $ as $$Layout } from '../../chunks/profileEncoder_BMbcfExd.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ProfileCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProfileCard;
  const { profile, profileUrl } = Astro2.props;
  const getOptionLabel = (questionId, value) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return null;
    const option = question.options.find((o) => o.value === value);
    return option ? { label: option.label, emoji: option.emoji } : null;
  };
  const interests = [
    getOptionLabel("hobbies", profile.answers.hobbies || ""),
    getOptionLabel("weekend", profile.answers.weekend || ""),
    getOptionLabel("travel", profile.answers.travel || "")
  ].filter(Boolean);
  const dateStyle = getOptionLabel("date-style", profile.answers["date-style"] || "");
  const relationshipValue = getOptionLabel("relationship-value", profile.answers["relationship-value"] || "");
  const loveExpression = getOptionLabel("love-expression", profile.answers["love-expression"] || "");
  return renderTemplate`${maybeRenderHead()}<article class="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-valentine-lg border border-valentine-pink-light"> <!-- Decorative Header --> <div class="bg-love-gradient h-3"></div> <!-- Profile Header --> <header class="relative px-6 pt-8 pb-6 text-center border-b border-valentine-pink-light"> <!-- Decorative Hearts Background --> <div class="absolute inset-0 overflow-hidden opacity-10"> <div class="absolute top-4 left-8 text-4xl">💕</div> <div class="absolute top-12 right-12 text-3xl">💗</div> <div class="absolute bottom-8 left-16 text-2xl">💝</div> <div class="absolute bottom-4 right-8 text-3xl">💖</div> </div> <!-- Profile Avatar --> <div class="relative inline-block mb-4"> <div class="w-24 h-24 md:w-32 md:h-32 bg-valentine-gradient rounded-full flex items-center justify-center
        shadow-valentine border-4 border-white"> <span class="text-4xl md:text-5xl">💕</span> </div> <!-- Heart Badge --> <div class="absolute -bottom-1 -right-1 w-10 h-10 bg-valentine-rose rounded-full 
        flex items-center justify-center border-4 border-white shadow-md"> <span class="text-lg">❤️</span> </div> </div> <!-- Name --> <h1 class="font-heading text-3xl md:text-4xl text-valentine-rose-dark mb-2"> ${profile.name} </h1> <!-- Valentine Title --> <div class="inline-flex items-center gap-2 px-4 py-2 bg-valentine-rose-light rounded-full"> <span class="text-lg">✨</span> <span class="font-body font-semibold text-valentine-rose-dark"> ${profile.valentineTitle} </span> <span class="text-lg">✨</span> </div> </header> <!-- Profile Content --> <div class="p-6 md:p-8 space-y-8"> <!-- Personality Traits Section --> <section> <h2 class="flex items-center gap-2 font-heading text-xl text-valentine-rose-dark mb-4"> <span class="text-2xl">🌟</span>
Personality Traits
</h2> <div class="flex flex-wrap gap-3"> ${profile.personality.map((trait) => renderTemplate`<span class="px-4 py-2 bg-valentine-cream rounded-full font-body text-sm text-valentine-rose-dark
            border border-valentine-pink-light"> ${trait} </span>`)} </div> </section> <!-- Love Language Section --> <section class="bg-valentine-blush rounded-2xl p-5 border border-valentine-pink-light"> <h2 class="flex items-center gap-2 font-heading text-xl text-valentine-rose-dark mb-3"> <span class="text-2xl">💬</span>
Love Language
</h2> <div class="flex items-center gap-3"> <div class="w-12 h-12 bg-valentine-rose-light rounded-full flex items-center justify-center"> <span class="text-2xl">💕</span> </div> <span class="font-body text-lg font-medium text-valentine-rose-dark"> ${profile.loveLanguage} </span> </div> </section> <!-- Interests & Hobbies Section --> <section> <h2 class="flex items-center gap-2 font-heading text-xl text-valentine-rose-dark mb-4"> <span class="text-2xl">💖</span>
Interests & Preferences
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${interests.map((interest) => renderTemplate`<div class="flex items-center gap-3 p-4 bg-white rounded-xl border border-valentine-pink-light
            shadow-sm hover:shadow-valentine transition-shadow duration-300"> ${interest.emoji && renderTemplate`<span class="text-2xl">${interest.emoji}</span>`} <span class="font-body text-sm font-medium text-gray-700">${interest.label}</span> </div>`)} </div> </section> <!-- Compatibility Highlights Section --> ${profile.compatibilityTraits.length > 0 && renderTemplate`<section> <h2 class="flex items-center gap-2 font-heading text-xl text-valentine-rose-dark mb-4"> <span class="text-2xl">💑</span>
Compatibility Highlights
</h2> <div class="flex flex-wrap gap-2"> ${profile.compatibilityTraits.map((trait) => renderTemplate`<span class="inline-flex items-center gap-1 px-3 py-1.5 bg-valentine-pink-light 
              rounded-full text-sm font-body text-valentine-rose-dark"> <span class="text-valentine-rose">♥</span> ${trait} </span>`)} </div> </section>`} <!-- Romantic Preferences Section --> <section class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${dateStyle && renderTemplate`<div class="p-4 bg-gradient-to-br from-valentine-rose-light to-valentine-pink-light rounded-xl"> <h3 class="font-body text-sm text-valentine-rose-dark/70 mb-1">Ideal Date</h3> <p class="font-body font-medium text-valentine-rose-dark flex items-center gap-2"> ${dateStyle.emoji && renderTemplate`<span>${dateStyle.emoji}</span>`} ${dateStyle.label} </p> </div>`} ${relationshipValue && renderTemplate`<div class="p-4 bg-gradient-to-br from-valentine-pink-light to-valentine-cream rounded-xl"> <h3 class="font-body text-sm text-valentine-rose-dark/70 mb-1">Values Most</h3> <p class="font-body font-medium text-valentine-rose-dark flex items-center gap-2"> ${relationshipValue.emoji && renderTemplate`<span>${relationshipValue.emoji}</span>`} ${relationshipValue.label} </p> </div>`} ${loveExpression && renderTemplate`<div class="p-4 bg-gradient-to-br from-valentine-cream to-valentine-blush rounded-xl md:col-span-2"> <h3 class="font-body text-sm text-valentine-rose-dark/70 mb-1">Shows Love By</h3> <p class="font-body font-medium text-valentine-rose-dark flex items-center gap-2"> ${loveExpression.emoji && renderTemplate`<span>${loveExpression.emoji}</span>`} ${loveExpression.label} </p> </div>`} </section> </div> <!-- Decorative Footer --> <footer class="px-6 py-4 bg-valentine-blush border-t border-valentine-pink-light text-center"> <p class="font-body text-sm text-valentine-rose-dark/60">
Made with 💕 on Valentine's Resume
</p> </footer> </article>`;
}, "/Users/santosh/valentine-resume/src/components/ProfileCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$data = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$data;
  const { data } = Astro2.params;
  const answers = decodeProfile(data || "");
  if (!answers) {
    return Astro2.redirect("/?error=invalid-profile");
  }
  const profileData = buildProfileData(answers);
  const pageTitle = `${profileData.name}'s Valentine Profile \u{1F495}`;
  const pageDescription = `${profileData.name} is a ${profileData.valentineTitle}! Their love language is ${profileData.loveLanguage.replace(/[^\w\s]/g, "")}. View their complete Valentine profile and discover what makes them special.`;
  const ogImage = "/og-valentine.svg";
  const profileUrl = Astro2.url.href;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  // Copy link functionality\n  const copyBtn = document.getElementById('copy-link-btn');\n  const copyBtnText = document.getElementById('copy-btn-text');\n  \n  if (copyBtn && copyBtnText) {\n    copyBtn.addEventListener('click', async () => {\n      try {\n        await navigator.clipboard.writeText(profileUrl);\n        copyBtnText.textContent = 'Copied! \u{1F495}';\n        copyBtn.classList.add('bg-valentine-rose-light');\n        \n        setTimeout(() => {\n          copyBtnText.textContent = 'Copy Link';\n          copyBtn.classList.remove('bg-valentine-rose-light');\n        }, 2000);\n      } catch (err) {\n        // Fallback for older browsers\n        const textArea = document.createElement('textarea');\n        textArea.value = profileUrl;\n        document.body.appendChild(textArea);\n        textArea.select();\n        document.execCommand('copy');\n        document.body.removeChild(textArea);\n        \n        copyBtnText.textContent = 'Copied! \u{1F495}';\n        setTimeout(() => {\n          copyBtnText.textContent = 'Copy Link';\n        }, 2000);\n      }\n    });\n  }\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate`  <meta property="og:title"${addAttribute(pageTitle, "content")}> <meta property="og:description"${addAttribute(pageDescription, "content")}> <meta property="og:image"${addAttribute(new URL(ogImage, Astro2.site || Astro2.url.origin).href, "content")}> <meta property="og:url"${addAttribute(profileUrl, "content")}> <meta property="og:type" content="profile"> <meta property="og:site_name" content="Valentine's Resume">  <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${addAttribute(pageTitle, "content")}> <meta name="twitter:description"${addAttribute(pageDescription, "content")}> <meta name="twitter:image"${addAttribute(new URL(ogImage, Astro2.site || Astro2.url.origin).href, "content")}> ${maybeRenderHead()}<main class="min-h-screen bg-valentine-gradient py-8 px-4"> <div class="max-w-3xl mx-auto"> <!-- Back to Home Link --> <a href="/" class="inline-flex items-center gap-2 text-valentine-rose-dark hover:text-valentine-rose transition-colors mb-6 font-body"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Create Your Own Profile
</a> <!-- Profile Card --> ${renderComponent($$result2, "ProfileCard", $$ProfileCard, { "profile": profileData, "profileUrl": profileUrl })} <!-- Share Section --> <div class="mt-8 text-center"> <p class="text-gray-600 font-body mb-4">Share this profile with someone special!</p> <div class="flex justify-center gap-4 flex-wrap"> <!-- Copy Link Button --> <button id="copy-link-btn" class="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-valentine
              hover:shadow-valentine-lg transition-all duration-300 font-body font-medium text-valentine-rose-dark
              border border-valentine-pink-light hover:border-valentine-rose"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> <span id="copy-btn-text">Copy Link</span> </button> <!-- Share on Twitter/X --> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out ${profileData.name}'s Valentine Profile! \u{1F495}`)}&url=${encodeURIComponent(profileUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full
              hover:bg-gray-800 transition-all duration-300 font-body font-medium"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg>
Share on X
</a> <!-- Share on Facebook --> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-[#1877f2] text-white rounded-full
              hover:bg-[#166fe5] transition-all duration-300 font-body font-medium"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg>
Share on Facebook
</a> </div> </div> <!-- Create Your Own CTA --> <div class="mt-12 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-valentine border border-valentine-pink-light"> <h3 class="font-heading text-2xl text-valentine-rose-dark mb-4">
Create Your Own Valentine Profile! 💘
</h3> <p class="text-gray-600 font-body mb-6">
Answer a few fun questions and get your personalized Valentine profile to share with your loved ones.
</p> <a href="/" class="inline-flex items-center gap-2 px-8 py-4 bg-valentine-rose text-white rounded-full
            hover:bg-valentine-rose-dark transition-all duration-300 font-body font-semibold
            shadow-valentine hover:shadow-valentine-lg">
Start Questionnaire
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path> </svg> </a> </div> </div> </main> ` }), defineScriptVars({ profileUrl }));
}, "/Users/santosh/valentine-resume/src/pages/profile/[data].astro", void 0);

const $$file = "/Users/santosh/valentine-resume/src/pages/profile/[data].astro";
const $$url = "/profile/[data]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$data,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
