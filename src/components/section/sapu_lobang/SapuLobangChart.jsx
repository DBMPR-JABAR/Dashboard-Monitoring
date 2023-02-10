import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

import axiosClient from '../../../services/axiosClient'

const testData = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
]

export default function SapuLobangChart() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getSapuLobangData = async () => {
      try {
        setIsLoading(true)
        const response = await axiosClient.get('/sapu-lubang/rekap-dashboard')
        console.log(response.data)
        setData(response.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
        setError(err)
      }
    }

    getSapuLobangData()
  }, [])

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <Bar
      width={null}
      height={null}
      options={{
        responsive: true,
      }}
      data={{
        labels: data.data.sisa.map((elem) => elem.groupId),
        datasets: [
          {
            label: 'Sisa Lubang',
            data: data.data.sisa.map((elem) => elem.jumlah),
          },
          {
            label: 'Lubang Yang Direncanakan Untuk Ditangani',
            data: data.data.perencanaan.map((elem) => elem.jumlah),
          },
          {
            label: 'Lubang Yang Sudah Ditangani',
            data: data.data.ditangani.map((elem) => elem.jumlah),
          },
        ],
      }}
    />
  )
}
