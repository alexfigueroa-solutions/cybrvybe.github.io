import React from 'react';
import styled from 'styled-components';

interface BlogPostSection {
  header: string;
  body: string;
}

interface BlogPageProps {
  blogPost: {
    title: string;
    intro: string;
    sections: BlogPostSection[];
  };
}

export default function BlogPage({ blogPost }: BlogPageProps): JSX.Element {
  return (
    <BlogPageResponsive>
      <BlogPageWrapper>
        <BlogTitle>{blogPost.title}</BlogTitle>
        <BlogIntro>{blogPost.intro}</BlogIntro>
        <div>
          {blogPost.sections.map((section, index) => (
            <BlogSection key={index}>
              <h2>{section.header}</h2>
              <p>{section.body}</p>
            </BlogSection>
          ))}
        </div>
      </BlogPageWrapper>
    </BlogPageResponsive>
  );
}

export const BlogPageWrapper = styled.div`
  line-height: 2rem;
  width: 100%;
  font-family: 'Roboto', sans-serif;
`;

export const BlogTitle = styled.h3`
  font-size: 3rem;
  text-align: center;
  line-height: 4rem;
  font-family: 'Orbitron', sans-serif;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 0rem 0rem 1rem ${(props) => props.theme.colors.primary};
`;

export const BlogIntro = styled.h3`
  font-weight: 100;
  padding: 0rem 5rem;
  letter-spacing: 0.15rem;
  color: ${(props) => props.theme.colors.darkestWhite};
`;

export const BlogSection = styled.div`
  padding: 0rem 2.5rem;

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2.5rem;
    letter-spacing: 0rem;
    text-shadow: 0rem 0rem 1rem ${(props) => props.theme.colors.primary};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

// Add media queries for responsiveness
export const BlogPageResponsive = styled.div`
  @media screen and (max-width: 700px) {
    ${BlogPageWrapper} {
      height: auto;
      margin-top: 15rem;
    }

    ${BlogTitle} {
      font-size: 2rem;
      text-align: center;
      line-height: 4rem;
    }

    ${BlogIntro} {
      padding: 0rem 0rem;
      text-align: center;
    }

    ${BlogSection} {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
