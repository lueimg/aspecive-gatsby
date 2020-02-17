import React from "react"
import Layout from "../components/layout"
import usePost from "../hooks/use-posts"
import Image from "gatsby-image"

export default () => {
  const posts = usePost()

  return (
    <>
      <Layout>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-8'>
              <div className='msg-title'>
                <div className='msg-title-text'>Noticias</div>
              </div>
            </div>
          </div>

          {posts.map(post => (
            <div className='columns is-centered'>
              <div className='column is-8 '>
                <Image fluid={post.image.sharp.fluid} />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}
