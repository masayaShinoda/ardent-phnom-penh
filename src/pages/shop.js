import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/shop.module.css"

export default function Shop() {
    const data = useStaticQuery(graphql`
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
    }`)
    
    const dollarToRielRate = 4000;

    return (
        <Layout title="Shop">
            <h1>Shop</h1>
            <div className={styles.shopContainer + ` shopContainer`}>
                {data.allDatoCmsShopItem && data.allDatoCmsShopItem.edges.map(edge => (
                    <div className={styles.itemContainer + ` itemContainer`}>
                        <Link to={`/product/${edge.node["originalId"]}`} style={{textDecoration: `none`}}>
                            {edge.node["thumbnail"]["url"] ?
                                <img 
                                src={edge.node["thumbnail"]["url"]}
                                alt={edge.node["thumbnail"]["alt"] ? edge.node["thumbnail"]["alt"] : null}
                                className={styles.itemThumbnail}
                                /> : null                 
                            }
                            <span style={{display: `flex`, justifyContent: `space-between`, alignItems: `center`, margin: 0}}>
                                <h2 style={{margin: 0, fontWeight: 600}}>
                                    {edge.node["itemName"]}
                                </h2>
                                <Link 
                                to={`/product/${edge.node["originalId"]}`}
                                className={`actionBtn`}
                                >
                                    Buy
                                </Link>
                            </span>
                        </Link>
                        
                    </div>

                ))}
            </div>
        </Layout>
    )
}