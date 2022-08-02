import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import HomeList from "../components/Home/HomeList";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>First Sample Website</title>
        <meta name="description" content="This is my first sample website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeList></HomeList>
    </Fragment>
  );
}
