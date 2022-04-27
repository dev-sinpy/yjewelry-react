import { GlobalConfigInterface } from 'contexts/interfaces/global-config.interface';
import { GlobalConfigContext } from 'contexts/setting.context';
import { useContext } from 'react';

export default function useGlobalConfig(): GlobalConfigInterface {
  const context = useContext(GlobalConfigContext);

  if (!context) {
    throw new Error('You need to wrap GlobalConfigProvider.');
  }

  return context;
}
