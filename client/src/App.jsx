
import { useState } from 'react'
import {
  ArrowRight,
  MapPin,
  Compass,
  Search,
  Menu,
  Mountain,
  Heart,
  Sparkles,
} from 'lucide-react'

const destinations = [
  {
    name: 'Kaziranga',
    state: 'Assam',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900',
  },
  {
    name: 'Dawki',
    state: 'Meghalaya',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
  },
  {
    name: 'Tawang',
    state: 'Arunachal Pradesh',
    category: 'Mountains',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900',
  },
]

function App() {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const filteredDestinations = destinations.filter((place) =>
    `${place.name} ${place.state} ${place.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f7f5ed] text-[#183d32]">
      <header className="relative z-20 flex items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="text-2xl font-bold tracking-tight">
          travelmate<span className="text-[#b8794b]">.</span>ne
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          <a href="#destinations" className="hover:text-[#b8794b]">Explore</a>
          <a href="#experiences" className="hover:text-[#b8794b]">Experiences</a>
          <a href="#planner" className="hover:text-[#b8794b]">Plan a trip</a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={25} />
        </button>

        <a
          href="#planner"
          className="hidden rounded-full bg-[#183d32] px-6 py-3 text-sm text-white transition hover:bg-[#285b49] md:block"
        >
          Start exploring <ArrowRight className="ml-2 inline" size={15} />
        </a>

        {menuOpen && (
          <nav className="absolute left-0 top-full flex w-full flex-col gap-4 bg-[#f7f5ed] px-6 py-5 shadow-lg md:hidden">
            <a href="#destinations" onClick={() => setMenuOpen(false)}>Explore</a>
            <a href="#experiences" onClick={() => setMenuOpen(false)}>Experiences</a>
            <a href="#planner" onClick={() => setMenuOpen(false)}>Plan a trip</a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative mx-4 min-h-[570px] overflow-hidden rounded-[28px] bg-[#254d40] md:mx-8 md:min-h-[650px]">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2000"
            alt="Beautiful mountain landscape"
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102d25]/80 via-[#102d25]/35 to-transparent" />

          <div className="relative flex min-h-[570px] max-w-3xl flex-col justify-center px-7 py-20 text-white md:min-h-[650px] md:px-16">
            <span className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c49e]">
              <MapPin size={14} /> India's unexplored paradise
            </span>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
              Find your own
              <span className="block font-serif italic font-normal text-[#e7c49f]">
                somewhere.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/85 md:text-lg">
              Eight states. Endless stories. Discover the landscapes,
              cultures and hidden gems of Northeast India.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#destinations"
                className="rounded-full bg-[#f3ead9] px-7 py-4 text-sm font-semibold text-[#183d32] transition hover:bg-white"
              >
                Explore destinations <ArrowRight className="ml-2 inline" size={16} />
              </a>
              <a
                href="#planner"
                className="rounded-full border border-white/60 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Plan my journey
              </a>
            </div>
          </div>

          <div className="absolute bottom-7 right-8 hidden text-right text-white/80 md:block">
            <p className="text-xs uppercase tracking-[0.2em]">Discover</p>
            <p className="mt-1 text-lg font-serif italic">The Northeast</p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 md:py-28" id="destinations">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8794b]">
                A world waiting to be found
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Where will you go?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#61746a]">
                From mist-covered mountains to living root bridges,
                find the place that speaks to you.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#d9dfd5] bg-white px-4 py-3 md:w-72">
              <Search size={17} className="text-[#728278]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search destinations..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {filteredDestinations.map((place) => (
              <article
                key={place.name}
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium">
                    {place.category}
                  </span>
                  <button
                    aria-label={`Save ${place.name}`}
                    className="absolute right-4 top-4 rounded-full bg-white/90 p-2"
                  >
                    <Heart size={17} />
                  </button>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-[#a47a56]">
                    {place.state}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{place.name}</h3>
                  <a href="#planner" className="mt-4 inline-flex items-center text-sm font-medium">
                    Discover more <ArrowRight className="ml-2" size={15} />
                  </a>
                </div>
              </article>
            ))}
            {filteredDestinations.length === 0 && (
              <p className="col-span-full py-10 text-center text-[#61746a]">
                No destinations found. Try another search.
              </p>
            )}
          </div>
        </section>

        <section id="experiences" className="bg-[#e9eee5] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <Sparkles className="mx-auto mb-5 text-[#b8794b]" size={27} />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a47a56]">
              More than a destination
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Travel for the stories.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#61746a]">
              Taste local food, experience vibrant festivals, meet
              communities and discover traditions that make every
              corner of Northeast India unique.
            </p>
          </div>
        </section>

        <section id="planner" className="px-6 py-20 text-center md:px-12">
          <Mountain className="mx-auto mb-5 text-[#b8794b]" size={30} />
          <h2 className="text-4xl font-semibold">Your journey starts here.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#61746a]">
            Let AI help you turn your travel ideas into a journey
            worth remembering.
          </p>
          <button className="mt-7 rounded-full bg-[#183d32] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#285b49]">
            Build my itinerary <ArrowRight className="ml-2 inline" size={16} />
          </button>
        </section>
      </main>

      <footer className="flex flex-col justify-between gap-3 border-t border-[#dfe3d9] px-6 py-8 text-sm text-[#61746a] md:flex-row md:px-12">
        <p className="font-semibold text-[#183d32]">travelmate.ne</p>
        <p>Made to discover the extraordinary Northeast.</p>
      </footer>
    </div>
  )
}

export default App
