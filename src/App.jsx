import { useEffect, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import questions from "./data/questions.js";

function App() {
    // States 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [showAnswer, setShowAnswer] = useState(false); 
    const [timerLeft, setTimerLeft] = useState(questions[currentIndex].timer); 
    // const [timerLeft, setTimerLeft] = useState(30);

    useEffect(() => {

        const id = setInterval(() => {
            setTimerLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(id);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // clean up function
        // v.v.v.Imp
        return () => {
            clearInterval(id);
        };
    }, [currentIndex]);

    // Next question 
    const handleNext = ()=>{ 
      const nextIdx = currentIndex+1; 
      setCurrentIndex(nextIdx); 
      setTimerLeft(questions[nextIdx].timer); 
    }

    const handlePrev = () => {
        const prevIdx = currentIndex - 1;
        setCurrentIndex(prevIdx);
        setTimerLeft(questions[prevIdx].timer);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-violet-100 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                        Quiz App
                    </h1>
                    <p className="mt-2 text-sm text-slate-500 sm:text-base">
                        Challenge yourself, one question at a time.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-lg shadow-slate-200/50 backdrop-blur-sm">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex == 0}
                        className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition duration-200 hover:bg-slate-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        ← PREV
                    </button>

                    <button
                        onClick={() => setShowAnswer((prev) => !prev)}
                        className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition duration-200 hover:bg-violet-700 active:scale-95"
                    >
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex == questions.length - 1}
                        className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-200 transition duration-200 hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        NEXT →
                    </button>
                </div>

                {/* Timer */}
                <div className="mb-6 flex items-center justify-between rounded-2xl border border-blue-100 bg-white p-5 shadow-md">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                            Timer Running...
                        </h2>
                        <p className="mt-1 text-xs text-slate-400">
                            Time remaining
                        </p>
                    </div>

                    <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full border-4 text-2xl font-extrabold shadow-sm ${
                            timerLeft <= 5
                                ? "border-red-300 bg-red-50 text-red-600"
                                : "border-blue-200 bg-blue-50 text-blue-600"
                        }`}
                    >
                        {timerLeft}
                    </div>
                </div>

                {/* Question box */}
                <div className="rounded-2xl border border-white bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-8">
                    <div className="mb-6">
                        <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-sm font-bold text-violet-700">
                            Question : {questions[currentIndex].id}
                        </span>

                        <h3 className="mt-5 text-xl font-bold leading-relaxed text-slate-800 sm:text-2xl">
                            {questions[currentIndex].question}
                        </h3>

                        {/* Question Image */}
                        {questions[currentIndex].image && (
                            <div className="mt-5 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-3">
                                <img
                                    src={questions[currentIndex].image}
                                    alt=""
                                    className="mx-auto max-h-80 w-full rounded-lg object-contain"
                                />
                            </div>
                        )}
                    </div>

                    {/* Options */}
                    <div className="space-y-3">
                        {questions[currentIndex].options.map(
                            (options, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-500 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>

                                    <span className="font-medium leading-relaxed text-slate-700">
                                        {options}
                                    </span>
                                </div>
                            ),
                        )}
                    </div>

                    {/* Display answer */}
                    {showAnswer && (
                        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                                    ✓
                                </span>
                                <h3 className="font-bold text-emerald-800">
                                    Correct Answer
                                </h3>
                            </div>

                            <p className="leading-relaxed text-emerald-700">
                                {questions[currentIndex].answer}
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-slate-400">
                    Keep learning. Keep improving.
                </p>
            </div>
        </div>
    );
}

export default App;
