const languages = [
  { name: 'English', color: '#3b82f6', proficiency: 'Fluent', flair: 'Nuanced professional communication' },
  { name: 'Hindi', color: '#10b981', proficiency: 'Fluent', flair: 'Native-level comfort in conversation' },
  { name: 'Urdu', color: '#f59e0b', proficiency: 'Fluent', flair: 'Expressive and culturally rich tone' },
  { name: 'Konkani', color: '#8b5cf6', proficiency: 'Fluent', flair: 'Warm day-to-day communication' },
  { name: 'Arabic', color: '#ef4444', proficiency: 'Beginner', flair: 'Actively learning with consistency' },
];

export enum TabKey {
  About = "About",
  Projects = "Growth",
  Blog = "Knowledge logs",
  Contact = "Socialize",
}

function App() {
   const projects = [
    { title: 'AudioTrack Classmate', stack: ['Node.js', 'MongoDB', 'React'] },
    { title: 'Language Companion', stack: ['TypeScript', 'Tailwind', 'Framer Motion'] },
    { title: 'Portfolio V2', stack: ['Vite', 'React', 'API Integrations'] },
  ];

  const myTime = new Date();

  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#1d1d1b]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">
        <header className="mb-8 rounded-3xl border-2 border-[#1d1d1b] bg-[#f9f6ef] px-5 py-4 shadow-[4px_4px_0_#1d1d1b]">
          <nav className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm uppercase tracking-[0.18em]">Muskan.dev</p>
            <ul className="flex items-center gap-3 text-sm md:gap-6 md:text-base">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
            <button className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-sm">Mode</button>
          </nav>
        </header>
        <section id="about" className="grid gap-4 md:grid-cols-[5fr_7fr]">
            <div className="flex flex-col gap-4">
            <article className="relative rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b] md:min-h-[390px]">
               <h1 className="mt-8 text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">Welcome</h1>
              <p className="mt-3 text-xl">to</p>
              <p className="mt-3 text-3xl font-medium sm:text-4xl">Nook of مُسکان</p>
              {/* <div className="mt-8 max-w-md rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
                <p className="mb-2 text-sm font-semibold">Tooltip</p>
                <ul className="space-y-1 text-sm sm:text-base">
                  <li>• Origin: Urdu</li>
                  <li>• Transliteration: Muskan</li>
                  <li>• Meaning: Smile ☺</li>
                </ul>
              </div> */}
            </article>

            <blockquote className="rounded-[1.6rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-4 text-sm italic shadow-[5px_5px_0_#1d1d1b] sm:text-base">
              “The wheel of courage will run until you have the will to run the wheel.” — Muskan Dodmani
            </blockquote>
        </div>
            <aside className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b] md:min-h-[390px]">
            <div className="flex flex-wrap items-center justify-between gap-3">
<span className="rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-base flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
  </span>
  Available To Work
</span>              <button className="rounded-xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-base">Resume ↓</button>
            </div>

<h2 className="mt-4 text-4xl font-semibold leading-none sm:text-5xl">
  <span className=''>I&apos;m a{" "}</span>
  <span className="inline-block align-bottom overflow-hidden whitespace-nowrap border-r-2 border-[#1d1d1b] animate-typing">
    Software Engineer
  </span>
</h2>          
<p className="mt-3 text-xl text-[#2b2b29]">Explorer, hardworking, and curious</p>

             <div className="mt-4 rounded-2xl border-2 border-[#1d1d1b] bg-gradient-to-br from-[#fffdf8] to-[#f4ecdd] p-3.5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f2a22]">Languages</p>
                <p className="text-[10px] text-[#5f5648]">Hover chips</p>
              </div>
              <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 text-xs sm:text-sm">
                {languages.map((language) => (
                  <span
                    key={language.name}
                    className="group relative z-0 cursor-default whitespace-nowrap rounded-full border-2 border-[#1d1d1b] bg-[#f9f6ef] px-3 py-1 font-medium transition-all duration-200 hover:z-30 hover:-translate-y-0.5 hover:bg-[#1d1d1b] hover:text-[#fff9ef]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2a8550] transition-colors duration-300 group-hover:bg-[#ffd166]" />
                      {language.name}
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-full z-40 mt-2 w-max max-w-40 -translate-x-1/2 scale-95 rounded-xl border-2 border-[#1d1d1b] bg-[#1d1d1b] px-2.5 py-1.5 text-[10px] text-[#fff9ef] opacity-0 shadow-[3px_3px_0_#6f6352] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                      <span className="block font-semibold text-[#ffd166]">{language.proficiency}</span>
                      <span className="mt-1 block leading-relaxed">{language.flair}</span>
                      <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-[#1d1d1b] bg-[#1d1d1b]" />
                    </span>
                  </span>
                ))}
              </div>
            </div>
            
           <div className="mt-5 grid gap-3 sm:grid-cols-2">
  <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-3 text-center">
    <p className="text-sm uppercase tracking-wide">My Time</p>
    <p className="mt-1 text-lg font-medium">
     {myTime.toLocaleTimeString("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
})}
    </p>
  </div>

  <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-3 text-center">
    <p className="text-sm uppercase tracking-wide">Your Time</p>
    <p className="mt-1 text-lg font-medium">
      {new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  </div>
</div>
          </aside>
        </section>

       <section id="projects" className="mt-10 grid gap-4 md:grid-cols-[3fr_7fr]">
          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Projects →</h3>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="space-y-2">
                {projects.map((project) => (
                  <p key={project.title} className="text-lg font-medium">{project.title}</p>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Skills →</h3>
              <p className="text-sm">Red / Yellow / Green</p>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="flex flex-wrap gap-2">
               {projects[0].stack.map((skill) => (
                  <span key={skill} className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-xl">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>
        
        <section id="contact" className="mt-6 grid gap-4 md:grid-cols-[6fr_4fr]">
          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Connect →</h3>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="flex flex-wrap gap-2">
                <a href="mailto:muskandodmani222@gmail.com" target='_blank' rel="noopener noreferrer" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">Email</a>
                <a href="https://github.com/muskan025" target='_blank' rel="noopener noreferrer" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">GitHub</a>
                <a href="https://www.linkedin.com/in/muskan-dodmani/" target='_blank' rel="noopener noreferrer" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">LinkedIn</a>
                <a href="https://medium.com/@muskandodmani222" target='_blank' rel="noopener noreferrer" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">Medium</a>
                <a href="https://dev.to/muskan025" target='_blank' rel="noopener noreferrer" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">Dev.to</a>
                <a href="https://app.daily.dev/muskan025" target='_blank' rel="noopener noreferrer" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">Daily.dev</a>
                <a href="https://www.instagram.com/poetry_frames_786/" target='_blank' rel="noopener noreferrer" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">Instagram</a>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Blogs →</h3>
              <p className="text-sm">fetched via API</p>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <p className="text-lg font-semibold">Latest writing drops here</p>
              <p className="mt-1 text-sm">Connect your blog API feed to render recent posts.</p>
            </div>
          </article>
        </section>
      </div>
          </main>
  );
}

export default App;
