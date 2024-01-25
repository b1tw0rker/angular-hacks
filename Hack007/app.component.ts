import { HttpClient } from '@angular/common/http';
    ...
    ...
    ...
    export class BlogComponent implements OnInit {
    priceInEUR: number | undefined;
    interval: any;
    constructor(private client: HttpClient) { }
        ngOnInit(): void {
            this.bwRefreshData();
            this.interval = setInterval(() => {
            this.bwRefreshData();
        }, 10000);

        this.bwGetData();
        }

        bwRefreshData() {
            this.bwGetData();
        }

        bwRefresh() {
            this.bwGetData();
        }

        bwGetData() {
            this.client
            .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR')
            .subscribe((data: any) => {
            this.priceInEUR = data['EUR'];
            console.log(data['EUR']);
        });
    }
}
