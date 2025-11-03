"use client";

import { useState, useRef, useEffect } from "react";
import { Input, Button } from "../../atoms";

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({
  onSend,
  placeholder = "Type a message...",
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  // const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  // useEffect(() => {
  //   if (!disabled && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [disabled]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // return (
  //   <div className="fixed bottom-4 left-0 right-0 p-4">
  //     <div className="max-w-[800px] w-full mx-auto">
  //       <div className="relative flex items-center bg-white border border-gray-300 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-gray-300 focus-within:border-transparent">
  //         <input
  //           ref={inputRef}
  //           type="text"
  //           value={message}
  //           onChange={(e) => setMessage(e.target.value)}
  //           onKeyPress={handleKeyPress}
  //           placeholder={placeholder}
  //           disabled={disabled}
  //           className="flex-1 outline-none pl-4 bg-transparent disabled:opacity-50"
  //         />
  //         <button
  //           onClick={handleSend}
  //           disabled={disabled || !message.trim()}
  //           className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
  //         >
  //           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
  //             <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  //           </svg>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="fixed bottom-4 left-0 right-0 p-4">
      <div className="max-w-[800px] w-full mx-auto">
        <div className="relative flex items-end bg-white border border-gray-300 rounded-3xl px-4 py-3 focus-within:ring-2 focus-within:ring-gray-300 focus-within:border-transparent">
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 outline-none bg-transparent disabled:opacity-50 resize-none max-h-80 overflow-y-auto"
            style={{ minHeight: "24px" }}
          />
          <button
            onClick={handleSend}
            disabled={disabled || !message.trim()}
            className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
