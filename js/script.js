"use strict";

const searchBlock = document.querySelector('.searc-block'),
    searchCross = document.querySelector('.search-cross'),
    searchSolid = document.querySelector('.search-solid-general');

function showSearch() {
    searchBlock.classList.toggle('search-active');
}

searchCross.onclick = function () {
    searchBlock.classList.toggle('search-active');
};

searchSolid.onclick = function () {
    showSearch();
};
