import { useSelector } from 'react-redux'
import ProgressBarChart from './ProgressBarChart'
import LoadingSpinnerWithText from '../../loading/spinner/LoadingSpinnerWithText'
import isEmptyOrSpaces from '../../../helper/stringUtils'
import ProgressLineChart from './ProgressLineChart'

export default function TalikuatChart({
  paketPekerjaan,
  handlePaketPekerjaanOnClick,
}) {
  const talikuatState = useSelector((state) => state.dashboard.rekap.talikuat)

  if (talikuatState.isLoading) {
    return (
      <div className="flex h-full min-h-[inherit] w-full items-center justify-center">
        <LoadingSpinnerWithText />
      </div>
    )
  }

  if (!isEmptyOrSpaces(talikuatState.error)) {
    return <div>{talikuatState.error}</div>
  }

  if (paketPekerjaan) {
    return <ProgressLineChart paketPekerjaan={paketPekerjaan} />
  } else {
    return (
      <ProgressBarChart
        talikuatData={talikuatState.data}
        handlePaketPekerjaanOnClick={handlePaketPekerjaanOnClick}
      />
    )
  }
}
