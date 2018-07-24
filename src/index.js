import React from 'react'
import PropTypes from 'prop-types'

import ArrayTable from './ArrayTable'
import ObjectTable from './ObjectTable'

const defaultMessage = <p>Empty, 0 items found.</p>

const GenericTable = (props) => {
  if (props.data instanceof Array) {
    return <ArrayTable defaultMessage={defaultMessage} {...props} />
  } else {
    return <ObjectTable defaultMessage={defaultMessage} {...props} />
  }
}

GenericTable.defaultProps = {
  data: [],
  className: 'table',
  showObject: false,
  onThClick: () => {},
  defaultMessage,
  defaultStringForObject: '[object object]'
}

GenericTable.propTypes = {
  data: PropTypes.any,
  className: PropTypes.string,
  showObject: PropTypes.bool,
  onThClick: PropTypes.func,
  defaultMessage: PropTypes.element,
  defaultStringForObject: PropTypes.string
}

export default GenericTable
