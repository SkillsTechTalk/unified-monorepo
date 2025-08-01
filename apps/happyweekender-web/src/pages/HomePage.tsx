// src/pages/HomePage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    Paper
} from "@mui/material";

export default function HomePage() {
    const navigate = useNavigate();

    const [zipCode, setZipCode] = useState("");
    const [radius, setRadius] = useState("10");
    const [groupType, setGroupType] = useState("solo");
    const [interests, setInterests] = useState<string[]>([]);

    const toggleInterest = (value: string) => {
        setInterests((prev) =>
            prev.includes(value)
                ? prev.filter((i) => i !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTimeout(() => {
            navigate("/plan", {
                state: {
                    zipCode,
                    radius,
                    groupType,
                    interests,
                },
            });
        }, 500);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: '500px',
                margin: '40px auto',
                padding: 3,
                borderRadius: 2
            }}
        >
            <Typography variant="h4" gutterBottom>
                Plan Your Happy Weekend
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        label="Zip Code"
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel>Distance (miles)</InputLabel>
                        <Select
                            value={radius}
                            label="Distance (miles)"
                            onChange={(e) => setRadius(e.target.value)}
                        >
                            {["5", "10", "25", "50"].map((r) => (
                                <MenuItem key={r} value={r}>
                                    {r} miles
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Group Type</InputLabel>
                        <Select
                            value={groupType}
                            label="Group Type"
                            onChange={(e) => setGroupType(e.target.value)}
                        >
                            <MenuItem value="solo">Solo</MenuItem>
                            <MenuItem value="friends">With Friends</MenuItem>
                            <MenuItem value="family">With Family</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl component="fieldset">
                        <Typography variant="subtitle1" gutterBottom>
                            What do you enjoy?
                        </Typography>
                        <FormGroup>
                            {["Nature", "Food", "Nightlife", "Museums", "Sports"].map((item) => (
                                <FormControlLabel
                                    key={item}
                                    control={
                                        <Checkbox
                                            checked={interests.includes(item)}
                                            onChange={() => toggleInterest(item)}
                                        />
                                    }
                                    label={item}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>

                    <Button type="submit" variant="contained" size="large">
                        Find Weekend Fun
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}
