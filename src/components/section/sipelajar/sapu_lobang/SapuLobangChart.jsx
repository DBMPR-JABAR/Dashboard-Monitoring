import { useEffect, useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

import { useDispatch, useSelector } from 'react-redux'
import SkeletonBarChart from '../../../loading/chart/bar/SkeletonBarChart'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import fetchRekapSapuLobang from '../../../../state/redux/dashboard/rekap/sapu_lobang/rekapSapuLobangActions'
import isEmptyOrSpaces from '../../../../helper/stringUtils'

function Chart({ data: rekapSapuLobang }) {
  const datasetSisaLubang = {
    label: 'Sisa Lubang',
    data: rekapSapuLobang.sisa.map((elem) => elem.jumlah),
    backgroundColor: '#E53935',
  }
  const datasetLubangDirencanakan = {
    label: 'Lubang Yang Direncanakan',
    data: rekapSapuLobang.perencanaan.map((elem) => elem.jumlah),
    backgroundColor: '#1E88E5',
  }
  const datasetLubangSelesai = {
    label: 'Lubang Yang Ditangani',
    data: rekapSapuLobang.ditangani.map((elem) => elem.jumlah),
    backgroundColor: '#16A75C',
  }

  const chartOptions = {
    interaction: {
      mode: 'index',
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
          maxTicksLimit: 6,
        },
        border: {
          dash: [8, 8],
          color: '#212121',
        },
        grid: {
          tickColor: '#212121',
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          color: '#212121',
          tickColor: '#212121',
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 13,
          },
          useBorderRadius: true,
          borderRadius: 2,
          padding: 32,
        },
      },
    },
  }

  return (
    <div className="p-8">
      <Bar
        options={chartOptions}
        data={{
          labels: [
            'UPTD I',
            'UPTD II',
            'UPTD III',
            'UPTD IV',
            'UPTD V',
            'UPTD VI',
          ],
          datasets: [
            datasetSisaLubang,
            datasetLubangDirencanakan,
            datasetLubangSelesai,
          ],
        }}
      />
    </div>
  )
}

export default function SapuLobangChart() {
  const rekapSapuLobangState = useSelector(
    (state) => state.dashboard.rekap.sapuLobang
  )

  const { width } = useWindowDimensions()

  const minHeightContainer = useMemo(() => {
    if (width > 1024) {
      return '500px'
    } else {
      return `300px`
    }
  }, [width, width])

  const showRekapSapuLobangChart = () => {
    if (rekapSapuLobangState.isLoading) {
      return <SkeletonBarChart width={1200} />
    }

    if (!isEmptyOrSpaces(rekapSapuLobangState.error)) {
      return <div>rekapSapuLobangState.error</div>
    } else {
      return <Chart data={rekapSapuLobangState.data} />
    }
  }

  return (
    <div
      className="min-w-[800px]"
      style={{
        minHeight: minHeightContainer,
      }}
    >
      {showRekapSapuLobangChart()}
    </div>
  )
}
