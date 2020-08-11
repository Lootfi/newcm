import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';

import msIcon from '../../../common/src/assets/image/ms-icon-144x144.png';

function SEO({ description, lang, meta, keywords, title }) {
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
            {/* {data.saasClassicJson.METAS.map((item, index) => (
              <link
                rel={item.rel}
                type={item.type}
                href={item.placement}
                sizes={item.sizes}
              />
            ))} */}
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content={msIcon} />
            <meta name="theme-color" content="#ffffff"></meta>
            <script src="https://www.paypal.com/sdk/js?client-id=AW7puiqSy4C6HSH6_PXmNLgjSLEY8YmHOKKqSXFduSkQ4b9MpRxLuh86duBi185BVEICAdE56v-jcRc_&currency=EUR"></script>
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
            {/* <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-244272-46"
            ></script>
            <script>
              {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-244272-46');`}
            </script> */}
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
