import React from 'react';
import axios from 'axios'

import ScrollAnimation from 'react-animate-on-scroll';

class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        axios
            .get(`https://www.instagram.com/graphql/query/?query_hash=2c5d4d8b70cad329c4a6ebe3abb6eedd&variables={"id":6990710976,"first":15,"after":""}`)
            .then((result) => {
                this.setState({items: result.data.data.user.edge_owner_to_timeline_media.edges, isLoaded: true});
            }, (error) => {
                this.setState({isLoaded: true, error});
            })

    }

    render() {

        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section id="photo">
                    {items.map((pic) => {
                        return (
                            <div key={pic.node.shortcode}>
                            <ScrollAnimation animateIn='fadeIn'>
                                <a href={'https://www.instagram.com/p/' + pic.node.shortcode}>
                                    <img key={pic.node.shortcode} alt="barbershop_nuevostylo" src={pic.node.display_url}></img>
                                </a>
                            </ScrollAnimation>
                            </div>
                        )
                    })}
                </section>

            );
        }
    }
}

export default Photos
