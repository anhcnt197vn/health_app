import Head from "next/head";
import { HomeModule } from "../src/modules/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Health home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeModule />
    </>
  );
}
