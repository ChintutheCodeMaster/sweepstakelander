const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-purple-900 text-white shadow-lg">
  {/* Logo */}
  <div className="text-xl font-bold">PlayFame</div>

  {/* Search */}
  <input
    type="text"
    placeholder="Search games and providers"
    className="w-1/3 px-4 py-2 rounded-full bg-purple-800 text-sm outline-none"
  />

  {/* Actions */}
  <div className="flex items-center gap-4">
    <button className="px-4 py-2 bg-pink-500 rounded-full text-sm font-semibold">
      Get Coins
    </button>
  </div>
</nav>
)
}

export default Navbar
