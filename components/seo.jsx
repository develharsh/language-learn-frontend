import Head from "next/head";
const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link
        rel="icon"
        href="https://media-exp1.licdn.com/dms/image/C4D03AQEGLgrAjJAXxA/profile-displayphoto-shrink_800_800/0/1662497414233?e=1668643200&amp;v=beta&amp;t=CZ10RzvMqinH_Rb8iRbdP61jGzzFTyStisCSQyi7Wuo"
      />
      <link
        rel="shortcut icon"
        href="https://media-exp1.licdn.com/dms/image/C4D03AQEGLgrAjJAXxA/profile-displayphoto-shrink_800_800/0/1662497414233?e=1668643200&amp;v=beta&amp;t=CZ10RzvMqinH_Rb8iRbdP61jGzzFTyStisCSQyi7Wuo"
        type="image/x-icon"
      />
      {/* <meta name="theme-color" content="purple" /> */}
      <link rel="canonical" href="https://www.harshvsingh.me" />
      <meta property="og:url" content="https://www.harshvsingh.me" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://media-exp1.licdn.com/dms/image/C4D03AQEGLgrAjJAXxA/profile-displayphoto-shrink_800_800/0/1662497414233?e=1668643200&amp;v=beta&amp;t=CZ10RzvMqinH_Rb8iRbdP61jGzzFTyStisCSQyi7Wuo"
      />
      <meta
        name="description"
        content="I am Harsh, and currently working as Full Stack Developer. This is my
          personal homepage. I love exploring, learning &amp; talking about
          markets, economy, finance, consumer behaviour, investments, tech,
          startups and much more"
      />
      <meta
        property="og:description"
        name="description"
        content="I am Harsh, and currently working as Full Stack Developer. This is my
          personal homepage. I love exploring, learning &amp; talking about
          markets, economy, finance, consumer behaviour, investments, tech,
          startups and much more"
      />
      <meta name="lang" content="en" />
      <meta name="keywords" content="Harshvardhan Singh, Blogs, Musing" />
      <meta
        name="google-site-verification"
        content="eFVLIiMdXuJDGWylPTLGCunY35ZXVD2iz5LnG_Ns-RI"
      />
    </Head>
  );
};
export default Seo;
