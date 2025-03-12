import { useViewportSize } from '@mantine/hooks'

import './App.css'

export function Demo() {
  const { height, width } = useViewportSize()

  return (
    <>
      Width: {width}, height: {height}
    </>
  )
}
