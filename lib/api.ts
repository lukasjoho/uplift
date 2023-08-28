export const createExperiment = async (values: any) => {
  const res = await fetch("/api/experiments", {
    body: JSON.stringify(values),
    method: "POST",
  })
  return res
}

export const updateExperiment = async (values: any) => {
  const res = await fetch("/api/experiments", {
    body: JSON.stringify(values),
    method: "PUT",
  })
  return res
}
