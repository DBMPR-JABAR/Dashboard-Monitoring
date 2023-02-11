import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import Container from '../../container/Container'
import SapuLobangChart from './sapu_lobang/SapuLobangChart'
import CardSuccess from '../../card/CardSuccess'
import CardInfo from '../../card/CardInfo'
import CardError from '../../card/CardError'
import fetchRekapSapuLobang from '../../../state/redux/dashboard/rekap/sapu_lobang/rekapSapuLobangActions'
import SapuLobangSubSection from './sapu_lobang/SapuLobangSubSection'

export default function SipelajarSection() {
  const rekapSapuLobangState = useSelector(
    (state) => state.dashboard.rekap.sapuLobang
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRekapSapuLobang())
  }, [dispatch])

  const showTotalSisaLubang = () => {
    if (rekapSapuLobangState.isLoading) {
      return <Skeleton className="mt-3" height="60%" />
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
      return <Skeleton className="mt-3" height="60%" />
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
      return <Skeleton className="mt-3" height="60%" />
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
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro font-bold text-2xl">
          Sipelajar
        </span>
        <span className="block font-intro text-center mt-3">
          Sistem Pemeliharaan Jalan dan Jembatan Jawa Barat
        </span>
      </div>
      <SapuLobangSubSection />
    </Container>
  )
}
