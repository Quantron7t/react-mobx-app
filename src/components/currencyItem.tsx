import { Component } from "react";
import { CurrencyDetails } from "../types/Rates";

interface ICurrencyItemProps {
    currencyDetails : CurrencyDetails
}

class CurrencyItem extends Component<ICurrencyItemProps> {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-8">
                        <h3 className="fw-light">{this.props.currencyDetails.description}</h3>
                    </div>                    
                    <div className="col-4">
                        <h4> {this.htmlCurrencyCode()} {this.props.currencyDetails.rate}</h4>
                    </div>
                </div>
            </>
        );
    }

    htmlCurrencyCode = () =>{
        const isoCode = this.props.currencyDetails.code;
        if(isoCode=='USD') return <span>&#36;</span>;
        if(isoCode=='EUR') return <span>&euro;</span>;
        if(isoCode=='GBP') return <span>&#163;</span>;
        return <span></span>;
    }
}

export default CurrencyItem