'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Post = {
  userId: number
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
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const fetchSinglePost = async (postId: number) => {
    setLoading(true)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch post')
      }
      const data = await response.json()
      setSelectedPost(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleBackToList = () => {
    setSelectedPost(null)
  }

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

          {/* Content section */}
          <div className="posts-section mt-5">
            <h2 className="mb-4" style={{color: 'white'}}>
              {selectedPost ? 'Post Details' : 'Latest Posts from API'}
            </h2>

            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}

            {!loading && !error && (
              <>
                {selectedPost ? (
                  <div className="post-details">
                    <button 
                      onClick={handleBackToList}
                      className="btn btn-secondary mb-4"
                    >
                      ← Back to list
                    </button>
                    <div className="post-card p-4 border rounded" style={{backgroundColor: '#2a2a2a'}}>
                      <h3 style={{color: 'white'}}>{selectedPost.title}</h3>
                      <p className="mt-3" style={{color: '#ddd'}}>{selectedPost.body}</p>
                      <div className="mt-3">
                        <span className="text-muted">Post ID: {selectedPost.id}</span>
                        <span className="text-muted ms-3">User ID: {selectedPost.userId}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="posts-grid">
                    {posts.map(post => (
                      <div 
                        key={post.id} 
                        className="post-card mb-4 p-3 border rounded" 
                        style={{cursor: 'pointer', backgroundColor: '#2a2a2a'}}
                        onClick={() => fetchSinglePost(post.id)}
                      >
                        <h3 className="post-title" style={{color: 'white'}}>{post.title}</h3>
                        <p className="post-body" style={{color: '#ddd'}}>
                          {post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}
                        </p>
                        <div className="text-end">
                          <button 
                            className="btn btn-sm btn-outline-light"
                            onClick={(e) => {
                              e.stopPropagation()
                              fetchSinglePost(post.id)
                            }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}