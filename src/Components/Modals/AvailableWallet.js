import React from "react";
import { FaCheck } from "react-icons/fa";

const AvailableWallet = ({
	setAvailableWalletModalOpen,
	availableWallets,
	setAvailableWallets,
}) => {
	
	return (
		<div className="">
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box border bg-slate-700 border-slate-800">
					<h2 className="text-start text-[22px] mb-4">
						Available Wallets
					</h2>
					<section className="grid grid-cols-2 gap-4">
						{availableWallets.map((wallet, i) => (
							<div
								key={i}
								onClick={() => {
									availableWallets[i].selected = true;
									setAvailableWallets([...availableWallets]);
								}}
								className="flex gap-4 items-center border border-slate-800 hover:border-red-300 px-2 py-2 rounded-md cursor-pointer"
							>
								<div className="h-[45px] w-[45px] p-1 border border-slate-400 hover:border-blue-400 border-transparent rounded-md">
									<img
										className="h-full w-full rounded-sm"
										src={wallet.logo}
										alt=""
									/>
								</div>
								<h2>{wallet.name}</h2>
								{wallet.selected === true ? (
									<p>
										<FaCheck className="bg-green-500 rounded-full p-1 box-border text-[20px]" />
									</p>
								) : (
									""
								)}
							</div>
						))}
					</section>
					{console.log(availableWallets)}
					<label
						htmlFor="my-modal-3"
						onClick={() => setAvailableWalletModalOpen(false)}
						className="btn btn-sm btn-circle mt-[20px]"
					>
						✕
					</label>
				</div>
			</div>
		</div>
	);
};

export default AvailableWallet;
