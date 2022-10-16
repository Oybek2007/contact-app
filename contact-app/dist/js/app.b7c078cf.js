(function(){"use strict";var e={178:function(e,a,n){var t=n(963),o=n(252),l=n(577);const s={key:0},i={key:1},r={key:2},c={key:0},u={key:3};function d(e,a,n,t,d,p){const m=(0,o.up)("router-link"),v=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[t.user?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(m,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("All")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(m,{to:"/createContact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Create")])),_:1})])):(0,o.kq)("",!0),t.user?((0,o.wg)(),(0,o.iD)("span",i,[(0,o._)("h3",null,"Salom: "+(0,l.zw)(t.user.displayName),1)])):(0,o.kq)("",!0),t.user?((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("button",{onClick:a[0]||(a[0]=(...e)=>t.handleLogOut&&t.handleLogOut(...e)),id:"logOutBtn"},"Logout"),t.error?((0,o.wg)(),(0,o.iD)("span",c,(0,l.zw)(t.error),1)):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(m,{to:"/login"},{default:(0,o.w5)((()=>[(0,o.Uk)("LogIn")])),_:1}),(0,o.Wm)(m,{to:"/signup"},{default:(0,o.w5)((()=>[(0,o.Uk)("SignUp")])),_:1})]))]),(0,o.Wm)(v)],64)}var p=n(262),m=n(503);n(853),n(211);const v={apiKey:"AIzaSyBQfEeoC4mW71d9Q16uqdqH_qInNFfDmYA",authDomain:"contact-app-5b1d9.firebaseapp.com",projectId:"contact-app-5b1d9",storageBucket:"contact-app-5b1d9.appspot.com",messagingSenderId:"338708099025",appId:"1:338708099025:web:7698a4d771d69b87bd7af0"};m.Z.initializeApp(v);const g=m.Z.firestore(),w=m.Z.auth(),h=m.Z.firestore.FieldValue.serverTimestamp,f=(0,p.iH)(w.currentUser);w.onAuthStateChanged((e=>{f.value=e}));const y=()=>({user:f});var _=y;const b=(0,p.iH)(null),k=(0,p.iH)(!1),C=async()=>{b.value=null,k.value=!0;try{await w.signOut(),k.value=!1}catch(e){console.log(e.message),b.value=e.message,k.value=!1}},D=()=>({error:b,logout:C,isPending:k});var U=D,P=n(201),H={setup(){const e=(0,P.tv)(),{user:a}=_(),{error:n,logout:t,isPending:o}=U(),l=async()=>{confirm("Do you want to log out of your account ?")?(await t(),e.push("/login")):console.log("Logout Cenceled")};return{user:a,error:n,handleLogOut:l}}},I=n(744);const S=(0,I.Z)(H,[["render",d]]);var E=S;const W={class:"home"},q={class:"forData"},A={key:0,class:"allContactsView"},L={key:1};function V(e,a,n,t,l,s){const i=(0,o.up)("AllContactView"),r=(0,o.up)("Loading");return(0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("div",q,[t.contacts?((0,o.wg)(),(0,o.iD)("div",A,[(0,o.Wm)(i,{contacts:t.contacts},null,8,["contacts"])])):((0,o.wg)(),(0,o.iD)("div",L,[(0,o.Wm)(r,{class:"loading"}),(0,o.Uk)("No contacts ")]))])])}const O={key:0},B={class:"backgroundDiv"},N={class:"mainlyDiv container"},x={class:"filter__nav"},F={class:"search__nav"},Z={class:"single container"},M={class:"info"},T={id:"name"},z={id:"number"},Y=["href"],j={id:"email"},Q=["href"],K={key:1,style:{color:"red"},href:"#"},R=(0,o._)("span",null,"Email not entered",-1),$=[R],G={id:"tag"},J={id:"marked"},X={key:0},ee={key:1},ae={class:"controllers"},ne=["href"],te={key:1},oe=(0,o._)("br",null,null,-1);function le(e,a,n,s,i,r){const c=(0,o.up)("ion-icon"),u=(0,o.up)("router-link");return s.searchFunc?((0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",B,[(0,o._)("div",N,[(0,o._)("div",x,[(0,o._)("button",{onClick:a[0]||(a[0]=e=>s.filterBySort("all")),class:(0,l.C_)("all"==s.tag?"active":"simple")}," All ",2),(0,o._)("button",{onClick:a[1]||(a[1]=e=>s.filterBySort("family")),class:(0,l.C_)("family"==s.tag?"active":"simple")}," Family ",2),(0,o._)("button",{onClick:a[2]||(a[2]=e=>s.filterBySort("friends")),class:(0,l.C_)("friends"==s.tag?"active":"simple")}," Friends ",2),(0,o._)("button",{onClick:a[3]||(a[3]=e=>s.filterBySort("work")),class:(0,l.C_)("work"==s.tag?"active":"simple")}," Work ",2),(0,o._)("button",{onClick:a[4]||(a[4]=e=>s.filterBySort("other")),class:(0,l.C_)("other"==s.tag?"active":"")}," Other ",2)]),(0,o._)("div",F,[(0,o.wy)((0,o._)("input",{type:"search",placeholder:"Search contact...","onUpdate:modelValue":a[5]||(a[5]=e=>s.search=e)},null,512),[[t.nr,s.search]]),(0,o.Wm)(c,{class:"searchIcon",name:"search-outline"})])])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.searchFunc,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"contacts",key:e.id},[(0,o._)("div",Z,[(0,o._)("div",M,[(0,o._)("h2",T,"Name: "+(0,l.zw)(e.name),1),(0,o._)("h4",z,[(0,o.Uk)(" Phone number: "),(0,o._)("a",{href:"tel:"+e.number},(0,l.zw)(e.number),9,Y)]),(0,o._)("h4",j,[(0,o.Uk)(" Email: "),e.email?((0,o.wg)(),(0,o.iD)("a",{key:0,href:"mailto:"+e.email},[(0,o._)("span",null,(0,l.zw)(e.email),1)],8,Q)):((0,o.wg)(),(0,o.iD)("a",K,$))]),(0,o._)("h4",G,"Tag: "+(0,l.zw)(e.tag),1),(0,o._)("h4",J,[(0,o.Uk)(" Mark: "),e.marked?((0,o.wg)(),(0,o.iD)("span",X,"Marked")):((0,o.wg)(),(0,o.iD)("span",ee,"Not specified"))])]),(0,o._)("div",ae,[(0,o._)("a",{href:"tel:"+e.number},[(0,o.Wm)(c,{class:"controlIcon callIcon",name:"call-outline"})],8,ne),(0,o.Wm)(u,{to:{name:"EditContact",params:{id:e.id}}},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"controlIcon editIcon",name:"create-outline"})])),_:2},1032,["to"]),(0,o.Wm)(c,{onClick:a=>s.hendleDelete(e.id),class:"controlIcon deleteIcon",name:"trash-outline"},null,8,["onClick"])])])])))),128))])):((0,o.wg)(),(0,o.iD)("div",te,[(0,o._)("h1",null,[(0,o.Uk)(" You have no contacts "),oe,(0,o.Uk)(" You can create a new contact from "),(0,o.Wm)(u,{to:"/createContact",class:"mainlyA"},{default:(0,o.w5)((()=>[(0,o.Uk)("here")])),_:1})])]))}const se=(e,a)=>{const n=(0,p.iH)(null),t=(0,p.iH)(null),o=g.collection(e).doc(a),l=async()=>{t.value=!0;try{const e=await o.delete();return t.value=!1,e}catch(e){console.log(e.message),n.value="Could not delete element !",t.value=!1}},s=async e=>{t.value=!0;try{const a=await o.update(e);return t.value=!1,a}catch(a){console.log(a.message),n.value="Could not old element update element !",t.value=!1}};return{error:n,isPending:t,deleteContact:l,updateContact:s}};var ie=se;const re=e=>((0,o.dD)("data-v-046e1cee"),e=e(),(0,o.Cn)(),e),ce={class:"edit"},ue=re((()=>(0,o._)("h2",null,"Welcome to Edit-Contact Page",-1))),de={class:"forInput"},pe=re((()=>(0,o._)("label",{for:"name"},"Name: ",-1))),me={class:"forInput"},ve=re((()=>(0,o._)("label",{for:"number"},"Number:",-1))),ge={class:"forInput"},we=re((()=>(0,o._)("label",{for:"email"},"Email:",-1))),he={class:"footerInputs"},fe=re((()=>(0,o._)("label",{for:"tag"},"Tag:",-1))),ye=(0,o.uE)('<option value="" disabled data-v-046e1cee>Select Tag</option><option value="family" data-v-046e1cee>Family</option><option value="friends" data-v-046e1cee>Friends</option><option value="work" data-v-046e1cee>Work</option><option value="other" data-v-046e1cee>Other</option>',5),_e=[ye],be=re((()=>(0,o._)("div",null,[(0,o._)("button",{type:"reset"},"Reset")],-1))),ke=re((()=>(0,o._)("label",{for:"checkbox"},"Mark",-1))),Ce={key:1,type:"submit",class:"addBtn"};function De(e,a,n,s,i,r){const c=(0,o.up)("Loading");return(0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("form",{onSubmit:a[5]||(a[5]=(0,t.iM)(((...e)=>s.handleUpdateContact&&s.handleUpdateContact(...e)),["prevent"]))},[ue,(0,o._)("h4",null,"Your Contact id: "+(0,l.zw)(e.$route.params.id),1),(0,o._)("div",de,[pe,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":a[0]||(a[0]=e=>s.name=e),required:""},null,512),[[t.nr,s.name]])]),(0,o._)("div",me,[ve,(0,o.wy)((0,o._)("input",{type:"number",id:"number","onUpdate:modelValue":a[1]||(a[1]=e=>s.number=e),required:""},null,512),[[t.nr,s.number]])]),(0,o._)("div",ge,[we,(0,o.wy)((0,o._)("input",{type:"email",id:"email","onUpdate:modelValue":a[2]||(a[2]=e=>s.email=e)},null,512),[[t.nr,s.email]])]),(0,o._)("div",he,[(0,o._)("div",null,[fe,(0,o.wy)((0,o._)("select",{name:"tag",id:"tag","onUpdate:modelValue":a[3]||(a[3]=e=>s.tag=e),required:""},_e,512),[[t.bM,s.tag]])]),be,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":a[4]||(a[4]=e=>s.mark=e)},null,512),[[t.e8,s.mark]]),ke])]),s.isPending?((0,o.wg)(),(0,o.j4)(c,{key:0,class:"loading"})):((0,o.wg)(),(0,o.iD)("button",Ce,"Update contact"))],32)])}const Ue=(e,a)=>{const n=(0,p.iH)(null),t=(0,p.iH)(null);let l=g.collection(e).orderBy("createdAt","desc");a&&(l=l.where(...a));const s=l.onSnapshot((e=>{let a=[];e.docs.forEach((e=>{a.push({...e.data(),id:e.id})})),n.value=a,t.value=null}),(e=>{console.log(e.message),t.value=e.message}));g.collection(e).orderBy("createdAt","desc");return a&&(l=l.where(...a)),(0,o.m0)((e=>{e((()=>s()))})),{contacts:n,error:t}};var Pe=Ue;const He=e=>((0,o.dD)("data-v-1ec0e802"),e=e(),(0,o.Cn)(),e),Ie={class:"forLoading"},Se=He((()=>(0,o._)("div",{class:"spin"},null,-1))),Ee=He((()=>(0,o._)("h1",{id:"mainAnimation"},"Loading...",-1))),We=He((()=>(0,o._)("div",{class:"spin"},null,-1))),qe=[Se,Ee,We];function Ae(e,a){return(0,o.wg)(),(0,o.iD)("div",Ie,qe)}const Le={},Ve=(0,I.Z)(Le,[["render",Ae],["__scopeId","data-v-1ec0e802"]]);var Oe=Ve,Be={name:"EditContact",props:["id","contact"],components:{Loading:Oe},setup(e,a){const n=(0,p.iH)(!1);let t=e.id;const{updateContact:o,error:l}=ie("con tacts",t),{user:s}=_(),i=(0,P.tv)(),r=(0,p.iH)(""),c=(0,p.iH)(""),u=(0,p.iH)(""),d=(0,p.iH)(""),m=(0,p.iH)(!1),{contacts:v}=Pe("contacts",["creatorId","==",s.value.uid]),g=async()=>{n.value=!0;try{await o({name:r.value,number:c.value,email:u.value,tag:d.value,marked:m.value});l.value||(console.log("Contact updated successfully !"),n.value=!1,i.push({name:"allContacts"}))}catch(l){l.value&&(n.value=!1,console.log("The contact was not updated successfully !"),console.log(l.value))}};return{isPending:n,error:l,user:s,router:i,name:r,number:c,email:u,tag:d,mark:m,handleUpdateContact:g,contacts:v}}};const Ne=(0,I.Z)(Be,[["render",De],["__scopeId","data-v-046e1cee"]]);var xe=Ne,Fe={props:["contacts"],setup(e){const a=(0,P.tv)(),n=(0,p.iH)(e.contacts),{user:t}=_(),o=(0,p.iH)(""),l=(0,p.iH)("all"),s=async e=>{const{deleteContact:n,error:o,isPending:l}=ie("contacts",e);confirm("Do you want to log out of your account ?")?(await n(),a.push({name:"allContacts"})):console.log("Delete contact cenceled. By:",t.displayName)},i=a=>{if(l.value=a,"all"==a)return n.value=e.contacts;n.value=e.contacts.filter((e=>{if(e.tag==a)return e;console.log("This tag has no contacts")}))},r=(0,p.Fl)((()=>n.value.filter((e=>e.name.toLowerCase().includes(o.value.toLowerCase()))))),c=window.addEventListener("scroll",(()=>{let e=document.querySelector(".backgroundDiv");e.classList.toggle("sticky",window.scrollY>120)}));return{EditContact:xe,mycontact:n,hendleDelete:s,user:t,filterBySort:i,tag:l,scrollFunc:c,search:o,searchFunc:r}}};const Ze=(0,I.Z)(Fe,[["render",le]]);var Me=Ze,Te={name:"AllContacts",components:{AllContactView:Me,Loading:Oe},setup(){const{user:e}=_(),{contacts:a,error:n}=Pe("contacts",["creatorId","==",e.value.uid]);return{user:e,contacts:a,error:n}}};const ze=(0,I.Z)(Te,[["render",V],["__scopeId","data-v-5dfeb370"]]);var Ye=ze;const je=e=>((0,o.dD)("data-v-7426f2aa"),e=e(),(0,o.Cn)(),e),Qe=je((()=>(0,o._)("h1",null,"Log in",-1))),Ke={class:"firstDivs"},Re={class:"secondDivs"},$e=je((()=>(0,o._)("label",{for:"email"},"Email",-1))),Ge={class:"firstDivs"},Je={class:"secondDivs"},Xe=je((()=>(0,o._)("label",{for:"password"},"Password",-1))),ea={key:0},aa={key:1},na=["type"],ta={key:0,class:"logInBtn"},oa=je((()=>(0,o._)("button",null,"Log In",-1))),la=[oa],sa={key:1,class:"spinners"},ia={class:"error"};function ra(e,a,n,s,i,r){const c=(0,o.up)("router-link"),u=(0,o.up)("ion-icon"),d=(0,o.up)("loading");return(0,o.wg)(),(0,o.iD)("form",{onSubmit:a[3]||(a[3]=(0,t.iM)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[Qe,(0,o._)("div",Ke,[(0,o._)("div",Re,[$e,(0,o._)("span",null,[(0,o.Uk)(" Need an account? "),(0,o.Wm)(c,{to:{name:"signup"},class:"linkToSignup"},{default:(0,o.w5)((()=>[(0,o.Uk)("Sign up")])),_:1})])]),(0,o.wy)((0,o._)("input",{type:"email",id:"email",required:"","onUpdate:modelValue":a[0]||(a[0]=e=>s.email=e),placeholder:"Email:"},null,512),[[t.nr,s.email]])]),(0,o._)("div",Ge,[(0,o._)("div",Je,[Xe,(0,o._)("span",{class:"showBtn",onClick:a[1]||(a[1]=(...e)=>s.showPassword&&s.showPassword(...e))},[(0,o.Wm)(u,{name:s.showUsePassword?"eye-off-outline":"eye-outline",style:{"margin-right":"5px"}},null,8,["name"]),s.showUsePassword?((0,o.wg)(),(0,o.iD)("p",ea,"Hide")):((0,o.wg)(),(0,o.iD)("p",aa,"Show"))])]),(0,o.wy)((0,o._)("input",{type:s.showUsePassword?"text":"password",id:"password",required:"","onUpdate:modelValue":a[2]||(a[2]=e=>s.password=e),placeholder:"Password:"},null,8,na),[[t.YZ,s.password]])]),s.isPending?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ta,la)),s.isPending?((0,o.wg)(),(0,o.iD)("div",sa,[(0,o.Wm)(d)])):(0,o.kq)("",!0),(0,o._)("div",ia,(0,l.zw)(s.error),1)],32)}const ca=(0,p.iH)(null),ua=(0,p.iH)(!1),da=async(e,a)=>{ca.value=null,ua.value=!0;try{const n=await w.signInWithEmailAndPassword(e,a);return ca.value=null,ua.value=!1,n}catch(n){console.log(n.message),ua.value=!1,ca.value=n.message}},pa=()=>({error:ca,login:da,isPending:ua});var ma=pa,va={props:["outputTil"],components:{loading:Oe},setup(){const{login:e,error:a,isPending:n}=ma(),t=(0,P.tv)(),o=(0,p.iH)(""),l=(0,p.iH)(""),s=(0,p.iH)(!1),i=async()=>{await e(l.value,o.value),a.value||(console.log("Foydalanuvchi Muoffaqqiyatli Login bo'ldi"),t.push("/"))},r=()=>{s.value=!s.value,console.log(s.value)};return{password:o,email:l,error:a,handleSubmit:i,isPending:n,showUsePassword:s,showPassword:r}}};const ga=(0,I.Z)(va,[["render",ra],["__scopeId","data-v-7426f2aa"]]);var wa=ga;const ha=e=>((0,o.dD)("data-v-084b742e"),e=e(),(0,o.Cn)(),e),fa=ha((()=>(0,o._)("h1",null,"Sign Up",-1))),ya={class:"firstDivs"},_a=(0,o.uE)('<div class="secondDivs" data-v-084b742e><label for="name" data-v-084b742e>Name</label><span id="anonymousSpan" data-v-084b742e><label for="anonymousInput" class="anonymousLabel" id="" data-v-084b742e>Appearing anonymously to others</label><input type="checkbox" name="" id="anonymousInput" data-v-084b742e></span></div>',1),ba={class:"firstDivs"},ka={class:"secondDivs"},Ca=ha((()=>(0,o._)("label",{for:"email"},"Email",-1))),Da={class:"firstDivs"},Ua={class:"secondDivs"},Pa=ha((()=>(0,o._)("label",{for:"password"},"Password",-1))),Ha={key:0},Ia={key:1},Sa=["type"],Ea={key:0,class:"logInBtn"},Wa=ha((()=>(0,o._)("button",null,"Sign Up",-1))),qa=[Wa],Aa={key:1,class:"spinners"},La={class:"error"};function Va(e,a,n,s,i,r){const c=(0,o.up)("router-link"),u=(0,o.up)("ion-icon"),d=(0,o.up)("loading");return(0,o.wg)(),(0,o.iD)("form",{onSubmit:a[4]||(a[4]=(0,t.iM)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[fa,(0,o._)("div",ya,[_a,(0,o.wy)((0,o._)("input",{type:"text",id:"name",required:"","onUpdate:modelValue":a[0]||(a[0]=e=>s.displayName=e),placeholder:"Name:"},null,512),[[t.nr,s.displayName]])]),(0,o._)("div",ba,[(0,o._)("div",ka,[Ca,(0,o._)("span",null,[(0,o.Uk)(" Already have an account ? "),(0,o.Wm)(c,{to:{name:"login"},class:"linkToSignup"},{default:(0,o.w5)((()=>[(0,o.Uk)("Log In")])),_:1})])]),(0,o.wy)((0,o._)("input",{type:"email",id:"email",required:"","onUpdate:modelValue":a[1]||(a[1]=e=>s.email=e),placeholder:"Email:"},null,512),[[t.nr,s.email]])]),(0,o._)("div",Da,[(0,o._)("div",Ua,[Pa,(0,o._)("span",{class:"showBtn",onClick:a[2]||(a[2]=(...e)=>s.showPassword&&s.showPassword(...e))},[(0,o.Wm)(u,{name:s.showUsePassword?"eye-off-outline":"eye-outline",style:{"margin-right":"5px"}},null,8,["name"]),s.showUsePassword?((0,o.wg)(),(0,o.iD)("p",Ha,"Hide")):((0,o.wg)(),(0,o.iD)("p",Ia,"Show"))])]),(0,o.wy)((0,o._)("input",{type:s.showUsePassword?"text":"password",id:"password",required:"","onUpdate:modelValue":a[3]||(a[3]=e=>s.password=e),placeholder:"Password:"},null,8,Sa),[[t.YZ,s.password]])]),s.isPending?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",Ea,qa)),s.isPending?((0,o.wg)(),(0,o.iD)("div",Aa,[(0,o.Wm)(d)])):(0,o.kq)("",!0),(0,o._)("div",La,(0,l.zw)(s.error),1)],32)}const Oa=(0,p.iH)(null),Ba=(0,p.iH)(!1),Na=async(e,a,n)=>{Ba.value=!0;try{const t=await w.createUserWithEmailAndPassword(e,a);if(Ba.value=!1,!t)throw new Error("You Cannot Sign Up!");return t.user.updateProfile({displayName:n}),Oa.value=null,t}catch(t){console.log(t.message),Ba.value=!1,Oa.value=t.message}},xa=()=>({error:Oa,signup:Na,isPending:Ba});var Fa=xa,Za={components:{loading:Oe},setup(){const{signup:e,error:a,isPending:n}=Fa(),t=(0,P.tv)(),o=(0,p.iH)(""),l=(0,p.iH)(""),s=(0,p.iH)(""),i=(0,p.iH)(!1),r=async()=>{console.log("Mana Senga olam olam Ism, ",s.value,l.value),await e(l.value,o.value,s.value),a.value||(console.log("Foydalanuvchi Muoffaqqiyatli Qo'shilib bo'ldi"),t.push("/"))},c=()=>{i.value=!i.value,console.log(i.value)};return{password:o,email:l,error:a,handleSubmit:r,isPending:n,displayName:s,showUsePassword:i,showPassword:c}}};const Ma=(0,I.Z)(Za,[["render",Va],["__scopeId","data-v-084b742e"]]);var Ta=Ma;const za=e=>((0,o.dD)("data-v-708946d9"),e=e(),(0,o.Cn)(),e),Ya={class:"create"},ja=za((()=>(0,o._)("h2",null,"Welcome to Create-Contact Page",-1))),Qa={class:"forInput"},Ka=za((()=>(0,o._)("label",{for:"name"},"Name:",-1))),Ra={class:"forInput"},$a=za((()=>(0,o._)("label",{for:"number"},"Number:",-1))),Ga={class:"forInput"},Ja=za((()=>(0,o._)("label",{for:"email"},"Email:",-1))),Xa={class:"footerInputs"},en=za((()=>(0,o._)("label",{for:"tag"},"Tag:",-1))),an=(0,o.uE)('<option value="" disabled data-v-708946d9>Select Tag</option><option value="family" data-v-708946d9>Family</option><option value="friends" data-v-708946d9>Friends</option><option value="work" data-v-708946d9>Work</option><option value="other" data-v-708946d9>Other</option>',5),nn=[an],tn=za((()=>(0,o._)("div",null,[(0,o._)("button",{type:"reset"},"Reset")],-1))),on=za((()=>(0,o._)("label",{for:"checkbox"},"Mark",-1))),ln={key:1,type:"submit",class:"addBtn"};function sn(e,a,n,l,s,i){const r=(0,o.up)("Loading");return(0,o.wg)(),(0,o.iD)("div",Ya,[(0,o._)("form",{onSubmit:a[5]||(a[5]=(0,t.iM)(((...e)=>l.handleAddContact&&l.handleAddContact(...e)),["prevent"]))},[ja,(0,o._)("div",Qa,[Ka,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":a[0]||(a[0]=e=>l.name=e),required:""},null,512),[[t.nr,l.name]])]),(0,o._)("div",Ra,[$a,(0,o.wy)((0,o._)("input",{type:"number",id:"number","onUpdate:modelValue":a[1]||(a[1]=e=>l.number=e),required:""},null,512),[[t.nr,l.number]])]),(0,o._)("div",Ga,[Ja,(0,o.wy)((0,o._)("input",{type:"email",id:"email","onUpdate:modelValue":a[2]||(a[2]=e=>l.email=e)},null,512),[[t.nr,l.email]])]),(0,o._)("div",Xa,[(0,o._)("div",null,[en,(0,o.wy)((0,o._)("select",{name:"tag",id:"tag","onUpdate:modelValue":a[3]||(a[3]=e=>l.tag=e),required:""},nn,512),[[t.bM,l.tag]])]),tn,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":a[4]||(a[4]=e=>l.mark=e)},null,512),[[t.e8,l.mark]]),on])]),l.isPending?((0,o.wg)(),(0,o.j4)(r,{key:0,class:"loading"})):((0,o.wg)(),(0,o.iD)("button",ln,"Add contact"))],32)])}const rn=(e,a)=>{const n=(0,p.iH)(null),t=(0,p.iH)(!1),o=async(e,a)=>{t.value=!0;try{console.log("Buuuuu collection",e);const n=await g.collection(e).add(a);return t.value=!1,n}catch(o){console.log(o.message),n.value=o.message,t.value=!1,console.log(t.value)}};return{addContact:o,isPending:t,error:n}};var cn=rn,un={name:"AboutView",components:{Loading:Oe},setup(){const{addContact:e,error:a}=cn("contacts"),{user:n}=_(),t=(0,P.tv)(),o=(0,p.iH)(!1),l=(0,p.iH)(""),s=(0,p.iH)(""),i=(0,p.iH)(""),r=(0,p.iH)(""),c=(0,p.iH)(!1),u=async()=>{o.value=!0;await e("contacts",{name:l.value,number:s.value,email:i.value,tag:r.value,marked:c.value,creatorId:n.value.uid,creatorName:n.value.displayName,createdAt:h()});a.value?o.value=!1:(console.log("Contact successfully added !"),o.value=!1,t.push({name:"allContacts"}))};return{isPending:o,name:l,number:s,email:i,tag:r,mark:c,handleAddContact:u}}};const dn=(0,I.Z)(un,[["render",sn],["__scopeId","data-v-708946d9"]]);var pn=dn;const mn=(e,a,n)=>{let t=w.currentUser;t?n():n({name:"login"})},vn=(e,a,n)=>{let t=w.currentUser;t?n({name:"allContacts"}):n()},gn=[{path:"/",name:"allContacts",component:Ye,beforeEnter:mn},{path:"/login",name:"login",component:wa,beforeEnter:vn},{path:"/signup",name:"signup",component:Ta},{path:"/createContact",name:"CreateContact",component:pn,beforeEnter:mn},{path:"/:id",name:"EditContact",component:xe,props:!0,beforeEnter:mn}],wn=(0,P.p7)({history:(0,P.PO)(),routes:gn});var hn=wn;let fn;w.onAuthStateChanged((()=>{fn||(fn=(0,t.ri)(E).use(hn).mount("#app"))}))}},a={};function n(t){var o=a[t];if(void 0!==o)return o.exports;var l=a[t]={exports:{}};return e[t](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(a,t,o,l){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],l=e[u][2];for(var i=!0,r=0;r<t.length;r++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](t[r])}))?t.splice(r--,1):(i=!1,l<s&&(s=l));if(i){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[t,o,l]}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,l,s=t[0],i=t[1],r=t[2],c=0;if(s.some((function(a){return 0!==e[a]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(r)var u=r(n)}for(a&&a(t);c<s.length;c++)l=s[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},t=self["webpackChunkcontact_app"]=self["webpackChunkcontact_app"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(178)}));t=n.O(t)})();
//# sourceMappingURL=app.b7c078cf.js.map