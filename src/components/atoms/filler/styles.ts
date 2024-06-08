import styled from 'styled-components'

export const Wrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: opacity 1s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    opacity: 1;
  }
`