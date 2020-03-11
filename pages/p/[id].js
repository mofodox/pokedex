import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

const Pokemon = props => {
    return (
        <Layout pageTitle={props.data.name}>
            <div className="columns content-column">
                <div className="column">
                    <p className="has-text-centered is-size-3">{`#${props.data.order}`}</p>
                    <h1 className="is-size-1 has-text-centered is-capitalized has-text-weight-bold">{props.data.name}</h1>
                    <ul className="has-text-centered">
                        { props.data.types.map(type => {
                            return (
                                <li className="tag is-info is-light" key={type.slot}>{type.type.name}</li>
                            )
                        })}
                    </ul>
                    
                    <figure className="image is-128x128 sprite">
                        <img src={props.data.sprites.front_default} alt={`${props.data.name}-sprite`} />
                    </figure>
                </div>
            </div>

            <style jsx>{`
                .content-column {
                    margin-top: 124px;
                }

                li {
                    list-style: none;
                    display: inline;
                }

                .tag {
                    margin-right: 8px;
                }

                .sprite {
                    margin: 24px auto;
                }
            `}</style>
        </Layout>
    )
}

Pokemon.getInitialProps = async function (context) {
    const {id} = context.query

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    console.log(`Fetched pokemon: ${data.name}`)

    return { data }
}

export default Pokemon