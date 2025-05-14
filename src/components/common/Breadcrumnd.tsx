'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
  body: string
}

type PropsType = {
  title: string
  subtitle: string
}

export default function Breadcrumnd({title, subtitle}: PropsType) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        // Get only the first 5 posts
        setPosts(data.slice(0, 5))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <>
      <section className="breadcrumnd-banner overflow-hidden">
        <div className="container">
          <div className="breadcrumnd-wrapp">
            <div className="bread-content">
              <h1 className="wow fadeInDown" data-wow-delay=".4s">
                {title}
              </h1>
              <ul className="bread-listing">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                </li>
                <li>
                  {subtitle}
                </li>
              </ul>
            </div>
            <div className="bread-thumb d-sm-block d-none">
              <img src="assets/img/about/tt-slice.png" alt="img" />
            </div>
          </div>

          {/* Posts section */}
          <div className="posts-section mt-5">
            <h2 className="mb-4">Latest Posts</h2>
            {loading && <p>Loading posts...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            
            {!loading && !error && (
              <div className="posts-grid">
                {posts.map(post => (
                  <div key={post.id} className="post-card mb-4 p-3 border rounded">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-body">{post.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}