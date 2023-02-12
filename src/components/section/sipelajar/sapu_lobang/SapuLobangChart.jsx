import { Bar } from 'react-chartjs-2'

import { useSelector } from 'react-redux'
import isEmptyOrSpaces from '../../../../helper/stringUtils'
import LoadingSpinnerWithText from '../../../loading/spinner/LoadingSpinnerWithText'

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
    <div className="flex justify-center min-w-[800px] aspect-[2/1] p-8">
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

  const showRekapSapuLobangChart = () => {
    if (rekapSapuLobangState.isLoading) {
      return <LoadingSpinnerWithText />
    }

    if (!isEmptyOrSpaces(rekapSapuLobangState.error)) {
      return <div>{rekapSapuLobangState.error}</div>
    } else {
      return <Chart data={rekapSapuLobangState.data} />
    }
  }

  return showRekapSapuLobangChart()
}
