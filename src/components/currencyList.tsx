import { Observer } from "mobx-react-lite";
import { Component } from "react";
import { Rates } from "../types/Rates";
import CurrencyItem from "./currencyItem";

interface ICurrencyListProps {
    rates : Rates | undefined
}

class CurrencyList extends Component<ICurrencyListProps>{

    getLocalDateTime = () : string=>{
        const utcDate = this.props.rates?.time.updatedISO!;
        const date = new Date(utcDate);
        console.log(window.navigator.languages[0]);
        return new Intl.DateTimeFormat(window.navigator.languages[0], { dateStyle: 'full', timeStyle: 'short' }).format(date)
    }

    renderUndefinedState=()=>{
        return <h1 className="fw-light">fetching ...</h1>;
    }

    renderDefinedState = () => {
        return <>            
            {this.renderList()}
            <br/>            
            <p className="font-monospace">rates updated <abbr className="initialism" title="rates last updated local time">{this.getLocalDateTime()}</abbr></p>
            <div className="alert alert-warning alert-dismissible fade show " role="alert">
                <strong>Caution!</strong> <span className="fw-light text-muted">{this.props.rates?.disclaimer}</span>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    }

    renderList = () => {
        return <>
            <CurrencyItem currencyDetails={this.props.rates?.bpi.USD!}></CurrencyItem>
            <CurrencyItem currencyDetails={this.props.rates?.bpi.EUR!}></CurrencyItem>
            <CurrencyItem currencyDetails={this.props.rates?.bpi.GBP!}></CurrencyItem>
        </>
    }

    render(){
        return this.props.rates === undefined ? this.renderUndefinedState() : this.renderDefinedState();
    }
}

export default CurrencyList;