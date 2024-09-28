<script>
// @ts-nocheck
	import { enhance } from "$app/forms";
	import * as R from "ramda";


	function onFormSubmit({ formData }) {
		console.log("Inside 'onFormSubmit()'");

		const logoFile = formData.get("logo");

		const reader = new FileReader();

  	reader.onloadend = function() {
			const logoFileInBase64 = reader.result;
			console.log('logoFileInBase64: ' + logoFileInBase64);

			const file = new File(
				[Uint8Array.from(btoa(logoFileInBase64), (m) => m.codePointAt(0))],
				'filename.png',
				{ type: 'image/png' }
			);

			console.log(file);

			formData.set("logoFileInBase64", logoFileInBase64);
		}

  	reader.readAsDataURL(logoFile);
	}
</script>


<form 
	method="POST" 
	aria-labelledby="add-deal-title" 
	enctype="multipart/form-data"
	use:enhance={onFormSubmit}
	>
  <h1 id="add-deal-title">Add a Deal</h1>

	<label>
		Deal Title
		<input name="title" type="text">
	</label>

	<label>
		Original Price
		<input name="originalPrice" type="number">
	</label>

	<label>
		Discount
		<input name="discount" type="discount">
	</label>

  <label>
		Category
		<select name="category">
			<option value="">Select a category</option>
			<hr>
			<option value="foodDrink">Food & Drink</option>
			<option value="bathroom">Bathroom</option>
			<option value="jewelery">Jewelery</option>
			<option value="sports">Sports</option>
			<option value="tech">Technology</option>
			<option value="auto">Auto</option>
			<option value="entertainment">Entertainment</option>
			<option value="travel">Travel</option>
		</select>
	</label>

  <label>
		Logo
		<input name="logo" type="file" accept=".jpg, .png, .svg">
	</label>

	<!-- <label>
		Expiration
		<input name="discount" type="discount">
	</label> -->

  <button type="submit">Add Deal</button>
</form>


<style>
  label {
    display: block;
    margin-block: 10px;
  }

  button {
		margin-top: 10px;
	}
</style>
