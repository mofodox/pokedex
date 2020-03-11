import Head from 'next/head'

const SEO = props => {
    return (
        <Head>
            <title>Pokedex | {props.title}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head> 
    )
}

export default SEO
