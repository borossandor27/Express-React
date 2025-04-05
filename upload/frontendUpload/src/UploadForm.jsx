import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('audio', file);

    try {
      const res = await axios.post('http://localhost:3001/upload', formData);
      setMessage(`Sikeres feltöltés: ${res.data.filename}`);
    } catch (err) {
        const errorMessage = err?.response?.data?.error || err?.message || 'Hiba történt a feltöltés során.';
        setMessage(errorMessage);
      }
      
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        accept="audio/mpeg"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Feltöltés</button>
      <p>{message}</p>
    </form>
  );
};

export default UploadForm;
