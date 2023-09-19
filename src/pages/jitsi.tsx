import "@livekit/components-styles";
import { useState } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import Spinner from "@/components/Spinner";
import Head from "next/head";
import CreateRoom from "@/components/CreateRoom";

export default function Jitsi() {
  const [room, setRoom] = useState<string | null>(null);

  return room === null ? (
    <CreateRoom setRoom={(value) => setRoom(value)} />
  ) : (
    <>
      <Head>
        <script src={`https://8x8.vc/${process.env.NEXT_PUBLIC_JITSI_API_KEY}/external_api.js`} async></script>
      </Head>
      <main className="flex w-screen h-screen">
        <JaaSMeeting
          appId={process.env.NEXT_PUBLIC_JITSI_API_KEY ?? ""}
          roomName={room}
          onApiReady={(externalApi) => {
            console.log(externalApi);
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "100vh";
            iframeRef.style.width = "100vw";
          }}
        />
      </main>
    </>
  );
}
