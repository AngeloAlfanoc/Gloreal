import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
class Disclaimer extends React.Component {
    componentDidMount() {
        const header = document.getElementById('home')
        header.style.display = "none";
        const footer = document.getElementById('end')
        footer.style.display = "none";
    }
    render() {
        return ( <> <div className="container py-5">
            <a href="/">
                <h2 className="pb-2">
                    <FontAwesomeIcon className="mr-2" icon={faArrowLeft}/>Back to main page</h2>
            </a>
            <h1>Disclaimer</h1>
            <p>This site may contain copyrighted material the use of which has not always
                been specifically authorized by the copyright owner.
            </p>
            <p>If there is a content piece, that hasn't been credited this sentence will overule that. "Credit goes to the original creator of the content piece". Methods is a one man business that sells websites, webshops and does branding. methods will never sell anything that is not owned by him.</p>
            <p><a href="www.methods.me">For more info go to www.methods.me</a></p>
        </div> </>
        )
    }
}

export default Disclaimer