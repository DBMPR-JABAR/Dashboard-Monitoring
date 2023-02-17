import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function ProgressLineChart({ paketPekerjaan }) {
  const rencanaDataset = {
    label: 'Rencana Pekerjaan',
    data: paketPekerjaan.rencana.map((item) =>
      parseFloat(parseFloat(item.nilai).toFixed(2))
    ),
    borderColor: '#1E88E5',
    backgroundColor: '#90CAF9',
    datalabels: {
      color: '#0D47A1',
      formatter: (value, context) => {
        if (context.dataIndex === paketPekerjaan.rencana.length - 1) {
          if (!Number.isInteger(value)) {
            return `${value.toFixed(2)}%`
          }
          return `${value}%`
        }
        return ''
      },
    },
  }

  const realisasiDataset = {
    label: 'Realisasi Pekerjaan',
    data: paketPekerjaan.realisasi.map((item) =>
      parseFloat(parseFloat(item.nilai).toFixed(2))
    ),
    borderColor: '#FFC900',
    backgroundColor: '#FFE483',
    datalabels: {
      color: '#FF7500',
      formatter: (value, context) => {
        if (context.dataIndex === paketPekerjaan.realisasi.length - 1) {
          if (!Number.isInteger(value)) {
            return `${value.toFixed(2)}%`
          }
          return `${value}%`
        }
        return ''
      },
    },
  }

  const chartOptions = {
    interaction: {
      mode: 'index',
    },
    maintainAspectRatio: false,
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
      datalabels: {
        anchor: 'center',
        textStrokeWidth: 2,
        textStrokeColor: '#ffffff',
      },
    },
  }

  const data = {
    labels: paketPekerjaan.rencana.map((item) => `Minggu Ke-${item.minggu}`),
    datasets: [rencanaDataset, realisasiDataset],
  }

  return (
    <div className="relative flex aspect-[2/1] min-w-[800px] justify-center p-8">
      <Line data={data} options={chartOptions} plugins={[ChartDataLabels]} />
    </div>
  )
}
