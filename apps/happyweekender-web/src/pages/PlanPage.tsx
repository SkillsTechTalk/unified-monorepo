// src/pages/PlanPage.tsx
import {
    Box,
    Typography,
    Chip,
    Stack,
    CircularProgress,
    Alert,
    Card,
    CardContent,
    Link as MuiLink,
    Grid,
    Divider,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Place {
    name: string;
    address: string;
    lat: number;
    lon: number;
    website?: string;
    opening_hours?: string;
    description?: string;
    phone?: string;
    outdoor_seating?: boolean;
}

export default function PlanPage() {
    const location = useLocation();
    const { zipCode, radius, groupType, interests } = location.state || {};
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);
    const [locationName, setLocationName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!zipCode || !radius || !interests?.length) {
            setError('Missing required data. Please return to the home page.');
            setLoading(false);
            return;
        }

        const categoryMap: { [key: string]: string } = {
            Nature: 'natural',
            Park: 'leisure.park',
            Museum: 'entertainment.museum',
            Zoo: 'entertainment.zoo',
            Restaurant: 'catering.restaurant',
            Food: 'catering.restaurant',
            Nightlife: 'entertainment.nightclub',
            Sports: 'sport.sports_centre',
        };

        const category = categoryMap[interests[0]] || 'tourism';

        const fetchPlaces = async () => {
            try {
                const locRes = await fetch(
                    `https://api.geoapify.com/v1/geocode/search?text=${zipCode}, USA&format=json&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`
                );
                const locData = await locRes.json();

                if (!locData.results?.length) {
                    setError('Could not find the location from zip code.');
                    setLoading(false);
                    return;
                }

                const { lat, lon, formatted } = locData.results[0];
                setLocationName(formatted);

                const placeRes = await fetch(
                    `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${lon},${lat},${radius}000&limit=10&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`
                );

                if (!placeRes.ok) throw new Error('Bad request to Geoapify places API');

                const placeData = await placeRes.json();

                if (!Array.isArray(placeData.features)) throw new Error('Invalid data from Geoapify');

                const parsedPlaces = placeData.features.map((f: any) => ({
                    name: f.properties.name || 'Unnamed Place',
                    address: f.properties.formatted,
                    lat: f.geometry.coordinates[1],
                    lon: f.geometry.coordinates[0],
                    website: f.properties.website,
                    opening_hours: f.properties.opening_hours,
                    description: f.properties.description,
                    phone: f.properties.contact?.phone,
                    outdoor_seating: f.properties.facilities?.outdoor_seating,
                }));

                setPlaces(parsedPlaces);
            } catch (err: any) {
                setError(err.message || 'Something went wrong fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, [zipCode, radius, interests]);

    return (
        <Box maxWidth="md" mx="auto" mt={6} px={3}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
                Your Weekend Plan
            </Typography>

            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                mb={3}
                sx={{ '& .MuiChip-root': { fontSize: 14, height: 32 } }}
            >
                <Chip label={`Zip Code: ${zipCode}`} />
                <Chip label={`Location: ${locationName || 'Fetching...'}`} />
                <Chip label={`Distance: ${radius} miles`} />
                <Chip label={`Group Type: ${groupType}`} />
                <Chip label={`Interests: ${interests.join(', ')}`} />
            </Stack>

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}

            {!loading && !error && places.length === 0 && (
                <Alert severity="info">No places found for your criteria.</Alert>
            )}

            <Grid container spacing={3}>
                {places.map((place, index) => (
                    <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex' }}>
                        <Card
                            elevation={3}
                            sx={{
                                borderRadius: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                                width: '100%',
                                height: '100%',
                                p: 2,
                                backgroundColor: '#fafafa',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    {place.name}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {place.address}
                                </Typography>

                                {place.opening_hours && (
                                    <Typography variant="body2" color="text.secondary">
                                        🕒 <strong>Hours:</strong> {place.opening_hours}
                                    </Typography>
                                )}

                                {place.phone && (
                                    <Typography variant="body2" mt={1}>
                                        📞 <strong>Phone:</strong> {place.phone}
                                    </Typography>
                                )}

                                {place.description && (
                                    <Typography variant="body2" mt={1}>
                                        {place.description}
                                    </Typography>
                                )}

                                {place.outdoor_seating && (
                                    <Chip
                                        size="small"
                                        label="Outdoor Seating"
                                        color="success"
                                        sx={{ mt: 1, width: 'fit-content' }}
                                    />
                                )}

                                <Divider sx={{ my: 2 }} />

                                <Stack spacing={1} mt="auto">
                                    <MuiLink
                                        href={`https://maps.google.com/?q=${place.lat},${place.lon}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        color="primary"
                                        fontWeight={500}
                                    >
                                        📍 View on Map
                                    </MuiLink>

                                    {place.website && (
                                        <MuiLink
                                            href={place.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="hover"
                                            color="secondary"
                                            fontWeight={500}
                                        >
                                            🌐 Visit Website
                                        </MuiLink>
                                    )}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
