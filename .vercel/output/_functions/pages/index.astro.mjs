/* empty css                                 */
import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bww52DyY.mjs';
import 'piccolore';
import { q as questions, e as encodeProfile, $ as $$Layout } from '../chunks/profileEncoder_qPRpKm3M.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const HeartIcon = ({ filled = false, className = "" }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: /* @__PURE__ */ jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
  }
);
const ProgressIndicator = ({ currentStep, totalSteps }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 mb-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: Array.from({ length: totalSteps }).map((_, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `transition-all duration-300 ${index === currentStep ? "w-8 h-3 bg-valentine-rose rounded-full" : index < currentStep ? "w-3 h-3 bg-valentine-pink-dark rounded-full" : "w-3 h-3 bg-valentine-pink-light rounded-full"}`
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500 font-body", children: [
      "Question ",
      currentStep + 1,
      " of ",
      totalSteps
    ] })
  ] });
};
const TextInputRenderer = ({
  question,
  value,
  onChange
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder: "Enter your name...",
        className: "w-full px-6 py-4 text-lg border-2 border-valentine-pink-light rounded-2xl\n          focus:border-valentine-rose focus:outline-none focus:ring-4 focus:ring-valentine-rose-light\n          transition-all duration-300 bg-white/80 backdrop-blur-sm\n          placeholder:text-gray-400 text-gray-700 font-body",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(HeartIcon, { className: "w-6 h-6 text-valentine-pink animate-pulse", filled: true }) })
  ] });
};
const OptionCard = ({
  option,
  isSelected,
  onSelect
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: onSelect,
      className: `group relative p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 text-left
        ${isSelected ? "border-valentine-rose bg-gradient-to-br from-valentine-rose-light to-valentine-pink-light shadow-valentine scale-[1.02]" : "border-valentine-pink-light bg-white/80 hover:border-valentine-pink hover:shadow-md hover:scale-[1.01]"}`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center
          transition-all duration-300
          ${isSelected ? "border-valentine-rose bg-valentine-rose" : "border-valentine-pink-light"}`,
            children: isSelected && /* @__PURE__ */ jsx(HeartIcon, { className: "w-3 h-3 text-white", filled: true })
          }
        ),
        option.emoji && /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl mb-2 block", children: option.emoji }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `font-body text-sm md:text-base font-medium block pr-6
          ${isSelected ? "text-valentine-rose-dark" : "text-gray-700 group-hover:text-valentine-rose-dark"}`,
            children: option.label
          }
        )
      ]
    }
  );
};
const MCQRenderer = ({
  question,
  value,
  onChange
}) => {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl mx-auto", children: question.options.map((option) => /* @__PURE__ */ jsx(
    OptionCard,
    {
      option,
      isSelected: value === option.value,
      onSelect: () => onChange(option.value)
    },
    option.value
  )) });
};
function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id] || "";
  const isLastStep = currentStep === questions.length - 1;
  const canProceed = currentAnswer.trim() !== "";
  const handleAnswerChange = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };
  const handleNext = () => {
    if (!canProceed) return;
    if (isLastStep) {
      const encodedProfile = encodeProfile(answers);
      if (encodedProfile) {
        window.location.href = `/profile/${encodedProfile}`;
      } else {
        setIsComplete(true);
        console.log("Completed answers:", answers);
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  if (isComplete) {
    return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl mx-auto text-center py-12 px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-pulse mb-6", children: /* @__PURE__ */ jsx(HeartIcon, { className: "w-20 h-20 text-valentine-rose mx-auto", filled: true }) }),
      /* @__PURE__ */ jsxs("h2", { className: "font-heading text-3xl md:text-4xl text-valentine-rose-dark mb-4", children: [
        "Thank You, ",
        answers.name,
        "! 💕"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-body text-gray-600 text-lg mb-8", children: "Your Valentine's profile is ready to steal hearts!" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-valentine border border-valentine-pink-light", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl text-valentine-rose-dark mb-4", children: "Your Love Profile" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 text-left", children: questions.map((q) => {
          if (q.type === "text") {
            return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(HeartIcon, { className: "w-4 h-4 text-valentine-pink", filled: true }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Name:" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-valentine-rose-dark", children: answers[q.id] })
            ] }, q.id);
          }
          const selectedOption = q.options.find((o) => o.value === answers[q.id]);
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(HeartIcon, { className: "w-4 h-4 text-valentine-pink", filled: true }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
              q.category,
              ":"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium text-valentine-rose-dark", children: [
              selectedOption?.emoji,
              " ",
              selectedOption?.label
            ] })
          ] }, q.id);
        }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setIsComplete(false);
            setCurrentStep(0);
            setAnswers({});
          },
          className: "mt-8 px-8 py-3 bg-valentine-rose text-white font-body font-medium rounded-full\n            hover:bg-valentine-rose-dark transition-all duration-300 shadow-valentine hover:shadow-valentine-lg",
          children: "Start Over 💝"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx(ProgressIndicator, { currentStep, totalSteps: questions.length }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-valentine \n          border border-valentine-pink-light transition-all duration-500",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx("span", { className: "px-4 py-1 bg-valentine-rose-light text-valentine-rose-dark text-sm font-body rounded-full capitalize", children: currentQuestion.category.replace("-", " ") }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-heading text-2xl md:text-3xl text-valentine-rose-dark text-center mb-8", children: currentQuestion.text }),
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: currentQuestion.type === "text" ? /* @__PURE__ */ jsx(
            TextInputRenderer,
            {
              question: currentQuestion,
              value: currentAnswer,
              onChange: handleAnswerChange
            }
          ) : /* @__PURE__ */ jsx(
            MCQRenderer,
            {
              question: currentQuestion,
              value: currentAnswer,
              onChange: handleAnswerChange
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-4 border-t border-valentine-pink-light", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleBack,
                disabled: currentStep === 0,
                className: `flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300
              ${currentStep === 0 ? "text-gray-300 cursor-not-allowed" : "text-valentine-rose hover:bg-valentine-rose-light"}`,
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
                  "Back"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleNext,
                disabled: !canProceed,
                className: `flex items-center gap-2 px-8 py-3 rounded-full font-body font-medium transition-all duration-300
              ${canProceed ? "bg-valentine-rose text-white hover:bg-valentine-rose-dark shadow-valentine hover:shadow-valentine-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`,
                children: [
                  isLastStep ? "Complete" : "Next",
                  isLastStep ? /* @__PURE__ */ jsx(HeartIcon, { className: "w-5 h-5", filled: true }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-valentine-gradient relative overflow-hidden"> <!-- Decorative floating hearts --> <div class="absolute inset-0 pointer-events-none overflow-hidden"> <div class="absolute top-10 left-10 text-4xl animate-float opacity-30">💕</div> <div class="absolute top-20 right-20 text-3xl animate-float opacity-20" style="animation-delay: 0.5s;">💖</div> <div class="absolute top-40 left-1/4 text-2xl animate-float opacity-25" style="animation-delay: 1s;">💗</div> <div class="absolute bottom-20 right-1/4 text-3xl animate-float opacity-20" style="animation-delay: 1.5s;">💝</div> <div class="absolute bottom-40 left-20 text-2xl animate-float opacity-25" style="animation-delay: 2s;">💘</div> <div class="absolute top-1/3 right-10 text-4xl animate-float opacity-15" style="animation-delay: 0.75s;">❤️</div> </div> <div class="container mx-auto px-4 py-12 md:py-16 relative z-10"> <!-- Hero Section --> <header class="text-center mb-12"> <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 shadow-sm"> <span class="text-valentine-rose animate-pulse-heart">💕</span> <span class="text-sm font-body text-valentine-rose-dark font-medium">Valentine's Day Special</span> <span class="text-valentine-rose animate-pulse-heart">💕</span> </div> <h1 class="font-heading text-4xl md:text-6xl lg:text-7xl text-valentine-rose-dark mb-4 leading-tight">
Valentine's Resume
</h1> <p class="font-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
Create your romantic profile and discover your love personality
</p> <p class="font-body text-sm text-gray-500 max-w-lg mx-auto">
Answer a few fun questions and we'll craft your perfect Valentine's profile to share with that special someone 💌
</p> </header> <!-- Questionnaire Component --> <section class="max-w-3xl mx-auto"> ${renderComponent($$result2, "Questionnaire", Questionnaire, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/santosh/valentine-resume/src/components/Questionnaire", "client:component-export": "default" })} </section> <!-- Decorative footer element --> <footer class="text-center mt-16 pb-8"> <div class="inline-flex items-center gap-3 text-valentine-pink"> <span class="h-px w-12 bg-valentine-pink-light"></span> <span class="text-2xl">💕</span> <span class="h-px w-12 bg-valentine-pink-light"></span> </div> <p class="text-sm text-gray-400 mt-4 font-body">Made with love for Valentine's Day 2026</p> </footer> </div> </main> ` })}`;
}, "/Users/santosh/valentine-resume/src/pages/index.astro", void 0);

const $$file = "/Users/santosh/valentine-resume/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
