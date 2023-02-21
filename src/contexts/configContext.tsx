import { createContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { fontFamily } from "@mui/system";

interface ConfigContextInterface {
  fontFamily: string;
  navType: string;
  presetColor: string;
  locale: string;
}

const initialState: ConfigContextInterface = {
  fontFamily: `'Roboto', sans-serif`,
  navType: "dark",
  presetColor: "default",
  locale: "es",
};

interface AuthContextProps {
  configStore: ConfigContextInterface;
  onChangeFontFamily: (fontFamily: string) => void;
  onChangeType: (navType: string) => void;
  onchangeColorPreset: (presetColor: string) => void;
  onChangeLocale: (locale: string) => void;
}

export const ConfigContext = createContext({} as AuthContextProps);

export const ConfigProvider = ({ children }: any) => {
  const [config, setConfig] = useLocalStorage("kevnanrd-settings", {
    fontFamily: initialState.fontFamily,
    navType: initialState.navType,
    presetColor: initialState.presetColor,
    locale: initialState.locale,
  });

  const onChangeFontFamily = (fontFamily: string) => {
    setConfig({
      ...config,
      fontFamily,
    });
  };

  const onChangeType = (navType: string) => {
    setConfig({
      ...config,
      navType,
    });
  };

  const onchangeColorPreset = (presetColor: string) => {
    setConfig({
      ...config,
      presetColor,
    });
  };
  const onChangeLocale = (locale: string) => {
    setConfig({
      ...config,
      locale,
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeFontFamily,
        onChangeType,
        onchangeColorPreset,
        onChangeLocale,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
