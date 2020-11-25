import React from 'react'
import styled from 'styled-components'
import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';

// Components
import Header from './components/Header'
import Login from './components/Login'
import Navigation from './components/Navigation'
import useProjects from './hooks/useProjects';

const App = () => {
	const [address, setAddress] = React.useState('')
	const [page, setPage] = React.useState('')
	const [wallet, setWallet] = React.useState(null)
	const [projects] = useProjects()
	// const projects = {}

	const arweave = Arweave.init({
		host: 'arweave.net',// Hostname or IP address for a Arweave host
		port: 443,          // Port
		protocol: 'https',  // Network protocol http or https
		timeout: 20000,     // Network request timeouts in milliseconds
		logging: false,     // Enable network request logging
	});

	React.useEffect(() => {
		const getAddress = async () => {
			setAddress(await arweave.wallets.jwkToAddress(wallet! as JWKInterface));
		}

		if (wallet) {
			getAddress();
		}
	}, [arweave, wallet])

	const uploadWallet = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const fileReader = new FileReader();
		fileReader.onload = async (e) => {
			setWallet(JSON.parse(e.target!.result as string));
		}
		if (evt.target.files?.length) {
			fileReader.readAsText(evt.target.files[0]);
		}
	}

	return (
		<>
		{!wallet &&
			<Login uploadWallet={uploadWallet} />
		}
		{wallet && <Layout>
				<Navigation setPage={setPage} />
				<Header page={page} setPage={setPage} />
				<Main>
					Address: {address}
					<pre>
						{JSON.stringify(projects)}
					</pre>
				</Main>
			</Layout>
		}
		</>
	);
}

export default App;

const Layout = styled.div`
	display: grid;
	grid-template-columns: 30rem auto;
	grid-template-rows: 12rem auto;
`

const Main = styled.main`
	grid-column: 2 / -1;
	grid-row: 2 / -1;
	padding: 5rem;
`
