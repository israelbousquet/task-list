"use strict";(self.webpackChunktask_list=self.webpackChunktask_list||[]).push([[460],{460:(rn,O,i)=>{i.r(O),i.d(O,{RestCountriesModule:()=>en});var u=i(6895),s=i(4006),N=i(3546),p=i(9549),C=i(7392),y=i(4144),P=i(1572),M=i(4385),n=i(4650),b=i(655),h=i(9933),v=i(4004),w=i(3900),g=i(490),T=i(1135),L=i(9646),S=i(529),U=i(1928);let x=(()=>{class e{constructor(t,r){this.http=t,this.localStorage=r,this.API_url="https://restcountries.com/v3.1/all",this.countries$$=new T.X([])}getCountriesFromApi(){return this.http.get(this.API_url)}getAllCountries(){const t=this.localStorage.get("countries");if(t.length)return this.countries$$.next(t);this.getCountriesFromApi().subscribe(r=>{this.localStorage.set("countries",r),this.countries$$.next(r)})}getCountriesNameByBorders(t){return t?this.getCountriesFromLocalStorage().filter(a=>t.includes(a.cca3)).map(a=>a.name.common):[]}getCountriesFromLocalStorage(){return this.localStorage.get("countries")}getCountriesByName(t){const c=this.getCountriesFromLocalStorage().find(a=>a.name.common===t);if(!c)throw new Error("Country not found");return(0,L.of)(c)}filtersCountryByNameOrRegion(t){const{search:r,region:c}=t;let a=this.getCountriesFromLocalStorage();if(c&&(a=a.filter(A=>A.region===c)),r){const f=this.normalizeString(r);a=a.filter(m=>{const _=this.normalizeString(m.name.common),on=this.normalizeString(m.translations.por.common);return _.includes(f)||on.includes(f)}).sort((m,_)=>m.name.common.localeCompare(_.name.common))}this.countries$$.next(a)}normalizeString(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(S.eN),n.LFG(U.n))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Z=(()=>{class e{transform(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Yjl({name:"population",type:e,pure:!0}),e})();var l;function F(e,o){if(1&e&&(n.TgZ(0,"li")(1,"span"),n._uU(2,"Currencies"),n.qZA(),n._uU(3),n.qZA()),2&e){const t=o.$implicit,r=o.last;n.xp6(3),n.AsE(" ",t,"",r?"":", "," ")}}function B(e,o){if(1&e&&(n.ynx(0),n.YNc(1,F,4,2,"li",13),n.BQk()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.getCurrencyNames(t.country.currencies))}}function j(e,o){if(1&e&&(n.ynx(0),n._uU(1),n.BQk()),2&e){const t=o.$implicit,r=o.last;n.xp6(1),n.AsE(" ",t,"",r?"":", "," ")}}function I(e,o){if(1&e&&(n.ynx(0),n.TgZ(1,"li")(2,"span"),n._uU(3,"Languages:"),n.qZA(),n.YNc(4,j,2,2,"ng-container",13),n.qZA(),n.BQk()),2&e){const t=n.oxw();n.xp6(4),n.Q6J("ngForOf",t.getLanguageArray(t.country.languages))}}function q(e,o){if(1&e&&(n.ynx(0),n.TgZ(1,"button",14),n._uU(2),n.qZA(),n.BQk()),2&e){const t=o.$implicit;n.xp6(1),n.MGl("routerLink","/restcountries/details/",t,""),n.xp6(1),n.hij(" ",t," ")}}function J(e,o){if(1&e&&(n.ynx(0),n.TgZ(1,"h2"),n._uU(2,"Border Countries:"),n.qZA(),n.YNc(3,q,3,2,"ng-container",13),n.BQk()),2&e){const t=n.oxw();n.xp6(3),n.Q6J("ngForOf",t.borders)}}let d=((l=class{constructor(o,t){this.route=o,this.countriesService=t,this.keyLanguageInNativeName=!1}ngOnInit(){this.initCountryParams()}initCountryParams(){this.route.params.pipe((0,h.t)(this),(0,v.U)(o=>o.name),(0,w.w)(o=>this.countriesService.getCountriesByName(o))).subscribe({next:o=>{this.country=o,this.getBorders(),this.getKey(),this.verifyKeyLanguage()}})}getLanguageArray(o){return Object.values(o)}getCurrencyNames(o){return Object.values(o).map(t=>t.name)}getKey(){return this.country.languages?this.keyLanguage=Object.keys(this.country.languages)[0]:null}getBorders(){this.country.borders&&(this.borders=this.countriesService.getCountriesNameByBorders(this.country.borders))}verifyKeyLanguage(){return this.keyLanguageInNativeName=!(!this.country.name.nativeName||!(this.keyLanguage in this.country.name.nativeName))}}).\u0275fac=function(o){return new(o||l)(n.Y36(g.gz),n.Y36(x))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-country-detail"]],decls:47,vars:13,consts:[[1,"detail-main"],[1,"details-nav","showLeft"],["routerLink","/restcountries"],[1,"icon-nav"],[1,"country-container"],[1,"showUp",3,"src"],[1,"country-content-container","showRight"],[1,"country-content"],[1,"country-infos"],[1,"country-infos-left"],[1,"country-infos-rigth"],[4,"ngIf"],[1,"country-borders-container"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(o,t){1&o&&(n.TgZ(0,"section",0)(1,"div",1)(2,"button",2)(3,"mat-icon",3),n._uU(4,"keyboard_backspace"),n.qZA(),n.TgZ(5,"p"),n._uU(6,"Back"),n.qZA()()(),n.TgZ(7,"section",4),n._UZ(8,"img",5),n.TgZ(9,"div",6)(10,"div",7)(11,"h2"),n._uU(12),n.qZA()(),n.TgZ(13,"div",8)(14,"div",9)(15,"ul")(16,"li")(17,"span"),n._uU(18,"Native Name:"),n.qZA(),n._uU(19),n.qZA(),n.TgZ(20,"li")(21,"span"),n._uU(22,"Population:"),n.qZA(),n._uU(23),n.ALo(24,"population"),n.qZA(),n.TgZ(25,"li")(26,"span"),n._uU(27,"Region:"),n.qZA(),n._uU(28),n.qZA(),n.TgZ(29,"li")(30,"span"),n._uU(31,"Sub Region:"),n.qZA(),n._uU(32),n.qZA()()(),n.TgZ(33,"div",10)(34,"ul")(35,"li")(36,"span"),n._uU(37,"Capital:"),n.qZA(),n._uU(38),n.qZA(),n.TgZ(39,"li")(40,"span"),n._uU(41,"Top Level Domain:"),n.qZA(),n._uU(42),n.qZA(),n.YNc(43,B,2,1,"ng-container",11),n.YNc(44,I,5,1,"ng-container",11),n.qZA()()(),n.TgZ(45,"div",12),n.YNc(46,J,4,1,"ng-container",11),n.qZA()()()()),2&o&&(n.xp6(8),n.s9C("src",t.country.flags.png,n.LSH),n.xp6(4),n.Oqu(t.country.name?t.country.name.common:"N/A"),n.xp6(7),n.hij(" ",t.keyLanguageInNativeName?t.country.name.nativeName[t.keyLanguage].common:"N/A"," "),n.xp6(4),n.hij(" ",t.country?n.lcZ(24,11,t.country.population):"N/A"," "),n.xp6(5),n.hij(" ",t.country?t.country.region:"N/A",""),n.xp6(4),n.hij(" ",t.country.subregion?t.country.subregion:"N/A"," "),n.xp6(6),n.hij(" ",t.country.capital?t.country.capital:"N/A"," "),n.xp6(4),n.hij(" ",t.country.tld?t.country.tld[0]:"N/A"," "),n.xp6(1),n.Q6J("ngIf",t.country.currencies),n.xp6(1),n.Q6J("ngIf",t.country.languages),n.xp6(2),n.Q6J("ngIf",t.borders))},dependencies:[u.sg,u.O5,g.rH,C.Hw,Z],styles:["[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]{margin-bottom:40px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:var(--tertiary-color);color:var(--secondary-color);padding:8px 16px;border-radius:4px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:.2s ease}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--blue-primary-color);color:#fff}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .details-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:30px;height:100%}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:350px;object-fit:cover;width:485px;border-radius:15px}@media (max-width: 600px){[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px}}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:30px;color:var(--secondary-color)}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:40px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   .country-infos-rigth[_ngcontent-%COMP%]{max-width:250px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] ~ li[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px;max-width:550px}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{white-space:nowrap;font-size:1.1rem;font-weight:700}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:5px 10px;background-color:var(--tertiary-color);color:var(--secondary-color);border-radius:4px;transition:.2s ease}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]   .country-borders-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--tertiary-color-light)}@media (max-width: 1200px){[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{flex-direction:column;gap:25px}}@media (max-width: 1000px){[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-container[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{flex-direction:row}}@media (max-width: 600px){[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-infos[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .detail-main[_ngcontent-%COMP%]   .country-content-container[_ngcontent-%COMP%]{width:100%}}"]}),l);d=(0,b.gn)([(0,h.c)()],d);let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-details"]],decls:2,vars:0,consts:[[1,"container","detail"]],template:function(t,r){1&t&&(n.TgZ(0,"section",0),n._UZ(1,"app-country-detail"),n.qZA())},dependencies:[d],styles:["[_nghost-%COMP%]   .detail[_ngcontent-%COMP%]{padding:60px 0}"]}),e})();var k=i(7579),R=i(8372);const $=function(e){return["details",e]};let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-countrie-card"]],inputs:{country:"country"},decls:20,vars:10,consts:[[1,"countrie-card","showUp",3,"routerLink"],["alt","Photo of a Shiba Inu",3,"src"],[1,"countrie-card-content"],[1,"countrie-card-content-title"],[1,"countrie-card-content-subtitle"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"img",1),n.TgZ(2,"div",2)(3,"h2",3),n._uU(4),n.qZA(),n.TgZ(5,"div",4)(6,"ul")(7,"li")(8,"strong"),n._uU(9,"Population"),n.qZA(),n._uU(10),n.ALo(11,"population"),n.qZA(),n.TgZ(12,"li")(13,"strong"),n._uU(14,"Capital"),n.qZA(),n._uU(15),n.qZA(),n.TgZ(16,"li")(17,"strong"),n._uU(18,"Region"),n.qZA(),n._uU(19),n.qZA()()()()()),2&t&&(n.Q6J("routerLink",n.VKq(8,$,r.country.name.common)),n.xp6(1),n.s9C("src",r.country.flags.png,n.LSH),n.xp6(3),n.Oqu(r.country.name.common),n.xp6(6),n.hij(": ",n.lcZ(11,6,r.country.population)," "),n.xp6(5),n.hij(": ",r.country.capital,""),n.xp6(4),n.hij(": ",r.country.region,""))},dependencies:[g.rH,Z],styles:[".countrie-card[_ngcontent-%COMP%]{border-radius:10px;background-color:var(--primary-color);box-shadow:0 0 10px #0000001a;width:100%;height:100%;cursor:pointer;overflow:hidden}.countrie-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover;border-radius:10px 10px 0 0;box-shadow:0 0 15px #00000026}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:24px;color:var(--secondary-color)}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;margin-bottom:20px}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-subtitle[_ngcontent-%COMP%]{font-size:.9rem;letter-spacing:1;font-weight:300;color:var(--secondary-color)}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-subtitle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}.countrie-card[_ngcontent-%COMP%]   .countrie-card-content[_ngcontent-%COMP%]   .countrie-card-content-subtitle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] ~ li[_ngcontent-%COMP%]{margin-top:6px}"]}),e})();var D=i(3238);function Y(e,o){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"mat-option",6),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.filterChange())}),n._uU(2),n.qZA(),n.BQk()}if(2&e){const t=o.$implicit;n.xp6(1),n.Q6J("value",t),n.xp6(1),n.Oqu(t)}}let E=(()=>{class e{constructor(){this.countryName=new n.vpe,this.regionName=new n.vpe,this.filters=new n.vpe,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.initForm()}initForm(){this.form=new s.cw({name:new s.NI(""),region:new s.NI("")})}filterChange(){const t=this.form.controls.name.value.trim();this.filters.emit({search:t,region:this.form.controls.region.value})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-countries-search"]],inputs:{country:"country"},outputs:{countryName:"countryName",regionName:"regionName",filters:"filters"},decls:15,vars:3,consts:[[1,"countries"],[3,"formGroup"],["appearance","fill",1,"countries-input","showRight"],["matInput","","formControlName","name",3,"input"],["appearance","fill",1,"countries-input","showLeft"],["formControlName","region"],[3,"value","click"],[4,"ngFor","ngForOf"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label")(4,"mat-icon"),n._uU(5,"search"),n.qZA(),n._uU(6," Search for a country... "),n.qZA(),n.TgZ(7,"input",3),n.NdJ("input",function(){return r.filterChange()}),n.qZA()(),n.TgZ(8,"mat-form-field",4)(9,"mat-label"),n._uU(10,"Filter by region"),n.qZA(),n.TgZ(11,"mat-select",5)(12,"mat-option",6),n.NdJ("click",function(){return r.filterChange()}),n._uU(13,"All"),n.qZA(),n.YNc(14,Y,3,2,"ng-container",7),n.qZA()()()()),2&t&&(n.xp6(1),n.Q6J("formGroup",r.form),n.xp6(11),n.Q6J("value",""),n.xp6(2),n.Q6J("ngForOf",r.regions))},dependencies:[u.sg,p.KE,p.hX,y.Nt,C.Hw,M.gD,D.ey,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--secondary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .countries-input[_ngcontent-%COMP%]{width:270px;font-size:1.2rem}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .countries-input[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-select-min-line{color:var(--secondary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-input-element{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-label{color:var(--secondary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-underline{background-color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-ripple{background-color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused mat-icon{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-ripple{background-color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-required-marker{color:var(--blue-primary-color)}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-input-element{color:var(--blue-primary-color)}@media (max-width: 768px){.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{flex-direction:column}.countries[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .countries-input[_ngcontent-%COMP%]{width:100%}}"]}),e})();function X(e,o){if(1&e&&(n.TgZ(0,"li"),n._UZ(1,"app-countrie-card",7),n.qZA()),2&e){const t=o.$implicit;n.xp6(1),n.Q6J("country",t)}}function H(e,o){if(1&e&&(n.ynx(0),n.TgZ(1,"ul",5),n.YNc(2,X,2,1,"li",6),n.qZA(),n.BQk()),2&e){const t=n.oxw().ngIf;n.xp6(2),n.Q6J("ngForOf",t)}}function K(e,o){1&e&&(n.TgZ(0,"div",8)(1,"p"),n._uU(2,"N\xe3o h\xe1 um pa\xeds com esse nome."),n.qZA()())}function G(e,o){if(1&e&&(n.ynx(0),n.YNc(1,H,3,1,"ng-container",2),n.YNc(2,K,3,0,"ng-template",null,4,n.W1O),n.BQk()),2&e){const t=o.ngIf,r=n.MAs(3);n.xp6(1),n.Q6J("ngIf",t.length)("ngIfElse",r)}}function W(e,o){1&e&&n._UZ(0,"mat-spinner")}let V=(()=>{class e{constructor(t){this.countrieService=t,this.searchInput$=new k.x}ngOnInit(){this.countrieService.getAllCountries(),this.getAllCountries(),this.filterCountryOrRegion()}getAllCountries(){this.allCountries$=this.countrieService.countries$$.pipe((0,v.U)(t=>t.sort((r,c)=>r.name.common.localeCompare(c.name.common))))}filterCountryOrRegion(){this.searchInput$.pipe((0,R.b)(300)).subscribe(t=>{this.countrieService.filtersCountryByNameOrRegion(t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(x))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-countries-list"]],decls:7,vars:7,consts:[[3,"country","filters"],[1,"countries-list-container"],[4,"ngIf","ngIfElse"],["loading",""],["emptyList",""],[1,"countries-list-grid"],[4,"ngFor","ngForOf"],[3,"country"],[1,"country-not-found","showUp"]],template:function(t,r){if(1&t&&(n.TgZ(0,"app-countries-search",0),n.NdJ("filters",function(a){return r.searchInput$.next(a)}),n.ALo(1,"async"),n.qZA(),n.TgZ(2,"section",1),n.YNc(3,G,4,2,"ng-container",2),n.ALo(4,"async"),n.YNc(5,W,1,0,"ng-template",null,3,n.W1O),n.qZA()),2&t){const c=n.MAs(6);n.Q6J("country",n.lcZ(1,3,r.allCountries$)),n.xp6(3),n.Q6J("ngIf",n.lcZ(4,5,r.allCountries$))("ngIfElse",c)}},dependencies:[u.sg,u.O5,P.Ou,z,E,u.Ov],styles:["[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]{padding-bottom:50px}[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .country-not-found[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;padding-top:30px}[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .country-not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600;color:var(--secondary-color)}[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:40px;justify-content:center}@media (max-width: 1650px){[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}@media (max-width: 1400px){[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1100px){[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 650px){[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{transition:.1s linear}[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{scale:1.02}@media (max-width: 650px){[_nghost-%COMP%]   .countries-list-container[_ngcontent-%COMP%]   .countries-list-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{scale:1}}"]}),e})();const nn=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-countries"]],decls:3,vars:0,consts:[[1,"container"]],template:function(t,r){1&t&&(n.TgZ(0,"main")(1,"div",0),n._UZ(2,"app-countries-list"),n.qZA()())},dependencies:[V],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{margin-top:30px}"]}),e})()},{path:"details/:name",component:Q}];let tn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(nn),g.Bz]}),e})(),en=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,tn,p.lN,y.c,C.Ps,M.LD,N.QW,s.u5,s.UX,P.Cq]}),e})()}}]);