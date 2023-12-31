export const trackSelector = (store) => store.player

export const isPlayingTrackSelector = (store) => store.player.playingTrack

export const shuffledSelector = (store) => store.player.shuffled

export const shuffledPlaylistSelector = (store) => store.player.shufflePlaylist

export const allTracksSelector = (store) => store.player.tracks

export const currentTrackSelector = (store) => store.player.track

export const authSelector = (store) => store.auth

export const accessSelector = (store) => store.auth.access

export const refreshSelector = (store) => store.auth.refresh

export const currentPlaylistSelector = (store) => store.player.currentPlaylist

export const activePlaylistSelector = (store) => store.player.activePlaylist
