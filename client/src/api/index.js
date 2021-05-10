export async function fetchAllDogs() {
  const response = await fetch('/api/dog');
  return response.json();
}

export async function fetchDogByID(id) {
  const response = await fetch(`/api/dog/${id}`);
  return response.json();
}
