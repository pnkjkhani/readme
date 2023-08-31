// import formidable from 'formidable';
// import fs from 'fs/promises';
// import path from 'path';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const form = new formidable.IncomingForm();

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       return res.status(500).json({ error: 'File upload error' });
//     }

//     const uploadedFile = files.file;

//     // Save the file to a location on the server
//     const newPath = path.join(process.cwd(), 'public/uploads', uploadedFile.name);
//     await fs.rename(uploadedFile.path, newPath);

//     return res.status(200).json({ message: 'File uploaded successfully' });
//   });
// }
