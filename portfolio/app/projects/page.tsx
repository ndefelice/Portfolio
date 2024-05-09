// import { BlogPosts } from 'app/components/posts'
import ProjectCard from "app/components/project-card"

// function ArrowIcon() {
//   return (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 12 12"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
//         fill="currentColor"
//       />
//     </svg>
//   )
// }

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-semibold tracking-tighter">
        Projects
      </h1>
      <ProjectCard
        title="Spaceship Titanic"
        tags={["Python", "Seaborn", "Jupyter"]}
        description="Using Python, I trained a support vector machine (SVM) model to predict transported passengers with 77.577% accuracy."
        learnMoreLink="https://github.com/ndefelice/Spaceship-Titanic-ML"
      />
    </section>
    //   <div className="flex flex-row border-b-4 border-b-zinc-800 py-10">
    //     <div>
    //         <h2 className="text-xl font-semibold mb-5">"Spaceship Titanic" AI/ML Kaggle Competition</h2>
    //         <div className="flex flex-row justify-start space-x-10 mb-5">
    //             <button className="pl-4 pr-4 rounded-lg bg-slate-700">Python</button>
    //             <button className="pl-4 pr-4 rounded-lg bg-slate-700">Seaborn</button>
    //             <button className="pl-4 pr-4 rounded-lg bg-slate-700">Jupyter</button>
    //         </div>
    //         <p>
    //           Using Python, I trained a support vector machine (SVM) model to predict transported 
    //           passengers with 77.577% accuracy.
    //         </p>
    //         <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
    //           <li>
    //             <a
    //               className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    //               rel="noopener noreferrer"
    //               target="_blank"
    //               href="https://github.com/ndefelice"
    //             >
    //               <ArrowIcon />
    //               <p className="ml-2 h-7">Learn More</p>
    //             </a>
    //           </li>
    //         </ul>
    //     </div>
    //   </div>
    // </section>
  )
}
