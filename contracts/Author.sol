pragma solidity >=0.7.0 <0.9.0;

contract Author {
    function donate(address payable author) public payable {
        author.transfer(msg.value);
    }
}
