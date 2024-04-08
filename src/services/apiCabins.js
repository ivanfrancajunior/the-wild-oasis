import supabase, { supabaseUrl } from "./supabase";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Cabins cant be loadded");
  }

  return data;
}

async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabins cant be deleted");
  }

  return data;
}

async function createCabin(newCabin) {
  const imageName = `${Math.random()} - ${newCabin.image.name}`.replace(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  console.log(newCabin);

  if (error) {
    console.log(newCabin);
    throw new Error("Cabin can't be created");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image can't be uploaded and the cabin was not created"
    );
  }

  return data;
}

export { getCabins, deleteCabin, createCabin };
