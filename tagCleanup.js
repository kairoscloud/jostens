const admin = require("firebase-admin");
const serviceAccount = require("./key.json"); // Path to firebase credentials
const fs = require("fs");
const path = require("path");
const filePath = "contactsList.json";

admin.initializeApp({
  // no credentials for you to see!
});

const firestore = admin.firestore();
const tokensRef = firestore.collection("tokens");
const ghlTokensRef = firestore.collection("ghl_auth");

(async () => {
  let locationID = "0vJYiUapFACpjoI87VYy";
  let locationAccessKey = await getLocationAccessKey(locationID);

  let contacts = await getContacts("", locationID);
  // console.log(contacts);

  for (let i = 0; i < contacts.length; i++) {
    await sleep(200); // to avoid rate limiting
    // find contact with the same first and last name that has a tag
    // if found, add that tag to the contact without a tag
    let contact = contacts[i];
    let firstName = contact.firstName || "";
    let lastName = contact.lastName || "";
    let dateAdded = contact.dateAdded || "";
    let matchingContact = await getNamedContact(
      dateAdded,
      firstName,
      lastName,
      locationID,
    );
    if (
      matchingContact &&
      matchingContact.tags &&
      matchingContact.tags.length > 0
    ) {
      let tagToAdd = matchingContact.tags[0];
      console.log(
        `Adding tag ${tagToAdd} to contact ${contact.id} (${firstName} ${lastName})`,
      );
      await addTagToContact(contact.id, tagToAdd);
    }
  }

  async function getContacts(tag, locationID, gottenContacts, total) {
    if (!gottenContacts) {
      gottenContacts = 0;
    }

    if (!total) {
      total = 0;
    }

    let pageLimit = 500;

    if (total != 0 && total - gottenContacts < 500) {
      pageLimit = total - gottenContacts;
    }
    const url = "https://services.leadconnectorhq.com/contacts/search";
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + locationAccessKey,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      }, // the max is 500
      body: `{
      "searchAfter" : ${gottenContacts},
      "pageLimit" : ${pageLimit},
      "locationId" : "${locationID}",
      "filters" : [
        {
            "field": "tags",
            "operator": "not_exists"
        }
        ]
      }`,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data);
      let contactsList = data.contacts;
      // console.log("fetched so far: ", gottenContacts + contactsList.length);
      // console.log("total:", data.total);

      if (gottenContacts + contactsList.length < data.total) {
        return contactsList.concat(
          await getContacts(
            tag,
            locationID,
            gottenContacts + contactsList.length,
            data.total,
          ),
        );
      }

      return contactsList;
    } catch (error) {
      console.error(error);
      return []; // Return empty array on error to prevent breaking recursion
    }
  }

  async function addTagToContact(contactID, tag) {
    const url = `https://services.leadconnectorhq.com/contacts/${contactID}/tags`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${locationAccessKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: `{"tags":["${tag}"]}`,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getNamedContact(
    dateAdded,
    firstName,
    lastName,
    locationID,
    gottenContacts,
    total,
  ) {
    if (!gottenContacts) {
      gottenContacts = 0;
    }

    if (!total) {
      total = 0;
    }

    let pageLimit = 500;

    if (total != 0 && total - gottenContacts < 500) {
      pageLimit = total - gottenContacts;
    }
    const url = "https://services.leadconnectorhq.com/contacts/search";
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + locationAccessKey,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      }, // the max is 500
      body: `{
      "searchAfter" : ${gottenContacts},
      "pageLimit" : ${pageLimit},
      "locationId" : "${locationID}",
      "filters": [
          {
            "group": "AND",
            "filters": [
              {
                "field": "firstNameLowerCase",
                "operator": "eq",
                "value": "${firstName.toLowerCase()}"
              },
              {
                "field": "lastNameLowerCase",
                "operator": "eq",
                "value": "${lastName.toLowerCase()}"
              }
            ]
          }
        ]
      }`,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data);
      let contactsList = data.contacts;
      // return whichever contact has tags
      for (let i = 0; i < contactsList.length; i++) {
        if (contactsList[i].tags && contactsList[i].tags.length > 0) {
          return contactsList[i];
        }
      }
      // otherwise, try to find a contact with just the first name
      return await getFirstNameContact(dateAdded, firstName, locationID);
    } catch (error) {
      console.error(error);
      return []; // Return empty array on error to prevent breaking recursion
    }
  }

  async function getFirstNameContact(
    dateAdded,
    firstName,
    locationID,
    gottenContacts,
    total,
  ) {
    if (!gottenContacts) {
      gottenContacts = 0;
    }

    if (!total) {
      total = 0;
    }

    let pageLimit = 500;

    if (total != 0 && total - gottenContacts < 500) {
      pageLimit = total - gottenContacts;
    }
    const url = "https://services.leadconnectorhq.com/contacts/search";
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + locationAccessKey,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      }, // the max is 500
      body: `{
      "searchAfter" : ${gottenContacts},
      "pageLimit" : ${pageLimit},
      "locationId" : "${locationID}",
      "filters": [
          {
            "group": "AND",
            "filters": [
              {
                "field": "firstNameLowerCase",
                "operator": "eq",
                "value": "${firstName.toLowerCase()}"
              },
              {
                "field": "lastNameLowerCase",
                "operator": "not_exists"
              }
            ]
          }
        ]
      }`,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data);
      let contactsList = data.contacts;
      // return whichever contact has tags

      // if (contactsList.length > 2) {
      //   console.log(`Multiple matches found for ${firstName}, aborting`);
      //   console.log("dateAdded, ", dateAdded);
      //   return null;
      // }

      for (let i = 0; i < contactsList.length; i++) {
        if (contactsList[i].tags && contactsList[i].tags.length > 0) {
          // if dateAdded is within 5 seconds of each other, return this contact
          let contactDate = new Date(contactsList[i].dateAdded);
          let originalDate = new Date(dateAdded);
          let timeDiff = Math.abs(contactDate - originalDate);
          if (timeDiff < 5000) {
            return contactsList[i];
          }
        }
      }
      console.log("No matching contact found for ", firstName);
      return null;
    } catch (error) {
      console.error(error);
      return []; // Return empty array on error to prevent breaking recursion
    }
  }
})();

async function getLocationAccessKey(loc) {
  try {
    const doc = await tokensRef.doc(loc).get();
    if (!doc.exists) {
      console.log("Could not get location access key: invalid locationID");
      return null;
    } else {
      const data = doc.data();
      return data.locationAccessToken;
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

async function saveFile(data, filePath) {
  try {
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write updated history back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
