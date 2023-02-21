import { useContext } from "react";
import { ConfigContext } from "@/contexts/configContext";

// ==============================|| CONFIG - HOOKS  ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
