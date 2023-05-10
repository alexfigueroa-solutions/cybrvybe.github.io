// BlogFeedComponent.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

interface BlogPost {
  id: number;
  title: string;
  intro: string;
  link: string;
}

interface BlogFeedComponentProps {
  posts: BlogPost[];
}

export default function BlogFeedComponent(
  props: BlogFeedComponentProps
): JSX.Element {
  const { posts } = props;

  return (
    <BlogFeedWrapper>
      {posts.map((post) => (
        <BlogItem key={post.id}>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogIntro>{post.intro}</BlogIntro>
          <BlogLink href={post.link}>Read more</BlogLink>
        </BlogItem>
      ))}
    </BlogFeedWrapper>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BlogFeedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in;
`;

export const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 300px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const BlogTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const BlogIntro = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const BlogLink = styled.a`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #ab47bc;
  text-decoration: none;
  align-self: flex-end;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #7b1fa2;
  }
`;
