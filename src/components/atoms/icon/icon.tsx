import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'

const icons = [faChevronRight, faSearch]
const iconNames = icons.map(icon => icon.iconName)
library.add(...icons)

type TIcon = {
  type: typeof iconNames[number]
}

export const Icon: FC<TIcon> = ({ type }) => {
  return <FontAwesomeIcon icon={type} />
}