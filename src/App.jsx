import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return <>
		<nav className="flex-row jfy-bwn pad-1">
			<div className="center min-content">
				<h1 className="accent">MishMusic</h1>
			</div>
			<div id="account-actions-btn" className="stack noselect squircle" open-popup="account-actions">
				<img src="src/assets/avatar.jpg" className="small squircle" />
				<div className="end">
					<svg className="dropdown-icon accent bg-background circle" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" /></svg>
				</div>
			</div>
			<dialog id="account-actions">
				<div className="flex-col gap-1">
					<div className="flex-col gap-1">
						<div className="flex-row jfy-bwn aln-ctr gap-3">
							<h2 className="accent">QSFinances</h2>
							<p className="danger button"><a>Log Out</a></p>
						</div>
						<div className="flex-row gap-1 jfy-ctr">
							<img src="assets/avatar.jpg" className="small squircle" />
							<div>
								<p>Welcome,</p>
								<p>Joseph McClellan</p>
							</div>
						</div>
					</div>
					<div className="account-action-list flex-col">
						<div className="account-action"><a href="/dashboard/index.html" className="pad-1 no-dec">Dashboard</a></div>
						<div className="account-action"><a href="/settings/index.html" className="pad-1 no-dec">Account Settings</a></div>
						<div className="account-action"><a href="/help/index.html" className="pad-1 no-dec">Help/User guide</a></div>
					</div>
				</div>
			</dialog>
		</nav>
		<div id="main-content" className="pad-1 gap-1">
      <Routes>
        <Route element={<App />} />
      </Routes>
		</div>
	</>;
}

export default App
