import { graphql, useStaticQuery } from 'gatsby';

const UseCongreso2015 = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "congreso2015"} }) {
        nodes {
            sharp: childImageSharp {
                fluid (maxWidth: 500, maxHeight: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
    }
  `);

  return data.images.nodes;
};

export default UseCongreso2015;
