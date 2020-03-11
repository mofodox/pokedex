import fetch from 'isomorphic-unfetch'

import Layout from "../components/Layout"
import PokeCard from '../components/PokeCard'

const IndexPage = props => {
    return (
        <Layout pageTitle="Home">
            <div className="columns is-multiline content-column">
                { props.pokemon.map(pk => {
                    return (
                        <div className="column is-one-third" key={pk.name}>
                            <PokeCard
                                id={pk.name}
                                name={pk.name}
                            />
                        </div>
                    )
                }) }
            </div>

            <style jsx>{`
                .content-column {
                    margin-top: 124px;
                }
            `}</style>
        </Layout>
    )
}

IndexPage.getInitialProps = async function () {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const data = await res.json()

    console.log(`Fetched pokemon: ${data.results.length}`)

    return { pokemon: data.results }
}

export default IndexPage