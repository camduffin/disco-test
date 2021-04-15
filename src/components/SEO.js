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
        titleTemplate,
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
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
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
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                url: 'https://production.d203rjsqyj89or.amplifyapp.com/',
                name: 'Our Day',
                contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-613-737-3378',
                contactType: 'Support',
                },
                image: 'https://www.pexels.com/photo/gold-colored-diamond-engagement-ring-998521/',
                telephone: '+1-613-737-3378',
                address: {
                    '@type': 'PostalAddress',
                    'streetAddress': '150 C Terence Matthews Crescent',
                    'addressLocality': 'Ottawa',
                    'addressRegion': 'ON',
                    'postalCode': 'K2M1X4',
                    'addressCountry': 'CA'
                },
                priceRange: '$$$',
            })}
            </script>
        </Helmet>

    )

}

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
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

