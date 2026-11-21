
import { useMemo, useState } from 'react'
import {
  ArrowRight, MapPin, Search, Menu, Heart,
  Sparkles, Mountain, Compass, X, SlidersHorizontal
} from 'lucide-react'
import { destinations, states } from './data/destinations'

const categories = ['All', 'Nature', 'Wildlife', 'Mountains', 'Adventure', 'Culture', 'Heritage']

function App() {
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState('All States')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('travelmate-favorites') || '[]')
    } catch {
      return []
    }
  })

  const filteredDestinations = useMemo(() => {
    return destinations.filter((place) => {
      const matchesSearch = `${place.name} ${place.state} ${place.category}`
        .toLowerCase().includes(search.toLowerCase())

      const matchesState =
        selectedState === 'All States' || place.state === selectedState

      const matchesCategory =
        selectedCategory === 'All' || place.category === selectedCategory

      return matchesSearch && matchesState && matchesCategory
    })
  }, [search, selectedState, selectedCategory])

  function toggleFavorite(id) {
    const updated = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id]

    setFavorites(updated)
    localStorage.setItem('travelmate-favorites', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-[#f7f5ed] text-[#183d32]">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#e4e5dc] bg-[#f7f5ed]/95 px-6 py-5 backdrop-blur md:px-12">
        <a href="#" className="text-2xl font-bold tracking-tight">
          travelmate<span className="text-[#b8794b]">.</span>ne
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#destinations" className="hover:text-[#b8794b]">Explore</a>
          <a href="#experiences" className="hover:text-[#b8794b]">Experiences</a>
          <a href="#planner" className="hover:text-[#b8794b]">AI Trip Planner</a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <a href="#planner" className="hidden rounded-full bg-[#183d32] px-6 py-3 text-sm text-white md:block">
          Plan a trip <ArrowRight className="ml-2 inline" size={15} />
        </a>

        {menuOpen && (
          <nav className="absolute left-0 top-full flex w-full flex-col gap-5 bg-[#f7f5ed] p-6 shadow-lg md:hidden">
            <a href="#destinations" onClick={() => setMenuOpen(false)}>Explore</a>
            <a href="#experiences" onClick={() => setMenuOpen(false)}>Experiences</a>
            <a href="#planner" onClick={() => setMenuOpen(false)}>AI Trip Planner</a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative mx-4 mt-4 min-h-[560px] overflow-hidden rounded-[28px] bg-[#254d40] md:mx-8 md:min-h-[640px]">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2000"
            alt="Mountain landscape"
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102d25]/85 via-[#102d25]/40 to-transparent" />

          <div className="relative flex min-h-[560px] max-w-3xl flex-col justify-center px-7 py-20 text-white md:min-h-[640px] md:px-16">
            <span className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c49e]">
              <MapPin size={14} /> India's unexplored paradise
            </span>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
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
              <a href="#destinations" className="rounded-full bg-[#f3ead9] px-7 py-4 text-sm font-semibold text-[#183d32]">
                Explore destinations <ArrowRight className="ml-2 inline" size={16} />
              </a>
              <a href="#planner" className="rounded-full border border-white/60 px-7 py-4 text-sm text-white">
                Plan my journey
              </a>
            </div>
          </div>
        </section>

        <section id="destinations" className="px-6 py-20 md:px-12 md:py-24">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8794b]">
              Explore the Northeast
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Find your next escape.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#61746a]">
              Discover remarkable places across eight beautiful states.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 rounded-full border border-[#d9dfd5] bg-white px-4 py-3 lg:w-80">
              <Search size={18} className="text-[#728278]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search places, states..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-[#61746a]">
              <SlidersHorizontal size={17} />
              Filter by state
            </div>
          </div>

          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm transition ${
                  selectedState === state
                    ? 'bg-[#183d32] text-white'
                    : 'border border-[#d9dfd5] bg-white hover:border-[#183d32]'
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  selectedCategory === category
                    ? 'bg-[#dce8dc] text-[#183d32]'
                    : 'bg-white text-[#61746a] hover:bg-[#e9eee5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-[#61746a]">
              Showing <strong className="text-[#183d32]">{filteredDestinations.length}</strong> destinations
            </p>
            <p className="text-xs text-[#61746a]">
              {favorites.length} saved
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((place) => (
              <article key={place.id} className="group overflow-hidden rounded-2xl border border-[#e8e7df] bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-2 text-xs font-medium">
                    {place.category}
                  </span>
                  <button
                    onClick={() => toggleFavorite(place.id)}
                    aria-label="Toggle favourite"
                    className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5"
                  >
                    <Heart
                      size={18}
                      className={favorites.includes(place.id) ? 'fill-red-500 text-red-500' : 'text-[#183d32]'}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#a47a56]">
                    {place.state}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{place.name}</h3>
                  <p className="mt-3 line-clamp-3 min-h-[60px] text-sm leading-5 text-[#61746a]">
                    {place.description}
                  </p>
                  <div className="mt-4 border-t border-[#ecece5] pt-4">
                    <p className="text-xs text-[#61746a]">Best time to visit</p>
                    <p className="mt-1 text-sm font-medium">{place.bestTime}</p>
                  </div>
                  <a href="#planner" className="mt-5 inline-flex items-center text-sm font-semibold">
                    Plan a visit <ArrowRight className="ml-2" size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="py-16 text-center">
              <Compass className="mx-auto mb-4 text-[#a47a56]" size={35} />
              <h3 className="text-xl font-semibold">No destinations found</h3>
              <p className="mt-2 text-sm text-[#61746a]">Try changing your search or filters.</p>
              <button
                onClick={() => {
                  setSearch('')
                  setSelectedState('All States')
                  setSelectedCategory('All')
                }}
                className="mt-5 rounded-full bg-[#183d32] px-6 py-3 text-sm text-white"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section id="experiences" className="bg-[#e9eee5] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <Sparkles className="mx-auto mb-5 text-[#b8794b]" size={28} />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a47a56]">
              More than a destination
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Travel for the stories.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#61746a]">
              Taste local food, experience vibrant festivals, meet communities
              and discover traditions that make Northeast India unique.
            </p>
          </div>
        </section>

        <section id="planner" className="px-6 py-24 text-center md:px-12">
          <Mountain className="mx-auto mb-5 text-[#b8794b]" size={32} />
          <p className="text-xs font-semibold uppercase tracking-widest text-[#a47a56]">
            Your next adventure
          </p>
          <h2 className="mt-4 text-4xl font-semibold">Your journey starts here.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#61746a]">
            Let AI help you turn your travel ideas into a journey worth remembering.
          </p>
          <button className="mt-7 rounded-full bg-[#183d32] px-8 py-4 text-sm font-medium text-white">
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
