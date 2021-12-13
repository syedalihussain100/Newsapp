import React from 'react';
import ExampleImage from '../images/example.jpg';

export class NewsItems extends React.Component {
    render() {
        console.log('render')
        let { title, description, Imageurl, newsUrl, author, date } = this.props;
        return (
            <div>
                <div className="card mb-3">
                    <img src={!Imageurl ? ExampleImage : Imageurl} className="card-img-top" alt="logo" style={{ height: "150px", width: "100%", objectFit: "cover" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}.</p>
                        <p className="card-text"><small className="text-muted"> By {!author ? "Unknown" : author} Last updated {new Date(date).toUTCString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
