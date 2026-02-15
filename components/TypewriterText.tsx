"use client";

import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 1500,
}) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleType = () => {
            const currentFullText = texts[currentIndex];

            if (!isDeleting) {
                // Typing
                setDisplayText(currentFullText.substring(0, displayText.length + 1));

                if (displayText === currentFullText) {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                    return;
                }
            } else {
                // Deleting
                setDisplayText(currentFullText.substring(0, displayText.length - 1));

                if (displayText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };

        const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <div className="inline-block min-h-[1.2em]">
            <span className="text-slate-300 font-bold">{displayText}</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-indigo-500 ml-2 animate-pulse align-middle" style={{ animationDuration: '0.8s' }}></span>
        </div>
    );
};

export default TypewriterText;
