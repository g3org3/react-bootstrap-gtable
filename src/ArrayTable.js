import React from 'react'
import toString from './toString'
const { keys } = Object
const style = { textTransform: 'capitalize' }

const ArrayTable = ({ data, className, showObject, onThClick, defaultMessage, defaultStringForObject }) =>
  data.length === 0 ? (
    defaultMessage
  ) : (
    <table className={className}>
      <thead style={style}>
        <tr>
          {keys(data[0]).map(key => (
            <th key={key} onClick={() => onThClick(key)}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => (
          <tr key={`data.item.${id}`}>
            {keys(item).map(key => (
              <td key={key}>
                {toString(item[key], { showObject, defaultStringForObject })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )

export default ArrayTable
