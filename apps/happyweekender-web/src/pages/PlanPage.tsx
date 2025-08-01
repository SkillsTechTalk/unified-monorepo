import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { geocodeZip } from "../utils/geocode";
import { fetchPlaces } from "../utils/geoapify";
import {
    Paper,
    Typography,
    Stack,
    CircularProgress,
    Link,
    Divider,
} from "@mui/material";

export default function PlanPage() {
    const { zipCode, radius = "10", interests = [] } = useLocation().state || {};
    const [places, setPlaces] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const { lat, lon } = await geocodeZip(zipCode);

                const categories = interests
                    .map((i) => {
                        switch (i) {
                            case "Museums":
                                return "tourism.museum";
                            case "Food":
                                return "catering.restaurant";
                            case "Nature":
                                return "leisure.park";
                            case "Nightlife":
                                return "entertainment.nightclub";
                            case "Sports":
                                return "sport.sports_centre";
                            default:
                                return "";
                        }
                    })
                    .filter(Boolean);

                const data = await fetchPlaces(lat, lon, radius, categories);
                setPlaces(data);
            } catch (err) {
                console.error("Failed to fetch places:", err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [zipCode, radius, interests]);

    return (
        <Paper sx={{ maxWidth: 600, mx: "auto", my: 5, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Your Weekend Plan
            </Typography>

            {loading ? (
                <Stack spacing={2} alignItems="center">
                    <CircularProgress />
                    <Typography>Loading activities…</Typography>
                </Stack>
            ) : places.length > 0 ? (
                <Stack spacing={2}>
                    {places.map((place) => (
                        <Paper key={place.properties.place_id} sx={{ p: 2 }}>
                            <Typography variant="subtitle1">
                                {place.properties.name || "Unnamed Place"}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {place.properties.address_line2 || place.properties.formatted}
                            </Typography>
                            <Link
                                href={`https://maps.google.com/?q=${place.properties.lat},${place.properties.lon}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Map
                            </Link>
                        </Paper>
                    ))}
                </Stack>
            ) : (
                <Typography>No activities found. Try broadening your criteria.</Typography>
            )}
        </Paper>
    );
}
