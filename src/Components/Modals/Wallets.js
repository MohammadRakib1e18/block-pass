import React from "react";

const Wallets = ({
	setWalletModalOpen,
	setAvailableWalletModalOpen,
	availableWalletModalOpen,
	availableWallets
}) => {
	return (
		<div>
			<input type="checkbox" id="modal" className="modal-toggle" />
			<div
				className={`${
					availableWalletModalOpen ? "blur-sm " : " "
				} modal`}
			>
				<div className="modal-box">
					<label
						onClick={() => setWalletModalOpen(false)}
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<section>
						<h2 className="text-start text-[22px] mb-4">
							Wallets
						</h2>
						<div className="space-y-4 mt-2 mr-4">
							{availableWallets
								.filter((wallet) => wallet.selected === true)
								.map((wallet, i) => (
									<div
										key={i}
										className="flex gap-4 bg-slate-700 px-2 py-2 rounded-md"
									>
										<div className=" flex justify-center items-center">
											<img
												className="h-[35px] w-[35px] rounded-full"
												src={wallet.logo}
												alt=""
											/>
										</div>
										<div className="flex flex-col">
											<h4>{wallet.id}</h4>
											<p className="text-[12px] text-start">
												{wallet.primary
													? "Primary wallet"
													: "Secondary wallet"}
											</p>
										</div>
									</div>
								))}
						</div>
					</section>
					<div className="flex justify-end text-end mt-4 mr-4">
						<label
							htmlFor="my-modal-3"
							onClick={() => setAvailableWalletModalOpen(true)}
							className="px-4 py-1 rounded-full bg-slate-600 flex justify-center items-center cursor-pointer"
						>
							<span className="text-[25px] pb-2 mr-2">+</span>{" "}
							<span>Add more wallets</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wallets;
