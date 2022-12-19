import Head from "next/head";
import { MyRecordModule } from "../src/modules/my-record";

export default function Home() {
  return (
    <>
      <Head>
        <title>My record page</title>
        <meta name="description" content="Health my record page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyRecordModule />
    </>
  );
}
