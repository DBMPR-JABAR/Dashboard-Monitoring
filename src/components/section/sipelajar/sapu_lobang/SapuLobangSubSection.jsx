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
        <div className="text-2xl text-red-800 font-bold font-lato mt-3">
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
        <div className="text-2xl text-blue-800 font-bold font-lato mt-3">
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
        <div className="text-2xl text-green-800 font-bold font-lato mt-3">
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
        <span className="font-bold font-lora text-xl">Sapu Lobang</span>
        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <CardError className="mb-8 lg:mb-0">
            <div className="font-bold font-lato">Total Sisa Lubang</div>
            {showTotalSisaLubang()}
          </CardError>
          <CardInfo className="mb-8 lg:mb-0">
            <div className="font-bold font-lato">
              Total Lubang Yang Direncanakan
            </div>
            {showTotalLubangDirencanakan()}
          </CardInfo>
          <CardSuccess>
            <div className="font-bold font-lato">
              Total Lubang Yang Ditangani
            </div>
            {showTotalLubangDitangani()}
          </CardSuccess>
        </div>
      </div>
      <div className="w-full bg-white mt-8 rounded-lg border border-gray-300">
        <span className="inline-block my-6 mx-8 font-bold font-lora text-xl">
          Chart Sapu Lobang
        </span>
        <div className="border-t border-gray-300 overflow-x-auto">
          <SapuLobangChart />
        </div>
      </div>
    </>
  )
}
