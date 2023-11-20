export default function () {
  const differenceDays = ref(0)

  const oldDays = (data: Date) => {
    const dataAtual = new Date().getTime()
    const differenceDaysInSegundos = dataAtual - data.getTime()

    differenceDays.value = Math.floor(differenceDaysInSegundos / (1000 * 60 * 60 * 24))
  }

  return { oldDays, differenceDays }
}
