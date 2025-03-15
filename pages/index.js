import Head from "next/head";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Repos from "./components/Repos";
import Technologies from "./components/Tech";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <>
    <Head>
      <title>heythendra - full-stack developer</title>
      <meta name="description" content="I'm Hasan Erdem, a full-stack developer, a first-year university student. I've been working with software for about 7 years." />
      <meta property="og:title" content="heythendra - full-stack developer"/>
      <meta property="og:description" content="I'm Hasan Erdem, a full-stack developer, a first-year university student. I've been working with software for about 7 years."/>
      <meta property="og:url" content="https://benthendra.xyz/"/>
    </Head>
      <body>
          <Navbar />
          <Header/>
          <Repos/>
          <Technologies/>
          <Footer/>
      </body>
    </>
  )
  
}