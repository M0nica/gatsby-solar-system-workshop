import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactInfo from "../components/contactInfo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <ContactInfo />
  </Layout>
)

export default ContactPage
