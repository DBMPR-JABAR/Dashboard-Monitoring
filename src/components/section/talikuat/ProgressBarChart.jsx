import { useMemo } from 'react'

import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import * as TalikuatUtils from '../../../helper/talikuat_utils/talikuat_utils'

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
      min: -100,
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
    datalabels: {
      anchor: 'center',
      textStrokeWidth: 2,
      textStrokeColor: '#ffffff',
      formatter: (value, context) => {
        if (!Number.isInteger(value)) {
          return `${value.toFixed(2)}%`
        }
        return `${value}%`
      },
    },
  },
}

export default function ProgressBarChart({
  talikuatData,
  handlePaketPekerjaanOnClick,
}) {
  const data = {
    labels: talikuatData.map((paket) => paket.data_umum.id),
    datasets: [
      {
        label: 'Rencana Pekerjaan',
        data: talikuatData.map((paket) => {
          return TalikuatUtils.getProgress(paket).rencana
        }),
        backgroundColor: '#1E88E5',
        datalabels: {
          color: '#0D47A1',
        },
      },
      {
        label: 'Realisasi Pekerjaan',
        data: talikuatData.map((paket) => {
          return TalikuatUtils.getProgress(paket).realisasi
        }),
        backgroundColor: '#FFB900',
        datalabels: {
          color: '#FF7500',
        },
      },
      {
        label: 'Deviasi Pekerjaan',
        data: talikuatData.map((paket) => {
          return TalikuatUtils.getProgress(paket).deviasi
        }),
        backgroundColor: talikuatData.map((paket) => {
          const progress = TalikuatUtils.getProgress(paket)

          if (progress.deviasi > 0) {
            return '#16A75C'
          } else {
            return '#E53935'
          }
        }),
        datalabels: {
          color: (context) => {
            const index = context.dataIndex
            const value = context.dataset.data[index]
            if (value < 0) {
              return '#B71B1C'
            } else if (value > 0) {
              return '#006430'
            } else {
              return '#000000'
            }
          },
        },
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
      className="relative flex min-w-[800px] justify-center"
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
          ChartDataLabels,
        ]}
      />
    </div>
  )
}
