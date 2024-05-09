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
  description: string
}

export const JobCard: React.FC<JobCardProps> = ({ title, company, date, description }) => {
return (
    <div className="border border-gray-500 bg-zinc-900 shadow-md rounded-md p-4 my-4 mb-12">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h2 className="text-xl text-gray-500">{company}</h2>
        <h2 className="text-md text-gray-500">{date}</h2>
        <p className="text-md mt-4">{description}</p>
    </div>
)
}