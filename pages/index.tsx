import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content="Build with Next.js, Tailwind, Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-4xl'>Pokedex</h1>
      </main>
    </div>
  );
}
