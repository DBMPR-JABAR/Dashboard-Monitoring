import moment from 'moment'
import * as NumberUtils from '../number_utils/number_utils'

export function formatData(listPaket) {
  return listPaket
    .filter((paket) => {
      return (
        paket.data_umum_detail.jadual !== undefined &&
        paket.data_umum_detail.jadual !== null &&
        paket.data_umum_detail.jadual.length > 1
      )
    })
    .map((paket) => {
      if (!paket.data_umum_id || NumberUtils.isNumber(paket.data_umum_id)) {
        paket.data_umum_id = `PW-${paket.id_uptd}-${paket.id}`
      }

      if (moment(paket.tgl_kontrak).year() < moment().year()) {
        if (paket.id)
          if (!paket.rencana || paket.realisasi < 100) {
            paket.rencana = 100
            paket.realisasi = 100
            paket.deviasi = 0
          }
      }
      return paket
    })
}

export function getProgress(paket) {
  const currentWeek =
    Math.floor(moment().diff(moment(paket.data_umum.tgl_spmk), 'days') / 7) + 1

  let rencana = 0
  if (paket.rencana.length >= currentWeek) {
    rencana = parseFloat(paket.rencana[currentWeek - 1].nilai)
  } else if (paket.rencana.length > 0) {
    rencana = parseFloat(paket.rencana[paket.rencana.length - 1].nilai)
  }

  let realisasi = 0
  if (paket.realisasi.length >= currentWeek) {
    realisasi = parseFloat(paket.realisasi[currentWeek - 1].nilai)
  } else if (paket.realisasi.length > 0) {
    realisasi = parseFloat(paket.realisasi[paket.realisasi.length - 1].nilai)
  }

  return {
    rencana,
    realisasi,
    deviasi: realisasi - rencana,
  }
}

export function getRencanaMingguan(paket) {
  const divisibleWeek = Math.floor(paket.detail_with_jadual.lama_waktu / 7)
  const remainderDays = paket.detail_with_jadual.lama_waktu % 7
  const weeklyPlans = []

  let totalRencana = 0
  let startDayOfWeek = moment(paket.tgl_spmk)
  for (let i = 0; i < divisibleWeek; i++) {
    const endDayOfWeek = moment(startDayOfWeek).add('6', 'days')

    let rencana = 0
    paket.detail_with_jadual.jadual_detail.forEach((jadual) => {
      jadual.detail.forEach((detailJadual) => {
        if (
          moment(detailJadual.tanggal).isBetween(
            startDayOfWeek,
            endDayOfWeek,
            undefined,
            '[]'
          )
        ) {
          rencana += parseFloat(detailJadual.nilai)
        }
      })
    })

    totalRencana += rencana

    weeklyPlans.push({
      week: i + 1,
      startDayOfWeek: startDayOfWeek.format('YYYY-MM-DD'),
      endDayOfWeek: endDayOfWeek.format('YYYY-MM-DD'),
      rencana: totalRencana,
    })

    startDayOfWeek = moment(endDayOfWeek).add(1, 'days')
  }

  if (remainderDays > 0) {
    const endDayOfWeek = moment(startDayOfWeek).add(remainderDays, 'days')

    let rencana = 0
    paket.detail_with_jadual.jadual_detail.forEach((jadual) => {
      jadual.detail.forEach((detailJadual) => {
        if (
          moment(detailJadual.tanggal).isBetween(
            startDayOfWeek,
            endDayOfWeek,
            undefined,
            '[]'
          )
        ) {
          rencana += parseFloat(detailJadual.nilai)
        }
      })
    })

    totalRencana += rencana

    weeklyPlans.push({
      week: divisibleWeek + 1,
      startDayOfWeek: startDayOfWeek.format('YYYY-MM-DD'),
      endDayOfWeek: endDayOfWeek.format('YYYY-MM-DD'),
      rencana: totalRencana,
    })
  }

  return weeklyPlans
}

export function getRealisasiMingguan(paket) {
  return paket.laporan_uptd_aproved
    .map((laporan) => ({
      week: parseInt(laporan.priode.substring(0, 1), 10),
      startDayOfWeek: laporan.tgl_start,
      endDayOfWeek: laporan.tgl_end,
      realisasi: laporan.realisasi,
    }))
    .sort((a, b) => (a.week < b.week ? -1 : 1))
}
