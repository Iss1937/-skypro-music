export async function getTracks() {
  const baseURL = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  const tracks = await baseURL.json()
  if (!baseURL.ok) {
    throw new Error('Ошибка сервера')
  }
  return tracks
}

export async function getTracksByID(trackId) {
  const baseURL = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${trackId}`,
  )
  const track = await baseURL.json()
  if (!baseURL.ok) {
    throw new Error('Ошибка сервера')
  }
  return track
}
