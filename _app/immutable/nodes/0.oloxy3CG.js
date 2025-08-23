import"../chunks/Bzak7iHL.js";import{R as r,S as c,T as i,U as a}from"../chunks/DAPzkUYc.js";import{C as u,A as d,P as p,S as b}from"../chunks/tZBaUGbs.js";const f=!0,g=Object.freeze(Object.defineProperty({__proto__:null,prerender:f},Symbol.toStringTag,{value:"Module"}));var m=r("<!> <!>",1);function $(o){let e;var n=m(),t=c(n);u(t,{ref:l=>e=l,lang:"svelte",theme:"poimandres",codes:[`
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
		`]});var s=i(t,2);d(s,{undo:()=>{e.selectLines`*`},actions:[()=>e.selectLines`2,3`,()=>e.selectLines`2-3,7`,()=>e.selectToken`double {double}`,()=>e.selectLines`*`]}),a(o,n)}function P(o){p(o,{children:(e,n)=>{b(e,{class:"h-full place-content-center place-items-center",children:(t,s)=>{$(t)},$$slots:{default:!0}})},$$slots:{default:!0}})}export{P as component,g as universal};
