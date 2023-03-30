import { Container } from "@mui/material";
import Head from "next/head";
import Forms from "../src/components/Form";
import Inputs from "../src/components/Input";
import NavBar from "../src/components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>فرم دهیاری ها</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container maxWidth="xl">
        <Forms />
        <Inputs />
      </Container>
    </div>
  );
}
