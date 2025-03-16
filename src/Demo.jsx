// import { useViewportSize } from '@mantine/hooks'
import { useViewportSize } from './hooks/useViewportSize'

import './App.css'

export function Demo() {
  const { height, width } = useViewportSize()

  return (
    <>
      Width: {width}, height: {height}
    </>
  )
}
