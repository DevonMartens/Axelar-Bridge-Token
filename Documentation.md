The payload passed to callContract (and ultimately to the _execute and _executeWithToken) has type bytes. Use the ABI encoder/decoder convert your data to bytes.

Example of payload encoding in JavaScript (using ethers.js):

```

const { ethers } = require("ethers");

// encoding a string
const payload = ethers.utils.defaultAbiCoder.encode(
  ["string"],
  ["Hello from contract A"]
);
```

Example of payload decoding in Solidity:

```
function _execute(
    string memory sourceChain,
    string memory sourceAddress,
    bytes calldata payload
) internal override {
    // decoding a string
    string memory _message = abi.decode(payload, (string));
}
```

More information: 

`https://docs.axelar.dev/dev/build/solidity-utilities`