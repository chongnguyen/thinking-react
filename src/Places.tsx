import { places } from './data.ts'
import { useState } from 'react'

type TPlace = {
  id: number
  title: string
  parent: number | null
}
const Place = (props: {
  listPlaces: TPlace[]
  place: TPlace
  handleComplete: (placeId: number) => void
}) => {
  const { listPlaces, place } = props
  const children = listPlaces.filter((p) => p.parent === place.id)
  return (
    <>
      <li>
        {place.title}
        <button
          onClick={() => props.handleComplete(place.id)}
          className="border ml-4 text-white bg-blue-500"
        >
          Completed
        </button>
      </li>
      {!!children.length && (
        <ol>
          {children.map((p) => {
            return (
              <Place
                key={p.id}
                listPlaces={listPlaces}
                place={p}
                handleComplete={props.handleComplete}
              />
            )
          })}
        </ol>
      )}
    </>
  )
}

export const ListPlaces = () => {
  const [locations, setLocations] = useState(places)

  const rootPlaces = locations.filter((place) => place.parent == null)

  function handleComplete(placeId: number) {
    const nextPlaces = locations
      .filter((place) => place.parent !== placeId)
      .filter((place) => place.id !== placeId)

    setLocations(nextPlaces)
  }

  return (
    <ol>
      {rootPlaces.map((place) => {
        return (
          <Place
            listPlaces={locations}
            place={place}
            key={place.id}
            handleComplete={handleComplete}
          />
        )
      })}
    </ol>
  )
}
