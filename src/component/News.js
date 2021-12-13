import React from 'react';
import NewsItems from "./NewsItems";
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends React.Component {

    static defaultProps = {
        country: "us",
        pageSize: 5,
        category: "health"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(props) {
        super(props)

        this.state = {
            newsdata: [],
            loading: true,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9ff63836b064ce79cda127791005f7f&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata)
        this.setState({
            newsdata: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false
        })

    }
    previousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9ff63836b064ce79cda127791005f7f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata)
        this.setState({
            newsdata: parsedata.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    nextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9ff63836b064ce79cda127791005f7f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedata = await data.json();
            console.log(parsedata)
            this.setState({
                newsdata: parsedata.articles,
                page: this.state.page + 1,
                loading: false
            })
        }
    }

    render() {
        const { theme } = this.props;
        console.log('title', theme)
        return (
            <div className="container my-3">
                <div className="text-center">
                    <h2 style={{ color: theme ? 'black' : 'white' }}>TopNews - Headlines</h2>
                </div>
                {this.state.loading && <Spinner />}
                <div className="row mt-4">
                    {!this.state.loading && this.state.newsdata.map((elm) => {
                        return <div className="col-md-4" key={elm.url}>
                            <NewsItems title={elm.title ? elm.title.slice(0, 45) : ""} description={elm.description ? elm.description.slice(0, 85) : ""} Imageurl={elm.urlToImage} newsUrl={elm.url} author={elm.author !== null && elm.author} date={elm.publishedAt} />
                        </div>
                    })}
                </div>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-dark" onClick={this.previousClick}
                        disabled={this.state.page <= 1}
                    >&#8592; Previous</button>
                    <button className="btn btn-dark" onClick={this.nextClick}
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                    >Next &#8594;</button>
                </div>

            </div>
        )
    }
}

export default News






