(self.webpackChunkangular_mfe_shell=self.webpackChunkangular_mfe_shell||[]).push([[340],{7340:(g,c,n)=>{n.r(c),n.d(c,{UsersModule:()=>p});var o=n(4888),f=n(140),t=n(5760),h=n(5830);function u(s,e){if(1&s&&(t.\u0275\u0275elementStart(0,"li")(1,"strong"),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(3,"input",2),t.\u0275\u0275elementEnd()),2&s){const d=e.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(d.username)}}function i(s,e){if(1&s&&(t.\u0275\u0275elementStart(0,"ul"),t.\u0275\u0275template(1,u,4,1,"li",1),t.\u0275\u0275elementEnd()),2&s){const d=e.ngIf;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",d)}}let a=(()=>{const e=class{constructor(m){this.apiService=m}ngOnInit(){this.users$=this.apiService.getData("users")}};let s=e;return e.\u0275fac=function(l){return new(l||e)(t.\u0275\u0275directiveInject(h.s))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-users"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["type","checkbox","disabled","true","aria-label","email"]],template:function(l,E){1&l&&(t.\u0275\u0275elementStart(0,"h2"),t.\u0275\u0275text(1,"Users"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(2,i,2,1,"ul",0),t.\u0275\u0275pipe(3,"async")),2&l&&(t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(3,1,E.users$)))},dependencies:[o.NgForOf,o.NgIf,o.AsyncPipe]}),s})();var v=n(433);const r=[{path:"",component:a}];let p=(()=>{const e=class{};let s=e;return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[o.CommonModule,v.u5,f.RouterModule.forChild(r)]}),s})()},5830:(g,c,n)=>{n.d(c,{s:()=>u});var o=n(5760),t=n(6353);let u=(()=>{const a=class{constructor(r){this.http=r,this.baseUrl="https://jsonplaceholder.typicode.com"}getData(r){return this.http.get(`${this.baseUrl}/${r}`)}};let i=a;return a.\u0275fac=function(p){return new(p||a)(o.\u0275\u0275inject(t.HttpClient))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()}}]);