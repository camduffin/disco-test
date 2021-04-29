import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({title, description, image}) => {

    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }

    return (
        <Helmet title={seo.title}>
            
            <meta name="description" content={seo.description} />

            <meta name="keywords" content="wedding, big event, celebration, recognition, achievement, graduation, birthday, anniversary, appreciation, party, vows, livestream, webcast, broadcast, milestone, event, speech, live address, formal, wedding webcast, wedding livestream, venue, wedding venue, livestream venue, webcast venue, videographers, party webcast"/>

            {seo.url && <meta property="og:url" content={seo.url} />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && ( <meta property="og:description" content={seo.description} /> )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && ( <meta name="twitter:creator" content={twitterUsername} />)}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (<meta name="twitter:description" content={seo.description} />)}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "url": "https://www.ourday.ca/",
                "name": "Our Day",
                "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-613-737-3378",
                "contactType": "Support",
                },
                "image": "/beach-altar.jpg",
                "logo": "/button.png",
                "telephone": "+1-613-737-3378",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "150 C Terence Matthews Crescent",
                    "addressLocality": "Ottawa",
                    "addressRegion": "ON",
                    "postalCode": "K2M1X4",
                    "addressCountry": "CA"
                },
                "priceRange": "$$$",
                "email": "mailto:info@ourday.ca",
                "description": "Event livestreaming and webcasting for all occasions.  We are here to help you turn your day into ourday!",
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "45.2874318",
                    "longitude": "-75.8734515"
                },
                "sameAs": ["https://www.facebook.com/isilivecanada/", "https://twitter.com/isilive_canada?lang=en", "https://www.instagram.com/isilivecanada/?hl=en", "https://www.linkedin.com/company/isilive/?originalSubdomain=ca"],
                "hasMap": "https://www.google.com/maps/place/iSiLIVE+%7C+Professional+Webcasting/@45.2874318,-75.8734515,15z/data=!4m2!3m1!1s0x0:0x7909bce2e18e7dd8?sa=X&ved=2ahUKEwiy_quU_aPwAhULP6wKHey8D70Q_BIwFXoECFQQBQ"
            })}
            </script>

            {/* titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null} */}
            
        </Helmet>

    )

}

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    lang: 'en'
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
                twitterUsername
            }
        }
    }
`

