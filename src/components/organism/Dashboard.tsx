import { useDispatch } from "react-redux";
import { PoolUserGrid } from "../molecules/PoolUserGrid";
import { useAppSelector } from "../../redux/hooks";
import { AuthState } from "../../redux/auth/auth.slice";
import { useEffect, useRef } from "react";
import { getPoolUsers, PoolUserState } from "../../redux/poolUsers/poolUsers.slice";
import { AppDispatch } from "../../redux/store";

export default function Dashboard() {
  const dispatch: AppDispatch = useDispatch();
  const { user, isAuthenticated } = useAppSelector(state => state.auth) as AuthState;
  const { users = [] } = useAppSelector(state => state.poolUsers) as PoolUserState;

  // Flag para evitar múltiplas chamadas
  const hasFetched = useRef(false);

  useEffect(() => {
    if (
      !hasFetched.current &&
      isAuthenticated &&
      user?.email
    ) {
      console.log("Fetching pool users for", user.email);
      dispatch(getPoolUsers({ managerEmail: user.email }));
      hasFetched.current = true;
    }
  }, [dispatch, isAuthenticated, user?.email]);

  const handleEdit = (name: string) => {
    console.log(`Editing ${name}`);
  };

  const handleDelete = (name: string) => {
    console.log(`Deleting ${name}`);
  };

  return (
    <PoolUserGrid
      users={users || []}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
