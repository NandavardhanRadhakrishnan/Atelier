pragma solidity >=0.7.0 <0.9.0;

contract Post {
    // address to img, address of author who posted, title
    struct PostStruct {
        address author;
        string title;
        string ipfs;
    }
    PostStruct[] public posts;

    function addPost(string memory _title, string memory _imgAddress) public {
        posts.push(PostStruct(msg.sender, _title, _imgAddress));
    }
}
