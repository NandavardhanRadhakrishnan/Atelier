import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import PostList from "./components/postList/postList";
import AddPost from "./components/addPost/addPost";

function App() {
	const [web3, setWeb3] = useState(null);

	useEffect(() => {
		const loadWeb3 = async () => {
			const _web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
			await window.ethereum.send('eth_requestAccounts');
			setWeb3(_web3);
		};
		loadWeb3();
	}, []);

	return (
		<div>
			<PostList web3={web3} />
			<AddPost web3={web3} />
		</div>
	);
}

export default App;
