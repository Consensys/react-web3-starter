import { client } from "./providers/client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ConnectWalletButton } from "./components/ConnectButton";

export default function Home() {
  const { isConnected, address } = useAccount();
  const [blockNumber, setBlockNumber] = useState<bigint | null>(null);

  useEffect(() => {
    client.getBlockNumber().then((block) => {
      setBlockNumber(block);
    });
  }, []);

  return (
    <main className="relative flex flex-col justify-between items-center gap-20 min-h-screen mx-auto md:p-24">
      <div className=" flex justify-center pt-10 md:pt-0 z-10 max-w-5xl w-full lg:items-center lg:justify-between font-mono text-sm lg:flex">
        <div className="absolute bottom-0 left-0 flex w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By RAD Team
          </a>
        </div>
        <ConnectWalletButton />
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">Web3 Starter template</span>
        {isConnected && (
          <span className="text-sm font-mono font-medium max-w-md text-center text-gray-500">
            Connected to: {address}
          </span>
        )}

        <div className="text-sm font-mono font-medium max-w-md text-center text-gray-500">
          {!blockNumber ? (
            "Loading block number..."
          ) : (
            <div>Linea block number: {Number(blockNumber)}</div>
          )}
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Web3 using Consensys products.
          </p>
        </a>
      </div>
    </main>
  );
}
