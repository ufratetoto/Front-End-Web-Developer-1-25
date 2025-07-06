const BASE_URL = 'https://zelda.fanapis.com/api/characters'

async function retriveCharacters() {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const { data }= await response.json()
    return data
  } catch (error) {
    console.error('Error fetching characters:', error)
    return []
  }
}

export { retriveCharacters }

// Example usage:
// const  characters = await retriveCharacters()
