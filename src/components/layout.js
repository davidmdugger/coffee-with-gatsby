/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <Fragment>{children}</Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
