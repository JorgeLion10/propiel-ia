import React from 'react';
import { ChatMessage } from '../../types';
import { UserIcon, BotIcon } from '../icons'; // Assuming BotIcon is SparklesIcon or a dedicated one

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const isBot = message.sender === 'bot';
  const isSystem = message.sender === 'system';

  const bubbleClasses = `
    max-w-[75%] p-3 rounded-xl shadow
    ${isUser ? 'bg-primary text-primary-content ml-auto rounded-br-none' : ''}
    ${isBot ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 mr-auto rounded-bl-none' : ''}
    ${isSystem ? 'bg-transparent text-gray-500 dark:text-gray-400 text-xs italic text-center mx-auto my-2' : ''}
  `;

  const containerClasses = `
    flex mb-3 items-end
    ${isUser ? 'justify-end' : 'justify-start'}
    ${isSystem ? 'justify-center' : ''}
  `;

  if (isSystem) {
    return (
      <div className={containerClasses}>
        <p className={bubbleClasses}>{message.text}</p>
      </div>
    );
  }
  
  const formatText = (text: string) => {
    // Basic bolding for *text* and line breaks for \n
    // More complex markdown could be handled with a library
    return text.split(/(\*[^*]+\*|\n)/g).map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }
      if (part === '\n') {
        return <br key={index} />;
      }
      return part;
    });
  };


  return (
    <div className={containerClasses}>
      {isBot && (
        <div className="flex-shrink-0 mr-2 self-start">
          <BotIcon className="w-7 h-7 text-primary dark:text-[#14e3eb]" />
        </div>
      )}
      <div className={bubbleClasses}>
        {message.sentImage && (
          <img
            src={message.sentImage.dataUrl}
            alt={message.sentImage.name || 'User uploaded image'}
            className="my-2 rounded-lg max-w-full h-auto max-h-48 sm:max-h-60 object-contain" // Adjusted max height
          />
        )}
        {message.text && (
          <div className="text-sm whitespace-pre-wrap">{formatText(message.text)}</div>
        )}
        {message.isLoading && isBot && (
           <div className="flex items-center justify-center mt-1">
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mr-1 delay-75"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mr-1 delay-150"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce delay-200"></div>
            </div>
        )}
        {!isSystem && (
            <p className={`text-xs mt-1 ${isUser ? 'text-primary-content opacity-70 text-right' : 'text-gray-500 dark:text-gray-400 text-left'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
        )}
      </div>
      {isUser && (
        <div className="flex-shrink-0 ml-2 self-start">
          <UserIcon className="w-7 h-7 text-gray-500 dark:text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default ChatMessageBubble;