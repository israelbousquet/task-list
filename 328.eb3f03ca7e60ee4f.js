"use strict";(self.webpackChunktask_list=self.webpackChunktask_list||[]).push([[328],{8328:(F,i,n)=>{n.r(i),n.d(i,{ViaCepModule:()=>T});var m=n(6895),a=n(4006),b=n(4859),l=n(9549),s=n(4144),f=n(1572),d=n(7533),C=n(4466),o=n(4650),h=n(8505),y=n(4004),M=n(1005),P=n(529);let O=(()=>{class r{constructor(t){this.http=t}getCep(t){return this.http.get(`https://viacep.com.br/ws/${t}/json/`).pipe((0,h.b)(e=>{if(e.erro)throw new Error}),(0,y.U)(e=>({cep:e.cep,rua:e.logradouro,bairro:e.bairro,cidade:e.localidade,estado:e.uf})),(0,M.g)(1e3))}}return r.\u0275fac=function(t){return new(t||r)(o.LFG(P.eN))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var v=n(1443),_=n(5395);function x(r,c){1&r&&(o.ynx(0),o._UZ(1,"mat-spinner",13),o.BQk()),2&r&&(o.xp6(1),o.Q6J("diameter",35))}let Z=(()=>{class r{constructor(t,e){this.cepService=t,this.toastService=e,this.cepIsLoading=!1}ngOnInit(){this.form=new a.cw({cep:new a.NI("",[a.kI.required,a.kI.minLength(8),a.kI.maxLength(8)]),rua:new a.NI(""),bairro:new a.NI(""),cidade:new a.NI(""),estado:new a.NI("")})}consultaCEP(){const t=this.form.get("cep")?.value;t.length<8||(this.cepIsLoading=!0,this.cepService.getCep(t).subscribe({next:e=>{this.cepIsLoading=!1,this.setValueForm(e)},error:e=>{this.cepIsLoading=!1,this.setValueForm(""),this.toastService.showToastError("Cep n\xe3o encontrado")}}))}setValueForm(t){this.form.patchValue({bairro:t.bairro??"",rua:t.rua??"",cidade:t.cidade??"",estado:t.estado??""})}onSubmit(){}formReset(){const t=this.form.value.cep;return t&&t.length?(this.form.setValue({cep:"",rua:"",bairro:"",cidade:"",estado:""}),this.toastService.showToastSucess("Formul\xe1rio resetado com sucesso")):(this.form.setErrors(null),this.form.updateValueAndValidity(),this.toastService.showToastError("O Formul\xe1rio est\xe1 vazio"))}}return r.\u0275fac=function(t){return new(t||r)(o.Y36(O),o.Y36(v.k))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-form"]],decls:31,vars:6,consts:[[1,"showUp",3,"formGroup","ngSubmit"],[1,"input-box"],["appearance","fill"],["matInput","","formControlName","cep",3,"mask","blur"],[4,"ngIf"],[3,"control","label"],["appearance","fill",1,"input"],["matInput","","formControlName","estado","readonly",""],["matInput","","formControlName","cidade","readonly",""],["matInput","","formControlName","bairro","readonly",""],[1,"input-box","grid-span-2"],["matInput","","formControlName","rua","readonly",""],["type","reset",1,"grid-span-3",3,"disabled","click"],[1,"spinner-cep",3,"diameter"]],template:function(t,e){1&t&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return e.onSubmit()}),o.TgZ(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),o._uU(4,"CEP"),o.qZA(),o.TgZ(5,"input",3),o.NdJ("blur",function(){return e.consultaCEP()}),o.qZA(),o.YNc(6,x,2,1,"ng-container",4),o.TgZ(7,"mat-error"),o._UZ(8,"app-error-msg",5),o.qZA()()(),o.TgZ(9,"div",1)(10,"mat-form-field",6)(11,"mat-label"),o._uU(12,"Estado"),o.qZA(),o._UZ(13,"input",7),o.qZA()(),o.TgZ(14,"div",1)(15,"mat-form-field",2)(16,"mat-label"),o._uU(17,"Cidade"),o.qZA(),o._UZ(18,"input",8),o.qZA()(),o.TgZ(19,"div",1)(20,"mat-form-field",2)(21,"mat-label"),o._uU(22,"Bairro"),o.qZA(),o._UZ(23,"input",9),o.qZA()(),o.TgZ(24,"div",10)(25,"mat-form-field",2)(26,"mat-label"),o._uU(27,"Rua"),o.qZA(),o._UZ(28,"input",11),o.qZA()(),o.TgZ(29,"button",12),o.NdJ("click",function(){return e.formReset()}),o._uU(30," Limpar "),o.qZA()()),2&t&&(o.Q6J("formGroup",e.form),o.xp6(5),o.Q6J("mask","00000-000"),o.xp6(1),o.Q6J("ngIf",e.cepIsLoading),o.xp6(2),o.Q6J("control",e.form.controls.cep)("label","CEP"),o.xp6(21),o.Q6J("disabled",!e.form.valid))},dependencies:[m.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,l.TO,l.KE,l.hX,s.Nt,f.Ou,_.u,d.hx],styles:["[_ngcontent-%COMP%]:root{--primary-color: #21293a;--secondary-color: #fafafa;--secondary-color-transparent: #a0beff77;--tertiary-color: #343c58;--tertiary-color-dark: #2c334b;--tertiary-color-light: #4f5a83;--bg-color: #1c1e27;--bg-color-dark: #15161d;--blue-primary-color: #6758f2;--blue-primary-color-light: #0015fc;--blue-secondary-color: #292e66;--red-primary-color: rgb(252, 77, 77);--red-secondary-color: rgb(104, 39, 39);--green-primary-color: rgb(66, 233, 16);--green-secondary-color: rgb(28, 107, 4);--bar-bg: #60636b}[_ngcontent-%COMP%]:root   .ligthMode[_ngcontent-%COMP%]{--primary-color: #ffffff;--secondary-color: #2e2e5a;--secondary-color-transparent: #5865f28f;--tertiary-color: #ecf1ff;--tertiary-color-dark: #c0c8df;--tertiary-color-light: #bfcbec;--bg-color: #f7f9fc;--bg-color-dark: #e9efff;--blue-primary-color: #5865f2;--blue-primary-color-light: #4e5dff;--blue-secondary-color: #a6adff;--red-primary-color: rgb(252, 77, 77);--red-secondary-color: rgb(104, 39, 39);--green-primary-color: rgb(66, 233, 16);--green-secondary-color: rgb(28, 107, 4);--bar-bg: #c3cff1}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .spinner-cep[_ngcontent-%COMP%]{position:absolute;right:0;top:-12px;color:var(--blue-primary-color)}@media (max-width: 768px){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{margin-bottom:12px}}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-top:25px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:12px 0;color:#fff;background-color:var(--blue-primary-color);border-radius:4px;transition:background-color .25s ease}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{cursor:not-allowed;background-color:var(--blue-secondary-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]:hover{background-color:var(--blue-secondary-color);transform:scale(1)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.01)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .grid-span-2[_ngcontent-%COMP%]{grid-column:span 2}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .grid-span-3[_ngcontent-%COMP%]{width:100%;grid-column:span 3}@media (max-width: 1200px){[_nghost-%COMP%]   form[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 1000px){[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:block}}  .mat-form-field .mat-select-min-line{color:var(--secondary-color)}  .mat-form-field .mat-input-element{color:var(--secondary-color)}  .mat-form-field .mat-form-field-label{color:var(--secondary-color)}  .mat-form-field .mat-form-field-underline{background-color:var(--blue-primary-color)}  .mat-form-field .mat-form-field-ripple{background-color:var(--blue-primary-color)}  .mat-form-field.mat-focused mat-icon{color:var(--blue-primary-color)}  .mat-form-field.mat-focused .mat-form-field-label{color:var(--blue-primary-color)}  .mat-form-field.mat-focused .mat-form-field-ripple{background-color:var(--blue-primary-color)}  .mat-form-field.mat-focused .mat-form-field-required-marker{color:var(--blue-primary-color)}  .mat-form-field.mat-focused .mat-input-element{color:var(--secondary-color)}  .mat-progress-spinner circle,   .mat-spinner circle{stroke:var(--blue-primary-color)!important}"]}),r})(),p=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-cep"]],decls:7,vars:0,consts:[[1,"form-container","container","darkMode"],[1,"form-left-title","showRight"],[1,"form"]],template:function(t,e){1&t&&(o.TgZ(0,"main")(1,"div",0)(2,"div",1)(3,"h1"),o._uU(4,"Preencha o CEP"),o.qZA()(),o.TgZ(5,"div",2),o._UZ(6,"app-form"),o.qZA()()())},dependencies:[Z],styles:["[_ngcontent-%COMP%]:root{--primary-color: #21293a;--secondary-color: #fafafa;--secondary-color-transparent: #a0beff77;--tertiary-color: #343c58;--tertiary-color-dark: #2c334b;--tertiary-color-light: #4f5a83;--bg-color: #1c1e27;--bg-color-dark: #15161d;--blue-primary-color: #6758f2;--blue-primary-color-light: #0015fc;--blue-secondary-color: #292e66;--red-primary-color: rgb(252, 77, 77);--red-secondary-color: rgb(104, 39, 39);--green-primary-color: rgb(66, 233, 16);--green-secondary-color: rgb(28, 107, 4);--bar-bg: #60636b}[_ngcontent-%COMP%]:root   .ligthMode[_ngcontent-%COMP%]{--primary-color: #ffffff;--secondary-color: #2e2e5a;--secondary-color-transparent: #5865f28f;--tertiary-color: #ecf1ff;--tertiary-color-dark: #c0c8df;--tertiary-color-light: #bfcbec;--bg-color: #f7f9fc;--bg-color-dark: #e9efff;--blue-primary-color: #5865f2;--blue-primary-color-light: #4e5dff;--blue-secondary-color: #a6adff;--red-primary-color: rgb(252, 77, 77);--red-secondary-color: rgb(104, 39, 39);--green-primary-color: rgb(66, 233, 16);--green-secondary-color: rgb(28, 107, 4);--bar-bg: #c3cff1}[_nghost-%COMP%]   main[_ngcontent-%COMP%]{padding:150px 0}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{border-radius:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-left-title[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-left-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--blue-primary-color);font-size:1.3rem;font-weight:600;line-height:1.15;letter-spacing:2px;text-transform:uppercase}@media (max-width: 1500px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:block}}@media (max-width: 1000px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{width:80%}}@media (max-width: 900px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]{padding:64px 0}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]{width:90%}}"]}),r})();var g=n(490);const I=[{path:"",component:p}];let k=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[g.Bz.forChild(I),g.Bz]}),r})(),T=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r,bootstrap:[p]}),r.\u0275inj=o.cJS({imports:[m.ez,k,a.u5,a.UX,l.lN,s.c,f.Cq,b.ot,C.m,d.yI.forChild()]}),r})()}}]);