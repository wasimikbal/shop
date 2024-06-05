
import { client } from '@/sanity/lib/client';
import {groq} from 'next-sanity'
import { HeroBanner } from './components';

export default async function Home() {

  const products = await client.fetch(groq `*[_type == "product"]`)
  console.log(products)

  return (
    <>
    <HeroBanner/>
    </>
  );
}
