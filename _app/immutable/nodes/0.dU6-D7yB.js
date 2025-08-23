import"../chunks/Bzak7iHL.js";import"../chunks/Dwdsd5J-.js";import{T as c,U as a,V as i,W as u,X as d,Y as t,Z as p}from"../chunks/D5EJrqoa.js";import{C as b,A as m,P as f,S as _}from"../chunks/BvKYiJtS.js";const $=!0,S=Object.freeze(Object.defineProperty({__proto__:null,prerender:$},Symbol.toStringTag,{value:"Module"}));var v=c("<!> <!>",1);function g(s){let e=u();var n=v(),o=a(n);b(o,{ref:r=>i(e,r),lang:"svelte",theme:"poimandres",codes:[`
			<script>
				let count = 0
				$: double = count * 2
			<\/script>

			<button on:click={() => count++}>
				{double}
			</button>
		`,`
			<script>
				let count = $state(0)
				let double = $derived(count * 2)
			<\/script>

			<button onclick={() => count++}>
				{double}
			</button>
		`]});var l=d(o,2);m(l,{undo:()=>{t(e).selectLines`*`},actions:[()=>t(e).selectLines`2,3`,()=>t(e).selectLines`2-3,7`,()=>t(e).selectToken`double {double}`,()=>t(e).selectLines`*`]}),p(s,n)}function k(s){f(s,{children:(e,n)=>{_(e,{class:"h-full place-content-center place-items-center",children:(o,l)=>{g(o)},$$slots:{default:!0}})},$$slots:{default:!0}})}export{k as component,S as universal};
