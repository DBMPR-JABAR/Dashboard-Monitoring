import { Bar } from 'react-chartjs-2'
import { useEffect, useRef } from 'react'

export default function ChartPage() {
  const chartRef = useRef(null)
  const chartContainerRef = useRef(null)

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dataset #1',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 20, 81, 56, 55, 40],
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: 'rgba(255,99,132,0.2)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  useEffect(() => {}, [])

  return (
    <div
      className="relative max-w-[800px] max-h-[300px]"
      ref={chartContainerRef}
    >
      <Bar data={data} options={options} ref={chartRef} />
      <button type="button">Test</button>
    </div>
  )
}
