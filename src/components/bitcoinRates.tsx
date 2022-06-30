import { observer } from "mobx-react";
import {Component} from "react";
import { bitcoinStore } from "../datastores/bitcoinStore";
import CurrencyList from "./currencyList";

class BitcoinRates extends Component{
   
    componentDidMount(){
        bitcoinStore.getRates();
    }

    render(){
        return <CurrencyList rates={bitcoinStore.rates}></CurrencyList>
    }
}

export default observer(BitcoinRates);