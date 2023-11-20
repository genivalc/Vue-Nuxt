export const getRandomVerse = async (version: string) => {
  try {
    const response = await fetch(`http://www.abibliadigital.com.br/api/verses/${version}/random`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching getRandomVerse:', error)
    throw error
  }
}
