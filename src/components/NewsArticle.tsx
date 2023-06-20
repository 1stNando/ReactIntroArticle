// Simply tells the editor AND 'vite' that this file deals with React and JSX
import React from 'react'

// Export -- is so we can use this outside of this file
// Function. PasCalCased. Returns JSX.
export function NewsArticle(props) {
  return (
    <article className="intro-article">
      <h2 className="article-title">{props.title}</h2>
      <p>{props.body}</p>
      <a className="read-more" href="#here">
        read more about {props.title}
      </a>
    </article>
  )
}
