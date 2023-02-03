import React, { useState } from "react";
import AvailableWallet from "./Modals/AvailableWallet";
import Wallets from "./Modals/Wallets";

const BlockPass = ({logoList}) => {
    const [walletModalOpen, setWalletModalOpen] = useState(false);
    const [availableWalletModalOpen, setAvailableWalletModalOpen] = useState(false);
	const [availableWallets, setAvailableWallets] = useState([
		{
			logo: logoList[0],
			name: "MetaMask1",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: true,
			primary: true,
		},
		{
			logo: logoList[1],
			name: "MetaMask2",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: true,
			primary: false,
		},
		{
			logo: logoList[2],
			name: "MetaMask3",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
		},
		{
			logo: logoList[0],
			name: "MetaMask4",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
		},
		{
			logo: logoList[1],
			name: "MetaMask5",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
		},
		{
			logo: logoList[2],
			name: "MetaMask6",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
		},
		{
			logo: logoList[0],
			name: "MetaMask7",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
		},
		{
			logo: logoList[1],
			name: "MetaMask8",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
		},
	]);
	return (
		<div className=" mt-8">
			<label
				htmlFor="modal"
				onClick={() => setWalletModalOpen(true)}
				className={`${
					walletModalOpen ? "blur-sm " : " "
				}px-4 py-3 rounded-full bg-slate-600 cursor-pointer`}
			>
				Connect Wallet
			</label>
			{walletModalOpen && (
				<Wallets
					setWalletModalOpen={setWalletModalOpen}
					availableWalletModalOpen={availableWalletModalOpen}
					setAvailableWalletModalOpen={setAvailableWalletModalOpen}
					availableWallets={availableWallets}
					setAvailableWallets={setAvailableWallets}
				/>
			)}
			{availableWalletModalOpen && (
				<AvailableWallet
					setAvailableWalletModalOpen={setAvailableWalletModalOpen}
					availableWallets={availableWallets}
					setAvailableWallets={setAvailableWallets}
				/>
			)}
		</div>
	);
};

export default BlockPass;
