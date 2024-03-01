type Props = {
  category: string
}

export const ProductCategoryRow = ({ category }: Props) => {
  return (
    <tr className="font-bold text-center">
      <td colSpan={2}>{category}</td>
    </tr>
  )
}
