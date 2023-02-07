export default function InputText({ placeHolderText }) {
  return (
    <input
      className="w-full rounded-lg border border-gray-400 bg-gray-50 p-3 focus:border-primaryGreen focus:border-2"
      placeholder={placeHolderText}
      type="text"
    />
  )
}
