import { Connector, useConnect, useAccount, useDisconnect } from "wagmi";

export const ConnectButton = () => {
  const { connectors, connect } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {address} Disconnect
      </button>
    );
  }

  return connectors.map((connector: Connector) => (
    <button
      key={connector.id}
      onClick={() => connect({ connector })}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {connector.name}
    </button>
  ));
};
