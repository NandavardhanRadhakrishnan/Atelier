import { useEffect, useState } from "react";
import { Buffer } from "buffer";

const postAbi = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_title",
				type: "string",
			},
			{
				internalType: "string",
				name: "_imgAddress",
				type: "string",
			},
		],
		name: "addPost",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "count",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "posts",
		outputs: [
			{
				internalType: "address",
				name: "author",
				type: "address",
			},
			{
				internalType: "string",
				name: "title",
				type: "string",
			},
			{
				internalType: "string",
				name: "ipfs",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

const AddPost = ({ web3 }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	// const retrieveFile = e => {
	// 	const data = e.target.files[0];
	// 	const reader = new window.FileReader();
	// 	reader.readAsText(data);
	// 	reader.onload = () => {
	// 		setFile(reader.result);
	// 	};
	// };

	const handleSubmit = () => {
		const submit = async () => {
			if (web3) {
				const MyContract = new web3.eth.Contract(
					postAbi,
					"0x375E81F47D4E7c7123Bb5cDe86219e9563d0E8Af"
				);
				const addresses = await web3.eth.getAccounts();
				const address = addresses[0];  //author address
				const post = await MyContract.methods
					.addPost(web3.utils.utf8ToHex(title), web3.utils.utf8ToHex(content))
					.send({
						from: address,
					});
				console.log(post);
				setTitle("");
				setContent("");
			}
		};
		submit();
	};

	return (
		<>
			<div>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<textarea
					value={content}
					onChange={e => setContent(e.target.value)}
					cols="30"
					rows="10"
				></textarea>
			</div>
			<button onClick={handleSubmit}>Post</button>
		</>
	);
};

export default AddPost;
