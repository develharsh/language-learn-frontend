import Head from "next/head";
import Script from "next/script";
const Seo = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <link rel="icon" href="/assets/icon.png" />
        <link rel="shortcut icon" href="/assets/icon.png" type="image/x-icon" />
        {/* <meta name="theme-color" content="purple" /> */}
        {/* <link rel="canonical" href="https://www.speaklike.pro" /> */}
        {/* <meta property="og:url" content="https://www.speaklike.pro" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/icon.png" />
        <meta
          property="og:description"
          name="description"
          content="SpeakLikePro is an leading online English language learning platform, where anyone can learn english in just 30 days."
        />
        <meta name="lang" content="en" />
        <meta name="keywords" content="SpeakLikePro, Learn English" />
        {/* <meta
          name="google-site-verification"
          content="OgShE7U8t-6p_xQPo7x8UxS-XQqcoC4IPfm86y-6cr0"
        /> */}
      </Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TXE0CJNKWC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TXE0CJNKWC');
        `}
      </Script> */}
    </>
  );
};
export default Seo;
