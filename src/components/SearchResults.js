import React from "react"
import moment from "moment"

const SearchResults = props => {

  const now = new Date().toISOString()
  console.log(now)

  const items =
    // If items is truthy
    props.results.items &&
    props.results.items.map(item => {
      return (
        <div key={item.id}>
          {/* Title with hyperlink */}
          <p>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </p>

          {/* How long ago created */}
          <p>
            {moment(item.created_at).fromNow()}
          </p>

          {/* Body text */}
          {/* <p>{item.body}</p> */}

          <br />
        </div>
      )
    })

  return (
    <div className="results">
      <h3>Results:</h3>

      {/* MAPPED ITEMS */}
      {items}
    </div>
  )
}

export default SearchResults
