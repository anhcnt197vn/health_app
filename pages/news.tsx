import Head from "next/head";
import { NewsModule } from "../src/modules/news";

export default function News() {
  return (
    <>
      <Head>
        <title>News page</title>
        <meta name="description" content="Health news page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsModule />
    </>
  );
}
