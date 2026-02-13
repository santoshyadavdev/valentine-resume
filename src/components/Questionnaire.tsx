import { useState } from 'react';
import { questions, type Answers, type Question, type QuestionOption } from '../data/questions';
import { encodeProfile } from '../utils/profileEncoder';

// Heart Icon SVG Component
const HeartIcon = ({ filled = false, className = '' }: { filled?: boolean; className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Progress Indicator Component
const ProgressIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              index === currentStep
                ? 'w-8 h-3 bg-valentine-rose rounded-full'
                : index < currentStep
                  ? 'w-3 h-3 bg-valentine-pink-dark rounded-full'
                  : 'w-3 h-3 bg-valentine-pink-light rounded-full'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500 font-body">
        Question {currentStep + 1} of {totalSteps}
      </span>
    </div>
  );
};

// Text Input Renderer
const TextInputRenderer = ({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your name..."
        className="w-full px-6 py-4 text-lg border-2 border-valentine-pink-light rounded-2xl
          focus:border-valentine-rose focus:outline-none focus:ring-4 focus:ring-valentine-rose-light
          transition-all duration-300 bg-white/80 backdrop-blur-sm
          placeholder:text-gray-400 text-gray-700 font-body"
        autoFocus
      />
      <div className="flex justify-center mt-4">
        <HeartIcon className="w-6 h-6 text-valentine-pink animate-pulse" filled />
      </div>
    </div>
  );
};

// MCQ Option Card
const OptionCard = ({
  option,
  isSelected,
  onSelect,
}: {
  option: QuestionOption;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <button
      onClick={onSelect}
      className={`group relative p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 text-left
        ${
          isSelected
            ? 'border-valentine-rose bg-gradient-to-br from-valentine-rose-light to-valentine-pink-light shadow-valentine scale-[1.02]'
            : 'border-valentine-pink-light bg-white/80 hover:border-valentine-pink hover:shadow-md hover:scale-[1.01]'
        }`}
    >
      {/* Selection indicator */}
      <div
        className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center
          transition-all duration-300
          ${isSelected ? 'border-valentine-rose bg-valentine-rose' : 'border-valentine-pink-light'}`}
      >
        {isSelected && <HeartIcon className="w-3 h-3 text-white" filled />}
      </div>

      {/* Emoji */}
      {option.emoji && (
        <span className="text-2xl md:text-3xl mb-2 block">{option.emoji}</span>
      )}

      {/* Label */}
      <span
        className={`font-body text-sm md:text-base font-medium block pr-6
          ${isSelected ? 'text-valentine-rose-dark' : 'text-gray-700 group-hover:text-valentine-rose-dark'}`}
      >
        {option.label}
      </span>
    </button>
  );
};

// MCQ Renderer
const MCQRenderer = ({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl mx-auto">
      {question.options.map((option) => (
        <OptionCard
          key={option.value}
          option={option}
          isSelected={value === option.value}
          onSelect={() => onChange(option.value)}
        />
      ))}
    </div>
  );
};

// Main Questionnaire Component
export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id] || '';
  const isLastStep = currentStep === questions.length - 1;
  const canProceed = currentAnswer.trim() !== '';

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (!canProceed) return;

    if (isLastStep) {
      // Encode answers and redirect to profile page
      const encodedProfile = encodeProfile(answers);
      if (encodedProfile) {
        window.location.href = `/profile/${encodedProfile}`;
      } else {
        // Fallback if encoding fails
        setIsComplete(true);
        console.log('Completed answers:', answers);
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

  // Completion Screen
  if (isComplete) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center py-12 px-4">
        <div className="animate-pulse mb-6">
          <HeartIcon className="w-20 h-20 text-valentine-rose mx-auto" filled />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl text-valentine-rose-dark mb-4">
          Thank You, {answers.name}! 💕
        </h2>
        <p className="font-body text-gray-600 text-lg mb-8">
          Your Valentine's profile is ready to steal hearts!
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-valentine border border-valentine-pink-light">
          <h3 className="font-heading text-xl text-valentine-rose-dark mb-4">Your Love Profile</h3>
          <div className="space-y-3 text-left">
            {questions.map((q) => {
              if (q.type === 'text') {
                return (
                  <div key={q.id} className="flex items-center gap-2">
                    <HeartIcon className="w-4 h-4 text-valentine-pink" filled />
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium text-valentine-rose-dark">{answers[q.id]}</span>
                  </div>
                );
              }
              const selectedOption = q.options.find((o) => o.value === answers[q.id]);
              return (
                <div key={q.id} className="flex items-center gap-2">
                  <HeartIcon className="w-4 h-4 text-valentine-pink" filled />
                  <span className="text-gray-600">{q.category}:</span>
                  <span className="font-medium text-valentine-rose-dark">
                    {selectedOption?.emoji} {selectedOption?.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            setIsComplete(false);
            setCurrentStep(0);
            setAnswers({});
          }}
          className="mt-8 px-8 py-3 bg-valentine-rose text-white font-body font-medium rounded-full
            hover:bg-valentine-rose-dark transition-all duration-300 shadow-valentine hover:shadow-valentine-lg"
        >
          Start Over 💝
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Progress Indicator */}
      <ProgressIndicator currentStep={currentStep} totalSteps={questions.length} />

      {/* Question Card */}
      <div
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-valentine 
          border border-valentine-pink-light transition-all duration-500"
      >
        {/* Category Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 bg-valentine-rose-light text-valentine-rose-dark text-sm font-body rounded-full capitalize">
            {currentQuestion.category.replace('-', ' ')}
          </span>
        </div>

        {/* Question Text */}
        <h2 className="font-heading text-2xl md:text-3xl text-valentine-rose-dark text-center mb-8">
          {currentQuestion.text}
        </h2>

        {/* Question Renderer */}
        <div className="mb-8">
          {currentQuestion.type === 'text' ? (
            <TextInputRenderer
              question={currentQuestion}
              value={currentAnswer}
              onChange={handleAnswerChange}
            />
          ) : (
            <MCQRenderer
              question={currentQuestion}
              value={currentAnswer}
              onChange={handleAnswerChange}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-valentine-pink-light">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300
              ${
                currentStep === 0
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-valentine-rose hover:bg-valentine-rose-light'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-body font-medium transition-all duration-300
              ${
                canProceed
                  ? 'bg-valentine-rose text-white hover:bg-valentine-rose-dark shadow-valentine hover:shadow-valentine-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            {isLastStep ? 'Complete' : 'Next'}
            {isLastStep ? (
              <HeartIcon className="w-5 h-5" filled />
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
