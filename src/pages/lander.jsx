import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import GameCard from '../components/GameCard'
import image1 from "../images/Frame1.png"
import image2 from "../images/Frame2.png"
import image3 from "../images/Frame3.png"
import image4 from "../images/Frame4.png"


const games = [
  { title: 'Zeus Up', image: image1 },
  { title: 'Gold Blitz', image: image2 },
  { title: 'Mad Hit Diamonds', image: image3 },
  { title: 'Elfin Rich', image: image4 },
  { title: 'Rapid Voltage', image: image1 },
  { title: 'Africa Drum', image: image2 },
]

const lander = () => {
  return (
    <div className="min-h-screen bg-purple-900">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          <Hero />
          {/* Recommended Games */}
          <section className='bg-purple-900 min-h-screen p-5'>
            <h2 className="text-white text-xl font-semibold mb-4">
              Recommended
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
              {games.map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  image={game.image}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
              {games.map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  image={game.image}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
              {games.map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  image={game.image}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default lander
