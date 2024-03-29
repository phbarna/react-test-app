import { useContext } from 'react'
import { UserContext } from './index.jsx';

export default function Child() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>From buried child -- {`Hello ${user.name} from ${user.address} again!`} </h1>
    </>
  );
}