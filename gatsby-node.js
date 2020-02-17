exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panic('failed to create post', result.errors);
    }

    const posts = result.data.allMdx.nodes;

    posts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve('./src/templates/post.js'),
            context: {
                slug: post.frontmatter.slug
            }
        })
    });


    const postsmdquery = await graphql(`
    {
        allMarkdownRemark {
            edges {
            node {
                fields {
                slug
                }
            }
            }
        }
        }
    `)
    const postmd = postsmdquery.data.allMarkdownRemark.edges;
    postmd.forEach(({ node: post}) => {
        actions.createPage({
            path: `postsmd${post.fields.slug}`,
            component: require.resolve('./src/templates/postmd-template.js'),
            context: {
                slug: post.fields.slug
            }
        })
    } )

}


const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {

    const  { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({node, getNode, basePath: 'postsmd'})
        createNodeField({node, name: 'slug', value: slug})
    }
    // query{
    //     allMarkdownRemark {
    //       totalCount
    //       edges {
    //         node {
    //           fields {   <=== Now I can do this thing
    //             slug     <=== Now I can do this thing
    //           }
    //           id
    //           frontmatter {
    //             title
    //             date
    //           }
    //           excerpt
    //         }
    //       }
    //     }
    //   }
}