import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import msIcon from '../../../common/src/assets/image/ms-icon-144x144.png';
import apple57 from '../../../common/src/assets/image/apple-icon-57x57.png';
import apple60 from '../../../common/src/assets/image/apple-icon-60x60.png';
import apple72 from '../../../common/src/assets/image/apple-icon-72x72.png';

import apple76 from '../../../common/src/assets/image/apple-icon-76x76.png';
import apple114 from '../../../common/src/assets/image/apple-icon-114x114.png';
import apple120 from '../../../common/src/assets/image/apple-icon-120x120.png';
import apple144 from '../../../common/src/assets/image/apple-icon-144x144.png';
import apple152 from '../../../common/src/assets/image/apple-icon-152x152.png';
import apple180 from '../../../common/src/assets/image/apple-icon-180x180.png';

import favicon from '../../../common/src/assets/image/favicon.ico';
import android36 from '../../../common/src/assets/image/android-icon-36x36.png';
import android48 from '../../../common/src/assets/image/android-icon-48x48.png';
import android72 from '../../../common/src/assets/image/android-icon-72x72.png';
import android96 from '../../../common/src/assets/image/android-icon-96x96.png';
import android144 from '../../../common/src/assets/image/android-icon-144x144.png';
import android192 from '../../../common/src/assets/image/android-icon-192x192.png';
import favicon32 from '../../../common/src/assets/image/favicon-32x32.png';
import favicon96 from '../../../common/src/assets/image/favicon-96x96.png';
import favicon16 from '../../../common/src/assets/image/favicon-16x16.png';

function SEO({ description, lang, meta, keywords, title }) {
  const appleIcons = [
    { href: apple57, rel: 'apple-touch-icon', sizes: '57x57' },
    { href: apple60, rel: 'apple-touch-icon', sizes: '60x60' },
    { href: apple72, rel: 'apple-touch-icon', sizes: '72x72' },
    { href: apple76, rel: 'apple-touch-icon', sizes: '76x76' },
    { href: apple114, rel: 'apple-touch-icon', sizes: '114x114' },
    { href: apple120, rel: 'apple-touch-icon', sizes: '120x120' },
    { href: apple144, rel: 'apple-touch-icon', sizes: '144x144' },
    { href: apple152, rel: 'apple-touch-icon', sizes: '152x152' },
    { href: apple180, rel: 'apple-touch-icon', sizes: '180x180' }
  ];
  const androidIcons = [
    { href: android36, rel: 'icon', type: 'image/png', sizes: '36x36' },
    { href: android48, rel: 'icon', type: 'image/png', sizes: '48x48' },
    { href: android72, rel: 'icon', type: 'image/png', sizes: '72x72' },
    { href: android96, rel: 'icon', type: 'image/png', sizes: '96x96' },
    { href: android144, rel: 'icon', type: 'image/png', sizes: '144x144' },
    { href: android192, rel: 'icon', type: 'image/png', sizes: '192x192' }
  ];
  const otherIcons = [
    { href: favicon, rel: 'icon', type: 'image/png', sizes: '' },
    { href: favicon32, rel: 'icon', type: 'image/png', sizes: '32x32' },
    { href: favicon96, rel: 'icon', type: 'image/png', sizes: '96x96' },
    { href: favicon16, rel: 'icon', type: 'image/png', sizes: '16x16' }
  ];
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          >
            {appleIcons.map((item, index) => (
              <link rel={item.rel} href={`${item.href}`} sizes={item.sizes} />
            ))}
            {androidIcons.map((item, index) => (
              <link
                type={item.type}
                rel={item.rel}
                href={`${item.href}`}
                sizes={item.sizes}
              />
            ))}
            {otherIcons.map((item, index) => (
              <link
                rel={item.rel}
                type={item.type}
                href={`${item.href}`}
                sizes={item.sizes}
              />
            ))}
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content={msIcon} />
            <meta name="theme-color" content="#ffffff"></meta>
            <script src="https://www.paypal.com/sdk/js?client-id=AW7puiqSy4C6HSH6_PXmNLgjSLEY8YmHOKKqSXFduSkQ4b9MpRxLuh86duBi185BVEICAdE56v-jcRc_&currency=EUR&intent=authorize"></script>
            <script defer>
              {`!(function () {
                  var e,
                    t = document;
                  e = function () {
                    var e = t.createElement('script');
                    e.defer = !0;
                    e.src = 'https://cdn.endorsal.io/widgets/widget.min.js';
                    var n = t.getElementsByTagName('script')[0];
                    n.parentNode.insertBefore(e, n);
                    e.onload = function () {
                      window.NDRSL.init('5f21d7803c39c210ca8b927f');
                    };
                  };
                  'interactive' === t.readyState || 'complete' === t.readyState
                    ? e()
                    : t.addEventListener('DOMContentLoaded', e());
                })();`}
            </script>

            <script defer>
              {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1937318,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </script>
            <script defer type="text/javascript">
              {`window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '4e8e333376f7f8776fe8775f41679927c1a4327a');`}
            </script>
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
