import React from 'react'
import toString from './toString'

const { keys } = Object
const style = { textTransform: 'capitalize' }

const ObjectTable = ({ data, className, showObject, defaultMessage, defaultStringForObject }) =>
  keys(data).length === 0 ? (
    defaultMessage
  ) : (
    <table className={className}>
      <thead style={style}>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {keys(data).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>
              {toString(data[key], { showObject, defaultStringForObject })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

export default ObjectTable
