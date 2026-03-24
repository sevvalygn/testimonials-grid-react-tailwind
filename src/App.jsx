import bgPattern from './assets/bg-pattern-quotation.svg'
import danielAvatar from './assets/image-daniel.jpg'
import jeanetteAvatar from './assets/image-jeanette.jpg'
import jonathanAvatar from './assets/image-jonathan.jpg'
import kiraAvatar from './assets/image-kira.jpg'
import patrickAvatar from './assets/image-patrick.jpg'

function App() {
  return(
    <main className='min-h-screen bg-slate-100 px-6 py-[71px]'>
      <section className="mx-auto grid w-full max-w-[327px] gap-6 md:max-w-[1110px] md:grid-cols-4">
        <article className=" rounded-xl bg-violet-600 p-8 text-white md:col-span-2">
          style={{
            backgroundImage:`url(${bgPattern})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'top 0 right 2rem'
          }}
          <p>1.kart</p>
        </article>
        <article className='rounded-xl bg-violet-600 p-8 text-white md:col-span-2'>
         <header className='mb-4 flex items-center gap-4'>
          <img src={jonathanAvatar} alt="Jonathan Walters avatar" className='h-9 w-9 rounded-full border-2 border-violet-300/50 object-cover'
           />

          <div className="leading-tight">
            <h2 className='text-sm font-semibold'>Jonathan Walters</h2>
            <p className='text-xs opacity-70'>Verified Graduate</p>
          </div>
         </header> 
        </article>
        <article className="rounded-xl bg-white p-8 text-slate-80 md:col-start-4 md:row-span-2">
          <header className="mb-4 flex items-center gap-4">
          <img
            src={kiraAvatar}
            alt="Kira Whittle avatar"
            className="h-9 w-9 rounded-full border-2 border-violet-300/30 object-cover"
          />
          <div className="leading-tight">
            <h2 className="text-sm font-semibold">Kira Whittle</h2>
            <p className="text-xs opacity-70">Verified Graduate</p>
          </div>
        </header>

        <p className="mb-4 text-xl font-semibold leading-7">
          Such a life-changing experience. Highly recommended!
        </p>

        <p className="text-sm leading-6 opacity-70">
          Before joining the bootcamp, I’ve never written a line of code. I needed some
          structure from professionals who can help me learn step by step.
        </p>
                </article>
                <article className="rounded-xl bg-white p-8 text-slate-800">
                  <header className="mb-4 flex items-center gap-4">
          <img
            src={jeanetteAvatar}
            alt="Jeanette Harmon avatar"
            className="h-9 w-9 rounded-full border-2 border-violet-300/30 object-cover"
          />
          <div className="leading-tight">
            <h2 className="text-sm font-semibold">Jeanette Harmon</h2>
            <p className="text-xs opacity-70">Verified Graduate</p>
          </div>
        </header>

        <p className="mb-4 text-xl font-semibold leading-7">
          An overall wonderful and rewarding experience
        </p>

        <p className="text-sm leading-6 opacity-70">
          Thank you for the wonderful experience! I now have a job I really enjoy, and
          make a good living while doing something I love.
        </p>
                </article>

                <article className="rounded-xl bg-slate-900 p-8 text-white md:col-span-2">
                  <header className="mb-4 flex items-center gap-4">
          <img
            src={patrickAvatar}
            alt="Patrick Abrams avatar"
            className="h-9 w-9 rounded-full border-2 border-violet-300/50 object-cover"
          />
          <div className="leading-tight">
            <h2 className="text-sm font-semibold">Patrick Abrams</h2>
            <p className="text-xs opacity-70">Verified Graduate</p>
          </div>
        </header>

        <p className="mb-4 text-xl font-semibold leading-7">
          Awesome teaching support from TAs who did the bootcamp themselves.
        </p>

        <p className="text-sm leading-6 opacity-70">
          The staff seem genuinely concerned about my progress which I find refreshing.
          They gave me confidence to present myself as a capable junior developer.
        </p>
        </article>
      </section>
    </main>
  )
}

export default App

