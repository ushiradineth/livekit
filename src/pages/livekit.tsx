import "@livekit/components-styles";
import { LiveKitRoom, GridLayout, ParticipantTile, useTracks, RoomAudioRenderer, ControlBar, RoomName } from "@livekit/components-react";
import { useState } from "react";
import { Track } from "livekit-client";
import CreateToken from "@/components/CreateToken";

export default function Livekit() {
  const [token, setToken] = useState<string | null>(null);

  return token === null ? (
    <CreateToken setToken={(value) => setToken(value)} />
  ) : (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      connectOptions={{ autoSubscribe: false }}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: "100dvh" }}>
      <div className="flex gap-2 absolute bottom-1 left-1">
        <p>Room:</p>
        <RoomName />
      </div>
      {/* Your custom component with basic video conferencing functionality. */}
      <MyVideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen 
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  return (
    <GridLayout tracks={tracks} style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
