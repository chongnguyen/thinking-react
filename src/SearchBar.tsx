type Props = {
  value: string
  isInstock: boolean
  handleSearch: (value: string) => void
  handleFilterInstock: (value: boolean) => void
}
export const SearchBar = ({
  value,
  isInstock,
  handleFilterInstock,
  handleSearch,
}: Props) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          className=""
          placeholder="Search products...."
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        />
      </div>
      <div className="flex gap-2 items-center mt-2 mb-4">
        <input
          type="checkbox"
          id="checkbox"
          checked={isInstock}
          onChange={() => handleFilterInstock(!isInstock)}
        />
        <label htmlFor="checkbox" className="">
          Only show products in stock
        </label>
      </div>
    </div>
  )
}
