import React, { useEffect, useState } from "react";
import { firestore, auth } from "../../data/firebase";

function UserCount() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        // Get the total number of users in Firebase Authentication
        const users = await auth.listUsers();
        const totalUsers = users.users.length;

        // Count the number of documents in the "users" collection in Firestore
        const userCollection = firestore.collection("users");
        const querySnapshot = await userCollection.get();
        const firestoreUserCount = querySnapshot.size;

        // Set the total user count in Firestore
        userCollection.doc("total_users").set({ count: firestoreUserCount });

        setUserCount(totalUsers);
      } catch (error) {}
    };

    fetchUserCount();
  }, []);

  return (
    <div className="text-gray-500">
      <p className="text-xs">{userCount}</p>
    </div>
  );
}

export default UserCount;
