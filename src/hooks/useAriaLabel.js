import useAppStore from '@/state/store'

export default function useAriaLabel(...ids) {
  const {
    dictionary: { aria = {} }
  } = useAppStore()

  return ids.map((id) => aria[id] || id)
}
