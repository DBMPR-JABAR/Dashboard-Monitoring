import { Oval } from 'react-loader-spinner'

export default function LoadingSpinnerWithText() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div>
        <Oval
          height={20}
          width={20}
          color="#16A75C"
          wrapperStyle={{}}
          wrapperClass=""
          ariaLabel="oval-loading"
          secondaryColor="#FFB900"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      </div>
      <span className="ml-2 font-lato">Loading</span>
    </div>
  )
}
