// code for generating slug for each shopitem
const path = require("path")

//create new page for every new post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const productTemplate = path.resolve("./src/templates/productPage.js")
  const res = await graphql(`
    query ShopQuery {
      allDatoCmsShopItem {
        edges {
          node {
            id
            originalId
            itemName
            thumbnail {
              url
              alt
            }
            variant {
              variantName
              id
              unitPrice
              variantGallery {
                url
                alt
              }
              variantThumbnail {
                alt
                url
              }
            }
          }
        }
      }
 
    }
  `)
  //2. Get product data
  res.data.allDatoCmsShopItem.edges.forEach(edge => {
    console.log(productTemplate.JSON);
    createPage({
      //3. Create new pages
      component: productTemplate,
      path: `/product/${edge.node.originalId}`, //dynamic based off of slug each post has
      context: {
        slug: edge.node.originalId,
        //passed down as context
        currentProductData: edge.node,
      },
    })
  })
}