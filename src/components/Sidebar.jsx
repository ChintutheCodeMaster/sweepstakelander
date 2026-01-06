import flashcode from "../images/flashcodes.png"
import games from "../images/games.png"
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-purple-500 to-purple-890 text-white   flex  flex-col">
      <section className="border-b border-white/20">
        <div className="bg-purple-900 p-4 ">
           <p className="text-sm text-gray-300">Your Balance</p>
        <p className="font-bold mt-1">GC 0</p>
        <p className="text-sm text-green-400">SC 0.00</p>

        <button className="mt-3 w-full py-2 bg-pink-500 rounded-lg">
          Get Coins
        </button>
        </div>
      </section>

      {/* 2️⃣ Primary Menu */}
      <section className="border-b border-white/20">
        <nav className=" text-sm m-2 flex flex-col">
          <button className="opacity-80 text-left
          hover:opacity-100
  hover:bg-purple-800
  hover:text-white
  transition
  duration-200
  p-3
  rounded-md">Lobby</button>
          <button className="opacity-80 text-left
          hover:opacity-100
  hover:bg-purple-800
  hover:text-white
  transition
  duration-200
  p-3
  rounded-md
          ">For you</button>
          <button className="opacity-80 text-left
          hover:opacity-100
  hover:bg-purple-800
  hover:text-white
  transition
  duration-200
  p-3
  rounded-md">Live Dealer</button>
          <button className="opacity-80 text-left
          hover:opacity-100
  hover:bg-purple-800
  hover:text-white
  transition
  duration-200
  p-3
  rounded-md">Slots</button>
        </nav>
      </section>

      {/* 3️⃣ Secondary / Promo */}
      <section className="border-b border-white/20">
        <div className="bg-purple-900 p-3 text-sm" >
           <p className="font-semibold mb-1">Daily Bonus 🎁</p>
           <img className="rounded-md" src={flashcode} alt="" />
        <p className="text-gray-300 mt-2">
          Claim free coins every 24 hours
        </p>
        </div>
       
      </section>

      <section className="border-b border-white/20">
      <div className="p-3">
        <img src={games} alt="games" />
      </div>
      </section>
      
      <section className="border-b border-white/20">
        <div className="p-3">
          <div className="flex justify-between mb-2">
            <p className="p-2">Creators</p>
            <button className="p-2 hover:cursor-pointer  hover:bg-purple-800
  hover:text-white
  transition
  duration-200 bg-purple-500 rounded-md">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-full bg-purple-700 flex-shrink-0 border border-white"
              />
            ))}
          </div>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar
