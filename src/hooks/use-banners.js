import { graphql, useStaticQuery } from 'gatsby';

const useBanners = () => {
  const data = useStaticQuery(graphql`
    query {
      banners: allFile(filter: { sourceInstanceName: { eq: "banners"} }) {
        nodes {
            sharp: childImageSharp {
                fluid (maxWidth: 1500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
    }
  `);

  return data.banners.nodes;
};

export default useBanners;
