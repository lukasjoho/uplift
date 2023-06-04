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
