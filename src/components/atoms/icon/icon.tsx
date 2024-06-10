import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

const icons = [faChevronRight, faSearch, faSpinner]
const iconNames = icons.map(icon => icon.iconName)
library.add(...icons)

type TIcon = {
  type: typeof iconNames[number]
  size?: 1 | 2 | 3 | 4 | 5
}

export const Icon: FC<TIcon> = ({ type, size = 1 }) => {
  return <FontAwesomeIcon icon={type} size={`${size}x`} />
}