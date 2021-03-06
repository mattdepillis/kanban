/* eslint-disable react/no-children-prop */
import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ children, className, inline, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')

  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, '')}
      style={vscDarkPlus}
      customStyle={{ 'border-radius': '5px' }}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export default CodeBlock
