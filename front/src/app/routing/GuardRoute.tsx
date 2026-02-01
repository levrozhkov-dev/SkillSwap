import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../providers/store/store';

interface GuardRouteProps {
  type: 'protected' | 'public-only';
  redirectTo?: string;
}

export const GuardRoute = (props : GuardRouteProps) => {
  const { type, redirectTo } = props;
  const location = useLocation();
  const { isLogged } = useAppSelector((state) => state.login);
  
  if (type === 'protected' && !isLogged) {
    return (
      <Navigate
        to={redirectTo || '/login'}
        replace
        state={{ from: location.pathname }}
      />
    );
  }
  
  if (type === 'public-only' && isLogged) {
    const from = location.state?.from || (redirectTo || '/');
    return <Navigate to={from} replace />;
  }
  
  return <Outlet />;
};