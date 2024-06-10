import styled from 'styled-components'

export const Wrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  background-color: ${({theme}) => theme.colors.lightGray};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
    transition: opacity 1s ease-out;
  }
`