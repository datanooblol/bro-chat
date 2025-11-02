'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          const [copied, setCopied] = useState(false)
          
          const handleCopy = () => {
            navigator.clipboard.writeText(String(children).replace(/\n$/, ''))
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }
          
          return !inline && match ? (
            <div className="rounded-md overflow-hidden border border-gray-200">
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                className="!m-0 !rounded-none"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
              <div className="flex justify-between items-center bg-gray-100 px-3 py-2 border-t border-gray-200">
                <span className="text-xs font-medium text-gray-600">{match[1]}</span>
                <button
                  onClick={handleCopy}
                  className="text-xs text-gray-600 hover:text-gray-800 font-medium"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ) : (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
              {children}
            </code>
          )
        },
        h1: ({ children }) => <h1 className="text-lg font-bold mb-1">{children}</h1>,
        h2: ({ children }) => <h2 className="text-base font-semibold mb-1">{children}</h2>,
        h3: ({ children }) => <h3 className="text-sm font-medium mb-0.5">{children}</h3>,
        p: ({ children }) => <p className="mb-1.5">{children}</p>,
        ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
        li: ({ children }) => <li className="mb-1">{children}</li>,
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-gray-300 text-sm bg-white">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => <tr className="border-b border-gray-200">{children}</tr>,
        th: ({ children }) => <th className="border border-gray-300 px-3 py-2 text-left font-semibold bg-gray-100">{children}</th>,
        td: ({ children }) => <td className="border border-gray-300 px-3 py-2 align-top whitespace-pre-wrap">{children}</td>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-2">{children}</blockquote>,
        hr: () => <hr className="border-gray-300 my-3" />
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}