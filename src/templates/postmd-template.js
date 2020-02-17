import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug:String!) {
        markdownRemark(fields:{ slug: { eq: $slug}}) {
            html
            frontmatter{
            title
            }
        }
    }
`

export const PostdmTemplate =  ({ data: post }) => (
    <div>
        <div>{post.markdownRemark.frontmatter.title}</div>
        <div dangerouslySetInnerHTML={{__html: post.markdownRemark.html}}></div>
    </div>
)

export default PostdmTemplate;