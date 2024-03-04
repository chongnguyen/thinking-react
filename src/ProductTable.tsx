import { TProduct } from './type.ts'
import { ProductCategoryRow } from './ProductCategoryRow.tsx'
import { ReactElement, useEffect, useState } from 'react'
import { ProductRow } from './ProductRow.tsx'

type TProductTable = { [key: string]: TProduct[] }
type Props = { products: TProduct[] }

export const ProductTable = ({ products }: Props) => {
  const [obj] = useState({
    counter: 1,
  })
  useEffect(() => {
    console.log('hello fen')
    obj.counter++
  })

  console.log(obj)

  const productsMapped = products.reduce((acc, product) => {
    const { category } = product
    if (!acc[category]) {
      acc[category] = [product]
    } else {
      acc[category].push(product)
    }

    return acc
  }, {} as TProductTable)

  const categories = Object.keys(productsMapped)
  const rows = categories.reduce((acc, category) => {
    const categoryRow = (
      <ProductCategoryRow category={category} key={category} />
    )
    acc.push(categoryRow)

    const productRows = productsMapped[category].map((product) => {
      return (
        <ProductRow product={product} key={product.name + product.category} />
      )
    })

    acc.push(...productRows)

    return acc
  }, [] as ReactElement[])

  return (
    <table>
      <thead>
        <tr>
          <th className="pr-[70px]">Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
