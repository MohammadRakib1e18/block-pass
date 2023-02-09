import React, { useState } from "react";
import AvailableWallets from "./Modals/AvailableWallets/AvailableWallets";
import "./Modals/Modal.css";
import "./BlockPass.css";
import Button from "./Button/Button";
import ModalController from "./ModalController/ModalController";

const BlockPass = ({ logoList }) => {
	const [modalController, setModalController] = useState(false);
	const [availableWalletModalOpen, setAvailableWalletModalOpen] =
		useState(false);
	const [availableWallets, setAvailableWallets] = useState([
		{
			logo: logoList[0],
			name: "MetaMask",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: true,
			score: 905,
			grade: "A+",
		},
		{
			logo: logoList[1],
			name: "WalletConnect",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
			grade: "A-",
		},
		{
			logo: logoList[2],
			name: "Coinbase",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 650,
			grade: "B",
		},
		{
			logo: logoList[3],
			name: "Magic Wallet",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 805,
			grade: "A",
		},
		{
			logo: logoList[4],
			name: "Portis",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 907,
			grade: "A+",
		},
		{
			logo: logoList[5],
			name: "Coinbase Wallet",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 750,
			grade: "A-",
		},
		{
			logo: logoList[6],
			name: "Torus",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
			grade: "A-",
		},
	]);

	return (
		<div className="blockpass">
			<Button
				onClick={() => setModalController(true)}
				className={`${
					modalController ? "my-blur" : " "
				} blockpass-button`}
			>
				My Account
			</Button>
			{modalController && (
				<ModalController
					availableWallets={availableWallets}
					setModalController={setModalController}
					availableWalletModalOpen={availableWalletModalOpen}
					setAvailableWalletModalOpen={setAvailableWalletModalOpen}
				/>
			)}
			{availableWalletModalOpen && (
				<AvailableWallets
					setAvailableWalletModalOpen={setAvailableWalletModalOpen}
					availableWallets={availableWallets}
					setAvailableWallets={setAvailableWallets}
				/>
			)}
		</div>
	);
};

export default BlockPass;
