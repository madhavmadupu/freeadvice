import React from "react";
import axios from "axios";
import "./App.css";


class App extends React.Component {
    state = { advice:'' };
    
    componentDidMount(){
        this.fetchAdvice();
    }
    
    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then((response) => {
            const { advice }=response.data.slip;
            this.setState({ advice })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    

    render() {
        return(
            <div className="Background">
                <div className="Card">
                    <h1>{this.state.advice}</h1>
                    <button className="anotherButton" onClick={this.fetchAdvice}>
                        <span>Another one</span>
                    </button>
                </div>

                <div className="socials">
                    <div><h3>Let's connect</h3></div>
                    <div className="links">
                        <a href="https://github.com/madhavmadupu"><img src="https://pngimg.com/d/github_PNG32.png" width={25}/></a>
                        <a href="https://instagram.com/madhav._.madupu"><img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" width={25}/></a>
                        <a href="https://www.linkedin.com/in/madhavmadupu/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" width={25}/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;