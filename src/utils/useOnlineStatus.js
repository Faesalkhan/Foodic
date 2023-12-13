import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => setOnlineStatus(false));
    addEventListener("online", () => setOnlineStatus(online));
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
