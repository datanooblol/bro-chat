"use client";
import { MessageBubble } from "../../molecules";
import { TypingIndicator } from "../../atoms";
import { useRef, useEffect } from "react";

interface Message {
  id: string;
  message: string;
  sender: string;
  avatar?: string;
  timestamp: string;
  isOwn: boolean;
  isMarkdown?: boolean;
}

interface MessageListProps {
  messages: Message[];
  isTyping?: boolean;
  onClear?: () => void;
}

export function MessageList({ messages, isTyping = false }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);
  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto mb-16 space-y-4">
      <div className="max-w-[800px] w-full px-4 mx-auto space-y-4 pb-16">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg.message}
            sender={msg.sender}
            avatar={msg.avatar}
            timestamp={msg.timestamp}
            isOwn={msg.isOwn}
            isMarkdown={msg.isMarkdown}
          />
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-700">AI</span>
            </div>
            <div className="bg-gray-200 rounded-lg">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>
    </div>
  );
  // return (
  //   <div ref={scrollRef} className="flex-1 overflow-y-auto mb-16">
  //     <div className="max-w-[800px] w-full px-8 mx-auto flex flex-col-reverse space-y-reverse space-y-4 pb-16">
  //       {isTyping && (
  //         <div className="flex gap-3">
  //           <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
  //             <span className="text-xs font-medium text-gray-700">AI</span>
  //           </div>
  //           <div className="bg-gray-200 rounded-lg">
  //             <TypingIndicator />
  //           </div>
  //         </div>
  //       )}
  //       {messages
  //         .slice()
  //         .reverse()
  //         .map((msg) => (
  //           <MessageBubble
  //             key={msg.id}
  //             message={msg.message}
  //             sender={msg.sender}
  //             avatar={msg.avatar}
  //             timestamp={msg.timestamp}
  //             isOwn={msg.isOwn}
  //             isMarkdown={msg.isMarkdown}
  //           />
  //         ))}
  //     </div>
  //   </div>
  // );
}
