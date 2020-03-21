import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {environment} from 'src/environments/environment';

declare var require: any;
const places = require('places.js');

const fixedOptions = environment.algolia;

const reconfigurableOptions = {
    language: 'de', // Receives results in German
    countries: ['de'], // Search in the United States of America and in the Russian Federation
    type: 'address', // Search only for address names
    aroundLatLngViaIP: true // disable the extra search/boost around the source IP
};

@Component({
    selector: 'algolia-search',
    templateUrl: './algolia-search.component.html',
    styleUrls: ['./algolia-search.component.scss'],
})
export class AlgoliaSearchComponent implements OnInit {
    @Input() q: string;
    @Input() searchType = 'city';
    @Input() placeholder = 'Wo bist du?';
    @Output() place = new EventEmitter<{}>();
    // @ts-ignore
    @ViewChild('autocomplete') qElementRef: ElementRef;

    private places: any;

    constructor() {
    }

    ngOnInit() {
        reconfigurableOptions.type = this.searchType;

        fixedOptions.container = document.querySelector('#address-input');
        this.places = places(fixedOptions).configure(reconfigurableOptions);

        if (this.q) {
            this.places.setVal(this.q);
        }

        this.places.on('change', ((e) => {
            this.place.emit(e.suggestion);
        }));
    }
}
