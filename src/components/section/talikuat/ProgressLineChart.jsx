import { Line } from 'react-chartjs-2'

const chartOptions = {
  interaction: {
    mode: 'index',
  },
  scales: {
    y: {
      max: 100,
      beginAtZero: true,
      ticks: {
        stepSize: 10,
        maxTicksLimit: 9,
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

export default function ProgressLineChart({ paketPekerjaan }) {
  const rencanaDataset = {
    label: 'Rencana Pekerjaan',
    data: paketPekerjaan.laporan_konsultan.map((lap) =>
      parseFloat(lap.rencana)
    ),
    borderColor: '#1E88E5',
  }

  const realisasiDataset = {
    label: 'Realisasi Pekerjaan',
    data: paketPekerjaan.laporan_konsultan.map((lap) =>
      parseFloat(lap.realisasi)
    ),
    borderColor: '#FFC800',
  }

  const data = {
    labels: paketPekerjaan.laporan_konsultan.map(
      (lap, idx) => `Minggu Ke-${idx}`
    ),
    datasets: [rencanaDataset, realisasiDataset],
  }

  return (
    <div className="relative flex aspect-[2/1] min-w-[1000px] justify-center p-8">
      <Line data={data} options={chartOptions} />
    </div>
  )
}
