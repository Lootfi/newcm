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
    component: require.resolve('./src/pages/index.js')
  });
  // createPage({
  //   path: `/comment`,
  //   component: require.resolve('./src/pages/CommentCaMarche.js')
  // });

  createPage({
    path: `/faq`,
    component: require.resolve('./src/pages/faq.js')
  });
  createPage({
    path: `/confidentiality`,
    component: require.resolve('./src/pages/confidentiality.js')
  });

  createPage({
    path: `/conditions`,
    component: require.resolve('./src/pages/conditions.js')
  });
  createPage({
    path: `/prix`,
    component: require.resolve('./src/pages/prix.js')
  });
  createPage({
    path: `/essai`,
    component: require.resolve('./src/pages/essai.js')
  });
  createPage({
    path: `/contactus`,
    component: require.resolve('./src/pages/contactus.js')
  });
  createPage({
    path: `/suggest`,
    component: require.resolve('./src/pages/suggest.js')
  });
  createPage({
    path: `/supprimer`,
    component: require.resolve('./src/pages/Supprimer.js')
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
