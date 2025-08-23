<script lang="ts">
	import Options from '$lib/components/Options.svelte'
	import { Presentation, Slide, Code, Action } from '@animotion/core'

	let code: ReturnType<typeof Code>
</script>

<Presentation>
	<Slide class="h-full place-content-center place-items-center">
		<Options></Options>
	</Slide>
</Presentation>
