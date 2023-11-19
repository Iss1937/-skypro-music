export async function getAllTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  const tracks = await response.json()
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  return tracks
}

export async function getTracksByID(trackId) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${trackId}`,
  )
  const track = await response.json()
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  return track
}
