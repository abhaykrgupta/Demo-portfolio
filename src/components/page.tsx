// 'use client'

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Github, Linkedin, Mail, Send, Moon, Sun } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { useState, useEffect } from "react"

// export function Page() {
//   const [darkMode, setDarkMode] = useState(false)
//   const [colorEffect, setColorEffect] = useState(false)

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark')
//     } else {
//       document.body.classList.remove('dark')
//     }
//   }, [darkMode])

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode)
//   }

//   const triggerColorEffect = () => {
//     setColorEffect(true)
//     setTimeout(() => setColorEffect(false), 2000) // Reset after 2 seconds
//   }

//   return (
//     <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''} ${colorEffect ? 'color-effect' : ''}`}>
//       <style jsx global>{`
//         @keyframes colorChange {
//           0% { background-color: #ff6b6b; }
//           25% { background-color: #4ecdc4; }
//           50% { background-color: #45b7d1; }
//           75% { background-color: #f7d794; }
//           100% { background-color: #ff6b6b; }
//         }
//         .color-effect {
//           animation: colorChange 2s linear;
//         }
//       `}</style>
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#" onClick={triggerColorEffect}>
//           <span className="sr-only">Your Name</span>
//           <span className="font-bold text-xl">YourName</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about" onClick={triggerColorEffect}>
//             About
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills" onClick={triggerColorEffect}>
//             Skills
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects" onClick={triggerColorEffect}>
//             Projects
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact" onClick={triggerColorEffect}>
//             Contact
//           </Link>
//           <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
//             {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
//             <span className="sr-only">Toggle dark mode</span>
//           </Button>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                   Full Stack Web Developer
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Specializing in React.js and Next.js to create stunning and performant web applications.
//                 </p>
//               </div>
//               <div className="space-x-4">
//                 <Button onClick={triggerColorEffect}>View Projects</Button>
//                 <Button variant="outline" onClick={triggerColorEffect}>Contact Me</Button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
//             <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//               I'm a passionate full stack web developer with a focus on creating efficient, scalable, and user-friendly
//               applications. With expertise in React.js and Next.js, I bring ideas to life through clean code and
//               intuitive design.
//             </p>
//           </div>
//         </section>
//         <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {["React.js", "Next.js", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "SQL", "Git", "AWS", "Docker", "Tailwind CSS"].map(
//                 (skill) => (
//                   <Card key={skill}>
//                     <CardContent className="flex items-center justify-center p-4">
//                       <span className="font-semibold">{skill}</span>
//                     </CardContent>
//                   </Card>
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//         <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[1, 2, 3].map((project) => (
//                 <Card key={project}>
//                   <CardContent className="p-4">
//                     <Image
//                       alt={`Project ${project}`}
//                       className="rounded-lg object-cover w-full aspect-video mb-4"
//                       height={225}
//                       src={`/placeholder.svg?height=225&width=400`}
//                       width={400}
//                     />
//                     <h3 className="font-bold text-lg mb-2">Project {project}</h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       A brief description of the project and the technologies used.
//                     </p>
//                     <div className="flex justify-between items-center mt-4">
//                       <Button variant="outline" size="sm" onClick={triggerColorEffect}>
//                         View Project
//                       </Button>
//                       <Link href="#" className="text-sm text-blue-500 hover:underline" onClick={triggerColorEffect}>
//                         GitHub
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//         <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
//             <div className="grid gap-6 lg:grid-cols-2">
//               <div className="space-y-4">
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Feel free to reach out to me for any inquiries or collaboration opportunities.
//                 </p>
//                 <div className="flex items-center space-x-2">
//                   <Mail className="w-4 h-4" />
//                   <span>your.email@example.com</span>
//                 </div>
//                 <div className="flex space-x-4">
//                   <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" onClick={triggerColorEffect}>
//                     <Github className="w-6 h-6" />
//                     <span className="sr-only">GitHub</span>
//                   </Link>
//                   <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" onClick={triggerColorEffect}>
//                     <Linkedin className="w-6 h-6" />
//                     <span className="sr-only">LinkedIn</span>
//                   </Link>
//                 </div>
//               </div>
//               <form className="space-y-4">
//                 <Input placeholder="Your Name" />
//                 <Input type="email" placeholder="Your Email" />
//                 <Textarea placeholder="Your Message" />
//                 <Button onClick={triggerColorEffect}>
//                   Send Message
//                   <Send className="w-4 h-4 ml-2" />
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Your Name. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#" onClick={triggerColorEffect}>
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#" onClick={triggerColorEffect}>
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }