import Script from "next/script";
import Head from "next/head";

const TemplateLayout = ({children}) => {

  return(
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
            name="msapplication-TileImage"
            content="/img/favicon/mstile-144x144.png"
        />
        <meta
            name="msapplication-square70x70logo"
            content="/img/favicon/mstile-70x70.png"
        />
        <meta
            name="msapplication-square150x150logo"
            content="/img/favicon/mstile-150x150.png"
        />
        <meta
            name="msapplication-wide310x150logo"
            content="/img/favicon/mstile-310x150.png"
        />
        <meta
            name="msapplication-square310x310logo"
            content="/img/favicon/mstile-310x310.png"
        />
        <meta
            name="format-detection"
            content="telephone=no, date=no, email=no, address=no"
        />
        <Script src="/js/vendor/jquery-3.5.1.min.js"  strategy="afterInteractive"/>
        <Script src="/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive"/>
        <Script src="/js/vendor/OverlayScrollbars.min.js" strategy="afterInteractive"/>
        <Script src="/js/vendor/autoComplete.min.js" strategy="afterInteractive"/>
        <Script src="/js/vendor/clamp.min.js" strategy="afterInteractive"/>
      </Head>

      <div className="template-container">
        {children}
      </div>
    </>
  );
};

export default TemplateLayout;