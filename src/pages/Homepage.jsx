import React from "react";
import { Helmet } from "react-helmet-async";

import "./../style/home.scss";
import Homehero from "../section/homepage/Hero";
import WhyUs from "../section/homepage/Why";
import HomeServices from "../section/homepage/Services";
import Chooseus from "../section/homepage/Chooseus";
import HomeContact from "../section/homepage/Contact";

const Homepage = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Wekee — Moving, Errands & Local Help in Rwanda</title>
        <meta
          name="description"
          content="Wekee connects Rwandans with reliable helpers for moving, errands, shopping, and more. Serving Kigali, Musanze, Huye — fast, safe, local."
        />
        <meta
          name="keywords"
          content="movers in rwanda, errands in kigali, task helpers rwanda, Wekee Rwanda, moving company kigali, trusted local partner, delivery services, relocation services, rwanda moving help, student errands rwanda, moves in rwanda, movers in kigali, abantu bagufasha kwimuka, abaranga, real estate agents in rwanda, real estate services, wekee rwanda, isingizwe munezero victor, iwmvictor, influencer marketplace in rwanda, paul kagame, rwandan genocide 1994 against Tutsi, popular in Rwanda, Ibibanza amazu imodoka zikodeshwa nizigurishwa mu Rwanda"
        />
        <link rel="canonical" href="https://wekee.vercel.app/" />
        <meta name="author" content="IwmVictor" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
        <meta
          property="og:title"
          content="Wekee — Moving & Local Help in Rwanda"
        />
        <meta
          property="og:description"
          content="Need help with moving, errands, or deliveries? Wekee connects you with reliable task helpers across Rwanda. Trusted, fast and professional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wekee.vercel.app/" />
        <meta
          property="og:image"
          content="https://wekee.vercel.app/images/brand/favicon.svg"
        />
        <meta property="og:site_name" content="Wekee Rwanda" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wekee — Moving & Errands in Rwanda"
        />
        <meta
          name="twitter:description"
          content="Wekee is your reliable platform for moving help, local deliveries, and everyday task support in Rwanda. Safe. Local. Efficient."
        />
        <meta
          name="twitter:image"
          content="https://wekee.vercel.app/images/brand/favicon.svg"
        />
        <meta name="twitter:site" content="@wekeerwanda" />
      </Helmet>

      <Helmet>
        {/*  Google tag (gtag.js)  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P5G7TDEK56"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P5G7TDEK56');
            `}
        </script>
      </Helmet>

      <div className="homepage">
        <Homehero />
        <WhyUs />
        <HomeServices />
        <Chooseus />
        <HomeContact />
      </div>
    </>
  );
};

export default Homepage;
