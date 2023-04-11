import React from 'react'

const Male = () => {
  return (
    <div>
        <h2>Select your shirt size:</h2>
                <select defaultValue={"none"}>
                <option value={"none"} >Select size</option>
                <option value={"small"}>Small</option>
                <option value={"medium"}>Medium</option>
                <option value={"large"}>Large</option>
                </select>
    </div>
  )
}

export default Male