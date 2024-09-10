import {
  checkMultiple,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';

export const requestPermissions = async (permissions: any) => {
  const data = await checkMultiple(permissions);
  const permissionsData = Object.keys(data);
  const deniedPermissions = [];

  permissionsData.forEach(permission => {
    if (data[permission] === RESULTS.DENIED) {
      deniedPermissions.push(permission);
    }
  });

  if (deniedPermissions.length) {
    await requestMultiple(permissions);
  }
};
