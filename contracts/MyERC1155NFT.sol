// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC1155NFT is ERC1155, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC1155("") {}

    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
    {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function mintNFT(address recipient, string memory _tokenURI)
        public
        // onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId, 1, "");
        _setTokenURI(newItemId, _tokenURI);
        return newItemId;
    }
}
