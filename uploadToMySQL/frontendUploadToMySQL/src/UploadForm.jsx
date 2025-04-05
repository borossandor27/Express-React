import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [album, setAlbum] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message before upload
    if (!album) {
      setMessage('Kérjük, adja meg az album nevét.');
      return;
    }
    if (!file) return;

    const formData = new FormData();
    formData.append('audio', file);
    formData.append('album', album);
    formData.append('comment', comment);

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
      <input type="text" placeholder="Album neve" value={album} onChange={(e) => setAlbum(e.target.value)} required />
      <textarea placeholder="Megjegyzés" value={comment} onChange={(e) => setComment(e.target.value)} />
      <input type="file" accept="audio/mpeg" onChange={(e) => setFile(e.target.files[0])} required />
      <button type="submit">Feltöltés</button>
      <p>{message}</p>
    </form>
  );
};

export default UploadForm;
