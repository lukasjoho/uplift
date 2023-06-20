export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.toLocaleString("default", { month: "short" })
  const day = date.getDate()
  return `${month} ${day}, ${year}`
}

export const convertToLowercase = (str: string) => {
  if (!str) {
    return ""
  }
  return str.toLowerCase().replace(/[\s-]+/g, "")
}

export const getDateDiffInDays = (start: string, end: string) => {
  const date1: any = new Date(start)
  const date2: any = new Date(end)
  const diffTime = date2 - date1
  if (diffTime < 0) {
    return 0
  }
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

export function getMonthName(date: any) {
  const options = { month: "long" }
  return date.toLocaleString("en-US", options)
}

export function getDayOfWeek(date: any) {
  const options = { weekday: "long" }
  return date.toLocaleString("en-US", options).slice(0, 3)
}

export function isToday(date: any) {
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Set time to 00:00:00.000

  const inputDate = new Date(date)
  inputDate.setHours(0, 0, 0, 0) // Set time to 00:00:00.000

  return today.getTime() === inputDate.getTime()
}
