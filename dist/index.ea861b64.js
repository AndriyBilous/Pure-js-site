var t,e=globalThis,s={},r={},n=e.parcelRequiref536;null==n&&((n=function(t){if(t in s)return s[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequiref536=n),(0,n.register)("dRo73",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>s,set:t=>s=t,enumerable:!0,configurable:!0});var s,r=new Map;s=function(t,e){for(var s=0;s<e.length-1;s+=2)r.set(e[s],{baseUrl:t,path:e[s+1]})}}),n("dRo73").register(new URL("",import.meta.url).toString(),JSON.parse('["kh1xT","index.ea861b64.js","dtERz","image.a22fcee5.jpg","bDfbd","index.7d00abcc.css"]'));var o={};function i(t,e=""){return`<div class="row" style="${e}">${t}</div>`}function a(t){return`<div class="col-sm">${t}</div>`}function l(t={}){return"string"==typeof t?t:Object.keys(t).map(e=>`${e}: ${t[e]}`).join(";")}function c(t,e="value"){return`
        <form name="${t}">
            <h5>${t}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="${e}">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr />
        `}o=new URL("image.a22fcee5.jpg",import.meta.url).toString();class u{constructor(t,e){this.value=t,this.options=e}toHTML(){throw Error("Method toHTML is a Must!!!")}}class d extends u{constructor(t,e){super(t,e)}toHTML(){let{tag:t="h1",styles:e}=this.options;return i(a(`<${t}>${this.value}</${t}>`),l(e))}}class p extends u{constructor(t,e){super(t,e)}toHTML(){return i(this.value.map(a).join(""),l(this.options.styles))}}class m extends u{constructor(t,e){super(t,e)}toHTML(){return i(a(`<p>${this.value}</p>`),l(this.options.styles))}}const f=[new d("Pure JS site constructor",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff",padding:"1.5rem","text-align":"center"}}),new class extends u{constructor(t,e){super(t,e)}toHTML(){let{alt:t="",imageStyles:e,styles:s}=this.options;return i(`<img src="${this.value}" alt="${t}" style="${l(e)}"/>`,l(s))}}((t=o)&&t.__esModule?t.default:t,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto"},alt:"It`s a picture"}),new p(["Application, constructed mostly on JavaScript, with minimum of HTML and CSS","Application don`t use any libraries"],{styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",padding:"2rem",color:"#fff","font-weight":"bold"}}),new m("some text",{styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)",padding:"1rem","font-weight":"bold"}})];class h{constructor(t){this.$el=document.querySelector(t)}render(t){this.$el.innerHTML="",t.forEach(t=>{this.$el.insertAdjacentHTML("beforeend",t.toHTML())})}}class g{constructor(t,e){this.$el=document.querySelector(t),this.update=e,this.init()}init(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.addBlock.bind(this))}get template(){return[c("text"),c("title"),c("columns","1Value,2Value,...,NValue")].join("")}addBlock(t){let e;t.preventDefault();let s=t.target.name,r=t.target.value.value,n=t.target.styles.value;switch(s){case"text":e=new m(r,{styles:n});break;case"title":e=new d(r,{styles:n});break;case"columns":e=new p(r.split(","),{styles:n})}this.update(e),t.target.value.value="",t.target.styles.value=""}}new class{constructor(t){this.model=t}init(){let t=new h("#site");t.render(this.model),new g("#panel",e=>{this.model.push(e),t.render(this.model)})}}(f).init();