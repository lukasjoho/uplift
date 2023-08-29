const createStore = () => {
  let data: string
  const setData = (nextData: string) => {
    data = nextData
  }
  const getData = () => {
    return data
  }
  return { setData, getData }
}

export const store = createStore()
