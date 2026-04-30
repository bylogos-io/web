"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import posthog from "posthog-js";
import { motion } from "framer-motion";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import { alpha, Box, Container, IconButton, Slider, Typography, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

const muxPlaybackId = "dCLyVABT2KVKnxWN4fVqYFlToHWwnTniCdgK02bifBeM";

function formatTime(value: number) {
    if (!Number.isFinite(value) || value < 0) {
        return "0:00";
    }

    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`;
}

export function DemoVideo() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const theme = useTheme();
    const videoContainerRef = useRef<HTMLDivElement | null>(null);
    const playerRef = useRef<Player | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const src = useMemo(() => `https://stream.mux.com/${muxPlaybackId}.m3u8`, []);
    useEffect(() => {
        if (!videoContainerRef.current) {
            return;
        }

        if (playerRef.current) {
            return;
        }

        const videoElement = document.createElement("video");
        videoElement.classList.add("video-js");
        videoElement.setAttribute("playsinline", "true");
        videoContainerRef.current.appendChild(videoElement);

        const player = videojs(videoElement, {
            autoplay: false,
            controls: false,
            preload: "auto",
            sources: [
                {
                    src,
                    type: "application/x-mpegURL",
                },
            ],
        });

        playerRef.current = player;
        player.fill(true);

        const syncState = () => {
            setIsPlaying(!player.paused());
            setIsMuted(Boolean(player.muted()));
            setCurrentTime(player.currentTime() || 0);
            setDuration(player.duration() || 0);
        };

        const events = ["loadedmetadata", "timeupdate", "play", "pause", "volumechange", "ended"];
        events.forEach((eventName) => player.on(eventName, syncState));
        player.on("play", () => {
            player.poster("");
        });
        syncState();

        return () => {
            events.forEach((eventName) => player.off(eventName, syncState));
            player.dispose();
            playerRef.current = null;
        };
    }, [src]);

    const togglePlay = () => {
        const player = playerRef.current;
        if (!player) {
            return;
        }

        if (player.paused()) {
            posthog.capture("demo_video_played", {
                current_time: player.currentTime() || 0,
            });
            void player.play();
            return;
        }

        player.pause();
    };

    const toggleMute = () => {
        const player = playerRef.current;
        if (!player) {
            return;
        }

        player.muted(!player.muted());
        setIsMuted(Boolean(player.muted()));
    };

    const handleSeek = (_event: Event, value: number | number[]) => {
        const player = playerRef.current;
        if (!player || Array.isArray(value)) {
            return;
        }

        player.currentTime(value);
        setCurrentTime(value);
    };

    const handleFullscreen = () => {
        playerRef.current?.requestFullscreen();
    };

    return (
        <Box
            component="section"
            id="demo-video"
            sx={{ py: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}
        >
            <Box
                sx={(theme) => ({
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.main, 0.12)} 0%, transparent 28%),
                        radial-gradient(circle at 80% 70%, ${alpha(theme.palette.primary.light, 0.08)} 0%, transparent 24%)
                    `,
                    filter: "blur(30px)",
                    pointerEvents: "none",
                })}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{ textAlign: "center", mb: 6 }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: "primary.main",
                            fontWeight: 600,
                            letterSpacing: 2,
                            mb: 2,
                        }}
                    >
                        {content.home.demoVideo.label}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            mb: 2,
                            fontWeight: 600,
                            lineHeight: 1.15,
                        }}
                    >
                        <Box
                            component="span"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            })}
                        >
                            {content.home.demoVideo.title}
                        </Box>{" "}
                        <Box component="span" sx={{ color: "primary.main" }}>
                            {content.home.demoVideo.brand}
                        </Box>
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            maxWidth: 780,
                            mx: "auto",
                            fontWeight: 400,
                            fontSize: "1.125rem",
                            lineHeight: 1.6,
                        }}
                    >
                        {content.home.demoVideo.description}
                    </Typography>
                </Box>

                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    sx={(theme) => ({
                        position: "relative",
                        p: { xs: 1, md: 1.5 },
                        borderRadius: 1,
                        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                        background: `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.86)} 0%, ${alpha(theme.palette.background.default, 0.94)} 100%)`,
                        boxShadow: `0 30px 90px ${alpha(theme.palette.common.black, 0.28)}`,
                        backdropFilter: "blur(16px)",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "inherit",
                            background: `
                                radial-gradient(circle at top left, ${alpha(theme.palette.primary.main, 0.18)} 0%, transparent 28%),
                                linear-gradient(180deg, ${alpha(theme.palette.common.white, 0.04)} 0%, transparent 100%)
                            `,
                            pointerEvents: "none",
                        },
                        "& .video-js": {
                            position: "absolute",
                            inset: 0,
                            fontFamily: "inherit",
                            borderRadius: '6px',
                            overflow: "hidden",
                            backgroundColor: theme.palette.common.black,
                            width: "100% !important",
                            height: "100% !important",
                            minWidth: "100%",
                            minHeight: "100%",
                        },
                        "& [data-vjs-player]": {
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                        },
                        "& .vjs-tech": {
                            position: "absolute",
                            inset: 0,
                        },
                        "& .video-js .vjs-tech, & .video-js .vjs-poster": {
                            borderRadius: '6px',
                            width: "100% !important",
                            height: "100% !important",
                            objectFit: "cover",
                        },
                        "& .video-js.vjs-has-started .vjs-poster": {
                            display: "none",
                        },
                        "& .video-js .vjs-poster": {
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "saturate(1.05)",
                        },
                    })}
                >
                    <Box
                        onClick={togglePlay}
                        sx={{
                            position: "relative",
                            aspectRatio: "16 / 9",
                            width: "100%",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        <div data-vjs-player>
                            <div ref={videoContainerRef} />
                        </div>

                        {!isPlaying && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 2,
                                    display: { xs: "none", md: "flex" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    pointerEvents: "none",
                                }}
                            >
                                <Box
                                    component="button"
                                    type="button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        togglePlay();
                                    }}
                                    sx={(theme) => ({
                                        width: 88,
                                        height: 88,
                                        borderRadius: "50%",
                                        border: `1px solid ${alpha(theme.palette.common.white, 0.18)}`,
                                        background: `linear-gradient(135deg, ${alpha(theme.palette.common.white, 0.18)} 0%, ${alpha(theme.palette.background.default, 0.42)} 100%)`,
                                        backdropFilter: "blur(18px)",
                                        color: theme.palette.common.white,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: `0 18px 48px ${alpha(theme.palette.common.black, 0.35)}`,
                                        cursor: "pointer",
                                        pointerEvents: "auto",
                                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                        "&:hover": {
                                            transform: "scale(1.04)",
                                            boxShadow: `0 22px 54px ${alpha(theme.palette.common.black, 0.4)}`,
                                        },
                                    })}
                                >
                                    <PlayArrowRoundedIcon sx={{ fontSize: 42, ml: 0.5 }} />
                                </Box>
                            </Box>
                        )}

                        <Box
                            onClick={(event) => event.stopPropagation()}
                            sx={(theme) => ({
                                position: "absolute",
                                left: { xs: 12, md: 20 },
                                right: { xs: 12, md: 20 },
                                bottom: { xs: 12, md: 20 },
                                zIndex: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                px: { xs: 1.25, md: 1.5 },
                                py: 1,
                                borderRadius: 1,
                                backgroundColor: alpha(theme.palette.background.default, 0.62),
                                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                                backdropFilter: "blur(16px)",
                                boxShadow: `0 16px 40px ${alpha(theme.palette.common.black, 0.28)}`,
                            })}
                        >
                            <IconButton
                                onClick={togglePlay}
                                sx={(theme) => ({
                                    color: theme.palette.common.white,
                                    backgroundColor: alpha(theme.palette.common.white, 0.08),
                                    "&:hover": {
                                        backgroundColor: alpha(theme.palette.common.white, 0.14),
                                    },
                                })}
                            >
                                {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                            </IconButton>

                            <Box sx={{ minWidth: 44 }}>
                                <Typography variant="caption" sx={{ color: "common.white", fontWeight: 700 }}>
                                    {formatTime(currentTime)}
                                </Typography>
                            </Box>

                            <Slider
                                min={0}
                                max={duration || 0}
                                value={Math.min(currentTime, duration || 0)}
                                onChange={handleSeek}
                                sx={(theme) => ({
                                    flex: 1,
                                    color: theme.palette.primary.main,
                                    "& .MuiSlider-rail": {
                                        opacity: 1,
                                        backgroundColor: alpha(theme.palette.common.white, 0.16),
                                    },
                                    "& .MuiSlider-track": {
                                        border: "none",
                                        background: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                                    },
                                    "& .MuiSlider-thumb": {
                                        width: 12,
                                        height: 12,
                                        boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
                                        "&:hover, &.Mui-focusVisible": {
                                            boxShadow: `0 0 0 6px ${alpha(theme.palette.primary.main, 0.24)}`,
                                        },
                                        "&::before": {
                                            boxShadow: "none",
                                        },
                                    },
                                })}
                            />

                            <Box sx={{ minWidth: 44, textAlign: "right" }}>
                                <Typography variant="caption" sx={{ color: alpha(theme.palette.common.white, 0.72) }}>
                                    {formatTime(duration)}
                                </Typography>
                            </Box>

                            <IconButton
                                onClick={toggleMute}
                                sx={(theme) => ({
                                    color: theme.palette.common.white,
                                    backgroundColor: alpha(theme.palette.common.white, 0.04),
                                    "&:hover": {
                                        backgroundColor: alpha(theme.palette.common.white, 0.1),
                                    },
                                })}
                            >
                                {isMuted ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
                            </IconButton>

                            <IconButton
                                onClick={handleFullscreen}
                                sx={(theme) => ({
                                    color: theme.palette.common.white,
                                    backgroundColor: alpha(theme.palette.common.white, 0.04),
                                    "&:hover": {
                                        backgroundColor: alpha(theme.palette.common.white, 0.1),
                                    },
                                })}
                            >
                                <FullscreenRoundedIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
