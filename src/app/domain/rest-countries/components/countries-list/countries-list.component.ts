import { Component, OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  allCountries$: any;
  filteredCountries$: any;

  constructor(private countrieService: CountriesService) {}

  ngOnInit() {
    this.getAllCountries();
    this.filteredCountries$ = this.allCountries$;
  }

  getAllCountries() {
    // this.allCountries$ = this.countrieService.getCountries();
    this.allCountries$ = this.countrieService.countries$$;
    this.allCountries$.subscribe((res: any) => console.log(res));
  }

  filterCountryOrRegion(filters: { search: string; region: string }) {
    this.countrieService.filtersCountryByNameOrRegion(filters);
  }
}
