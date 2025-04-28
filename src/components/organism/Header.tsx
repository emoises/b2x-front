import styles from './Header.module.css'
export default function Header() {
  const handleLogin = () => {
    console.log('Login')
  };
  return (
    <div className={styles.container}>
      <p>My Page</p>
      <p>User name Here <button onClick={handleLogin}>Login</button></p>
    </div>
  )
}
