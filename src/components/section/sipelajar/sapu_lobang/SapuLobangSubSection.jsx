import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import fetchRekapSapuLobang from '../../../../state/redux/dashboard/rekap/sapu_lobang/rekapSapuLobangActions'
import CardError from '../../../card/CardError'
import CardInfo from '../../../card/CardInfo'
import CardSuccess from '../../../card/CardSuccess'
import SapuLobangChart from './SapuLobangChart'

export default function SapuLobangSubSection() {
  const rekapSapuLobangState = useSelector(
    (state) => state.dashboard.rekap.sapuLobang
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRekapSapuLobang())
  }, [dispatch])

  const showTotalSisaLubang = () => {
    if (rekapSapuLobangState.isLoading) {
      return (
        <Skeleton
          className="mt-3"
          height="60%"
          baseColor="#EF5350"
          highlightColor="#FFCDD2"
        />
      )
    } else {
      return (
        <div className="mt-3 font-lato text-2xl font-bold text-red-800">
          {rekapSapuLobangState.data.sisa.reduce(
            (total, obj) => total + obj.jumlah,
            0
          )}
        </div>
      )
    }
  }

  const showTotalLubangDirencanakan = () => {
    if (rekapSapuLobangState.isLoading) {
      return (
        <Skeleton
          className="mt-3"
          height="60%"
          baseColor="#42A5F5"
          highlightColor="#BBDEFB"
        />
      )
    } else {
      return (
        <div className="mt-3 font-lato text-2xl font-bold text-blue-800">
          {rekapSapuLobangState.data.perencanaan.reduce(
            (total, obj) => total + obj.jumlah,
            0
          )}
        </div>
      )
    }
  }

  const showTotalLubangDitangani = () => {
    if (rekapSapuLobangState.isLoading) {
      return (
        <Skeleton
          className="mt-3"
          height="60%"
          baseColor="#4DC27E"
          highlightColor="#C3E9D0"
        />
      )
    } else {
      return (
        <div className="mt-3 font-lato text-2xl font-bold text-green-800">
          {rekapSapuLobangState.data.ditangani.reduce(
            (total, obj) => total + obj.jumlah,
            0
          )}
        </div>
      )
    }
  }

  return (
    <>
      <div className="mt-8">
        <span className="font-lora text-xl font-bold">Sapu Lobang</span>
        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <CardError className="mb-8 lg:mb-0">
            <div className="font-lato font-bold">Total Sisa Lubang</div>
            {showTotalSisaLubang()}
          </CardError>
          <CardInfo className="mb-8 lg:mb-0">
            <div className="font-lato font-bold">
              Total Lubang Yang Direncanakan
            </div>
            {showTotalLubangDirencanakan()}
          </CardInfo>
          <CardSuccess>
            <div className="font-lato font-bold">
              Total Lubang Yang Ditangani
            </div>
            {showTotalLubangDitangani()}
          </CardSuccess>
        </div>
      </div>
      <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white">
        <span className="my-6 mx-8 inline-block font-lora text-xl font-bold">
          Chart Sapu Lobang
        </span>
        <div className="overflow-x-auto border-t border-gray-300">
          <SapuLobangChart />
        </div>
      </div>
    </>
  )
}
