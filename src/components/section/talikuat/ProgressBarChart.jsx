import { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

const findLabel = (labels, evt) => {
  let found = false
  let res = null

  if (labels) {
    labels.forEach((l) => {
      l.labels.forEach((label, index) => {
        if (
          evt.x > label.x &&
          evt.x < label.x2 &&
          evt.y > label.y &&
          evt.y < label.y2
        ) {
          res = {
            label: label.label,
            index,
          }
          found = true
        }
      })
    })
  }

  return [found, res]
}

const getLabelHitboxes = (scales) => {
  try {
    return Object.values(scales).map((s) => ({
      scaleId: s.id,
      labels: s._labelItems.map((e, i) => ({
        x: e.options.translation[0] - s._labelSizes.widths[i],
        x2: e.options.translation[0] + s._labelSizes.widths[i] / 2,
        y: e.options.translation[1] - s._labelSizes.heights[i] / 2,
        y2: e.options.translation[1] + s._labelSizes.heights[i] / 2,
        label: e.label,
        index: i,
      })),
    }))
  } catch (e) {
    return null
  }
}

const ticksOnClickPlugin = (onClick) => {
  return {
    id: 'ticksOnClickPlugin',
    afterEvent: (chart, event, opts) => {
      const evt = event.event

      if (evt.type !== 'click') {
        return
      }

      const [found, labelInfo] = findLabel(getLabelHitboxes(chart.scales), evt)

      if (found) {
        onClick(labelInfo)
      }
    },
  }
}

const chartOptions = {
  maintainAspectRatio: false,
  indexAxis: 'y',
  interaction: {
    mode: 'index',
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      border: {
        color: '#212121',
        tickColor: '#212121',
      },
    },
    x: {
      max: 100,
      ticks: {
        stepSize: 25,
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

export default function ProgressBarChart({
  talikuatData,
  handlePaketPekerjaanOnClick,
}) {
  const data = {
    labels: talikuatData.map((paket) => `PW ${paket.id_uptd} - ID ${paket.id}`),
    datasets: [
      {
        label: 'Rencana Pekerjaan',
        data: talikuatData.map((paket) => {
          if (paket.laporan_konsultan.length > 1) {
            return parseFloat(
              paket.laporan_konsultan[paket.laporan_konsultan.length - 1]
                .rencana
            )
          } else {
            return 0
          }
        }),
        backgroundColor: '#1E88E5',
      },
      {
        label: 'Realisasi Pekerjaan',
        data: talikuatData.map((paket) => {
          if (paket.laporan_konsultan.length > 1) {
            return parseFloat(
              paket.laporan_konsultan[paket.laporan_konsultan.length - 1]
                .realisasi
            )
          } else {
            return 0
          }
        }),
        backgroundColor: '#FFC800',
      },
      {
        label: 'Deviasi Pekerjaan',
        data: talikuatData.map((paket) => {
          if (paket.laporan_konsultan.length > 1) {
            return parseFloat(
              paket.laporan_konsultan[paket.laporan_konsultan.length - 1]
                .deviasi
            )
          } else {
            return 0
          }
        }),
        backgroundColor: talikuatData.map((paket) => {
          let deviasi = 0
          if (paket.laporan_konsultan.length > 1) {
            deviasi = parseFloat(
              paket.laporan_konsultan[paket.laporan_konsultan.length - 1]
                .deviasi
            )
          }

          if (deviasi > 0) {
            return '#16A75C'
          } else {
            return '#E53935'
          }
        }),
      },
    ],
  }

  const heightContainer = useMemo(() => {
    if (talikuatData.length > 4) {
      return talikuatData.length * 150
    } else {
      return 500
    }
  }, [talikuatData])

  return (
    <div
      className="relative flex min-w-[500px] justify-center p-8"
      style={{
        height: `${heightContainer}px`,
      }}
    >
      <Bar
        options={chartOptions}
        data={data}
        plugins={[
          ticksOnClickPlugin((labelInfo) => {
            handlePaketPekerjaanOnClick(talikuatData[labelInfo.index])
          }),
        ]}
      />
    </div>
  )
}
