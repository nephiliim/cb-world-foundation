export default function AdminLoginPage() {
  return (
    <main className="admin-login">
      <form className="admin-login-card">
        <span className="admin-kicker">CB’S WORLD Foundation Charity</span>
        <h1>Admin Portal</h1>
        <p>Supabase Auth is ready to connect. Add authorised users in Supabase → Authentication → Users.</p>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="button">Sign In</button>
      </form>
    </main>
  );
}
