import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 60px;
    background: rgba( 0, 0, 0, 1 ) 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Link = styled.div`
    color: #F8F8F8;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #F3A51E;
        transition: 200ms ease-in;
        cursor: pointer;
    }
`

export const Title = styled.div`
    font-size: 24px;
    color: #F8F8F8;
    margin-bottom: 40px;
    font-weight: bold;
`