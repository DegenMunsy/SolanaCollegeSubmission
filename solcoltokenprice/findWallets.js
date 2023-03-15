// app.js
const mintsApiUrl = "https://rest-api.hellomoon.io/v0/nft/mints-by-owner";
const collectionApiUrl = "https://rest-api.hellomoon.io/v0/nft/collection/name";
const accessToken = "db98e2f3-6d3b-48a2-8cc6-7e6d20b1e684";

const mintsForm = document.querySelector("#mints-form");
const mintsCollectionIdInput = document.querySelector("#mints-collection-id");
const mintsLimitInput = document.querySelector("#mints-limit");
const mintsPageInput = document.querySelector("#mints-page");
const mintsApp = document.getElementById("mints-app");

mintsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        helloMoonCollectionId: mintsCollectionIdInput.value,
        limit: mintsLimitInput.value,
        page: mintsPageInput.value,
    };

    fetch(mintsApiUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            mintsApp.innerHTML = data.data.map((mint) => mint.ownerAccount + ",").join("<br>");
        })
        .catch((error) => console.log(error));
});

const collectionForm = document.querySelector("#collection-form");
const collectionNameInput = document.querySelector("#collection-name");
const collectionApp = document.getElementById("collection-app");

collectionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        collectionName: collectionNameInput.value,
    };

    fetch(collectionApiUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let html = "";
            data.data.forEach((collection) => {
                html += `<div>${collection.id}: ${collection.collectionName}</div>`;
            });
            collectionApp.innerHTML = data.data.map((collection) => `${collection.helloMoonCollectionId}: ${collection.collectionName}`).join("<br>");

        })
        .catch((error) => console.log(error));
});
