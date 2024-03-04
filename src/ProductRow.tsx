import { TProduct } from './type.ts'

type Props = {
  product: TProduct
}
export const ProductRow = ({ product }: Props) => {
  const { name, price, stocked } = product

  // const [index, setIndex] = useState(0)
  // const quotes = [1, 2, 3, 4]

  // const next = () => {
  //   setIndex(index + 1) % quotes.length
  // }
  // const previous = () => {
  //   setIndex((index + quotes.length - 1) % quotes.length)
  // }

  return (
    <tr className={`${!stocked && 'text-red-500'}`}>
      <td className="">
        <p className="">{name}</p>
      </td>
      <td className="">
        <p className="">{price}</p>
      </td>
    </tr>
  )
}
