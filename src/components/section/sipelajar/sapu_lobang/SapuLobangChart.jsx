import { Bar } from 'react-chartjs-2'

import { useSelector } from 'react-redux'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import isEmptyOrSpaces from '../../../../helper/stringUtils'
import LoadingSpinnerWithText from '../../../loading/spinner/LoadingSpinnerWithText'

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
    datalabels: {
      anchor: 'center',
      textStrokeWidth: 2,
      textStrokeColor: '#ffffff',
    },
  },
}

function RekapBarChart({ data: rekapSapuLobang }) {
  const datasetSisaLubang = {
    label: 'Sisa Lubang',
    data: rekapSapuLobang.sisa.map((elem) => elem.jumlah),
    backgroundColor: '#E53935',
    datalabels: {
      color: '#B71B1C',
    },
  }

  const datasetLubangDirencanakan = {
    label: 'Lubang Yang Direncanakan',
    data: rekapSapuLobang.perencanaan.map((elem) => elem.jumlah),
    backgroundColor: '#1E88E5',
    datalabels: {
      color: '#0D47A1',
    },
  }

  const datasetLubangSelesai = {
    label: 'Lubang Yang Ditangani',
    data: rekapSapuLobang.ditangani.map((elem) => elem.jumlah),
    backgroundColor: '#16A75C',
    datalabels: {
      color: '#006430',
    },
  }

  return (
    <div className="flex aspect-[2/1] min-w-[800px] justify-center p-8">
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
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default function SapuLobangChart() {
  const rekapSapuLobangState = useSelector(
    (state) => state.dashboard.rekap.sapuLobang
  )

  if (rekapSapuLobangState.isLoading) {
    return <LoadingSpinnerWithText />
  }

  if (!isEmptyOrSpaces(rekapSapuLobangState.error)) {
    return <div>{rekapSapuLobangState.error}</div>
  } else {
    return <RekapBarChart data={rekapSapuLobangState.data} />
  }
}
