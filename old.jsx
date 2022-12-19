import { useEffect, useState } from "react";

// const postAbi = [
// 	{
// 		inputs: [
// 			{
// 				internalType: "string",
// 				name: "_title",
// 				type: "string",
// 			},
// 			{
// 				internalType: "string",
// 				name: "_imgAddress",
// 				type: "string",
// 			},
// 		],
// 		name: "addPost",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "count",
// 		outputs: [
// 			{
// 				internalType: "uint256",
// 				name: "",
// 				type: "uint256",
// 			},
// 		],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: "uint256",
// 				name: "",
// 				type: "uint256",
// 			},
// 		],
// 		name: "posts",
// 		outputs: [
// 			{
// 				internalType: "address",
// 				name: "author",
// 				type: "address",
// 			},
// 			{
// 				internalType: "string",
// 				name: "title",
// 				type: "string",
// 			},
// 			{
// 				internalType: "string",
// 				name: "ipfs",
// 				type: "string",
// 			},
// 		],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// ];

// const authorAbi = [
// 	{
// 		inputs: [
// 			{
// 				internalType: "address payable",
// 				name: "author",
// 				type: "address",
// 			},
// 		],
// 		name: "donate",
// 		outputs: [],
// 		stateMutability: "payable",
// 		type: "function",
// 	},
// ];

// const PostList = ({ web3 }) => {
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		const getPosts = async () => {
// 			if (web3 !== null) {
// 				const MyContract = new web3.eth.Contract(
// 					postAbi,
// 					"0x375E81F47D4E7c7123Bb5cDe86219e9563d0E8Af"
// 				);
// 				const count = await MyContract.methods.count().call();
// 				const _posts = []; //_posts is an array of posts stored locally
// 				for (let i = 0; i < count; i++) {
// 					const post = await MyContract.methods.posts(i).call(); //getting post from the blockchain and storing in post variable locally
// 					_posts.push({
// 						title: web3.utils.hexToUtf8(post.title),
// 						ipfs: web3.utils.hexToUtf8(post.ipfs),
// 					});
// 				}
// 				console.log(_posts);
// 				setPosts(_posts);
// 			}
// 		};
// 		getPosts();
// 	}, [web3]);

// 	const donate = async authoraddress => {
// 		if (web3 !== null) {
// 			const authorContract = new web3.eth.Contract(
// 				authorAbi,
// 				"0xda54F8FFfE800Ce2F2EA2F33780BC2EAFEFEE091"
// 			);
// 			const addresses = await web3.eth.getAccounts();
// 			const address = addresses[0];
// 			console.log(authoraddress);
// 			authorContract.methods.donate(authoraddress).send({
// 				from: address,
// 				value: 5000000000000000, //0.005 ether
// 			});
// 		}
// 	};

// 	return (
// 		<>
// 			{posts.map(post => (
// 				<div>
// 					<h1>{post.title}</h1>
// 					<p>{post.ipfs}</p>
// 					<button onClick={() => donate(post.author)}>Donate 0.005 ETH</button>
// 				</div>
// 			))}
// 		</>
// 	);
// };

// export default PostList;