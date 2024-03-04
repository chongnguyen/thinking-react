import { TProduct } from './type.ts'

export const products: Array<TProduct> = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]

export const places = [
  { id: 0, title: 'Chau A', parent: null },
  { id: 1, title: 'Viet Nam', parent: 0 },
  { id: 2, title: 'Han Quoc', parent: 0 },
  { id: 3, title: 'Trung Quoc', parent: 0 },
  { id: 4, title: 'Nhat Ban', parent: 0 },
  { id: 5, title: 'Thai Lan', parent: 0 },
  { id: 6, title: 'Sapa', parent: 1 },
  { id: 7, title: 'Soul', parent: 2 },
  { id: 8, title: 'Da Lat', parent: 1 },
  { id: 9, title: 'Tokyo', parent: 0 },
  { id: 10, title: 'Duong Chau', parent: 3 },
  { id: 11, title: 'Chau Au', parent: null },
  { id: 12, title: 'Ha Lan', parent: 11 },
  { id: 13, title: 'Hungary', parent: 11 },
]
