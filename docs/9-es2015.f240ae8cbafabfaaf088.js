(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KMbw:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class r{}var s=e("Xg1U"),o=e("atuK"),i=e("pMnS"),u=e("SVse"),a=e("iInd"),c=e("lJxs");class b{constructor(n,t,e){this._db=n,this._customer=t,this._auth=e,this.customerList=[]}ngOnInit(){this.getCustomers()}getCustomers(){this._customer.getAll().snapshotChanges().pipe(Object(c.a)(n=>n.map(n=>Object.assign({_doc:n.payload.doc.id},n.payload.doc.data())))).subscribe(n=>{this.customerList=n})}deleteCustomer(n){this._customer.delete(n).catch(n=>{console.log("Error delete: ",n)})}}var d=e("PVcy"),g=e("Xr7G"),h=e("lGQG"),f=e("SxM1");let m=(()=>{class n{constructor(n,t,e,l){this._fs=n,this._auth=t,this._router=e,this.dbPath="/customers",this.customersRef=null,this.notifier=l,this.customersRef=n.collection(this.dbPath,n=>n.where("_userId","==",this._auth.getUserId()))}getAll(){return this.customersRef}add(n){this._fs.collection(this.dbPath,t=>t.where("_userId","==",this._auth.getUserId()).where("NM","==",n.NM)).valueChanges().subscribe(t=>{0===t.length?(this.customersRef.add(Object.assign({},n)),this._router.navigate(["/customer"])):this.notifier.notify("error","\u0414\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")})}delete(n){return this.customersRef.doc(n).delete()}update(n,t){return this.customersRef.doc(n).update(t)}}return n.ngInjectableDef=l.Rb({factory:function(){return new n(l.Sb(g.a),l.Sb(h.a),l.Sb(a.k),l.Sb(f.f))},token:n,providedIn:"root"}),n})();var p=l.qb({encapsulation:0,styles:[[""]],data:{}});function C(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),l.Lb(1,null,[" "," "])),l.Gb(0,u.f,[]),(n()(),l.sb(3,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.deleteCustomer(n.context.$implicit._doc)&&l),l}),null,null)),(n()(),l.Lb(-1,null,["\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]))],null,(function(n,t){n(t,1,0,l.Mb(t,1,0,l.Eb(t,2).transform(t.context.$implicit)))}))}function _(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,3,"a",[["class","btn btn--primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Eb(n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.rb(1,671744,null,0,a.n,[a.k,a.a,u.i],{routerLink:[0,"routerLink"]},null),l.Fb(2,2),(n()(),l.Lb(-1,null,["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"])),(n()(),l.sb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),l.hb(16777216,null,null,1,null,C)),l.rb(6,278528,null,0,u.k,[l.O,l.K,l.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var e=t.component,l=n(t,2,0,"/customer","create");n(t,1,0,l),n(t,6,0,e.customerList)}),(function(n,t){n(t,0,0,l.Eb(t,1).target,l.Eb(t,1).href)}))}function y(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,1,"data-customer-list",[],null,null,null,_,p)),l.rb(1,114688,null,0,b,[d.a,m,h.a],null,null)],(function(n,t){n(t,1,0)}),null)}var v=l.ob("data-customer-list",b,y,{},{},[]),x=e("s7LF"),I=e("XsNI"),P=e("PPXL"),M=e("wd/R");class k{constructor(n,t,e,l,r,s,o,i,u,a,c,b,d,g,h,f,m,p,C){this._id=n,this._userId=t,this._createdDate=e||M.utc().toDate(),this.TP=l||null,this.NM=r||null,this.DC=s||null,this.DD=o||null,this.NU=i||null,this.VU=u||null,this.NS=a||null,this.VS=c||null,this.VNM=b||null,this.VSN=d||null,this.VFN=g||null,this.ACT=h||null,this.Z=f||null,this.VNMB=m||null,this.VSNB=p||null,this.VFNB=C||null}}class O{constructor(n,t,e,l,r){this._customer=n,this._auth=t,this._fb=e,this._egr=l,this._router=r,this.paymentOptions={showTax:!1,tax:20,showPaymentsTerm:!1,paymentsTerm:"",showEndDate:!1},this.form=this._fb.group({UNP:["",[x.s.required,x.s.minLength(9),x.s.maxLength(12)]],createDate:[M().format("DD.MM.YYYY"),[x.s.required]],billFrom:new x.g({}),billTo:new x.g({}),services:new x.g({})})}ngOnInit(){}get f(){return this.form.controls}changePaymentOptions(){}checkAddCustomer(){return this.form.invalid||!this.customerInfo}getCompanyInfo(){this.f.UNP.valid&&this._egr.getCompanyInfo(this.f.UNP.value).subscribe(n=>{n&&(this.customerInfo=new k,this.customerInfo._id=null,this.customerInfo._userId=this._auth.getUserId(),this.customerInfo._createdDate=M.utc().toDate(),this.customerInfo.TP=n.type,this.customerInfo.NM=n.id,this.customerInfo.DC=n.creationDate,this.customerInfo.DD=n.delitionDate,this.customerInfo.NU=n.issueDepartment.id,this.customerInfo.VU=n.issueDepartment.vu,this.customerInfo.NS=n.status.id,this.customerInfo.VS=n.status.vs,this.customerInfo.VNM=n.fullName,this.customerInfo.VSN=2===n.type?"\u0418\u041f "+n.fullName:n.shortName,this.customerInfo.VFN=n.firmName,this.customerInfo.ACT=n.active,this.customerInfo.Z=n.canSellShares,this.customerInfo.VNMB=null,this.customerInfo.VSNB=null,this.customerInfo.VFNB=null)})}addCustomer(){!this.form.invalid&&this.customerInfo&&this._customer.add(this.customerInfo)}}var N=e("IheW");let w=(()=>{class n{constructor(n){this._http=n}getCompanyInfo(n){if(n)return this._http.get(`https://xn--b1agleslgi.xn--90ais/api/companies/Organization/${n}`)}}return n.ngInjectableDef=l.Rb({factory:function(){return new n(l.Sb(N.c))},token:n,providedIn:"root"}),n})();var E=l.qb({encapsulation:0,styles:[[".creater[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;position:relative;margin:20px 0}.creater[_ngcontent-%COMP%]   .creater__editor[_ngcontent-%COMP%]{position:relative;width:100%;padding:30px;border-radius:5px;background-color:#fff;border:1px solid #eee}.creater[_ngcontent-%COMP%]   .creater__editor-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;padding-bottom:1.25rem;border-bottom:1px solid #f2f2f2}.creater[_ngcontent-%COMP%]   .creater__editor-company[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:2rem;border-bottom:1px solid #f2f2f2}.creater[_ngcontent-%COMP%]   .creater__editor-bill[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;padding-top:2rem;padding-bottom:2rem;border-bottom:1px solid #f2f2f2}.creater[_ngcontent-%COMP%]   .creater__editor-bill-block[_ngcontent-%COMP%]{width:50%;flex-shrink:0;margin-right:20px}.creater[_ngcontent-%COMP%]   .creater__editor-bill-block[_ngcontent-%COMP%] + .creater__editor-block[_ngcontent-%COMP%]{margin-left:20px;margin-right:0}.creater[_ngcontent-%COMP%]   .creater__editor-table[_ngcontent-%COMP%], .creater[_ngcontent-%COMP%]   .creater__editor-total[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:2rem;border-bottom:1px solid #f2f2f2}.creater[_ngcontent-%COMP%]   .creater__editor-footer[_ngcontent-%COMP%]{padding-top:2rem;font-size:.8rem;color:#637584;text-align:center}.creater[_ngcontent-%COMP%]   .creater__aside[_ngcontent-%COMP%]{display:block;width:250px;margin-left:15px;flex-shrink:0}.creater[_ngcontent-%COMP%]   .creater__aside-group[_ngcontent-%COMP%] + .creater__aside-group[_ngcontent-%COMP%]{padding-top:15px;margin-top:15px;border-top:1px solid #eee}.creater[_ngcontent-%COMP%]   .creater__btn[_ngcontent-%COMP%]{display:block;width:100%}fb-field[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex}fb-field[_ngcontent-%COMP%] + fb-field[_ngcontent-%COMP%]{margin-left:15px}fb-toggle[_ngcontent-%COMP%]{display:-webkit-box;display:flex}fb-toggle[_ngcontent-%COMP%] + fb-toggle[_ngcontent-%COMP%]{margin-top:15px}"]],data:{}});function S(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,27,"section",[["class","creater"]],null,null,null,null,null)),(n()(),l.sb(1,0,null,null,21,"form",[["class","creater__editor"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,t,e){var r=!0,s=n.component;return"submit"===t&&(r=!1!==l.Eb(n,3).onSubmit(e)&&r),"reset"===t&&(r=!1!==l.Eb(n,3).onReset()&&r),"ngSubmit"===t&&(r=!1!==s.addCustomer()&&r),r}),null,null)),l.rb(2,16384,null,0,x.x,[],null,null),l.rb(3,540672,null,0,x.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l.Ib(2048,null,x.c,null,[x.h]),l.rb(5,16384,null,0,x.n,[[4,x.c]],null,null),(n()(),l.sb(6,0,null,null,13,"div",[["class","creater__editor-header"]],null,null,null,null,null)),(n()(),l.sb(7,0,null,null,5,"fb-field",[["formControlName","UNP"],["label","\u0423\u041d\u041f \u043a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442\u0430"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(n,t,e){var l=!0;return"ngModelChange"===t&&(l=!1!==n.component.getCompanyInfo()&&l),l}),I.b,I.a)),l.rb(8,114688,null,0,P.a,[],{label:[0,"label"],type:[1,"type"],control:[2,"control"]},null),l.Ib(1024,null,x.k,(function(n){return[n]}),[P.a]),l.rb(10,671744,null,0,x.f,[[3,x.c],[8,null],[8,null],[6,x.k],[2,x.v]],{name:[0,"name"]},{update:"ngModelChange"}),l.Ib(2048,null,x.l,null,[x.f]),l.rb(12,16384,null,0,x.m,[[4,x.l]],null,null),(n()(),l.sb(13,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),l.sb(14,0,null,null,5,"fb-field",[["formControlName","createDate"],["label","\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,I.b,I.a)),l.rb(15,114688,null,0,P.a,[],{label:[0,"label"],type:[1,"type"],control:[2,"control"],readonly:[3,"readonly"]},null),l.Ib(1024,null,x.k,(function(n){return[n]}),[P.a]),l.rb(17,671744,null,0,x.f,[[3,x.c],[8,null],[8,null],[6,x.k],[2,x.v]],{name:[0,"name"]},null),l.Ib(2048,null,x.l,null,[x.f]),l.rb(19,16384,null,0,x.m,[[4,x.l]],null,null),(n()(),l.sb(20,0,null,null,2,"div",[["class","creater__editor-company"]],null,null,null,null,null)),(n()(),l.Lb(21,null,[" Company: "," "])),l.Gb(0,u.f,[]),(n()(),l.sb(23,0,null,null,4,"aside",[["class","creater__aside"]],null,null,null,null,null)),(n()(),l.sb(24,0,null,null,2,"div",[["class","creater__aside-group"]],null,null,null,null,null)),(n()(),l.sb(25,0,null,null,1,"button",[["class","btn btn--primary creater__btn creater__btn--primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.addCustomer()&&l),l}),null,null)),(n()(),l.Lb(-1,null,[" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c "])),(n()(),l.sb(27,0,null,null,0,"div",[["class","creater__aside-group"]],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,3,0,e.form),n(t,8,0,"\u0423\u041d\u041f \u043a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442\u0430","text",e.f.UNP),n(t,10,0,"UNP"),n(t,15,0,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f","text",e.f.createDate,!0),n(t,17,0,"createDate")}),(function(n,t){var e=t.component;n(t,1,0,l.Eb(t,5).ngClassUntouched,l.Eb(t,5).ngClassTouched,l.Eb(t,5).ngClassPristine,l.Eb(t,5).ngClassDirty,l.Eb(t,5).ngClassValid,l.Eb(t,5).ngClassInvalid,l.Eb(t,5).ngClassPending),n(t,7,0,l.Eb(t,12).ngClassUntouched,l.Eb(t,12).ngClassTouched,l.Eb(t,12).ngClassPristine,l.Eb(t,12).ngClassDirty,l.Eb(t,12).ngClassValid,l.Eb(t,12).ngClassInvalid,l.Eb(t,12).ngClassPending),n(t,14,0,l.Eb(t,19).ngClassUntouched,l.Eb(t,19).ngClassTouched,l.Eb(t,19).ngClassPristine,l.Eb(t,19).ngClassDirty,l.Eb(t,19).ngClassValid,l.Eb(t,19).ngClassInvalid,l.Eb(t,19).ngClassPending),n(t,21,0,l.Mb(t,21,0,l.Eb(t,22).transform(e.customerInfo))),n(t,25,0,e.checkAddCustomer())}))}function D(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,1,"data-customer-create",[],null,null,null,S,E)),l.rb(1,114688,null,0,O,[m,h.a,x.e,w,a.k],null,null)],(function(n,t){n(t,1,0)}),null)}var V=l.ob("data-customer-create",O,D,{},{},[]),U=e("yA/v"),j=e("1XSQ"),R=e("m7gy"),L=e("z5t0"),z=e("irV9"),T=e("rzCp"),F=e("978R"),A=e("2uy1"),B=e("z/SZ"),K=e("2ZVE"),X=e("ienR"),q=e("bOtU"),G=e("PCNd");class Y{}e.d(t,"CustomerModuleNgFactory",(function(){return J}));var J=l.pb(r,[],(function(n){return l.Bb([l.Cb(512,l.j,l.ab,[[8,[s.a,o.a,o.c,o.b,o.d,i.a,v,V]],[3,l.j],l.v]),l.Cb(4608,u.n,u.m,[l.s,[2,u.z]]),l.Cb(4608,x.u,x.u,[]),l.Cb(4608,x.e,x.e,[]),l.Cb(4608,N.h,N.n,[u.d,l.z,N.l]),l.Cb(4608,N.o,N.o,[N.h,N.m]),l.Cb(5120,N.a,(function(n){return[n]}),[N.o]),l.Cb(4608,N.k,N.k,[]),l.Cb(6144,N.i,null,[N.k]),l.Cb(4608,N.g,N.g,[N.i]),l.Cb(6144,N.b,null,[N.g]),l.Cb(4608,N.f,N.j,[N.b,l.p]),l.Cb(4608,N.c,N.c,[N.f]),l.Cb(5120,U.b,U.e,[U.d,l.x,[2,U.c]]),l.Cb(4608,g.a,g.a,[U.d,[2,U.c],[2,g.b],[2,g.c],l.z,l.x,[2,g.d]]),l.Cb(4608,d.a,d.a,[U.d,[2,U.c],[2,j.a],l.z,l.x]),l.Cb(4608,z.a,z.a,[U.d,[2,U.c],l.z,l.x]),l.Cb(4608,f.k,f.k,[]),l.Cb(4608,f.i,f.i,[]),l.Cb(5120,f.a,f.g,[f.e]),l.Cb(4608,f.f,f.f,[f.i,f.a]),l.Cb(4608,F.a,F.a,[]),l.Cb(4608,A.a,A.a,[l.x,l.D,l.z]),l.Cb(4608,B.a,B.a,[l.j,l.x,l.p,A.a,l.g]),l.Cb(4608,K.f,K.f,[]),l.Cb(4608,X.r,X.r,[]),l.Cb(4608,X.t,X.t,[]),l.Cb(4608,X.a,X.a,[]),l.Cb(4608,X.f,X.f,[]),l.Cb(4608,X.c,X.c,[]),l.Cb(4608,X.h,X.h,[]),l.Cb(4608,X.j,X.j,[]),l.Cb(4608,X.s,X.s,[X.t,X.j]),l.Cb(5120,q.h,q.g,[q.a,q.e]),l.Cb(4608,q.b,q.b,[q.h]),l.Cb(1073742336,u.c,u.c,[]),l.Cb(1073742336,x.t,x.t,[]),l.Cb(1073742336,x.i,x.i,[]),l.Cb(1073742336,x.q,x.q,[]),l.Cb(1073742336,N.e,N.e,[]),l.Cb(1073742336,N.d,N.d,[]),l.Cb(1073742336,U.a,U.a,[l.z]),l.Cb(1073742336,R.a,R.a,[]),l.Cb(1073742336,L.a,L.a,[]),l.Cb(1073742336,T.a,T.a,[]),l.Cb(1073742336,F.d,F.d,[]),l.Cb(1073742336,K.d,K.d,[]),l.Cb(1073742336,X.e,X.e,[]),l.Cb(1073742336,q.f,q.f,[]),l.Cb(1073742336,f.c,f.c,[]),l.Cb(1073742336,G.a,G.a,[]),l.Cb(1073742336,a.o,a.o,[[2,a.t],[2,a.k]]),l.Cb(1073742336,Y,Y,[]),l.Cb(1073742336,r,r,[]),l.Cb(256,N.l,"XSRF-TOKEN",[]),l.Cb(256,N.m,"X-XSRF-TOKEN",[]),l.Cb(256,U.d,{apiKey:"AIzaSyAt0A-pNJNvSe9pUWrby_2-SFQCXI7WMsE",authDomain:"invoices-244bd.firebaseapp.com",databaseURL:"https://invoices-244bd.firebaseio.com",projectId:"invoices-244bd",storageBucket:"invoices-244bd.appspot.com",messagingSenderId:"281478247600",appId:"1:281478247600:web:4bce50f58c2357d55ab775",measurementId:"G-YDRP5ST41Z"},[]),l.Cb(256,U.c,void 0,[]),l.Cb(256,f.e,{position:{horizontal:{position:"middle",distance:12},vertical:{position:"top",distance:10,gap:10}},theme:"material",behaviour:{autoHide:3e4,onClick:"hide",onMouseover:"pauseAutoHide",showDismissButton:!0,stacking:4},animations:{enabled:!0,show:{preset:"slide",speed:300,easing:"ease"},hide:{preset:"fade",speed:300,easing:"ease",offset:50},shift:{speed:300,easing:"ease"},overlap:150}},[]),l.Cb(256,q.e,void 0,[]),l.Cb(256,q.a,q.i,[]),l.Cb(1024,a.i,(function(){return[[{path:"",children:[{path:"",component:b},{path:"create",component:O}]}]]}),[])])}))}}]);