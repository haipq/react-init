
import React from "react"
import Item from "./sample-list-item"

const SampleList = ({ sample }) => (
  <section id="sample-list">
    <ul>
      {sample.map(item => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  </section>
)
export default SampleList
