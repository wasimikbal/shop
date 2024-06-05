import { type SchemaTypeDefinition } from 'sanity'
import { product } from './lib/schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
