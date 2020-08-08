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

exports.createPages = async ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data
  //   const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve('./src/pages/index.js')
  });

  createPage({
    path: `/confidentiality`,
    component: require.resolve('./src/pages/confidentiality.js')
  });

  createPage({
    path: `/conditions`,
    component: require.resolve('./src/pages/conditions.js')
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
