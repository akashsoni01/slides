<script>
	import { Slide } from '@animotion/core'
	import { tween } from '@animotion/motion'

	let progress = tween(0)

	async function animate() {
		await progress.to(1_000_000)
	}
</script>

<button onclick={animate}>
	{progress.current.toLocaleString('en', { maximumFractionDigits: 0 })}
</button>
