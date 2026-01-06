import image from "../images/Frame1.png"


const GameCard = ({title, image}) => {
  return (
    <div className="bg-purple-900 rounded-xl text-white hover:scale-105 transition">
      <img
  src={image}
  alt={title}
  className="h-40 w-full object-cover rounded-lg hover:cursor-pointer"
/>
      <p className="text-sm font-semibold"></p>
    </div>
  )
}

export default GameCard
