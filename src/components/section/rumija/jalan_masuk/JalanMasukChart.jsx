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
        stepSize: 25,
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

function RekapBarChart({ data: rekapRumija }) {
  const datasetPemanfaatan = {
    label: 'Pemanfaatan',
    data: rekapRumija['Jalan Masuk'].map((elem) => elem.pemanfaatan),
    backgroundColor: '#16A75C',
    datalabels: {
      color: '#006430',
    },
  }

  const datasetPelanggaran = {
    label: 'Pelanggaran',
    data: rekapRumija['Jalan Masuk'].map((elem) => elem.pelanggaran),
    backgroundColor: '#E53935',
    datalabels: {
      color: '#B71B1C',
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
          datasets: [datasetPemanfaatan, datasetPelanggaran],
        }}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default function JalanMasukChart() {
  const rekapRumijaState = useSelector((state) => state.dashboard.rekap.rumija)

  if (rekapRumijaState.isLoading) {
    return <LoadingSpinnerWithText />
  }

  if (!isEmptyOrSpaces(rekapRumijaState.error)) {
    return <div>{rekapRumijaState.error}</div>
  } else {
    return <RekapBarChart data={rekapRumijaState.data} />
  }
}
