// import { BlogPosts } from 'app/components/posts'
import { JobCard } from 'app/components/job-card'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-semibold tracking-tighter">
        Experience
      </h1>
      <JobCard
        title="Python Coding - Senior Design"
        company="Virginia Tech"
        date="January 2024 - May 2024"
        description={[
          "Developed a multiprocessing application in Python to unify data retrieval from sensors that detect X and Z dimensions, road roughness, and GPS coordinates", 
          "Utilized the GoSDK and MTSDK APIs to extract data from a Gocator 2375 laser sensor and XSens MTi IMU",
          "Improved the functionality of the user interface with Streamlit by including concise directions and real-time status indicators",
          "Leveraged Git/GitHub to integrate version control software, enable remote collaboration, and create extensive documentation for future teams"
        ]}
      />
      <JobCard
        title="Teaching Assistant - Professionalism in Computing"
        company="Virginia Tech"
        date="August 2023 - December 2023"
        description={[
          "Assisted students with cyber ethics assignments, examining topics such as internet regulation, intellectual property, eCommerce, AI/ML, and interactive media", 
          "Held office hours 2 days a week, which were available for up to 235 students"
        ]}
      />
      <JobCard
        title="Computer Science Intern"
        company="Ora"
        date="May 2023- January 2024"
        description={[
          "Optimized OpenAI's GPT-3.5-Turbo large language model with LangChain to develop an AI-powered chatbot that prescribes fitness recommendations from user input", 
          "Utilized OpenAI's Whisper large-v3 model to incorporate speech-to-text capabilities",
          "Modernized the user interface with Next.js 14 and shadcn/ui, leveraging Typescript in place of JavaScript to enhance code quality and Tailwind CSS to increase productivity",
          "Created a REST API endpoint using Supabase and FastAPI to enable password reset functionality",
          "Utilized the Agile methodology and Git to continuously collaborate with the backend team, and built, tested, and deployed code using Docker",
          "Developed Python unit tests to fix bugs, minimize token usage, and reduce company costs"
        ]}
      />
      <JobCard
        title="Teaching Assistant - Intro to Programming in Java"
        company="Virginia Tech"
        date="September 2022 - December 2022"
        description={[
          "Assisted students with projects and homework related to Java, object-oriented programming, and other fundamental programming concepts", 
          "Held office hours 4-5 days a week, which were available for up to 70 students",
          "Helped the instructor grade students’ projects to evaluate their understanding of course content"
        ]}
      />
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
