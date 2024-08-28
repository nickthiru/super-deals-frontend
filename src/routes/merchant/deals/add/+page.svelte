<script>
</script>


<form method="POST" aria-labelledby="add-deal-title" enctype="multipart/form-data">
  <h1 id="add-deal-title">Add a Deal</h1>

	<label>
		Title
		<input name="title" type="text">
	</label>

	<label>
		Brand
		<input name="brand" type="text">
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
		Price
		<input name="price" type="text">
	</label>

  <label>
		Image
		<input name="img" type="file" accept=".jpg, .png, .svg">
	</label>

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
