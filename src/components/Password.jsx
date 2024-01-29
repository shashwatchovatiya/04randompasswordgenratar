// import React, { useState } from 'react';

// const generateRandomPassword = (length, includeNumbers, includeSpecialChars) => {
//   const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//   const numbers = '0123456789';
//   const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

//   let characters = `${uppercaseLetters}${lowercaseLetters}`;

//   if (includeNumbers) characters += numbers;
//   if (includeSpecialChars) characters += specialChars;

//   let password = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     password += characters.charAt(randomIndex);
//   }

//   return password;
// };

// const PasswordGenerator = () => {
//   const [password, setPassword] = useState('');
//   const [length, setLength] = useState(12);
//   const [includeNumbers, setIncludeNumbers] = useState(true);
//   const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

//   const handleGeneratePassword = () => {
//     const newPassword = generateRandomPassword(length, includeNumbers, includeSpecialChars);
//     setPassword(newPassword);
//   };

//   return (
//     <div>
//       <h2>Password Generator</h2>
//       <div>
//         <label>Password Length:</label>
//         <input
//           type="number"
//           value={length}
//           onChange={(e) => setLength(Math.max(1, parseInt(e.target.value, 10)))}
//         />
//       </div>
//       <div>
//         <label>Include Numbers:</label>
//         <input
//           type="checkbox"
//           checked={includeNumbers}
//           onChange={() => setIncludeNumbers(!includeNumbers)}
//         />
//       </div>
//       <div>
//         <label>Include Special Characters:</label>
//         <input
//           type="checkbox"
//           checked={includeSpecialChars}
//           onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
//         />
//       </div>
//       <button onClick={handleGeneratePassword}>Generate Password</button>
//       {password && (
//         <div>
//           <h3>Generated Password:</h3>
//           <p>{password}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PasswordGenerator;

