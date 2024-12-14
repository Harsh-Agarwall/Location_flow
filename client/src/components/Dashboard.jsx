import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";

const Dashboard = () => {
    const [systemInfo, setSystemInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/system_info");
                setSystemInfo(response.data);
            } catch (error) {
                console.error("Error fetching system info:", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    const getColorByUsage = (usage) => {
        if (usage < 50) return "green";
        if (usage < 75) return "orange";
        return "red";
    };

    return (
        <div style={{ padding: "20px" }}>
            <Typography variant="h4" style={{ marginBottom: "20px", textAlign: "center" }}>
                System Resource Dashboard
            </Typography>
            <Grid container spacing={3}>
                {/* Current Time */}
                <Grid item xs={12} sm={6} md={4}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Current Time
                                </Typography>
                                <Typography variant="h5">
                                    {systemInfo.current_time || <Skeleton width={100} />}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>

                {/* Python Version */}
                <Grid item xs={12} sm={6} md={4}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Python Version
                                </Typography>
                                <Typography variant="h5">
                                    {systemInfo.python_version || <Skeleton width={100} />}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>

                {/* Battery Status */}
                <Grid item xs={12} sm={6} md={4}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Battery Status
                                </Typography>
                                <Typography variant="h5">
                                    {systemInfo.battery_status !== null
                                        ? `${systemInfo.battery_status}%`
                                        : <Skeleton width={100} />}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>

                {/* CPU Usage */}
                <Grid item xs={12} sm={6} md={4}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    CPU Usage
                                </Typography>
                                <Typography variant="h5" style={{ color: getColorByUsage(systemInfo.cpu_usage) }}>
                                    {systemInfo.cpu_usage !== undefined
                                        ? `${systemInfo.cpu_usage}%`
                                        : <Skeleton width={100} />}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>

                {/* RAM Usage */}
                <Grid item xs={12} sm={6} md={4}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    RAM Usage
                                </Typography>
                                <Typography variant="h5" style={{ color: getColorByUsage(systemInfo.ram_usage) }}>
                                    {systemInfo.ram_usage !== undefined
                                        ? `${systemInfo.ram_usage}%`
                                        : <Skeleton width={100} />}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>

                {/* GPU Usage */}
                <Grid item xs={12} sm={6} md={4}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    GPU Usage
                                </Typography>
                                <Typography variant="h5">
                                    {systemInfo.gpu_info || "Not Available"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={6} md={4}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Location
                                </Typography>
                                <Typography variant="h5">
                                    {systemInfo.location || <Skeleton width={200} />}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
