import clsx from 'clsx'
import Balancer from 'react-wrap-balancer'



// wrap Balancer to remove type errors :( - @TODO - fix this ugly hack
const BalancerWrapper = (props: any) => <Balancer {...props} />

type ChatGPTAgent = 'user' | 'system' | 'assistant'

export interface ChatGPTMessage {
  role: ChatGPTAgent
  content: string
}

// loading placeholder animation for the chat line
export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900">
          <a href="#" className="hover:underline">
            AI
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
)

// util helper to convert new lines to <br /> tags
const convertNewLines = (text: string) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))

const wrapCode = (text: string) => {
  const codeRegex = /`([^`]+)`/g;
  const parts = text.split(codeRegex);

  return parts.map((part, index) =>
    index % 2 === 0 ? (
      part
    ) : (
        <div className="bg-gray-100 rounded-lg p-4 my-2">
      <div className="border border-gray-300 rounded-lg overflow-x-auto">
        <pre className="p-4">
          <code className="text-sm font-mono whitespace-pre text-gray-800">{part}</code>
        </pre>
      </div>
    </div>
    )
  );
};


export function ChatLine({ role = 'assistant', content }: ChatGPTMessage) {
  if (!content) {
    return null
  }
  const formattedMessage = wrapCode(content).map((part) =>
  typeof part === "string" ? convertNewLines(part) : part
);

  return (
    <div
      className={clsx(
        "w-full mb-5 px-4 py-5 sm:px-6",
        role === "assistant"
          ? "float-left clear-both bg-white rounded-lg shadow-lg ring-1 ring-zinc-100"
          : "float-right clear-both bg-white rounded-lg shadow-lg ring-1 ring-zinc-100"
      )}
    >
      <div className="flex space-x-3">
        <div className="flex-1 gap-4">
          <p className="font-large text-xxl text-gray-900">
            <a href="#" className="hover:underline">
              {role === "assistant" ? "AI" : "You"}
            </a>
          </p>
          <p
            className={clsx(
              "text",
              role === "assistant" ? "font-semibold font-" : "text-gray-400"
            )}
          >
            {formattedMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
