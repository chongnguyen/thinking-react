import { ReactNode, useContext } from 'react'
import { LevelContext } from '../context'

type Props = {
  children?: ReactNode
}
export const Section = ({ children }: Props) => {
  const level = useContext(LevelContext)
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}
