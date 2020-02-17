import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout'
import { Link } from 'gatsby';

const getMarkdownPosts = graphql`
{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
        excerpt
      }
    }
  }
}
`;

export default () => {


    return (
    <Layout>
        <StaticQuery query={getMarkdownPosts}
            render={ (data) => (
                <div>
                    <h4>Posts</h4>
                    { data.allMarkdownRemark.edges.map(({ node }) => (
                         <div key={node.id}>
                            <h3>{node.frontmatter.title}</h3>
                            <p>{node.excerpt}</p>
                         </div>
                    ))}
                </div>
            )}
        />
    </Layout>)
}