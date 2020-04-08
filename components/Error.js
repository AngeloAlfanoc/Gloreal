import React from 'react';
import '../assets/css/error.css'
class PrivacyPolicy extends React.Component {
    componentDidMount(){
        const header = document.getElementById('home')
        header.style.display = "none";
        const footer = document.getElementById('end')
        footer.style.display = "none";
    }
    render() {
        
        return ( <> 
        <div className="container">
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h3>Oops! Page not found</h3>
                        <h1>
                            <span>4</span>
                            <span>0</span>
                            <span>4</span>
                        </h1>
                    </div>
                    <h2>Excuseer de pagina die u zoekt is niet beschikbaar!</h2>
                </div>
            </div>
        </div> 
        </>)
    }
}

export default PrivacyPolicy