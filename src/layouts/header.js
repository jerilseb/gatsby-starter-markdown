import Link from 'gatsby-link'
import React from 'react'

const Header = () => (
  <div
    style={{
      background: '#244e91',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          My Blog
        </Link>
      </h1>
    </div>
  </div>
)


export default Header;