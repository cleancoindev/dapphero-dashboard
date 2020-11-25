import React from 'react'
import styled from 'styled-components'

// Components
import NavigationGroup from './NavigationGroup'
import { colors } from './Theme'

const Navigation: React.FC<any> = ({
    router,
    setRouter,
}) => {
    return (
        <NavigationContainer>
            <LogoContainer onClick={() => setRouter('projects')}>
                <LogoImage alt="DappHero Logo" src="https://arweave.net/Se6yGCl5B03DxosnMjmhA1eoOwsIO0bsHaGIJmr7N5Y" />
            </LogoContainer>
            <NavigationGroup
                iconAltText="Projects"
                iconURL={'https://arweave.net/y--LjDmE8Ixh07sj0Hmy0rrZqX5EFrAk9BKQyMEt0a8'}
                router={router}
                setRouter={setRouter}
                title={"Projects"}
            />
            <NavigationGroup
                iconAltText="Contracts"
                iconURL={'https://arweave.net/9ayl_-SzNbM-eAZEyre-CuQpKN7d37U4yf32IfjHF60'}
                router={router}
                setRouter={setRouter}
                title={"Contracts"}
            />
        </NavigationContainer>
    )
}

export default Navigation

const NavigationContainer = styled.div`
    align-items: center;
    background: ${colors.white};
    border-right: 2px solid rgb(235, 239, 245);
    display: flex;
    height: 100vh;
    left: 0;
    flex-direction: column;
    grid-column: 1 / 2;
    gird-row: 1 / -1;
    position: fixed;
    width: 30rem;
    z-index: 99;
`

const LogoContainer = styled.div`
    height: 15rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
    width: 15rem;

    &:hover {
        cursor: pointer;
    }
`

const LogoImage = styled.img`
    border-radius: 3px;
    display: block;
    height: 100%;
    margin: 0px;
    width: 100%;
`
