// src/utils/geocode.ts
export async function geocodeZip(zip: string) {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(zip + ", USA")}&apiKey=${
        import.meta.env.VITE_GEOAPIFY_API_KEY
    }`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.features.length) throw new Error("ZIP code not found");
    const { lat, lon } = data.features[0].properties;
    return { lat, lon };
}
