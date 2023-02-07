export default function Container({ children, className }) {
  return (
    <div className={`mx-4 md:mx-10 xl:mx-32 2xl:mx-48 ${className}`}>
      {children}
    </div>
  )
}
