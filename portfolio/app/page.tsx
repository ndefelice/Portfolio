// import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">
        Nick DeFelice
      </h1>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Software Engineer
      </h1>
      <p className="mb-4">
        {`Hello everyone! I graduated from Virginia Tech in May 2024 with a bachelors degree in Computer Science. Throughout my undergraduate career,
        I've developed various projects related to full-stack development, AI/ML, and UX/UI design. Beyond the classroom, I expanded my programming skills through roles as 
        a teaching asssitant (UTA), research assistant, and computer science intern. I am excited to start my career as a Software Engineer at GEICO, as I will be part of the 
        upcoming TDP cohort in July 2024!`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
