<script context="module">
	import RoundedBox from 'src/components/atoms/RoundedBox.svelte'

	const pages = [
		{
			link: '/minecraft-tweaks',
			name: 'Minecraft Tweaks',
		},
	]
</script>

<!--
	TODO remade with images when there are more links
	https://tailwind-elements.com/docs/standard/components/gallery
 -->
<div class="md:container md:mx-auto px-5 py-2 mx-auto lg:pt-12 lg:px-32">
	<RoundedBox class="bg-slate-700">
		{#each pages as page}
			<a
				class="text-xl text-blue-300 hover:text-blue-200 hover:underline"
				href={page.link}>
				{page.name}
			</a>
		{/each}
	</RoundedBox>
</div>
