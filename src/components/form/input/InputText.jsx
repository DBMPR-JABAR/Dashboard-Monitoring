export default function InputText({ placeHolderText, onChange, value }) {
  return (
    <input
      className="w-full rounded-lg border border-gray-400 bg-gray-50 p-3 focus:border-primary-green focus:border-2"
      placeholder={placeHolderText}
      onChange={onChange}
      value={value}
      type="text"
    />
  )
}
