"use server";
export async function createLocation(formData: FormData) {
  let location: any = {};
  let latLng = [0, 0];

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    if (key === "latitude") {
      latLng[0] = Number(value);
    } else if (key === "longitude") {
      latLng[1] = Number(value);
    } else {
      location[key] = value;
    }
  }

  location.latLng = latLng;
  console.log(location);
}
