import Image from "next/image";
import React, { useEffect, useState } from "react";

function Activities() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch("https://api.lanyard.rest/v1/users/267373400022843393");
        const data = await res.json();
        if (data?.data?.activities && data.data.activities.length > 0) {
          const currentActivity = data.data.activities[0];
          setActivity(currentActivity);
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchActivity();
    const intervalId = setInterval(fetchActivity, 1000); // Her 1 saniyede bir güncelleme

    return () => clearInterval(intervalId);
  }, []);

  const getImageUrl = (image) => {
    if (image.startsWith("spotify:")) {
      return `https://i.scdn.co/image/${image.replace("spotify:", "")}`;
    } else if (image.startsWith("mp:external")) {
      return activity?.assets?.large_image
        ? activity.assets.large_image
            .replace(/^mp:external\/[^/]+\//, "")
            .replace(/^https\//, "https://")
        : "";
    } else if (image.includes("http")) {
      return image;
    }
    return ""; // Boş bir string döndür
  };

  const formatDuration = (startTimestamp, endTimestamp) => {
    if (!startTimestamp || !endTimestamp) return "";

    const duration = endTimestamp - startTimestamp;
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // '00' formatında saniyeleri göster
  };

  return (
    <div>
      {activity ? (
        <div className="mt-10 dark:bg-zinc-900/20 p-4 rounded-lg shadow-md max-w-full h-24 flex items-center space-x-3">
          <div className="w-12 h-12 bg-transparent flex items-center justify-center rounded-md">
            <Image
              src={getImageUrl(activity.assets.large_image)}
              alt="Activity Image"
              className="rounded-[10px]"
              width={100}
              height={100}
            />
          </div>
          <div>
            {activity.details && <h3 className="text-lg dark:text-gray-400 font-[Oceanwide]">{activity.details}</h3>}
            {activity.state && <p className="dark:text-gray-600 font-[Galano] text-sm">{activity.state}</p>}
          </div>
        </div>
      ) : (
        <div className="mt-10 dark:bg-zinc-900/20 p-4 rounded-lg shadow-md max-w-full h-24 flex items-center space-x-3">
        <div className="w-12 h-12 bg-transparent flex items-center justify-center rounded-md">
        </div>
        <div>
          <h3 className="text-lg dark:text-gray-400 font-[Oceanwide]">Idle</h3>
          <p className="dark:text-gray-600 font-[Galano] text-sm">There is no activity currently taking place.</p>
        </div>
      </div>
      )}
    </div>
  );
}

export default Activities;
