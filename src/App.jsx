import bgPattern from './assets/bg-pattern-quotation.svg'
import danielAvatar from './assets/image-daniel.jpg'
import jeanetteAvatar from './assets/image-jeanette.jpg'
import jonathanAvatar from './assets/image-jonathan.jpg'
import kiraAvatar from './assets/image-kira.jpg'
import patrickAvatar from './assets/image-patrick.jpg'

const testimonials = [
  {
    id: 'daniel',
    name: 'Daniel Clifford',
    role: 'Verified Graduate',
    title: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny\'s worth.',
    text: 'I was an EMT for many years before I joined the bootcamp. I\'ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun. I enrolled shortly thereafter. The next 12 weeks was the best and most grueling time of my life.',
    avatar: danielAvatar,
    cardClass: 'bg-violet-600 text-white md:col-span-2',
  },
  {
    id: 'jonathan',
    name: 'Jonathan Walters',
    role: 'Verified Graduate',
    title: 'The team was very supportive and kept me motivated',
    text: 'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I\'ve made in myself.',
    avatar: jonathanAvatar,
    cardClass: 'bg-slate-700 text-white',
  },
  {
    id: 'kira',
    name: 'Kira Whittle',
    role: 'Verified Graduate',
    title: 'Such a life-changing experience. Highly recommended!',
    text: 'Before joining the bootcamp, I\'ve never written a line of code. I needed some structure from professionals who can help me learn step by step. I was encouraged to learn at my own pace and asked questions often.',
    avatar: kiraAvatar,
    cardClass: 'bg-white text-slate-800 md:col-start-4 md:row-span-2',
  },
  {
    id: 'jeanette',
    name: 'Jeanette Harmon',
    role: 'Verified Graduate',
    title: 'An overall wonderful and rewarding experience',
    text: 'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
    avatar: jeanetteAvatar,
    cardClass: 'bg-white text-slate-800',
  },
  {
    id: 'patrick',
    name: 'Patrick Abrams',
    role: 'Verified Graduate',
    title: 'Awesome teaching support from TAs who did the bootcamp themselves.',
    text: 'The staff seem genuinely concerned about my progress which I find really refreshing. They gave me confidence to present myself as a capable junior developer.',
    avatar: patrickAvatar,
    cardClass: 'bg-slate-900 text-white md:col-span-2',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-18 md:px-16">
      <section
        aria-label="Testimonials grid section"
        className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-4"
      >
        {testimonials.map((item) => (
          <article
            key={item.id}
            className={`rounded-xl p-8 shadow-xl shadow-slate-300/30 ${item.cardClass}`}
            style={
              item.id === 'daniel'
                ? {
                    backgroundImage: `url(${bgPattern})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top 0 right 2rem',
                  }
                : undefined
            }
          >
            <header className="mb-4 flex items-center gap-4">
              <img
                src={item.avatar}
                alt={`${item.name} avatar`}
                className="h-9 w-9 rounded-full border-2 border-violet-300/50 object-cover"
                loading="lazy"
              />
              <div className="leading-tight">
                <h2 className="text-sm font-semibold">{item.name}</h2>
                <p className="text-xs opacity-70">{item.role}</p>
              </div>
            </header>
            <p className="mb-4 text-xl font-semibold leading-7">{item.title}</p>
            <p className="text-sm leading-6 opacity-70">{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
