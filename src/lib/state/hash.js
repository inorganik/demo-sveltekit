// Based on https://github.com/bluwy/svelte-url
import { writable } from 'svelte/store'

export function createHashStore() {
  if (typeof window === 'undefined') {
    const { subscribe } = writable('')
    return { subscribe }
  }

  const hash = writable(window.location.hash)

  function updateHash() {
    hash.set(window.location.hash);
  }
  window.removeEventListener('hashchange', updateHash, true);
  window.addEventListener('hashchange', updateHash, true)

  return hash
}

export default createHashStore()
