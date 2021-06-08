import React from "react"
import Layout from "../components/layout"
import BackBtn from "../components/backBtn"

export default function About() {


    return (
        <Layout title="About">
            <div className="upperDiv">
                <BackBtn destination="home"/>
                <h1>About</h1>
            </div>            

        </Layout>
    )
}