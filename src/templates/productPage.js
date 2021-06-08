import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import BackBtn from "../components/backBtn"
import styles from "../styles/shop.module.css"

export default function ProductPage({ pageContext }) {
    const { currentProductData } = pageContext
    console.log(currentProductData)
    const dollarToRielRate = 4000;

    const data = useStaticQuery(graphql`
        query paymentDataQuery {
            allDatoCmsPaymentMethod {
                edges {
                    node {
                        id
                        originalId
                        paymentMethod
                        paymentMethodIcon {
                            url
                            alt
                        }
                        paymentMethodQr {
                            url
                            alt
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout title={currentProductData["itemName"]}>
            <div className="upperDiv">
                <BackBtn destination="shop"/>
            </div>
        {
            currentProductData && (
                <div className={styles.productPageContainer}>
                    <h1>{currentProductData["itemName"]}</h1>
                    
                    <div className={styles.variantSelection}>
                        {
                            currentProductData["variant"] ? currentProductData["variant"].map(variant => {
                            
                            return (
                                <div className={styles.variantSelector}>
                                    <img 
                                        src={variant["variantThumbnail"]["url"]}
                                        alt={variant["variantThumbnail"]["alt"]}
                                        className={styles.variantSelectorThumbnail}
                                    />
                                    <span className={styles.variantSelectorDetails}>
                                        <h2>{variant["variantName"]}</h2>
                                        <p className={styles.variantUnitPrice}>
                                            {variant["unitPrice"] * dollarToRielRate}៛
                                            &nbsp;/&nbsp;
                                            {variant["unitPrice"]}USD
                                        </p>
                                    </span>
                                </div>                                
                            )})
                            : null
                        }
                        </div>
                        {/* {
                        data["allDatoCmsPaymentMethod"]["edges"].map(edge => (
                            <div className={styles.paymentMethodContainer}>
                                <img
                                src={edge["node"]["paymentMethodIcon"]["url"]}
                                alt={edge["node"]["paymentMethodIcon"]["alt"]}
                                className={styles.paymentMethodIcon}
                                />
                                <img
                                src={edge["node"]["paymentMethodQr"]["url"]}
                                alt={edge["node"]["paymentMethodQr"]["alt"]}
                                className={styles.paymentMethodQR}
                                />
                                
                            </div>
                        ))
                        } */}
                </div>
            )
        }
        </Layout>
    )
}
