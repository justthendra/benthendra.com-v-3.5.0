import React, { useEffect, useState } from "react";
import Image from "next/image";

function Discord() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const discordId = "267373400022843393";
    fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.data);
      });
  }, []);

  useEffect(() => {
    const discordId = "267373400022843393"; // Kendi Discord ID'nizi buraya ekleyin
    const ws = new WebSocket("wss://api.lanyard.rest/socket");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: discordId,
          },
        })
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
        setProfile(data.d);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "#43b581";
      case "idle":
        return "#faa61a";
      case "dnd":
        return "#f04747";
      case "offline":
        return "#747f8d";
      default:
        return "#2c2f33";
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  const statusColor = getStatusColor(profile.discord_status);

  return (
    <div className="flex flex-col items-center justify-center text-center mt-[-220px]">
      <div className="relative inline-block">
        <Image
          src={`https://cdn.discordapp.com/avatars/${profile.discord_user.id}/${profile.discord_user.avatar}.png`}
          alt="Discord Avatar" width={150} height={150}
          className="rounded-full border-[5px] border-solid dark:border-[#151515] shadow-md dark:shadow-black border-[#bababa] shadow-gray-600"
        />
        <div
          className="absolute pulse bottom-[10px] right-[10px] w-[25px] h-[25px] rounded-full border-[3px] justify-center items-center flex flex-row shadow-md dark:shadow-black dark:border-[#2f2f2f] border-[#bababa] shadow-gray-600"
          style={{ backgroundColor: statusColor }}
        >
          <span
            className="absolute w-[25px] h-[25px] rounded-full"
            style={{ backgroundColor: statusColor }}
          />
        </div>
      </div>
    </div>
  );
}

export default Discord;
