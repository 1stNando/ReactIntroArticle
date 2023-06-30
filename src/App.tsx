import React from 'react'
import { NewsArticle } from './components/NewsArticle'
import articles from './articles.json'

export function App() {
  // console.log(articles)
  // Transforming data into components. Using map() method. This is a VERY powerful line of code!
  const newsArticlesFromData = articles.map((article) => (
    <NewsArticle key={article.id} title={article.title} body={article.body} />
  ))

  return (
    <div className="all-main-content">
      <main>
        {newsArticlesFromData}
        {/* <NewsArticle
          title="SDG Announces Hackathon!"
          body="SDG announces the 2023 Summer Hackathon. Join us for an exciting weekend."
        />

        <NewsArticle
          title="Student Graduation is Right Around the Corner"
          body="Our next cohort of students will be graduating in just around the corner!"
        />

        <NewsArticle
          title="SDG Standards on React"
          body="React is the best library for learning front end Web Development!"
        />

        <NewsArticle
          title="Wow, so cool"
          body="This makes repeating code so easy!"
        /> */}
      </main>
    </div>
  )
}
