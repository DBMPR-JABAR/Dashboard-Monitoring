import Skeleton from 'react-loading-skeleton'
import { useMemo } from 'react'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'

export default function SkeletonBarChart({ width = 1000 }) {
  const { width: windowWidth } = useWindowDimensions()

  const widthContainer = useMemo(() => {
    if (windowWidth > 1024) {
      return '100%'
    } else {
      return `${width}px`
    }
  }, [width, windowWidth])

  const heightBar = useMemo(() => {
    if (windowWidth > 1024) {
      return 500
    } else {
      return 300
    }
  }, [windowWidth])

  return (
    <div className="p-8" style={{ width: widthContainer }}>
      <div className="flex justify-center mb-8">
        <div className="flex">
          <Skeleton width={32} />
          <span className="ml-3 text-gray-400">Legend 1</span>
        </div>
        <div className="flex ml-8">
          <Skeleton width={32} />
          <span className="ml-3 text-gray-400">Legend 2</span>
        </div>
        <div className="flex ml-8">
          <Skeleton width={32} />
          <span className="ml-3 text-gray-400">Legend 3</span>
        </div>
        <div className="flex ml-8">
          <Skeleton width={32} />
          <span className="ml-3 text-gray-400">Legend 4</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex flex-col justify-between items-end mr-6 mb-8 text-gray-400">
            <span>1000</span>
            <span>500</span>
            <span>0</span>
          </div>
          <div>
            <div className="flex justify-center items-end">
              <Skeleton width={56} height={`${heightBar}px`} />
              <Skeleton
                className="ml-3"
                width={56}
                height={`${heightBar - 50}px`}
              />
              <Skeleton
                className="ml-3"
                width={56}
                height={`${heightBar - 100}px`}
              />
            </div>
            <div className="mt-3 text-center text-gray-400">Category 1</div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-end">
            <Skeleton width={56} height={`${heightBar}px`} />
            <Skeleton
              className="ml-3"
              width={56}
              height={`${heightBar - 50}px`}
            />
            <Skeleton
              className="ml-3"
              width={56}
              height={`${heightBar - 100}px`}
            />
          </div>
          <div className="mt-3 text-center text-gray-400">Category 2</div>
        </div>
        <div>
          <div className="flex justify-center items-end">
            <Skeleton width={56} height={`${heightBar}px`} />
            <Skeleton
              className="ml-3"
              width={56}
              height={`${heightBar - 50}px`}
            />
            <Skeleton
              className="ml-3"
              width={56}
              height={`${heightBar - 100}px`}
            />
          </div>
          <div className="mt-3 text-center text-gray-400">Category 3</div>
        </div>
        <div>
          <div className="flex justify-center items-end">
            <Skeleton width={56} height={`${heightBar}px`} />
            <Skeleton
              className="ml-3"
              width={56}
              height={`${heightBar - 50}px`}
            />
            <Skeleton
              className="ml-3"
              width={56}
              height={`${heightBar - 100}px`}
            />
          </div>
          <div className="mt-3 text-center text-gray-400">Category 4</div>
        </div>
      </div>
    </div>
  )
}
