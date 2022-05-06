import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNfts } from "../redux/action-creators/nftActions";
import Details from "./Details";
import Item from "./Item";
import "./NftList.css";

const NftList = ({ dispatch }) => {
  const state = useSelector((state) => state);
  const handlers = state.wallet.handlers;
  const nfts = state.nft.nfts.market.tokens;
  const [hide, setHide] = useState(false);
  const [details, setDetails] = useState({ status: false, props: {} });
  useEffect(() => {
    dispatch(getNfts(state.wallet.handlers));
  }, [handlers]);
  const closeDetails = () => {
    setDetails({ status: false, props: {} });
  };
  return (
    <div>
      <div className="ancs">
        {details.status ? (
          <Details item={details.props} close={closeDetails} />
        ) : (
          ""
        )}
        <a
          className="show my"
          onClick={() => {
            setHide(true);
          }}
          href="#"
        >
          Show my nfts
        </a>
        <a
          className="show all"
          onClick={() => {
            setHide(false);
          }}
          href="#"
        >
          Show all nfts
        </a>
      </div>
      <div className="items">
        {state.nft.loading.status ? (
          <div className="loading">Loading...</div>
        ) : (
          " "
        )}
        {!hide
          ? nfts.map((item) => {
              return (
                <div
                  onClick={() => {
                    setDetails({ status: true, props: item });
                  }}
                >
                  <Item
                    props={item}
                    key={item.id}
                    onClick={() => {
                      setDetails({ status: true });
                    }}
                  />
                </div>
              );
            })
          : nfts.map((item) => {
              if (item.owner === state.wallet.accounts[0].address)
                return (
                  <div
                    onClick={() => {
                      setDetails({ status: true, props: item });
                    }}
                  >
                    <Item
                      props={item}
                      key={item.id}
                      onClick={() => {
                        setDetails({ status: true });
                      }}
                    />
                  </div>
                );
            })}
      </div>
    </div>
  );
};
export default NftList;
