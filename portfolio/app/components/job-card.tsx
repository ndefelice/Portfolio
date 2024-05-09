// Create a new component called JobCard that will display the job title, company name, and job description. The component should accept the following props:
// 
// title: string - the job title
// company: string - the company name
// description: string - the job description
//
// The JobCard component should be used in the Experience page to display each job experience. The component should be created in the components directory.
// All the css can be done as tailwindcss classes.

import React from 'react'

type JobCardProps = {
  title: string
  company: string
  date: string
  description: string[]
}

export const JobCard: React.FC<JobCardProps> = ({ title, company, date, description }) => {
return (
  <div className="border-b-4 border-b-zinc-800 py-10">
    <h2 className="text-xl font-semibold">{title}</h2>
    <h2 className="text-lg text-gray-400">{company}</h2>
    <h2 className="text-md text-gray-400">{date}</h2>
    <ul className="list-disc list-inside mt-4">
      {description.map((item, index) => (
        <li key={index} className="text-md py-1">{item}</li>
      ))}
    </ul>
  </div>
)
}