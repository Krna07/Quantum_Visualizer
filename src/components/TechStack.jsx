import React from 'react';

const TechIcon = ({ children, name }) => (
  <div className="tech-icon">
    {children}
    <span>{name}</span>
  </div>
);

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container">
        <h2>Built With Modern Technologies</h2>
        <div className="tech-icons">
          <TechIcon name="React">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/></svg>
          </TechIcon>
          <TechIcon name="CSS">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.91L5.41 4.91l.213 2.622 10.125.002-.255 2.716h-6.44l.24 2.573h5.92l-.33 3.572-2.607.73-2.607-.73-.188-2.01h-2.6l.32 3.455 4.93 1.375 4.93-1.375.687-7.253H6.22l-.21-2.52h12.56l.21-2.26z"/></svg>
          </TechIcon>
          {/* <TechIcon name="Three.js">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 8.51c-1.35-.3-2.35-1.3-2.65-2.65-.3-1.35-1.3-2.35-2.65-2.65-1.35-.3-2.65.3-3.65 1.35L12 5.51l-1.04-1.05c-1-1.05-2.3-1.65-3.65-1.35-1.35.3-2.35 1.3-2.65 2.65-.3 1.35.3 2.65 1.35 3.65L12 14.49l6.04-6.03c1.05-1 1.65-2.3 1.35-3.65l.6-.3zM12 21.51l-6.04-6.04c-1.05-1-1.65-2.3-1.35-3.65l-.6.3c1.35.3 2.35 1.3 2.65 2.65.3 1.35 1.3 2.35 2.65 2.65 1.35.3 2.65-.3 3.65-1.35L12 15.51l1.04 1.05c1 1.05 2.3 1.65 3.65 1.35 1.35-.3 2.35-1.3 2.65-2.65l.6.3c-.3 1.35-1.3 2.35-2.65 3.65L12 21.51z"/></svg>
          </TechIcon> */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
