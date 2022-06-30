import axios from "axios";
import { observable, action, makeAutoObservable } from "mobx";
import { Rates } from "../types/Rates";

class BitcoinStore {
    rates : Rates | undefined;

    constructor() {
        makeAutoObservable(this, {
            rates: observable,
            setRates : action
        });
    }
    
    setRates = (data : Rates) => {
        //let obj: IRates = JSON.parse(data);
        this.rates = data;
        console.log('data :',data);
    }

    getRates() {        
        axios.get('https://api.coindesk.com/v2/bpi/currentprice.json')
        .then((res) => this.setRates(res.data))
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
}
export const bitcoinStore = new BitcoinStore();