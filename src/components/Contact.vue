<template>
	<div class="max-w-[1200px] m-auto flex flex-col items-center mb-24">
		<div class="text-light text-2xl items-center border-b-2 border-light pb-2">
			<h2 class="font-extralight">Contact</h2>
		</div>
		<form
			action="https://formsubmit.co/nvalero13@gmail.com"
			method="POST"
			class="text-light p-6 mt-8 w-10/12 lg:min-w-[800px]"
		>
			<input
				name="_subject"
				type="hidden"
				value="New contact message from personal webpage"
			/>
			<div class="flex flex-col md:flex-row md:gap-3">
				<div class="md:w-6/12">
					<label for="email" class="block mb-2"
						>Email: <span class="text-main">*</span></label
					>
					<input
						id="email"
						type="email"
						name="email"
						class="border rounded p-2 mb-4 w-full"
						required
					/>
				</div>
				<div class="md:w-6/12">
					<label for="name" class="block mb-2">Name:</label>
					<input
						id="name"
						type="text"
						name="name"
						class="border rounded p-2 mb-4 w-full"
					/>
				</div>
			</div>
			<label for="message" class="block mb-2"
				>Message: <span class="text-main">*</span></label
			>
			<textarea
				name="message"
				id="message"
				rows="4"
				class="border rounded p-2 mb-4 w-full h-54"
			></textarea>

			<button
				class="bg-main hover:bg-opacity-90 text-white rounded py-3 px-5 w-full"
			>
				Send
			</button>
		</form>
	</div>
</template>

<script setup></script>

<style scoped></style>
