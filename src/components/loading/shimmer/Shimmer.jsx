import styles from './Shimmer.module.scss'

export default function Shimmer({ width, height, children }) {
  return (
    <div
      className="relative overflow-hidden bg-gray-100"
      style={{
        width: width || 'auto',
        height: height || 'auto',
      }}
    >
      {children}
      <div className={styles.ShimmerContainer}>
        <div className={styles.Shimmer} />
      </div>
    </div>
  )
}
