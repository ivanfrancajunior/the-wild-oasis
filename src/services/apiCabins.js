import supabase from "./supabase";

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
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  console.log(newCabin);

  if (error) {
    console.log(newCabin);
    throw new Error("Cabin can't be created");
  }
  return data;
}

export { getCabins, deleteCabin, createCabin };
