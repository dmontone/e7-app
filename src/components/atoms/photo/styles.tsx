import styled, { Dimensions } from 'styled-components'

type TWrapper = {
  width: Dimensions
  height: Dimensions
}

export const Wrapper = styled.figure<TWrapper>`
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }) => typeof height === 'string' ? height : `${height}px`};

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`