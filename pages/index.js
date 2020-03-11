// import fetch from 'isomorphic-unfetch'
import fetcher from '../lib/fetcher'
import useSWR, { useSWRPages } from 'swr'

import Layout from "../components/Layout"
import PokeCard from '../components/PokeCard'

const IndexPage = function () {
    const { pages, isLoadingMore, loadMore } = useSWRPages(
        "pokemon-list", ({ offset, withSWR }) => {
            const url = offset || 'https://pokeapi.co/api/v2/pokemon'
            const { data } = withSWR(useSWR(url, fetcher))

            if (!data) return null

            const { results } = data;

            return results.map(result => {
                return (
                    <div className="column is-one-third" key={result.name}>
                        <PokeCard
                            id={result.name}
                            name={result.name}
                        />
                    </div>
                )
            })
        },
        SWR => SWR.data.next,
        []
    )
 
    return (
        <Layout pageTitle="Home">
            <div className="columns title-column">
                <div className="column">
                    <h1 className="is-size-3 has-text-weight-bold">All Pokemon</h1>
                </div>
            </div>
            <div className="columns is-multiline content-column">
                { pages }
            </div>

            <button className="button is-medium is-danger load-more-button is-fullwidth" disabled={isLoadingMore} onClick={loadMore}>Load More</button>

            <style jsx>{`
                .title-column {
                    margin-top: 124px;
                    margin-bottom: 40px;
                }

                // .content-column {
                //     margin-top: 124px;
                // }

                .load-more-button {
                    text-align: center;
                    margin-bottom: 88px;
                    margin-top: 40px;
                }
            `}</style>
        </Layout>
    )
}

// IndexPage.getInitialProps = async function ({
//     query: {offset = 0 }
// }) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
//     const data = await res.json()

//     console.log(`Fetched pokemon: ${data.results.length}`)

//     return { 
//         pokemon: data,
//         offset
//     }
// }

export default IndexPage