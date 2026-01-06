import image from '../images/Casinoremoved.png'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-purple-600 p-5 text-white flex items-center justify-around min-h-[40vh]">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Win Big with Free Spins 🎉
        </h1>
        <p className="opacity-90 mb-4">
          Play sweepstakes games & redeem prizes
        </p>
        <button className="px-6 py-3 bg-pink-500 rounded-full font-semibold">
          Claim Daily Reward
        </button>
      </div>
      {/* Placeholder image */}
      <img src={image} alt="Casino" className='w-[40%] h-auto object-contain' />
    </section>
  )
}

export default Hero
