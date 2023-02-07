import ReactLoading from 'react-loading'

export default function Button({ text, isLoading }) {
  return (
    <button
      type="button"
      className={`block w-full  p-3 rounded-lg transition-all  ${
        isLoading ? 'bg-gray-300' : 'bg-primaryGreen hover:bg-green-700'
      }`}
    >
      <span className="flex justify-center text-white font-lato font-bold">
        {isLoading ? (
          <ReactLoading type="spin" color="#fff" height={24} width={24} />
        ) : (
          text
        )}
      </span>
    </button>
  )
}
