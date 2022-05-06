import { connectWallet } from "../redux/action-creators";
import ConnectButton from "./ConnectButton";
import "./Header.css";
const Header = ({ dispatch }) => {
  const wallet = localStorage.getItem("wallet");
  return (
    <div className="header">
      <a href="/nftlist" className="btn nft-list">
        nft list
      </a>
      <a href="/mint" className="btn mint">
        mint nft
      </a>
      <ConnectButton
        className="connect"
        onClick={() => {
          dispatch(connectWallet());
        }}
        wallet={wallet}
      />
    </div>
  );
};
export default Header;
