import Container from '../../container/Container'
import MainOverviewCard from './MainOverviewCard'
import SubOverviewCard from './SubOverviewCard'

export default function OverviewSection() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MainOverviewCard />
        <SubOverviewCard
          uptdName="UPTD I"
          panjangRuas="395,587 KM"
          jumlahRuas="44"
          jumlahJembatan="135"
        />
        <SubOverviewCard
          uptdName="UPTD II"
          panjangRuas="347,471 KM"
          jumlahRuas="32"
          jumlahJembatan="145"
        />
        <SubOverviewCard
          uptdName="UPTD III"
          panjangRuas="567,027 KM"
          jumlahRuas="99"
          jumlahJembatan="260"
        />
        <SubOverviewCard
          uptdName="UPTD IV"
          panjangRuas="401,832 KM"
          jumlahRuas="34"
          jumlahJembatan="95"
        />
        <SubOverviewCard
          uptdName="UPTD V"
          panjangRuas="286,428 KM"
          jumlahRuas="36"
          jumlahJembatan="83"
        />
        <SubOverviewCard
          uptdName="UPTD VI"
          panjangRuas="362,235 KM"
          jumlahRuas="52"
          jumlahJembatan="112"
        />
      </div>
    </Container>
  )
}
