import Button from "./Button";
import { useState } from "react";
import Input from "./Input";

function CreateRoom({ setRoom }: { setRoom: (token: string) => void }) {
  const [internalRoom, setInternalRoom] = useState("");

  return (
    <div onKeyDown={(e) => e.key === "Enter" && setRoom(internalRoom)} className="flex h-screen items-center justify-center flex-col gap-2 bg-zinc-900">
      <h1 className="text-2xl font-bold mb-4 text-white">Jitsi Demo</h1>
      <Input id="room" placeholder="Room" onChange={(e) => setInternalRoom(e.target.value)} />
      <Button onClick={() => setRoom(internalRoom)} disabled={internalRoom === ""}>
        Join Room
      </Button>
    </div>
  );
}

export default CreateRoom;
