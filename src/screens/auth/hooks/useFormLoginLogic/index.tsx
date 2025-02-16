import { useAtom } from 'jotai';
import { authAtom } from '../../stores';

export const useFormLoginLogic = () => {
  const [, setAuthData] = useAtom(authAtom);
  const handleLogin = () => {
    setAuthData({
      token: '123',
      user: { firstName: 'Danh', lastName: 'Ngo', id: 1 },
    });
  };
  return {
    handleLogin,
  };
};
