import axios from "axios";
import { useMutation } from "react-query";
import Button from "./Button";
import { useCallback, useState } from "react";
import Input from "./Input";

function CreateToken({ setToken }: { setToken: (token: string) => void }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: { name: string; room: string }) => await fetch(`/api/get-token?room=${data.room}&username=${data.name}`),
    onSuccess: async (resp) => {
      const data = await resp.json();
      setToken(data.token);
    },
  });

  const getToken = useCallback(() => !isLoading && name !== "" && room !== "" && mutate({ name, room }), [isLoading, mutate, name, room]);

  return (
    <div onKeyDown={(e) => e.key === "Enter" && getToken()} className="flex h-screen items-center justify-center flex-col gap-2 bg-zinc-900">
      <h1 className="text-2xl font-bold mb-4 text-white">Livekit Demo</h1>
      <Input id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <Input id="room" placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
      <Button onClick={getToken} disabled={isLoading || name === "" || room === ""} loading={isLoading}>
        Create Token
      </Button>
    </div>
  );
}

export default CreateToken;
