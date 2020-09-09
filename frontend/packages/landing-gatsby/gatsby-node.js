/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   // Only update the `/app` page.
//   //   if (page.path.match(/^\//)) {
//   // page.matchPath is a special key that's used for matching pages
//   // with corresponding routes only on the client.
//   //   page.matchPath = '/*';

//   // Update the page.
//   createPage(page);
//   //   }
// };

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*';
    // Update the page.
    createPage(page);
  }
};

exports.createPages = async ({ page, actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve('./src/pages/front/index.js')
  });
  // createPage({
  //   path: `/comment`,
  //   component: require.resolve('./src/pages/CommentCaMarche.js')
  // });

  createPage({
    path: `/faq`,
    component: require.resolve('./src/pages/front/faq.js')
  });
  createPage({
    path: `/confidentiality`,
    component: require.resolve('./src/pages/front/confidentiality.js')
  });

  createPage({
    path: `/conditions`,
    component: require.resolve('./src/pages/front/conditions.js')
  });
  createPage({
    path: `/prix`,
    component: require.resolve('./src/pages/front/prix.js')
  });
  createPage({
    path: `/essai`,
    component: require.resolve('./src/pages/front/essai.js')
  });
  createPage({
    path: `/contactus`,
    component: require.resolve('./src/pages/front/contactus.js')
  });
  createPage({
    path: `/suggest`,
    component: require.resolve('./src/pages/front/suggest.js')
  });
  createPage({
    path: `/supprimer`,
    component: require.resolve('./src/pages/front/Supprimer.js')
  });
  createPage({
    path: `/fonctionnement`,
    component: require.resolve('./src/pages/front/fonctionnement.js')
  });
  createPage({
    path: `/password/reset`,
    component: require.resolve('./src/pages/front/passwordReset.js')
  });
  createPage({
    path: `/404`,
    component: require.resolve('./src/pages/front/404.js')
  });

  // Create a page for each Pokémon.
  //   allPokemon.forEach((pokemon) => {
  //     createPage({
  //       path: `/pokemon/${pokemon.name}/`, // highlight-line
  //       component: require.resolve('./src/templates/pokemon.js'),
  //       context: { pokemon } // highlight-line
  //     });
  //   });
};
