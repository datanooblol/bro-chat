import { Avatar, Text, MarkdownRenderer } from "../../atoms";

interface MessageBubbleProps {
  message: string;
  sender: string;
  avatar?: string;
  timestamp: string;
  isOwn?: boolean;
  isMarkdown?: boolean;
}

export function MessageBubble({
  message,
  sender,
  avatar,
  timestamp,
  isOwn = false,
  isMarkdown = false,
}: MessageBubbleProps) {
  if (isOwn) {
    return (
      <div className="flex flex-col items-end">
        <div className="flex gap-3 flex-row-reverse">
          <Avatar src={avatar} alt={sender} size="sm" />
          <div className="max-w-lg lg:max-w-xl px-4 py-2 rounded-lg bg-gray-200 text-gray-900">
            <Text>{message}</Text>
          </div>
        </div>
        <Text size="sm" color="muted" className="mt-1 mr-11">
          {timestamp}
        </Text>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex gap-3 mb-2">
        <Avatar src={avatar} alt={sender} size="sm" />
        <Text size="sm" color="muted">
          {sender}
        </Text>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 px-4 py-3 rounded-lg bg-white">
          {isMarkdown ? (
            <MarkdownRenderer content={message} />
          ) : (
            <Text>{message}</Text>
          )}
        </div>
      </div>
      <Text size="sm" color="muted" className="mt-1 ml-11">
        {timestamp}
      </Text>
    </div>
  );
}
