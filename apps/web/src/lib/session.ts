import { useSession } from "vinxi/http";

const getSession = () => {
  return useSession({
    password: import.meta.env.VITE_SESSION_PASSWORD,
  });
};

export default getSession;
