//All sizes are based on the closest tailwind preset to the design. 
//This can be changed if the size of the design needs to be strictly adhered to.
import Head from 'next/head'
import useSWR from 'swr'
import Intro from '../components/intro'
import Products from '../components/products'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {

  const { data, error } = useSWR('/api/products', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log("data", data)


  return (
    <div>
      <Head>
        <title>Dishpatch Frontend Technical Task</title>
        <meta name="description" content="Dishpatch Frontend Technical Task" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className="p-5 py-10 md:p-12 lg:p-16 bg-oat">
        <Intro></Intro>
        <Products products={data}></Products>
      </main>


    </div>
  )
}
