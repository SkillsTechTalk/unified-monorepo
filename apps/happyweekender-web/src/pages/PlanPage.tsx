// src/pages/PlanPage.tsx
import { useLocation } from "react-router-dom";
import {
    Box,
    Typography,
    Paper,
    Stack
} from "@mui/material";

export default function PlanPage() {
    const location = useLocation();
    const { zipCode, radius, groupType, interests } = location.state || {};

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: '600px',
                margin: '40px auto',
                padding: 3,
                borderRadius: 2
            }}
        >
            <Typography variant="h4" gutterBottom>
                Your Weekend Plan
            </Typography>

            <Stack spacing={2}>
                <Typography><strong>Zip Code:</strong> {zipCode}</Typography>
                <Typography><strong>Distance:</strong> {radius} miles</Typography>
                <Typography><strong>Group Type:</strong> {groupType}</Typography>
                <Typography><strong>Interests:</strong> {interests?.length ? interests.join(", ") : "None"}</Typography>
            </Stack>

            <Typography color="text.secondary" sx={{ marginTop: 3 }}>
                This is where your activities will be listed from the fake API soon.
            </Typography>
        </Paper>
    );
}
