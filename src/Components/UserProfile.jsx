import React from 'react';
import { useParams } from 'react-router-dom';

// Mock dataset with user details
const users = [
  { id: 'abc123', name: 'John Doe', email: 'john.doe@example.com', age: 29 },
  { id: 'xyz789', name: 'Jane Smith', email: 'jane.smith@example.com', age: 34 },
  { id: 'def456', name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 42 },
  // Add more user objects if necessary
];

const UserProfile = () => {
  const { id } = useParams(); // Get the user ID from the URL

  // Find the user by ID from the dataset
  const user = users.find((user) => user.id === id);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6">
       Profile: The Shadow
Name: The Shadow
Alias: The Phantom Thief
Age: 35
Crimes: Museum Heist, Bank Robbery, Jewel Theft
Last Seen: Somewhere in Europe, disappearing into the night
Description:
The Shadow is a legend in the world of crime, a name whispered among those in the underground and feared by authorities worldwide. His real identity remains a mystery, but what is known is that he has never failed in a heist. From grand museums to the most secure banks, The Shadow leaves no trace except his signature: a single black feather left at the scene of each crime.

With a reputation for meticulous planning and flawless execution, The Shadow is known for his charm, wit, and ability to blend into any crowd. He is a master of disguise, capable of assuming new identities at will, and has the uncanny ability to disappear in the blink of an eye. No vault is too secure, and no gemstone too valuable for him to target.
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">User Profile</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">Name: {user.name}</p>
          <p className="text-lg text-gray-600 mb-2">Email: {user.email}</p>
          <p className="text-lg text-gray-600">Age: {user.age}</p>
        </div>
      ) : (
        <h1 className="text-4xl font-bold text-red-600">User Not Found</h1>
      )}
    </div>
  );
};

export default UserProfile;
