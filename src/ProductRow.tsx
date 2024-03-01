import { TProduct } from './type.ts'

type Props = {
  product: TProduct
}
export const ProductRow = ({ product }: Props) => {
  const { name, price, stocked } = product

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
