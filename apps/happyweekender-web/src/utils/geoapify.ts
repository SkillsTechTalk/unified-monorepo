// src/utils/geoapify.ts
export async function fetchPlaces(
    lat: string,
    lon: string,
    radiusMiles: string,
    categories: string[]
) {
    const radiusMeters = Number(radiusMiles) * 1609;
    const types = categories.length ? categories.join(",") : "tourism";

    const url = `https://api.geoapify.com/v2/places?categories=${types}&filter=circle:${lon},${lat},${radiusMeters}&limit=20&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.features;
}
