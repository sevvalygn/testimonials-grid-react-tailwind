import bgPattern from './assets/bg-pattern-quotation.svg'
import danielAvatar from './assets/image-daniel.jpg'
import jeanetteAvatar from './assets/image-jeanette.jpg'
import jonathanAvatar from './assets/image-jonathan.jpg'
import kiraAvatar from './assets/image-kira.jpg'
import patrickAvatar from './assets/image-patrick.jpg'

function App() {
  return (
    <main className="min-h-screen bg-[hsl(214_17%_92%)] px-6 py-[71px] md:py-[164px]">
      <section className="mx-auto grid w-full max-w-[327px] gap-6 md:max-w-[1110px] md:grid-cols-4">
        <article
          className="rounded-xl bg-violet-600 p-8 text-white md:col-span-2"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 0 right 2rem',
          }}
        >
          <header className="mb-4 flex items-center gap-4">
            <img
              src={danielAvatar}
              alt="Daniel Clifford avatar"
              className="h-9 w-9 rounded-full border-2 border-[hsl(264_82%_80%)] object-cover"
            />
            <div className="leading-tight">
              <h2 className="text-[13px] font-semibold">Daniel Clifford</h2>
              <p className="text-[11px] opacity-70">Verified Graduate</p>
            </div>
          </header>
          <p className="mb-4 text-[20px] font-semibold leading-[1.2]">
            I received a job offer mid-course, and the subjects I learned were current, if not more so,
            in the company I joined. I honestly feel I got every penny&apos;s worth.
          </p>
          <p className="text-[13px] leading-[1.4] opacity-70">
            I was an EMT for many years before I joined the bootcamp. I&apos;ve been looking to make a
            transition and have heard some people who had an amazing experience here. I signed up for
            the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since completing the course,
            I&apos;ve successfully switched careers, working as a Software Engineer at a VR startup.
          </p>
        </article>

        <article className="rounded-xl bg-[hsl(217_19%_35%)] p-8 text-white">
          <header className="mb-4 flex items-center gap-4">
            <img
              src={jonathanAvatar}
              alt="Jonathan Walters avatar"
              className="h-9 w-9 rounded-full border-2 border-[hsl(264_82%_80%)] object-cover"
            />
            <div className="leading-tight">
              <h2 className="text-[13px] font-semibold">Jonathan Walters</h2>
              <p className="text-[11px] opacity-70">Verified Graduate</p>
            </div>
          </header>
          <p className="mb-4 text-[20px] font-semibold leading-[1.2]">
            The team was very supportive and kept me motivated
          </p>
          <p className="text-[13px] leading-[1.4] opacity-70">
            I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
            for a big company. This was one of the best investments I&apos;ve made in myself.
          </p>
        </article>

        <article className="rounded-xl bg-white p-8 text-[hsl(224_10%_45%)] md:col-start-4 md:row-span-2">
          <header className="mb-4 flex items-center gap-4">
            <img
              src={kiraAvatar}
              alt="Kira Whittle avatar"
              className="h-9 w-9 rounded-full border-2 border-[hsl(0_0%_81%)] object-cover"
            />
            <div className="leading-tight">
              <h2 className="text-[13px] font-semibold text-[hsl(217_19%_35%)]">Kira Whittle</h2>
              <p className="text-[11px] opacity-70">Verified Graduate</p>
            </div>
          </header>
          <p className="mb-4 text-[20px] font-semibold leading-[1.2] text-[hsl(217_19%_35%)]">
            Such a life-changing experience. Highly recommended!
          </p>
          <p className="text-[13px] leading-[1.4]">
            Before joining the bootcamp, I&apos;ve never written a line of code. I needed some structure
            from professionals who can help me learn programming step by step. I was encouraged to
            enroll by a former student of theirs who can only say wonderful things about the program.
            The entire curriculum and staff did not disappoint. They were very hands-on and I never had
            to wait long for assistance. The agile team project, in particular, was outstanding. It took
            my learning to the next level in a way that no tutorial could ever have. In fact, I&apos;ve
            often referred to it during interviews as an example of my developent experience. It
            certainly helped me land a job as a full-stack developer after receiving multiple offers.
            100% recommend!
          </p>
        </article>

        <article className="rounded-xl bg-white p-8 text-[hsl(224_10%_45%)]">
          <header className="mb-4 flex items-center gap-4">
            <img
              src={jeanetteAvatar}
              alt="Jeanette Harmon avatar"
              className="h-9 w-9 rounded-full border-2 border-[hsl(0_0%_81%)] object-cover"
            />
            <div className="leading-tight">
              <h2 className="text-[13px] font-semibold text-[hsl(217_19%_35%)]">Jeanette Harmon</h2>
              <p className="text-[11px] opacity-70">Verified Graduate</p>
            </div>
          </header>
          <p className="mb-4 text-[20px] font-semibold leading-[1.2] text-[hsl(217_19%_35%)]">
            An overall wonderful and rewarding experience
          </p>
          <p className="text-[13px] leading-[1.4]">
            Thank you for the wonderful experience! I now have a job I really enjoy, and make a good
            living while doing something I love.
          </p>
        </article>

        <article className="rounded-xl bg-[hsl(219_29%_14%)] p-8 text-white md:col-span-2">
          <header className="mb-4 flex items-center gap-4">
            <img
              src={patrickAvatar}
              alt="Patrick Abrams avatar"
              className="h-9 w-9 rounded-full border-2 border-[hsl(264_82%_80%)] object-cover"
            />
            <div className="leading-tight">
              <h2 className="text-[13px] font-semibold">Patrick Abrams</h2>
              <p className="text-[11px] opacity-70">Verified Graduate</p>
            </div>
          </header>
          <p className="mb-4 text-[20px] font-semibold leading-[1.2]">
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from
            them and learning from their experiences was easy.
          </p>
          <p className="text-[13px] leading-[1.4] opacity-70">
            The staff seem genuinely concerned about my progress which I find really refreshing. The
            program gave me the confidence necessary to be able to go out in the world and present
            myself as a capable junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart and amazing people.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App