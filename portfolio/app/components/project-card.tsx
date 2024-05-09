// // Create a card that displays an image as the background, with a tital and small description. 
// // The card should be clickable and should navigate to the project page on GitHubwhen clicked.
// 'use client'

// import React, { useRef } from 'react';

// type ProjectCardProps = {
//   title: string
//   description: string
//   image: string
// }

// export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
//   const cardRef = useRef<HTMLDivElement | null>(null);

//   const handleClick = () => {
//     window.location.href = "https://github.com/ndefelice/Spaceship-Titanic-ML";
//   }

//   return (
//     <div className="card" ref={cardRef} onClick={handleClick}>
//       <img src={image} alt={title} className="card-image" />
//       <div className="w-full br-1">
//         <h2 className="text-xl font-semibold">{title}</h2>
//         <p className="card-description">{description}</p>
//       </div>
//     </div>
//   )
// }
