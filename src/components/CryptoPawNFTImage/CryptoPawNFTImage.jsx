import React, {Component} from "react";

class CryptoPawNFTImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img alt="NTF Token" src={this.props.cryptoPaw.tokenURI}/>
            </div>
        )
    }
}

export default CryptoPawNFTImage;