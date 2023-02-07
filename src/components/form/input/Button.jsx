export default function Button({ text }) {
  return (
    <button
      type="button"
      className="block w-full bg-primaryGreen p-3 rounded-lg transition-all hover:bg-green-700"
    >
      <span className="text-white font-lato font-bold">{text}</span>
    </button>
  )
}
