import { ProductTable } from './ProductTable.tsx'
import { SearchBar } from './SearchBar.tsx'
import { products } from './data.ts'
import { useState } from 'react'

export const FilterableProductTable = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isInstock, setIsInstock] = useState(false)

  let productFiltered = products

  if (isInstock) {
    productFiltered = productFiltered.filter((product) => product.stocked)
  }
  if (searchValue) {
    productFiltered = productFiltered.filter((product) => {
      return product.name.includes(searchValue)
    })
  }

  return (
    <div>
      <SearchBar
        value={searchValue}
        isInstock={isInstock}
        handleSearch={setSearchValue}
        handleFilterInstock={setIsInstock}
      />
      <ProductTable products={productFiltered} />
    </div>
  )
}
