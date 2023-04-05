"use strict";(self.webpackChunktask_list=self.webpackChunktask_list||[]).push([[310],{2310:(D,p,i)=>{i.r(p),i.d(p,{RestCountriesModule:()=>k});var u=i(6895),c=i(4006),P=i(3546),m=i(9549),C=i(7392),f=i(4144),d=i(1572),_=i(4385),n=i(4650),y=i(4004),h=i(3900),l=i(490),v=i(1135),Z=i(9646),x=i(529),A=i(1928);let O=(()=>{class o{constructor(t,e){this.http=t,this.localStorage=e,this.API_url="https://restcountries.com/v3.1/all",this.countries$$=new v.X([])}getCountriesFromApi(){return this.http.get(this.API_url)}getAllCountries(){const t=this.localStorage.get("countries");if(t.length)return this.countries$$.next(t);this.getCountriesFromApi().subscribe(e=>{this.localStorage.set("countries",e),this.countries$$.next(e)})}getCountriesFromLocalStorage(){return this.localStorage.get("countries")}getCountriesByName(t){const a=this.getCountriesFromLocalStorage().filter(s=>s.name.common===t);return(0,Z.of)(a)}filtersCountryByNameOrRegion(t){const{search:e,region:a}=t;let s=this.getCountriesFromLocalStorage();a&&(s=s.filter(g=>g.region===a)),e&&(s=s.filter(g=>g.name.common.toLowerCase().startsWith(e.toLowerCase())).sort((g,M)=>g.name.common.localeCompare(M.name.common))),this.countries$$.next(s)}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(x.eN),n.LFG(A.n))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function b(o,r){if(1&o&&(n.TgZ(0,"li")(1,"span"),n._uU(2,"Currencies"),n.qZA(),n._uU(3),n.qZA()),2&o){const t=r.$implicit,e=r.last;n.xp6(3),n.AsE(" ",t,"",e?"":", "," ")}}function T(o,r){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const t=r.$implicit,e=r.last;n.xp6(1),n.AsE(" ",t,"",e?"":", "," ")}}let U=(()=>{class o{constructor(t,e){this.route=t,this.countriesService=e}ngOnInit(){this.initCountryParams(),this.getKey(),console.log(this.country)}initCountryParams(){this.route.params.pipe((0,y.U)(t=>t.name),(0,h.w)(t=>this.countriesService.getCountriesByName(t))).subscribe({next:t=>this.country=t[0]})}getLanguageArray(t){return Object.values(t)}getCurrencyNames(t){return Object.values(t).map(e=>e.name)}getKey(){this.keyLanguage=Object.keys(this.country.languages)[0],console.log(Object.values(this.country.name))}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(l.gz),n.Y36(O))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-country-detail"]],decls:58,vars:10,consts:[[1,"detail-main"],[1,"details-nav","showLeft"],["routerLink","/restcountries"],[1,"icon-nav"],[1,"country-container"],[1,"showUp",3,"src"],[1,"country-content-container","showRight"],[1,"country-content"],[1,"country-infos"],[1,"country-infos-left"],[1,"country-infos-rigth"],[4,"ngFor","ngForOf"],[1,"country-borders-container"]],template:function(t,e){1&t&&(n.TgZ(0,"section",0)(1,"div",1)(2,"button",2)(3,"mat-icon",3),n._uU(4,"keyboard_backspace"),n.qZA(),n.TgZ(5,"p"),n._uU(6,"Back"),n.qZA()()(),n.TgZ(7,"section",4),n._UZ(8,"img",5),n.TgZ(9,"div",6)(10,"div",7)(11,"h2"),n._uU(12),n.qZA()(),n.TgZ(13,"div",8)(14,"div",9)(15,"ul")(16,"li")(17,"span"),n._uU(18,"Native Name:"),n.qZA(),n._uU(19),n.qZA(),n.TgZ(20,"li")(21,"span"),n._uU(22,"Population:"),n.qZA(),n._uU(23),n.qZA(),n.TgZ(24,"li")(25,"span"),n._uU(26,"Region:"),n.qZA(),n._uU(27),n.qZA(),n.TgZ(28,"li")(29,"span"),n._uU(30,"Sub Region:"),n.qZA(),n._uU(31),n.qZA()()(),n.TgZ(32,"div",10)(33,"ul")(34,"li")(35,"span"),n._uU(36,"Capital:"),n.qZA(),n._uU(37),n.qZA(),n.TgZ(38,"li")(39,"span"),n._uU(40,"Top Level Domain:"),n.qZA(),n._uU(41),n.qZA(),n.YNc(42,b,4,2,"li",11),n.TgZ(43,"li")(44,"span"),n._uU(45,"Languages:"),n.qZA(),n.YNc(46,T,2,2,"ng-container",11),n.qZA()()()(),n.TgZ(47,"div",12)(48,"h2"),n._uU(49,"Border Countries:"),n.qZA(),n.TgZ(50,"button"),n._uU(51,"China"),n.qZA(),n.TgZ(52,"button"),n._uU(53,"China"),n.qZA(),n.TgZ(54,"button"),n._uU(55,"China"),n.qZA(),n.TgZ(56,"button"),n._uU(57,"China"),n.qZA()()()()()),2&t&&(n.xp6(8),n.s9C("src",e.country.flags.png,n.LSH),n.xp6(4),n.Oqu(e.country.name.common),n.xp6(7),n.hij(" ",e.country.name.nativeName[e.keyLanguage].common," "),n.xp6(4),n.hij(" ",e.country.population,""),n.xp6(4),n.hij(" ",e.country.region,""),n.xp6(4),n.hij(" ",e.country.subregion,""),n.xp6(6),n.hij(" ",e.country.capital,""),n.xp6(4),n.hij(" ",e.country.tld[0],""),n.xp6(1),n.Q6J("ngForOf",e.getCurrencyNames(e.country.currencies)),n.xp6(4),n.Q6J("ngForOf",e.getLanguageArray(e.country.languages)))},dependencies:[u.sg,l.rH,C.Hw],styles:["[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]{margin-bottom:40px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:var(--tertiary-color);color:var(--secondary-color);padding:8px 16px;border-radius:4px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:.2s ease}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--blue-primary-color);color:#fff}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:30px;height:100%}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;object-fit:cover;width:500px;border-radius:15px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:30px;color:var(--secondary-color)}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:40px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   .country-infos-rigth[_ngcontent-%COMP%]{max-width:250px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] ~ li[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{white-space:nowrap;font-size:1.1rem;font-weight:700}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:5px 10px;background-color:var(--tertiary-color);color:var(--secondary-color);border-radius:4px;transition:.2s ease}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--tertiary-color-light)}@media (max-width: 1200px){[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{flex-direction:column;gap:25px}}@media (max-width: 1000px){[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{flex-direction:row}}@media (max-width: 600px){[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{flex-direction:column}}"]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-details"]],decls:2,vars:0,consts:[[1,"container"]],template:function(t,e){1&t&&(n.TgZ(0,"section",0),n._UZ(1,"app-country-detail"),n.qZA())},dependencies:[U],styles:["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{width:80%;margin:0 auto;padding:60px 0}"]}),o})();const N=function(o){return["details",o]};let S=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-countrie-card"]],inputs:{country:"country"},decls:19,vars:8,consts:[[1,"countrie-card","showUp",3,"routerLink"],["alt","Photo of a Shiba Inu",3,"src"],[1,"countrie-card-content"],[1,"countrie-card-content-title"],[1,"countrie-card-content-subtitle"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"img",1),n.TgZ(2,"div",2)(3,"h2",3),n._uU(4),n.qZA(),n.TgZ(5,"div",4)(6,"ul")(7,"li")(8,"strong"),n._uU(9,"Population"),n.qZA(),n._uU(10),n.qZA(),n.TgZ(11,"li")(12,"strong"),n._uU(13,"Capital"),n.qZA(),n._uU(14),n.qZA(),n.TgZ(15,"li")(16,"strong"),n._uU(17,"Region"),n.qZA(),n._uU(18),n.qZA()()()()()),2&t&&(n.Q6J("routerLink",n.VKq(6,N,e.country.name.common)),n.xp6(1),n.s9C("src",e.country.flags.png,n.LSH),n.xp6(3),n.Oqu(e.country.name.common),n.xp6(6),n.hij(": ",e.country.population,""),n.xp6(4),n.hij(": ",e.country.capital,""),n.xp6(4),n.hij(": ",e.country.region,""))},dependencies:[l.rH],styles:[".countrie-card[_ngcontent-%COMP%]{border-radius:10px;background-color:var(--primary-color);box-shadow:0 0 10px #0000001a;width:100%;height:100%;cursor:pointer}.countrie-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover;border-radius:10px 10px 0 0}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:24px;color:var(--secondary-color)}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;margin-bottom:20px}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-subtitle[_ngcontent-%COMP%]{font-size:.9rem;letter-spacing:1;font-weight:300;color:var(--secondary-color)}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:600}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-subtitle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] ~ li[_ngcontent-%COMP%]{margin-top:6px}"]}),o})();var F=i(3238);function q(o,r){if(1&o){const t=n.EpF();n.ynx(0),n.TgZ(1,"mat-option",6),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.filterChange())}),n._uU(2),n.qZA(),n.BQk()}if(2&o){const t=r.$implicit;n.xp6(1),n.Q6J("value",t),n.xp6(1),n.Oqu(t)}}let L=(()=>{class o{constructor(){this.countryName=new n.vpe,this.regionName=new n.vpe,this.filters=new n.vpe,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.initForm()}initForm(){this.form=new c.cw({name:new c.NI(""),region:new c.NI("")})}countryChange(){this.filterChange();const t=this.form.controls.name.value;this.search=t,this.countryName.emit(t)}regionChange(){this.filterChange(),this.regionName.emit(this.form.controls.region.value)}filterChange(){this.filters.emit({search:this.form.controls.name.value,region:this.form.controls.region.value})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-countries-search"]],inputs:{country:"country"},outputs:{countryName:"countryName",regionName:"regionName",filters:"filters"},decls:15,vars:3,consts:[[1,"countries"],[3,"formGroup"],["appearance","fill",1,"countries-input","showRight"],["matInput","","formControlName","name",3,"input"],["appearance","fill",1,"countries-input","showLeft"],["formControlName","region"],[3,"value","click"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label")(4,"mat-icon"),n._uU(5,"search"),n.qZA(),n._uU(6," Search for a country... "),n.qZA(),n.TgZ(7,"input",3),n.NdJ("input",function(){return e.filterChange()}),n.qZA()(),n.TgZ(8,"mat-form-field",4)(9,"mat-label"),n._uU(10,"Filter by region"),n.qZA(),n.TgZ(11,"mat-select",5)(12,"mat-option",6),n.NdJ("click",function(){return e.filterChange()}),n._uU(13,"All"),n.qZA(),n.YNc(14,q,3,2,"ng-container",7),n.qZA()()()()),2&t&&(n.xp6(1),n.Q6J("formGroup",e.form),n.xp6(11),n.Q6J("value",""),n.xp6(2),n.Q6J("ngForOf",e.regions))},dependencies:[u.sg,m.KE,m.hX,f.Nt,C.Hw,_.gD,F.ey,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],styles:[".countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--secondary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .countries-input[_ngcontent-%COMP%]{width:270px;font-size:1.2rem}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .countries-input[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-select-min-line{color:var(--secondary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-input-element{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-label{color:var(--secondary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-underline{background-color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-ripple{background-color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused mat-icon{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-ripple{background-color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-required-marker{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-input-element{color:var(--blue-primary-color)}@media (max-width: 768px){.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{flex-direction:column}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .countries-input[_ngcontent-%COMP%]{width:100%}}"]}),o})();function j(o,r){if(1&o&&(n.TgZ(0,"li"),n._UZ(1,"app-countrie-card",6),n.qZA()),2&o){const t=r.$implicit;n.xp6(1),n.Q6J("country",t)}}function R(o,r){if(1&o&&(n.TgZ(0,"ul",4),n.YNc(1,j,2,1,"li",5),n.qZA()),2&o){const t=r.ngIf;n.xp6(1),n.Q6J("ngForOf",t)}}function J(o,r){1&o&&n._UZ(0,"mat-spinner")}let B=(()=>{class o{constructor(t){this.countrieService=t}ngOnInit(){this.countrieService.getAllCountries(),this.getAllCountries()}getAllCountries(){this.allCountries$=this.countrieService.countries$$}filterCountryOrRegion(t){this.countrieService.filtersCountryByNameOrRegion(t)}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(O))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-countries-list"]],decls:7,vars:7,consts:[[3,"country","filters"],[1,"countrie-list-container"],["class","countrie-list-grid",4,"ngIf","ngIfElse"],["loading",""],[1,"countrie-list-grid"],[4,"ngFor","ngForOf"],[3,"country"]],template:function(t,e){if(1&t&&(n.TgZ(0,"app-countries-search",0),n.NdJ("filters",function(s){return e.filterCountryOrRegion(s)}),n.ALo(1,"async"),n.qZA(),n.TgZ(2,"section",1),n.YNc(3,R,2,1,"ul",2),n.ALo(4,"async"),n.YNc(5,J,1,0,"ng-template",null,3,n.W1O),n.qZA()),2&t){const a=n.MAs(6);n.Q6J("country",n.lcZ(1,3,e.allCountries$)),n.xp6(3),n.Q6J("ngIf",n.lcZ(4,5,e.allCountries$))("ngIfElse",a)}},dependencies:[u.sg,u.O5,d.Ou,S,L,u.Ov],styles:["[_nghost-%COMP%]   .countrie-list-container[_ngcontent-%COMP%]{padding-bottom:50px}[_nghost-%COMP%]   .countrie-list-container[_ngcontent-%COMP%]   .countrie-list-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:40px;justify-content:center}@media (max-width: 1600px){[_nghost-%COMP%]   .countrie-list-container[_ngcontent-%COMP%]   .countrie-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}@media (max-width: 1250px){[_nghost-%COMP%]   .countrie-list-container[_ngcontent-%COMP%]   .countrie-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 950px){[_nghost-%COMP%]   .countrie-list-container[_ngcontent-%COMP%]   .countrie-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 650px){[_nghost-%COMP%]   .countrie-list-container[_ngcontent-%COMP%]   .countrie-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}"]}),o})();const $=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-countries"]],decls:3,vars:0,consts:[[1,"container"]],template:function(t,e){1&t&&(n.TgZ(0,"main")(1,"div",0),n._UZ(2,"app-countries-list"),n.qZA()())},dependencies:[B],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{margin-top:30px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:80%;margin:0 auto}"]}),o})()},{path:"details/:name",component:w}];let I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.Bz.forChild($),l.Bz]}),o})(),k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,I,m.lN,f.c,C.Ps,_.LD,P.QW,c.u5,c.UX,d.Cq]}),o})()}}]);