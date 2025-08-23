<script lang="ts">
	import { Action, Code } from '@animotion/core'

	// get a reference to the instance
	let code: ReturnType<typeof Code>
</script>

<Code
	ref={(ref) => (code = ref)}
	lang="svelte"
	theme="poimandres"
	codes={[
		`
			<script>
				let count = 0
				$: double = count * 2
			<\/script>

			<button on:click={() => count++}>
				{double}
			</button>
		`,
		`
			<script>
				let count = $state(0)
				let double = $derived(count * 2)
			<\/script>

			<button onclick={() => count++}>
				{double}
			</button>
		`
	]}
/>

<Action
	undo={() => {
		code.selectLines`*`
	}}
	actions={[
		() => code.selectLines`2,3`,
		() => code.selectLines`2-3,7`,
		() => code.selectToken`double {double}`,
		() => code.selectLines`*`
	]}
/>
