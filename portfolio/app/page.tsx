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
        {`Hello everyone! I recently graduated from Virginia Tech in 2024 with a bachelors degree in Computer Science. Throughout my undergraduate career,
        I was involved in a variety of research projects, internships, and extracurricular activities. I am also an incoming TDP Software Engineer at GEICO 
        for the July 2024 cohort. I am excited to start my career at GEICO and learn more about 
        software development!`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
